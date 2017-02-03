(function(){var m,r,f,w={}.hasOwnProperty,p=[].slice;r=function(){function d(a,c,b){this.command=a;this.headers=null!=c?c:{};this.body=null!=b?b:""}var f;d.prototype.toString=function(){var a,c,b,e,g;a=[this.command];(b=!1===this.headers["content-length"]?!0:!1)&&delete this.headers["content-length"];g=this.headers;for(c in g)w.call(g,c)&&(e=g[c],a.push(""+c+":"+e));this.body&&!b&&a.push("content-length:"+d.sizeOfUTF8(this.body));a.push("\n"+this.body);return a.join("\n")};d.sizeOfUTF8=function(a){return a?
encodeURI(a).match(/%..|./g).length:0};f=function(a){var c,b,e,g,h,q,f,n,k;g=a.search(/\n\n/);h=a.substring(0,g).split("\n");e=h.shift();q={};c=function(a){return a.replace(/^\s+|\s+$/g,"")};k=h.reverse();b=0;for(n=k.length;b<n;b++)f=k[b],h=f.indexOf(":"),q[c(f.substring(0,h))]=c(f.substring(h+1));c="";g+=2;if(q["content-length"])c=parseInt(q["content-length"]),c=(""+a).substring(g,g+c);else for(b=null,b=h=g,f=a.length;g<=f?h<f:h>f;b=g<=f?++h:--h){b=a.charAt(b);if("\x00"===b)break;c+=b}return new d(e,
q,c)};d.unmarshall=function(a){var c,b;b=a.split(/\x00\n*/);a={frames:[],partial:""};var e,g,h,d;h=b.slice(0,-1);d=[];e=0;for(g=h.length;e<g;e++)c=h[e],d.push(f(c));a.frames=d;c=b.slice(-1)[0];"\n"===c||-1!==c.search(/\x00\n*$/)?a.frames.push(f(c)):a.partial=c;return a};d.marshall=function(a,c,b){return(new d(a,c,b)).toString()+"\x00"};return d}();m=function(){function d(a){this.ws=a;this.ws.binaryType="arraybuffer";this.counter=0;this.connected=!1;this.heartbeat={outgoing:1E4,incoming:1E4};this.maxWebSocketFrameSize=
16384;this.subscriptions={};this.partialData=""}var k;d.prototype.debug=function(a){var c;return"undefined"!==typeof window&&null!==window?null!=(c=window.console)?c.log(a):void 0:void 0};k=function(){return Date.now?Date.now():(new Date).valueOf};d.prototype._transmit=function(a,c,b){a=r.marshall(a,c,b);for("function"===typeof this.debug&&this.debug(">>> "+a);;)if(a.length>this.maxWebSocketFrameSize)this.ws.send(a.substring(0,this.maxWebSocketFrameSize)),a=a.substring(this.maxWebSocketFrameSize),
"function"===typeof this.debug&&this.debug("remaining = "+a.length);else return this.ws.send(a)};d.prototype._setupHeartbeat=function(a){var c,b,e,g;if((b=a.version)===f.VERSIONS.V1_1||b===f.VERSIONS.V1_2)if(c=function(){var b,c,e,d;e=a["heart-beat"].split(",");d=[];b=0;for(c=e.length;b<c;b++)g=e[b],d.push(parseInt(g));return d}(),b=c[0],c=c[1],0!==this.heartbeat.outgoing&&0!==c&&(e=Math.max(this.heartbeat.outgoing,c),"function"===typeof this.debug&&this.debug("send PING every "+e+"ms"),this.pinger=
f.setInterval(e,function(a){return function(){a.ws.send("\n");return"function"===typeof a.debug?a.debug(">>> PING"):void 0}}(this))),0!==this.heartbeat.incoming&&0!==b)return e=Math.max(this.heartbeat.incoming,b),"function"===typeof this.debug&&this.debug("check PONG every "+e+"ms"),this.ponger=f.setInterval(e,function(a){return function(){var b;b=k()-a.serverActivity;if(b>2*e)return"function"===typeof a.debug&&a.debug("did not receive server activity for the last "+b+"ms"),a.ws.close()}}(this))};
d.prototype._parseConnect=function(){var a,c,b,e;a=1<=arguments.length?p.call(arguments,0):[];e={};switch(a.length){case 2:e=a[0];c=a[1];break;case 3:a[1]instanceof Function?(e=a[0],c=a[1],b=a[2]):(e.login=a[0],e.passcode=a[1],c=a[2]);break;case 4:e.login=a[0];e.passcode=a[1];c=a[2];b=a[3];break;default:e.login=a[0],e.passcode=a[1],c=a[2],b=a[3],e.host=a[4]}return[e,c,b]};d.prototype.connect=function(){var a,c,b;a=1<=arguments.length?p.call(arguments,0):[];a=this._parseConnect.apply(this,a);b=a[0];
this.connectCallback=a[1];c=a[2];"function"===typeof this.debug&&this.debug("Opening Web Socket...");this.ws.onmessage=function(a){return function(b){var d,f,m,n,p,s,t,v,u,l;b="undefined"!==typeof ArrayBuffer&&b.data instanceof ArrayBuffer?(d=new Uint8Array(b.data),"function"===typeof a.debug?a.debug("--- got data length: "+d.length):void 0,function(){var a,b,c;c=[];a=0;for(b=d.length;a<b;a++)f=d[a],c.push(String.fromCharCode(f));return c}().join("")):b.data;a.serverActivity=k();if("\n"===b)"function"===
typeof a.debug&&a.debug("<<< PONG");else{"function"===typeof a.debug&&a.debug("<<< "+b);b=r.unmarshall(a.partialData+b);a.partialData=b.partial;u=b.frames;l=[];t=0;for(v=u.length;t<v;t++)switch(b=u[t],b.command){case "CONNECTED":"function"===typeof a.debug&&a.debug("connected to server "+b.headers.server);a.connected=!0;a._setupHeartbeat(b.headers);l.push("function"===typeof a.connectCallback?a.connectCallback(b):void 0);break;case "MESSAGE":s=b.headers.subscription;(p=a.subscriptions[s]||a.onreceive)?
(m=a,n=b.headers["message-id"],b.ack=function(a){null==a&&(a={});return m.ack(n,s,a)},b.nack=function(a){null==a&&(a={});return m.nack(n,s,a)},l.push(p(b))):l.push("function"===typeof a.debug?a.debug("Unhandled received MESSAGE: "+b):void 0);break;case "RECEIPT":l.push("function"===typeof a.onreceipt?a.onreceipt(b):void 0);break;case "ERROR":l.push("function"===typeof c?c(b):void 0);break;default:l.push("function"===typeof a.debug?a.debug("Unhandled frame: "+b):void 0)}return l}}}(this);this.ws.onclose=
function(a){return function(){var b;b="Whoops! Lost connection to "+a.ws.url;"function"===typeof a.debug&&a.debug(b);a._cleanUp();return"function"===typeof c?c(b):void 0}}(this);return this.ws.onopen=function(a){return function(){"function"===typeof a.debug&&a.debug("Web Socket Opened...");b["accept-version"]=f.VERSIONS.supportedVersions();b["heart-beat"]=[a.heartbeat.outgoing,a.heartbeat.incoming].join();return a._transmit("CONNECT",b)}}(this)};d.prototype.disconnect=function(a,c){null==c&&(c={});
this._transmit("DISCONNECT",c);this.ws.onclose=null;this.ws.close();this._cleanUp();return"function"===typeof a?a():void 0};d.prototype._cleanUp=function(){this.connected=!1;this.pinger&&f.clearInterval(this.pinger);if(this.ponger)return f.clearInterval(this.ponger)};d.prototype.send=function(a,c,b){null==c&&(c={});null==b&&(b="");c.destination=a;return this._transmit("SEND",c,b)};d.prototype.subscribe=function(a,c,b){var d;null==b&&(b={});b.id||(b.id="sub-"+this.counter++);b.destination=a;this.subscriptions[b.id]=
c;this._transmit("SUBSCRIBE",b);d=this;return{id:b.id,unsubscribe:function(){return d.unsubscribe(b.id)}}};d.prototype.unsubscribe=function(a){delete this.subscriptions[a];return this._transmit("UNSUBSCRIBE",{id:a})};d.prototype.begin=function(a){var c,b;b=a||"tx-"+this.counter++;this._transmit("BEGIN",{transaction:b});c=this;return{id:b,commit:function(){return c.commit(b)},abort:function(){return c.abort(b)}}};d.prototype.commit=function(a){return this._transmit("COMMIT",{transaction:a})};d.prototype.abort=
function(a){return this._transmit("ABORT",{transaction:a})};d.prototype.ack=function(a,c,b){null==b&&(b={});b["message-id"]=a;b.subscription=c;return this._transmit("ACK",b)};d.prototype.nack=function(a,c,b){null==b&&(b={});b["message-id"]=a;b.subscription=c;return this._transmit("NACK",b)};return d}();f={VERSIONS:{V1_0:"1.0",V1_1:"1.1",V1_2:"1.2",supportedVersions:function(){return"1.1,1.0"}},client:function(d,k){var a;null==k&&(k=["v10.stomp","v11.stomp"]);a=new (f.WebSocketClass||WebSocket)(d,
k);return new m(a)},over:function(d){return new m(d)},Frame:r};"undefined"!==typeof exports&&null!==exports&&(exports.Stomp=f);"undefined"!==typeof window&&null!==window?(f.setInterval=function(d,f){return window.setInterval(f,d)},f.clearInterval=function(d){return window.clearInterval(d)},window.Stomp=f):exports||(self.Stomp=f)}).call(this);