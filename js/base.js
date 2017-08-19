(function(){
	
	$(window).resize(function(){
		var W = $(document).width();
		console.log(W);
		if( W <= 750){
			$('.banner-image-01').attr( 'src' , 'images/banner-640-01.jpg');
			$('.banner-image-02').attr( 'src' , 'images/banner-640-02.jpg');
		}else{
			$('.banner-image-01').attr( 'src' , 'images/banner-2000-01.jpg');
			$('.banner-image-02').attr( 'src' , 'images/banner-2000-02.jpg');
		}
	})



	var $nav = $('.header .navbar-default');

	//固定导航栏
	$(window).scroll(function(){
		var H = $(document).scrollTop();

		if( H >= 500 ){
			//固定
			$nav.addClass('fixed-top')
		}else{
			//不固定
			$nav.removeClass('fixed-top')
		}
	})



}());