import mongoose from "mongoose";
import Org from "../models/org.model.js";

async function getAllOrgs(request, response) {
	try{
        const allOrg = await Org.find();

        response.status(200).send({success:true, Org:allOrg})
	}catch{
        response.send({success:false})
	}
}


async function createOrg(request, response) {
	try{
        const {first_name,last_name} = request.body
        const new_org= new Org({
            first_name:first_name,
            last_name:last_name
        })
        const result = await new_org.save();
        response.status(200).send({success:true, Org:result})
	}catch{
        response.send({success:false})
	}
}


async function deleteOrg(request, response) {
	try{
        // const allOrg = await Org
	}catch{
	}
}

// async function deleteUser(request, response) {
// 	try{
//         const allOrg = await Org
// 	}catch{
// 	}
// }


export {getAllOrgs,createOrg,deleteOrg}