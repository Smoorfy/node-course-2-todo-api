const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', {
    useNewUrlParser: true
}, (err, client) => {
    if (err) {
       return console.log('Unable to connect to MongoDB server');
    }    
    console.log('Connected to MongoDB server');

    const db = client.db('TodoApp')

    // db.collection('Todos').find({
    //     _id: new ObjectID('5c738008f38a83234436a3d6')
    // }).toArray().then((data)=> {
    //     console.log(JSON.stringify(data,undefined,2));
    // }, (err) => {
    //     console.log('Unable to fetch Todos ',err);
    // })

    db.collection('Users').find({
        name:'Dima'
    }).toArray().then((data) => {
        console.log(JSON.stringify(data, undefined, 2));
    }, (err) => {
        console.log(err);
    })

    // client.close();

});