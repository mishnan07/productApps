import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import userRoute from './Routes/userRoute.js';

const app = express();

app.use(express.json({ limit: '30mb', extended: true }));
app.use(express.urlencoded({ limit: '30mb', extended: true }));

// Use cors middleware with credentials option
app.use(cors({
  origin: 'https://product-apps-frontend.vercel.app',
  methods: 'GET, POST, PUT, DELETE',
  headers: 'Content-Type',
  credentials: true,  // Add this line
}));

app.use(express.static('public'));
dotenv.config();

app.use('/', userRoute);

const PORT = process.env.PORT;
const DATABASE_URL = process.env.DATABASE_URL;

mongoose.connect(DATABASE_URL, {
  useCreateIndex: true,
  useFindAndModify: false,
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    app.listen(PORT, () => console.log('Server is Running .....'));
  })
  .catch((err) => {
    console.log('Database not connected:', err);
  });
