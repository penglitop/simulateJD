let express = require('express'),
    http=require('http'),
    https=require('https'),
    router = express.Router(),
    url=require('url');

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
  https.get(requrl,function(req1,res1){
    let html='';
      req1.on('data',function(data){
          html+=data;
      });
      req1.on('end',function(){
          res.send(html);
      });
  });
}
module.exports = router;
