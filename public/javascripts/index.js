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

/*返回到顶部 开始*/
;(function(global){
	var toTopBtn=bycss('#bar_top'),
		toToptimer=null;

	window.addEventListener('scroll',function(){
		var oldScrollTop=document.documentElement.scrollTop||window.pageYOffset||document.body.scrollTop;
		/*if(oldScrollTop>=5){
			show(toTopBtn);
		}else{
			hide(toTopBtn);
		}*/
	});
	toTopBtn.addEventListener('click',function(){
		clearInterval(toToptimer);
		toToptimer=setInterval(toTop,30);
	});

	function toTop(){
		var oldScrollTop=document.documentElement.scrollTop||window.pageYOffset||document.body.scrollTop,
			iSpeed=Math.floor(-oldScrollTop/2);
		document.body.scrollTop=window.pageYOffset=document.documentElement.scrollTop=oldScrollTop+iSpeed;
		if(oldScrollTop==0){
				clearInterval(toToptimer);
			}
	}
})(this);
/*返回到顶部 结束*/
/*轮播 开始*/
;(function(glboal){
	var slider=byid('slider'),
		imgLi=byEl('li',slider),
		pointer=byEl('span',slider);
	if(!slider){
		console.warn('轮播容器不存在');
		return;
	}
	var sliderList=byid('slider_list'),
		screenWidth=document.body.offsetWidth,
		sildeWidth=0,
		startX=0,
		moveX=0,
		endX=0,
		lastX=0,
		num=0;


	var init=function(){
		sliderList.addEventListener('touchstart',start);
		sliderList.addEventListener('touchmove',move);
		sliderList.addEventListener('touchend',end);
		setInterval(function(){
			if(num>=imgLi.length-1){
				num=0;
				removeClass(sliderList,'active');
				addClass(sliderList,'news_active');
				startSlide(num);
			}else{
				num++;
				addClass(sliderList,'active');
				removeClass(sliderList,'news_active');
				startSlide(num);
			}
			
		},2000);
	},
	start=function(e){
		startX=e.changedTouches[0].clientX;
		lastX=sliderList.offsetLeft;
	},
	move=function(e){
		moveX=e.changedTouches[0].clientX-startX;
		sliderList.style.left=moveX+lastX+'px';
	},
	end=function(e){
		endX=e.changedTouches[0].clientX;
		if(Math.abs(endX-startX)>=30){
			if((endX-startX)<0){
				startSlide(num+1);
				if(num!=imgLi.length-1){
					num++;
				}
			}else if((endX-startX)==0){
				startSlide(num);
			}else if((endX-startX)>0){
				startSlide(num-1);
				if(num!=0){
					num--;
				}
			}
		}else{
			addClass(sliderList,'active');
			startSlide(num);
		}
	},
	startSlide=function(index){
		index=index>=(imgLi.length-1)?imgLi.length-1:index;
		index=index<=0?0:index;
		/*addClass(sliderList,'active');*/
		sliderList.style.left=-index*screenWidth+'px';
		for(var i=0;i<pointer.length;i++){
			removeClass(pointer[i],'active');
		}
		addClass(pointer[index],'active');
	},
	setTranslate=function(el,x){
		var value='translate3d('+x+'px,'+0+'px,'+0+'px)';
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
		endTime=new Date('2018-4-30 23:59:59'),
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
			if(oldScrollTop>=85){
				addClass(seaBoxCover,'active');
				hide(downloadBannel);
				hide(topheader);
			}else{
				removeClass(seaBoxCover,'active');
			}
		})
})(this);
/*登录框固定 结束*/

