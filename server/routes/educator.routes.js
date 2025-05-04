import express from 'express';
import { addCourse, updateRoleToEducator } from "../controllers/educator.controller.js";
import upload from '../configs/multer.js';
import { protectEducator } from '../middlewares/auth.middleware.js';

const educatorRouter = express.Router()

// Add Educator Role
educatorRouter.get('/update-role', updateRoleToEducator)
educatorRouter.post('/add-course', upload.single('image'), protectEducator, addCourse)

export default educatorRouter