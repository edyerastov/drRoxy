import 'owl.carousel';
import 'bootstrap/dist/js/bootstrap.min';
import AOS from 'aos/dist/aos'

$('.promo-slider').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    items: 1
});

//-----

var about = $('.about-slider');
about.owlCarousel({
    loop:true,
    margin:10,
    items: 1,
    nav: false
});

//-----

var servicesSlider = $('.services-slider');
// reference for thumbnail items
var thumbnailServicesSlider = $('.thumbnail-services-slider');
//transition time in ms
var duration = 500;

// carousel function for main slider
servicesSlider.owlCarousel({
    loop:true,
    nav:false,
    dots: false,
    items:1
}).on('changed.owl.carousel', function (e) {
    //On change of main item to trigger thumbnail item
    thumbnailServicesSlider.trigger('to.owl.carousel', [e.item.index, duration, true]);
});

// carousel function for thumbnail slider
thumbnailServicesSlider.owlCarousel({
    loop:false,
    nav:false,
    responsive: {
        0: {
            margin: -30,
            items: 1,
            dots: false
        },
        480: {
            margin: 30,
            items:5,
            dots: true
        }
    }

}).on('click', '.owl-item', function () {
    // On click of thumbnail items to trigger same main item
    servicesSlider.trigger('to.owl.carousel', [$(this).index(), duration, true]);

}).on('changed.owl.carousel', function (e) {
    // On change of thumbnail item to trigger main item
    servicesSlider.trigger('to.owl.carousel', [e.item.index, duration, true]);
});

//------

$('.team-slider').owlCarousel({
    loop: true,
    margin: 10,
    dots: true,
    items: 1
});

//------

AOS.init();


//------

google.maps.event.addDomListener(window, 'load', init);
function init() {

    var myOptions = {
        center: new google.maps.LatLng(48.4620111, 35.0428656), // Координаты, какое место отображать на карте
        zoom: 16, // Уровень риближения карты
        mapTypeId: google.maps.MapTypeId.ROADMAP // Тип карты

    };
    var map = new google.maps.Map(document.getElementById("map"), myOptions);
    var marker = new google.maps.Marker({
        position: myOptions.center,
        map: map,
        title: 'вуліця Троїцька, 3'
    });
}
