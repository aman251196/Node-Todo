const {MongoClient,ObjectID} = require('mongodb');
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client) => {
    if(err){
        return console.log('Unable to connect to the Server');
    }
    console.log('Connected to the server');
    const db = client.db('TodoApp');
    db.collection('Users').find({
        name : 'Aman'
    }).count().then((count,err) => {
        if(err)
            return console.log('Unable to fetch the Todos.');
        console.log('Todos with name : Aman' , count);
    });
    db.close();
});