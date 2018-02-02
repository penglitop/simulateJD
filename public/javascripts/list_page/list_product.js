"use strict";
function $ajaxGet(param){
	//1.创建Ajax对象
	var xhr;
	if(window.XMLHttpRequest){
		xhr=new XMLHttpRequest();
	}else{
		xhr=new ActiveXObject("Microsoft.XMLHTTP");
	}
	//4.接收
	xhr.onreadystatechange=function (){
		if(xhr.readyState==4){
			param.complete && param.complete();
			if(xhr.status==200){
				param.success && param.success(xhr.responseText);
			}else{
				param.error && param.error(xhr.responseText);
			}
		}
	};
	var reqUrl=param.url+'?param='+encodeURIComponent(JSON.stringify(param.data));
	//2.连接服务器（打开和服务器的连接）
	xhr.open('GET',reqUrl, true);
	//3.发送
	xhr.send();
}
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

	var init=function(){
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

	init();

	

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
		
	var init=function(){
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

		init();
})(this);
/*头部固定 结束*/

/*添加购物车 开始*/
;(function(global){
	var carBtn=bycssAll('.car_button'),
		addSuccess=bycss('#add_succesed'),
		addnum=bycss('#addnum');

	var init=function(){
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
		init();
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

	var init=function(){
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
	init();
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

	var init=function(){
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

	init();
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
		confirmBtn=bycss('#custom_qure'),
		listUl=bycssAll('.custom_info_list'),
		sortBrand=bycssAll('.sort_of_brand'),
		navBtn=bycssAll('.navBtn'),
		navName=[],
		switchBtn=true;

	var init=function(){
		addClick(selectNav,selNav);
		addClick(sidebarIteam,barIteam);
		jdSendBtn.addEventListener('click',jdSend)
		confirmBtn.addEventListener('click',confirm);
		resetBtn.addEventListener('click',reset);
		for(var i=0;i<selectNav.length;i++){
			navName.push(navBtn[i].innerHTML);
		}

	},

	addClick=function(obj,fn){
		for(var i=0;i<obj.length;i++){
			obj[i].index=i;
			obj[i].addEventListener('click',fn);
		}
	},
	confirm=function(){
		for(var i=0;i<selectNav.length;i++){
			selectNav[i].index=i;
			if(hasClass(selectNav[i],'active')){
				var contentNav=navBtn[i].innerHTML,
					sortBrand=byclass('sort_of_brand',listUl[i]),
					sidebarIteam=byclass('sidebar_iteam',listUl[i]);
				navBtn[i].innerHTML='';
				for(var j=0;j<sortBrand.length;j++){
					
					if(hasClass(sidebarIteam[j],'active')){
						navBtn[i].innerHTML=(sortBrand[j].innerHTML+',');
						hide(searchFast);
						hide(coverFloor);
						removeClass(selectNav[i],'active');
						addClass(selectNav[i],'ok');
						document.body.style.overflow='auto';
						switchBtn=false;
						return;
					}else{
						document.body.style.overflow='auto';
						navBtn[i].innerHTML=navName[i];
						hide(searchFast);
						hide(coverFloor);
						removeClass(selectNav[i],'active');
					}
				}
			}
		}
	},
	selNav=function(){
		
		if(searchSort18.style.display=='block'){
				hide(searchSort18);
			}
		if(that){
			if(!hasClass(this,'active')){
				if(hasClass(this,'ok')){
					removeClass(this,'ok');
				}
				document.body.style.overflow='hidden';
				removeClass(that,'active');
				addClass(this,'active');
				show(searchFast);
				show(coverFloor);
				if(that==this){
					show(listUl[this.index]);
				}else{
					hide(listUl[that.index]);
					show(listUl[this.index]);
				}
				that=this;
			}else{
				document.body.style.overflow='auto';
				hide(coverFloor);
				hide(searchFast);
				removeClass(that,'active');
				
			}
		}else{
			if(!hasClass(this,'active')){
				if(hasClass(this,'ok')){
					removeClass(this,'ok');
				}
				document.body.style.overflow='hidden';
				addClass(this,'active');
				show(searchFast);
				show(coverFloor);
				show(listUl[this.index]);
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
		for(var i=0;i<selectNav.length;i++){
			if(hasClass(selectNav[i],'active')){
				var hasClassLi=byclass('sidebar_iteam',listUl[i]),
					len=hasClassLi.length;
				for(var j=0;j<len;j++){
					removeClass(hasClassLi[j],'active');
				}
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

	init();
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
		resetBtn=byid('allResetBtn'),
		submitBtn=byid('submit'),
		brandArr=[],
		packArr=[],
		borderBtn=bycssAll('.border_block');

	var init=function(){
		fliterBtn.addEventListener('click',showFilter);
		brandOpen.addEventListener('click',brandShow);
		packOpen.addEventListener('click',packShow);
		resetBtn.addEventListener('click',reset);
		submitBtn.addEventListener('click',submit);
		BtnClick(seaFastBtn,seaFast);
		BtnClick(brandBtn,brand);
		BtnClick(packBtn,pack);
		BtnClick(borderBtn,addActive);
		/*for(var n=0;n<borderBtn.length;n++){
			borderBtn[n].index=n;
			borderBtn[n].addEventListener('click',addActive);
		}*/
	},

	showFilter=function(){
		show(filterMask);
		setTimeout(function(){
			document.body.style.overflow='hidden';
			addClass(filterBlock,'show');
		},100);
	},
	submit=function(){
		hide(filterMask);
		document.body.style.overflow='auto';
		removeClass(filterBlock,'show');
	},
	seaFast=function(){
		addActive.call(this);
	},

	brand=function(){
		addActive.call(this,brandName,brandBtn,brandArr);
	},

	pack=function(){
		addActive.call(this,packName,packBtn,packArr);
	},

	addActive=function(objName,objBtn,arr){
		if(objBtn&&objName){
			if(!hasClass(this,'active')){
				addClass(this,'active');
				arr.push(this.innerHTML);
				objName.innerHTML=arr.join(",");
			}else{
				removeClass(this,'active');
				for(var i=0;i<objBtn.length;i++){
					if(arr[i]==objBtn[this.index].innerHTML){
						var num=arr.indexOf(objBtn[this.index].innerHTML);
						arr.splice(num,1);
						objName.innerHTML=arr.join(",");
					}
				}
			}
		}else{
			if(!hasClass(this,'active')){
				addClass(this,'active');
			}else{
				removeClass(this,'active');
			}
		}
	},

	BtnClick=function(btnName,btnfn){
		for(var i=0;i<btnName.length;i++){
			btnName[i].index=i;
			btnName[i].addEventListener('click',btnfn);
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
	},
	reset=function(){
		sendReset();
		priceReset();
		allReset();
		otherReset();
		areaTextReset();
		allBrandReset();
	},
	sendReset=function(){
		areaText.innerHTML='配送至';
		for(var i=0;i<seaFastBtn.length;i++){
			if(hasClass(seaFastBtn[i],'active')){
				removeClass(seaFastBtn[i],'active');
			}
		}
	},
	priceReset=function(){
		var minPrice=byid('minPrice'),
			maxPrice=byid('maxPrice');
		maxPrice.value='';
		minPrice.value='';
		for(var i=0;i<borderBtn.length;i++){
			if(hasClass(borderBtn[i],'active')){
				removeClass(borderBtn[i],'active');
			}
		}
	},
	allReset=function(){
		var up=bycssAll('.classify_ul')[0],
		upList=byEl('li',up),
		upBlock=bycssAll('.cate_block'),
		allCateBtn=bycss('#all_category'),
		cateList =bycssAll('.cate_list ');
		allCateBtn.innerHTML='全部';
		addClass(allCateBtn,'all');
		if(_that&&_this){
			removeClass(upList[_that],'active');
			removeClass(cateList[_this],'active');
			hide(upBlock[_that]);
		}
	},
	otherReset=function(){
		brandName.innerHTML='';
		packName.innerHTML='';
		removeAllClass(brandBtn);
		removeAllClass(packBtn);
	},
	removeAllClass=function(obj){
		for(var i=0;i<obj.length;i++){
			if(hasClass(obj[i],'active')){
				removeClass(obj[i],'active');
			}
		}
	},
	areaTextReset=function(){
		var areaNav=byEl('li',areaselected),
		areaCursor=bycss('#areaCursor'),
		areaBlock=bycssAll('.areaItem');
		for(var i=0;i<areaNav.length;i++){
			if(i==0){
				var x=0;
				areaNav[i].innerHTML='请选择';
				setTranslate(areaCursor,x,0,0);
				show(areaBlock[i]);
			}else{
				areaNav[i].innerHTML='';
				hide(areaBlock[i]);
			}
		}
	},
	allBrandReset=function(){
		var brandRecommend=bycss('#brand_recommend'),
		brandLi=byEl('span',brandRecommend),
		brandLetter=bycss('#brand_letter'),
		brandLeLi=byEl('span',brandLetter);
		removeAllClass(brandLi);
		removeAllClass(brandLeLi);
	};
	init();
})(this);
/*筛选主页 结束*/
var _that,_this;
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

	var init=function(){
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
			_that=this.index;
		}else{
			removeClass(this,'active');
			hide(upBlock[this.index]);
			_that=this.index;
		}
	},

	selectCateList=function(){
		if(!hasClass(this,'active')){
			addClass(this,'active');
			allCateBtn.innerHTML=cateList[this.index].innerHTML;
			removeClass(allCateBtn,'all');
			allBack();
			_this=this.index;
		}else{
			removeClass(this,'active');
			allBack();
			allCateBtn.innerHTML='全部';
			addClass(allCateBtn,'all');
			_this=this.index;
		}
	};
	init();

})(this);
/*筛选--全部 结束*/

/*筛选--配送至--地址选择 开始*/
;(function(global){
	var areaselected=bycss('#areaselected'),
		areaNav=byEl('li',areaselected),
		areaCursor=bycss('#areaCursor'),
		areaBlock=bycssAll('.areaItem'),
		areaText=byid('areaText'),
		lastInd=0,
		x=0;

	var init=function(){
		addClick(areaBlock,showNextBlock);
		addClick(areaNav,selectNav);
		areaText.addEventListener('click',areaTextReset);
	},
	addClick=function(obj,fn){
		for(var i=0;i<obj.length;i++){
			obj[i].index=i;
			obj[i].addEventListener('click',fn);
		}
	},
	selectNav=function(ev){
		this.innerHTML='请选择';
		x=areaNav[0].offsetWidth*(this.index);
		setTranslate(areaCursor,x,0,0);
		show(areaBlock[this.index]);
		for(var i=this.index+1;i<areaNav.length;i++){
			areaNav[i].innerHTML='';
			hide(areaBlock[i]);
		}

	},
	showNextBlock=function(ev){
		var ev=ev||window.event,
			target=ev.target||ev.srcElement;
		if(target.nodeName.toLocaleLowerCase()=='li'){
			areaNav[this.index].innerHTML=target.innerHTML;
			x=areaNav[0].offsetWidth*((this.index)+1);
			setTranslate(areaCursor,x,0,0);
			if(this.index>=areaBlock.length-1){
				areaText.innerHTML='';
				for(var i=0;i<areaNav.length;i++){
					areaText.innerHTML+=areaNav[i].innerHTML;
				}
				sendBack();
			}else{
				areaNav[(this.index)+1].innerHTML='请选择';
				hide(this);
				show(areaBlock[(this.index)+1]);
			}
		}
	},
	sendBack=function(){
		removeClass(pannelRoot,'show');
		hide(areaPanel);
	},
	areaTextReset=function(){
		for(var i=0;i<areaNav.length;i++){
			if(i==0){
				x=0;
				areaNav[i].innerHTML='请选择';
				setTranslate(areaCursor,x,0,0);
				show(areaBlock[i]);
			}else{
				areaNav[i].innerHTML='';
				hide(areaBlock[i]);
			}
		}
	};
	init();
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
		brandUlTitle=bycss('#brand_ul_title'),
		brandLi=byEl('span',brandRecommend),
		brandName=bycss('#brand_name'),
		brandOkBtn=bycss('#brand_dcetermine'),
		brandLeLi=byEl('span',brandLetter),
		brandArr=[],
		initShow=false,
		activeInd=1;

	var init=function(){
		moreBrandBtn.addEventListener('click',showBrand);
		brandBackBtn.addEventListener('click',brandBack);
		brandOkBtn.addEventListener('click',brandOk);
		addClick(brandTab,null,selectBrand);
		addClick(brandLi,brandLi,selectLi);
		addClick(brandLeLi,brandLeLi,selectLi);		
	},

	addClick=function(obj,list,fn){
		for(var i=0;i<obj.length;i++){
			obj[i].index=i;
			obj[i].listParent=list;
			obj[i].addEventListener('click',fn);
		}
	},

	showBrand=function(){
		addClass(pannelRoot,'show');
		show(brandRoot);
		!initShow && scrollBrand();
		initShow=true;
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
	},

	selectLi=function(){
		var _brandLi=this.listParent;
		if(!hasClass(this,'active')){
			addClass(this,'active');
			brandArr.push(this.innerHTML);
			brandName.innerHTML=brandArr.join(",");
		}else{
			removeClass(this,'active');
			for(var i=0;i<brandArr.length;i++){
				if(brandArr[i]==_brandLi[this.index].innerHTML){
					var num=brandArr.indexOf(_brandLi[this.index].innerHTML);
					brandArr.splice(num,1);
					brandName.innerHTML=brandArr.join(",");
				}
			}
		}
	},

	brandOk=function(){
		brandBack();
	}

	init();
})(this);
/*筛选--全部品牌 结束*/
function scrollBrand(){
	var brandLetterList=bycss('#brand_letters_list'),
		brandLetter=byid('brand_letter'),
		brandLettersTitle=byid('brand_letters_title'),
		brandUlTitle=bycssAll('.brand_ul_title',brandLetter);
	var titleTops={},
		liHei=0;
	if(!brandLetter){
		return;
	}
	var init=function(){
		brandLetter.addEventListener('scroll',scrollList);
		brandLetterList.addEventListener('click',clickList);
		setTitleTop();
	},
	clickList=function(e){
		e.stopPropagation();
		var elem=e.target;
		if(elem.tagName.toUpperCase()=='LI'){
			var _key=elem.innerHTML;
			if(_key=='A'){
				brandLetter.scrollTop=titleTops[_key];
				return;
			}
			brandLetter.scrollTop=titleTops[_key]+liHei;
		}
	},
	setTitleTop=function(){
		titleTops.A=0;
		for(var i=0,len=brandUlTitle.length;i<len;i++){
			titleTops[brandUlTitle[i].innerHTML]=brandUlTitle[i].parentNode.offsetTop;
		}
		liHei=brandUlTitle[0].parentNode.offsetHeight;
	},
	scrollList=function(){
		var _scTop=this.scrollTop,
			lasti=null;
		for(var i in titleTops){
			if(_scTop<titleTops[i]){
				break;
			}else{
				lasti=i;
			}
		}
		brandLettersTitle.innerHTML=lasti;
	};

	init();
};