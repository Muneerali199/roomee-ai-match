import { Router } from 'express';
import { getProfile, updateProfile } from '../controllers/userController.js';
import { authenticate } from '../middleware/authMiddleware.js';

const router = Router();
router.get('/profile', authenticate, getProfile);
router.put('/profile', authenticate, updateProfile);
export default router;