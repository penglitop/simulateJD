$().extend('drag',function(tags){

	for (var i = 0; i < this.elements.length; i ++) {
			//this.elements[i].onmousedown=function(evt){
			addEvent(this.elements[i],'mousedown',function(evt){


				//evt.preventDefault();  //阻止浏览器的默认行为，低版本的火狐拖拽物体时，物体没有内容会出现bug
				if(trim(this.innerHTML).length==0)evt.preventDefault();

				var _this=this;
				var diffX=evt.clientX-_this.offsetLeft;  //鼠标到视口的宽度-oDiv到视口的宽度=鼠标到oDiv的宽度；
				var diffY=evt.clientY-_this.offsetTop;
				
				//自定义拖拽区域：
				var flag=false;

				for(var i=0;i<tags.length;i++){
					if (evt.target==tags[i]){
						flag=true;   //只要有一个是true，就立刻返回
						break;
					}
				}
				if(flag){
					addEvent(document,'mousemove',move);
					addEvent(document,'mouseup',up);
				}else{
					removeEvent(document,'mousemove',move);
					removeEvent(document,'mouseup',up);
				}

				//document.onmousemove=function(evt){   //把oDiv变成document
				
				function move(evt){
					var offsetLeft=evt.clientX-diffX;
					var offsetTop=evt.clientY-diffY;
					if(offsetLeft<0){   //判断物体左右是否超出浏览器的窗口
						offsetLeft=0;
					}else if(offsetLeft>getInner().width-_this.offsetWidth){
						offsetLeft=getInner().width-_this.offsetWidth;
					}

					if(offsetTop<0){    //判断物体上下是否超出浏览器的窗口
						offsetTop=0;
					}else if(offsetTop>getInner().height-_this.offsetHeight){
						offsetTop=getInner().height-_this.offsetHeight;
					}
					_this.style.left=offsetLeft+'px'; //鼠标到视口的宽度-鼠标到oDiv的宽度=动态的offset(oDiv到视口的宽度)
					_this.style.top=offsetTop+'px';

					if(typeof setCapture!='undefined'){
					_this.setCapture();
					}
				};

				function up(){
					removeEvent(document,'mousemove',move);
					removeEvent(document,'mouseup',up);
					if(typeof releaseCapture!='undefined'){
						_this.releaseCapture();
					};
				}
			});
		}
		return this;
})