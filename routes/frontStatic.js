var express = require('express'),
    router = express.Router(),
    url=require('url');

router.get(/\/.*.html.*/, function(req, res, next) {
  var getUrl=url.parse(req.url,true),
      pathname=getUrl.pathname;
  if(pathname){
    var options = {
      root: __dirname.replace(/routes$/,'') + 'views',
      dotfiles: 'ignore',
      headers: {
          'x-timestamp': Date.now(),
          'x-sent': true
      }
    };
    console.log(options.root)
    res.sendFile(pathname,options,function(err){
      if(err){
        var err = new Error('Not Found');
        err.status = 404;
        next(err);
      }
    });
  }
});

module.exports = router;
