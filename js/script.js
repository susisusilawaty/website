 $(".dropdown").on("hide.bs.dropdown", function(){
    $(".btn").html('Dropdown <span class="caret"></span>');
  });
  $(".dropdown").on("show.bs.dropdown", function(){
    $(".btn").html('Dropdown <span class="caret caret-up"></span>');
  });
});

 
$('.page-scroll').on ('click', function(0) {
	
	var tujuan =$(this).attr('href');
	
	var elementujuan = $(tujuan);
	
	$('body').animate ({
		scrollTop : elementujuan.offset().top -50
	} ,1250, 'linear');
	// body...
}  );