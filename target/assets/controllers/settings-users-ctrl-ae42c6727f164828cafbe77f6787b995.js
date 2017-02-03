streamaApp.controller("settingsUsersCtrl",["$scope","apiService","modalService","$rootScope",function(a,d,e,f){a.loading=!0;d.user.list().success(function(b){a.users=b;a.loading=!1});a.openUserModal=function(b){e.userModal(b,function(c){if(_.find(a.users,{id:c.id})){var d=a.users.indexOf(b);a.users[d]=c;c.id!=f.currentUser.id?alertify.alert("If you made any changes to the roles, please make sure to inform the user that he has to log out of the application and log back in for the changes to take effect."):
alertify.alert("If you made any changes to the roles, please log out of the application and log back in for the changes to take effect.")}else a.users.push(c)})};a.delete=function(b){alertify.set({buttonReverse:!0,labels:{ok:"Yes",cancel:"Cancel"}});alertify.confirm("Are you sure you want to delete "+b.username+"?",function(c){c&&d.user.delete(b.id).success(function(c){_.remove(a.users,{id:b.id})})})};a.isAdmin=function(a){return _.find(a.authorities,{authority:"ROLE_ADMIN"})}}]);