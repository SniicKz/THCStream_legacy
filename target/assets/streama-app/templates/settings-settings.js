angular.module("streamaApp").run(["$templateCache",function(a){a.put("settings-settings.htm",'<button class="btn btn-primary pull-right btn-lg" ng-click="updateMultipleSettings(settings)" ng-disabled="anySettingsInvalid()">Save Settings</button> <h1> Settings <div class="spinner" ng-show="loading"> <div class="bounce1"></div> <div class="bounce2"></div> <div class="bounce3"></div> </div> </h1> <hr/> <form name="settings-form" class="settings-form"> <div class="form-group row-slim" ng-repeat="setting in settings"> <div class="col-sm-3"> <label class="control-label">{{setting.settingsKey}} <span ng-if="setting.required" style="color:red">*</span></label> </div> <div ng-switch="setting.settingsType"> <div ng-switch-when="string"> <div class="col-sm-7" ng-class="{\'has-error has-feedback\': setting.invalid, \'has-success has-feedback\': setting.valid}"> <input ng-required="setting.required" type="text" class="form-control" ng-model="setting.value" placeholder="{{setting.settingsKey}}" ng-change="changeValue(setting)"> <span class="glyphicon ion-close form-control-feedback" ng-show="setting.invalid" aria-hidden="true"></span> <span class="glyphicon ion-checkmark form-control-feedback" ng-show="setting.valid" aria-hidden="true"></span> </div> <div class="col-sm-2"> <button type="button" class="btn btn-success btn-block" ng-click="validateSettings(setting)" ng-show="!setting.valid && setting.dirty">validate</button> </div> </div> <div ng-switch-when="boolean" class="col-sm-2"> <input type="checkbox" ng-model="setting.value" ng-init="setting.value = (setting.value == \'true\')"/> </div> </div> <div class="col-sm-7 col-sm-offset-3"> <a ng-if="setting.settingsKey==\'Base URL\'" ng-click="resetBaseURL(setting)"> Reset to default value.</a> <p class="settings-description" ng-bind-html="setting.description"></p> </div> </div> </form> <p style="color:red">* required field</p> <hr/>')}]);