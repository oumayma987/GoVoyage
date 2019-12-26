	var locations = [
	
	["",40.9628758,-74.1329207],

	["",41.0017644,-74.367096],

	["",41.01202955,-74.44885254],

	["",41.152708,-74.7671031],

	["",41.00788443,-74.56008911],

	["",41.10833,-74.48043823],

	["",41.0928072,-74.14604187],

	["",41.15849525,-74.18518066],

	["",41.0995342,-74.37263489],

	["",41.2287065,-75.2383842],

	["",40.8958927,-75.3229541],

	["",40.9831018,-74.9589405],

	["",43.1338972,-88.2220372],

	["",41.1953739,-73.4378988],

	["",41.1264849,-73.7140195],

	["",33.6594835,-117.9988026],

	["",40.8256536,-73.2026138],

	
	];
	// Setup the different icons and shadows
	var iconURLPrefix = 'images';
	var icons = [
		'images/marker_pin_1.png', 
		'images/marker_pin_2.png', 
		'images/marker_pin_3.png', 
		'images/marker_pin_4.png', 
		'images/marker_pin_5.png', 
		'images/marker_pin_6.png',
		'images/marker_pin_7.png', 
		'images/marker_pin_8.png', 
		'images/marker_pin_1.png',
		'images/marker_pin_2.png', 
		'images/marker_pin_3.png', 
		'images/marker_pin_4.png', 
		'images/marker_pin_5.png', 
		'images/marker_pin_6.png', 
		'images/marker_pin_7.png', 
		'images/marker_pin_8.png', 
		'images/marker_pin_3.png', 

		];
	var icons_length = icons.length;
	var shadow = {
	  anchor: new google.maps.Point(37.8043637,-74.14487347),
	  url: iconURLPrefix + 'msmarker.shadow.png'
	};

	var myOptions = {
	  center: new google.maps.LatLng(41.1311292,-74.3673254),
	  styles : [{featureType:'all',stylers:[{saturation:-100},{gamma:3.0}]}],
	  mapTypeId: 'roadmap',
	  mapTypeControl: true,
	  streetViewControl: true,
	  panControl: true,
	  scrollwheel: false,
	  draggable: true,
	   zoom: 10

	}
	var map = new google.maps.Map(document.getElementById("travel-map-pins"), myOptions);
	// A new Info Window is created and set content
  	var infowindow = new google.maps.InfoWindow({
    locations: locations,

    // Assign a maximum value for the width of the infowindow allows
    // greater control over the various content elements
    maxWidth: 350
  	});
	var marker;
	var markers = new Array();
	var iconCounter = 0;

	// Add the markers and infowindows to the map
	for (var i = 0; i < locations.length; i++) {  
	  marker = new google.maps.Marker({
		position: new google.maps.LatLng(locations[i][1], locations[i][2]),
		map: map,
		icon : icons[iconCounter],
		shadow: shadow
	  });

	  markers.push(marker);
	  google.maps.event.addListener(marker, 'click', (function(marker, i) {
		return function() {
		  infowindow.setContent(locations[i][0]);
		  infowindow.open(map, marker);
		}
	  })(marker, i));
	  
	  iconCounter++;
	  // We only have a limited number of possible icon colors, so we may have to restart the counter
	  if(iconCounter >= icons_length){
		iconCounter = 0;
	  }
	}
	
	  // *
  // START INFOWINDOW CUSTOMIZE.
  // The google.maps.event.addListener() event expects
  // the creation of the infowindow HTML structure 'domready'
  // and before the opening of the infowindow, defined styles are applied.
  // *
  google.maps.event.addListener(infowindow, 'domready', function() {

    // Reference to the DIV that wraps the bottom of infowindow
    var iwOuter = $('.gm-style-iw').css('left:-70px', 'top:30px');

    /* Since this div is in a position prior to .gm-div style-iw.
     * We use jQuery and create a iwBackground variable,
     * and took advantage of the existing reference .gm-style-iw for the previous div with .prev().
    */
    var iwBackground = iwOuter.prev();

    // Removes background shadow DIV
    iwBackground.children(':nth-child(2)').css({'display' : 'none'});

    // Removes white background DIV
    iwBackground.children(':nth-child(4)').css({'display' : 'none'});

    // Moves the infowindow 115px to the right.
    iwOuter.parent().parent().css({left: '15px' , top: '0px'});

    // Moves the shadow of the arrow 76px to the left margin.
    iwBackground.children(':nth-child(1)').attr('style', function(i,s){ return s + 'left: 20px !important;'});

    // Moves the arrow 76px to the left margin.
    iwBackground.children(':nth-child(3)').attr('style', function(i,s){ return s + 'left: 145px !important;' });

    // Changes the desired tail shadow color.
    iwBackground.children(':nth-child(3)').find('div').children().css({ 'z-index' : '1'});

    // Reference to the div that groups the close button elements.
    var iwCloseBtn = iwOuter.next();

    // Apply the desired effect to the close button
    iwCloseBtn.css({opacity: '1', right: '50px', top: '36px'/*border: '7px solid #48b5e9', 'border-radius': '13px', 'box-shadow': '0 0 5px #3990B9'*/});

    // If the content of infowindow not exceed the set maximum height, then the gradient is removed.
    if($('.iw-content').height() < 140){
      $('.iw-bottom-gradient').css({display: 'none'});
    }

    // The API automatically applies 0.7 opacity to the button after the mouseout event. This function reverses this event to the desired value.
    iwCloseBtn.mouseout(function(){
      $(this).css({opacity: '1'});
    });
  });