/*===========================
Slider
=============================*/


	 $(document).ready(function(){
			$("#slider-home").responsiveSlides({	
				speed:800,		
				nav: true,
				namespace: 'slid-btns',
				titleAnimation: 'bounceIn'
			});
		});
    
/*===========================
Carousel 
=============================*/
    $('.carousel').carousel({
        interval: 1000
    })

/*===========================
ScrollTop
=============================*/


	$('.ir-arriba').click(function(){

        $('body,html').animate({
          scrollTop:'0px'
        },300);        

    });   

    $('.menu').click(function(){

        $(this).slideDown(300);       

    });     
  

    $(window).scroll(function(){
    	if($(this).scrollTop() > 0){
    		$('.ir-arriba').slideDown(300);   		
    	}else{
    		$('.ir-arriba').slideUp(300);
    	}

    });


    $('#myTab a').click(function (e) {
      e.preventDefault()
      $(this).tab('show')
    })
/*===========================
ScrollTo
=============================*/


    $('#nosotros').localScroll({
   target:'#nosotros'
});