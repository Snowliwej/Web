window.onload =function(){
	
	
	//头部下拉列表
	//获取li和img的div
	var ul = document.getElementsByTagName("ul")[0];
	var lis = ul.children;
	//console.log(lis);
	var jiantoudiv = document.getElementsByClassName("jiantou")[0];
	console.log(jiantoudiv);
	//给div添加点击事件
	jiantoudiv.onclick = function(){
		
		for(var i = 0;i<lis.length;i++){
			lis[i].parentNode.style.overflow = "inherit";
			lis[i].parentNode.style.zIndex="100";
			
		}
	}
	//给每个li添加点击事件
	Array.prototype.slice.call(lis,0).forEach(function(item){
		//console.log(item);			//item指的是li
		item.onclick =function(event){
			//console.log(event.target);
			var target=event.target;		//这里的event.target指的是li
			if(target.nodeName == "LI"){
				lis[0].innerText = this.innerText;
				this.parentNode.style.overflow = "hidden";
			}
			
			
		}
	});
	
	
	
	
	
	//获取xuan的	div
	var divs1 = document.getElementsByClassName("div");
	var divs2 = document.getElementsByClassName("div2");
	
	//给xuan的每个div添加点击事件
	for(var i=0;i<divs1.length;i++){
		//找出当前的下标值
		divs1[i].index = i;
		
		//给第一选项卡添加默认状态
		divs1[0].style.color="orange";
		divs1[0].style.borderBottom="5px solid orange";
		
		divs1[i].onclick=function(){
			
			
			//1.把所有按钮的背景色去掉
			//2.把所有div全部隐藏
			
			for(var i=0;i<divs1.length;i++){
				divs1[i].style.color="#fff";
				divs1[i].style.borderBottom="";
				divs2[i].style.display="none";
			}
			//给当前的按钮添加背景色
			//让当前点击按钮所对应的div显示
			this.style.color="orange";
			this.style.borderBottom="5px solid orange";
			divs2[this.index].style.display= "block";
		}
	}
	
	//获取选项卡2的div
	
	var divs3 = document.getElementsByClassName("div3");
	var divs4 = document.getElementsByClassName("div4");
	
	//给xuan2的每个div添加点击事件
	for(var i=0;i<divs3.length;i++){
		//找出当前的下标值
		divs3[i].index = i;
		
		//给第一选项卡添加默认状态
		divs3[0].style.color="orange";
		divs3[0].style.borderBottom="5px solid orange";
		
		divs3[i].onclick=function(){
			
			
			//1.把所有按钮的背景色去掉
			//2.把所有div全部隐藏
			for(var i=0;i<divs3.length;i++){
				divs3[i].style.color="black";
				divs3[i].style.borderBottom="";
				divs4[i].style.display="none";
			}
			//给当前的按钮添加背景色
			//让当前点击按钮所对应的div显示
			this.style.color="orange";
			this.style.borderBottom="5px solid orange";
			divs4[this.index].style.display= "block";
		}
	}
	
	//获取选项3的div
	
	var divs5 = document.getElementsByClassName("div5");
	var divs6 = document.getElementsByClassName("div6");
	
	//给xuan3的每个div添加点击事件
	for(var i=0;i<divs5.length;i++){
		//找出当前的下标值
		divs5[i].index = i;
		
		//给第一选项卡添加默认状态
		divs5[0].style.color="orange";
		divs5[0].style.borderBottom="5px solid orange";
		
		divs5[i].onclick=function(){
			
			
			//1.把所有按钮的背景色去掉
			//2.把所有div全部隐藏
			for(var i=0;i<divs5.length;i++){
				divs5[i].style.color="black";
				divs5[i].style.borderBottom="";
				divs6[i].style.display="none";
			}
			//给当前的按钮添加背景色
			//让当前点击按钮所对应的div显示
			this.style.color="orange";
			this.style.borderBottom="5px solid orange";
			divs6[this.index].style.display= "block";
		}
	}
	
	
	
	
	
	
	//给底部的图片添加点击事件
	var imgs = document.getElementsByClassName("img");
	//console.log(imgs[0]);
	
	var src;
	var b;
	var a;
	for(var i=0;i<imgs.length;i++){
		imgs[i].index = i;
		
		
		//给每个img添加点击事件
		imgs[i].onclick = function(){
			src2 = this.attributes.src.value;
			for(var i=0;i<=imgs.length-1;i++){
				
				//将所有的img的路径改为无样式路径
				
				src = imgs[i].attributes.src.value;
				//console.log(src.length)
				//判断src的长度是否为16位
				if(src.length == 16){
					//console.log(src);
					//如果是16位，则将字符串src赋值给img的src
					imgs[i].setAttribute("src",src);
					
				}else{
					//如果不是16位，将字符串src进行切割，再把新的a赋给img的src
					a =  src.slice(0,src.length-6)+".png";
					//console.log(a);
					imgs[i].setAttribute("src",a);
				}
				
				
			}
			
			//将当前点击图片的路径改为有样式图片
			//console.log("----");
			if(src2.length == 18){
				b = src2.slice(0,src2.length-6)+"_1.png";
				this.setAttribute('src',b);
			}else{
				b = src2.slice(0,src2.length-4)+"_1.png";
				//console.log(b);
				this.setAttribute('src',b);
			}
			
			
		}
	}
	
	
	
	
	
	//轮播图的部分js
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
	
		

	//给当前图片对象的ul添加鼠标移出事件
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
