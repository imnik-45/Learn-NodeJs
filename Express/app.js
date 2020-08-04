const express = require('express');

const app = express();

// register viewengine

app.set('view engine','ejs');

//          app.set('views','myviews');


app.listen(3000);

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


