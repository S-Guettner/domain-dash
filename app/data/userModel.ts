import mongoose from 'mongoose'




const userSchema = new mongoose.Schema({

    email: String,
    password:String,
    userType: String,

})




export default mongoose.models.user || mongoose.model("user", userSchema)