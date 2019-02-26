const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', {
    useNewUrlParser: true
}, (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    const db = client.db('TodoApp')

    // DELETE MANY
    // db.collection('Todos')
    //     .deleteMany({
    //         text: "Eat lunch"
    //     }).then((result) => {
    //         console.log(JSON.stringify(result, undefined, 2));
    //     }, (err) => {
    //         cosnsole.log('Unable to delete many', err)
    //     });

    // DELETE ONE
    // db.collection('Todos')
    //     .deleteOne({
    //         text: "Eat lunch"
    //     }).then((result) => {
    //         console.log(JSON.stringify(result, undefined, 2));
    //     }, (err) => {
    //         cosnsole.log('Unable to delete one', err)
    //     });

    // FIND ONE AND DELETE
    // db.collection('Todos')
    //     .findOneAndDelete({
    //         text: "Eat lunch"
    //     }).then((result) => {
    //         console.log(JSON.stringify(result, undefined, 2));
    //     }, (err) => {
    //         cosnsole.log('Unable to find one and delete', err)
    //     });

    db.collection('Users')
        .deleteMany({
            name: 'Groovie'
        });

    db.collection('Users')
        .findOneAndDelete({
            _id: ObjectID('5c73161f2a87cb2bb4e49fb4')
        }).then((result) => {
            console.log(JSON.stringify(result.value,undefined,2));
        }, (err) => {
            console.log('Unable to find one and delete ',err);
        })

    // client.close();

});