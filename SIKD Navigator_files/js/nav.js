
// $(document).ready(function(){
//   $(window).scroll(function(){
//   	var scroll = $(window).scrollTop();
// 	  if (scroll > 300) {
// 	    $(".navbar").css("background" , "#02275c") ; 
// 	  }

// 	  else{
// 		  $(".navbar").css("background" , "#eeeeee");  	
// 	  }
//   })
// })

$(window).scroll(function(){
	$('nav').toggleClass('scrolled', $(this).scrollTop() > 50);
});