import jwt from 'jsonwebtoken'
import User from '../models/userModels.js';

const protectedRoute = async (req, res, next) => {
    try {
        const token = req.cookies.jwt;
        if (!token) {
            return res.status(401).json({ error: 'Unauthorized' });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY)
        if (!decoded) {
            return res.status(401).json({ error: 'Invalid token' });
        }
        const user = await User.findById(decoded.userId).select("-password");
        if (!user) {
            return res.status(401).json({ error: 'User not found' });
        }
        req.user = user;
        next();

    } catch (error) {
        console.log('Error at protectedRoute : ', error)
        return res.status(500).json({ error: 'Internal server error' })
    }
}

export default protectedRoute;