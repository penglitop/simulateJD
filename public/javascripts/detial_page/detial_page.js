"use strict";

/*关闭固定头部 开始*/
;(function(glboal){
	var downloadBannel=byid('layout_appdown'),
		downloadClose=byid('download_close'),
		headerShow=localStorage.getItem('headerShow'),
		holdDivTop=bycss('#hold_div_top');
		if(headerShow=='false'){
			return;
		}

	downloadClose.addEventListener('click',function(){
		hide(downloadBannel);
		if(!hasClass(holdDivTop,'heightActive')){
			removeClass(holdDivTop,'hold_div_top');
			addClass(holdDivTop,'heightActive');
		}
		localStorage.setItem(headerShow,'false');
	});
})(this);
/*关闭固定头部 结束*/

/*列表出现 开始*/
;(function(global){
	var layKey=bycss('#m_common_header_jdkey'),
		layjdBar=bycss('#m_common_header_shortcut'),
		headerGoback=bycss('#m_common_header_goback');

	var init=function(){
		layKey.addEventListener('click',listShow);
		headerGoback.addEventListener('click',goBack);
	},		
	goBack=function(){
		if(window.history.go(-1)){
			window.history.go(-1);
		}
	},

	listShow=function(){
		if(layjdBar.style.display=='none'){
			show(layjdBar);
		}else{
			hide(layjdBar);
		}
	};
	init();
})(this);
/*列表出现 结束*/

/*返回到顶部 开始*/
;(function(global){
	var toTopBtn=bycss('#index_to_top'),
		toToptimer=null;

	var init=function(){
		window.addEventListener('scroll',showTopBtn);
		toTopBtn.addEventListener('click',function(){
			clearInterval(toToptimer);
			toToptimer=setInterval(toTop,30);
		});
	},
	showTopBtn=function(){
		var oldScrollTop=document.documentElement.scrollTop||window.pageYOffset||document.body.scrollTop;
		if(oldScrollTop>=5){
			show(toTopBtn);
		}else{
			hide(toTopBtn);
		}
	},
	toTop=function(){
		var oldScrollTop=document.documentElement.scrollTop||window.pageYOffset||document.body.scrollTop,
			iSpeed=Math.floor(-oldScrollTop/6);
		document.body.scrollTop=window.pageYOffset=document.documentElement.scrollTop=oldScrollTop+iSpeed;
		if(oldScrollTop==0){
			clearInterval(toToptimer);
		}
	};

	init();
})(this);
/*返回到顶部 结束*/

/*促销展开 开始*/
;(function(global){
	var promoItem=bycss('#promotion_item'),
		promoArrow=bycss('#promoicon_arrow');

	var init=function(){
		promoArrow.addEventListener('click',arrowShow);
	},		
	arrowShow=function(){
		if(promoItem.style.display=='block'){
			hide(promoItem);
			removeClass(promoArrow,'icon_arrowup');
		}else{
			show(promoItem);
			addClass(promoArrow,'icon_arrowup');
		}
	};
	init();
})(this);
/*促销展开 结束*/

/*已选弹出框 开始*/
;(function(global){
	var menuMask=bycss('#flick_menu_mask'),
		specMenu=bycss('#spec_menu'),
		iconPopups=bycss('#icon_popups'),
		menuClose=bycss('#spec_menu_close');

	var init=function(){
		iconPopups.addEventListener('click',menuShow);
		menuClose.addEventListener('click',menuHide);
	},

	menuShow=function(){
		show(menuMask);
		removeClass(specMenu,'spec_menu_hide');
		addClass(specMenu,'spec_menu_show');
		show(specMenu);
	},

	menuHide=function(){
		removeClass(specMenu,'spec_menu_show');
		addClass(specMenu,'spec_menu_hide');
		
		setTimeout(function(){
			hide(menuMask);
			hide(specMenu);
		},700);

		setTimeout(function(){
			hide(specMenu);
		},480);
	};
	init();
})(this);
/*已选弹出框 结束*/

