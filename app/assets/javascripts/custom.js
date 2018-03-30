// jQuery(document).ready(function(){
// 	$("#myCarousel").on("slide.bs.carousel", function(e)
// 	{
// 		var $e = $(e.relatedTarget);
// 		var idx = $e.index();
// 		var itemsPerSlide = 3;
// 		var totalItems = $(".carousel-item").length;

// 		if (idx >= totalItems - (itemsPerSlide - 1)) 
// 		{
// 			var it = itemsPerSlide - (totalItems - idx);
			
// 			for (var i = 0; i < it; i++) 
// 			{
// 				// append slides to end
// 				if (e.direction == "left") 
// 				{
		
// 					$(".carousel-item")
// 						.eq(i)
// 						.appendTo(".carousel-inner");
// 				} 
// 				else 
// 				{
// 					$(".carousel-item")
// 					.eq(0)
// 					.appendTo(".carousel-inner");
// 				}
// 			}
// 		}
// 	});

// });
	
$(document).ready(function() {
	 $('#Carousel').carousel({
        interval: 5000
    })
  //carousel options
	$('#quote-carousel').carousel({
		pause: true, interval: 10000,
	});

	$('.thumbnail').click(function(){
		$('.modal-body').empty();
		var title = $(this).parent('a').attr("title");
		$('.modal-title').html(title);
		$($(this).parents('div').html()).appendTo('.modal-body');
		$('#myModal').modal({show:true});
	});
});