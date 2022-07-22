
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require("lodash");
const mongoose = require("mongoose");

const app = express();

app.set('view engine', 'ejs');

// app.use(cors());
// app.use((req,res,next)=>{
//     res.header('Access-Control-Allow-Headers, *, Access-Control-Allow-Origin', 'Origin, X-Requested-with, Content_Type,Accept,Authorization','http://localhost:4200');
//     if(req.method === 'OPTIONS') {
//         res.header('Access-Control-Allow-Methods','PUT,POST,PATCH,DELETE,GET');
//         return res.status(200).json({});
//     }
//     next();
// });
app.use(bodyParser.json());
app.use(express.json());

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static("public"));
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
  next();
});

mongoose.connect("mongodb://localhost:27017/blogDB");

const postSchema = {
  title:String,
  content:String
};

const Post = mongoose.model("Post",postSchema);

app.get("/",function(req,res){
  Post.find({},function(err,posts){
     res.json(posts);
    // res.end(JSON.stringify(posts));

  });

});

app.get("/posts/:postId",function(req,res){
  const requiredPostId = req.params.postId;
  Post.findOne({_id:requiredPostId},function(err,post){
    res.json(post);
  });
});

app.post("/compose",function(req,res){
  // console.log(req.body.postTitle);
  const post = new Post({
    title: req.body.title,
    content: req.body.content
  });
  post.save(function(err, obj) {
    if (err)
        res.send(err);

    res.send(obj);
});
});

app.listen(9000, function() {
  console.log("Server started on port 9000");
});
