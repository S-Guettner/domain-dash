import mongoose from 'mongoose'


const Schema = mongoose.Schema;


const quoteSchema = new mongoose.Schema({
    customerId: {
        type: Schema.Types.ObjectId,
        ref: 'users', 
    },
    projectTitle: String,
    projectDescription: String,
    projectGoals: String,
    targetAudience: String,
    projectbudget: String,
    projectTimeline: String,

});





export default mongoose.models.quotes || mongoose.model("quotes", quoteSchema)