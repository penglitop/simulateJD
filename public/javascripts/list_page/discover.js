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

	var init=function(){
		naviArrow.addEventListener('click',clickArrow);
		for(var i=0;i<aWrapperP.length;i++){
			aWrapperP[i].index=i;
			aWrapperP[i].addEventListener('click',selectWrapItem);
		};

		for(var j=0;j<aDownTraP.length;j++){
			aDownTraP[j].index=j;
			aDownTraP[j].addEventListener('click',selectDownItem);
		};
	},
	clickArrow=function(){
		if(!hasClass(downTransition,'displayNone')){
			hideDown();
		}else{
			showDown();
		}
	},
	showDown=function(){
		addClass(arrow,'arrow_up');
		removeClass(downTransition,'displayNone');
		setTimeout(function(){
		removeClass(downTransition,'down_active');		
		},200);
	},
	hideDown=function(){
		removeClass(arrow,'arrow_up');
		addClass(downTransition,'down_active');
		setTimeout(function(){
			addClass(downTransition,'displayNone');
		},200);
	},
	selectWrapItem=function(){
		var x=0;
		if(!hasClass(this,'activeF')){
			removeClass(aWrapperP[activeInd],'activeF');
			addClass(this,'activeF');
			removeClass(aDownTraP[activeInd],'activeS');
			addClass(aDownTraP[this.index],'activeS');
			moveWrap.call(this);
		}
	},
	moveWrap=function(){
		var x=0;
		if(this.index>1&&this.index<=aWrapperP.length-1){
			x=-this.index*20;
			setTranslate(wrapperUl,x,0,0);
		}else if(this.index<=1){
			x=0;
			setTranslate(wrapperUl,x,0,0);
		}
		activeInd=this.index;
	},
	selectDownItem=function(){
		if(!hasClass(this,'activeF')){
			removeClass(aWrapperP[activeInd],'activeF');
			addClass(this,'activeS');
			removeClass(aDownTraP[activeInd],'activeS');
			addClass(aWrapperP[this.index],'activeF');
			moveWrap.call(this);
			hideDown();
		}
	}

	init();
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