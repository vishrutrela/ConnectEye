const cookieParser = require("cookie-parser");

module.exports.home = function(req,res){
    console.log(req.cookies);
    res.cookie('user_id',10)
    return res.render('home',{
        title:'Home'
    })
}

