 function $(id){
      return typeof id==='string'?document.getElementById(id):id;
}

function hasClass(el,cl){
	var clArr=el.className.split(' ');
	if(clArr.indexOf(cl)!=-1){
		return clArr;
	}else{
		return false;
	}
}

function addClass(el,cl){
	if(!hasClass(el,cl)){
		var oldcl=el.className;
		el.className=oldcl?oldcl+' '+cl:cl;
	}
}

function removeClass(el,cl){
	var clArr=hasClass(el,cl);
	if(clArr){
		clArr.splice(clArr.indexOf(cl),1);
		el.className=clArr.join(' ');
	}
}

function getStyle(obj,attr){
		return obj.currentStyle?currentStyle[attr]:getComputedStyle(obj)[attr];
}


function byid(elid,fa){
	fa = fa || document;
	return fa.getElementById(elid);
}


function bycss(elid,fa){
	fa = fa || document;
	return fa.querySelector(elid);
}


function bycssAll(elid,fa){
	fa = fa || document;
	return fa.querySelectorAll(elid);
}


function byclass(elcl,fa){
	fa = fa || document;
	return fa.getElementsByClassName(elcl);
}
function byEl(elname,fa){
	fa = fa || document;
	return fa.getElementsByTagName(elname);
}
function removeClass2(el,str){
	if(el && str){
		if(el.classList){
			el.classList.remove(str);
		}else{
			var classname=el.className.trim().split(' ');
			if(classname.indexOf(str) !=-1){
				classname.slice(classname.indexOf(str),1);
				el.className=classname.join(' ');
			}
		}
	}
}

function addClass2(el,str){
	if(el && str){
		if(el.classList){
			el.classList.add(str);
		}else{
			var classname=el.className.trim().split(' ');
			if(classname.indexOf(str) ==-1){
				classname.push(str);
				el.className=classname.join(' ');
			}
		}
	}
}

function show(obj){
		if(obj){
			obj.style.display='block';
		};
		return;
	}

function hide(obj){
	if(obj){
			obj.style.display='none';
		};
		return;
}

function setTranslate(el,x,y,z){
		var value='translate3d('+x+'px,'+y+'px,'+z+'px)';
        el.style.transform = value;
        el.style.webkitTransform=value;
        el.style.msTransform=value;
        el.style.mozTransform=value;
        el.style.oTransform = value;
}

//跨浏览器获取style：
function getStyle(elements,attr){
	if(typeof window.getComputedStyle!='undefined'){
		return window.getComputedStyle(elements,null)[attr];
	}else if(typeof elements.currentStyle!='undefined'){
		return elements.currentStyle()[attr];
	}
}

//获取对象scrollTop
function getScrollTop(obj){
    if(obj){
        return obj.scrollTop;
    }else{
        return document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop || 0;
    }
}

/*控制body能否滚动*/
function bodynoscroll(container){
    var _html=container || document.documentElement,
        scTop;
    var scroll=function(){
        _html.classList.remove('fixedbodynoscroll');
        _html.scrollTop=scTop;
        _html.style.top='';
    },
    noscroll=function(){
        scTop=getScrollTop(_html);
        _html.style.top=-scTop+'px';
        _html.classList.add('fixedbodynoscroll');
    };
    window.bodyScrollCtrl={
        yeah:scroll,
        no:noscroll
    }
}