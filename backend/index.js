import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import authRouter from './routes/auth.routes.js'
import userRouter from './routes/user.routes.js';
import videoRouter from './routes/video.routes.js';
import commentRouter from './routes/comment.routes.js';

const app = express();
dotenv.config();

const port = 5000 || process.env.PORT;

mongoose
  .connect(process.env.MONGO_DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(port, () => console.log(`Server listening at port ${port}...`))

    console.log('MongoDB successfully connected!')
  })
  .catch((err) => {
    throw err;
  });

app.use(cookieParser());
app.use(express.json());

app.use('/api/auth', authRouter);
app.use('/api/users', userRouter);
app.use('/api/videos', videoRouter);
app.use('/api/comments', commentRouter);

app.use((err, req, res, next) => {
    const status = err.status || 500;
    const message = err.message || 'Something went wrong!!!';

    return res.status(status).json({
        success: false,
        status,
        message
    });
});
