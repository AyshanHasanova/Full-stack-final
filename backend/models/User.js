import mongoose from "mongoose"
// import bcrypt from "bcryptjs"
// import jwt from "jsonwebtoken"


const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required:[true,"Istfadeci adini daxil edin"],
        maxLength :[50,"Istfadeci adi 50 simvoldan cox ola bilmez"]


    },
    email:{
        type:String,
        required:[true,"Istfadeci emailni daxil edin"],
        unique: true
    },
    password:{
        type: String,
        required: [true,"Shifrenizi daxil edin"],
        minLength: [6,"Shifre en azi 6 simvoldan ibaret olmalidir"],
        select: false
    },
    avatar: {
        public_id : String,
        url: String
    },
    role: {
        type:String,
        default:"user"
    },
    // resetPasswordToken :String,
    // resetPasswordExpire : Date
    // reqemsal imza link sifrlenmis melumat
    
},{timestamps:true})
export default mongoose.model("User",userSchema)