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

