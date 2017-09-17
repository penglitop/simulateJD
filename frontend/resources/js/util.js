(function(global){
	'use strict';
	var DOMEvent={
	/*给元素绑定事件*/
		add:function(element,type,handler,isBubble){
			if(element.addEventListener){
				this.add=function(element,type,handler,isBubble){
					element.addEventListener(type,handler,isBubble || false);
				}
			}else if(element.attachEvent){
				this.add=function(element,type,handler){
					element.attachEvent('on'+type,handler);
				}
			}else{
				this.add=function(element,type,handler){
					element['on'+type]=handler;
				}
			}
			this.add(element,type,handler,isBubble);
		},
		remove:function(element,type,handler,isBubble){
			if(element.removeEventListener){
				this.remove=function(element,type,handler,isBubble){
					element.removeEventListener(type, handler, false);
				}
			}else if(element.detachEvent){
				this.remove=function(element,type,handler){
					element.detachEvent('on' + type, handler);
				}
			}else{
				this.remove=function(element,type){
					element['on' + type] = null;
				}
			}
			this.remove(element,type,handler,isBubble);
		}
	};
	/*观察者模式*/
	function UTIL(){}
	UTIL.prototype={
		constructor:UTIL,
		domevet:DOMEvent
	};
	global._u=global.UTIL=new UTIL();
})(this);