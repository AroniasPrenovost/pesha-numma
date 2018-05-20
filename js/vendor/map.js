// google maps api 
/*
$(document).ready(function() {


var map = new google.maps.Map(document.getElementById('map_overlay'),  {




styles: [
{
"featureType": "landscape.natural",
"elementType": "geometry.fill",
"stylers": [
{
"visibility": "on"
},
{
"color": "#e0efef"
}
]
},
{
"featureType": "poi",
"elementType": "geometry.fill",
"stylers": [
{
"visibility": "on"
},
{
"hue": "#1900ff"
},
{
"color": "#c0e8e8"
}
]
},
{
"featureType": "road",
"elementType": "geometry",
"stylers": [
{
"lightness": 100
},
{
"visibility": "simplified"
}
]
},
{
"featureType": "road",
"elementType": "labels",
"stylers": [
{
"visibility": "off"
}
]
},
{
"featureType": "transit.line",
"elementType": "geometry",
"stylers": [
{
"visibility": "on"
},
{
"lightness": 700
}
]
},
{
"featureType": "water",
"elementType": "all",
"stylers": [
{
"color": "#7dcdcd"
}
]
}
],

scrollwheel: false,
navigationControl: true,
mapTypeControl: true,
scaleControl: true,
zoomControl: true,
streetViewControl: true,
fullScreenControl: true,
disableDoubleClickZoom: true,
draggable: false,
mapTypeId: google.maps.MapTypeId.ROADMAP, center: new google.maps.LatLng(38.9829612,-119.172672), zoom:16 });
});

*/




function initMap() {
    var myLatLng = {lat: 38.9829612, lng: -119.172672};

    var map = new google.maps.Map(document.getElementById('map'), {


        styles: [
    {
        "featureType": "landscape",
        "stylers": [
            {
                "hue": "#FFA800"
            },
            {
                "saturation": 0
            },
            {
                "lightness": 0
            },
            {
                "gamma": 1
            }
        ]
    },
    {
        "featureType": "road.highway",
        "stylers": [
            {
                "hue": "#53FF00"
            },
            {
                "saturation": -73
            },
            {
                "lightness": 40
            },
            {
                "gamma": 1
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "stylers": [
            {
                "hue": "#FBFF00"
            },
            {
                "saturation": 0
            },
            {
                "lightness": 0
            },
            {
                "gamma": 1
            }
        ]
    },
    {
        "featureType": "road.local",
        "stylers": [
            {
                "hue": "#00FFFD"
            },
            {
                "saturation": 0
            },
            {
                "lightness": 30
            },
            {
                "gamma": 1
            }
        ]
    },
    {
        "featureType": "water",
        "stylers": [
            {
                "hue": "#00BFFF"
            },
            {
                "saturation": 6
            },
            {
                "lightness": 8
            },
            {
                "gamma": 1
            }
        ]
    },
    {
        "featureType": "poi",
        "stylers": [
            {
                "hue": "#679714"
            },
            {
                "saturation": 33.4
            },
            {
                "lightness": -25.4
            },
            {
                "gamma": 1
            }
        ]
    }
],
        zoom: 16,
        center: myLatLng,
        scrollwheel: false,
        navigationControl: false,
        mapTypeControl: false,
        scaleControl: false,
        zoomControl: false,
        streetViewControl: false,
        fullScreenControl: false,
        disableDoubleClickZoom: true,
        draggable: true
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Pesha\' Numma Store Location'
    });
    google.maps.event.addListener(marker, 'click', function() {
    window.open('https://www.google.com/maps/place/605+W+Bridge+St,+Yerington,+NV+89447/@38.9829612,-119.172672,17z/data=!3m1!4b1!4m5!3m4!1s0x809838e265adb767:0x81b6fd66a4efe6a0!8m2!3d38.9829612!4d-119.1704833', '_blank');
});

    map.addListener('center_changed', function() {
// roughly ~2 seconds after drag, it returns map to original orientation 
window.setTimeout(function() {
    map.panTo(marker.getPosition());
}, 2500);
});
    
    /*
    marker.addListener('click', function() {
        map.setZoom(18);
        map.setCenter(marker.getPosition());
    });
    */
}


