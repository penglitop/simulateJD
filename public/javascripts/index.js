"use strict";
/*关闭固定头部 开始*/
;(function(glboal){
	var downloadBannel=byid('download_bannel'),
		topheader=byid('topheader'),
		downloadClose=byid('download_close');
	var wouldShow=localStorage.getItem('wouldShow');
	if(wouldShow=='false'){
		return;
	}
	show(downloadBannel);
	downloadClose.addEventListener('click',function(){
		hide(downloadBannel);
		hide(topheader);
		localStorage.setItem('wouldShow','false');
	});
})(this);
/*关闭固定头部 结束*/
/*轮播 开始*/
;(function(glboal){
	var slider=byid('slider');
	if(!slider){
		console.warn('轮播容器不存在');
		return;
	}
	var slider_list=byid('slider_list');
	var startX=0;
	var init=function(){
		slider.addEventListener('touchstart',startTouch);
		slider.addEventListener('touchmove',moveTouch);
		slider.addEventListener('touchend',endTouch);
	},
	startTouch=function(e){
		startX=e.touches[0].clientX;
	},
	moveTouch=function(e){
		var movex=e.changedTouches[0].clientX-startX;
		slider_list.style.marginLeft=movex+'px';
	},
	endTouch=function(e){
		var endx=e.changedTouches[0].clientX-startX;
	},
	setTranslate=function(el,x){
		var value='translate3d('+x+'px,0px,0px)';
        el.style.transform = value;
        el.style.webkitTransform=value;
        el.style.msTransform=value;
        el.style.mozTransform=value;
        el.style.oTransform = value;
    };
	init();
})(this);
/*轮播 end*/
/*京东秒杀倒计时 开始*/
;(function(global){
	var oHours=byid('time_hours'),
		oMinutes=byid('time_mintues'),
		oSeconds=byid('time_seconds'),
		hours=-1,
		mintues=-1,
		intervaler=null;
	function countDown(){
		var curTime=new Date(),
		endTime=new Date('2017-12-31 23:59:59'),
		countTime=(endTime.getTime()-curTime.getTime())/1000;
		if(countTime<1){
			console.log('The end');
			clearInterval(intervaler);
			return;
		}
		var nhours=Math.floor(countTime/60/60%24),
		nmintues=Math.floor(countTime/60%60),
		nseconds=Math.floor(countTime%60);
		if(nhours!=hours){
			hours=nhours;
			bit(oHours,nhours);
		}
		if(nmintues!=mintues){
			mintues=nmintues;
			bit(oMinutes,nmintues);
		}
		bit(oSeconds,nseconds);
	}
	function bit(obj,num){
		if(num<10){
			obj.innerHTML='0'+num;
		}else{
			obj.innerHTML=num;
		}
	}
	countDown();
	intervaler=setInterval(countDown,1000);
})(this);
/*京东秒杀倒计时 结束*/

/*轮播 开始*/
/*var slider=bycss('.slider'),
	sliderList=bycss('.slider_list'),
	aLi=bycss('.slider_list li'),
	aLiWidth=sliderList.offsetWidth;

	sliderList.style.width=aLi.length*100+'%';
	
	//初始化手指坐标点
	var startPoint=0,
		startEle=0;

	//手指按下
	slider.addEventListener('touchstart',function(e){
		startPoint=e.changedTouches[0].pageX;
		startEle=sliderList.offsetLeft;
	});

	//手指滑动
	slider.addEventListener('touchmove',function(e){
		var currPoint=e.changedTouches[0].pageX,
			disX=currPoint-startPoint,
			left=startEle+disX;

			sliderList.style=left+'px';		
	});

	//当手指抬起的时候，判断图片滚动离左右的距离
	slider.addEventListener('touched',function(e){
		var left=sliderList.offsetLeft,
			currNum=Math.round(-left/aLiWidth);
			currNum=currNum>=(aLi.length-1)?aLi.length-1:currNum;
			currNum=currNum<=0?0:currNum;
			sliderList.style.left=-currNum*slider.offsetWidth+'px';


	})*/
/*轮播 结束*/

/*登录框固定 开始*/
;(function(global){
	var seaBoxCover=bycss('#jd_search_box_cover'),
		downloadBannel=byid('download_bannel'),
		topheader=byid('topheader');
		window.addEventListener('scroll',function(){
			var oldScrollTop=document.body.scrollTop||window.pageYOffset||document.documentElement.scrollTop;
			if(oldScrollTop>=2){
				if(!hasClass(seaBoxCover,'active')){
					addClass(seaBoxCover,'active');
					if(topheader.style.display=='block'){
						topheader.style.display='none';
						downloadBannel.style.display='none';
					}
				}
			}else{
				removeClass(seaBoxCover,'active');
			}
		})
})(this);
/*登录框固定 结束*/

/*消息滚动 开始*/
;(function(global){
	/*var	newsList1=bycss('.news_list');

	if(!newsList1){
		return;
	}

	var	lis=byclass('news_item',newsList1),
		firstliclone=lis[0].cloneNode(true),
		aLiHeight=lis[0].offsetHeight,
		listHeight=newsList1.offsetHeight,
		time=1000,
		y=0;

	newsList1.appendChild(firstliclone);

	var init=function(){
		//setInterval(scrollUp,time);
	},
	scrollList1=function(){
		setTranslate(newsList1,y);
	},
	scrollUp=function(){
		y -= aLiHeight;
		scrollList1();
		setScrollY();
		console.log(new Date().getSeconds());
	},
	setScrollY=function(){
		if(y<-listHeight){
			y=0;
			newsList1.classList.add('news_active');
			scrollList1();
			setTimeout(function(){
				newsList1.classList.remove('news_active');
			},300);
		}
	},
	setTranslate=function(el,y){
        el.style.transform = 'translate3d(0px,'+y+'px,0px)';
        el.style.webkitTransform='translate3d(0px,'+y+'px,0px)';
        el.style.msTransform='translate3d(0px,'+y+'px,0px)';
        el.style.mozTransform='translate3d(0px,'+y+'px,0px)';
        el.style.oTransform = 'translate3d(0px,'+y+'px,0px)';
    };
	init();*/

	var scrollNews=bycss('#scroll_news'),
		newsList1=bycssAll('.news_list',scrollNews)[0],
		newsList2=newsList1.cloneNode(true),
		aLiHeight=scrollNews.offsetHeight,
		listHeight=newsList1.offsetHeight,
		time=1000,
		y=0;

		scrollNews.appendChild(newsList2);

	var int=function(){
		setInterval(scrollUp,time);
	},
	scrollUp=function(){
		y=y-aLiHeight;
		setScrollY();
		setTranslate(newsList1,y);
		setTranslate(newsList2,y);
		
	},
	setTranslate=function(el,y){
		el.style.transform = 'translate3d(0px,'+y+'px,0px)';
        el.style.webkitTransform='translate3d(0px,'+y+'px,0px)';
        el.style.msTransform='translate3d(0px,'+y+'px,0px)';
        el.style.mozTransform='translate3d(0px,'+y+'px,0px)';
        el.style.oTransform = 'translate3d(0px,'+y+'px,0px)';
	},
	setScrollY=function(){
		if(Math.abs(y)>=2*listHeight){
			y=0;
			newsList1.classList.add('news_active');
			newsList2.classList.add('news_active');
		}else{
			newsList1.classList.remove('news_active');
			newsList2.classList.remove('news_active');
		}
	}
	int();
})(this);
/*消息滚动 结束*/