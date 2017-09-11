$(window).scroll(function(event) {
    		if($(window).scrollTop()>60){
    			$('nav').addClass('navshow');
    		}else{
    			$('nav').removeClass('navshow');
    		}
    	});