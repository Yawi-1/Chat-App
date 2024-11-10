import mongoose from "mongoose";

const conservationSchema = mongoose.Schema({
    participants:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'User'
        }
    ],
    messages:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Message',
        default:[]
    }]
},{timestamps:true});
const Conversation = mongoose.model('Conversation',conservationSchema);
export default Conversation;