//前台调用：
var $=function(_this){
	return new Base(_this);
}
//基础库：
//1：连缀功能
function Base(_this) {
	//创建一个数组，来保存获取的节点和节点数组
	this.elements = [];
	if(_this!=undefined){      
		this.elements[0]=_this;
	}    
}
//这里的_this是对象，而undefined也是对象，加单引号的'undefined'是typeof判断出来的,而没带单引号的是定义了但未传值
	
//获取ID节点
Base.prototype.getId = function (id) {
	this.elements.push(document.getElementById(id));
	return this;
};



//获取元素节点
Base.prototype.getTagName = function (tag) {
	var tags = document.getElementsByTagName(tag);
	for (var i = 0; i < tags.length; i ++) {
		this.elements.push(tags[i])
	}
	return this;
};



//获取CLASS节点数组：
Base.prototype.getClass= function (className,idName){  //idName表示限定的区域例如：id=“aaa”区域下的带有class属性的节点
	var node=null;
	if(arguments.length==2){
		node=document.getElementById(idName);
	}else{
		node=document;
	}
	var all=node.getElementsByTagName('*');
	for(var i=0;i<all.length;i++){
		if(all[i].className==className){
			 this.elements.push(all[i]);
		}
	}
	return this;
};



//获取某一个节点，并返回这个节点对象：
Base.prototype.getElement=function(num){   //  num表示第几个
	return this.elements[num];
	
}


//获取某个节点，并返回Base对象：
Base.prototype.eq=function(num){   //  num表示第几个
	var element=this.elements[num];
	this.elements=[];
	this.elements[0]=element;
	return this;
}

//设置CSS
Base.prototype.css = function (attr, value) {
	for (var i = 0; i < this.elements.length; i ++) {
		if(arguments.length==1){
			return getStyle(this.elements[i],attr);
		}
		this.elements[i].style[attr] = value;
	}
	return this;
}



//添加CLASS：
Base.prototype.addClass=function(className){
	for(var i=0;i<this.elements.length;i++){
		if(!hasClass(this.elements[i],className)){ // 匹配是否已经添加了类
			this.elements[i].className+=' '+className;
		}
	}
	return this;
}



//移除CLASS：
Base.prototype.removeClass=function(className){
	for(var i=0;i<this.elements.length;i++){
		if(hasClass(this.elements[i],className)){
			this.elements[i].className=this.elements[i].className.replace(new RegExp('(\\s|^)'+className+'(\\s|$)'),'')
		}
	}
	return this;
}



//添加link或style中的CSS规则：
Base.prototype.addRule=function(num,selectorText,cssText,position){  //num表示在第几个link或style标签
	var sheet=document.styleSheets[num];  //在第几个link或style里添加
	insertRule(sheet,selectorText,cssText,position);
	return this;
/*
if(typeof sheet.insertRule!='undefined'){
		sheet.insertRule('body{background:red}',0);
	}else if(typeof sheet.addRule!='undefined'){
		sheet.addRule('body','background:red',0);
	}
*/
}



//移除link或style中的CSS规则：
Base.prototype.removeRule=function(num,index){//num表示第几个link或第几个style标签，index表示是要删除的哪一个
	var sheet=document.styleSheets[num];
	deleteRule(sheet,index);
	return this;
}



//设置innerHTML:
Base.prototype.html = function (str) {
	for (var i = 0; i < this.elements.length; i ++) {
		if(arguments.length==0){
			return this.elements[i].innerHTML;
		}
		this.elements[i].innerHTML = str;
	}
	return this;
}



//设置鼠标移入移除方法：
Base.prototype.hover=function(over,out){
	for(var i=0;i<this.elements.length;i++){
		//this.elements[i].onmouseover=over;
		//this.elements[i].onmouseout=out;
		addEvent(this.elements[i],'mouseover',over);
		addEvent(this.elements[i],'mouseout',out);
	}
	return this;
}



//设置显示：
Base.prototype.show=function(){
	for(var i=0;i<this.elements.length;i++){
		this.elements[i].style.display='block';
	}
	return this;
}



//设置隐藏：
Base.prototype.hide=function(){
	for(var i=0;i<this.elements.length;i++){
		this.elements[i].style.display='none';
	}
	return this;
}


//设置物体居中：
Base.prototype.center=function(width,height){
	var top=(getInner().height-height)/2;
	var left=(getInner().width-width)/2;
	for(var i=0;i<this.elements.length;i++){
		this.elements[i].style.top=top+'px';
		this.elements[i].style.left=left+'px';
		
	}
	return this;
}


//锁屏功能：
Base.prototype.lock=function(){
	for(var i=0;i<this.elements.length;i++){
		this.elements[i].style.width=getInner().width+'px';
		this.elements[i].style.height=getInner().height+'px';
		this.elements[i].style.display='block';
		document.documentElement.style.overflow='hidden';  //隐藏滚动条

		/*addEvent(this.elements[i],'mousedown',function(evt){
			evt.preventDefault();
			addEvent(document,'mousemove',function(evt){
				evt.preventDefault();
			});

		});*/

		addEvent(window,'scroll',scrollTop);
	}
	return this;
};


//关闭锁屏：
Base.prototype.unlock=function(){
	for(var i=0;i<this.elements.length;i++){
		this.elements[i].style.display='none';
		document.documentElement.style.overflow='auto';
		removeEvent(window,'scroll',scrollTop);
	}
	return this;
}


//触发点击事件：
Base.prototype.click = function (fn) {
	for (var i = 0; i < this.elements.length; i ++) {
		this.elements[i].onclick = fn;
	}
	return this;
}


//触发浏览器窗口事件：
Base.prototype.resize=function(fn){
	for (var i = 0; i < this.elements.length; i ++) {
		var element=this.elements[i];
		/*
		window.onresize=function(){
			fn();
			if(element.offsetLeft>getInner().width-element.offsetWidth){
				element.style.left=getInner().width-element.offsetWidth+'px';
			}
			if(element.offsetTop>getInner().height-element.offsetHeight){
				element.style.top=getInner().height-element.offsetHeight+'px';
			}
		};
		*/
		addEvent(window,'resize',function(){
			fn();
			if(element.offsetLeft>getInner().width-element.offsetWidth){
				element.style.left=getInner().width-element.offsetWidth+'px';
			}
			if(element.offsetTop>getInner().height-element.offsetHeight){
				element.style.top=getInner().height-element.offsetHeight+'px';
			}
		})
	}
	return this;
}


//插件的插入入口：
Base.prototype.extend=function(name,fn){
	Base.prototype[name]=fn;
}
/*拖拽功能：
Base.prototype.drag=function(){
	
}
*/






