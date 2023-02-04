const mongoose = require('mongoose');

//mongo connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://127.0.0.1:27017/Todos',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

const Schema = mongoose.Schema;
const todoSchema = new Schema({
    userId: Number,
    id: Number,
    title: String,
    completed: Boolean
});
mongoose.set('strictQuery', false);
const TodosModel = mongoose.model('todolists', todoSchema);

module.exports = {
    TodosModel
};