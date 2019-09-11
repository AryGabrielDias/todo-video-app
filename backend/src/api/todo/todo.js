const restful = require('node-restful');
const mongoose = restful.mongoose;

const todoSchema = new mongoose.Schema({
    videoId : {type : String, required : true}
});

module.exports = restful.model('Todo', todoSchema);