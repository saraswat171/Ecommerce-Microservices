const express = require('express');
const cors = require('cors');
require("dotenv").config();
const connectDB = require('./config/db');
//const Producer=require('./workers/Producer')
connectDB()

const app = express();
//const produce=new Producer()
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.text());
app.use(cors());


app.use('/', require('./routes'))
app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});