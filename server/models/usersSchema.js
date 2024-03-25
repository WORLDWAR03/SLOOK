const mongoose =require("mongoose")

const users = mongoose.Schema({
    
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true,
    },
    birthdate:{
        type:Date,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true,
    },
    country:{
        type:String,
        required:true
    },
    access:{
        type:String,
        default:"user"
    },
    phone:{
        type:String,
        
    }
})

const USERS = mongoose.model('users', users);
module.exports = USERS;