/*消息滚动 开始*/
;(function(global){
	var scrollNews=bycss('#scroll_news'),
		newsList1=bycssAll('.news_list',scrollNews)[0],
		newsList2=newsList1.cloneNode(true),
		aLiHeight=scrollNews.offsetHeight,
		listHeight=newsList1.offsetHeight,
		time=1000,
		y1=0,
		y2=0;

		scrollNews.appendChild(newsList2);
		var newsItem=bycssAll('.news_item');

	var init=function(){
		setInterval(scrollUp,time);
	},
	setTranslate=function(el,y){
		el.style.transform = 'translate3d(0px,'+y+'px,0px)';
        el.style.webkitTransform='translate3d(0px,'+y+'px,0px)';
        el.style.msTransform='translate3d(0px,'+y+'px,0px)';
        el.style.mozTransform='translate3d(0px,'+y+'px,0px)';
        el.style.oTransform = 'translate3d(0px,'+y+'px,0px)';
	},
	scrollUp=function(){
		if(Math.abs(y1)>=listHeight){
			newsList1.classList.add('news_active');
			newsList2.classList.remove('news_active');
			y1=listHeight;
		}else if(y1==0){
			newsList2.classList.add('news_active');
			newsList1.classList.remove('news_active');
			y2=0;
		}else{
			newsList1.classList.remove('news_active');
			newsList2.classList.remove('news_active');
		}
		y1+=-aLiHeight;
		y2+=-aLiHeight;
		setTranslate(newsList1,y1);
		setTranslate(newsList2,y2);	
	};
init();

})(this);
/*消息滚动 结束*/

/*京东轮播 开始*/
/*;(function(){
	var sliderList=byid('slider_list'),
		seckillItem=byclass('sliderItem'),
		liWidth=seckillItem[0].offsetWidth,
		startX=0,
		lastX=0,
		moveX=0,
		endX=0;

	var midIdex=parseInt(seckillItem.length/2);
	for(var i=0;i<seckillItem.length;i++){
		if(i<=midIdex){
			seckillItem[i].style.left=-((midIdex-i)*liWidth)+'px';
		}else{
			seckillItem[i].style.left=(i*liWidth)-(midIdex*liWidth)+'px';
		}
	}

	var init=function(){
		sliderList.addEventListener('touchstart',start);
		sliderList.addEventListener('touchmove',move);
		sliderList.addEventListener('touchend',end);
	},
	start=function(ev){
		startX=ev.changedTouches[0].clientX;
	},
	move=function(ev){
		moveX=ev.changedTouches[0].clientX-startX;
		
	},
	end=function(ev){
		endX=ev.changedTouches[0].clientX;
		
	};
	function setTranslate(el,x){
		var value='translate3d('+x+'px,'+0+'px,'+0+'px)';
        el.style.transform = value;
        el.style.webkitTransform=value;
        el.style.msTransform=value;
        el.style.mozTransform=value;
        el.style.oTransform = value;
	};

	init();

})(this);*/
/*京东轮播 结束*/

/*京东秒杀拖动 开始*/
;(function(){
	var seckillul=byid('seckillul');
	if(!seckillul){
		return;
	}
	var seckill_new_items=bycssAll('.seckill_new_item',seckillul),
		seckill_all_item=bycss('.seckill_all_item',seckillul),
		liWid=seckill_new_items[0].offsetWidth,
		liNum=seckill_new_items.length,
		actInd=0,
		startX=0,
		timer;
	var init=function(){
		seckillul.style.width=(liNum*liWid+seckill_all_item.offsetWidth)+38+'px';
		seckillul.addEventListener('touchstart',start);
		seckillul.addEventListener('touchmove',move);
		seckillul.addEventListener('touchend',end);
	},
	start=function(e){
		removeClass(seckillul,'active');
		startX=e.changedTouches[0].clientX;
		clearTimeout(timer);
	},
	move=function(e){
		var moveX=e.changedTouches[0].clientX-startX;
		seckillul.style.left=(actInd*liWid+moveX)+'px';
	},
	end=function(e){
		var endX=e.changedTouches[0].clientX-startX,
			moveLiNum=Math.round(endX/liWid),
			endLeftNum=actInd+moveLiNum;
		endLeftNum=endLeftNum<(3-liNum)?(3-liNum):endLeftNum;
		endLeftNum=endLeftNum>0?0:endLeftNum;
		addClass(seckillul,'active');
		seckillul.style.left=endLeftNum*liWid+'px';
		actInd=endLeftNum;
		timer=setTimeout(function(){
			removeClass(seckillul,'active');
		},300);
	};
	init();
})();
/*京东秒杀拖动 结束*/