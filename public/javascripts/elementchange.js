if(!XMLHttpRequest){
	alert('您的浏览器太旧了，请升级您的浏览器或使用最新的Chrome浏览器');
}
var xhr=new XMLHttpRequest();
xhr.onreadystatechange=function(){
	if(xhr.readyState==4){
		if(typeof xhrReadyCall == 'function'){
			xhrReadyCall();
		}
		if(xhr.status==200){
			if(typeof xhrSuccessCall == 'function'){
				xhrSuccessCall(xhr.responseText);
			}
		}
	}
}
xhr.open('get','/getData',true);
xhr.send();

function xhrSuccessCall(data){
	data=JSON.parse(data);
	console.log(data.description);
}