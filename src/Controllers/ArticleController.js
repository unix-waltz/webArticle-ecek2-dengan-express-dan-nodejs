import Model from "./../Models/ArticleModel.js";
import DB from "./../Database/MongoDB.js";
const ArticleController = {
createArticle : async (req,res) => {
let article =  new Model({
    title : req.body.title,
    body : req.body.body,
    author : req.body.author,
});
try{
article = await article.save();
res.redirect("/main");
}catch(e){
    console.log(e)
}
},
getAllArticle : async (req, res) => {
const data = await Model.find()
res.render(`index`,{data:data});
},
detailArticle : async (req,res)=>{
 const dataD = await Model.findOne({_id :req.params.id})
 res.render(`detail`,{data:dataD});
    }
}
export default ArticleController;