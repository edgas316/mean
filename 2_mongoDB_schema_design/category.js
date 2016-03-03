var mongoose = require('mongoose')

var categorySchema = {
    _id: { type: String},
    parent: {
        type: String,
        ref: 'Category'
    },
    ancestors: [{
        type: String,
        ref: 'Category'
    }]
};

// Creating new Schema
module.exports = new mongoose.Schema(categorySchema);

// asigning properties to new Schema
module.exports.categorySchema = categorySchema;

// ========================================================
// To query from the DB you may use the following pattern
// db.categories.find({ ancestors: 'Electronics});

// this will return the following:
//{ "_id" : "Electronics", "ancestors": ["Electronics"]}
//{ "_id" : "Phones", "parent": "Electronics", "ancestors": ["Electronics", "Phones"] }
//{ "_id" : "Android", "parent": "Phones", "ancestors": [ "Electronics", "Phones", "Android" ] }
// ------------------------------------------------------                   
// Some more query examples
// db.categories.find({parent: 'Phones'})
                     
// will return the following:
// { "_id" : "Android", "parent": "Phones", "ancestors": [ "Electronics", "Phones", "Android" ] }
// ------------------------------------------------------
// to find ancestor category of android:
//db.categories.find({_id:'Android'})
//{ "_id" : "Android", "parent": "Phones", "ancestors": [ "Electronics", "Phones", "Android" ] }
// =========================================================

// finding all products under phone categoy:
// db.products.find({'category.ancestors': 'Phones'}).pretty();

// will give this:
//{
//    "_id": ObjectId("4108971235p91dp97xhdfks3"),
//    "name": "iPhone 6",
//    "category" : {
//        "_id" : "iOS",
//        "parent" : "Phones",
//        "ancestors" : [
//            "Electronics",
//            "Phones",
//            "Android"
//        ]
//    }
//        
//}
