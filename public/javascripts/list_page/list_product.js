"use strict";
/*关闭固定头部 开始*/
;(function(glboal){
	var downloadBannel=byid('layout_appdown'),
		topheader=byid('topheader'),
		search1=byid('search1'),
		downloadClose=byid('download_close');
	downloadClose.addEventListener('click',function(){
		hide(downloadBannel);
		hide(topheader);
		search1.style.height='1.27rem';
	});
})(this);
/*关闭固定头部 结束*/

/*列表出现 开始*/
;(function(global){
	var layKey=bycss('#layout_jdKey'),
		layjdBar=bycss('#layout_jdBar');

		layKey.addEventListener('click',function(){
			if(layjdBar.style.display=='none'){
				show(layjdBar);
			}else{
				hide(layjdBar);
			}
		})
})(this);
/*列表出现 结束*/

/*综合-销量-价格-筛选 开始*/
;(function(gl4bal){
	var newChange=bycssAll('#new_change'),
		activeInd=0;	

	for(var i=0;i<newChange.length;i++){
		newChange[i].index=i;
		newChange[i].addEventListener('click',function(){
			if(!hasClass(this,'active')){
				if(this.index==0){
					removeClass(newChange[activeInd],'active');
					addClass(this,'active');
				}else if(this.index==1){
					removeClass(newChange[activeInd],'active');
					addClass(this,'active');
					
				}
			}
		})
	}
})(this);
/*综合-销量-价格-筛选 结束*/