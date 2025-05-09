import mongoose from "mogoose"
import {mongoDomain,mongoUser,mongoPwd,mongoDb} from './constants'
const connectDB=async() =>{
    try{
        await mongoose.connect("mongodb+srv://elizabethgodinezs:nnuDAPUiabXKl7nk@godinez.roj9vab.mongodb.net/")
        // await mongoose.connect(`${mongoDomain}${mongoUser}${mongoPwd};@${mongoDb}/`)
        console.log('MongoDB connected')
    }catch(error){
        console.error(error)
        process.exit(1);
    }
}
export default connectDB