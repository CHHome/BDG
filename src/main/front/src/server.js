/* 这是一个测试的服务器*/
let staticData = require( '../src/data/test/Msg.json');
let manageData = require('../src/data/test/Pubtest.json');
var express = require('express');
var bodyParser = require('body-parser');
var cookie = require('cookie-parser');
/*解析普通post表单body*/
var urlencodedParser = bodyParser.urlencoded({ extended: false });

/*解析前端formData表单*/
var multipart = require('connect-multiparty');
var multipartMiddleware = multipart();


/*文件上传中间件*/
var multer = require('multer');
var upLoad = multer({ dest: 'tmp/'});

var app = express();
app.use(cookie());


/*跨域设置*/
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
/*get请求测试*/
app.get('/getPage',(req,res) =>{
  console.log('getPage');
  console.log('query',req.query,'pagram:',req.params,'req.body:',req.body);

});
/*post请求测试*/
app.post('/postPage',bodyParser.json(),(req,res) =>{
  console.log('postPage');
  console.log('query',req.query,'pagram:',req.params,'req.body:',req.body);
  res.status=500;

});
/*登录测试*/
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
/*宣传信息发布测试*/
app.post('/msPublish',upLoad.array('upLoadFile'),(req,res)=>{
  console.log("msPublish");
  console.log("file",req.files.length);
  console.log('reqff ',req.body);
  console.log('req',req.body.department);
  console.log('req',req.body.materials.length);
  res.end('提交成功');
});

//计划管理获取数据
app.get('/planData',(req,res)=>{
  console.log("planData");
  console.log('query:',req.query);
  let page = parseInt(req.query.page);
  let sumData = null;
  if(req.query.type ==='pub')
    sumData = manageData.pub;
  else{
    if(req.query.type ==='rec')
      sumData = manageData.rec;
    else
      sumData = manageData.ser;
  }
  let totalPages = pages(sumData.length)
  list = sumData.slice((page-1)*5,page*5);
  data ={};
  data.totalPages = totalPages;
  data.itemList = list;
  console.log('pubPMData:',JSON.stringify(data));//只能输出JSON格式
  res.end(JSON.stringify(data));
});

//计划管理删除数据
app.get('/pubPMDelete',(req,res)=>{
  console.log("pubPMDelete");
  console.log('query:',req.query.deleteList);
  res.end();
});

//宣传信息发布统计
app.get('/MsgStatic',(req,res)=>{
  console.log("MsgStatic");
  console.log('query:',req.query);
  let sumData = null;
  let page = parseInt(req.query.page);
  if(req.query.type === 'pubMsgStatic'){
    sumData = staticData.message;
  }else if(req.query.type === 'pubMaterialStatic'){
    sumData = staticData.material;
  }else if(req.query.type === 'pubReceiveStatic'){
    sumData = staticData.receive;
  }
  let totalPages = pages(sumData.length)
  list = sumData.slice((page-1)*5,page*5);
  data ={};
  data.totalPages = totalPages;
  data.itemList = list;
  console.log('sunData:',JSON.stringify(data));
  res.end(JSON.stringify(data));
});

function pages(length) {
  let pages = parseInt(length/5);
  console.log(pages);
  if(length%5>0)
    pages++;
  return pages;
}


var server = app.listen('8082',(req,res) => {

  console.log("服务开启")
});
