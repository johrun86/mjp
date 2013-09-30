/*
var div = document.createElement('div');
document.getElementById('wrapper').appendChild(div);
div.setAttribute('class', 'popup');
var popup = document.querySelector('.popup');
console.log(popup);
popup.setAttribute("style", "background:#fff;width:50%;height:50%;boxShadow:3px 3px 3px 3px rgba(0,0,0,0.5)");

var headline = document.createElement('h1');
headline.innerHTML = 'Välkommen';
headline.setAttribute('style', 'text-align:center;font-size:48px;color:#c8c8c8');
div.appendChild(headline);

*/
$(function() {
	// Slider
	$('#slider li:first').addClass('current').show();
	window.setInterval(function() {
			$('.current').removeClass('current').fadeOut().next().closest('li').addClass('current').fadeIn();
		if($('#slider li.current').length < 1){
			$('#slider li:first').addClass('current').show();	
		}
	}, 5000);
	
	//Grid and List
	//Create list-view
	$('.table-events').append('<ul class="grid-events"></ul>')
	$('.list-events tbody').children('tr').each(function() {
			$('.grid-events').append('<li>' + $(this).text() + '</li>');
	});
	$('.grid-events').hide();
	$('#grid').on('click', function() {
		 $('.list-events').fadeOut();
		 $('.grid-events').fadeIn();			
	});
	
	$('#list').on('click', function() {
		 $('.list-events').fadeIn();
		 $('.grid-events').fadeOut();
	});
	
});

var map;
function initialize() {
  var mapOptions = {
    zoom: 6,
    center: new google.maps.LatLng(59.314027, 18.103029),
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);
}

google.maps.event.addDomListener(window, 'load', initialize);