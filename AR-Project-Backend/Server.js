import express from 'express'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import cors from 'cors'

import { connectDB } from './db/connectDB.js'
import authRoutes from './routes/auth.route.js'

dotenv.config();

const app = express();

const PORT = process.env.PORT || 4000;

const allowedOrigins = process.env.NODE_ENV === 'production' 
    ? ['https://ankit-rautela.com'] 
    : ['http://localhost:5173']; 

app.use(cors({
  origin: allowedOrigins,
  credentials: true, 
}));

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth",authRoutes);

app.listen(PORT, () => {
    connectDB();
    console.log(`Server started running on port ${PORT}`);
});
