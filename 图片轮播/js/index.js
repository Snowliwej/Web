$(function(){
	
	var i=0;
	var clone=$(".banner .img li").first().clone();
	$(".banner .img").append(clone);			/*复制第一张到最后一张*/
	var size=$(".banner .img li").size();
	
//	//添加相应数目的圆点
//	for(var j=0;j<size-1;j++){
//		$(".left .num").append("<li><img src=''></li>");
//	}
//	$(".left .num li").first().addClass("on")
	
	
	/*鼠标划入圆点*/
	$(".left .num li").hover(function(){
		var index=$(this).index();
		i=index;
		$(".banner .img").stop().animate({top:-index*450},500)
		$(this).addClass("on").siblings().removeClass("on")
	})
	
	
	//自动轮播
	var t=setInterval(moveD,2000)
	
	//对banner定时器的操作
	$(".left").hover(function(){
		clearInterval(t);
	},function(){
		t=setInterval(moveD,2000)
	})
	
	//向右的按钮
	$(".banner .btn_r").click(function(){
		moveR();
	})
	
	//向左的按钮
	$(".banner .btn_l").click(function(){
		moveL();
	})
	
	
	
	//向下运动的核心函数
	function moveD(){
		i++;
		if(i==size){
			$(".banner .img").css({top:0});/*解决图片无缝问题*/
			i=1;
			//i=0;
		}
		$(".banner .img").stop().animate({top:-i*450},500)
		if(i==size-1){
			$(".left .num li").eq(0).addClass("on").siblings().removeClass("on")
		}else{
			$(".left .num li").eq(i).addClass("on").siblings().removeClass("on")
		}
		
	}
	
	//向左的核心函数 
	function moveU(){
		i--;
		if(i==-1){
			$(".banner .img").css({left:-(size-1)*450});/*解决图片无缝问题*/
			i=size-2;
		}
		$(".banner .img").stop().animate({top:-i*450},500)
		if(i==size-1){
			$(".left .num li").eq(0).addClass("on").siblings().removeClass("on")
		}else{
			$(".left .num li").eq(i).addClass("on").siblings().removeClass("on")
		}
	}
	
})