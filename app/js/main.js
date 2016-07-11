$(function() {

	$(".mobile-menu").click(function() {
		$(this).toggleClass("active-menu");
		$(".main-menu").slideToggle();
		return false;
	});
	

	$(".main-select").select2({
		minimumResultsForSearch: Infinity,
 		placeholder: 'Select an option',
 		width: "100%"
	});


	$(".filt-title").click(function() {
		$(this).toggleClass("filt-title-open");
	});


	$('[data-toggle="tooltip"]').tooltip();

	//switch catalog
	$(".catalog-cards-view").click(function() {
		
		$(".vip-catalog, .default-catalog").removeClass("list-view");
		$(".vip-catalog, .default-catalog").addClass("cards-view");
		$(".item-catalog").each(function() {
			var th = $(this);
			th.addClass("col-lg-4");
		});
	
	});

	$(".catalog-list-view").click(function() {

		$(".vip-catalog, .default-catalog").removeClass("cards-view");
		$(".vip-catalog, .default-catalog").addClass("list-view");
		$(".item-catalog").each(function() {
			var th = $(this);
			th.removeClass("col-lg-4");
		});
	
	});



	$(window).resize(function() {

		if ($(window).width() < 768) {

			$(".catalog-list-view").click();
		
			$(".vip-catalog, .default-catalog").removeClass("list-view");
			$(".vip-catalog, .default-catalog").addClass("cards-view");
			$(".item-catalog").each(function() {
				var th = $(this);
				th.addClass("col-lg-4");
			});
		};
	});

	function goSliderPower () {
		var sliderPower = document.getElementById('slider-power');

		noUiSlider.create(sliderPower, {
			range: { // Slider can select '0' to '100'
				'min': 0,
				'max': 300
			},
			start: [ 0, 300 ],
			step: 50,
			margin: 50,
			connect: true,
			orientation: 'horizontal',
			pips: {
				mode: 'steps',
				density: 2
			}
		});

		var skipValues = [
			document.getElementById('start-power'),
			document.getElementById('finish-power')
		];

		sliderPower.noUiSlider.on('update', function( values, handle ) {
			skipValues[handle].value = values[handle];
		});

		document.getElementById('start-power').addEventListener('change', function() {
			sliderPower.noUiSlider.set([this.value, null]);
		});
		document.getElementById('finish-power').addEventListener('change', function() {
			sliderPower.noUiSlider.set([null, this.value]);
		});	
	};

	goSliderPower();

	function goSliderVolEng () {
		var slideVolEng = document.getElementById('slider-vol-eng');

		noUiSlider.create(slideVolEng, {
			range: { // Slider can select '0' to '100'
				'min': 0,
				'max': 6
			},
			start: [ 0, 6 ],
			step: 1,
			margin: 0.5,
			connect: true,
			orientation: 'horizontal',
			pips: {
				mode: 'steps',
				density: 2
			}
		});

		var skipValues = [
			document.getElementById('start-vol-eng'),
			document.getElementById('finish-vol-eng')
		];

		slideVolEng.noUiSlider.on('update', function( values, handle ) {
			skipValues[handle].value = values[handle];
		});

		document.getElementById('start-vol-eng').addEventListener('change', function() {
			slideVolEng.noUiSlider.set([this.value, null]);
		});
		document.getElementById('finish-vol-eng').addEventListener('change', function() {
			slideVolEng.noUiSlider.set([null, this.value]);
		});	
	};

	goSliderVolEng();



	

});
