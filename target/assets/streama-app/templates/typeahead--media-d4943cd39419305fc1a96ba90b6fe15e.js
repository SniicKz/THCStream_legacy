angular.module("streamaApp").run(["$templateCache",function(a){a.put("typeahead--media.htm",'<a class="typeahead-item" ng-class="{\'inactive\': !match.model.hasFiles}"> <img ng-if="match.model.poster_path" ng-src="https://image.tmdb.org/t/p/w92/{{match.model.poster_path}}" width="60px"/> <img ng-if="!match.model.poster_path" ng-src="{{basePath}}assets/poster-not-found.png" width="60px"/> &nbsp; <div> <span>{{(match.model.title || match.model.name)}}</span> <span style="opacity: .5;">({{match.model.release_date.substring(0, 4) || match.model.first_air_date.substring(0, 4)}})</span> <br/> <span class="label label-danger" ng-show="!match.model.hasFiles"><i class="ion-alert-circled"></i> No Video File yet!</span> </div> </a>')}]);