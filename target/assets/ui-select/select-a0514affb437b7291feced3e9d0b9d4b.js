(function(){var c={TAB:9,ENTER:13,ESC:27,SPACE:32,LEFT:37,UP:38,RIGHT:39,DOWN:40,SHIFT:16,CTRL:17,ALT:18,PAGE_UP:33,PAGE_DOWN:34,HOME:36,END:35,BACKSPACE:8,DELETE:46,COMMAND:91,MAP:{91:"COMMAND",8:"BACKSPACE",9:"TAB",13:"ENTER",16:"SHIFT",17:"CTRL",18:"ALT",19:"PAUSEBREAK",20:"CAPSLOCK",27:"ESC",32:"SPACE",33:"PAGE_UP",34:"PAGE_DOWN",35:"END",36:"HOME",37:"LEFT",38:"UP",39:"RIGHT",40:"DOWN",43:"+",44:"PRINTSCREEN",45:"INSERT",46:"DELETE",48:"0",49:"1",50:"2",51:"3",52:"4",53:"5",54:"6",55:"7",56:"8",
57:"9",59:";",61:"=",65:"A",66:"B",67:"C",68:"D",69:"E",70:"F",71:"G",72:"H",73:"I",74:"J",75:"K",76:"L",77:"M",78:"N",79:"O",80:"P",81:"Q",82:"R",83:"S",84:"T",85:"U",86:"V",87:"W",88:"X",89:"Y",90:"Z",96:"0",97:"1",98:"2",99:"3",100:"4",101:"5",102:"6",103:"7",104:"8",105:"9",106:"*",107:"+",109:"-",110:".",111:"/",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NUMLOCK",145:"SCROLLLOCK",186:";",187:"=",188:",",189:"-",190:".",
191:"/",192:"`",219:"[",220:"\\",221:"]",222:"'"},isControl:function(h){switch(h.which){case c.COMMAND:case c.SHIFT:case c.CTRL:case c.ALT:return!0}return h.metaKey?!0:!1},isFunctionKey:function(h){h=h.which?h.which:h;return 112<=h&&123>=h},isVerticalMovement:function(h){return~[c.UP,c.DOWN].indexOf(h)},isHorizontalMovement:function(h){return~[c.LEFT,c.RIGHT,c.BACKSPACE,c.DELETE].indexOf(h)},toSeparator:function(h){var n={ENTER:"\n",TAB:"\t",SPACE:" "}[h];return n?n:c[h]?void 0:h}};void 0===angular.element.prototype.querySelectorAll&&
(angular.element.prototype.querySelectorAll=function(h){return angular.element(this[0].querySelectorAll(h))});void 0===angular.element.prototype.closest&&(angular.element.prototype.closest=function(h){for(var c=this[0],g=c.matches||c.webkitMatchesSelector||c.mozMatchesSelector||c.msMatchesSelector;c;){if(g.bind(c)(h))return c;c=c.parentElement}return!1});var B=0,y=angular.module("ui.select",[]).constant("uiSelectConfig",{theme:"bootstrap",searchEnabled:!0,sortable:!1,placeholder:"",refreshDelay:1E3,
closeOnSelect:!0,skipFocusser:!1,dropdownPosition:"auto",generateId:function(){return B++},appendToBody:!1}).service("uiSelectMinErr",function(){var c=angular.$$minErr("ui.select");return function(){var n=c.apply(this,arguments).message.replace(/\nhttp:\/\/errors.angularjs.org\/.*/,"");return Error(n)}}).directive("uisTranscludeAppend",function(){return{link:function(c,n,g,l,k){k(c,function(c){n.append(c)})}}}).filter("highlight",function(){return function(c,n){return n&&c?(""+c).replace(new RegExp((""+
n).replace(/([.?*+^$[\]\\(){}|-])/g,"\\$1"),"gi"),'<span class="ui-select-highlight">$&</span>'):c}}).factory("uisOffset",["$document","$window",function(c,n){return function(g){var l=g[0].getBoundingClientRect();return{width:l.width||g.prop("offsetWidth"),height:l.height||g.prop("offsetHeight"),top:l.top+(n.pageYOffset||c[0].documentElement.scrollTop),left:l.left+(n.pageXOffset||c[0].documentElement.scrollLeft)}}}]);y.directive("uiSelectChoices",["uiSelectConfig","uisRepeatParser","uiSelectMinErr",
"$compile","$window",function(c,n,g,l,k){return{restrict:"EA",require:"^uiSelect",replace:!0,transclude:!0,templateUrl:function(g){g.addClass("ui-select-choices");return(g.parent().attr("theme")||c.theme)+"/choices.tpl.html"},compile:function(r,m){if(!m.repeat)throw g("repeat","Expected 'repeat' expression.");return function(m,r,f,b,s){var e=f.groupBy;b.parseRepeatAttr(f.repeat,e,f.groupFilter);b.disableChoiceExpression=f.uiDisableChoice;b.onHighlightCallback=f.onHighlight;b.dropdownPosition=f.position?
f.position.toLowerCase():c.dropdownPosition;if(e){var d=r.querySelectorAll(".ui-select-choices-group");if(1!==d.length)throw g("rows","Expected 1 .ui-select-choices-group but got '{0}'.",d.length);d.attr("ng-repeat",n.getGroupNgRepeatExpression())}d=r.querySelectorAll(".ui-select-choices-row");if(1!==d.length)throw g("rows","Expected 1 .ui-select-choices-row but got '{0}'.",d.length);d.attr("ng-repeat",b.parserResult.repeatExpression(e)).attr("ng-if","$select.open");k.document.addEventListener&&d.attr("ng-mouseenter",
"$select.setActiveItem("+b.parserResult.itemName+")").attr("ng-click","$select.select("+b.parserResult.itemName+",$select.skipFocusser,$event)");e=r.querySelectorAll(".ui-select-choices-row-inner");if(1!==e.length)throw g("rows","Expected 1 .ui-select-choices-row-inner but got '{0}'.",e.length);e.attr("uis-transclude-append","");k.document.addEventListener||e.attr("ng-mouseenter","$select.setActiveItem("+b.parserResult.itemName+")").attr("ng-click","$select.select("+b.parserResult.itemName+",$select.skipFocusser,$event)");
l(r,s)(m);m.$watch("$select.search",function(d){d&&!b.open&&b.multiple&&b.activate(!1,!0);b.activeIndex=b.tagging.isActivated?-1:0;!f.minimumInputLength||b.search.length>=f.minimumInputLength?b.refresh(f.refresh):b.items=[]});f.$observe("refreshDelay",function(){var d=m.$eval(f.refreshDelay);b.refreshDelay=void 0!==d?d:c.refreshDelay})}}}}]);y.controller("uiSelectCtrl",["$scope","$element","$timeout","$filter","uisRepeatParser","uiSelectMinErr","uiSelectConfig","$parse","$injector","$window",function(h,
n,g,l,k,r,m,t,q,f){function b(a,b,d){if(a.findIndex)return a.findIndex(b,d);a=Object(a);for(var c=a.length>>>0,g,e=0;e<c;e++)if(g=a[e],b.call(d,g,e,a))return e;return-1}function s(){if(a.resetSearchInput||void 0===a.resetSearchInput&&m.resetSearchInput)a.search="",a.selected&&a.items.length&&!a.multiple&&(a.activeIndex=b(a.items,function(a){return angular.equals(this,a)},a.selected))}function e(a,b){var d,c,g=[];for(d=0;d<b.length;d++)for(c=0;c<a.length;c++)a[c].name==[b[d]]&&g.push(a[c]);return g}
function d(b){var d=!0;switch(b){case c.DOWN:!a.open&&a.multiple?a.activate(!1,!0):a.activeIndex<a.items.length-1&&a.activeIndex++;break;case c.UP:!a.open&&a.multiple?a.activate(!1,!0):(0<a.activeIndex||0===a.search.length&&a.tagging.isActivated&&-1<a.activeIndex)&&a.activeIndex--;break;case c.TAB:a.multiple&&!a.open||a.select(a.items[a.activeIndex],!0);break;case c.ENTER:a.open&&(a.tagging.isActivated||0<=a.activeIndex)?a.select(a.items[a.activeIndex],a.skipFocusser):a.activate(!1,!0);break;case c.ESC:a.close();
break;default:d=!1}return d}function w(){var b=n.querySelectorAll(".ui-select-choices-content"),d=b.querySelectorAll(".ui-select-choices-row");if(1>d.length)throw r("choices","Expected multiple .ui-select-choices-row but got '{0}'.",d.length);if(!(0>a.activeIndex)){var d=d[a.activeIndex],c=d.offsetTop+d.clientHeight-b[0].scrollTop,g=b[0].offsetHeight;c>g?b[0].scrollTop+=c-g:c<d.clientHeight&&(b[0].scrollTop=a.isGrouped&&0===a.activeIndex?0:b[0].scrollTop-(d.clientHeight-c))}}var a=this;a.placeholder=
m.placeholder;a.searchEnabled=m.searchEnabled;a.sortable=m.sortable;a.refreshDelay=m.refreshDelay;a.paste=m.paste;a.removeSelected=!1;a.closeOnSelect=!0;a.skipFocusser=!1;a.search="";a.activeIndex=0;a.items=[];a.open=!1;a.focus=!1;a.disabled=!1;a.selected=void 0;a.dropdownPosition="auto";a.focusser=void 0;a.resetSearchInput=!0;a.multiple=void 0;a.disableChoiceExpression=void 0;a.tagging={isActivated:!1,fct:void 0};a.taggingTokens={isActivated:!1,tokens:void 0};a.lockChoiceExpression=void 0;a.clickTriggeredSelect=
!1;a.$filter=l;var z;try{z=q.get("$animate")}catch(p){z=null}a.$animate=z;a.searchInput=n.querySelectorAll("input.ui-select-search");if(1!==a.searchInput.length)throw r("searchInput","Expected 1 input.ui-select-search but got '{0}'.",a.searchInput.length);a.isEmpty=function(){return angular.isUndefined(a.selected)||null===a.selected||""===a.selected||a.multiple&&0===a.selected.length};a.activate=function(b,d){if(!a.disabled&&!a.open){d||s();h.$broadcast("uis:activate");a.open=!0;a.activeIndex=a.activeIndex>=
a.items.length?0:a.activeIndex;-1===a.activeIndex&&!1!==a.taggingLabel&&(a.activeIndex=0);var c=n.querySelectorAll(".ui-select-choices-content");if(a.$animate&&a.$animate.on&&a.$animate.enabled(c[0]))a.$animate.on("enter",c[0],function(d,c){"close"===c&&g(function(){a.focusSearchInput(b)})});else g(function(){a.focusSearchInput(b);!a.tagging.isActivated&&1<a.items.length&&w()})}};a.focusSearchInput=function(b){a.search=b||a.search;a.searchInput[0].focus()};a.findGroupByName=function(b){return a.groups&&
a.groups.filter(function(a){return a.name===b})[0]};a.parseRepeatAttr=function(b,d,c){function g(b){var v=h.$eval(d);a.groups=[];angular.forEach(b,function(b){var d=angular.isFunction(v)?v(b):b[v],c=a.findGroupByName(d);c?c.items.push(b):a.groups.push({name:d,items:[b]})});c&&(b=h.$eval(c),angular.isFunction(b)?a.groups=b(a.groups):angular.isArray(b)&&(a.groups=e(a.groups,b)));a.items=[];a.groups.forEach(function(b){a.items=a.items.concat(b.items)})}function w(b){a.items=b}a.setItemsFn=d?g:w;a.parserResult=
k.parse(b);a.isGrouped=!!d;a.itemProperty=a.parserResult.itemName;var f=a.parserResult.source,p=function(){var b=f(h);h.$uisSource=Object.keys(b).map(function(d){var c={};c[a.parserResult.keyName]=d;c.value=b[d];return c})};a.parserResult.keyName&&(p(),a.parserResult.source=t("$uisSource"+a.parserResult.filters),h.$watch(f,function(a,b){a!==b&&p()},!0));a.refreshItems=function(b){b=b||a.parserResult.source(h);var d=a.selected;a.isEmpty()||angular.isArray(d)&&!d.length||!a.removeSelected?a.setItemsFn(b):
void 0!==b&&(b=b.filter(function(a){return d.every(function(b){return!angular.equals(a,b)})}),a.setItemsFn(b));"auto"!==a.dropdownPosition&&"up"!==a.dropdownPosition||h.calculateDropdownPos()};h.$watchCollection(a.parserResult.source,function(b){if(void 0===b||null===b)a.items=[];else if(angular.isArray(b))a.refreshItems(b),a.ngModel.$modelValue=null;else throw r("items","Expected an array but got '{0}'.",b);})};var A;a.refresh=function(b){void 0!==b&&(A&&g.cancel(A),A=g(function(){h.$eval(b)},a.refreshDelay))};
a.isActive=function(b){if(!a.open)return!1;var d=a.items.indexOf(b[a.itemProperty]),c=d==a.activeIndex;if(!c||0>d&&!1!==a.taggingLabel||0>d&&!1===a.taggingLabel)return!1;c&&!angular.isUndefined(a.onHighlightCallback)&&b.$eval(a.onHighlightCallback);return c};a.isDisabled=function(b){if(a.open){var d=a.items.indexOf(b[a.itemProperty]),c=!1;0<=d&&!angular.isUndefined(a.disableChoiceExpression)&&(d=a.items[d],c=!!b.$eval(a.disableChoiceExpression),d._uiSelectChoiceDisabled=c);return c}};a.select=function(b,
d,c){if(!(void 0!==b&&b._uiSelectChoiceDisabled||!(a.items||a.search||a.tagging.isActivated)||b&&b._uiSelectChoiceDisabled)){if(a.tagging.isActivated){if(!1===a.taggingLabel)if(0>a.activeIndex){if(b=void 0!==a.tagging.fct?a.tagging.fct(a.search):a.search,!b||angular.equals(a.items[0],b))return}else b=a.items[a.activeIndex];else if(0===a.activeIndex){if(void 0===b)return;if(void 0!==a.tagging.fct&&"string"===typeof b){if(b=a.tagging.fct(b),!b)return}else"string"===typeof b&&(b=b.replace(a.taggingLabel,
"").trim())}if(a.selected&&angular.isArray(a.selected)&&0<a.selected.filter(function(a){return angular.equals(a,b)}).length){a.close(d);return}}h.$broadcast("uis:select",b);var v={};v[a.parserResult.itemName]=b;g(function(){a.onSelectCallback(h,{$item:b,$model:a.parserResult.modelMapper(h,v)})});a.closeOnSelect&&a.close(d);c&&"click"===c.type&&(a.clickTriggeredSelect=!0)}};a.close=function(b){a.open&&(a.ngModel&&a.ngModel.$setTouched&&a.ngModel.$setTouched(),s(),a.open=!1,h.$broadcast("uis:close",
b))};a.setFocus=function(){a.focus||a.focusInput[0].focus()};a.clear=function(b){a.select(void 0);b.stopPropagation();g(function(){a.focusser[0].focus()},0,!1)};a.toggle=function(b){a.open?(a.close(),b.preventDefault(),b.stopPropagation()):a.activate()};a.isLocked=function(b,d){var c,g=a.selected[d];g&&!angular.isUndefined(a.lockChoiceExpression)&&(c=!!b.$eval(a.lockChoiceExpression),g._uiSelectChoiceLocked=c);return c};var x=null;a.sizeSearchInput=function(){var b=a.searchInput[0],d=a.searchInput.parent().parent()[0],
c=function(){return d.clientWidth*!!b.offsetParent},v=function(d){if(0===d)return!1;var c=d-b.offsetLeft-10;50>c&&(c=d);a.searchInput.css("width",c+"px");return!0};a.searchInput.css("width","10px");g(function(){null!==x||v(c())||(x=h.$watch(c,function(a){v(a)&&(x(),x=null)}))})};a.searchInput.on("keydown",function(b){var e=b.which;~[c.ENTER,c.ESC].indexOf(e)&&(b.preventDefault(),b.stopPropagation());h.$apply(function(){var w=!1;if(0<a.items.length||a.tagging.isActivated)if(d(e),a.taggingTokens.isActivated){for(var v=
0;v<a.taggingTokens.tokens.length;v++)a.taggingTokens.tokens[v]===c.MAP[b.keyCode]&&0<a.search.length&&(w=!0);w&&g(function(){a.searchInput.triggerHandler("tagged");var d=a.search.replace(c.MAP[b.keyCode],"").trim();a.tagging.fct&&(d=a.tagging.fct(d));d&&a.select(d,!0)})}});c.isVerticalMovement(e)&&0<a.items.length&&w();if(e===c.ENTER||e===c.ESC)b.preventDefault(),b.stopPropagation()});a.searchInput.on("paste",function(b){var d;d=window.clipboardData&&window.clipboardData.getData?window.clipboardData.getData("Text"):
(b.originalEvent||b).clipboardData.getData("text/plain");if((d=a.search+d)&&0<d.length)if(a.taggingTokens.isActivated){var g=c.toSeparator(a.taggingTokens.tokens[0]);(d=d.split(g||a.taggingTokens.tokens[0]))&&0<d.length&&(g=a.search,angular.forEach(d,function(b){(b=a.tagging.fct?a.tagging.fct(b):b)&&a.select(b,!0)}),a.search=g||"",b.preventDefault(),b.stopPropagation())}else a.paste&&(a.paste(d),a.search="",b.preventDefault(),b.stopPropagation())});a.searchInput.on("tagged",function(){g(function(){s()})});
h.$on("$destroy",function(){a.searchInput.off("keyup keydown tagged blur paste")});angular.element(f).bind("resize",function(){a.sizeSearchInput()})}]);y.directive("uiSelect",["$document","uiSelectConfig","uiSelectMinErr","uisOffset","$compile","$parse","$timeout",function(c,n,g,l,k,r,m){return{restrict:"EA",templateUrl:function(c,g){return(g.theme||n.theme)+(angular.isDefined(g.multiple)?"/select-multiple.tpl.html":"/select.tpl.html")},replace:!0,transclude:!0,require:["uiSelect","^ngModel"],scope:!0,
controller:"uiSelectCtrl",controllerAs:"$select",compile:function(k,q){var f=/{(.*)}\s*{(.*)}/.exec(q.ngClass);f&&(f="{"+f[1]+", "+f[2]+"}",q.ngClass=f,k.attr("ng-class",f));angular.isDefined(q.multiple)?k.append("<ui-select-multiple/>").removeAttr("multiple"):k.append("<ui-select-single/>");q.inputId&&(k.querySelectorAll("input.ui-select-search")[0].id=q.inputId);return function(b,f,e,d,w){function a(a){if(p.open){var d=!1,d=window.jQuery?window.jQuery.contains(f[0],a.target):f[0].contains(a.target);
if(!d&&!p.clickTriggeredSelect){var c;p.skipFocusser?c=!0:(d=["input","button","textarea","select"],(c=(c=angular.element(a.target).controller("uiSelect"))&&c!==p)||(c=~d.indexOf(a.target.tagName.toLowerCase())));p.close(c);b.$digest()}p.clickTriggeredSelect=!1}}function k(){null!==x&&(x.replaceWith(f),x=null,f[0].style.position="",f[0].style.left="",f[0].style.top="",f[0].style.width=t,p.setFocus())}var p=d[0];d=d[1];p.generatedId=n.generateId();p.baseTitle=e.title||"Select box";p.focusserTitle=
p.baseTitle+" focus";p.focusserId="focusser-"+p.generatedId;var q;q=angular.isDefined(e.closeOnSelect)?r(e.closeOnSelect)():n.closeOnSelect;p.closeOnSelect=q;b.$watch("skipFocusser",function(){var a=b.$eval(e.skipFocusser);p.skipFocusser=void 0!==a?a:n.skipFocusser});p.onSelectCallback=r(e.onSelect);p.onRemoveCallback=r(e.onRemove);p.limit=angular.isDefined(e.limit)?parseInt(e.limit,10):void 0;p.ngModel=d;p.choiceGrouped=function(a){return p.isGrouped&&a&&a.name};e.tabindex&&e.$observe("tabindex",
function(a){p.focusInput.attr("tabindex",a);f.removeAttr("tabindex")});b.$watch("searchEnabled",function(){var a=b.$eval(e.searchEnabled);p.searchEnabled=void 0!==a?a:n.searchEnabled});b.$watch("sortable",function(){var a=b.$eval(e.sortable);p.sortable=void 0!==a?a:n.sortable});e.$observe("disabled",function(){p.disabled=void 0!==e.disabled?e.disabled:!1});e.$observe("resetSearchInput",function(){var a=b.$eval(e.resetSearchInput);p.resetSearchInput=void 0!==a?a:!0});e.$observe("paste",function(){p.paste=
b.$eval(e.paste)});e.$observe("tagging",function(){if(void 0!==e.tagging){var a=b.$eval(e.tagging);p.tagging={isActivated:!0,fct:!0!==a?a:void 0}}else p.tagging={isActivated:!1,fct:void 0}});e.$observe("taggingLabel",function(){void 0!==e.tagging&&(p.taggingLabel="false"===e.taggingLabel?!1:void 0!==e.taggingLabel?e.taggingLabel:"(new)")});e.$observe("taggingTokens",function(){if(void 0!==e.tagging){var a=void 0!==e.taggingTokens?e.taggingTokens.split("|"):[",","ENTER"];p.taggingTokens={isActivated:!0,
tokens:a}}});angular.isDefined(e.autofocus)&&m(function(){p.setFocus()});angular.isDefined(e.focusOn)&&b.$on(e.focusOn,function(){m(function(){p.setFocus()})});c.on("click",a);b.$on("$destroy",function(){c.off("click",a)});w(b,function(a){a=angular.element("<div>").append(a);var b=a.querySelectorAll(".ui-select-match");b.removeAttr("ui-select-match");b.removeAttr("data-ui-select-match");if(1!==b.length)throw g("transcluded","Expected 1 .ui-select-match but got '{0}'.",b.length);f.querySelectorAll(".ui-select-match").replaceWith(b);
a=a.querySelectorAll(".ui-select-choices");a.removeAttr("ui-select-choices");a.removeAttr("data-ui-select-choices");if(1!==a.length)throw g("transcluded","Expected 1 .ui-select-choices but got '{0}'.",a.length);f.querySelectorAll(".ui-select-choices").replaceWith(a)});w=b.$eval(e.appendToBody);if(void 0!==w?w:n.appendToBody)b.$watch("$select.open",function(a){a?(a=l(f),x=angular.element('<div class="ui-select-placeholder"></div>'),x[0].style.width=a.width+"px",x[0].style.height=a.height+"px",f.after(x),
t=f[0].style.width,c.find("body").append(f),f[0].style.position="absolute",f[0].style.left=a.left+"px",f[0].style.top=a.top+"px",f[0].style.width=a.width+"px"):k()}),b.$on("$destroy",function(){k()});var x=null,t="",u=null;b.$watch("$select.open",function(){"auto"!==p.dropdownPosition&&"up"!==p.dropdownPosition||b.calculateDropdownPos()});var y=function(a,b){a||l(f);b=b||l(u);u[0].style.position="absolute";u[0].style.top=-1*b.height+"px";f.addClass("direction-up")};b.calculateDropdownPos=function(){p.open?
(u=angular.element(f).querySelectorAll(".ui-select-dropdown"),0!==u.length&&(u[0].style.opacity=0,m(function(){if("up"===p.dropdownPosition)y();else{f.removeClass("direction-up");var a=l(f),b=l(u);a.top+a.height+b.height>(c[0].documentElement.scrollTop||c[0].body.scrollTop)+c[0].documentElement.clientHeight?y(a,b):(f.removeClass("direction-up"),a||l(f),b||l(u),u[0].style.position="",u[0].style.top="")}u[0].style.opacity=1}))):null!==u&&0!==u.length&&(u[0].style.position="",u[0].style.top="",f.removeClass("direction-up"))}}}}}]);
y.directive("uiSelectMatch",["uiSelectConfig",function(c){return{restrict:"EA",require:"^uiSelect",replace:!0,transclude:!0,templateUrl:function(n){n.addClass("ui-select-match");var g=n.parent().attr("theme")||c.theme;n=n.parent().attr("multiple");return g+(n?"/match-multiple.tpl.html":"/match.tpl.html")},link:function(n,g,l,k){function r(c){k.allowClear=angular.isDefined(c)?""===c?!0:"true"===c.toLowerCase():!1}k.lockChoiceExpression=l.uiLockChoice;l.$observe("placeholder",function(g){k.placeholder=
void 0!==g?g:c.placeholder});l.$observe("allowClear",r);r(l.allowClear);k.multiple&&k.sizeSearchInput()}}}]);y.directive("uiSelectMultiple",["uiSelectMinErr","$timeout",function(h,n){return{restrict:"EA",require:["^uiSelect","^ngModel"],controller:["$scope","$timeout",function(c,l){var k=this,h=c.$select,m;angular.isUndefined(h.selected)&&(h.selected=[]);c.$evalAsync(function(){m=c.ngModel});k.activeMatchIndex=-1;k.updateModel=function(){m.$setViewValue(Date.now());k.refreshComponent()};k.refreshComponent=
function(){h.refreshItems();h.sizeSearchInput()};k.removeChoice=function(m){var n=h.selected[m];if(!n._uiSelectChoiceLocked){var f={};f[h.parserResult.itemName]=n;h.selected.splice(m,1);k.activeMatchIndex=-1;h.sizeSearchInput();l(function(){h.onRemoveCallback(c,{$item:n,$model:h.parserResult.modelMapper(c,f)})});k.updateModel()}};k.getPlaceholder=function(){if(!h.selected||!h.selected.length)return h.placeholder}}],controllerAs:"$selectMultiple",link:function(g,l,k,r){function m(b){return angular.isNumber(b.selectionStart)?
b.selectionStart:b.value.length}function t(d){var g=m(b.searchInput[0]),a=b.selected.length-1,f=e.activeMatchIndex,k=e.activeMatchIndex+1,h=e.activeMatchIndex-1,l=f;if(0<g||b.search.length&&d==c.RIGHT)return!1;b.close();l=function(){switch(d){case c.LEFT:return~e.activeMatchIndex?h:a;case c.RIGHT:if(~e.activeMatchIndex&&f!==a)return k;b.activate();return!1;case c.BACKSPACE:return~e.activeMatchIndex?(e.removeChoice(f),h):a;case c.DELETE:return~e.activeMatchIndex?(e.removeChoice(e.activeMatchIndex),
f):!1}}();e.activeMatchIndex=b.selected.length&&!1!==l?Math.min(a,Math.max(0,l)):-1;return!0}function q(d){return void 0===d||void 0===b.search?!1:0<d.filter(function(d){return void 0===b.search.toUpperCase()||void 0===d?!1:d.toUpperCase()===b.search.toUpperCase()}).length}function f(d,c){var a=-1;if(angular.isArray(d))for(var g=angular.copy(d),f=0;f<g.length;f++)if(void 0===b.tagging.fct)g[f]+" "+b.taggingLabel===c&&(a=f);else{var e=g[f];angular.isObject(e)&&(e.isTag=!0);angular.equals(e,c)&&(a=
f)}return a}var b=r[0],s=g.ngModel=r[1],e=g.$selectMultiple;b.multiple=!0;b.removeSelected=!0;b.focusInput=b.searchInput;s.$isEmpty=function(b){return!b||0===b.length};s.$parsers.unshift(function(){for(var d={},c=[],a=b.selected.length-1;0<=a;a--)d={},d[b.parserResult.itemName]=b.selected[a],d=b.parserResult.modelMapper(g,d),c.unshift(d);return c});s.$formatters.unshift(function(d){var c=b.parserResult.source(g,{$select:{search:""}}),a={},f;if(!c)return d;var e=[],k=function(d,c){if(d&&d.length){for(var h=
d.length-1;0<=h;h--){a[b.parserResult.itemName]=d[h];f=b.parserResult.modelMapper(g,a);if(b.parserResult.trackByExp){var k=/(\w*)\./.exec(b.parserResult.trackByExp),l=/\.([^\s]+)/.exec(b.parserResult.trackByExp);if(k&&0<k.length&&k[1]==b.parserResult.itemName&&l&&0<l.length&&f[l[1]]==c[l[1]])return e.unshift(d[h]),!0}if(angular.equals(f,c))return e.unshift(d[h]),!0}return!1}};if(!d)return e;for(var h=d.length-1;0<=h;h--)k(b.selected,d[h])||k(c,d[h])||e.unshift(d[h]);return e});g.$watchCollection(function(){return s.$modelValue},
function(b,c){c!=b&&(s.$modelValue=null,e.refreshComponent())});s.$render=function(){if(!angular.isArray(s.$viewValue))if(angular.isUndefined(s.$viewValue)||null===s.$viewValue)b.selected=[];else throw h("multiarr","Expected model value to be array but got '{0}'",s.$viewValue);b.selected=s.$viewValue;e.refreshComponent();g.$evalAsync()};g.$on("uis:select",function(d,c){b.selected.length>=b.limit||(b.selected.push(c),e.updateModel())});g.$on("uis:activate",function(){e.activeMatchIndex=-1});g.$watch("$select.disabled",
function(d,c){c&&!d&&b.sizeSearchInput()});b.searchInput.on("keydown",function(b){var f=b.which;g.$apply(function(){var a=!1;c.isHorizontalMovement(f)&&(a=t(f));a&&f!=c.TAB&&(b.preventDefault(),b.stopPropagation())})});b.searchInput.on("keyup",function(d){c.isVerticalMovement(d.which)||g.$evalAsync(function(){b.activeIndex=!1===b.taggingLabel?-1:0});if(b.tagging.isActivated&&0<b.search.length&&!(d.which===c.TAB||c.isControl(d)||c.isFunctionKey(d)||d.which===c.ESC||c.isVerticalMovement(d.which))&&
(b.activeIndex=!1===b.taggingLabel?-1:0,!1!==b.taggingLabel)){var e=angular.copy(b.items);d=angular.copy(b.items);var a,h,k=!1,l=-1,m;if(void 0!==b.tagging.fct){h=b.$filter("filter")(e,{isTag:!0});0<h.length&&(m=h[0]);0<e.length&&m&&(k=!0,e=e.slice(1,e.length),d=d.slice(1,d.length));a=b.tagging.fct(b.search);if(d.some(function(a){return angular.equals(a,b.tagging.fct(b.search))})||b.selected.some(function(b){return angular.equals(b,a)})){g.$evalAsync(function(){b.activeIndex=0;b.items=e});return}a.isTag=
!0}else{h=b.$filter("filter")(e,function(a){return a.match(b.taggingLabel)});0<h.length&&(m=h[0]);h=e[0];void 0!==h&&0<e.length&&m&&(k=!0,e=e.slice(1,e.length),d=d.slice(1,d.length));a=b.search+" "+b.taggingLabel;if(-1<f(b.selected,b.search))return;if(q(d.concat(b.selected))){k&&(e=d,g.$evalAsync(function(){b.activeIndex=0;b.items=e}));return}if(q(d)){k&&(b.items=d.slice(1,d.length));return}}k&&(l=f(b.selected,a));-1<l?e=e.slice(l+1,e.length-1):(e=[],e.push(a),e=e.concat(d));g.$evalAsync(function(){b.activeIndex=
0;b.items=e})}});b.searchInput.on("blur",function(){n(function(){e.activeMatchIndex=-1})})}}}]);y.directive("uiSelectSingle",["$timeout","$compile",function(h,n){return{restrict:"EA",require:["^uiSelect","^ngModel"],link:function(g,l,k,r){var m=r[0],t=r[1];t.$parsers.unshift(function(c){var b={};b[m.parserResult.itemName]=c;return m.parserResult.modelMapper(g,b)});t.$formatters.unshift(function(c){var b=m.parserResult.source(g,{$select:{search:""}}),h={},e;if(b){var d=function(a){h[m.parserResult.itemName]=
a;e=m.parserResult.modelMapper(g,h);return e==c};if(m.selected&&d(m.selected))return m.selected;for(var k=b.length-1;0<=k;k--)if(d(b[k]))return b[k]}return c});g.$watch("$select.selected",function(c){t.$viewValue!==c&&t.$setViewValue(c)});t.$render=function(){m.selected=t.$viewValue};g.$on("uis:select",function(c,b){m.selected=b});g.$on("uis:close",function(c,b){h(function(){m.focusser.prop("disabled",!1);b||m.focusser[0].focus()},0,!1)});g.$on("uis:activate",function(){q.prop("disabled",!0)});var q=
angular.element("<input ng-disabled='$select.disabled' class='ui-select-focusser ui-select-offscreen' type='text' id='{{ $select.focusserId }}' aria-label='{{ $select.focusserTitle }}' aria-haspopup='true' role='button' />");n(q)(g);m.focusser=q;m.focusInput=q;l.parent().append(q);q.bind("focus",function(){g.$evalAsync(function(){m.focus=!0})});q.bind("blur",function(){g.$evalAsync(function(){m.focus=!1})});q.bind("keydown",function(f){if(f.which===c.BACKSPACE)f.preventDefault(),f.stopPropagation(),
m.select(void 0),g.$apply();else if(f.which!==c.TAB&&!c.isControl(f)&&!c.isFunctionKey(f)&&f.which!==c.ESC){if(f.which==c.DOWN||f.which==c.UP||f.which==c.ENTER||f.which==c.SPACE)f.preventDefault(),f.stopPropagation(),m.activate();g.$digest()}});q.bind("keyup input",function(f){f.which===c.TAB||c.isControl(f)||c.isFunctionKey(f)||f.which===c.ESC||f.which==c.ENTER||f.which===c.BACKSPACE||(m.activate(q.val()),q.val(""),g.$digest())})}}}]);y.directive("uiSelectSort",["$timeout","uiSelectConfig","uiSelectMinErr",
function(c,n,g){return{require:"^^uiSelect",link:function(l,k,n,m){if(null===l[n.uiSelectSort])throw g("sort","Expected a list to sort");var t=angular.extend({axis:"horizontal"},l.$eval(n.uiSelectSortOptions)).axis;l.$watch(function(){return m.sortable},function(b){b?k.attr("draggable",!0):k.removeAttr("draggable")});k.on("dragstart",function(b){k.addClass("dragging");(b.dataTransfer||b.originalEvent.dataTransfer).setData("text",l.$index.toString())});k.on("dragend",function(){k.removeClass("dragging")});
var q=function(b,c){this.splice(c,0,this.splice(b,1)[0])},f=function(b){b.preventDefault();("vertical"===t?b.offsetY||b.layerY||(b.originalEvent?b.originalEvent.offsetY:0):b.offsetX||b.layerX||(b.originalEvent?b.originalEvent.offsetX:0))<this["vertical"===t?"offsetHeight":"offsetWidth"]/2?(k.removeClass("dropping-after"),k.addClass("dropping-before")):(k.removeClass("dropping-before"),k.addClass("dropping-after"))},b,s=function(d){d.preventDefault();var f=parseInt((d.dataTransfer||d.originalEvent.dataTransfer).getData("text"),
10);c.cancel(b);b=c(function(){e(f)},20)},e=function(b){var c=l.$eval(n.uiSelectSort),a=c[b],e=null,e=k.hasClass("dropping-before")?b<l.$index?l.$index-1:l.$index:b<l.$index?l.$index:l.$index+1;q.apply(c,[b,e]);l.$apply(function(){l.$emit("uiSelectSort:change",{array:c,item:a,from:b,to:e})});k.removeClass("dropping");k.removeClass("dropping-before");k.removeClass("dropping-after");k.off("drop",s)};k.on("dragenter",function(){k.hasClass("dragging")||(k.addClass("dropping"),k.on("dragover",f),k.on("drop",
s))});k.on("dragleave",function(b){b.target==k&&(k.removeClass("dropping"),k.removeClass("dropping-before"),k.removeClass("dropping-after"),k.off("dragover",f),k.off("drop",s))})}}}]);y.service("uisRepeatParser",["uiSelectMinErr","$parse",function(c,n){this.parse=function(g){var l;l=g.match(/^\s*(?:([\s\S]+?)\s+as\s+)?(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+(\s*[\s\S]+?)?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);if(!l)throw c("iexp","Expected expression in form of '_item_ in _collection_[ track by _id_]' but got '{0}'.",
g);g=l[5];var k="";if(l[3]){g=l[5].replace(/(^\()|(\)$)/g,"");var r=l[5].match(/^\s*(?:[\s\S]+?)(?:[^\|]|\|\|)+([\s\S]*)\s*$/);r&&r[1].trim()&&(k=r[1],g=g.replace(k,""))}return{itemName:l[4]||l[2],keyName:l[3],source:n(g),filters:k,trackByExp:l[6],modelMapper:n(l[1]||l[4]||l[2]),repeatExpression:function(c){c=this.itemName+" in "+(c?"$group.items":"$select.items");this.trackByExp&&(c+=" track by "+this.trackByExp);return c}}};this.getGroupNgRepeatExpression=function(){return"$group in $select.groups"}}])})();
angular.module("ui.select").run(["$templateCache",function(c){c.put("bootstrap/choices.tpl.html",'<ul class="ui-select-choices ui-select-choices-content ui-select-dropdown dropdown-menu" role="listbox" ng-show="$select.open"><li class="ui-select-choices-group" id="ui-select-choices-{{ $select.generatedId }}"><div class="divider" ng-show="$select.isGrouped && $index > 0"></div><div ng-show="$select.isGrouped" class="ui-select-choices-group-label dropdown-header" ng-bind="$group.name"></div><div id="ui-select-choices-row-{{ $select.generatedId }}-{{$index}}" class="ui-select-choices-row" ng-class="{active: $select.isActive(this), disabled: $select.isDisabled(this)}" role="option"><a href="" class="ui-select-choices-row-inner"></a></div></li></ul>');
c.put("bootstrap/match-multiple.tpl.html",'<span class="ui-select-match"><span ng-repeat="$item in $select.selected"><span class="ui-select-match-item btn btn-default btn-xs" tabindex="-1" type="button" ng-disabled="$select.disabled" ng-click="$selectMultiple.activeMatchIndex = $index;" ng-class="{\'btn-primary\':$selectMultiple.activeMatchIndex === $index, \'select-locked\':$select.isLocked(this, $index)}" ui-select-sort="$select.selected"><span class="close ui-select-match-close" ng-hide="$select.disabled" ng-click="$selectMultiple.removeChoice($index)">&nbsp;&times;</span> <span uis-transclude-append=""></span></span></span></span>');
c.put("bootstrap/match.tpl.html",'<div class="ui-select-match" ng-hide="$select.open" ng-disabled="$select.disabled" ng-class="{\'btn-default-focus\':$select.focus}"><span tabindex="-1" class="btn btn-default form-control ui-select-toggle" aria-label="{{ $select.baseTitle }} activate" ng-disabled="$select.disabled" ng-click="$select.activate()" style="outline: 0;"><span ng-show="$select.isEmpty()" class="ui-select-placeholder text-muted">{{$select.placeholder}}</span> <span ng-hide="$select.isEmpty()" class="ui-select-match-text pull-left" ng-class="{\'ui-select-allow-clear\': $select.allowClear && !$select.isEmpty()}" ng-transclude=""></span> <i class="caret pull-right" ng-click="$select.toggle($event)"></i> <a ng-show="$select.allowClear && !$select.isEmpty()" aria-label="{{ $select.baseTitle }} clear" style="margin-right: 10px" ng-click="$select.clear($event)" class="btn btn-xs btn-link pull-right"><i class="glyphicon glyphicon-remove" aria-hidden="true"></i></a></span></div>');
c.put("bootstrap/select-multiple.tpl.html",'<div class="ui-select-container ui-select-multiple ui-select-bootstrap dropdown form-control" ng-class="{open: $select.open}"><div><div class="ui-select-match"></div><input type="text" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" class="ui-select-search input-xs" placeholder="{{$selectMultiple.getPlaceholder()}}" ng-disabled="$select.disabled" ng-hide="$select.disabled" ng-click="$select.activate()" ng-model="$select.search" role="combobox" aria-label="{{ $select.baseTitle }}" ondrop="return false;"></div><div class="ui-select-choices"></div></div>');
c.put("bootstrap/select.tpl.html",'<div class="ui-select-container ui-select-bootstrap dropdown" ng-class="{open: $select.open}"><div class="ui-select-match"></div><input type="text" autocomplete="off" tabindex="-1" aria-expanded="true" aria-label="{{ $select.baseTitle }}" aria-owns="ui-select-choices-{{ $select.generatedId }}" aria-activedescendant="ui-select-choices-row-{{ $select.generatedId }}-{{ $select.activeIndex }}" class="form-control ui-select-search" placeholder="{{$select.placeholder}}" ng-model="$select.search" ng-show="$select.searchEnabled && $select.open"><div class="ui-select-choices"></div></div>');
c.put("select2/choices.tpl.html",'<ul class="ui-select-choices ui-select-choices-content select2-results"><li class="ui-select-choices-group" ng-class="{\'select2-result-with-children\': $select.choiceGrouped($group) }"><div ng-show="$select.choiceGrouped($group)" class="ui-select-choices-group-label select2-result-label" ng-bind="$group.name"></div><ul role="listbox" id="ui-select-choices-{{ $select.generatedId }}" ng-class="{\'select2-result-sub\': $select.choiceGrouped($group), \'select2-result-single\': !$select.choiceGrouped($group) }"><li role="option" id="ui-select-choices-row-{{ $select.generatedId }}-{{$index}}" class="ui-select-choices-row" ng-class="{\'select2-highlighted\': $select.isActive(this), \'select2-disabled\': $select.isDisabled(this)}"><div class="select2-result-label ui-select-choices-row-inner"></div></li></ul></li></ul>');
c.put("select2/match-multiple.tpl.html",'<span class="ui-select-match"><li class="ui-select-match-item select2-search-choice" ng-repeat="$item in $select.selected" ng-class="{\'select2-search-choice-focus\':$selectMultiple.activeMatchIndex === $index, \'select2-locked\':$select.isLocked(this, $index)}" ui-select-sort="$select.selected"><span uis-transclude-append=""></span> <a href="javascript:;" class="ui-select-match-close select2-search-choice-close" ng-click="$selectMultiple.removeChoice($index)" tabindex="-1"></a></li></span>');
c.put("select2/match.tpl.html",'<a class="select2-choice ui-select-match" ng-class="{\'select2-default\': $select.isEmpty()}" ng-click="$select.toggle($event)" aria-label="{{ $select.baseTitle }} select"><span ng-show="$select.isEmpty()" class="select2-chosen">{{$select.placeholder}}</span> <span ng-hide="$select.isEmpty()" class="select2-chosen" ng-transclude=""></span> <abbr ng-if="$select.allowClear && !$select.isEmpty()" class="select2-search-choice-close" ng-click="$select.clear($event)"></abbr> <span class="select2-arrow ui-select-toggle"><b></b></span></a>');
c.put("select2/select-multiple.tpl.html",'<div class="ui-select-container ui-select-multiple select2 select2-container select2-container-multi" ng-class="{\'select2-container-active select2-dropdown-open open\': $select.open, \'select2-container-disabled\': $select.disabled}"><ul class="select2-choices"><span class="ui-select-match"></span><li class="select2-search-field"><input type="text" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" role="combobox" aria-expanded="true" aria-owns="ui-select-choices-{{ $select.generatedId }}" aria-label="{{ $select.baseTitle }}" aria-activedescendant="ui-select-choices-row-{{ $select.generatedId }}-{{ $select.activeIndex }}" class="select2-input ui-select-search" placeholder="{{$selectMultiple.getPlaceholder()}}" ng-disabled="$select.disabled" ng-hide="$select.disabled" ng-model="$select.search" ng-click="$select.activate()" style="width: 34px;" ondrop="return false;"></li></ul><div class="ui-select-dropdown select2-drop select2-with-searchbox select2-drop-active" ng-class="{\'select2-display-none\': !$select.open}"><div class="ui-select-choices"></div></div></div>');
c.put("select2/select.tpl.html",'<div class="ui-select-container select2 select2-container" ng-class="{\'select2-container-active select2-dropdown-open open\': $select.open, \'select2-container-disabled\': $select.disabled, \'select2-container-active\': $select.focus, \'select2-allowclear\': $select.allowClear && !$select.isEmpty()}"><div class="ui-select-match"></div><div class="ui-select-dropdown select2-drop select2-with-searchbox select2-drop-active" ng-class="{\'select2-display-none\': !$select.open}"><div class="select2-search" ng-show="$select.searchEnabled"><input type="text" autocomplete="off" autocorrect="false" autocapitalize="off" spellcheck="false" role="combobox" aria-expanded="true" aria-owns="ui-select-choices-{{ $select.generatedId }}" aria-label="{{ $select.baseTitle }}" aria-activedescendant="ui-select-choices-row-{{ $select.generatedId }}-{{ $select.activeIndex }}" class="ui-select-search select2-input" ng-model="$select.search"></div><div class="ui-select-choices"></div></div></div>');
c.put("selectize/choices.tpl.html",'<div ng-show="$select.open" class="ui-select-choices ui-select-dropdown selectize-dropdown single"><div class="ui-select-choices-content selectize-dropdown-content"><div class="ui-select-choices-group optgroup" role="listbox"><div ng-show="$select.isGrouped" class="ui-select-choices-group-label optgroup-header" ng-bind="$group.name"></div><div role="option" class="ui-select-choices-row" ng-class="{active: $select.isActive(this), disabled: $select.isDisabled(this)}"><div class="option ui-select-choices-row-inner" data-selectable=""></div></div></div></div></div>');
c.put("selectize/match.tpl.html",'<div ng-hide="($select.open || $select.isEmpty())" class="ui-select-match" ng-transclude=""></div>');c.put("selectize/select.tpl.html",'<div class="ui-select-container selectize-control single" ng-class="{\'open\': $select.open}"><div class="selectize-input" ng-class="{\'focus\': $select.open, \'disabled\': $select.disabled, \'selectize-focus\' : $select.focus}" ng-click="$select.open && !$select.searchEnabled ? $select.toggle($event) : $select.activate()"><div class="ui-select-match"></div><input type="text" autocomplete="off" tabindex="-1" class="ui-select-search ui-select-toggle" ng-click="$select.toggle($event)" placeholder="{{$select.placeholder}}" ng-model="$select.search" ng-hide="!$select.searchEnabled || ($select.selected && !$select.open)" ng-disabled="$select.disabled" aria-label="{{ $select.baseTitle }}"></div><div class="ui-select-choices"></div></div>')}]);