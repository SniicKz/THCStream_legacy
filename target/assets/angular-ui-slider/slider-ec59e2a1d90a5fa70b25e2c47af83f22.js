angular.module("ui.slider",[]).value("uiSliderConfig",{}).directive("uiSlider",["uiSliderConfig","$timeout",function(m,t){m=m||{};return{require:"ngModel",compile:function(){return{pre:function(h,g,f,a){function e(a,b){return b?parseFloat(a):parseInt(a,10)}function l(){g.hasClass("ui-slider")&&g.slider("destroy")}var u=angular.copy(h.$eval(f.uiSlider)),b=angular.extend(u||{},m),p=null,q=null,s=["min","max","step","lowerBound","upperBound"],r=angular.isUndefined(f.useDecimals)?!1:!0,k=function(){angular.isArray(a.$viewValue)&&
!0!==b.range&&(console.warn("Change your range option of ui-slider. When assigning ngModel an array of values then the range option should be set to true."),b.range=!0);angular.forEach(s,function(a){angular.isDefined(f[a])&&(b[a]=e(f[a],r))});g.slider(b);k=angular.noop};angular.forEach(s,function(n){f.$observe(n,function(c){c&&(k(),b[n]=e(c,r),g.slider("option",n,e(c,r)),a.$render())})});f.$observe("disabled",function(a){k();g.slider("option","disabled",!!a)});h.$watch(f.uiSlider,function(a){k();
void 0!==a&&g.slider("option",a)},!0);t(k,0,!0);g.bind("slide",function(f,c){var e;if(c.values){var d=c.values.slice();b.lowerBound&&d[0]<b.lowerBound&&(d[0]=Math.max(d[0],b.lowerBound));b.upperBound&&d[1]>b.upperBound&&(d[1]=Math.min(d[1],b.upperBound));if(d[0]!==c.values[0]||d[1]!==c.values[1])e=!0,c.values=d}else d=c.value,b.lowerBound&&d<b.lowerBound&&(d=Math.max(d,b.lowerBound)),b.upperBound&&d>b.upperBound&&(d=Math.min(d,b.upperBound)),d!==c.value&&(e=!0,c.value=d);a.$setViewValue(c.values||
c.value);h.$apply();if(e)return setTimeout(function(){g.slider("value",c.values||c.value)},0),!1});a.$render=function(){k();var e=!0===b.range?"values":"value";!0===b.range||!isNaN(a.$viewValue)||a.$viewValue instanceof Array?b.range&&!angular.isDefined(a.$viewValue)&&(a.$viewValue=[0,0]):a.$viewValue=0;if(!0===b.range){if(a.$viewValue&&angular.isString(a.$viewValue)&&1===(a.$viewValue.match(/,/g)||[]).length){var c=a.$viewValue.split(",");a.$viewValue=[Number(c[0]),Number(c[1])]}angular.isDefined(b.min)&&
b.min>a.$viewValue[0]&&(a.$viewValue[0]=b.min);angular.isDefined(b.max)&&b.max<a.$viewValue[1]&&(a.$viewValue[1]=b.max);a.$viewValue[0]>a.$viewValue[1]&&(p>=a.$viewValue[1]&&(a.$viewValue[1]=p),q<=a.$viewValue[0]&&(a.$viewValue[0]=q));p=a.$viewValue[0];q=a.$viewValue[1]}g.slider(e,a.$viewValue)};h.$watch(f.ngModel,function(){!0===b.range&&a.$render()},!0);h.$on("$destroy",l);g.one("$destroy",l)},post:function(h,g,f,a){var e=angular.extend({},h.$eval(f.uiSlider));angular.forEach(["min","max","step",
"tick"],function(a){angular.isDefined(f[a])&&(e[a]=f[a])});if(angular.isDefined(e.tick)&&angular.isDefined(e.step))for(a=h=parseInt((parseInt(e.max)-parseInt(e.min))/parseInt(e.step));0<=a;a--){var l=a/h*100+"%";$("<div/>").addClass("ui-slider-tick").appendTo(g).css({left:l})}}}}}}]);