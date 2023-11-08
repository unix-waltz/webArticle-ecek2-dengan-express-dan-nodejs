import express from 'express';
import ArticleController from '../Controllers/ArticleController.js';
const Route = express.Router();


Route.get('/', ArticleController.getAllArticle);
Route.get('/new', (req,res)=>{
    res.render('new');
    });
Route.post('/new',ArticleController.createArticle);
Route.get('/detail/:id', ArticleController.detailArticle);
Route.delete('/delete', ArticleController.deleteArticle);
export default Route;