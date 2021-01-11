const mongoose = require('mongoose');
const Post = require("../models/post")


exports.check = function (req,res) {
    Post.findOne({post: req.body.post}).lean().exec(function (err, posts) {
        if (err) throw err;
        console.log(req.body.post)
        console.log(posts)
        res.render("search_post.hbs", {posts: posts })
    })
}

