$(document).ready(function(){
	$('.menu-tab-btn').click(function(){
		$('.menu-page').animate({
			top:0,
			left:0
		},400)
	});
		$('.return-home-page').click(function(){
		$('.menu-page').animate({
			top:0,
			left:"-100%"
		},400)
	});
	var leftnav,menulist;
	$('.leftnav li').on("click",function(){
		var index = $(this).index();
		$(this).addClass("on").siblings().removeClass("on");
		$(".menu-lists").eq(index).show().siblings().hide();
	})
	$(".leftnav li").eq(0).addClass("on");
	$(".menu-lists").eq(0).show().siblings().hide();

})
