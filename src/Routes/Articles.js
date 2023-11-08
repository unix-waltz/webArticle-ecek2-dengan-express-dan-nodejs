import express from 'express';
import ArticleController from '../Controllers/ArticleController.js';
const Route = express.Router();

Route.get('/', (req,res)=>{
res.render('index');
});
Route.get('/new', (req,res)=>{
    res.render('new');
    });
    Route.post('/new',ArticleController.createArticle);
export default Route;