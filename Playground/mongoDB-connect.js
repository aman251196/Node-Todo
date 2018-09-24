//const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client) => {
    if(err){
        return console.log('Unable to connect to the Server');
    }
    console.log('Connected to the server');
    const db = client.db('TodoApp');
     db.collection('Todos').insertOne({
        text : 'Something to do',
        completed : false
    },(err,results) => {
        if(err){
            return console.log('Unable to insert Todo',err);
        }
        console.log(JSON.stringify(results.ops,undefined,2));
    }); 

     db.collection('Users').insertOne({
        name : 'Aman',
        age : 21,
        location : 'Bengaluru'
    },(err,results)=>{
        if(err){
            return console.log('Unable to insert',err);
        }
        console.log(JSON.stringify(results.ops[0]._id.getTimestamp(),undefined,2));
    }); 
    db.close();
});