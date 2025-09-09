import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';


const app = express();

app.use(cookieParser());
app.use(cors({
    origin: ['http://localhost:3000', 'https://poruch.vercel.app'],
    credentials: true,
}));
app.use(express.json());

export default app;