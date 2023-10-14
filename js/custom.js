$(function(){


	$(window).scroll(function () {
		
		if($(this).scrollTop() > 140) {
			
			
			$(".menuHeader").addClass("navbar-fixed-top")
			
			
		} else {
			
			$(".menuHeader").removeClass("navbar-fixed-top")
			
		}
		
	});
	
	$(".openMenu").click(function () {
		
		$("body").addClass("overflowH");
		$(".menuMobile").fadeIn();
		$(".transformPage,.menuMobile .menuContent").addClass("active");
		
	});
	

	$(".closeX,.BgClose").click(function () {
		
		$("body").removeClass("overflowH");
		$(".menuMobile").fadeOut();
		$(".transformPage,.menuMobile .menuContent").removeClass("active");
		
	});


	
	$('#bx-home').bxSlider({
		auto:true,
		nextSelector: '#home-prev',
		prevSelector: '#home-next',
		nextText: '<i class="fa fa-angle-left fa-2x"></i>',
		prevText: '<i class="fa fa-angle-right fa-2x"></i>',
		onSlideAfter: function (currentSlideNumber, totalSlideQty, currentSlideHtmlObject) {
			$('.active-slide').removeClass('active-slide');
			$('#bx-home > li').eq(currentSlideHtmlObject + 1).addClass('active-slide');
			$(".fade-In").addClass("animated fadeIn");
			$(".fade-In-Down").addClass("animated fadeInDown");
			$(".fade-In-DownBig").addClass("animated fadeInDownBig");
			$(".fade-In-Left").addClass("animated fadeInLeft");
			$(".fade-In-LeftBig").addClass("animated fadeInLeftBig");
			$(".fade-In-Right").addClass("animated fadeInRight");
			$(".fade-In-RightBig").addClass("animated fadeInRightBig");
			$(".fade-In-Up").addClass("animated fadeInUp");
			$(".fade-In-UpBig").addClass("animated fadeInUpBig");
		},
		onSlideBefore: function () {
			$(".fade-In").removeClass("animated fadeIn");
			$(".fade-In-Down").removeClass("animated fadeInDown");
			$(".fade-In-DownBig").removeClass("animated fadeInDownBig");
			$(".fade-In-Left").removeClass("animated fadeInLeft");
			$(".fade-In-LeftBig").removeClass("animated fadeInLeftBig");
			$(".fade-In-Right").removeClass("animated fadeInRight");
			$(".fade-In-RightBig").removeClass("animated fadeInRightBig");
			$(".fade-In-Up").removeClass("animated fadeInUp");
			$(".fade-In-UpBig").removeClass("animated fadeInUpBig");
		},
		onSliderLoad: function () {
			$('#bx-home > li').eq(1).addClass('active-slide');
		}
		
	});
	
	  var OwlSales = $('#OwlSales');
	 
	  OwlSales.owlCarousel({
	      
	      items : 1, //10 items above 1000px browser width
	      itemsDesktop : [1200,1], //5 items between 1000px and 901px
	      itemsDesktopSmall : [979,1], // betweem 900px and 601px
	      itemsTablet: [768,1], //2 items between 600 and 0
	      itemsMobile : [479,1],// itemsMobile disabled - inherit from itemsTablet option
	      slideSpeed : 500,
	      paginationSpeed : 400,
	      pagination:false,
	      navigation:true,
	      autoPlay:true,
	      navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"]
	  });	
	
	  var OwlImages = $('#OwlImages');
	 
	  OwlImages.owlCarousel({
	      
	      items : 1, //10 items above 1000px browser width
	      itemsDesktop : [1200,1], //5 items between 1000px and 901px
	      itemsDesktopSmall : [979,1], // betweem 900px and 601px
	      itemsTablet: [768,1], //2 items between 600 and 0
	      itemsMobile : [479,1],// itemsMobile disabled - inherit from itemsTablet option
	      slideSpeed : 500,
	      paginationSpeed : 400,
	      pagination:false,
	      navigation:true,
	      autoPlay:true,
	      navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"]
	  });	
	  
	  var ProductsItems = $('#ProductsItems');
	 
	  ProductsItems.owlCarousel({
	      
	      items : 4, //10 items above 1000px browser width
	      itemsDesktop : [1200,4], //5 items between 1000px and 901px
	      itemsDesktopSmall : [979,3], // betweem 900px and 601px
	      itemsTablet: [768,2], //2 items between 600 and 0
	      itemsMobile : [479,1],// itemsMobile disabled - inherit from itemsTablet option
	      slideSpeed : 500,
	      paginationSpeed : 400,
	      pagination:false,
	      navigation:true,
	      autoPlay:true,
	      navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"]
	  });
	  
	  var clientsItems = $('#clientsItems');
	 
	  clientsItems.owlCarousel({
	      
	      items : 3, //10 items above 1000px browser width
	      itemsDesktop : [1200,2], //5 items between 1000px and 901px
	      itemsDesktopSmall : [979,2], // betweem 900px and 601px
	      itemsTablet: [768,1], //2 items between 600 and 0
	      itemsMobile : [479,1],// itemsMobile disabled - inherit from itemsTablet option
	      slideSpeed : 500,
	      paginationSpeed : 400,
	      pagination:true,
	      navigation:false,
	      autoPlay:true,
	  });
	  
	  var OwlOfferSlider = $('#OwlOfferSlider');
	 
	  OwlOfferSlider.owlCarousel({
	      
	      items : 1, //10 items above 1000px browser width
	      itemsDesktop : [1200,1], //5 items between 1000px and 901px
	      itemsDesktopSmall : [979,1], // betweem 900px and 601px
	      itemsTablet: [768,1], //2 items between 600 and 0
	      itemsMobile : [479,1],// itemsMobile disabled - inherit from itemsTablet option
	      slideSpeed : 500,
	      paginationSpeed : 400,
	      pagination:false,
	      navigation:true,
	      autoPlay:true,
	      navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"]
	  });	
	  
	  
	$(".openShare").click(function () {
		$(this).siblings().slideToggle()
	})
	  
	$('body,html').on('click', function(e) {
		var container = $(".openShare,.listSocial"),
		Sub = $(".listSocial");
		

	    if( !$(e.target).is(container)  ){
	        Sub.slideUp();
	    }
	

	});
	  
	  
    $(".inputStyle input").keyup(function(e) {
    	
    	if (this.value.length > 0) {
    		
    		$(this).parent().addClass("active")
    		
    	} else {
    		$(this).parent().removeClass("active")
    	}
    	
    });
	  
	
	/****** Start Tabs ******/
	
	$(".btnTabs li").click(function () {
		
		var myButton = $(this).attr("id"),
			parent = $(this).parent().attr("id");
		
		$(this).addClass("active").siblings().removeClass("active");
		
		$("."+parent+" .tab").hide();
		
		$("."+parent+" ." + myButton).fadeIn();
		
	});
	
	/****** End Tabs ******/
	  
	  var OwlAboutSlider = $('#OwlAboutSlider');
	 
	  OwlAboutSlider.owlCarousel({
	      
	      items : 1, //10 items above 1000px browser width
	      itemsDesktop : [1200,1], //5 items between 1000px and 901px
	      itemsDesktopSmall : [979,1], // betweem 900px and 601px
	      itemsTablet: [768,1], //2 items between 600 and 0
	      itemsMobile : [479,1],// itemsMobile disabled - inherit from itemsTablet option
	      slideSpeed : 500,
	      paginationSpeed : 400,
	      pagination:true,
	      navigation:true,
	      autoPlay:true,
	      navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"]
	  });	
	  
	  
		new WOW().init();
});