/*已选弹出框--数量 开始*/
;(function(global){
	var quaDecrease=bycss('#quantity_decrease'),
		quaIncrease=bycss('#quantityPlus'),
		number=bycss('#number'),
		amount=bycss('#amount'),
		selectAmount=bycss('#select_amount'),
		addCartSpec=bycss('#add_cart_spec'),
		specMenu=bycss('#spec_menu'),
		menuMask=bycss('#flick_menu_mask'),
		addSuccesed=bycss('#add_succesed'),
		carNum=bycss('#carNum'),
		addCartBtm=bycss('#addCartBtm');

	var init=function(){
		quaIncrease.addEventListener('click',productNum);
		quaDecrease.addEventListener('click',addNum);
		addCartSpec.addEventListener('click',cartAbove);
		addCartBtm.addEventListener('click',cartBttom);
	},
	productNum=function(){
		number.value=parseInt(number.value)+1;
		amount.innerHTML=parseInt(number.value)+'件';
		selectAmount.innerHTML=parseInt(number.value)+'件';
	},
	cartAbove=function(){
		removeClass(specMenu,'spec_menu_show');
		addClass(specMenu,'spec_menu_hide');
		setTimeout(function(){
			hide(menuMask);
			hide(specMenu);
		},700);
		setTimeout(function(){
			hide(specMenu);
		},480);
		setTimeout(function(){
			show(addSuccesed);
		},900);
		setTimeout(function(){
			hide(addSuccesed);
		},1800);
		carNum.innerHTML=parseInt(number.value)+parseInt(carNum.innerHTML);
	},
	cartBttom=function (){
		setTimeout(function(){
			show(addSuccesed);
		},300);

		setTimeout(function(){
			hide(addSuccesed);
		},1200);

		carNum.innerHTML=parseInt(number.value)+parseInt(carNum.innerHTML);
	},
	addNum=function(){
		if(number.value=='1'){
			number.value=1;
		}else{
			number.value=parseInt(number.value)-1;
		}
		amount.innerHTML=parseInt(number.value)+'件';
		selectAmount.innerHTML=parseInt(number.value)+'件';
	};
	init();	
})(this);
/*已选弹出框--数量  结束*/

/*服务说明 开始*/
;(function(global){
	var serText1=bycss('#service_text1'),
		serText2=bycss('#service_text2'),
		serMenu=bycss('#service_menu'),
		serOkBtn=bycss('#service_ok_btn'),
		menuMask=bycss('#flick_menu_mask'),
		serMenuClose=bycss('#service_menu_close');

	var init=function(){
		serText1.addEventListener('click',serviceBtn);
		serText2.addEventListener('click',serviceBtn);
		serMenuClose.addEventListener('click',serviceClose);
		serOkBtn.addEventListener('click',serviceClose);
	},		
	serviceBtn=function (){
		removeClass(serMenu,'service_menu_hide');
		addClass(serMenu,'service_menu_show');
		show(menuMask);
		show(serMenu);
	},
	serviceClose=function(){
		hide(menuMask);
		hide(serMenu);
		removeClass(serMenu,'service_menu_show');
	};
	init();
})(this);
/*服务说明 结束*/

