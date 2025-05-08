import mongoose from "mogoose"
const connectDB=async() =>{
    try{
        await mongoose.connect()
        console.log('moongoDB connected')
    }catch(error){
        console.error(error)
        process.exit(1);
    }
}
export default connectDB