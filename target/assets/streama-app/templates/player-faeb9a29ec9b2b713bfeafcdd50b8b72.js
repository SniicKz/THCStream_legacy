angular.module("streamaApp").run(["$templateCache",function(a){a.put("player.htm",'<div class="player-wrapper"> <streama-video-player options="videoOptions" ng-if="videoOptions.videoSrc"> </streama-video-player> </div>')}]);