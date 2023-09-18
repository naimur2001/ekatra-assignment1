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

const datas=JSON.parse(fs.readFileSync("Data.json","utf-8"));

app.get("/todos", async (rer,res)=>{
  try {
     res.send(datas)
  } catch (error) {
    console.log(error.message);
    res.send({message:error.message})
  }
})
