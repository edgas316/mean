// Schema + Connection = Model ==>> Document
var mongoose = require('mongoose')

// this is schema
var schema = require('./schema');

// this is connection
mongoose.connect('mongodb://localhost:27019/test');


// this is model - acts like a constructor...!!!
// Parameters are: model name, schema, collection name
var User = mongoose.model('User', schema, 'users');

// this is document - which is single object from a collection
// creation of the document
var user = new User({
    name: "Johm Smith",
    email: "john@smith.io"
});

// saving of the document
user.save(function (error) {
    if(error){
        console.log(error);
        process.exit(1)
    }
    // Quering the document from a DB
    User.find({ email: 'john@smith.io' }, function (error, docs) {
        if(error) {
            console.log(error);
            process.exit(1)
        }
        console.log(require('util').inspect(docs))
        process.exit(0)
    })
})
// this will paiste 5.000.000 titles into books collecion 
// for (var i = 0; i < 5000000; ++i) { db.books.insert({title: '' + i});}
// this will create index in names collection for name field
// db.books.createIndex({ title: 1 })

// will paiste 5.000.000 titles into books collecion with array of values for each title
// for (var i = 0; i < 5000000; ++i) { db.books.insert({title: ['' + i]});}
// this will create multykey index for every single array in every single document
// db.books.createIndex({ title: 1 })
