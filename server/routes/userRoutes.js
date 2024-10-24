import express from 'express';
import protectedRoute from '../middleware/protectedRouted.js';
import { getAllUsers,getUser } from '../controllers/userControllers.js';

const router = express.Router();
 
router.get('/all',protectedRoute,getAllUsers)
router.get('/:id',protectedRoute,getUser)


export default router;