const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

//Express

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=> console.log(`Server started on port ${PORT}`));

//Mongoose 

mongoose.connect(process.env.MONGODB_CONNECTION_STRING,{useNewUrlParser:true, useUnifiedTopology:true, useCreateIndex:true}, (err)=>{
    if (err) throw err;
    console.log("MongoDB connection established ");
});

if (process.enc.NODE_ENV ==="production"){
    app.use(express.static("mern-front-end/build"))
}

//set up route

app.use("/users", require("./routes/userRouter"));

