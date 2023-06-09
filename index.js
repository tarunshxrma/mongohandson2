const express = require("express");
const userRouter=require("./routes/employee")

const app=express();

app.use(express.json());
app.get('/',(req,res)=>{
    res.send({message:"Thisis the Homepage..."})
})
app.use('/api', userRouter);

app.listen(4040,()=>{
    console.log("server is running to the port 4040.");
})