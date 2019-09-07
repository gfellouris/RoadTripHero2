google.load("visualization", "1", {
  packages: ["corechart", "table", "geomap"]
});
var tableid = 1499916;
var map = null;
var polyline = new google.maps.Polyline({
  path: [],
  strokeColor: "#FF0000",
  strokeWeight: 3
});
var bounds = new google.maps.LatLngBounds();
var directions = null;
var distance = null; // km
var service = null;
var gmarkers = [];
var boxes = null;
var zipcodes = [];
var infowindow = new google.maps.InfoWindow();
var markerType = "amber";

// Marker icons used for path
// RAG Car images: http://gmap.pw/api_v3/makerchange/googleimg/maps-gc-pal4/
var icons = {
  red: {
    icon: "http://maps.google.com/mapfiles/kml/pal4/icon7.png"
  },
  amber: {
    icon: "http://maps.google.com/mapfiles/kml/pal4/icon23.png"
  },
  green: {
    icon: "http://maps.google.com/mapfiles/kml/pal4/icon54.png"
  },
  parking: {
    icon: "http://maps.google.com/mapfiles/kml/pal3/icon59.png"
  },
  library: {
    icon: "http://maps.google.com/mapfiles/kml/pal3/icon53.png"
  },
  info: {
    icon: "http://maps.google.com/mapfiles/kml/pal3/icon33.png"
  }
};

function initialize() {
  // Default the map view to the continental U.S.
  var mapOptions = {
    center: new google.maps.LatLng(40, -80.5),
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    zoom: 8
  };

  map = new google.maps.Map(document.getElementById("map"), mapOptions);
  service = new google.maps.places.PlacesService(map);

  directionService = new google.maps.DirectionsService();
  directionsRenderer = new google.maps.DirectionsRenderer({ map: map });

  // If there are any parameters at eh end of the URL, they will be in  location.search
  // looking something like  "?marker=3"

  // skip the first character, we are not interested in the "?"
  var query = location.search.substring(1);

  // split the rest at each "&" character to give a list of  "argname=value"  pairs
  var pairs = query.split("&");
  for (var i = 0; i < pairs.length; i++) {
    // break each pair at the first "=" to obtain the argname and value
    var pos = pairs[i].indexOf("=");
    var argname = pairs[i].substring(0, pos).toLowerCase();
    var value = pairs[i].substring(pos + 1).toLowerCase();

    // process each possible argname  -  use unescape() if theres any chance of spaces
    if (argname == "to") {
      document.getElementById("to").value = unescape(value);
    }
    if (argname == "from") {
      document.getElementById("from").value = unescape(value);
    }
    if (argname == "dist") {
      document.getElementById("distance").value = parseFloat(value);
    }
    if (argname == "type") {
      document.getElementById("type").value = unescape(value);
    }
    if (argname == "keyword") {
      document.getElementById("keyword").value = unescape(value);
    }
    if (argname == "name") {
      document.getElementById("name").value = unescape(value);
    }
    if (argname == "submit") {
      route();
    }
  }
}

function route() {
  var request = {
    origin: document.getElementById("from").value,
    destination: document.getElementById("to").value,
    travelMode: google.maps.DirectionsTravelMode.DRIVING
  };
  // Make the directions request
  directionService.route(request, function(response, status) {
    if (status == google.maps.DirectionsStatus.OK) {
      directionsRenderer.setDirections(response);

      zipcodes = [];
      var path = response.routes[0].overview_path;
      var legs = response.routes[0].legs;

      document.getElementById("zipcodes").innerHTML =
        "<b>zipcodes along route:</b><br>";
      for (var i = 0; i < polyline.getPath().getLength(); i++) {
        //  queryForZip(polyline.getPath().getAt(i));
      }

      // build lat and lng path to display markers
      var features = [];

      for (var i = 0; i < path.length; i = i + 50) {
        var latVal = path[i].lat();
        var lngVal = path[i].lng();

        let queryString = "/api/safetyscore/" + latVal + "/" + lngVal;
        $.get(queryString, function(data, status) {
          console.log("safetyScore=" + data.safetyScore);
          if (data.safetyScore < 50) {
            markerType = "red";
          } else if (data.safetyScore > 50 && data.safetyScore < 80) {
            markerType = "amber";
          } else {
            markerType = "green";
          }
          console.log("markerType=" + markerType);
        }).then(
          features.push({
            position: { lat: path[i].lat(), long: path[i].lng() },
            type: markerType
          })
        );
      }
      //   console.log(features[0].position.lat);
      //   console.log("features length=" + features.length);
      // Create markers.
      for (var i = 0; i < features.length; i++) {
        var marker = new google.maps.Marker({
          position: new google.maps.LatLng(
            features[i].position.lat,
            features[i].position.long
          ),
          icon: icons[features[i].type].icon,
          map: map
        });
      }
    } else {
      alert("Directions query failed: " + status);
    }
  });
}
