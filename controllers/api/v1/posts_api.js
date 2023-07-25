const Post = require('../../../models/post');
const Comment = require('../../../models/comment');

module.exports.index = async function(req,res){

    let posts = await Post.find({})
    
  .populate('user')
  .populate({
    path: 'comments',
    populate: {
      path: 'user',
      
    }
  });


    return res.json(200,{
        message:"list of posts",
        posts: posts,
        
    }) 
}