var express=require('express');
var router=express.Router();
var sharedObj=require('./shared')
router.post('/employee',function(req,res){
    var name=req.body.name;
    var Department=req.body.Department;
    var date=req.body.date;

    sharedObj.getMySqlCon(res,function(con){
        var q="INSERT INTO `employee`(`name`, `Deprtment`,`date`) VALUES ('"+name+"','"+Department+"','"+date+"')";
         con.query(q,function(e,r){
            if(e){
                res.send(e);
            }else{
                res.send(r);
            }
        });
    });

});
router.get('/getemployee', function (req, res) {
    sharedObj.getMySqlCon(res, function (con) {
        var q = "select * from employee";
        con.query(q, function (e, r) {
            if (e) {
                res.send(e);
            }
            else {
                res.send(r);
            }
        });
    });
});

router.get('/getdateemployee', function (req, res) {
    sharedObj.getMySqlCon(res, function (con) {
        var q = "select * from employee where name,date ORDER BY desc";
        con.query(q, function (e, r) {
            if (e) {
                res.send(e);
            }
            else {
                res.send(r);
            }
        });
    });
});
router.get('/getnameemployee', function (req, res) {
    sharedObj.getMySqlCon(res, function (con) {
        var q = "select * from employee where name like a%";
        con.query(q, function (e, r) {
            if (e) {
                res.send(e);
            }
            else {
                res.send(r);
            }
        });
    });
});
router.get('/getname', function (req, res) {
    sharedObj.getMySqlCon(res, function (con) {
        var q = "select COUNT(DISTINCT name) FROM employee";
        con.query(q, function (e, r) {
            if (e) {
                res.send(e);
            }
            else {
                res.send(r);
            }
        });
    });
});
router.get('/getexpemployee', function (req, res) {
    sharedObj.getMySqlCon(res, function (con) {
        var q = "select * from employee year(date)<=2019";
        con.query(q, function (e, r) {
            if (e) {
                res.send(e);
            }
            else {
                res.send(r);
            }
        });
    });
});
router.delete('/deleteemployee', function (req, res) {
    sharedObj.getMySqlCon(res, function (con) {
        var q = "select * from employee where Department='Development'";
        con.query(q, function (e, r) {
            if (e) {
                res.send(e);
            }
            else {
                res.send(r);
            }
        });
    });
});
router.delete('/deleteemployee', function (req, res) {
    sharedObj.getMySqlCon(res, function (con) {
        var q = "select * from employee where Department='Development'";
        con.query(q, function (e, r) {
            if (e) {
                res.send(e);
            }
            else {
                res.send(r);
            }
        });
    });
});
 
module.exports=router; 
