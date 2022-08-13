import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';

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
