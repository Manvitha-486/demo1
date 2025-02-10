const express=require("express");
const port=3005;
const cors = require("cors")


const app=express();
app.use(express.json());


app.get('/',(req,res)=>{
    res.send("hello world");s
})

app.post('/',(req,res)=>{
    const {name,age}=req.body;
    if(!name)
        return res.status(400).send({message:"wrong data"});
    if(age<5)
        return res.status(400).send({message:"underage"});
    return res.status(200).send({message:"success"});
})


app.listen(port,()=>{
    console.log(`server connected successfully at ${port}`);
});