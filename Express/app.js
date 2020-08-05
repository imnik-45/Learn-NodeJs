const express = require('express');
const app = express();
const morgan = require('morgan');


// register viewengine
app.set('view engine','ejs');

//app.set('views','myviews');    custom file for views

// listen for requests
app.listen(3000);

//middleware & static files
app.use(express.static('public'));

// morgan - 3rd party middleware. Morgan is a logger middleware.
app.use(morgan('dev'));

app.use((req,res,next) => {
    console.log('new request made : ');
    console.log('host:',req.hostname);
    console.log('path:',req.path);
    console.log('method:',req.method);
    next();      //next()  function
});

app.use((req,res,next) => {
    console.log('in the next middleware');
    next();      //next()  function
});

app.get('/',(req,res) => {

    const blogs=[
        {
            title:'lorem is love',snippet: ' lorem ipsum is love.'
        },
        {
            title:'lorem is love',snippet: ' lorem ipsum is love.'
        },
        {
            title:'lorem is love',snippet: ' lorem ipsum is love.'
        },
    ];
   
    res.render('index',{title : 'home', blogs});
});

app.get('/about',(req,res) => {
   
    res.render("about",{title : 'about'});
});

//redirects to a page

app.get("/blogs/create",(req,res) => {
    res.render('create',{title : 'create new blog'});
})
// 404 pages

app.use((req,res)=>{
    res.status(404).render('404',{title : '404'});
});


