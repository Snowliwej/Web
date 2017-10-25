$(function(){
	
	//导航
	var vNavWaitSlide,NavWaitSlide;
		if($('#smenu').css('display')=='none'){
			// 去除了hover事件，以确保手机屏幕下可以点击
		   $('#nav > li').hover( 
			  function(){
				  // $(this).find('a:first').addClass("hover");
				  $(this).find(".minfoWrap").fadeIn(200);
				  /*var current_li=$(this),targ=$(current_li).find('ul:first');
				  NavWaitSlide = setTimeout(function() { 
					 // if(!$(targ).is(':visible'))
					 // {
							$(targ).slideDown(200);
					 // }
				  },100)*/
			  },
			 function(){
				  //clearTimeout(NavWaitSlide);
				  $(this).find('.minfoWrap').fadeOut(450);
				  // $(this).find('a:first').removeClass("hover");
			  }
			);
	}
	//ie6
	
	if ( $.browser.msie){
		 if(parseInt( $.browser.version )<7){
			 $("header.header").prepend("<div class='ie6' style='display:none;'><span>关闭</span>非常抱歉，本站不再支持您的浏览器，请升级您的浏览器到 <a href='http://www.microsoft.com/zh-cn/download/internet-explorer-8-details.aspx' target='_blank'>更高的版本</a>！以获得更好的观看效果。</div>");
			 $(".ie6").animate({height:"toggle",opacity:"toggle"},1000);
			 $(".ie6 span").click(function(){$(".ie6").slideUp()})
	}}
	//小屏幕menu
	
	$("#smenu").toggle(function(){
		$("#nav").slideDown(200);
		},
		function(){
		$("#nav").slideUp(200);
		}
		)
	
	$(".ssubNav").toggle(function(){
		$(this).next(".mainWrap02").slideDown(300);	
	},function(){
		$(this).next(".mainWrap02").slideUp(300);
	})
	$(".ssubNav1").click(function(){
			if($("#mobileNav").css("display")=="none")
			{
				$("#navline_1").addClass("navline1");
				$("#navline_2").addClass("navline2");
				$("#navline_3").addClass("navline3");
			}else{
				$("#navline_1").removeClass("navline1");
				$("#navline_2").removeClass("navline2");
				$("#navline_3").removeClass("navline3");
			}
			$("#mobileNav").toggle(300);
		});
	$("#submenu").toggle(function(){
		$(this).next().slideDown(100);
		},
		function(){
		if($("#submenu .menuicon").is(':visible')){$(this).next().slideUp(100)};
		}
	)
	

	//右侧menu
	$("section.leftNav li").each(function(){
		if($(this).find('ul:first').length>0)
		{
			$(this).find('i:first').show();
			if($(this).hasClass('current'))
			{
				$(this).find('i:first').removeClass("thuicon-plus");
				$(this).find('i:first').addClass("current thuicon-minus");
			}
		}
		else
		{
			$(this).find('i:first').hide();
		}
	}) 
	
	$("section.leftNav li i").click(
		function(){
			if($(this).siblings("ul").is(":visible")){
				$(this).removeClass("current  thuicon-minus");
				$(this).addClass("thuicon-plus");
				$(this).siblings("ul").slideUp('fast');
				}else
				{
					$(this).removeClass("thuicon-plus");
					$(this).addClass("current thuicon-minus");
					$(this).siblings("ul").slideDown('fast');
				}
			})
	
	//tab
		$('.swapmenu li').click(function(){
			var dex=$(this).index();
			$(this).addClass('current').siblings().removeClass('current');
			$('#'+$(this).parent().attr("targ")).children().eq(dex).fadeIn().siblings().hide();

		});
		gotoTop();
			
})
function gotoTop(min_height){
    //预定义返回顶部的html代码，它的css样式默认为不显示
    var gotoTop_html = '<div id="gotoTop"><i class="fa fa-angle-up fa-2x"></i></div>';
    //将返回顶部的html代码插入页面尾部元素前 
    $(gotoTop_html).insertBefore(".footer");
    $("#gotoTop").click(//定义返回顶部点击向上滚动的动画
        function(){$('html,body').animate({scrollTop:0},700);
    }).hover(//为返回顶部增加鼠标进入的反馈效果，用添加删除css类实现
        function(){$(this).addClass("hover");},
        function(){$(this).removeClass("hover");
    });
    //获取页面的最小高度，无传入值则默认为600像素
    min_height ? min_height = min_height : min_height = 600;
    //为窗口的scroll事件绑定处理函数
    $(window).scroll(function(){
        //获取窗口的滚动条的垂直位置
        var s = $(window).scrollTop();
        //当窗口的滚动条的垂直位置大于页面的最小高度时，让返回顶部元素渐现，否则渐隐
        if( s > min_height){
            $("#gotoTop").fadeIn(100);
        }else{
            $("#gotoTop").fadeOut(200);
        };
    });
}

