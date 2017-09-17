const _util=require('./commonUtil.js'),
	querystring = require('querystring'),
	util = require('util'),
	_fs=require('fs');
module.exports={
	get:function(param){
		let req=param.req,
			res=param.res,
			postData='';
		req.on('data',function(chunk){
			post +=chunk;
		});
		req.on('end',function(){
			post =querystring.parse(post);
			res.writeHead(200,{'Content-Type':'text/plain;charset=utf-8'});
			res.write('您使用的是post请求，请求的路径是'+urlparse+'\n，请求参数是\n'+util.inspect(post));
			res.end();
		});
	}
};