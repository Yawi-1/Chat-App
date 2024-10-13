import express from 'express';
const router = express.Router();
import { sendMessage,getMessage } from '../controllers/messageControllers.js';
import protectedRoute from '../middleware/protectedRouted.js';

router.post('/send/:id',protectedRoute,sendMessage)
router.get('/:id',protectedRoute,getMessage)




export default router;