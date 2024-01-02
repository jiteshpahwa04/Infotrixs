const express = require("express");
const app = express();
const queryRoter = require("./routes/quotes");
require("dotenv").config();

const connectDB = require("./database/index");
connectDB();

app.use(express.json());

app.use("/api/v1",queryRoter);

const PORT = process.env.PORT || 4000;

app.listen(PORT, ()=>{
    console.log(`Listening on port: ${PORT}`);
})