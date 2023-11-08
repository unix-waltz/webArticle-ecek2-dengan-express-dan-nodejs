import  express  from "express";
const app = express();
import env, { config } from "dotenv";
env.config()
import Route from "./../src/Routes/Articles.js";

app.use(express.urlencoded({ extended: false }));
app.set('view engine', 'ejs');
app.use(`/main` ,Route);

app.get('/', (req, res) => res.redirect("/main"));

app.listen(process.env.APP_DEFAULT_PORT,() => {
    console.log(`listening on port ${process.env.APP_DEFAULT_PORT}`);
})
