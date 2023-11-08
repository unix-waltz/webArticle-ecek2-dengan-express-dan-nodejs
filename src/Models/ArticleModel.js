import mongoose from "mongoose";
const ArticleModel = new mongoose.Schema({
    title:{
        required : true,
        type : String,
    },
    description:{
        required : true,
        type : String,
    },
    markdown:{
        required : true,
        type : String,
    },
    createdAt :{
        type: Date,
        default: Date.now(),
    }
});
export default mongoose.model("ArticleModel", ArticleModel);