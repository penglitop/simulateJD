const _util=require('./commonUtil.js'),
	_url=require('url'),
	_interface=require('./ajaxInterface.js'),
	_ajaxGet=require('./ajaxGet.js'),
	_fs=require('fs');
module.exports={
	requestComing:function(req,res){
		let rurl=_url.parse(req.url),
			rpathname=rurl.pathname,
			rtype=_util.getMimeType(rpathname);
		if(rurl == 'favicon.ico'){
			res.writeHead(200,{'Content-Type':rtype.mimeType || 'text/html'});
			res.write();
			res.end();
		}
		if(rtype.mimeType){
			/*请求的具体文件*/
			this.responseFile({req:req,res:res,rpathname:rpathname,rtype:rtype});
		}else{
			this.responseQuest({req:req,res:res,rpathname:rpathname});
		}
	},
	responseFile:function(param){
		let static=__dirname+'/../frontend/',
			res=param.res;
		_fs.readFile(static+param.rpathname,function(err,data){
			if(err){
				if(err.errno==-4058){
					res.writeHead(404,{'Content-Type':param.rtype.mimeType || 'text/html'});
				}else{
					res.writeHead(400,{'Content-Type':param.rtype.mimeType || 'text/html'});
				}
				res.write(err.toString());
				res.end();
			}else{
				res.writeHead(200,{'Content-Type':param.rtype.mimeType || 'text/html'});
				res.write(data.toString());
				res.end();
			}
		});
	},
	responseQuest:function(param){
		console.log(param.rpathname)
		let reqname=param.rpathname.replace(/(^\/*)|(\/*$)/g,'');
		if(reqMethod[reqname]){
			reqMethod[reqname](param);
		}else{
			let res=param.res;
			res.writeHead(404,{'Content-Type':'text/plain;charset=utf-8'});
			res.write('您请求的方法不存在！');
			res.end();
		}
	}
};
var reqMethod={
	upload:function(param){
		let res=param.res;
		res.writeHead(200,{'Content-Type':'text/plain;charset=utf-8'});
		res.write('您请求的方法是upload');
		res.end();
	},
	getData:_ajaxGet.get,
	interface:_interface.get
};