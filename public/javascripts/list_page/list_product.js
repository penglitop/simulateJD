"use strict";
/*关闭固定头部 开始*/
;(function(glboal){
	var downloadBannel=byid('layout_appdown'),
		topheader=byid('topheader'),
		coverSpace=byid('cover_space'),
		downloadClose=byid('download_close');
	downloadClose.addEventListener('click',function(){
		hide(downloadBannel);
		hide(topheader);
		coverSpace.style.height='1.27rem';
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
/*;(function(global){
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
		coverSpace=bycss('#cover_space'),
		activeInd=0,
		sortofBrand=bycssAll('.sort_of_brand'),
		sideItem=bycssAll('.side_iteam');

	var int=function(){
		saleBtn.addEventListener('click',sales);
		fliterBtn.addEventListener('click',fliter);
		priceBtn.addEventListener('click',price);
		for(var i=0;i<sideItem.length;i++){
			sideItem[i].index=i;
			sideItem[i].addEventListener('click',multipleItem);
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
			addClass(coverSpace,'space_height');
		}else{
			hide(coverFloor);
			hide(searchSort18);
			removeClass(coverSpace,'space_height');
		}
	},

	multipleItem=function(){
		if(!hasClass(this,'active')){
			removeClass(sideItem[activeInd],'active');
			removeClass(arrow[activeInd],'tick');
			addClass(this,'active');
			addClass(arrow[this.index],'tick');
			multiBtn.innerHTML=sortofBrand[this.index].innerHTML;
			addClass(multiBtn,'active');
			hide(coverFloor);
			hide(searchSort18);
			removeClass(coverSpace,'space_height');
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
})(this);*/
/*综合-销量-价格-筛选 结束*/

/*头部固定 开始*/
;(function(global){
	var layoutTop=bycss('#layout_top'),
		selectNav=bycss('#selectNav'),
		coverSpace=bycss('#cover_space'),
		addcar=bycss('#go_addcar'),
		toTop=bycss('#go_back_to_top'),
		layHeight=0,
		navHeight=0,
		tranY=0;
		
	var int=function(){
			window.addEventListener('scroll',scrollStyle);
			toTop.addEventListener('click',scrollTop);
		},

		scrollTop=function(){
			document.documentElement.scrollTop=window.pageYOffset=document.body.scrollTop=0;
		},

		scrollStyle=function(){
			var scrollTop=document.documentElement.scrollTop||window.pageYOffset||document.body.scrollTop;
			layHeight=getStyle(layoutTop,'height');
			navHeight=getStyle(selectNav,'height');
			tranY=-(parseInt(layHeight)-parseInt(navHeight));
			if(scrollTop>500){
				setTranslate(layoutTop,0,tranY,0);
				show(toTop);
				addClass(addcar,'active');
			}else{
				setTranslate(layoutTop,0,0,0);
				hide(toTop);
				removeClass(addcar,'active');
			}
		};

		int();
})(this);
/*头部固定 结束*/

/*添加购物车 开始*/
;(function(global){
	var carBtn=bycssAll('.car_button'),
		addSuccess=bycss('#add_succesed'),
		addnum=bycss('#addnum');

	var int=function(){
				for(var i=0;i<carBtn.length;i++){
					carBtn[i].addEventListener('click',addCar);
				}
			},

		addCar=function (){
				if(!hasClass(addSuccess,'active')){
					show(addSuccess);
					if(isNaN(parseInt(addnum.innerHTML))){
						addnum.innerHTML=1;
					}else{
						addnum.innerHTML=parseInt(addnum.innerHTML)+1;
					}
					setTimeout(function(){
						addClass(addSuccess,'active');
					},10);
					setTimeout(function(){
						removeClass(addSuccess,'active');
					},1000);
					setTimeout(function(){
						hide(addSuccess);
					},1800);
				}
			};
		int();
})(this);
/*添加购物车 结束*/

/*品牌-包装-口味 开始*/
/*;(function(global){
	var selectNav=bycssAll('.selected_nav'),
		searchFast=bycss('#searchFast'),
		coverFloor=bycss('#cover_floor'),
		down=bycssAll('.down'),
		move=window.document.ontouchmove,
		searchSort18=bycss('#searchSort18'),
		activeInd;

	var int=function(){
			for(var i=0;i<selectNav.length;i++){
				selectNav[i].index=i;
				selectNav[i].addEventListener('click',tabNav);
			}
		},

		tabNav=function(){
			document.body.style.overflow='hidden';
			if(activeInd==undefined){
				addClass(this,'show');
				show(searchFast);
				show(coverFloor);
				addClass(down[this.index],'active');
				activeInd=this.index;
			}else{
				addClass(this,'show');
				removeClass(down[activeInd],'active');
				addClass(down[this.index],'active');
				removeClass(selectNav[activeInd],'show');
				show(searchFast);
				show(coverFloor);
				activeInd=this.index;
			}
		};
	int();
})(this);*/
/*品牌-包装-口味 结束*/
var that=null;
/*综合-销量-价格-筛选 开始*/
;(function(global){
	var newChange=bycssAll('.new_change'),
		searchSort18=bycss('#searchSort18'),
		searchFast=bycss('#searchFast'),
		coverFloor=bycss('#cover_floor'),
		sideIteam=bycssAll('.side_iteam'),
		multiple=bycss('#multiple'),
		sortBrand=bycssAll('.sort_of_brand'),
		activeInd=0,
		selectInd=0;

	var int=function(){
		for(var i=0;i<newChange.length;i++){
			newChange[i].index=i;
			newChange[i].addEventListener('click',tabChange);
		}

		for(var j=0;j<sideIteam.length;j++){
			sideIteam[j].index=j;
			sideIteam[j].addEventListener('click',multiSelect)
		}
	},

	tabChange=function(){
		if(searchFast.style.display=='block'){
				removeClass(that,'active');
				hide(searchFast);
				hide(coverFloor);
			}
		if(this.index==0){
			if(searchSort18.style.display=='none'){
				document.body.style.overflow='hidden';
				removeClass(newChange[activeInd],'active');
				show(searchSort18);
				show(coverFloor);
				addClass(this,'active');
				activeInd=this.index;
			}else{
				document.body.style.overflow='auto';
				hide(searchSort18);
				hide(coverFloor);
			}
		}else{
			removeClass(newChange[activeInd],'active');
			document.body.style.overflow='auto';
			addClass(this,'active');
			Sort18();
			activeInd=this.index;
		}
	},

	multiSelect=function(){
		if (!hasClass(this,'active')){
			removeClass(sideIteam[selectInd],'active');
			addClass(this,'active');
			multiple.innerHTML=sortBrand[this.index].innerHTML;
			hide(searchSort18);
			selectInd=this.index;
		}
	},

	Sort18=function(){
		if(searchSort18.style.display=='block'){
			hide(searchSort18);
			hide(coverFloor);
		}
	};

	int();
})(this);
/*综合-销量-价格-筛选 结束*/

/*品牌-包装-口味 开始*/
;(function(global){
	var selectNav=bycssAll('.selected_nav'),
		coverFloor=bycss('#cover_floor'),
		searchSort18=bycss('#searchSort18'),
		searchFast=bycss('#searchFast'),
		sidebarIteam=bycssAll('.sidebar_iteam'),
		resetBtn=bycss('#reset'),
		jdSendBtn=bycss('#jd_send'),
		confirmBtn=bycss('#custom_qure');

	var int=function(){
		for(var i=0;i<selectNav.length;i++){
			selectNav[i].index=i;
			selectNav[i].addEventListener('click',selNav);
		}
		for(var j=0;j<sidebarIteam.length;j++){
			sidebarIteam[j].index=j;
			sidebarIteam[j].addEventListener('click',barIteam);
		}
		jdSendBtn.addEventListener('click',jdSend)
		confirmBtn.addEventListener('click',confirm);
		resetBtn.addEventListener('click',reset);

	},

	selNav=function(){
		
		if(searchSort18.style.display=='block'){
				hide(searchSort18);
			}
		if(that){
			if(!hasClass(this,'active')){
				document.body.style.overflow='hidden';
				removeClass(that,'active');
				addClass(this,'active');
				show(coverFloor);
				show(searchFast);
				that=this;
			}else{
				document.body.style.overflow='auto';
				hide(coverFloor);
				hide(searchFast);
				removeClass(that,'active');
			}
		}else{
			if(!hasClass(this,'active')){
				document.body.style.overflow='hidden';
				addClass(this,'active');
				show(coverFloor);
				show(searchFast);
				that=this;
			}else{
				document.body.style.overflow='auto';
				hide(coverFloor);
				hide(searchFast);
				removeClass(that,'active');
			}
		}
	},

	barIteam=function(){
		if(!hasClass(this,'active')){
			addClass(this,'active');
		}else{
			removeClass(this,'active');
		}
	},

	reset=function(){
		for(var i=0;i<sidebarIteam.length;i++){
			if(hasClass(sidebarIteam[i],'active')){
				removeClass(sidebarIteam[i],'active');
			}
		}
	},

	jdSend=function(){
		if(!hasClass(this,'active')){
			if(that!=null){
				removeClass(that,'active');
			}
			Sort18();
			hide(coverFloor);
			hide(searchFast);
			addClass(this,'active');
		}else{
			removeClass(this,'active');
		}
	},

	Sort18=function(){
		if(searchSort18.style.display=='block'){
			hide(searchSort18);
			hide(coverFloor);
		}
	};

	int();
})(this);
/*品牌-包装-口味 结束*/

/*筛选主页 开始*/
;(function(global){
	var fliterBtn=bycss('#fliter'),
		filterBlock=bycss('#filterBlock'),
		filterMask=bycss('#filterMask'),
		seaFastBtn=bycssAll('.searchFast_btn'),
		brandBtn=bycssAll('.brand_btn'),
		packBtn=bycssAll('.pack_btn'),
		brandName=bycss('#brand_name'),
		packName=bycss('#pack_name'),
		brandOpen=bycss('#brand_open'),
		packOpen=bycss('#pack_open'),
		brandBlock=bycss('#brandBlock'),
		packBlock=bycss('#packBlock'),

		borderBtn=bycssAll('.border_block');

	var int=function(){
		var i,j,t,n;
		fliterBtn.addEventListener('click',showFilter);
		brandOpen.addEventListener('click',brandShow);
		packOpen.addEventListener('click',packShow);
		BtnClick(i,seaFastBtn,seaFast);
		BtnClick(j,brandBtn,brand);
		BtnClick(t,packBtn,pack);
		
		for(var n=0;n<borderBtn.length;n++){
			borderBtn[n].index=n;
			borderBtn[n].addEventListener('click',addActive);
		}
	},

	showFilter=function(){
		show(filterMask);
		setTimeout(function(){
			document.body.style.overflow='hidden';
			addClass(filterBlock,'show');
		},100);
	},

	seaFast=function(){
		addActive.call(this);
	},

	brand=function(){
		addActive.call(this,brandName,brandBtn);
	},

	pack=function(){
		addActive.call(this,packName,packBtn);
	},

	addActive=function(objName,objBtn){
		if(objBtn&&objName){
			if(!hasClass(this,'active')){
				addClass(this,'active');
				objName.innerHTML+=objBtn[this.index].innerHTML;
			}else{
				removeClass(this,'active');
				objName.innerHTML='';
			}
		}else{
			if(!hasClass(this,'active')){
				addClass(this,'active');
			}else{
				removeClass(this,'active');
			}
		}
	},

	BtnClick=function(num,btnName,btnfn){
		for(var num=0;num<btnName.length;num++){
			btnName[num].index=num;
			btnName[num].addEventListener('click',btnfn);
		}
	},

	brandShow=function(){
		otherShow(this,brandBlock);
	},

	packShow=function(){
		otherShow(this,packBlock);
	},

	otherShow=function(obj,otherBlock){
		if(!hasClass(obj,'active')){
			addClass(obj,'active');
			show(otherBlock);
		}else{
			removeClass(obj,'active');
			hide(otherBlock);
		}
	};
	int();
})(this);
/*筛选主页 结束*/

/*筛选--全部 开始*/
;(function(global){
	var allCateBtn=bycss('#all_category'),
		indexRoot=bycss('#index_root'),
		catelogyRoot=bycss('#catelogyRoot'),
		allBackBtn=bycss('#allBack'),
		pannelRoot=bycss('#pannelRoot'),
		selAllBtn=bycss('#catelogy_selectAll'),
		selectRight=bycss('#selectRight'),
		upBtn=bycssAll('.up'),
		up=bycssAll('.classify_ul')[0],
		upList=byEl('li',up),
		upBlock=bycssAll('.cate_block'),
		cateList =bycssAll('.cate_list '),
		areaText=bycss('#areaText'),
		areaPanel=bycss('#areaPanel'),
		sendBackBtn=bycss('#sendBack');

	var int=function(){
		allCateBtn.addEventListener('click',showAllCate);
		allBackBtn.addEventListener('click',allBack);
		selAllBtn.addEventListener('click',selectAll);
		areaText.addEventListener('click',address);
		sendBackBtn.addEventListener('click',sendBack);
		for(var i=0;i<upList.length;i++){
			upList[i].index=i;
			upList[i].addEventListener('click',showUpBlock);
		}
		for(var j=0;j<cateList.length;j++){
			cateList[j].index=j;
			cateList[j].addEventListener('click',selectCateList);
		}
	},

	showAllCate=function(){
		addClass(pannelRoot,'show');
		show(catelogyRoot);
	},

	allBack=function(){
		removeClass(pannelRoot,'show');
		hide(catelogyRoot);
	},

	address=function(){
		addClass(pannelRoot,'show');
		show(areaPanel);
	},

	sendBack=function(){
		removeClass(pannelRoot,'show');
		hide(areaPanel);
	},

	selectAll=function(){
		allBack();
		removeClass(selectRight,'right');
	},

	showUpBlock=function(){
		if(!hasClass(this,'active')){
			addClass(this,'active');
			show(upBlock[this.index]);
		}else{
			removeClass(this,'active');
			hide(upBlock[this.index]);
		}
	},

	selectCateList=function(){
		if(!hasClass(this,'active')){
			addClass(this,'active');
			allCateBtn.innerHTML=cateList[this.index].innerHTML;
			removeClass(allCateBtn,'all');
			allBack();

		}else{
			removeClass(this,'active');
			allBack();
			allCateBtn.innerHTML='全部';
			addClass(allCateBtn,'all');
		}
	};
	int();

})(this);
/*筛选--全部 结束*/

/*筛选--配送至--地址选择 开始*/
;(function(global){
	var areaselected=bycss('#areaselected'),
		areaList=byEl('li',areaselected),
		areaCursor=bycss('#areaCursor'),
		areaBlock=bycss('#areaItem'),
		areaItem=byEl('li',areaBlock);


	var int=function(){
		for(var i=0;i<areaList.length;i++){
			areaList[i].index=i;
			areaList[i].addEventListener('click',fillArea);
		}

		for(var j=0;j<areaItem.length;j++){
			areaItem[j].index=j;
			areaItem[j].addEventListener('click',selectArea);
		}
	},

	fillArea=function(){

	},

	selectArea=function(){

	};

	int();
})(this);
/*筛选--配送至--地址选择 结束*/

/*筛选--全部品牌 开始*/
;(function(global){
	var moreBrandBtn=bycss('#moreBrand'),
		brandRoot=bycss('#brand_root'),
		pannelRoot=bycss('#pannelRoot'),
		brandBackBtn=bycss('#brand_back'),
		brandTab=bycssAll('.brand_select'),
		letterTitle=bycss('#brand_letters_title'),
		brandLetter=bycss('#brand_letter'),
		lettersList=bycss('#brand_letters_list'),
		brandRecommend=bycss('#brand_recommend'),
		brand_ul_title=bycss('#brand_ul_title'),
		activeInd=1;

	var int=function(){
		moreBrandBtn.addEventListener('click',showBrand);
		brandBackBtn.addEventListener('click',brandBack);
		for(var i=0;i<brandTab.length;i++){
			brandTab[i].index=i;
			brandTab[i].addEventListener('click',selectBrand);
		}
	},

	showBrand=function(){
		addClass(pannelRoot,'show');
		show(brandRoot);
	},

	brandBack=function(){
		removeClass(pannelRoot,'show');
		hide(brandRoot);
	},

	selectBrand=function(){
		if(this.index==0&&!hasClass(this,'selected')){
			removeClass(brandTab[activeInd],'selected');
			addClass(this,'selected');
			show(brandRecommend);
			hide(letterTitle);
			hide(brandLetter);
			hide(lettersList);
			activeInd=this.index;
		}else if(this.index==1&&!hasClass(this,'selected')){
			removeClass(brandTab[activeInd],'selected');
			addClass(this,'selected');
			hide(brandRecommend);
			show(letterTitle);
			show(brandLetter);
			show(lettersList);
			activeInd=this.index;
		}
	};

	int();
})(this);
/*筛选--全部品牌 结束*/
