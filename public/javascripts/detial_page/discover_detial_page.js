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