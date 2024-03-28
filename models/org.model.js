import mongoose from "mongoose";

const orgSchema = new mongoose.Schema({
    first_name:{
        type:String,
        required: true,
    },
    last_name:{
        type:String,
        required: true,
    }
})

const Org = mongoose.model('Organization', orgSchema);

export default Org;