window.onload = function(){
	var numul = document.getElementById("num");	
	var numlis = numul.children;
	//console.log(numlis);
	var topul = document.getElementById("top");
	var toplis = topul.children;
	
	//自动轮播
	var flag=0;
	var j=0;		//move运动中当前的下标值
	var t = 0;//接收setInterval(step,2000)的返回值
	var t1 = 0;
			
	
	
	numul.onmouseover = function(event){
		var target = event.target;
		console.log(target);
		if(target.nodeName =="LI"){
			clearInterval(t);
			clearInterval(t1);
			
			//获取当前的下标
			var index=target.getAttribute("val");
			//console.log(index);
			flag=+index;
			//console.log(flag);
			if(flag>1 && flag<4){
				topul.style.left = (-(flag-1))*215+"px";
			}else if(flag==4){
				topul.style.left = (-(flag-2))*215+"px";
			}else{
				topul.style.left = 0 +"px";
			};
			
			//清除样式
			Array.prototype.slice.call(numlis,0).forEach(function(item){
				item.removeAttribute("class","click");
				//console.log(item);
				
			});
			Array.prototype.slice.call(toplis,0).forEach(function(item){
				item.removeAttribute("class","foucs");
				//console.log(item);
				
			});
			
			//添加样式
			target.setAttribute("class","click");
			toplis[flag].setAttribute("class","foucs");
		}
		
	};
	
	
	
	
	//当鼠标移除时的事件
	numul.onmouseout=function(event){
		//console.log(flag);
		//console.log(event.target);
		if(event.target.nodeName=="LI"){
			j = flag;		
			t1=setInterval(moveb,2000);	
		}
		
		//函数封装（鼠标移除后继续轮播的函数）
		 function moveb(){
			//console.log();
			j++;
			if(j>numlis.length-1){
				j=0;
			}
			//console.log(j);
			for(var i=0;i<numlis.length;i++){
				numlis[i].removeAttribute("class","click");
				toplis[i].removeAttribute("class","foucs");
				if(j>1 && j<4){
					topul.style.left = (-(j-1))*215+"px";
				}else if(j==4){
					topul.style.left = (-(j-2))*215+"px";
				}else{
					topul.style.left = 0 +"px";
				}
			}
			numlis[j].setAttribute("class","click");
			toplis[j].setAttribute("class","foucs")
			
			
		}
	}


	//函数封装（自动轮播的函数）
	move = function(){
		//console.log();
		j++;
		if(j>numlis.length-1){
			j=0;
		}
		
		//判断进行图片的定位
		for(var i=0;i<numlis.length;i++){
			numlis[i].removeAttribute("class","click");
			toplis[i].removeAttribute("class","foucs");
			if(j>1 && j<4){
				topul.style.left = (-(j-1))*215+"px";
			}else if(j==4){
				topul.style.left = (-(j-2))*215+"px";
			}else{
				topul.style.left = 0 +"px";
			}
		}
		numlis[j].setAttribute("class","click");
		toplis[j].setAttribute("class","foucs")
		//console.log(j);
		
	}
	
	//自动轮播
	t = setInterval(move,2000)
	
	
}
