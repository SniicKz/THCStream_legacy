streamaApp.factory("apiService",["$http","$rootScope",function(c,e){var b=$("base").attr("href");e.basePath=b;return{currentUser:function(){return c.get(b+"user/current.json")},tvShow:{get:function(a){return c.get(b+"tvShow/show.json",{params:{id:a}})},save:function(a){return c.post(b+"tvShow/save.json",a)},delete:function(a){return c.delete(b+"tvShow/delete.json",{params:{id:a}})},list:function(){return c.get(b+"tvShow.json")},episodesForTvShow:function(a){return c.get(b+"tvShow/episodesForTvShow.json",
{params:{id:a}})},adminEpisodesForTvShow:function(a){return c.get(b+"tvShow/adminEpisodesForTvShow.json",{params:{id:a}})},removeSeason:function(a,d){return c.get(b+"tvShow/removeSeason.json",{params:{showId:a,season_number:d}})}},user:{save:function(a){return c.post(b+"user/save.json",a)},delete:function(a){return c.delete(b+"user/delete.json",{params:{id:a}})},list:function(){return c.get(b+"user.json")},checkAvailability:function(a){return c.get(b+"user/checkAvailability.json",{params:{username:a}})},
saveAndInviteUser:function(a){return c.post(b+"user/saveAndInviteUser.json",a)},saveProfile:function(a){return c.post(b+"user/saveProfile.json",a)},availableRoles:function(){return c.get(b+"user/availableRoles.json")},changePassword:function(a){return c.post(b+"user/changePassword.json",a)}},tag:{save:function(a){return c.post(b+"tag/save.json",a)},delete:function(a){return c.delete(b+"tag/delete.json",{params:{id:a}})},list:function(){return c.get(b+"tag.json")}},video:{get:function(a){return c.get(b+
"video/show.json",{params:{id:a}})},save:function(a){return c.post(b+"video/save.json",a)},delete:function(a){return c.delete(b+"video/delete.json",{params:{id:a}})},list:function(a){return c.get(b+"video.json",{params:a})},dash:function(){return c.get(b+"video/dash.json")},removeFile:function(a,d){return c.get(b+"video/removeFile.json",{params:{videoId:a,fileId:d}})},listAllFiles:function(a){return c.get(b+"file.json",{params:a})},removeFileFromDisk:function(a,d){return c.delete(b+"file/removeFileFromDisk.json",
{params:{id:a,path:d}})},cleanUpFiles:function(a){return c.delete(b+"file/cleanUpFiles.json",{params:{type:a}})},addFile:function(a,d){return c.get(b+"video/addFile.json",{params:{videoId:a,fileId:d}})},refetch:function(a){return c.get(b+"video/refetch.json",{params:{videoId:a}})},addExternalUrl:function(a){return c.get(b+"video/addExternalUrl.json",{params:a})}},episode:{get:function(a){return c.get(b+"episode/show.json",{params:{id:a}})},save:function(a){return c.post(b+"episode/save.json",a)},
delete:function(a){return c.delete(b+"episode/delete.json",{params:{id:a}})},list:function(a){return c.get(b+"episode.json",{params:a})}},movie:{get:function(a){return c.get(b+"movie/show.json",{params:{id:a}})},save:function(a){return c.post(b+"movie/save.json",a)},delete:function(a){return c.delete(b+"movie/delete.json",{params:{id:a}})},list:function(){return c.get(b+"movie.json")}},genericVideo:{get:function(a){return c.get(b+"genericVideo/show.json",{params:{id:a}})},save:function(a){return c.post(b+
"genericVideo/save.json",a)},delete:function(a){return c.delete(b+"genericVideo/delete.json",{params:{id:a}})},list:function(){return c.get(b+"genericVideo.json")}},viewingStatus:{save:function(a){return c.get(b+"viewingStatus/save.json",{params:a})},markCompleted:function(a){return c.get(b+"viewingStatus/markCompleted.json",{params:{id:a.id}})},delete:function(a){return c.delete(b+"viewingStatus/delete.json",{params:{id:a}})}},genres:{get:function(a){return c.get(b+"genre/show.json",{params:{id:a}})},
list:function(){return c.get(b+"genre.json")}},settings:{list:function(){return c.get(b+"settings.json")},updateMultiple:function(a){return c.post(b+"settings/updateMultiple.json",a)},validateSettings:function(a){return c.post(b+"settings/validateSettings.json",a)}},notification:{list:function(){return c.get(b+"notificationQueue/index.json")},listNewReleases:function(){return c.get(b+"notificationQueue/listNewReleases.json")},addMovieToCurrentNotification:function(a){return c.get(b+"notificationQueue/addMovieToCurrentNotification.json",
{params:{id:a}})},highlightOnDashboard:function(a){return c.post(b+"notificationQueue/highlightOnDashboard.json",a)},addTvShowToCurrentNotification:function(a,d){return c.get(b+"notificationQueue/addTvShowToCurrentNotification.json",{params:{id:a,description:d}})},sendCurrentNotifcation:function(){return c.get(b+"notificationQueue/sendCurrentNotifcations.json")},delete:function(a){return c.delete(b+"notificationQueue/delete.json",{params:{id:a}})}},theMovieDb:{search:function(a,d){return c.get(b+
"theMovieDb/search.json",{params:{type:a,name:d}})},seasonForShow:function(a){return c.get(b+"theMovieDb/seasonForShow.json",{params:a})},availableGenres:function(a){return c.get(b+"theMovieDb/availableGenres.json")},countNewEpisodesForSeason:function(a){return c.get(b+"theMovieDb/countNewEpisodesForSeason",{params:a})}},dash:{searchMedia:function(a){return c.get(b+"dash/searchMedia.json",{params:{query:a}})},listContinueWatching:function(){return c.get(b+"dash/listContinueWatching.json")},listMovies:function(){return c.get(b+
"dash/listMovies.json")},listShows:function(){return c.get(b+"dash/listShows.json")},firstEpisodeForShow:function(a){return c.get(b+"dash/firstEpisodeForShow.json",{params:{id:a}})},listGenres:function(){return c.get(b+"dash/listGenres.json")},listGenericVideos:function(){return c.get(b+"dash/listGenericVideos.json")},listNewReleases:function(){return c.get(b+"dash/listNewReleases.json")}},websocket:{triggerPlayerAction:function(a){return c.get(b+"websocket/triggerPlayerAction.json",{params:a})}}}}]);