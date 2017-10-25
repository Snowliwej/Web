window.onload=function(){

	//左侧鼠标移入事件
	//使用事件代理处理
	var leftul=document.getElementById("leftul");
	var leftlis=leftul.children;
	//console.log(leftlis);
	var rightul=document.getElementById("rightul");
	
	
	var flag=0;
	var timeout;
	
	
	leftul.onmouseover=function(event){
		//console.log(event.target);
		
		var target=event.target;
		//console.log(target);
		
		//只想要鼠标移动到图片上触发事件
		if(target.nodeName=="IMG"){
			//移除其他li样式，需要遍历li
			clearTimeout(timeout);
			
			
//			var a = Array.prototype.slice.call(leftlis,0);//将类数组转换为数组
//			console.log(a);

			Array.prototype.slice.call(leftlis,0).forEach(function(item){
				//console.log(item);
				item.removeAttribute("class");
			});
			//给当前li添加样式，并且取消其他li上面的样式
			//target.parentNode.style.border="3px solid pink";
			target.parentNode.setAttribute("class","current");
			var index=target.parentNode.getAttribute("val");
			//console.log(index);
			move(-(450*index));
			flag=+index;
		}
	}

	//当鼠标移出img时，再次执行定时轮转
	leftul.onmouseout=function(event){
		var target=event.target;
		if(target.nodeName=="IMG"){
				timeout=setTimeout(step,3000);//setTimeout的返回值为id
			}
	}


	//移动函数封装
	function move(pos){
		var m=function(){

			var nowPos=parseInt(rightul.style.top,10);
			//console.log(nowPos);	
			var speed=60;
			//450px 
			if(Math.abs(nowPos-pos)>speed){
				//判断移动方向
				nowPos -= ((nowPos-pos)/Math.abs(nowPos-pos))*speed;
				rightul.style.top=nowPos+"px";

				setTimeout(m,30);
				
			}else{
				rightul.style.top=pos+"px";
			}
		}
		setTimeout(m,30);

	}

	//定时轮转
	
			step=function(){
				//去点所有样式
				console.log(flag);
				leftlis[flag].className="";
				
				if(flag>=leftlis.length-1){
					flag=0;
				}else{
					flag=flag+1;
				}

				leftlis[flag].className="current";
				move(-450*flag);
				timeout=setTimeout(step,3000);

			}
			timeout=setTimeout(step,3000);



}