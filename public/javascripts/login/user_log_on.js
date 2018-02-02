/*手机快速注册 开始*/
;(function(global){
	var agreeCancel=byid('agreeCancel'),
		agreeBtn=byid('agree'),
		agreeDialog=byid('agreement_dialog'),
		imgCode=byid('imgCode'),
		imgCodeClear=byid('imgCodeClear'),
		telphone=byid('telphone'),
		telClear=byid('telClear'),
		telCode=byid('telCode'),
		telcodeClear=byid('telcodeClear'),
		password=byid('password'),
		pwdClear=byid('pwdClear'),
		checkbtn=byid('checkbtn'),
		mesgCode=byid('mesgCode'),
		regBtn=byid('regBtn'),
		notice=byid('notice'),
		goback=byid('icon_goback'),
		timer=null,
		time=120,
		str='密码由6-20位字母、数字或半角符号组成，不能是10位以下纯数字/字母/半角符号，字母需区分大小写';

	var int=function(){
		agreeBtn.addEventListener('click',agree);
		agreeCancel.addEventListener('click',cancel);
		mesgCode.addEventListener('click',sendMesgCode);
		telCode.addEventListener('blur',telBlur);
		checkbtn.addEventListener('click',checkfn);
		password.addEventListener('input',pswBlur);
		goback.addEventListener('click',cancel);
		showIconClear(imgCode,imgCodeClear);
		showIconClear(telphone,telClear);
		showIconClear(password,pwdClear);
		showIconClear(telCode,telcodeClear);
		textBlur(imgCode,imgCodeClear);
		textBlur(telphone,telClear);
		textBlur(password,pwdClear);
		textBlur(telCode,telcodeClear);
		clearClick(imgCodeClear,imgCode);
		clearClick(telClear,telphone);
		clearClick(pwdClear,password);
		clearClick(telcodeClear,telCode);
	},
	agree=function(){
		hide(agreeDialog);
	},
	cancel=function(){
		hide(agreeDialog);
		window.history.back(-1);
	},
	showIconClear=function(obj,iconName){
		obj.addEventListener('click',function(){
			show(iconName);
		});
	},
	textBlur=function(btn,obj){
		if(btn==imgCode){
			btn.addEventListener('blur',function(){
				if(inputImgCode()){

				}
				setTimeout(function(){
					hide(obj);
				},150);
			});
		}
		btn.addEventListener('blur',function(){
			setTimeout(function(){
				hide(obj);
			},150);
		});

	},
	clearClick=function(clearBtn,obj){
		clearBtn.addEventListener('click',function(){
			obj.value='';
			removeClass(regBtn,'btn_active');
			addClass(regBtn,'btn_gray');
		});
	},
	sendMesgCode=function(){
		if(inputImgCode()){
			var reg=/^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(18[0,0-9]))\d{8}$/; 
			if(reg.test(telphone.value)==false){
				notice.innerHTML='手机号码有误，请填写正确的手机号码！';
				addClass(notice,'active');
				return;
			}
			hide(telClear);
			notice.innerHTML=str;
			removeClass(notice,'active');
			clearInterval(timer);
			timer=setInterval(function(){
				time--;
				if(time<=0){
					clearInterval(timer);
					mesgCode.innerHTML='获取验证码';
				}else{
					mesgCode.innerHTML='重新发送('+time+'s)';
				}
			},1000);
		}else{
			notice.innerHTML='请填写图片验证码！';
			addClass(notice,'active');
			return;
		}
	},
	inputImgCode=function(){
		var reg=/^[a-zA-Z0-9]{4,6}$/;
		if(imgCode.value==''){
			notice.innerHTML='请填写图片验证码！';
			addClass(notice,'active');
			return false;
		}else if(reg.test(imgCode.value)==false){
			notice.innerHTML='图片验证码错误！';
			addClass(notice,'active');
			return false;
		}
		notice.innerHTML=str;
		removeClass(notice,'active');
		return true;
	}
	telBlur=function(){
		var reg=/^[0-9]{6}$/;
		if(telCode.value==''){
			notice.innerHTML=str;
			removeClass(notice,'active');
			return false;
		}else if(reg.test(telCode.value)==false){
			notice.innerHTML='请输入正确的手机验证码！';
			addClass(notice,'active');
			return false;
		}
		notice.innerHTML=str;
		removeClass(notice,'active');
		return true;
	},
	checkfn=function(){
		if(password.type=='password'){
			password.type='number';
			addClass(checkbtn,'active');
		}else{
			password.type='password';
			removeClass(checkbtn,'active');
		}
	},
	pswBlur=function(){
		var reg=/^(?![\d]+$)(?![a-zA-Z]+$)(?![!#$%^&*]+$)[\da-zA-Z!#$%^&*]{6,20}$/; 

		if(password.value.length<=6||password.value.length>=20){
			notice.innerHTML=str;
			removeClass(regBtn,'btn_active');
			addClass(regBtn,'btn_gray');
			addClass(notice,'active');
			return false;
		};

		if(reg.test(password.value)==false){
			notice.innerHTML=str;
			removeClass(regBtn,'btn_active');
			addClass(regBtn,'btn_gray');
			addClass(notice,'active');
			return false;
		};
		notice.innerHTML='设置成功！';
		removeClass(notice,'active');
		removeClass(regBtn,'btn_gray');
		addClass(regBtn,'btn_active');
		return true;
	};

	int();
})(this);
/*手机快速注册 结束*/