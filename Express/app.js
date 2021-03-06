const express = require("express");
const app = express();

const morgan = require("morgan");

const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const blogRoutes = require("./routes/blogRoutes");

const { render } = require("ejs");

// register viewengine
app.set("view engine", "ejs");

//connect mongo atlas
//const dbURI ='mongodb+srv://<username>:<password>@<cluster-id/url>.mongodb.net/<dbname>?retryWrites=true&w=majority&ssl=true';

//connect mongodb locally
const mongoDB = "mongodb://localhost/node-scratch";

mongoose
  .connect(mongoDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((result) => app.listen(3000))
  .catch((err) => console.log(err));

//app.set('views','myviews');    custom file for views

// listen for requests

//middleware & static files

app.use(express.static("public"));
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

// morgan - 3rd party middleware. Morgan is a logger middleware.
app.use(morgan("dev"));

app.use((req, res, next) => {
  /* console.log("new request made : ");
  console.log("host:", req.hostname);
  console.log("path:", req.path);
  console.log("method:", req.method);*/
  next(); //next()  function
});

app.use((req, res, next) => {
  next(); //next()  function
});

app.get("/", (req, res) => {
  res.redirect("/blogs");
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "about",
  });
});

//use app-routes
app.use("/blogs", blogRoutes);

// 404 pages

app.use((req, res) => {
  res.status(404).render("404", {
    title: "404",
  });
});

/*

//routes
app.get('/add-blog',(req,res)=>{
    const blog= new Blog({
        title:'new blog 2',
        snippet:'about new blog',
        body:'this is the body of new blog'
    });
    blog.save(function(err,blog){
        if(err){
            console.log("something went wrong");
        }
        else{
            console.log(blog);
        }
    })
  
})

app.get('/all-blogs',(req,res)=>{
    Blog.find().then((result)=>{res.send(result);}).catch((err)=>{
        console.log(err);
    });
});

app.get('/single-blog',(req,res)=>{
    Blog.findById('5f2d8545eac1bc1ff8ea1452').then((result)=>{res.send(result);}).catch((err)=>{
        console.log(err);
    });
})
*/
