var mysql=require('mysql')

var sharedObj={};

sharedObj.getMySqlCon=function(res,cb){
     var con= mysql.createConnection({
          host:'localhost',
          user:'root',
          password:'',
          database:'projectdemo'
      })
     con.connect(function(err){
        if(err){
            res.send('db errro');
        }
        cb(con);
     });
     
}

module.exports=sharedObj;