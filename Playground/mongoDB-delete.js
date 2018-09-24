const { MongoClient, ObjectID } = require('mongodb');
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to the Server');
    }
    console.log('Connected to the server');
    const db = client.db('TodoApp');
   /*  //deleteMany
    db.collection('Users').deleteMany({ text: 'Sleep' }).then((results) => {
        console.log(results);
    }); */
    //deleteOne
    /* db.collection('Todos').deleteOne({name : 'Shubham'}).then((result) => {
        console.log(result);
    }); */
    //findOne and Delete
    db.collection('Users').findOneAndDelete({name : 'Shubham'}).then((result) => {
        console.log(result);
    });
    db.close();
});
