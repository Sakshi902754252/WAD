const dbConnect = require('./mongo')
const express = require('express');
const app = express();
app.use(express.json());
//get api
app.get('/',async(req,res)=>{
let result = await dbConnect();
result = await result.find().toArray();
res.send(result);
})

//post api
app.post('/', async (req, res) => {
    let result = await dbConnect();
    result = await result.insertOne(req.body);
    res.send("Data inserted Successfully");
  });
  
  //put api
  app.put('/:name', async (req, res) => {
    let result = await dbConnect();
    result = await result.updateOne({name:req.params.name},{$set:req.body});
    res.send("Data updated Successfully");
  });

  //delete api
  app.delete('/:name', async (req, res) => {
    let result = await dbConnect();
    result = await result.deleteOne({name:req.params.name});
    res.send("Data deleted Successfully");
  });

app.listen(3000);

