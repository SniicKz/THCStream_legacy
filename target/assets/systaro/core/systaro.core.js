angular.module("systaro.core",[]);_.mixin({formatString:function(c,a){var b=[],b=_.isArray(a)||_.isObject(a)?a:_.takeRight(arguments,arguments.length-1);_.forEach(b,function(a,b){c=_.replace(c,"{"+b+"}",_.isUndefined(a)?"":_.toString(a))});return c}});angular.module("systaro.core").directive("uisOwlCarousel",uisOwlCarousel);
function uisOwlCarousel(c){return{restrict:"A",link:function(a,b,d){c(function(){$(b).addClass("owl-carousel owl-theme").owlCarousel({loop:!0,items:1,dots:!0,autoplay:!0,autoplaySpeed:1E3})},10)}}}uisOwlCarousel.$inject=["$timeout"];