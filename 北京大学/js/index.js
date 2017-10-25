window.onload = function(){
	
	//获取下拉列表
	var ul = document.getElementById("one");
	var lis = ul.children;
	console.log(lis);
	var divs = document.getElementsByClassName("hidden");
	console.log(divs);
	
	
	//给（北大概况）等添加事件
	for(var i=0;i<lis.length;i++){
		lis[i].index = i;
		//给li添加鼠标移入事件
		lis[i].onmouseover = function(){
			for(var j=0;j<lis.length;j++){
				lis[j].style.backgroundColor="";
				lis[j].style.color="";
				divs[j].style.display="none";
			}
			this.style.backgroundColor="#8f000b";
			this.style.color="#fff";
			divs[this.index].style.display="block";
		}	
		
		divs[i].onmouseover = function(){
			this.style.display = "block";
			
		}
		divs[i].onmouseout = function(){
			this.style.display = "none";
			
		}
		
	}
	
	
	
	
	
}
