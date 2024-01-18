import express from "express";
// import session from 'express-session'; // If using sessions
// import passport from 'passport';
// import AuthRoutes from "./auth-routes"; 
// import UserLogin from "./userRoutes"; 
import connectDB from "./dbConfig.js";
import cors from "cors";
import UserDatabase from "./models/User.js";
import jwt from "jsonwebtoken"; 
import dotenv from "dotenv";
import multer from "multer";
import path from "path";
import bcrypt from "bcryptjs";
import { fileURLToPath } from "url";

// Creating __dirname in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config(); //to connect and pull data from .env

connectDB(); // Establish database connection to MongoDB

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())

// Below is for profile page. Will call this data at my app.get below
const authenticateToken = (req, res, next) => {
    const token = req.headers.authorization.split(" ")[1];
    if (token == null) return res.sendStatus(401);

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) return res.sendStatus(403);
        req.user = user;
        next();
    });
};

// Set up multer for file storage

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, path.join(__dirname, "./upload/"));
    },
    filename: function(req, file, cb) {
        cb(null, file.fieldname + "-" + Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });

//////////////////////////////////

app.get("/",cors(),(req,res)=>{

})

app.post("/Login",async(req,res)=>{
    const{email,password}=req.body

    try{
        const check=await UserDatabase.findOne({email:email})

        if (check && await check.matchPassword(password)) {
            const token = jwt.sign({ userId: check._id, role: check.role }, process.env.JWT_SECRET, {
                expiresIn: "1d" // Token expiry
            });
            // Include the user's role in the response
            res.json({ token, role: check.role });
        } else {
            res.json("notexist");
        }

    }
    catch(e){
        res.json("fail")
    }

})

app.post("/Register",async(req,res)=>{
    
    console.log("Received data:", req.body);
    
    const{name,email,password}=req.body

    try{
        const check=await UserDatabase.findOne({email:email})

        if(check){
            res.json("exist")
        }
        else{
            await UserDatabase.create({ name, email, password });
            res.json("notexist");
            
        }

    }
    catch(e){
        console.error("Registration error:", e);
        res.json("fail");
    }

})

// Below to read the user data from database in MongoDB

app.get("/ProfilePage", authenticateToken, async (req, res) => {
    try {
        const user = await UserDatabase.findById(req.user.userId).select("-password");
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: "Error fetching user data" });
    }
});

// Below is a post method for the uploading of the image to be registered unto the user's profile page

app.post("/upload", authenticateToken, upload.single("profileImage"), async (req, res) => {
    try {
        // req.file is the uploaded file
        // Get only the relative path
        const relativeImagePath = path.join("upload", path.basename(req.file.path));

        // Update the user's profile to include the relative image file path
        const user = await UserDatabase.findByIdAndUpdate(req.user.userId, { profileImagePath: relativeImagePath }, { new: true });
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: "Error uploading image" });
    }
});

// Below is for users to edit their password

app.post("/change-password", authenticateToken, async (req, res) => {
    const { newPassword } = req.body;

    if (!newPassword) {
        return res.status(400).send("New password is required");
    }

    try {
        const salt = await bcrypt.genSalt(12);
        const hashedPassword = await bcrypt.hash(newPassword, salt);

        await UserDatabase.findByIdAndUpdate(req.user.userId, { password: hashedPassword });
        res.send("Password updated successfully");
    } catch (error) {
        res.status(500).send("Error updating password");
    }
});

// Below is for uploading of images

app.use("/upload", express.static(path.join(__dirname, "upload")));

// Below is for users to delete their account

app.delete('/delete-account', authenticateToken, async (req, res) => {
    try {
        await UserDatabase.findByIdAndDelete(req.user.userId);
        res.send('Account deleted successfully');
    } catch (error) {
        console.error("Error deleting account", error);
        res.status(500).send('Error deleting account');
    }
});

// Below codes are for admin to manage users

app.get("/admin/users", authenticateToken, async (req, res) => {
    if (req.user.role !== "admin") {
        return res.status(403).send("Access denied");
    }
    try {
        // Fetch all users but exclude sensitive information like password
        const users = await UserDatabase.find({}).select('-password');
        res.json(users);
    } catch (error) {
        console.error("Error fetching users:", error);
        res.status(500).send("Error fetching users");
    }
});

// Below code is for admin to edit users' name

app.put("/admin/users/:userId", authenticateToken, async (req, res) => {
    if (req.user.role !== "admin") {
        return res.status(403).send("Access denied");
    }

    try {
        const { name } = req.body
;
await UserDatabase.findByIdAndUpdate(req.params.userId, { name });
res.send("User name updated successfully");
} catch (error) {
console.error("Error updating user name:", error);
res.status(500).send("Error updating user name");
}
});

// Below is for admin to delete users' account

app.delete("/admin/users/:userId", authenticateToken, async (req, res) => {
    if (req.user.role !== "admin") {
        return res.status(403).send("Access denied");
    }

    try {
        await UserDatabase.findByIdAndDelete(req.params.userId);
        res.send("User deleted successfully");
    } catch (error) {
        console.error("Error deleting user:", error);
        res.status(500).send("Error deleting user");
    }
});



app.listen(5000,()=>{
    console.log("Port connected");
})