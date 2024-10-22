import jwt from 'jsonwebtoken'
import User from '../models/userModels.js';
const protectedRoute = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;
    console.log('JWT token in cookie:', token);
    if (!token) {
      console.log("No token found in cookies");
      return res.status(401).json({ error: 'Unauthorized by middleware' });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    console.log("Token decoded:", decoded);
    if (!decoded) {
      console.log("Invalid token");
      return res.status(401).json({ error: 'Invalid token' });
    }

    const user = await User.findById(decoded.userId).select("-password");
    console.log("User found:", user);
    if (!user) {
      console.log("User not found");
      return res.status(401).json({ error: 'User not found' });
    }

    req.user = user;
    next();

  } catch (error) {
    console.error('Error in protectedRoute middleware:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};


  export default protectedRoute;
  