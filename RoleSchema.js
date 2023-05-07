const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RoleSchema = new Schema({
    name:{
        type:String,
       unique:true
    },
    description:{
        type:String,
    },
    status:{
        type:Boolean,
        default:true
    }
})
module.exports = mongoose.model('role',RoleSchema);