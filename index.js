const express = require('express');
const { resolve } = require('path');
require('dotenv').config(); 

const isAdmin = process.env.IS_ADMIN === 'true'; 

const app = express();
const port = 3010;

app.use(express.static('static'));


app.get('/', (req, res) => {
  if (isAdmin) {
    res.json({
      message: "Welcome, Admin!",
      data: ["Admin Data 1", "Admin Data 2"]
    });
  } else {
    res.json({
      message: "Welcome, User!",
      data: ["User Data 1", "User Data 2"]
    });
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
