import mongoose from 'mongoose'


const Schema = mongoose.Schema;

const requestSchema = new mongoose.Schema({
    quoteId: {
        type: Schema.Types.ObjectId,
        ref: 'quotes', 
    },
    requestContent: String,
});





export default mongoose.models.request || mongoose.model("requests", requestSchema)