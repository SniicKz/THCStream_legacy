streamaApp.factory("socketService",["$rootScope","apiService","$timeout",function(b,f,g){return{subscription:null,browserSocketUUID:null,getUUID:function(){function a(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)}return a()+a()+"-"+a()+"-"+a()+"-"+a()+"-"+a()+a()+a()},registerPlayerSessonListener:function(a){var e=this,c=$("base").attr("href"),c=new SockJS(c+"stomp"),d=Stomp.over(c);d.connect({},function(){e.subscription=d.subscribe("/topic/playerSession/"+a,function(a){b.$broadcast("playerSession",
JSON.parse(a.body.toString()))})});this.browserSocketUUID=this.getUUID();b.browserSocketUUID=this.browserSocketUUID},unsubscribe:function(){this.subscription&&(this.subscription.unsubscribe(),this.browserSocketUUID=null,b.browserSocketUUID=null)}}}]);