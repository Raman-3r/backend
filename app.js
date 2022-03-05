const express=require('express');
const app=express();
const cookieParser=require("cookie-parser")
app.use(express.json())
app.use(cookieParser())
//product route import
const productRoute=require('./routes/productRoute');
app.use("/api/v1",productRoute)
//middleware for error
module.exports=app;