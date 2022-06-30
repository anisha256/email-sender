const express = require('express');
const cors = require('cors');
require('dotenv').config({ path: './config.env' });

const connectDb = require('./utils/db');

connectDb();
const app = express();
const PORT = process.env.PORT || 5001;

app.use(express.urlencoded({ extended: false }));
app.use(cors());

const server = app.listen(PORT, () => {
  console.log(`server is running on port :${PORT}`);
});
//handle crash
process.on('unhandledRejection', (err) => {
  console.log(`logged Error :${err}`);
  server.close(() => {
    process.exit(1);
  });
});
