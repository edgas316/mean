var mongoose = require('mongoose')

module.exports = new mongoose.Schema({
    profile: {
        username: {
            type: String,
            required: true,
            lowercase: true
        },
        picture: {
            type: String,
            required: true,
            match: /^http\/\//i
        }
    },
    data: {
        oauth: { type: String, required: true}, // this allows to login with facebook
        cart: [{
            product: {
                type: mongoose.Schema.Types.ObjectId
            },
            quantity: {
                type: Number,
                dafault: 1,
                min: 1
            }
        }]
    }
});

// if you want to hide some information from public qhile making query to DB
// use the following example...
// db.users.findOne({}, {data:0})
// will return this:
//{
//    "_id": ObjectId("as0df87asdf89sadf0987"),
//    "profile": {
//        "username":"val"
//    }
//}

// but if you don't pass any parameters to findOne() you will have this...
// db.users.findOne()
// will return this:
//{
//    "_id": ObjectId("as0df87asdf89sadf0987"),
//    "profile": {
//        "username":"val"
//    },
//    "data": {
//        "oauth": "123" // which is sensitive info...!!!
//    }
//}