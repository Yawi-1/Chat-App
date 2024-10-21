import jwt from 'jsonwebtoken'
import User from '../models/userModels.js';
const protectedRoute = async (req, res, next) => {
    try {
        console.log("Chekc krahah hu:",req.cookies)
      const token = req.cookies.jwt;
      if (!token) {
        console.log("No token found in cookies");
        return res.status(401).json({ error: 'Unauthorized by middleware' });
      }
  
  
      const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
      if (!decoded) {
        console.log("Invalid token");
        return res.status(401).json({ error: 'Invalid token' });
      }
  
      console.log("Token decoded:", decoded);
  
      const user = await User.findById(decoded.userId).select("-password");
      if (!user) {
        console.log("User not found");
        return res.status(401).json({ error: 'User not found' });
      }
  
      req.user = user;
      next();
  
    } catch (error) {
      console.log('Error at protectedRoute: ', error);
      return res.status(500).json({ error: 'Internal server error' });
    }
  };

  export default protectedRoute;
  