window.onload = function(){
	//获取到show和text
	var show = document.getElementById("show");
	//console.log(show);
	var texts =document.getElementById("text");
	//console.log(texts);
	
	//获取所有的input
	var inputs = document.getElementsByTagName("input"); 
	//console.log(inputs[3])
	var show = document.getElementById("show");
	//console.log(show);
	
	//获取duigou的div
	var duigou = document.getElementsByClassName("duigou")[0];
//	console.log(duigou);

	//获取duigou的图片
	var img = document.getElementById("img");
	//console.log(img);
	
	
	
	//给验证码添加点击事件
	
	texts.parentNode.onclick =function(){
//		alert("1");
		var b = Math.floor(Math.random()*10)*1000+Math.floor(Math.random()*10)*100+Math.floor(Math.random()*10)*10+Math.floor(Math.random()*10);
		
		show.innerText = b;
	};
	
	//判断手机号是否正确
	inputs[0].onblur = function(){
		//alert();
		var pattern = /^\d{11}$/;
		var str = inputs[0].value;
		//alert(pattern.test(str));
		if(pattern.test(str)){
			inputs[0].parentNode.style.border = "2px solid #fff";
			
		}else{
			inputs[0].parentNode.style.border="1px solid red";
		
		}
		return pattern.test(str)
		
	}
	//console.log(inputs[0].onblur());
	
	
	//判断验证码是否为空
	show.parentNode.onmouseleave = function(){
		//alert();
		if(show.innerHTML==0){
			show.parentNode.style.border = "1px solid red";
		}else{
			show.parentNode.style.border = "2px solid #fff";
		}
		return show.innerHTML!=0;
	}
	//console.log(show.parentNode.onmouseleave());
	
	
	//判断密码输入是否正确
	inputs[1].onblur = function(){
		var pattern = /^\w{6,10}$/;
		var str = inputs[1].value;
		//console.log(pattern.test(str))
		if(pattern.test(str)){
			inputs[1].parentNode.style.border = "2px solid #fff";
			
		}else{
			inputs[1].parentNode.style.border="1px solid red";
		}
		return pattern.test(str);
	}
	
	
	
	//判断确认密码是否正确
	inputs[2].onblur = function(){
		if(inputs[1].value===inputs[2].value){
			inputs[2].parentNode.style.border = "2px solid #fff";
		}else{
			inputs[2].parentNode.style.border="1px solid red";
		}
		return inputs[1].value===inputs[2].value
	}
	
	
	
	//给duigou添加点击事件
	img.removeAttribute("src");
	duigou.onclick = function(){
		if(img.src == 0){
			img.setAttribute("src","img/duigou.png");
		}else{
			img.removeAttribute("src");
		}
		return img.src == 0
	}
	
	
	
	//给注册按钮添加点击事件
	inputs[3].onclick = function(){
		if(inputs[0].onblur()){
			if(show.parentNode.onmouseleave()){
				if(inputs[1].onblur()){
					if(inputs[2].onblur()){
						if(duigou.onclick()){
							form.submit();
						}else{
							alert("您还没有同意用户使用协议，无法进行注册")
						}
					}else{
						alert("请确认密码")
					}
				}else{
					alert("请输入正确的密码")
				}
			}else{
				alert("请点击获取验证码")
			}
		}else{
			alert("请你输入正确的手机号")
		}
	}
	
	
	//form表单中的下拉列表
	var ul = document.getElementsByTagName("ul")[0];
	var lis = ul.children;
	console.log(lis);
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
	
}
