import mongoose from "mongoose"

const UserSchema = new mongoose.Schema({
    name:{
        type: String,
        require:true,
        trim: true,
        maxlength:50
    },
    email:{
        type:String,
        required:true,
        unique:true,
        match:/^\w+([\.-]?\w+)@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
    },
    password:{
        type:String,
        required:true

    }
    });

UserSchema.pre('save', async function(next){
    if(!this.isModified('password'))return next();
    this.password=await bcrypt.hash(this.password,15)
    next();
})
const User=mongoose.model('User', UserSchema);
export default User

// npm install bcrypt
