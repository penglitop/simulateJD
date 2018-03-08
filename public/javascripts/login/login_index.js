/*账号切换 开始*/
;(function(global){
	var loginTab=bycssAll('.login_txt'),
		loginWrap=bycssAll('.login_wrap'),
		activeInd=0;

		for(var i=0;i<loginTab.length;i++){
			loginTab[i].index=i;
			loginTab[i].addEventListener('click',function(){
				if(!hasClass(this,'login_selected')){
					removeClass(loginTab[activeInd],'login_selected');
					addClass(this,'login_selected');
					hide(loginWrap[activeInd]);
					show(loginWrap[this.index]);
					if(notice.innerHTML!==''){
						notice.innerHTML='';
					}
					activeInd=this.index;
				}
			})
		}
})(this);
/*账号切换 结束*/

/*返回按钮 开始*/
;(function(global){
	var goBackBtn=byid('goBack');
	var init=function(){
		goBackBtn.addEventListener('click',goBack);
	},
	goBack=function(){
		if(window.history.go(-1)){
			window.history.go(-1);
		}
	};
	init();
})(this);
/*返回按钮 结束*/

/*账号登录 开始*/
;(function(global){
	var username=bycss('#username'),
		password=bycss('#password'),
		notice=bycss('#notice'),
		loginBtn=bycss('#loginBtn'),
		logiNameClear=bycss('#login_name_clear'),
		loginPwdClear=bycss('#login_pwd_clear'),
		checkbtn=byid('checkbtn'),
		loginOneStep=bycss('#loginOneStep'),
		telphone=byid('telphone'),
		mesgCode=byid('mesgCode'),
		telCode=byid('telCode'),
		telClear=byid('tel_clear'),
		telcodeClear=byid('telcode_clear'),
		accountLogin=byid('account_login_txt'),
		timer=null,
		time=120,
		strCode='验证码有误！',
		str='账号或密码不正确，若您为海外手机号，请在手机号前加"四位国家代码"，不足则补0,如"0001","0355"!';

	var int=function(){
		textBlur(username,logiNameClear);
		textBlur(password,loginPwdClear);
		textBlur(telphone,telClear);
		textBlur(telCode,telcodeClear);
		showIconClear(username,logiNameClear);
		showIconClear(password,loginPwdClear);
		showIconClear(telphone,telClear);
		showIconClear(telCode,telcodeClear);
		clearClick(logiNameClear,username);
		clearClick(loginPwdClear,password);
		clearClick(telClear,telphone);
		clearClick(telcodeClear,telCode);
		inputChange(username,password);
		inputChange(password,username);
		inputRed(telCode);
		loginBtn.addEventListener('click',login);
		checkbtn.addEventListener('click',checkfn);
		mesgCode.addEventListener('click',sendMesgCode);
	},

	sendMesgCode=function(){
		var reg=/^((13[0-9])|(14[5|7])|(15([0-3]|[0-9]))|(18[0,0-9]))\d{8}$/; 
		if(reg.test(telphone.value)==false){
			return;
		}
		hide(telClear);
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
		
	},

	inputChange=function(obj1,obj2){
		obj1.addEventListener('input',function(){
			if(obj1.value!=''& obj2.value!=''){
				removeClass(loginBtn,'btn_gray');
				addClass(loginBtn,'btn_active');
			}else{
				removeClass(loginBtn,'btn_active');
				addClass(loginBtn,'btn_gray');
			}
		});
	},

	textBlur=function(btn,obj){
		btn.addEventListener('blur',function(){
			setTimeout(function(){
				hide(obj);
			},150);
		});
	},

	showIconClear=function(obj,iconName){
		obj.addEventListener('click',function(){
			show(iconName);
		});
	},

	clearClick=function(clearBtn,obj){
		clearBtn.addEventListener('click',function(){
			obj.value='';
			removeClass(loginBtn,'btn_active');
			addClass(loginBtn,'btn_gray');
		});
	},

	inputRed=function(obj){
		obj.addEventListener('input',function(){
			if(obj.value!=''){
				removeClass(loginBtn,'btn_gray');
				addClass(loginBtn,'btn_active');
			}
		});
	},

	pswBlur=function(){
		var reg=/^(?![\d]+$)(?![a-zA-Z]+$)(?![!#$%^&*]+$)[\da-zA-Z!#$%^&*]{6,20}$/; 

		if(password.value.length<=6||password.value.length>=20){
			notice.innerHTML=str;
			return false;
		};

		if(reg.test(password.value)==false){
			notice.innerHTML=str;
			return false;
		};

		hide(loginPwdClear);
		return true;
	},	

	nameBlur=function(){
		var reg1=/^[\u4e00-\u9fa5]*[\w]*[\-]*$/g,
			reg2=/^\s$/;
		if(reg2.test(username.value)==false){
			notice.innerHTML=str;
			return;
		}
		if(reg1.test(username.value)==false){
			notice.innerHTML=str;
			return false;
		}
		notice.innerHTML='';
		return true;
	},

	telBlur=function(){
		var reg=/^[0-9]{6}$/;
		if(reg.test(telCode)==false){
			notice.innerHTML=strCode;
			return false;
		}
		notice.innerHTML='';
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

	login=function(){
		if(hasClass(accountLogin,'login_selected')){
			nameBlur();
			pswBlur();
			if(password.value==''||username.value==''){
				notice.innerHTML='';
			}
		}else{
			telBlur();	
		}
	};
	int();
})(this);
/*账号登录 结束*/


/*忘记密码 开始*/
;(function(global){
	var findpwd=byid('findpwd'),
		forgetPwd=byid('forget_usernumber'),
		loginIndex=byid('login_index'),
		forGoback=byid('forGoback'),
		receiveMsg=byid('receive_msg'),
		forgetClear=byid('forgetClear'),
		forgetUsername=byid('forgetUsername'),
		mesgCode=byid('imgVerify'),
		mesgClear=byid('mesgClear'),
		imgCodeBtn=byid('imgCodeBtn'),
		nextBtn=byid('sureBtn'),
		forgetToast=byid('forgetToast'),
		receiveMsg=byid('receive_msg'),
		reciveToast=byid('reciveToast');

	var int=function(){
		findpwd.addEventListener('click',findPwd);
		forGoback.addEventListener('click',goBack);
		nextBtn.addEventListener('click',next);
		showIconClear(forgetUsername,forgetClear);
		showIconClear(mesgCode,mesgClear);
		textBlur(mesgCode,mesgClear);
		textBlur(forgetUsername,forgetClear);
		clearClick(mesgClear,mesgCode);
		clearClick(forgetClear,forgetUsername);
		inputChange(forgetUsername,mesgCode);
		inputChange(mesgCode,forgetUsername);
	},
	goBack=function(){
		show(loginIndex);
		hide(forgetPwd);
	},
	findPwd=function(){
		hide(loginIndex);
		show(forgetPwd);
		forgetUsername.value='';
		mesgCode.value='';
	},
	textBlur=function(btn,obj){
		btn.addEventListener('blur',function(){
			setTimeout(function(){
				hide(obj);
			},150);
			if(btn==forgetUsername){
				inputUser();
			}else if(btn==mesgCode){
				inputMesgCode();
			}
		});

	},

	showIconClear=function(obj,iconName){
		obj.addEventListener('click',function(){
			show(iconName);
		});
	},
	inputUser=function(){
		var reg1=/^([\u4e00-\u9fa5]|[a-zA-Z0-9_-])+$/,
			reg2=/^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(18[0,0-9]))\d{8}$/,
			reg3=/^[1-9a-zA-Z]{3,11}@(qq|163|126)\.(com|cn)$/;

			if(forgetUsername.value==''){
				show(forgetToast);
				setTimeout(function(){
					hide(forgetToast);
				},2950);
				forgetToast.innerHTML='请输入用户名！';
				return false;
			}
			if(reg1.test(forgetUsername.value)==false&reg2.test(forgetUsername.value)==false&reg3.test(forgetUsername.value)==false){
				show(forgetToast);
				setTimeout(function(){
					hide(forgetToast);
				},2950);
				forgetToast.innerHTML='该用户名未被注册！';
				return false;
			}
			hide(forgetToast);
			forgetToast.innerHTML='';
			return true;
	},
	inputMesgCode=function(){
		var reg=/^[a-zA-Z0-9]{4,6}$/;
		if(forgetUsername.value!=''){
			if(mesgCode.value==''){
				show(forgetToast);
				setTimeout(function(){
					hide(forgetToast);
				},2950);
				forgetToast.innerHTML='请填写图片验证码！';
				return false;
			}else if(reg.test(mesgCode.value)==false){
				show(forgetToast);
				setTimeout(function(){
					hide(forgetToast);
				},2950);
				forgetToast.innerHTML='请填写正确的图片验证码！';
				return false;
			}
			hide(forgetToast);
			forgetToast.innerHTML='';
			return true;
		}else{
			show(forgetToast);
			setTimeout(function(){
				hide(forgetToast);
			},2950);
			forgetToast.innerHTML='请输入用户名！';
			return false;
		}
	},
	clearClick=function(clearBtn,obj){
		clearBtn.addEventListener('click',function(){
			obj.value='';
			removeClass(nextBtn,'btn_active');
			addClass(nextBtn,'btn_gray');
		});
	},
	next=function(){
		inputUser();
		inputMesgCode();

		if(mesgCode.value==''&forgetUsername.value==''){
			return;
		}else if(inputUser()==true&inputMesgCode()==true){
			hide(forgetPwd);
			show(receiveMsg);
			show(reciveToast);
			setTimeout(function(){
				hide(reciveToast);
			},2950);
		}
	},
	inputChange=function(obj1,obj2){
		obj1.addEventListener('input',function(){
			if(obj1.value!=''& obj2.value!=''){
				removeClass(nextBtn,'btn_gray');
				addClass(nextBtn,'btn_active');
			}else{
				removeClass(nextBtn,'btn_active');
				addClass(nextBtn,'btn_gray');
			}
		});
	};

	int();
})(this);
/*忘记密码 结束*/

