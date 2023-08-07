const express = require('express');
const path = require('path')


const bodyParser = require('body-parser');



const rootDir = require('./util/path')
const router = require('./routes/home');

const app = express();
app.set('view engine', 'ejs');
app.set('views', 'view');

app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static(path.join(rootDir.path, 'public')))

app.use(router);



app.get('/contact.ejs',(rea, res, next)=>{
    res.status(200).render('contact', {pageTitle: "contact page"})
})

const port = 3001;
app.listen(port,(() => {console.log(`server listen's at port http://localhost:${port}` )
}))