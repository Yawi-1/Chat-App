import User from '../models/userModels.js'
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken'

export const signup = async (req, res) => {
  try {
    const { fullName, username, password, confirmPassword, gender } = req.body;
    let user = await User.findOne({username});

    if (!fullName || !username || !password || !confirmPassword || !gender) {
      return res.status(400).json({ error: "All fields are required" });
    }

    if (password !== confirmPassword) {
      return res.status(400).json({ error: "Paswords doesn't match " })
    }
    if (user) {
      return res.status(400).json({ error: "Username already exists" })
    }

    // Hash the password.
    const hashedPassword = await bcrypt.hash(password, 10);

    const boyProfile = `https://avatar.iran.liara.run/public/boy?username=${username}`;
    const girlProfile = `https://avatar.iran.liara.run/public/girl?username=${username}`;

    const newUser = await new User({
      fullName,
      username,
      password: hashedPassword,
      gender,
      profilePic: gender === "male" ? boyProfile : girlProfile,
    });

    if(newUser){

      // Generate JWT token
      const token = jwt.sign({userId:user._id},process.env.JWT_SECRET_KEY,{
        expiresIn:'7d'
      })
      await newUser.save();
      return res.status(201).json({ 
        _id: newUser._id, 
        fullName: newUser.fullName, 
        username: newUser.username, 
        password: newUser.password,
        profilePic: newUser.profilePic,
        token
      })
    }
    else{
      return res.status(400).json({ error: "Failed to create user" })
    }
  } catch (error) {
    console.error('Error at sign up:', error);
    return res.status(500).json({ error: "Server error during sign up" });
  }
};

export const login = async (req, res) => {
  try{

    const {username,password} = req.body;
    if(!username || !password){
      return res.status(400).json({error:"All fields are required........!"})
    }

    const user = await User.findOne({username});
    if(!user){
      return res.status(400).json({error:"User doesn't exist"})
    }

    let isValidPassword = await bcrypt.compare(password,user.password);
    if(!isValidPassword){
      return res.status(400).json({error:"Invalid password"})
    }
        
    // Generate token
 const token = jwt.sign({userId:user._id},process.env.JWT_SECRET_KEY,{
      expiresIn:'7d'
    })
   
       return res.status(200).json({
        _id: user._id,
        fullName: user.fullName,
        username: user.username,
        profilePic: user.profilePic,
        token,
        })

  } catch(error){
    console.log('Error in login controller : ',error)
    return res.status(400).json({ error: "Invalid request" })
  }


};

export const logout = (req, res) => {
  try {
    res.clearCookie('jwt');
    return res.status(200).json({message:'Logged Out Successfully...'})
  } catch (error) {
    console.log('Error in logout controller : ',error)
    return res.status(400).json({ error: "Invalid request" })
  }
}

