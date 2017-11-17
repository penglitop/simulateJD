"use strict";
/*关闭固定头部 开始*/
;(function(glboal){
	var downloadBannel=byid('download_pannel'),
		downloadClose=byid('download_close');

	downloadClose.addEventListener('click',function(){
		hide(downloadBannel);
	});
})(this);
/*关闭固定头部 结束*/

/*列表出现 开始*/
;(function(global){
	var layKey=bycss('#m_common_bottom_jdkey'),
		layjdBar=bycss('#layout_jdBar'),
		headerGoback=bycss('#m_common_header_goback');

		layKey.addEventListener('click',function(){
			if(layjdBar.style.display=='none'){
				show(layjdBar);
			}else{
				hide(layjdBar);
			}
		});

		headerGoback.addEventListener('click',function(){
			if(window.history.go(-1)){
				window.history.go(-1);
			}
		})
})(this);
/*列表出现 结束*/

/*精选列表 开始*/
;(function(global){
	var naviArrow=bycss('#down_navi_arrow'),
		arrow=bycss('#navi_arrow'),
		downTransition=bycss('#down_transition'),
		wrapperUl=bycss('#wrapper'),
		aWrapperP=bycssAll('.navi_name',wrapperUl),
		aDownTraP=bycssAll('.navi_name',downTransition),
		activeInd=0;


		naviArrow.addEventListener('click',function(){
			if(!hasClass(downTransition,'displayNone')){
					removeClass(arrow,'arrow_up');
					addClass(downTransition,'down_active');
					setTimeout(function(){
						addClass(downTransition,'displayNone');
					},200);
						
			}else{
				addClass(arrow,'arrow_up');
				removeClass(downTransition,'down_active');
				setTimeout(function(){
					removeClass(downTransition,'displayNone');
				},200);
			}
		});

		for(var i=0;i<aWrapperP.length;i++){
			aWrapperP[i].index=i;
			aWrapperP[i].addEventListener('click',function(){
				if(!hasClass(this,'activeF')){
					removeClass(aWrapperP[activeInd],'activeF');
					addClass(this,'activeF');
					removeClass(aDownTraP[activeInd],'activeS');
					addClass(aDownTraP[this.index],'activeS');
					activeInd=this.index;
				}
			})
		}
})(this);
/*精选列表 结束*/


/*返回到顶部 开始*/
;(function(global){
	var toTopBtn=bycss('#to_top'),
		toToptimer=null;

	window.addEventListener('scroll',function(){
		var oldScrollTop=document.documentElement.scrollTop||window.pageYOffset||document.body.scrollTop;
		if(oldScrollTop>=5){
			show(toTopBtn);
		}else{
			hide(toTopBtn);
		}
	});
	toTopBtn.addEventListener('click',function(){
		clearInterval(toToptimer);
		toToptimer=setInterval(toTop,30);
	});

	function toTop(){
		var oldScrollTop=document.documentElement.scrollTop||window.pageYOffset||document.body.scrollTop,
			iSpeed=Math.floor(-oldScrollTop/6);
		document.body.scrollTop=window.pageYOffset=document.documentElement.scrollTop=oldScrollTop+iSpeed;
		if(oldScrollTop==0){
				clearInterval(toToptimer);
			}
	}
})(this);
/*返回到顶部 结束*/