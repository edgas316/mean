var mongoose = require('mongoose');

module.exports = function (wagner) {
    mongoose.connect('mongodb://localhost:27019/test');
    
    var Category = model('Category', require('./category'), 'categories');
    
    wagner.factory('Category', function () {
        return Category
    });
    
    return {
        Category: Category
    };
};