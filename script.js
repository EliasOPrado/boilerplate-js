$(document).ready(function() {
    
    $("button").mouseenter(function() {// when mouse enter (not click).
		$(this).removeClass("makeRed").addClass("makeBorder");//this remove the red background color from "makeRed" tag and adds an already class from css called "makeBorder" instead on mouse hovering.
	});
	
	$("button").mouseleave(function() { /// when mouse leaves (not click).
		$(this).removeClass("makeBorder").addClass("makeRed");// this function is same as the above one, however, classes "makeRed" and "makeBorder" are swaped to give the effect.
	});

    $("button").click(function() {
		$("p").slideToggle(2000);
	});
	
	$("button").click(function(){
	   $("p").hide(2000).show(2000); 
	});
  
});