window.onload = function(){
	var numul = document.getElementById("num");	
	var numlis = numul.children;
	//console.log(numlis);
	var topul = document.getElementById("top");
	var toplis = topul.children;
	
	//自动轮播
	var flag=0;
	var j=-1;
	
	var t =setInterval(move,2000);
	
	
	for(var i=0;i<numlis.length;i++){
		numlis[i].index = i;
		//console.log(numlis[i]);
		
		//给每个按钮添加点击事件，让图片聚焦
		numlis[i].onmouseover = function(){
			
		
			//console.log(t);
			//alert(i);
			clearInterval(t);
			
		
			for(var i=0;i<numlis.length;i++){
				numlis[i].removeAttribute("class","click");
				toplis[i].removeAttribute("class","foucs");
				if(this.index>1 && this.index<4){
					topul.style.left = (-(this.index-1))*215+"px";
				}else if(this.index==4){
					topul.style.left = (-(this.index-2))*215+"px";
				}else{
					topul.style.left = 0 +"px";
				}
			}
			this.setAttribute("class","click");
			toplis[this.index].setAttribute("class","foucs");
			//console.log(this.index);
			flag=this.index;
			
			
		}	
	}
	
		
//	numul.onmouseout = function(){
//		t=setInterval(move,2000)
//	}

numul.onmouseout=function(event){
	//console.log(event.target);
	if(event.target.nodeName=="LI"){
		setInterval(move,2000);
	}
}
	
	
	

	
	
	//函数封装
	function move(){
		
		j++;
		if(j>numlis.length-1){
			j=0;
		}
		
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
	
	
}
