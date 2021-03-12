
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




const animItems = document.querySelectorAll(`._anim-items`);
if (animItems.length > 0) {
    window.addEventListener(`scroll`, animOnScroll);

    function animOnScroll() {
        for (let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffSet = offset(animItem).top;
            const animStart = 4;
            let animItemPoint = window.innerHeight - animItemHeight / animStart;
            if (animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }
            if ((pageYOffset > animItemOffSet - animItemPoint) && pageYOffset < (animItemOffSet + animItemHeight)) {
                animItem.classList.add(`_active`);
                
            }
        }
    }
    function offset(el) {
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
    }
    animOnScroll();
}

$(window).scroll(function () {
    var scroll = $(window).scrollTop();

    if (scroll >= 100) {
        $(".header__top").addClass("dark-header");
    } else {
        $(".header__top").removeClass("dark-header");
    }
});

var showCount = true;
    var countBox = ".school__box";
    $(window).on("scroll load resize", function(){
        if(!showCount) return false;
        var w_top = $(window).scrollTop();
        var e_top = $(countBox).offset().top;
        var w_height = $(window).height();
        var d_height = $(document).height();

        var e_height = $(countBox).outerHeight();

        if(w_top + 500 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height){
            $(".school__number").spincrement({
                thousandSeparator: "",
                duration: 1200
            });
            showCount = false;
        }
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
    const image = "../images/marker.png";
    const marker = new google.maps.Marker({
        position: uluru,
        map: map,
        icon: image,
    });
}
