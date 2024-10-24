import jwt from 'jsonwebtoken'

const protectedRoute = async (req, res, next) => {

    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ error: 'Unauthorized, no token provided' });
    }
    const token = authHeader.split(' ')[1];
    try {
    const decoded = jwt.verify(token,process.env.JWT_SECRET_KEY);
    
    req.user = decoded;
    next();
  } 
  catch (error) {
    return res.status(401).json({ error: 'Unauthorized, invalid token' });
  }

}
  
export default protectedRoute;
  