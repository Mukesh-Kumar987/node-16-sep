const users=require('../users.json');
const fs=require('fs');

function getAllUsers(req, res){
    try{
        res.json(users);
    }catch(err){
        console.log(err);
    }
}


module.exports={
    getAllUsers
}