/*降价通知 开始*/
;(function(global){
	var depreInformPr=bycss('#depreciateInformPr'),
		Mask=bycss('#flick_menu_mask'),
		deInformBlock=bycss('#depreciateInformBlock'),
		cancelBtn=bycss('#cancel_but'),
		yesBtn=bycss('#yes_but'),
		subscribe=bycss('#subscribe'),
		dePrice=bycss('#depreciate_price'),
		dePhone=bycss('#depreciate_phoneno'),
		inputPrompt=bycss('#input_prompt'),
		phoneNumPrompt=bycss('#phone_num_prompt'),
		smallPrice=bycss('#small_price'),
		bigPrice=bycss('#big_price'),
		discountBlock=bycss('#discount_block'),
		price=parseFloat(bigPrice.innerHTML+smallPrice.innerHTML);


		depreInformPr.addEventListener('click',popAppear);

		cancelBtn.addEventListener('click',popDisapper);

		yesBtn.addEventListener('click',subscription);

		dePhone.addEventListener('blur',inputPhone);

		dePhone.addEventListener('input',function(){
			phoneNumPrompt.style.visibility='hidden';
		});

		dePrice.addEventListener('blur',inputPrice);

		dePrice.addEventListener('input',function(){
			inputPrompt.style.visibility='hidden';
		});

		dePrice.addEventListener('input',hideDiscount);

		function hideDiscount(){
			hide(discountBlock);
		}

		function inputPrice(){
			var comparePrice=parseFloat(dePrice.value);
			if(isNaN(comparePrice)){
				inputPrompt.style.visibility='visible';
				inputPrompt.innerHTML='请输入期望价格!';
				return false;
			};
			
			if(comparePrice>price){
				inputPrompt.style.visibility='visible';
				inputPrompt.innerHTML='期望价格不能大于当前价格!';
				return false;
			};
			dePrice.value=comparePrice.toFixed(2);
			inputPrompt.style.visibility='hidden';
			discountBlock.innerHTML=(comparePrice/price).toFixed(1)+'折';
			show(discountBlock);
			return true;
		}

		function inputPhone(){
			var reg=/^1[3|4|5|7|8][0-9]\d{8}/;
			if(dePhone.value==''){
				phoneNumPrompt.style.visibility='visible';
				phoneNumPrompt.innerHTML='手机号码不能为空!';
				return false;
			};
			if(reg.test(dePhone.value)==false){
				phoneNumPrompt.style.visibility='visible';
				phoneNumPrompt.innerHTML='手机号码错误,请重新输入!';
				return false;
			}
			phoneNumPrompt.style.visibility='hidden';
			return true;
		}

		function popDisapper(){
			dePrice.value='';
			dePhone.value='';
			phoneNumPrompt.style.visibility='hidden';
			inputPrompt.style.visibility='hidden';
			discountBlock.style.display='none';
			hide(Mask);
			hide(deInformBlock);
		}

		function popAppear(){
			show(Mask);
			show(deInformBlock);
		}

		function subscription(){
			var flagPrice=inputPrice(),
				 flagPhone=inputPhone();
				 inputPrice();
				 inputPhone();

		 	if(flagPrice==true &&flagPhone==true){
		 		popDisapper();
				setTimeout(function(){
					show(subscribe);
				},400);

				setTimeout(function(){
					hide(subscribe);
				},1200);
	          	return true;
	          }else{
	            return false;
            }
		}
})(this);
/*降价通知 结束*/

/*关注 开始*/
;(function(){
	var focusOn=bycss('#focusOn'),
		attentFocus=bycss('#attentionFocus'),
		focuScale=bycss('#focus_scale'),
		concernInfo=bycss('#concern_info'),
		concernSuccesed=bycss('#concern_succesed'),
		cancelConcern=bycss('#cancel_concern');

	var init=function(){
		focusOn.addEventListener('click',concern);
	},
	concern=function(){
		if(focuScale.style.display=='none'){
			removeClass(attentFocus,'focus_out');
			addClass(attentFocus,'focus_on');
			addClass(focuScale,'focus_scale_show');
			addClass(attentFocus,'click_focus_show');
			show(focuScale);
			concernInfo.innerHTML='已关注';
			setTimeout(function(){
				show(concernSuccesed);
			},200);
			setTimeout(function(){
				hide(concernSuccesed);
			},1200);
		}else{
			addClass(attentFocus,'focus_out');
			removeClass(attentFocus,'focus_on');
			removeClass(focuScale,'focus_scale_show');
			removeClass(attentFocus,'click_focus_show');
			hide(focuScale);
			concernInfo.innerHTML='关注';
			setTimeout(function(){
				show(cancelConcern);
			},200);
			setTimeout(function(){
				hide(cancelConcern);
			},1200);
		}
	};
	init();
})(this);
/*关注 结束*/

