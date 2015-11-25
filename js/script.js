var mn = $(".navbar");
$(window).scroll(function(){
	if($(this).scrollTop() > 35){
		mn.addClass("navbar-scroll");
	}else{
		mn.removeClass("navbar-scroll");
	};
});