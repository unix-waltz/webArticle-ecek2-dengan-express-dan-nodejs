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
    },
deleteArticle:async (req,res) => {
    try{
        
const deleteable = await Model.findByIdAndDelete(req.body.id);
if(deleteable) res.redirect('/')
    }catch(e){
        console.log(e)
    }
    },
viewEditArticle : async (req,res) => {
    let value = await Model.findOne({_id :req.params.id});
    res.render(`edit`,{value:value});
    },
    editArticle : async (req,res) => {
      try{
        let result = await Model.findByIdAndUpdate(req.body.id , {
           title : req.body.title,
           author : req.body.author,
           body : req.body.body
        });
        if(result) res.redirect('/')
      }catch(e){
        console.log(e)
      }
    }
}
export default ArticleController;