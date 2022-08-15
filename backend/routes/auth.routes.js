import express from 'express';
import { signup, signin, googleAuth } from '../controllers/auth.controllers.js';

const router = express.Router();

// Create/SignUp User 
router.post('/signup', signup);

// Sign In
router.post('/signin', signin);

// Google Auth
router.post('/google', googleAuth);

export default router;
