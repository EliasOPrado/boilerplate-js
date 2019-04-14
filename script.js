$(document).ready(function() {
    
    $("button").mouseenter(function() {// when mouse enter (not click).
		$(this).removeClass("makeRed").addClass("makeBorder");//this remove the red background color from "makeRed" tag and adds an already class from css called "makeBorder" instead on mouse hovering.
	});
	
	$("button").mouseleave(function() { /// when mouse leaves (not click).
		$(this).removeClass("makeBorder").addClass("makeRed");// this function is same as the above one, however, classes "makeRed" and "makeBorder" are swaped to give the effect.
	});

	
	$("#button1").click(function(){
	   $("#para1").fadeIn(2000).fadeOut(2000);
	});
	
	$("#button2").click(function(){
	   $("#para2").fadeIn(2000).fadeOut(2000);
	});
  
});