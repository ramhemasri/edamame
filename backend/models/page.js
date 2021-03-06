var mongoose = require("mongoose"),
    Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var page = new Schema({
    pageID: ObjectId,
    sectionID: String,
    title: String
});

module.exports = {
    name: 'pages',
    schema: page
};