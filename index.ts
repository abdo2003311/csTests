import mongoose from 'mongoose';
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();

app.use(cors());

const PORT : string | number = process.env.PORT || 8080;
const DATABASE : string = process.env.DATABASE || "";
const PRIVATEKEY : string = process.env.PRIVATEKEY || "";

if (process.env.NODE_ENV !== 'test') {
    app.listen(PORT);
}


mongoose.connect(DATABASE);

// routes

import { urlencoded, json } from 'express';

app.use(urlencoded({extended : false}), json());
app.use(express.static('uploads'));

import articleRouter from './routes/articleRouter';
import testRouter from './routes/testRouter';
import adminRouter from './routes/adminRouter';
import userRouter from './routes/userRouter';
import upload, { respondeWithImageName } from './controllers/uploadImage';

app.post('/uploadImage/', upload.single('image'), respondeWithImageName);
app.use('/admin', adminRouter);
app.use('/api/users', userRouter);
app.use('/api/articles', articleRouter);
app.use('/api/tests', testRouter);


export { app, PRIVATEKEY, PORT };
