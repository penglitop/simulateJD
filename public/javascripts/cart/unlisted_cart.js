"use strict";
bodynoscroll();
/*回到顶部 开始*/
;(function(global){
	var toTopBtn=bycss('#indexToTop'),
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
			iSpeed=Math.floor(-oldScrollTop/3);
		document.body.scrollTop=window.pageYOffset=document.documentElement.scrollTop=oldScrollTop+iSpeed;
		if(oldScrollTop==0){
				clearInterval(toToptimer);
			}
	}
})(this);
/*回到顶部 结束*/

/*列表出现 开始*/
;(function(global){
	var layKey=bycss('#m_common_bottom_jdkey'),
		layjdBar=bycss('#layout_jdBar'),
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

/*总金额-合计 开始*/
;(function(global){
	var realPrice=byid('cart_realPrice'),
		alliPrice=byid('cart_oriPrice'),
		rePrice=byid('cart_reiPrice'),
		shopPrice=byclass('shopPrice'),
		checkedNum=byid('checkedNum'),
		checkUnit=byclass('check_wrapper_unit'),
		checkbox=byclass('cart_checkbox'),
		checkGroup=byclass('group'),
		checkAll=byid('checkIcon_1'),
		shopGroup=byclass('shop_group');

	var deNum=byclass('quantity_decrease'),
		amount=byclass('quantity'),
		inNum=byclass('quantity_increase');

	var editBtn=byclass('btn_msg'),
		editBlock=byclass('edit_pro_mode'),
		mainPro=byclass('main_pro_btns'),
		completeBtn=byclass('completeBtn'),
		deleteBtn=byclass('deleteBtn'),
		attentionBtn=byclass('attentionBtn');

	var popDelete=byid('pop_delete'),
		popContent=byid('popContent'),
		cancel=byid('confirmClose'),
		isok=byid('confirmSure'),
		deleteElement;

	var init=function(){
		initialize();
		addClick(inNum,increase);
		addClick(deNum,decrease);
		addClick(checkGroup,selectGroup);
		addClick(checkUnit,selectUnit);
		addClick(editBtn,showedit);
		addClick(completeBtn,complete);
		addClick(deleteBtn,deleteproduct);
		addClick(attentionBtn,attention);
		checkAll.addEventListener('click',selectAll);
		cancel.addEventListener('click',hidePop);
		isok.addEventListener('click',hidePop);
		byid('notEmptyCart').addEventListener('click',deleteProduct);
	},
	initialize=function(){
		var price=0,
			amou=0,
			num=0;
		for(var i=0;i<shopPrice.length;i++){
			shopPrice[i].index=i;
			if(!hasClass(checkUnit[i],'checked')){
				num=0;
			}else{
				num=Number(amount[i].value);
			}
			price+=(Number(shopPrice[i].innerHTML)*Number(num));
			realPrice.innerHTML=alliPrice.innerHTML='¥'+returnFloat(price);
			rePrice.innerHTML='¥'+returnFloat(0);
			if(hasClass(checkUnit[i],'checked')){
				amou+=Number(amount[i].value);
			}
			checkedNum.innerHTML='('+amou+'件)';
			if(price>=199){
				price=price-100;
				rePrice.innerHTML=returnFloat(100);
			}
		}
	},
	increase=function(){
		if(!hasClass(checkUnit[this.index],'checked')){
			amount[this.index].value++;
		}else{
			amount[this.index].value++;
			initialize();
		}
	},
	decrease=function(){
		if(amount[this.index].value=='1'){
			return;
		}
		if(!hasClass(checkUnit[this.index],'checked')){
			amount[this.index].value--;
		}else{
			amount[this.index].value--;
			initialize();
		}
	},
	selectUnit=function(){
		if(hasClass(this,'checked')){
			removeClass(this,'checked');
			removeClass(checkGroup[this.index],'checked');
			removeClass(checkAll,'checked');
			initialize();
		}else{
			var arr=[];
			addClass(this,'checked');
			addClass(checkGroup[this.index],'checked');
			initialize();
			for(var j=0;j<checkGroup.length;j++){
				if(hasClass(checkGroup[j],'checked')){
					arr.push(checkGroup[j]);
				}
			}
			if(arr.length==checkGroup.length){
				addClass(checkAll,'checked');
			}else{
				removeClass(checkAll,'checked');
			}
		}
	},
	selectGroup=function(){
		if(hasClass(this,'checked')){
			removeClass(this,'checked');
			removeClass(checkUnit[this.index],'checked');
			removeClass(checkAll,'checked');
			initialize();
		}else{
			var arr=[];
			addClass(this,'checked');
			addClass(checkUnit[this.index],'checked');
			initialize();
			for(var j=0;j<checkUnit.length;j++){
				if(hasClass(checkUnit[j],'checked')){
					arr.push(checkUnit[j]);
				}
			}
			if(arr.length==checkGroup.length){
				addClass(checkAll,'checked');
			}else{
				removeClass(checkAll,'checked');
			}
		}
	},
	selectAll=function(){
		if(hasClass(checkAll,'checked')){
			removeClass(checkAll,'checked');
			addClass(checkAll,'checked');
			for(var i=0;i<checkbox.length;i++){
				removeClass(checkbox[i],'checked');
				allNoSelect();
			}
		}else{
			addClass(checkAll,'checked');
			removeClass(checkAll,'checked');
			for(var i=0;i<checkbox.length;i++){
				addClass(checkbox[i],'checked');
				initialize();
			}
		}
	},
	allNoSelect=function(){
		realPrice.innerHTML=alliPrice.innerHTML='¥'+returnFloat(0);
		rePrice.innerHTML='¥'+returnFloat(0);
		checkedNum.innerHTML='0件';
	},
	showedit=function(){
		hide(mainPro[this.index]);
		show(editBlock[this.index]);
	},
	complete=function(){
		show(mainPro[this.index]);
		hide(editBlock[this.index]);
	},
	deleteproduct=function(){
		var _self=this;
		bodyScrollCtrl.no();
		ConfirmLayer('',function(flag){
			bodyScrollCtrl.yeah();
			if(flag){
				deleteUnit.call(_self);
			}
		});
	},
	deleteProduct=function(e){
		var el=e.target;
		if(!el.classList.contains('deleteBtn')){
			return;
		}
		while(el!= this){
			if(el.classList.contains('product')){
				deleteElement=el;
				show(popDelete);
				document.body.style.overflow='hidden';
				return;
			}
			el=el.parentNode;
		}
		return;
	},
	attention=function(){
		popContent.innerHTML='是否确认将此商品移至收藏？';
		show(popDelete);
		document.body.style.overflow='hidden';
	},
	deleteUnit=function(){
		 if(shopGroup[this.index]){
		 	removeClass(checkUnit[this.index],'checked');
 			initialize();
	 	   var _parentElement = shopGroup[this.index].parentNode;
           _parentElement.removeChild(shopGroup[this.index]);
         }
	},
	hidePop=function(){
		hide(popDelete);
		document.body.style.overflow='auto';
	},
	addClick=function(obj,fn){
		for(var i=0;i<obj.length;i++){
			obj[i].index=i;
			obj[i].addEventListener('click',fn);
		}
	},
	
	returnFloat=function(value){
		var xsd=value.toString().split("."),
		 	er='';
		if(xsd.length==1){
		 	value=value.toString()+".00";
		 	return value;
		}
		if(xsd.length>1){
			if(xsd[1].length<2){
			  	value=value.toString()+"0";
			}else if(xsd[1].length>2){
			 	xsd[1]=xsd[1].substring(0,2);
			 	value=xsd.join('.');
			}
		 	return value;
		 }
	};

	init();
})(this);
/*总金额-合计 结束*/

var ConfirmLayer=function(txt,callback){
    var confirmLayercovering=byid('cart_info_box'),
        confirmTit=byid('popContent'),
        confirmClose=byid('confirmClose'),
        confirmSure=byid('confirmSure'),
        confirmCall=callback,
        tittxt=txt;
    if(!confirmLayercovering){
        return;
    }
    var init=function(){
        if(txt){
            confirmTit.innerHTML=txt;
        }
        show();
        confirmClose.addEventListener('click',function(){
            hide();
            confirmCall && confirmCall(false);
        });
        confirmSure.addEventListener('click',function(){
            hide();
            confirmCall && confirmCall(true);
        });
    },
    hide=function(){
        confirmLayercovering.style.display='none';
    },
    show=function(){
        confirmLayercovering.style.display='block';
    },
    Confirm=function(txt,callback){
        if(tittxt != txt && txt){
            confirmTit.innerHTML=txt;
            tittxt=txt;
        }
        confirmCall=callback;
        show();
    };
    init();
    ConfirmLayer=Confirm;
};