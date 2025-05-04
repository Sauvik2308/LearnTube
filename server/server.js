import express from 'express';
import cors from 'cors';
import "dotenv/config";
import { clerkWebhooks } from './controllers/webHooks.controller.js';
import connectDB from './configs/mongodb.js';
import educatorRouter from './routes/educator.routes.js';
import { clerkMiddleware } from '@clerk/express';
import connectCloudinary from './configs/cloudinary.js';

// Initialize Express
const app = express()

// Connect to database
await connectDB()
await connectCloudinary()

// Middlewares
app.use(cors())
app.use(clerkMiddleware())

// Routes
app.get('/', (req, res) => {
    res.send("API Working")
})
app.post('/clerk', express.json(), clerkWebhooks)
app.use('/api/educator', express.json(), educatorRouter)

// Port
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`App Listening on Port ${PORT}`);
    
})

