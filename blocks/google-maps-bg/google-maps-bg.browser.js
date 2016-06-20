modules.define(
    'google-maps-bg',
    ['i-bem__dom', 'jquery'],
    function(provide, BEMDOM, $) {



//google.maps.event.addDomListener(window, 'load', showGoogleMaps);

provide(BEMDOM.decl(this.name, {
    onSetMod: {
        'js' : {
            'inited' : function() {
                var position = [55.930220, 37.518203];
                this.showGoogleMaps(this.domElem, position);
            }
        }
    },

    showGoogleMaps : function (domElem, position) {
        'use strict';

        var _map, marker;

        var latLng = new google.maps.LatLng(position[0], position[1]);

        var mapOptions = {
            zoom: 16, // initialize zoom level - the max value is 21
            streetViewControl: false, // hide the yellow Street View pegman
            scrollwheel: false,
            navigationControl: false,
            mapTypeControl: false,
            scaleControl: false,
            draggable: false,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            center: latLng
        };


        // Show the default red marker at the location
        marker = new google.maps.Marker({
            position: latLng,
            map: _map,
            draggable: false,
            animation: google.maps.Animation.DROP
        });

        _map = new google.maps.Map(domElem[0], mapOptions);
    }

}));
});
