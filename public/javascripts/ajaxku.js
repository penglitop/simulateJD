function $ajax(param){
	//1.创建Ajax对象
	var xhr;
	if(window.XMLHttpRequest){
		xhr=new XMLHttpRequest();
	}else{
		xhr=new ActiveXObject("Microsoft.XMLHTTP");
	}
	//4.接收
	xhr.onreadystatechange=function (){
		if(xhr.readyState==4){
			param.complete && param.complete();
			if(xhr.status==200){
				param.success && param.success(xhr.responseText);
			}else{
				param.error && param.error(xhr.responseText);
			}
		}
	};
	var reqUrl=param.url+'?param='+encodeURIComponent(JSON.stringify(param.data));
	//2.连接服务器（打开和服务器的连接）
	xhr.open(param.type || 'GET',reqUrl, true);
	//3.发送
	xhr.send();
}
$ajax({
	context:'',
	type:'',
	url:'/ajaxInterface',
	data:{
		host:'m.jd.com',
		requrl:'https://m.jd.com/index/recommend.action?_format_=json&page=2'/*,
		reqparam:{
			_format_:'json',
			page:2
		}*/
	},
	complete:'',
	error:'',
	success:''
});
/*
$ajax({
	options:{},
	async:true,
	cache:'',
	context:'',
	type:'',
	url:'',
	data:'',
	dataType:'',
	complete:'',
	error:'',
	success:''
});
//simple api
$ajax({
	context:'',
	type:'',
	url:'',
	data:'',
	complete:'',
	error:'',
	success:''
});
*/
