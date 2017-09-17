const _mimeTypes=require('./mime.json');
module.exports={
	getMimeType:function(pathname){
		let type=pathname.split('?')[0].split('.').pop();
		return {
			type:type,
			mimeType:_mimeTypes[type]
		}
	}
};