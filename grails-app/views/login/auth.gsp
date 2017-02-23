<html>
<head>
	<meta name='layout' content='noAngular'/>
	<title>THCStream</title>
</head>

<body>


<div id='login' ng-app="streama.translations">
	<div class='inner'>
		<div class='fheader'>{{'LOGIN.TITLE' | translate}}</div>

		<g:if test='${flash.message}'>
			<div class='login_message'>${flash as grails.converters.JSON}</div>
		</g:if>
 
		<form action='${postUrl}' method='POST' id='loginForm' class='cssform form-horizontal' autocomplete='off'>

			<div class="form-group">
				<label for="inputEmail" class="col-lg-2 control-label">{{'LOGIN.USERNAME' | translate}}</label>
				<div class="col-lg-10">
					<input type="text" name="j_username" class="form-control" placeholder="{{'LOGIN.USERNAME' | translate}}">
				</div>
			</div>

			<div class="form-group">
				<label for="inputPassword" class="col-lg-2 control-label">{{'LOGIN.PASSWORD' | translate}}</label>
				<div class="col-lg-10">
					<input type="password" name='j_password' class="form-control" placeholder="{{'LOGIN.PASSWORD' | translate}}">
				</div>
			</div>
      <span>
				<g:if test="${streama.Settings.findBySettingsKey('First Time Login Info').value == 'true'}">
					{{'LOGIN.FIRST_TIME_HINT' | translate}}
				</g:if>
			<input style="display: none;" type='checkbox' class='chk' name='${rememberMeParameter}' id='remember_me' checked='checked'/>

			<button class="btn btn-primary pull-right">{{'LOGIN.SUBMIT' | translate}}</button></span>
		</form>
	</div>
</div>



<div id='login_info' ng-app="streama.translations">
	<div class='inner'>
		Du kannst THCStream auch ohne eine Mitgliedschaft benutzen.<br>
		Klick auf "Jetzt beitreten" und siehe dir unendlich viele filme in Bester Qualität an.
		<form action='${postUrl}' method='POST' id='loginForm' class='cssform form-horizontal' autocomplete='off'>
			<input style="display:none;" type="text" name="j_username" class="form-control" value="GUEST@GUEST_THCSTREAM.COM">
			<input type="password" style="display:none;"  name='j_password' class="form-control" value="GUEST@GUEST_THCSTREAM.COM" >
			<br>
			<button class="login_guest_button">Jetzt beitreten!</button></span>
		</form>
	</div>
</div>



<div id='login_info' ng-app="streama.translations">
	<div class='inner'>
		Die Verfügbarkeit von HD- und Ultra-HD-Bildqualität ist abhängig von Ihrem Internetdienst und Gerät.<br>
		Nicht alle Inhalte stehen in HD oder Ultra-HD zur Verfügung. 
	</div>
</div>



<script type='text/javascript'>
	<!--
	(function() {
		document.forms['loginForm'].elements['j_username'].focus();
	})();
	// -->
</script>
</body>
</html>
