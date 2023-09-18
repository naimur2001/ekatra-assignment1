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
// json file parsing to read data from file
const datas=JSON.parse(fs.readFileSync("Data.json","utf-8"));

//read todo list
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
//update todo list
app.put("/todos/put/:id",(req,res)=>{
  try {
    const id=req.params.id;
    const updateData=req.body;
    const targetId=datas.findIndex(todo=>todo.id === id)
    if (targetId !== -1) {
      datas[targetId] = { ...datas[targetId], ...updateData };
      saveToFile()
      res.send(datas[targetId]);
    } else {
      res.status(404).json({ error: 'Todo not found' });
    }
  } catch (error) {
    console.log(error.message);
  res.send({message:error.message})
  }
})
app.delete("/todos/delete/:id", (req,res)=>{
  try {
    const id=req.params.id;
    const targetId = datas.findIndex(todo => todo.id === id);
  if (targetId !== -1) {
    datas.splice(targetId, 1);
    saveToFile
    res.sendStatus(201);
  } else {
    res.status(404).json({ error: 'Todo not found' });
  }
  } catch (error) {
    console.log(error.message);
    res.send({message:error.message})
  }
})

cron.schedule('0 0 * * *', () => {
  datas = datas.filter(todo => !todo.completed);
saveToFile()
  console.log('Deleted completed todos.');
});
//writting in json file function
const saveToFile=()=>{
  fs.writeFileSync('Data.json', JSON.stringify(datas, null, 2), 'utf8');

}
