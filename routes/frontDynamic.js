var express = require('express'),
    router = express.Router(),
    url=require('url');

router.get(/\/.*.html.*/, function(req, res, next) {
  var getUrl=url.parse(req.url,true),
      pathname=getUrl.pathname,
      pageTitle=getUrl.query.pageTitle || "STUDY";
  if(pathname){
    pathname=pathname.replace(/^\/*/,"").replace(/\.html.*/,"");
    console.log(pathname,pageTitle);
    res.sendFile(pathname,{title:pageTitle});
  }
});

module.exports = router;