/*商品-详情-评价 切换 开始*/
;(function(global){
	var tab=bycss('#header_tabs'),
		tabItem=byEl('span',tab),
		slider=bycss('#header_slider'),
		sliderCon=bycssAll('.header_slider_con')[0],
		sliderItem=bycssAll('.header_slider_item'),
		detialFixed=bycss('#detial_fixed'),
		tabLst=bycss('#tab_lst'),
		detialTab=byEl('a',tabLst),
		detialBlock=bycssAll('.detial'),
		tabs=bycss('#tabs'),
		num=null,
		activeInd=0,
		selectInd=0,
		x=0,
		clientWidth=document.documentElement.clientWidth;


		slider.style.width=clientWidth;
		sliderCon.style.width=sliderItem.length*clientWidth+'px';
		num=sliderItem[0];
		slider.style.height=getStyle(num,'height');
		for(var i=0;i<tabItem.length;i++){
			tabItem[i].index=i;
			tabItem[i].addEventListener('click',function(){
				document.body.scrollTop=window.pageYOffset=document.documentElement.scrollTop=0+'px';
				if(this.index==1){
					show(detialFixed);
				}else{
					hide(detialFixed);
				}
				if(this.index==2){
					show(tabs);
				}else{
					hide(tabs);
				}
				num=sliderItem[this.index];
				slider.style.height=getStyle(num,'height');
				if(!hasClass(this,'header_tab_selected')){
					removeClass(tabItem[activeInd],'header_tab_selected');
					addClass(this,'header_tab_selected');
					activeInd=this.index;
					x=-(clientWidth*this.index);
					setTranslate(sliderCon,x,'0','0');
				}
			});
		}

		for(var j=0;j<detialTab.length;j++){
			detialTab[j].Ind=j;
			detialTab[j].addEventListener('click',function(){
				num=detialBlock[this.Ind];
				slider.style.height=getStyle(num,'height');
				if(!hasClass(this,'on')){
					removeClass(detialTab[selectInd],'on');
					addClass(this,'on');
					hide(detialBlock[selectInd]);
					show(detialBlock[this.Ind]);
					selectInd=this.Ind;
				}
			})
		}

})(this);
/*商品-详情-评价 切换 结束*/

/*焦点图片切换 开始*/
/*;(function(global){
	var slide=bycss('#slide'),
		slideUl=bycss('#slide_ul'),
		slideLi=byEl('li',slideUl),
		nowPage=bycss('#nowPage'),
		totalPage=bycss('#totalPage'),
		startX=0,
		lastX=0,
		clientWidth=document.documentElement.clientWidth;

		slide.style.width=clientWidth;
		slideUl.style.width=slideLi.length*clientWidth+'px';

	var int=function(){
		slideUl.addEventListener('touchstart',startTouch);
		slideUl.addEventListener('touchmove',moveTouch);
		slideUl.addEventListener('touchend',endTouch);
	},

	startTouch=function(e){
		startX=e.touches[0].clientX;
	},

	moveTouch=function(e){
		var moveX=e.changedTouches[0].clientX-(startX+lastX);
		addClass(slideUl,'tranX_active');
		setTranslate(slideUl,moveX,0,0);
	},

	endTouch=function(e){
		var endX=e.changedTouches[0].clientX-(startX+lastX);
		removeClass(slideUl,'tranX_active');
		setTranslate(slideUl,endX,0,0);
		lastX=startX;
	};

	int();
})(this);*/
/*焦点图片切换 结束*/

/*配送至出现 开始*/
;(function(global){
	var location=bycss('#icon_location'),
		puller=bycss('#puller'),
		mainLayout=bycss('#mainLayout'),
		sidebar=bycss('#sidebar_content'),
		regionBack=bycss('#region_back_arrow');

	var init=function(){
		location.addEventListener('click',sendToShow);
		regionBack.addEventListener('click',sendToHide);
	},
	sendToShow=function(){
		document.body.scrollTop=window.pageYOffset=document.documentElement.scrollTop=0+'px';
		addClass(mainLayout,'body_slide_move');
		show(puller);
		addClass(sidebar,'send_slide_show');
	},
	sendToHide=function(){
		setTimeout(function(){
			hide(puller);
		},50);
		removeClass(mainLayout,'body_slide_move');
	};
	init();
})(this);
/*配送至出现 结束*/