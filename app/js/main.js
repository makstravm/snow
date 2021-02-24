$(function () {
    $('.menu__btn, .menu__link').on('click', function () {
        $('.menu__list').toggleClass('menu--active');
    });

    $(".menu a, .logo").on("click", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({ scrollTop: top }, 1000);
    });

    $('.testimonials__slider').slick({
        arrows: false,
        dots: true
    });
});


function initMap() {
    const uluru = { lat: 47.81041678987403, lng: 13.048546926366598 };

    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 16,
        center: uluru,
        styles:
            [
                {
                    "featureType": "all",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "saturation": 36
                        },
                        {
                            "color": "#000000"
                        },
                        {
                            "lightness": 40
                        }
                    ]
                },
                {
                    "featureType": "all",
                    "elementType": "labels.text.stroke",
                    "stylers": [
                        {
                            "visibility": "on"
                        },
                        {
                            "color": "#000000"
                        },
                        {
                            "lightness": 16
                        }
                    ]
                },
                {
                    "featureType": "all",
                    "elementType": "labels.icon",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "administrative",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#000000"
                        },
                        {
                            "lightness": 20
                        }
                    ]
                },
                {
                    "featureType": "administrative",
                    "elementType": "geometry.stroke",
                    "stylers": [
                        {
                            "color": "#000000"
                        },
                        {
                            "lightness": 17
                        },
                        {
                            "weight": 1.2
                        }
                    ]
                },
                {
                    "featureType": "administrative",
                    "elementType": "labels",
                    "stylers": [
                        {
                            "hue": "#ff0000"
                        },
                        {
                            "saturation": "100"
                        },
                        {
                            "lightness": "100"
                        },
                        {
                            "gamma": "10.00"
                        },
                        {
                            "weight": "0.01"
                        }
                    ]
                },
                {
                    "featureType": "landscape",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#000000"
                        },
                        {
                            "lightness": 20
                        }
                    ]
                },
                {
                    "featureType": "landscape",
                    "elementType": "labels",
                    "stylers": [
                        {
                            "hue": "#ff0000"
                        },
                        {
                            "gamma": "10.00"
                        },
                        {
                            "lightness": "100"
                        },
                        {
                            "saturation": "100"
                        },
                        {
                            "weight": "0.01"
                        }
                    ]
                },
                {
                    "featureType": "poi",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#000000"
                        },
                        {
                            "lightness": 21
                        }
                    ]
                },
                {
                    "featureType": "poi",
                    "elementType": "labels",
                    "stylers": [
                        {
                            "hue": "#ff0000"
                        },
                        {
                            "saturation": "100"
                        },
                        {
                            "lightness": "100"
                        },
                        {
                            "gamma": "10.00"
                        },
                        {
                            "weight": "0.01"
                        }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#ff6900"
                        },
                        {
                            "lightness": 17
                        }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "geometry.stroke",
                    "stylers": [
                        {
                            "color": "#000000"
                        },
                        {
                            "lightness": 29
                        },
                        {
                            "weight": 0.2
                        }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "labels",
                    "stylers": [
                        {
                            "hue": "#ff0000"
                        },
                        {
                            "gamma": "10.00"
                        },
                        {
                            "lightness": "100"
                        },
                        {
                            "saturation": "100"
                        },
                        {
                            "weight": "0.01"
                        }
                    ]
                },
                {
                    "featureType": "road.arterial",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#000000"
                        },
                        {
                            "lightness": 18
                        }
                    ]
                },
                {
                    "featureType": "road.local",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#000000"
                        },
                        {
                            "lightness": 16
                        }
                    ]
                },
                {
                    "featureType": "transit",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#000000"
                        },
                        {
                            "lightness": 19
                        }
                    ]
                },
                {
                    "featureType": "transit",
                    "elementType": "labels",
                    "stylers": [
                        {
                            "gamma": "10.00"
                        },
                        {
                            "lightness": "100"
                        },
                        {
                            "saturation": "100"
                        },
                        {
                            "weight": "0.01"
                        },
                        {
                            "hue": "#ff0000"
                        }
                    ]
                },
                {
                    "featureType": "water",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#000000"
                        },
                        {
                            "lightness": 17
                        }
                    ]
                },
                {
                    "featureType": "water",
                    "elementType": "labels",
                    "stylers": [
                        {
                            "hue": "#ff0000"
                        },
                        {
                            "saturation": "100"
                        },
                        {
                            "lightness": "100"
                        },
                        {
                            "gamma": "10.00"
                        },
                        {
                            "weight": "0.01"
                        }
                    ]
                }
            ]

    });
    const image ="../images/marker.png";
    const marker = new google.maps.Marker({
        position: uluru,
        map: map,
        icon: image,
    });
}