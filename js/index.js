	// When the user scrolls down 80px from the top of the document, add a shadow, resize the navbar's padding and the logo's font size
	window.onscroll = function() {scrollFunction()};
	
	function scrollFunction() {
	  if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
		document.getElementById("shrink").style.width = "200px";
		$('#navBarDrop').addClass('navbarShadow');
		$('#customNavLink').removeClass('customNav');
		$('#customNavLink').addClass('navbarLinks a');
	  } else {
		document.getElementById("shrink").style.width = "230px";
		$('#navBarDrop').removeClass('navbarShadow');
		$('#customNavLink').addClass('customNav');
		$('#customNavLink').removeClass('navbarLinks a');
	  }
	};

	// IMAGE SLIDER 
	




