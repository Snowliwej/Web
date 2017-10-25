var swap_id = "#id_swap_1";
var LB_id = "";

var _height_;
var _width_;

var header_height = 0;

var MAX_SLIDER_HEIGHT = 460;
var MIN_WIDTH = 640;
var MAX_WIDTH = 1800;
var win_width = 0;

var magicLine;

function submitSearch()
{
	document.forms["formSearch"].submit();
}

function openLightbox()
{
  	$(".lightbox_back").css("display", "block");
	$(".lightbox_fore").css("display", "block");
	$("body").css("overflow", "hidden");
}

function shutLightbox()
{
  	$(".lightbox_back").css("display", "none");
	$(".lightbox_fore").css("display", "none");
	$("body").css("overflow", "auto");
}

function func_adjustWidth()
{
	var new_height = win_width / 3;
	var new_height2  = win_width / 3.64;
	var new_height3  = (new_height2>380?380:new_height2)-$(".boutiCon").height();
	if(new_height3<=0)
		new_height3=0;
	new_height3=new_height3/2;
	/*$(".bouti-link-intro").css("width", (win_width > MAX_WIDTH ? MAX_WIDTH : win_width));*/
	/*$(".bouti-tit").css("width", (win_width > MAX_WIDTH ? MAX_WIDTH : win_width));*/
	$(".bouti-tit").css("height", (new_height2>380?380:new_height2));
	$(".boutiCon").css("top", new_height3);
	$(".boutiConBg").css("top", new_height3);
	if(win_width>1380)
	{
		$(".boutiCon").css("left", (win_width-1380)/2);
		$(".boutiConBg").css("left", (win_width-1380)/2);
	}
	else{
		$(".boutiCon").css("left", 0);
		$(".boutiConBg").css("left", 0);
	}
	if (new_height > MAX_SLIDER_HEIGHT)
	{
		new_height = MAX_SLIDER_HEIGHT;
	}
	$(".iosSliderDemo").css("padding-bottom", new_height);
	$(".fluidHeight").height(new_height);
	$(".sliderContainer").css("max-height", new_height);

        if (win_width >= MIN_WIDTH)
	{
		/*$(".mainWrap02").removeAttr("style");*/
		$("#mobileNav").slideUp(0);
		$("#nav").removeAttr("style");
		$("#example-one").removeAttr("style");
		$("#example-two").removeAttr("style");
	}

	if (magicLine.length > 0)
	{
		magicLine.width($(".secNav .cur").width());
		magicLine.css("left", $(".secNav .cur a").position().left);
	}
}


var title = "";

$(document).ready(function()
{
	magicLine = $("#magic-line");
        
	$(".cls_swap_data").css("display", "none");
	$(swap_id).addClass("current");
	$(swap_id + "_data").css("display", "inline");
	title = $(swap_id + " .cls_swap").html();
	$(".cls_swap").click(function()
	{
		var _swap_id_ = "#" + $(this).parent().attr("id");

		if (swap_id != _swap_id_)
		{
			title = $(this).html();

			if (parseInt(_swap_id_.substr(9)) > 0)
			{
				$(swap_id).removeClass("current");
			}
			$(swap_id + "_data").css("display", "none");
			$(_swap_id_).addClass("current");
			$(_swap_id_ + "_data").css("display", "inline");
			swap_id = _swap_id_;
		}
		return false;
	});

	$(".cls_LB_data").css("display", "none");
	$(".cls_LB").click(function()
	{
		if($("#id_LB_content")!=null && $("#id_LB_content").length>0){
			var _LB_id_ = $(this).attr("id").substring(6);
			 $.get("/seg/celebrities/"+_LB_id_+".seg",function(dat)
	        {
            	$("#id_LB_content").html(dat);
                  openLightbox();
	        },"text");
		}
		else if($("#id_LB_content_elit")!=null && $("#id_LB_content_elit").length>0){
			var _LB_id_ = $(this).attr("id").substring(6);
			 $.get("../../seg/academician/"+_LB_id_+".seg",function(dat)
	        {
            	$("#id_LB_content_elit").html(dat);
                  openLightbox();
	        },"text");
		}
		else{
			var _LB_id_ = "#" + $(this).attr("id");

			if (LB_id != _LB_id_)
			{
				var _title_ = $(_LB_id_ + "_data").attr("title");

				if (!(_title_ === undefined) && _title_.length > 0)
				{
					title = _title_;
				}

				$("#id_LB_name").html($(this).html() + "&nbsp;&nbsp;" + title);

				if (LB_id != "")
				{
					$(LB_id + "_data").css("display", "none");
				}
				$(_LB_id_ + "_data").css("display", "block");
				LB_id = _LB_id_;
			}
			openLightbox();
		}
		return false;
	});
	$(".cls_shut_LB").click(function()
	{
		shutLightbox();
		return false;
	});
	$(document).keyup(function(e) {
  		if (e.keyCode == 27) {
  			shutLightbox();
		}
	});
	$(".lightbox_back").click(function() {
  		shutLightbox();
		return false;
	});

	header_height = $(".header").height();
	$("#header_placeholder").height(header_height);

	win_width = $(window).width();
	func_adjustWidth();

	$(window).resize(function() {
		_height_ = $(".header").height();
		if (header_height != _height_)
		{
			header_height = _height_;
			$("#header_placeholder").height(header_height);
		}

		_height_ = $(window).height();
		_width_ = $(window).width();
		if (win_width != _width_)
		{
			win_width = _width_;
			func_adjustWidth();
		}
	});

	$(".footerMiniNav").click(function()
	{
		if ($(".footerNav").css("display") == "none")
		{
			$(".footerNav").css("display", "inline");
			$(".footerMiniNav").css("background-image", 'url("img/gateway_up.png")');
		}
		else
		{
			$(".footerNav").css("display", "");
			$(".footerMiniNav").css("background-image", "");
		}
	});
	$(document).click(function(ep){
		if(ep.target.id.indexOf("form_Search")<0){
			$(".searchDIV").slideUp(300);
		}
	});
})
