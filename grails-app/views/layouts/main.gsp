<!DOCTYPE html>
<html ng-app="streamaApp" lang="en">
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
	<title><g:layoutTitle default="Grails"/></title>
	<base href="<g:createLink uri="/" />">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="shortcut icon" href="${assetPath(src: 'favicon.ico')}" type="image/x-icon">
	<link rel="apple-touch-icon" href="${assetPath(src: 'apple-touch-icon.png')}">
	<link rel="apple-touch-icon" sizes="114x114" href="${assetPath(src: 'apple-touch-icon-retina.png')}">
	<script src="https://code.jquery.com/jquery-1.10.2.js">
	</script>
	<asset:stylesheet src="vendor.css"/>
	<asset:stylesheet src="application.css"/>

	<asset:javascript src="vendor.js"/>
	<asset:javascript src="application.js"/>

	<g:layoutHead/>
	<script type="text/javascript">


		function toggleMenu(){
	        $("#bs-example-navbar-collapse-1").toggle();
	    }

	</script>
	<!-- PopAds.net Popunder Code for www.thcstream.net -->
	<script type="text/javascript" data-cfasync="false">
	/*<![CDATA[/* */
	  var _pop = _pop || [];
	  _pop.push(['siteId', 1823898]);
	  _pop.push(['minBid', 0]);
	  _pop.push(['popundersPerIP', 0]);
	  _pop.push(['delayBetween', 0]);
	  _pop.push(['default', false]);
	  _pop.push(['defaultPerDay', 0]);
	  _pop.push(['topmostLayer', false]);
	  (function() {
	    var pa = document.createElement('script'); pa.type = 'text/javascript'; pa.async = true;
	    var s = document.getElementsByTagName('script')[0]; 
	    pa.src = '//c1.popads.net/pop.js';
	    pa.onerror = function() {
	      var sa = document.createElement('script'); sa.type = 'text/javascript'; sa.async = true;
	      sa.src = '//c2.popads.net/pop.js';
	      s.parentNode.insertBefore(sa, s);
	    };
	    s.parentNode.insertBefore(pa, s);
	  })();
	/*]]>/* */
	</script>
	<!-- PopAds.net Popunder Code End -->
</head>
<body>
<div class="background_black"></div>
<header class="main" id="main" ng-if="!isCurrentState('player')">
		<div class="logo_ma">
			<a class="logo" ui-sref="dash">
				<asset:image src="logo.png"></asset:image>
				<!--<div class="version">v0.1</div>-->
				<div class="spinner" ng-show="baseData.loading">
					<div class="bounce1"></div>
					<div class="bounce2"></div>
					<div class="bounce3"></div>
				</div>
			</a>
		</div>







	<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
	<div class="pull-left flex">

		<div class="browse-genres" ng-if="isCurrentState('dash') && genres.length">
			<!--<button class="btn btn-link toggle-menu" ng-click="toggleGenreMenu()">
				<span ng-if="selectedGenre" ng-bind="selectedGenre.name"></span>
				<span ng-if="!selectedGenre">{{'DASHBOARD.BROWSE_GENRES' | translate}}</span>
				<i class="ion-android-arrow-dropdown"></i>
			</button>-->


			<div class="toggle-menu-content" ng-show="genreMenuOpen">
				<i class="ion-close-circled pull-right" ng-click="toggleGenreMenu()"></i>
				<ul>
					<li>
						<a ng-click="changeGenre()"><i class="ion-grid"></i> All</a>
					</li>
					<li ng-repeat="genre in ::genres">
						<a ng-click="changeGenre(genre)" ng-bind="::genre.name"></a>
					</li>
				</ul>
			</div>
		</div>
	</div>


		<ul class="nav navbar-nav">

			<!--<li ng-if="isCurrentState('dash')">
				<div class="dash-search form-group has-feedback">
					<input type="text" placeholder="Search.." class="form-control input-xs" ng-model="dashSearch"
								 typeahead-append-to-body="true" uib-typeahead="(item.title || item.name) for item in searchMedia($viewValue)"
								 typeahead-on-select="selectFromSearch($item)" typeahead-template-url="typeahead--media.htm" typeahead-loading="baseData.loading"/>
					<span class="form-control-feedback ion-android-search" aria-hidden="true"></span>
				</div>
			</li>-->
			<sec:ifLoggedIn>
				<li><a ui-sref="dash">{{'DASHBOARD.TITLE' | translate}}</a></li>
			</sec:ifLoggedIn>

			<sec:ifAnyGranted roles="ROLE_CONTENT_MANAGER">
				<li><a ui-sref="admin.shows">{{'MANAGE_CONTENT' | translate}}</a></li>
			</sec:ifAnyGranted>

      <sec:ifLoggedIn>
      	<sec:ifAnyGranted roles="ROLE_ADMIN">
        	<li><a ui-sref="settings.settings">{{'ADMIN' | translate}}</a></li>
        </sec:ifAnyGranted>
      </sec:ifLoggedIn>

       <sec:ifAnyGranted roles="ROLE_USER">
        <li>
					<div class="btn-group" uib-dropdown is-open="status.isopen" style="margin: 5px 0;">
						<button id="single-button" style="top:1px;" type="button" class="btn btn-primary btn-sm"
										uib-dropdown-toggle ng-disabled="disabled">
							{{$root.currentUser.fullName || $root.currentUser.username}} <span class="caret"></span>
						</button>
						<ul class="dropdown-menu dropdown-menu-right"
								uib-dropdown-menu role="menu" aria-labelledby="single-button">
							<!--<li role="menuitem"><a ui-sref="help">{{'HELP_FAQ' | translate}}</a></li>-->
							<li role="menuitem"><a ui-sref="profile">{{'PROFILE_SETTINGS' | translate}}</a></li>
							<li class="divider"></li>
							<li><g:link uri="/j_spring_security_logout">{{'LOGOUT' | translate}}</g:link></li>
						</ul>
					</div>
				</li>
         </sec:ifAnyGranted>
			<sec:ifAnyGranted roles="ROLE_GUEST">
         		<li><g:link uri="/j_spring_security_logout">Anmelden</g:link></li>
 			</sec:ifAnyGranted>
		</ul>
	</div>







 
	<!-- <i class="ion-navicon navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1"></i> -->
	<i class="ion-navicon navbar-toggle collapsed" onclick="toggleMenu()" id="collapse_menu"></i>





</header>

<g:layoutBody/>
</body>
</html>
