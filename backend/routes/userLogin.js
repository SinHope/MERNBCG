// import express from 'express';
// import bcrypt from 'bcryptjs';
// import User from './models/User';

// const UserLogin = express.Router();



// UserLogin.post('/login', async (req, res) => {
//     const { username, password } = req.body;
  
//     try {
//       // Check for user by username
//       const user = await User.findOne({ username });
//       if (user && await user.matchPassword(password)) {
//         res.json({
//           _id: user._id,
//           username: user.username,
//           // Generate a token or perform other login success actions
//         });
//       } else {
//         res.status(401).json({ message: 'Invalid email or password' });
//       }
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ message: 'Server error' });
//     }
//   });

// export default UserLogin;


// THIS FILE NOT TO BE USED TEMPORARILY DUE TO TOO MANY BUGS NEED TO MIGRATE TO GOOGLE GIS