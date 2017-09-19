$(document).ready(function() {

  function initialize() {

  	var gmarkers = [];
  	var map = null;
  	var infowindow = null;

    var styles = [
      {
        featureType: "administrative",
        elementType: "all",
        stylers: [
          { saturation: -99 }
        ]
      },{
        featureType: "landscape",
        elementType: "all",
        stylers: [
          { saturation: -99 }
        ]
      },{
        featureType: "poi",
        elementType: "all",
        stylers: [
          { saturation: -99 }
        ]
      },{
        featureType: "road",
        elementType: "all",
        stylers: [
          { saturation: -99 }
        ]
      },{
        featureType: "transit",
        elementType: "all",
        stylers: [
          { saturation: -99 }
        ]
      },{
        featureType: "water",
        elementType: "all",
        stylers: [
          { saturation: -99 }
        ]
      }
    ];

      var mapOptions = {
        center: new google.maps.LatLng(28.675567,77.503120),
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        mapTypeControl: false,
        zoomControl: true,
        styles: styles
      };

      map = new google.maps.Map(document.getElementById("mack-map"), mapOptions);

      google.maps.event.addListener(map, 'click', function() {
        infowindow.close();
      });

      var locations = [
        ['Conatus (CS/IT Block)', 28.675567,77.503120]
      
        
       ];

      /*infowindow = new google.maps.InfoWindow({
        size: new google.maps.Size(150,50)
      });*/

      function setMarkers(locations) {
        for (var i = 0; i < locations.length; i++) {
          var location = locations[i];
          var myLatLng = new google.maps.LatLng(location[1], location[2]);
          var marker = new google.maps.Marker({
              position: myLatLng,
              animation: google.maps.Animation.DROP,
              map: map,
              title: location[0]
          });

					// Standard markers - if not using infobox
          google.maps.event.addListener(marker, "click", function () {
	        map.setCenter(marker.getPosition());
	        infowindow.setContent(this.html);
	        infowindow.open(map, this);
          });
          gmarkers.push(marker);
        }
      }

      // Add the markers
      setMarkers(locations);

  }

  // add window listener for GMaps
  google.maps.event.addDomListener(window, 'load', initialize);

});