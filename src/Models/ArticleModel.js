import mongoose from "mongoose";
const ArticleModel = new mongoose.Schema({
    title:{
        required : true,
        type : String,
    },
    body:{
        required : true,
        type : String,
    },
   author:{
        required : true,
        type : String,
    },
    createdAt :{
        type: Date,
        default: Date.now(),
    }
});
export default mongoose.model("ArticleModel", ArticleModel);