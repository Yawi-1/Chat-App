import User from '../models/userModels.js'
import bcrypt from 'bcryptjs'
export const signup = async (req, res) => {
  try {
    const { fullName, username, password, confirmPassword, gender } = req.body;
    let isUser = await User.findOne({username});
    if (!fullName || !username || !password || !confirmPassword || !gender) {
      return res.status(400).json({ error: "All fields are required" });
    }

    if (password !== confirmPassword) {
      return res.status(400).json({ error: "Paswords doesn't match " })
    }
    if (isUser) {
      return res.status(400).json({ error: "Username already exists" })
    }

    // Hash the password.
    const hashedPassword = await bcrypt.hash(password, 10);

    const boyProfile = `https://avatar.iran.liara.run/public/boy?username=${username}`;
    const girlProfile = `https://avatar.iran.liara.run/public/girl?username=${username}`;
    const user = await new User({
      fullName,
      username,
      password: hashedPassword,
      gender,
      profilePic: gender === "male" ? boyProfile : girlProfile,
    });
    await user.save();
    return res.status(201).json({ 
      _id: user._id, 
      fullName: user.fullName, 
      username: user.username, 
      password: user.password,
      profilePic: user.profilePic,
    })

  } catch (error) {
    console.error('Error at sign up:', error);
    return res.status(500).json({ error: "Server error during sign up" });
  }
};
export const login = (req, res) => res.send('Login');
export const logout = (req, res) => res.send('Logout');