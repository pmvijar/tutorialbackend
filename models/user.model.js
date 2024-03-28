import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    first_name:{
        type:String,
        required: true,
    },
    last_name:{
        type:String,
        required: true,
    },
    org:{ 
        type: [{
            type: mongoose.Schema.Types.ObjectId, ref: "Organization"
        }]
    }
})

const Users = mongoose.model('Users', userSchema);

export default Users;