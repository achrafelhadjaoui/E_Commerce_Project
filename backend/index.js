// const express = require("express");
// const cors = require("cors");
// const cookieParser = require('cookie-parser')
// require("dotenv").config();
// const connectDB = require("./config/db");
// const router = require('./routes')

// const app = express();
// app.use(cors());
// app.use(express.json());
// app.use(cookieParser())

// app.use("/api", router)

// const PORT = process.env.PORT || 8080;

// connectDB().then(
//   app.listen(PORT, () => {
//     console.log("Connected to DB")
//     console.log(`Server is listning on port ${PORT}`);
//   })
// );

// app.get('/', (req, res) => {
//   console.log("it is works fine")
//   res.send("all is correct")
// })



const express = require('express');
const cookieParser = require('cookie-parser');
const connectDB = require("./config/db");
require("dotenv").config();
const cors = require("cors");
const router = require('./routes')
const app = express();

const PORT = process.env.PORT;

app.use(cors({
  origin: process.env.FRONTEND_URL,
  credentials: true
}))

app.use(express.json({ limit: '10mb' }));
app.use(cookieParser());  // Add cookie-parser
app.use("/api", router)
// Test route to check if the app works



connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log("Connected to DB");
      console.log(`Server is listening on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("DB Connection Error:", error);
    process.exit(1); // Exit the process if DB connection fails
  });

