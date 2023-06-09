const {database} = require('../config/db');

const employeeCollection = database.collection("employee");

const addData = async(req, res)=>{
    const data = req.body;
    await employeeCollection.insertMany(data);
    res.send({message:"data added successfully..."});
}
const getData = async(req, res)=>{
    const data = await employeeCollection.find({}).toArray();
    res.json(data);
}
const getSalaryData = async(req, res)=>{
    const data = await employeeCollection.find({salary:{$gt:"30000"}}).project({salary:1}).toArray();
    res.json(data);
}
const getExpData = async(req, res)=>{
    const data = await employeeCollection.find({overallExp:{$gt:"2"}}).toArray();
    res.json(data);
}
const getGradExpData = async(req, res)=>{
    const data = await employeeCollection.find({overallExp:{$gt:"1"}}, {yearGrad:{$gt:"2015"}}).toArray();
    res.json(data);
}
const updateSalary = async(req,res)=>{
    const newSalary = req.body;
    console.log(newSalary);
    await employeeCollection.updateMany({salary:{$gte:'25000'}}, {$set:newSalary});
    res.send({message:'new salary updated successfully...'})
}
const deleteData = async(req,res)=>{
    const receivedQuery = req.body;
    console.log(receivedQuery);
    await employeeCollection.deleteMany(receivedQuery);
    res.send({message:'data deleted successfully...'})
}

module.exports={getData, getSalaryData, getExpData, getGradExpData, updateSalary, deleteData, addData};