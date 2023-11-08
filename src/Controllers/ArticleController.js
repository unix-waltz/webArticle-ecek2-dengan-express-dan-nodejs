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
res.redirect("/");
}catch(e){
    console.log(e)
}
}
}
export default ArticleController;