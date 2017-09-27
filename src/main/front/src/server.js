/* 这是一个测试的服务器*/

var express = require('express');
var bodyParser = require('body-parser');
var cookie = require('cookie-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var multipart = require('connect-multiparty');
var multipartMiddleware = multipart();

var app = express();
app.use(cookie());



app.all('*',function(req,res,next){
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
  res.setHeader("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  res.setHeader("X-Powered-By",' 3.2.1')
  next();
});
app.get('/',function(req,res){
  console.log('hello /');
  res.send('data from /')
});

app.get('/test',(req,res) =>{
  console.log('test test')
});

app.get('/getPage',(req,res) =>{
  console.log('getPage');
  console.log('query',req.query,'pagram:',req.params,'req.body:',req.body);

});
app.post('/postPage',bodyParser.json(),(req,res) =>{
  console.log('postPage');
  console.log('query',req.query,'pagram:',req.params,'req.body:',req.body);
  res.status=500;

});
app.post('/login',multipartMiddleware,(req,res) =>{
  let userName = "123";
  let password = "123";
  console.log("cookies:",req.cookies);
  console.log('query',req.query,'pagram:',req.params,'req.body:',req.body.password,req.body.username);
  if(req.body.username === userName && req.body.password === password){
    res.cookie('username', { userName, httpOnly: true });
    res.send(true);
    res.end();
  }else{
    res.send(false);
    res.end();
  }
});

var server = app.listen('8082',(req,res) => {

  console.log("服务开启")
});