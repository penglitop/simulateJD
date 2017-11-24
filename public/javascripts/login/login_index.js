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
					activeInd=this.index;
				}
			})
		}
})(this);
/*账号切换 结束*/

/*账号登录 开始*/
;(function(global){
	var username=bycss('#username'),
		password=bycss('#password'),
		notice=bycss('#notice'),
		loginBtn=bycss('#loginBtn'),
		logiNameClear=bycss('#login_name_clear'),
		loginPwdClear=bycss('#login_pwd_clear'),
		loginBtn=bycss('#loginBtn'),
		loginOneStep=bycss('#loginOneStep');

	var int=function(){
		username.addEventListener('blur',function(){
			setTimeout(function(){
				hide(logiNameClear);
			},150);
		});
		username.addEventListener('click',function(){
			show(logiNameClear);
		});

		logiNameClear.addEventListener('click',function(){
			username.value='';
		});

		password.addEventListener('blur',function(){
			setTimeout(function(){
				hide(loginPwdClear);
			},150);
		});
		password.addEventListener('click',function(){
			show(loginPwdClear);
		});

		loginPwdClear.addEventListener('click',function(){
			password.value='';
		});
		
		password.addEventListener('input',function(){
			removeClass(loginBtn,'btn_gray');
			addClass(loginBtn,'btn_active');
		})
	},

	pswBlur=function(){
		var reg=/^(?![\d]+$)(?![a-zA-Z]+$)(?![!#$%^&*]+$)[\da-zA-Z!#$%^&*]{6,20}$/; 

		if(password.value.length<=6||password.value.length>=20){
			notice.innerHTML='账号或密码错误!';
			return false;
		};

		if(reg.test(password.value)==false){
			notice.innerHTML='账号或密码错误!';
			return false;
		};

		hide(loginPwdClear);
		return true;
	},	

	nameBlur=function(){

	};
	int();
})(this);
/*账号登录 结束*/