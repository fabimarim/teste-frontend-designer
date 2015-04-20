    $(document).ready(function() {
     
    	$(".owl-carousel").owlCarousel({
			itemsCustom: [[0, 1], [820, 3], [1100, 4]],
			slideSpeed: 800,
			scrollPerPage: !0
		});

		var owl = $(".owl-carousel");

		$(".bt-next").click(function(){
			owl.trigger('owl.next');
			return false;
		});

		$(".bt-prev").click(function(){
			owl.trigger('owl.prev');
			return false;
		});
     
    });