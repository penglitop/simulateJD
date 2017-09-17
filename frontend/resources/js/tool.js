//跨浏览添加器事件绑定：
function addEvent(obj,type,fn){
	if(typeof obj.addEventListener!='undefined'){
		 obj.addEventListener(type,fn,false);
	}else{
		//创建一个存放事件的哈希列表（散列表）
		if(!obj.events)obj.events={};
		//第一次执行时执行
		if(!obj.events[type]){
			//创建一个存放事件处理函数的数组:
			obj.events[type]=[];
			//把第一次的事件处理函数先存储到第一个位置上：
			if(obj['on'+type])obj.events[type][0]=fn;
		}else{
			//同一注册函数进行屏蔽,不添加到计数器中：
			if(addEvent.equla(obj.events[type],fn))return false;
		}
		//从第二次开始使用事件计数器来存储：
		obj.events[type][addEvent.ID++]=fn;//(addEvent.ID++先储存再累加，++addEvent.ID先累加再储存)
		//执行函数：
		obj['on'+type]=addEvent.exec;
	}
}
//为每个事件分配一个计数器：
addEvent.ID=1;

//执行事件处理函数
addEvent.exec=function(event){
	var e=event||addEvent.fixEvent(window.event);
	var es= this.events[e.type]
	for(var i in es){
			es[i].call(this,e);
		}
}


//屏蔽同一个注册函数：
addEvent.equal=function(es,fn){
	for(var i in es){
		if(es[i]==fn)return true;
	}
	return false;
}


//把IE常用的Event对象配对到W3C中去：
addEvent.fixEvent=function(event){
	event.preventDefault=addEvent.fixEvent.preventDefault;
	event.stopPropagation=addEvent.fixEvent.stopPropagation;
	event.target=event.srcElement;
	return event;
}


//IE阻止默认行为：
addEvent.fixEvent.preventDefault=function(){
	this.returnValue=false;
}


//IE取消冒泡：
addEvent.fixEvent.stopPropagation=function(){
	this.cancelBubble=true;
}


//跨浏览器删除事件绑定：
function removeEvent(obj,type,fn){
	if(typeof obj.removeEventListener!='undefined'){
		obj.removeEventListener(type,fn,false);
	}else {
		if(obj.events){
			for(var i in obj.events[type]){
				if(obj.events[type][i]==fn){
					delete obj.events[type][i];
				}
			}
		}
	}
}

//跨浏览器获取视口：
function getInner(){
	if(typeof window.innerWidth!='undefined'){
		return{
			width:window.innerWidth, //W3C标准
			height:window.innerHeight
			}
		}else{
			return{
				width:document.documentElement.clientWidth,  //IE标准
				height:document.documentElement.clientHeight
			}
		}
	}


//跨浏览器获取style：
function getStyle(elements,attr){
	if(typeof window.getComputedStyle!='undefined'){
		return window.getComputedStyle(elements,null)[attr];
	}else if(typeof elements.currentStyle!='undefined'){
		return elements.currentStyle()[attr];
	}
}


//判断class是否存在：
function hasClass(elements,className){
	return elements.className.match(new RegExp('(\\s|^)'+className+'(\\s|$)'));
}


//跨浏览器添加link规则：
function insertRule(sheet,selectorText,cssText,position){
	if(typeof sheet.insertRule!='undefined'){ //W3C
		sheet.insertRule(selectorText+'{'+cssText+'}',position);
	}else if(typeof sheet.addRule!='undefined'){ //IE
		sheet.addRule(selectorText,cssText,position);
	}
}


//跨浏览器删除link规则：
function deleteRule(sheet,index){
	if(typeof sheet.deleteRule!='undefined'){//W3C
		sheet.deleteRule(index);
	}else if(typeof sheet.removeRule!='undefined'){//IE
		sheet.removeRule(index);
	}
}


//获取Event对象：
function getEvent(event){
	return event||window.event;
}


//阻止默认行为：
function preDef(event){
	var e=getEvent(event);
	if(typeof e.preventDefault!='undefined'){//W3C
		e.preventDefault();
	}else{//IE
		e.returnValue=false;
	}
}


//删除左右空格：
function trim(str){
	return str.replace(/(^\s*)|(\s*$)/g,''); 
}


//滚动条清零：
function scrollTop(){
	document.documentElement.scrollTop=0;
	document.body.scrollTop=0;
}