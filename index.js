const express=require("express");
const cors=require("cors");
const cron=require("node-cron");
const app=express();
const fs=require("fs");
const port =process.env.PORT || 5000 ;
//middleware
app.use(express.json());
app.use(cors());

app.get("/",(req,res)=>{
  res.send("Todo List Server is Running.");
})

app.listen(port,()=>{

  console.log(`Server's Port is : ${port}`)

 })