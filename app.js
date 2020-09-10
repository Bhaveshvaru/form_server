require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');

const formRoutes = require('./routes/formRoutes');

dotenv.config({ path: './config/config.env' });

//connect to  database
const connectDB = async () => {
  const conn = await mongoose.connect(process.env.DB, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
  console.log(`MongoDB Connected`);
};
connectDB();

//Middlewares
app.use(express.json());
app.use(cors());

//My Routes
app.use('/api', formRoutes);

//PORT
const port = process.env.PORT || 8000;

//Starting a Server
app.listen(port, () => {
  console.log(`App is running on port ${port}...`);
});
