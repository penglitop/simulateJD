"use strict";
/*头部打开 开始*/
;(function(global){
	var swiperCloseBtn=bycss('#swiper_close_btn'),
		swiperCon=bycss('#m_header_swiper_con');

		swiperCloseBtn.addEventListener('click',function(){
			hide(swiperCon);
		})
})(this);
/*头部打开 结束*/

/*购物车头部 开始*/
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
/*购物车头部 结束*/

/*展开全部商品 开始*/
;(function(){
	var moreProduct=byid('moreProduct'),
		moreBtn=byid('moreBtn'),
		moreText=byid('moreText'),
		foldIcon=byid('foldIcon');
	var init=function(){
		moreBtn.addEventListener('click',showMore);
	},
	showMore=function(){
		if(moreProduct.style.display=='none'){
			show(moreProduct);
			removeClass(foldIcon,'open');
			addClass(foldIcon,'close');
			moreText.innerHTML='收起';
		}else{
			hide(moreProduct);
			addClass(foldIcon,'open');
			removeClass(foldIcon,'close');
			moreText.innerHTML='展开全部商品';
		}
	};

	init();
})(this);
/*展开全部商品 结束*/