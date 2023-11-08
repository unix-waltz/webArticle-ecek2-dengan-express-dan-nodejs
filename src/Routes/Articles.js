import express from 'express';

const Route = express.Router();
Route.get('/', (req,res)=>{
res.render('index');
});
Route.get('/', (req,res)=>{
    res.render('index');
    });
export default Route;