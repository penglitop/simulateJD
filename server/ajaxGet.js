const _util=require('./commonUtil.js'),
	_fs=require('fs'),
	url = require('url'),
	util = require('util');
var ActionMethod={
	getUseInfo:function(param,res){
		var userid=param.userid;
		var resParam={
			userName:'ly'+Math.random(),
			userAge:parseInt(Math.random()*20)
		};
		res.writeHead(200,{'Content-Type':'text/plain;charset=utf-8'});
		res.write(encodeURIComponent(JSON.stringify(resParam)));
		res.end();
	}
};
module.exports={
	get:function(param){
		let urlparse=url.parse(param.req.url, true),
			query=urlparse.query,
			res=param.res;
		if(query && query.param){
			query=JSON.parse(query.param);
			ActionMethod[query.method](query.param,res);
		}else{
			res.writeHead(200,{'Content-Type':'text/plain;charset=utf-8'});
			res.write(JSON.stringify({code:0,description:'您没有请求参数！'}));
			res.end();
		}
	}
};
