angular.module("systaro.core").directive("uisOwlCarousel",uisOwlCarousel);function uisOwlCarousel(a){return{restrict:"A",link:function(c,b,d){a(function(){$(b).addClass("owl-carousel owl-theme").owlCarousel({loop:!0,items:1,dots:!0,autoplay:!0,autoplaySpeed:1E3})},10)}}}uisOwlCarousel.$inject=["$timeout"];