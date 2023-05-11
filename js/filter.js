$(function() {
		var selectedClass = "";
		$("p").click(function(){
		$("p").removeClass("selected");
        $(this).addClass("selected");
        selectedClass = $(this).attr("data-rel"); 
    $("#opdrachten").fadeTo(100, 0.1);
		$("#opdrachten div").not("."+selectedClass).fadeOut().removeClass('scale-anm');
    setTimeout(function() {
      $("."+selectedClass).fadeIn();
      $("#opdrachten").fadeTo(500, 1);
    }, 500);

	});
});
