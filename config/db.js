const { MongoClient } = require("mongodb");
const uri="mongodb://127.0.0.1:27017";
const mongoClient = new MongoClient(uri);

try{
    mongoClient.connect();
    console.log("connected with the DataBase");
}
catch(err){
    console.log(err);
}
const database = mongoClient.db("Human_Resource");
console.log('done...');

module.exports={database};