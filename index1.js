$(function(){
		
		
		var total_height = $("#nav").css("height");
		total_height = Number(total_height.slice(0,total_height.length-2));
		var new_height = total_height;
		var std_height = $("#nav>li").css("line-height");
		std_height = Number(std_height.slice(0,std_height.length-2));
		var submenu_height = $(".submenu").css("line-height");
		submenu_height = Number(submenu_height.slice(0,submenu_height.length-2));
		var border_width = $("#nav .submenu").css("border-top-width");
		border_width = Number(border_width.slice(0,border_width.length-2));
		$("#nav>li").hover(function(){
							new_height = total_height;
							$(this).find("li").each(function(){
								new_height = new_height - ( submenu_height + border_width );
							});
							new_height = new_height - border_width;
							new_height = new_height - std_height;
							new_height = new_height /5;
							$(this).find(".fuck").stop().slideDown(500);
							$(this).siblings().each(function(){
								$(this).stop().animate({"line-height":new_height+"px"},500);});}, 
								function(){
								$(this).find(".fuck").stop().slideUp(500);
								$("#nav>li:not(this)").each(function(){
								
								$(this).stop().animate({"line-height":std_height+"px"},500);});});		
								
								
		
		var nav_container_width = $("#nav_container").css("width");
				if( Number(nav_container_width.slice(0,nav_container_width.length-2)) <= 100 ) 
				{	
					
					$("#nav_container").css({"display":"none"});
					$("#line").css({"display":"none"});
					$("#right").css("display","none");
					$("#pageMain").css({"width":"90%","padding":"80px 5% 50px 0","margin-left":"0px"});
					
					$("#logo").remove();
					$logo = $("<img id='logo' src='images/logo_narrow_01.png'/>");
					$logo.css({"position":"absolute","top":"0px","left":"0px","z-index":"1","width":"100%"});
					$("body").append($logo);
				}
				else {
					$("#nav_container").css("display","block");
					$("#line").css({"display":"block"});
					$("#pageMain").css({"width":"69%","padding":"40px 5.93% 50px 0px","margin-left":"20%"});
					$("#right").css("display","block");
					var nav_left = (Number(nav_container_width.slice(0,nav_container_width.length-2))- 130)/2;
					$("ul#nav").css("left",nav_left+"px");
					
					$("#logo").remove();
					$logo = $("<img id='logo' src='images/logo_01.png'/>");
					$logo.css({"position":"fixed","top":"0px","left":"0px","z-index":"1","width":"20%"});
					$("body").append($logo);
					
					$("#menu").remove();
					
				}
								
				
		
		}
	);
$(window).resize(function() {
				var nav_container_width = $("#nav_container").css("width");
				if( Number(nav_container_width.slice(0,nav_container_width.length-2)) <= 100 ) 
				{	
					
					$("#nav_container").css({"display":"none"});
					$("#line").css({"display":"none"});
					$("#right").css("display","none");
					$("#pageMain").css({"width":"90%","padding":"80px 5% 50px 0px","margin-left":"0px"});
					
					$("#logo").remove();
					$logo = $("<img id='logo' src='images/logo_narrow_01.png'/>");
					$logo.css({"position":"absolute","top":"0px","left":"0px","z-index":"1","width":"100%"});
					$("body").append($logo);
					
					/*$menu = $("<img id='menu' src='images/menu_01.png'/>");
					$menu.css({"position":"absolute","top":"0px","left":"0px","z-index":"2","width":"10%"});
					$("body").append($menu);
					
					$menu.click(function(){
						$("#pageMain").animate({"margin-left":"130px"},500);
						$("#nav_container").css({"width":"0px","overflow":"hidden"});
						$("#nav").css({"width":"0px","overflow":"hidden"});
						$("#nav_container").css({"display":"block"});
						$("#nav_container").animate({"width":"130px"},500);
						$("#nav").animate({"width":"130px"},500);
						$("#line").css({"display":"block"});
						$("ul#nav").css("left","0px");
					;});
					
					$("#pageMain").click(function(){
						$("#pageMain").animate({"margin-left":"0px"},500);
						$("#nav_container").animate({"width":"0px"},500);
						$("#nav").animate({"width":"0px"},500);
					})*/
				}
				else {
					$("#nav_container").css("display","block");
					$("#line").css({"display":"block"});
					$("#pageMain").css({"width":"79%","padding":"40px 0 50px 0px","margin-left":"20%"});
					$("#right").css("display","block");
					var nav_left = (Number(nav_container_width.slice(0,nav_container_width.length-2))- 130)/2;
					$("ul#nav").css("left",nav_left+"px");
					
					$("#logo").remove();
					$logo = $("<img id='logo' src='images/logo_01.png'/>");
					$logo.css({"position":"fixed","top":"0px","left":"0px","z-index":"1","width":"20%"});
					$("body").append($logo);
					
					$("#menu").remove();
					
				}
			});	

