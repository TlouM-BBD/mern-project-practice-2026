
import dotenv from "dotenv";
dotenv.config();
import express from 'express';
import cors from 'cors';
const PORT = process.env.PORT || 3000;
const app = express();

import { connectDB } from "./db/connectDB.js";
import GamesRoute from './routes/gameRoutes.js';

app.use(cors());
app.use(express.json()); // Use express.json() for parsing JSON bodies


// Route Middleware
app.use('/games', GamesRoute);
connectDB()


app.listen(PORT, () => console.log(`Listening on port ${PORT}`));