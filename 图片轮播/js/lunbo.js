window.onload = function(){
	
	//获取num中的所有li
	var lis1 = document.getElementsByClassName("li");
	//获取img中的所有li
	var lis2 = document.getElementsByClassName("img");
	var j = 0;
	
	
	console.log(lis2.length)
	//遍历nums中所有的li
	for(var i=0;i<lis1.length;i++){
		//找出当前的下标
		lis1[i].index = i;
		lis2[i].index = i;
		//console.log(lis1[i].index)
		
		//给li添加事件
		lis1[i].onmouseover = function(){
			//清除所有li的样式
			
			for(var i=0;i<lis1.length;i++){
				lis1[i].style.background="";
				
				
			}
			this.style.background= "#fff";
			//给相应的图片添加事件
			clearInterval(moveR,2000);
			lis2[this.index].parentNode.style.left = (-this.index)*770+"px";
			//console.log(lis2[this.index]);
			
			
			
			
			
			
		};
		
		//setInterval(moveR,2000);
	
		
//		function moveR(){
//				console.log(i);
//				
//				lis2[i].parentNode.style.left = (-lis2[i].index)*770+"px";
//				
//				console.log(lis2[i]);
////				//console.log(Number(lis2[i].parentNode.style.left));
////				
////				var nows = Number(lis2[i].parentNode.style.left);
////				console.log(nows);
////				if(nows<lis2.length){
////					nows = (-)*770
////					lis2[i].parentNode.style.left=nows+"px";
////					setInterval(moveR,2000);
////				}else{
////					lis2[i].parentNode.style.left = nows+"px";
////				}
////				setInterval(moveR,2000)
//			
//			
//			
//		}
//		//moveR();
		function moveR(){
			console.log(j);
			
			j++;
			if(j<=lis2.length){
				lis2[j-1].parentNode.style.left = -(j-1)*770+"px";
				console.log(lis2[j-1].parentNode.style.left)
				//setInterval(moveR,2000);
			}else{
				j = 0;
			}
			//setInterval(moveR,2000);
		}
		

	
			
		
		
		
		//向左的运动
	
	
		
		
		
	}
	
			
			
	
	
}
