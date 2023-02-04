const {
    getTodoList,
    updateTodoList,
    postTodoList,
    deleteTodoList
} =require('../models/todo.models');

let apiGetTodoList = async(req,res)=>{
    try{
        let data = await getTodoList();
        return res.json({status: true, data: data});
    }
    catch(error){
        return res.json({status: false, message: error});
    }
}
let apiUpdateTodoList = async(req,res)=>{
    try{
        let data = await updateTodoList(Number(req.body.id), req.body.complete);
        if(data){
            return res.json({status: true, message: 'Update success'});
        }
        else{
            return res.json({status: true, message: 'Update fail'});
        }
    }
    catch(error){
        return res.json({status: false, message: error});
    }
}
let apiCreateTodoList = async(req,res)=>{
    try{
        let data = await postTodoList(req.body);
        if(data){
            return res.json({status: true, message: 'Create success'});
        }
        else{
            return res.json({status: true, message: 'Craete fail'});
        }
    }
    catch(error){
        return res.json({status: false, message: error});
    }
}
let apiDeleteTodoList = async(req,res)=>{
    try{
        let data = await deleteTodoList(Number(req.params.id));
        if(data){
            return res.json({status: true, message: 'Delete success'});
        }
        else{
            return res.json({status: true, message: 'Delete fail'});
        }
    }
    catch(error){
        return res.json({status: false, message: error});
    }
}
module.exports = {
    apiGetTodoList,
    apiUpdateTodoList,
    apiCreateTodoList,
    apiDeleteTodoList
}