import mongoose from "mongoose";
import Users from "../models/user.model.js";
import Org from "../models/org.model.js";
// const User = mongoose.model('User');

async function getAllUsers(request, response) {
	try{
        const Org_name = "ACSS";
        const single_Org = await Org.find({first_name:Org_name})
        const allUsers = await Users.find({org: single_Org._id});
        console.log(allUsers)
        response.status(200).send({success:true, users:allUsers})
	}catch{
        response.send({success:false})
	}
}


async function createUser(request, response) {
	try{
        const {first_name,last_name} = request.body

        const get_org = await Org.findOne({first_name: "ACSS"})

        const new_user= await Users.create({
            first_name:first_name,
            last_name:last_name,
            org: get_org._id
        })
        
        response.status(200).send({success:true, new_user:new_user})
	}catch(error){
        response.status(500).send({success:false, errmessage:error})
	}
}


async function deleteUser(request, response) {
	try{
        // const allUsers = await Users
	}catch{
	}
}

// async function deleteUser(request, response) {
// 	try{
//         const allUsers = await Users
// 	}catch{
// 	}
// }


export {getAllUsers,createUser,deleteUser}