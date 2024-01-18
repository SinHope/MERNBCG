// import express from 'express';
// import bcrypt from 'bcryptjs';
// import User from './models/User'; 

// const router = express.Router();

// router.post('/Register', async (req, res) => {
//   const { username, password } = req.body;

//   try {
//     const hashedPassword = await bcrypt.hash(password, 10);

//     const newUser = new User({
//       username,
//       password: hashedPassword
//       // add other fields as necessary
//     });

//     await newUser.save();

//     res.status(201).json({ message: 'User registered successfully' });
//   } catch (error) {
//     res.status(500).json({ message: 'Error registering new user' });
//   }
// });

// export default router;


// THIS FILE NOT TO BE USED TEMPORARILY DUE TO TOO MANY BUGS NEED TO MIGRATE TO GOOGLE GIS