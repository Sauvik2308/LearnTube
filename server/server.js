import express from 'express';
import cors from 'cors';
import "dotenv/config";
import { clerkWebhooks } from './controllers/webHooks.controller.js';
import connectDB from './configs/mongodb.js';

// Initialize Express
const app = express()

// Connect to database
await connectDB()

// Middlewares
app.use(cors())

// Routes
app.get('/', (req, res) => {
    res.send("API Working")
})
app.post('/clerk', express.json(), clerkWebhooks)

// Port
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`App Listening on Port ${PORT}`);
    
})

