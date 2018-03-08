"use strict";
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

/*清空特色服务 开始*/
/*;(function(global){
	var cleanBtn=bycss('#clean_btn'),
		cleanBox=bycss('#clean_box'),
		searchToast=bycss('#search_toast'),
		yesClean=bycss('#yes_clean'),
		noClean=bycss('#no_clean');

	var cleanSeaTost=localStorage.getItem('cleanSeaTost');
		if(cleanSeaTost=='false'){
			return
		}

		cleanBtn.addEventListener('click',function(){
			show(searchToast);
		});

		yesClean.addEventListener('click',function(){
			hide(searchToast);
			hideBox();
		});

		noClean.addEventListener('click',function(){
			hide(searchToast);
		});		

		function hideBox(){
			if(cleanBox){
				cleanBox.style.display=='none';
				localStorage.setItem('cleanSeaTost','false');
			}
		}
})(this);*/
/*清空特色服务 结束*/
/*返回按钮 开始*/
;(function(global){
	var goBackBtn=byid('layout_urlblack');
	var init=function(){
		goBackBtn.addEventListener('click',goBack);
	},
	goBack=function(){
		if(window.history.go(-1)){
			window.history.go(-1);
		}
	};
	init();
})(this);
/*返回按钮 结束*/

/*左侧目录 开始*/
;(function(global){
	var cateListUl=bycss('#category_list_ul'),
		ulHeight=cateListUl.offsetHeight,
		conHeight=bycss('#category12').offsetHeight,
		cha=ulHeight-conHeight,
		aA=bycssAll('a',cateListUl),
		activeInd=0,
		startY=0,
		lastY=0;

		for(var i=0;i<aA.length;i++){
			aA[i].index=i;
			aA[i].addEventListener('click',function(e){
				e.stopPropagation();
				if(!hasClass(this,'active')){
					removeClass(aA[activeInd],'active');
					addClass(this,'active');
					activeInd=this.index;
					lastY=-(this.index*aA[0].offsetHeight);
					if(lastY<-cha){
						lastY=-cha;
					}
					setTranslate(cateListUl,0,lastY,0);
				}
			})
		};

		var int=function(){
				if(cha<=0){
					return;
				}
				cateListUl.addEventListener('touchstart',startTouch);
				cateListUl.addEventListener('touchmove',moveTouch);
				cateListUl.addEventListener('touchend',endTouch);
			},
			startTouch=function(e){
				startY=e.touches[0].clientY;
			},
			moveTouch=function(e){
				var moveY=e.changedTouches[0].clientY-startY+lastY;
				addClass(cateListUl,'tranY_active');
				setTranslate(cateListUl,0,moveY,0);
			},
			endTouch=function(e){
				var endY=e.changedTouches[0].clientY-startY+lastY;
				if(endY>0){
					endY=0;
				}else if(endY<-cha){
					endY=-cha;
				}
				lastY=endY;
				removeClass(cateListUl,'tranY_active');
				setTranslate(cateListUl,0,endY,0);
			};
			int();
})(this);
/*左侧目录 结束*/

/*输入框部分 开始*/
;(function(global){
	var layNewkeyword=bycss('#layout_newkeyword'),
		laySearchSubmit=bycss('#layout_search_submit'),
		layoutJdKey=bycss('#layout_jdKey'),
		categoryBody=bycss('#categoryBody'),
		searchLand=bycss('#search_land_searchland'),
		layjdBar=bycss('#layout_jdBar'),
		layUrlblack=bycss('#layout_urlblack');

		layNewkeyword.addEventListener('click',function(){
			hide(categoryBody);
			hide(layoutJdKey);
			show(searchLand);
			show(laySearchSubmit);
			if(layjdBar.style.display=='block'){
				layjdBar.style.display='none';
			}
		});

		layUrlblack.addEventListener('click',function(){
			hide(searchLand);
			hide(laySearchSubmit);
			show(layoutJdKey);
			show(categoryBody)
		})		
})(this);
/*输入框部分 结束*/