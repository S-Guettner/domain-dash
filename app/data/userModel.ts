import mongoose from 'mongoose'




const userSchema = new mongoose.Schema({

    email: { type: String, unique: true },
    password:String,
    userType: String,

})




export default mongoose.models.user || mongoose.model("user", userSchema)