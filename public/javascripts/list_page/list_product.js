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
;(function(global){
	var saleBtn=bycss('#sales'),
		fliterBtn=bycss('#fliter'),
		multiBtn=bycss('#multiple'),
		priceBtn=bycss('#price'),
		that=multiBtn,
		activeInd=0,
		sortStatus='';

	var multiBtn=bycss('#multiple'),
		coverFloor=bycss('#cover_floor'),
		searchSort18=bycss('#searchSort18'),
		arrow=byEl('i',searchSort18),
		search1=bycss('#search1'),
		activeInd=0,
		sortofBrand=bycssAll('.sort_of_brand'),
		sidebarItem=bycssAll('.sidebar_iteam');

	var int=function(){
		saleBtn.addEventListener('click',sales);
		fliterBtn.addEventListener('click',fliter);
		priceBtn.addEventListener('click',price);
		for(var i=0;i<sidebarItem.length;i++){
			sidebarItem[i].index=i;
			sidebarItem[i].addEventListener('click',multipleItem);
		}
	},

	sales=function(){
		if(that){
			removeClass(that,'active');
			if(that==priceBtn){
				removeClass(that,'downPrice');
				removeClass(that,'upPrice');
			}
		}
		addClass(this,'active');
		that=this;
	},

	multiple=function(){
		if(searchSort18.style.display=='none'){
			show(coverFloor);
			show(searchSort18);
			addClass(search1,'space_height');
		}else{
			hide(coverFloor);
			hide(searchSort18);
			removeClass(search1,'space_height');
		}
	},

	multipleItem=function(){
		if(!hasClass(this,'active')){
			removeClass(sidebarItem[activeInd],'active');
			removeClass(arrow[activeInd],'tick');
			addClass(this,'active');
			addClass(arrow[this.index],'tick');
			multiBtn.innerHTML=sortofBrand[this.index].innerHTML;
			addClass(multiBtn,'active');
			hide(coverFloor);
			hide(searchSort18);
			removeClass(search1,'space_height');
			activeInd=this.index;
		}
	},

	price=function(){
		if(that){
			removeClass(that,'active');
			if(that==priceBtn){
				removeClass(that,'downPrice');
				removeClass(that,'upPrice');
			}
		}
		addClass(this,'active');
		addClass(this,'upPrice');
		that=this;
	};

	int();

	

	multiBtn.addEventListener('click',function(){
		multiple();

		if(that){
			if(that==multiBtn){
				return;
			}
			if(that==priceBtn){
				removeClass(that,'downPrice');
				removeClass(that,'upPrice');
			}
			removeClass(that,'active');
		}
		that=this;
			
		});	
})(this);
/*综合-销量-价格-筛选 结束*/

/*弹窗筛选 开始*/
;(function(global){


})(this);
/*弹窗筛选 结束*/