let express = require('express'),
    http=require('http'),
    https=require('https'),
    router = express.Router(),
    url=require('url'),
    uData=Buffer.allocUnsafe(0),
    iconv = require('iconv-lite'),
    request = require('superagent');

router.get(/[\s\S]*/, function(req, res, next) {
  var query=req.query,
    param=query.param;
  if(param){
    try{
      param=JSON.parse(param);
    }catch(e){
      console.log(e)
    }
    if(param.host=='localhost' || !param.host){
      localGetAjax(req,res,next);
    }else{
      proxyGetAjax(req,res,next);
    }
  }else{
    let msg={
      code:1,
      message:"no param"
    };
    res.send(JSON.stringify(msg));
  }
});
function localGetAjax(req,res,next){
  console.log(req);
}
function proxyGetAjax(req,res,next){
  var query=req.query,
      param=query.param;
  try{
    param=JSON.parse(param);
  }catch(e){
    console.warn(e);
    res.send(e.message);
  }
  let requrl=param.requrl;
  if(!requrl){
    let msg={
      code:1,
      message:"no requrl"
    };
    res.send(JSON.stringify(msg));
  }
  requrl=requrl+"?"+JSON.stringify(param.param);
  if(param.requestProtocol=='https'){
    https.get(param.host+requrl,function(req1,res1){
      req1.setEncoding('utf-8');
      let html='';
      req1.on('data',function(data){
          html+=data;
      });
      req1.on('end',function(){
          res.send(html);
      });
    });
  }else{
    let headers={
            'Accept':'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
            'Accept-Encoding':'gzip, deflate',
            'Accept-Language':'zh-CN,zh;q=0.9',
            'Cache-Control':'max-age=0',
            'Connection':'keep-alive',
            'Host':param.host,
            'Upgrade-Insecure-Requests':'1',
            'User-Agent':'Mozilla/5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1'
        };
    request
    .get(param.host+requrl)
    .set(headers)
    .end(function(err, res1){
          res.send(res1.text);
      });
  }
}
module.exports = router;
