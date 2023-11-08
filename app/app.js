import  express  from "express";
const app = express();

import Route from "./../src/Routes/Articles.js";

app.use(express.urlencoded({ extended: false }));
app.set('view engine', 'ejs');
app.use(`/main` ,Route);


app.get(`/`,(req, res) => {
    res.render('index');
})

app.listen(3000,() => {
    console.log("listening on port 3000");
})
