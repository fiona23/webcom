$(function(){	
		var total_height = $("#nav").css("height");
		total_height = Number(total_height.slice(0,total_height.length-2));
		var std_height = $("#nav>li").css("line-height");
		std_height = Number(std_height.slice(0,std_height.length-2));
		$("#nav>li").hover(function(){
							var li_num = 1;
							var sub_li_num = 0;
							var new_height = total_height;
							$(this).find(".fuck li").each(function(){
								li_num = li_num +1;
								sub_li_num = sub_li_num + 1;
							});
							$(this).siblings().each(function(){
								li_num = li_num + 1;
							});
							new_height = new_height / li_num;
							
							$(this).stop().css({"line-height":new_height+"px"});
							$(this).find("li").each(function(){
								$(this).stop().css({"line-height":new_height+"px"});		
							});
							var sub_ul_height = new_height * sub_li_num + 5;
							$(this).find(".fuck").stop().css({"height":sub_ul_height+"px"});
							$(this).siblings().each(function(){
								$(this).stop().css({"line-height":new_height+"px"});});
							/*$(this).stop().animate({"line-height":new_height+"px"},500);
							$(this).find("li").each(function(){
								$(this).stop().animate({"line-height":new_height+"px"},500);		
							});
							var sub_ul_height = new_height * sub_li_num + 5;
							$(this).find(".fuck").stop().animate({"height":sub_ul_height+"px"},500);
							$(this).siblings().each(function(){
								$(this).stop().animate({"line-height":new_height+"px"},500);});	*/	}, 
								function(){
								$(this).find(".fuck").css({"height":"0px"});
								$(this).find("li").each(function(){$(this).css({"line-height":"0px"});});
								$("#nav>li").each(function(){$(this).css({"line-height":std_height+"px"});});
								/*$(this).find(".fuck").stop().animate({"height":"0px"},500);
								$(this).find("li").each(function(){
								$(this).stop().animate({"line-height":"0px"},500);});
								$("#nav>li").each(function(){
								$(this).stop().animate({"line-height":std_height+"px"},500);});*/});		
								
								
		
		var nav_container_width = $("#nav_container").css("width");
				if( Number(nav_container_width.slice(0,nav_container_width.length-2)) <= 100 ) 
				{	
					
					$("#nav_container").css({"display":"none"});
					$("#line").css({"display":"none"});
					$("#right").css("display","none");
					$("#pageMain").css({"width":"90%","padding":"0 0 0 0","margin-left":"0px"});
					
					$("#logolink").remove();
					$logo = $("<a href='index.html' id='logolink'><img id='logo' src='images/logo_narrow_01.png'/></a>");
					$("body").append($logo);
					$("#logo").css({"position":"absolute","top":"0px","left":"0px","z-index":"1","width":"100%"});
				}
				else {
					$("#nav_container").css("display","block");
					$("#line").css({"display":"block"});
					$("#pageMain").css({"width":"80%","padding":"0 0 0 0","margin-left":"20%"});
					$("#right").css("display","block");
					var nav_left = (Number(nav_container_width.slice(0,nav_container_width.length-2))- 130)/2;
					$("ul#nav").css("left",nav_left+"px");
					
					$("#logolink").remove();
					$logo = $("<a href='index.html' id='logolink'><img id='logo' src='images/logo_01.png'/></a>");
					$("body").append($logo);
					$("#logo").css({"position":"fixed","top":"0px","left":"0px","z-index":"1","width":"20%"});
					//$logo.css({"position":"fixed","top":"0px","left":"0px","z-index":"1","width":"20%"});
					
					
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
					$("#pageMain").css({"width":"90%","padding":"0 0 0 0","margin-left":"0px"});
					
					$("#logolink").remove();
					$logo = $("<a href='index.html' id='logolink'><img id='logo' src='images/logo_narrow_01.png'/></a>");
					$("body").append($logo);
					$("#logo").css({"position":"absolute","top":"0px","left":"0px","z-index":"1","width":"100%"});
					
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
					$("#pageMain").css({"width":"80%","padding":"0 0 0 0","margin-left":"20%"});
					$("#right").css("display","block");
					var nav_left = (Number(nav_container_width.slice(0,nav_container_width.length-2))- 130)/2;
					$("ul#nav").css("left",nav_left+"px");
					
					$("#logolink").remove();
					$logo = $("<a href='index.html' id='logolink'><img id='logo' src='images/logo_01.png'/></a>");
					$("body").append($logo);
					$("#logo").css({"position":"fixed","top":"0px","left":"0px","z-index":"1","width":"20%"});
					//$logo.css({"position":"fixed","top":"0px","left":"0px","z-index":"1","width":"20%"});
					
					
					$("#menu").remove();
					
				}
			});	

