const {TodosModel}= require('../confiugeDB/connectMongodb');

async function getTodoList(){
    let result = await TodosModel.find()
    return result;
}
async function updateTodoList(id, complete){
    let result = await TodosModel.findOneAndUpdate({id: id}, {completed: complete},{ new: true });
    return result;
}
async function postTodoList(obj){
    let result = await TodosModel.create({...obj});
    return result;
}
async function deleteTodoList(id){
    let result = await TodosModel.deleteOne({ id: id });
    return result;
}
module.exports = {
    getTodoList,
    updateTodoList,
    postTodoList,
    deleteTodoList
}