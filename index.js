const express=require("express");

const cron=require("node-cron");
const app=express();
const fs=require("fs");
const port =process.env.PORT || 5000 ;
//middleware
app.use(express.json());


app.get("/",(req,res)=>{
  res.send("Todo List Server is Running.");
})

app.listen(port,()=>{

  console.log(`Server's Port is : ${port}`)

 })

const datas=JSON.parse(fs.readFileSync("Data.json","utf-8"));

app.get("/todos",  (rer,res)=>{
  try {
     res.send(datas)
  } catch (error) {
    console.log(error.message);
    res.send({message:error.message})
  }
})
//create todo  list
app.post("/todos/post", (req,res)=>{
try {
  const newData=req.body;
datas.push(newData);
saveToFile();
res.send(newData)
} catch (error) {
  console.log(error.message);
  res.send({message:error.message})
}
})


//writting in json file function
const saveToFile=()=>{
  fs.writeFileSync('Data.json', JSON.stringify(datas, null, 2), 'utf8');

}