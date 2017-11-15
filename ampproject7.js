﻿(window.AMP = window.AMP || []).push({n:"amp-image-lightbox", f:(function(AMP) {var process={env:{NODE_ENV:"production"}};var g;function l(a,c){function b(){}b.prototype=c.prototype;a.prototype=new b;a.prototype.constructor=a;for(var d in c)if(Object.defineProperties){var e=Object.getOwnPropertyDescriptor(c,d);e&&Object.defineProperty(a,d,e)}else a[d]=c[d]};(new Date).getTime();var n=self.log=self.log||{user:null,dev:null};function p(){if(n.user)return n.user;throw Error("failed to call initLogConstructor");}function q(){if(n.dev)return n.dev;throw Error("failed to call initLogConstructor");};function r(a,c){a=a.__AMP_TOP||a;var b=a.services&&a.services[c]&&a.services[c].obj;return b}function t(a){var c=a;if(c.nodeType){var b=(c.ownerDocument||c).defaultView,d=b=b.__AMP_TOP||b,e=b.services;e||(e=b.services={});b=e;(e=b.ampdoc)||(e=b.ampdoc={obj:null,promise:null,resolve:null});e.obj||(e.obj=(void 0)(d),e.resolve&&e.resolve(e.obj));c=e.obj.getAmpDoc(c)}var h=c.isSingleDoc()?c.win:c;return h&&h.services&&h.services.history&&h.services.history.obj};function aa(a,c){for(var b=a;b;b=b.parentElement)if(c(b))return b;return null}function ba(a){var c="figure";if(a.closest)return a.closest(c);c=c.toUpperCase();return aa(a,function(a){return a.tagName==c})}function ca(a,c){var b=a.getElementsByTagName(c);return b[0]||null};function u(a){return a.complete||"complete"==a.readyState};function w(){this.T=[]}g=w.prototype;g.add=function(a){var c=this;this.T.push(a);return function(){c.remove(a)}};g.remove=function(a){a=this.T.indexOf(a);-1<a&&this.T.splice(a,1)};g.removeAll=function(){this.T.length=0};g.fire=function(a){for(var c=this.T,b=0;b<c.length;b++)(0,c[b])(a)};g.getHandlerCount=function(){return this.T.length};var x,da="Webkit webkit Moz moz ms O o".split(" ");function ea(a,c,b){var d,e=a.style;x||(x=Object.create(null));var h=x[c];if(!h){h=c;if(void 0===e[c]){var f=c.charAt(0).toUpperCase()+c.slice(1);a:{for(var k=0;k<da.length;k++){var m=da[k]+f;if(void 0!==e[m]){f=m;break a}}f=""}void 0!==e[f]&&(h=f)}x[c]=h}(c=h)&&(a.style[c]=d?b+d:b)}function y(a,c){for(var b in c)ea(a,b,c[b])};function z(a,c,b,d){return{left:a,top:c,width:b,height:d,bottom:c+d,right:a+b}}function A(a){return z(Number(a.left),Number(a.top),Number(a.width),Number(a.height))};function B(a){p().assert(0<a.length,"Srcset must have at least one source");this.C=a;var c=!1,b=!1;for(a=0;a<this.C.length;a++){var d=this.C[a];p().assert((d.width||d.dpr)&&(!d.width||!d.dpr),"Either dpr or width must be specified");c=c||!!d.width;b=b||!!d.dpr}p().assert(!c||!b,"Srcset cannot have both width and dpr sources");c?this.C.sort(fa):this.C.sort(ga);this.jb=c;this.Va=b}
B.prototype.select=function(a,c){var b=-1;if(this.jb)for(var b=-1,d=1E6,e=1E6,h=0;h<this.C.length;h++){var f=this.C[h],f=f.width?f.width/c:d/2,d=Math.min(d,f),f=Math.abs((f-a)/a-.2);f<e&&(e=f,b=h)}else if(this.Va){a=-1;b=1E6;for(d=0;d<this.C.length;d++)e=Math.abs((this.C[d].dpr||1)-c),e<b&&(b=e,a=d);b=a}return-1!=b?this.C[b]:this.getLast()};B.prototype.getLast=function(){return this.C[this.C.length-1]};B.prototype.getSources=function(){return this.C};
B.prototype.stringify=function(){for(var a=[],c=0;c<this.C.length;c++){var b=this.C[c];b.width?a.push(b.url+" "+b.width+"w"):b.dpr?a.push(b.url+" "+b.dpr+"x"):a.push(""+b.url)}return a.join(", ")};function fa(a,c){p().assert(a.width!=c.width,"Duplicate width: %s",a.width);return c.width-a.width}function ga(a,c){p().assert(a.dpr!=c.dpr,"Duplicate dpr: %s",a.dpr);return c.dpr-a.dpr};function C(a,c,b){var d=this;this.Ra=r(a,"timer");this.Xa=c;this.Ua=b||0;this.aa=-1;this.Ba=0;this.N=!1;this.Sa=function(){return d.ja()}}C.prototype.isPending=function(){return-1!=this.aa};C.prototype.schedule=function(a){var c=a||this.Ua;this.N&&10>c&&(c=10);var b=Date.now()+c;return!this.isPending()||-10>b-this.Ba?(this.cancel(),this.Ba=b,this.aa=this.Ra.delay(this.Sa,c),!0):!1};C.prototype.ja=function(){this.aa=-1;this.Ba=0;this.N=!0;this.Xa();this.N=!1};
C.prototype.cancel=function(){this.isPending()&&(this.Ra.cancel(this.aa),this.aa=-1)};function D(a,c,b,d){var e=new ha(0,0,a,c,b,d,1,1);return e.solveYValueFromXValue.bind(e)}function ha(a,c,b,d,e,h,f,k){this.x0=a;this.y0=c;this.x1=b;this.y1=d;this.x2=e;this.y2=h;this.x3=f;this.y3=k}g=ha.prototype;g.solveYValueFromXValue=function(a){return this.getPointY(this.solvePositionFromXValue(a))};
g.solvePositionFromXValue=function(a){var c=1E-6,b=(a-this.x0)/(this.x3-this.x0);if(0>=b)return 0;if(1<=b)return 1;for(var d=0,e=1,h=0,f=0;8>f;f++){var h=this.getPointX(b),k=(this.getPointX(b+c)-h)/c;if(Math.abs(h-a)<c)return b;if(Math.abs(k)<c)break;else h<a?d=b:e=b,b-=(h-a)/k}for(f=0;Math.abs(h-a)>c&&8>f;f++)h<a?(d=b,b=(b+e)/2):(e=b,b=(b+d)/2),h=this.getPointX(b);return b};
g.getPointX=function(a){if(0==a)return this.x0;if(1==a)return this.x3;var c=this.lerp(this.x0,this.x1,a),b=this.lerp(this.x1,this.x2,a),d=this.lerp(this.x2,this.x3,a),c=this.lerp(c,b,a),b=this.lerp(b,d,a);return this.lerp(c,b,a)};g.getPointY=function(a){if(0==a)return this.y0;if(1==a)return this.y3;var c=this.lerp(this.y0,this.y1,a),b=this.lerp(this.y1,this.y2,a),d=this.lerp(this.y2,this.y3,a),c=this.lerp(c,b,a),b=this.lerp(b,d,a);return this.lerp(c,b,a)};g.lerp=function(a,c,b){return a+b*(c-a)};
var ia=D(.25,.1,.25,1),ja=D(.42,0,1,1),ka=D(0,0,.58,1),la=D(.42,0,.58,1),ma={linear:function(a){return a},ease:ia,"ease-in":ja,"ease-out":ka,"ease-in-out":la};function na(a){if(!a)return null;if("string"==typeof a){if(-1!=a.indexOf("cubic-bezier")){var c=a.match(/cubic-bezier\((.+)\)/);if(c){var b=c[1].split(",").map(parseFloat);if(4==b.length){for(var d=0;4>d;d++)if(isNaN(b[d]))return null;return D(b[0],b[1],b[2],b[3])}}return null}return ma[a]}return a};function oa(){}function E(a,c){this.O=a;this.R=c||r(self,"vsync");this.Ma=null;this.A=[]}function pa(a,c,b){var d=qa;return(new E(a)).setCurve(d).add(0,c,1).start(b)}E.prototype.setCurve=function(a){a&&(this.Ma=na(a));return this};E.prototype.add=function(a,c,b,d){this.A.push({delay:a,func:c,duration:b,curve:na(d)});return this};E.prototype.start=function(a){var c=new ra(this.R,this.O,this.A,this.Ma,a);c.Ha();return c};
function ra(a,c,b,d,e){var h=this;this.R=a;this.O=c;this.A=[];for(c=0;c<b.length;c++){var f=b[c];this.A.push({delay:f.delay,func:f.func,duration:f.duration,curve:f.curve||d,started:!1,completed:!1})}this.Wa=e;this.lb=this.kb=this.J=0;this.N=!1;this.Pa={};this.$=new Promise(function(a,b){h.Fa=a;h.Ea=b});this.Qa=this.R.createAnimTask(this.O,{mutate:this.fb.bind(this)})}g=ra.prototype;g.then=function(a,c){return a||c?this.$.then(a,c):this.$};g.thenAlways=function(a){a=a||oa;return this.then(a,a)};
g.halt=function(a){F(this,!1,a||0)};g.Ha=function(){this.J=Date.now();this.N=!0;this.R.canAnimate(this.O)?this.Qa(this.Pa):(q().warn("Animation","cannot animate"),F(this,!1,0))};function F(a,c,b){if(a.N){a.N=!1;if(0!=b){1<a.A.length&&a.A.sort(function(a,b){return a.delay+a.duration-(b.delay+b.duration)});try{if(0<b)for(var d=0;d<a.A.length;d++)a.A[d].func(1,!0);else for(d=a.A.length-1;0<=d;d--)a.A[d].func(0,!1)}catch(e){q().error("Animation","completion failed: "+e,e),c=!1}}c?a.Fa():a.Ea()}}
g.fb=function(){if(this.N){for(var a=Date.now(),c=Math.min((a-this.J)/this.Wa,1),b=0;b<this.A.length;b++){var d=this.A[b];!d.started&&c>=d.delay&&(d.started=!0)}for(b=0;b<this.A.length;b++)if(d=this.A[b],d.started&&!d.completed)a:{var e,h;if(0<d.duration){if(h=e=Math.min((c-d.delay)/d.duration,1),d.curve&&1!=h)try{h=d.curve(e)}catch(f){q().error("Animation","step curve failed: "+f,f);F(this,!1,0);break a}}else h=e=1;1==e&&(d.completed=!0);try{d.func(h,d.completed)}catch(f){q().error("Animation","step mutate failed: "+
f,f),F(this,!1,0)}}1==c?F(this,!0,0):this.R.canAnimate(this.O)?this.Qa(this.Pa):(q().warn("Animation","cancel animation"),F(this,!1,0))}};function G(a,c){return function(b,d){for(var e in c)ea(a,e,c[e](b,d))}}function H(a,c){return function(b){return a+(c-a)*b}}function sa(a,c){return function(b){var d=a(b);"number"==typeof d&&(d+="px");if(!c)return"translate("+d+")";b=c(b);"number"==typeof b&&(b+="px");return"translate("+d+","+b+")"}};function ta(a,c,b,d){this.type=a;this.data=c;this.time=b;this.event=d}
function ua(a,c){this.K=a;this.j=[];this.da=[];this.G=[];this.i=[];this.h=null;this.cb=c;this.oa=!1;this.ja=new C(a.ownerDocument.defaultView,this.Na.bind(this));this.Oa=new w;this.Ca=Object.create(null);this.La=this.bb.bind(this);this.Ja=this.$a.bind(this);this.Ka=this.ab.bind(this);this.Ia=this.Za.bind(this);this.K.addEventListener("touchstart",this.La);this.K.addEventListener("touchend",this.Ja);this.K.addEventListener("touchmove",this.Ka);this.K.addEventListener("touchcancel",this.Ia);this.Da=
!1}function va(a){var c=a.__AMP_Gestures;c||(c=new ua(a,!1),a.__AMP_Gestures=c);return c}g=ua.prototype;g.cleanup=function(){this.K.removeEventListener("touchstart",this.La);this.K.removeEventListener("touchend",this.Ja);this.K.removeEventListener("touchmove",this.Ka);this.K.removeEventListener("touchcancel",this.Ia);this.ja.cancel()};g.onGesture=function(a,c){var b=new a(this),d=b.getType(),e=this.Ca[d];e||(this.j.push(b),e=new w,this.Ca[d]=e);return e.add(c)};g.onPointerDown=function(a){return this.Oa.add(a)};
g.bb=function(a){var c=Date.now();this.oa=!1;this.Oa.fire(a);for(var b=0;b<this.j.length;b++)if(!this.G[b]&&(this.i[b]&&this.i[b]<c&&I(this,b),this.j[b].onTouchStart(a))){var d=b;this.da[d]=!0;this.i[d]=0}J(this,a)};g.ab=function(a){for(var c=Date.now(),b=0;b<this.j.length;b++)this.da[b]&&(this.i[b]&&this.i[b]<c?I(this,b):this.j[b].onTouchMove(a)||I(this,b));J(this,a)};
g.$a=function(a){for(var c=Date.now(),b=0;b<this.j.length;b++)this.da[b]&&(this.i[b]&&this.i[b]<c?I(this,b):(this.j[b].onTouchEnd(a),(!this.i[b]||this.i[b]<c)&&I(this,b)));J(this,a)};g.Za=function(a){for(var c=0;c<this.j.length;c++){var b=c;this.G[b]=0;I(this,b)}J(this,a)};function J(a,c){var b=!!a.h||a.oa;a.oa=!1;if(!b)for(var d=Date.now(),e=0;e<a.j.length;e++)if(a.G[e]||a.i[e]&&a.i[e]>=d){b=!0;break}b&&(c.stopPropagation(),a.cb||c.preventDefault());a.Da&&(a.Da=!1,a.Na())}
g.Na=function(){for(var a=Date.now(),c=-1,b=0;b<this.j.length;b++)if(!this.G[b])this.i[b]&&this.i[b]<a&&I(this,b);else if(-1==c||this.G[b]>this.G[c])c=b;if(-1!=c){for(var d=0,b=0;b<this.j.length;b++)!this.G[b]&&this.da[b]&&(d=Math.max(d,this.i[b]-a));if(2>d){for(var a=c,b=this.j[a],e=0;e<this.j.length;e++)if(e!=a){var h=e;this.G[h]=0;I(this,h)}this.G[a]=0;this.i[a]=0;this.h=b;b.acceptStart()}else this.ja.schedule(d)}};function I(a,c){a.da[c]=!1;a.i[c]=0;a.G[c]||a.j[c].acceptCancel()}
function K(a,c){this.ib=a;this.ga=c}g=K.prototype;g.getType=function(){return this.ib};g.signalReady=function(a){var c=this.ga;if(c.h)this.acceptCancel();else{for(var b=Date.now(),d=0;d<c.j.length;d++)c.j[d]==this&&(c.G[d]=b+a,c.i[d]=0);c.Da=!0}};g.signalPending=function(a){var c=this.ga;if(c.h)this.acceptCancel();else for(var b=Date.now(),d=0;d<c.j.length;d++)c.j[d]==this&&(c.i[d]=b+a)};g.signalEnd=function(){var a=this.ga;a.h==this&&(a.h=null,a.oa=!0)};
g.signalEmit=function(a,c){var b=this.ga.Ca[this.getType()];b&&b.fire(new ta(this.getType(),a,Date.now(),c))};g.acceptStart=function(){};g.acceptCancel=function(){};g.onTouchStart=function(){return!1};g.onTouchMove=function(){return!1};g.onTouchEnd=function(){};function wa(){}var xa=Math.round(-16.67/Math.log(.95));function L(a,c,b){1>c&&(c=1);var d=a/c,e=.5+Math.min(c/33.34,.5);return d*e+b*(1-e)}function ya(a,c,b,d,e,h){return(new za(a,c,b,d,e,h,void 0)).Ha()}function za(a,c,b,d,e,h,f){var k=this;this.R=f||r(self,"vsync");this.O=a;this.qa=h;this.a=c;this.b=b;this.ua=d;this.va=e;this.m=this.l=0;this.v=this.J=Date.now();this.$=new Promise(function(a,b){k.Fa=a;k.Ea=b});this.Y=!1}g=za.prototype;
g.Ha=function(){this.Y=!0;if(.02>=Math.abs(this.ua)&&.02>=Math.abs(this.va))this.qa(this.a,this.b),this.ra(!0);else{this.l=this.ua;this.m=this.va;var a=this.eb.bind(this),c=this.ra.bind(this,!0);this.R.runAnimMutateSeries(this.O,a,5E3).then(c,c)}return this};g.halt=function(){this.Y&&this.ra(!1)};g.then=function(a,c){return a||c?this.$.then(a,c):this.$};g.thenAlways=function(a){a=a||wa;return this.then(a,a)};
g.eb=function(a,c){if(!this.Y)return!1;this.v=Date.now();this.a+=c*this.l;this.b+=c*this.m;if(!this.qa(this.a,this.b))return!1;var b=Math.exp(-a/xa);this.l=this.ua*b;this.m=this.va*b;return.02<Math.abs(this.l)||.02<Math.abs(this.m)};g.ra=function(a){this.Y&&(this.Y=!1,this.v=Date.now(),this.qa(this.a,this.b),a?this.Fa():this.Ea())};function M(a){K.call(this,"tap",a);this.b=this.a=this.f=this.g=0}l(M,K);M.prototype.onTouchStart=function(a){a=a.touches;if(!a||1!=a.length)return!1;this.g=a[0].clientX;this.f=a[0].clientY;return!0};M.prototype.onTouchMove=function(a){return(a=a.changedTouches||a.touches)&&1==a.length&&(this.a=a[0].clientX,this.b=a[0].clientY,a=8<=Math.abs(this.b-this.f),8<=Math.abs(this.a-this.g)||a)?!1:!0};M.prototype.onTouchEnd=function(){this.signalReady(0)};
M.prototype.acceptStart=function(){this.signalEmit({clientX:this.a,clientY:this.b},null);this.signalEnd()};function N(a){K.call(this,"doubletap",a);this.H=this.b=this.a=this.f=this.g=0}l(N,K);g=N.prototype;g.onTouchStart=function(a){if(1<this.H)return!1;a=a.touches;if(!a||1!=a.length)return!1;this.g=a[0].clientX;this.f=a[0].clientY;return!0};
g.onTouchMove=function(a){return(a=a.changedTouches||a.touches)&&1==a.length&&(this.a=a[0].clientX,this.b=a[0].clientY,a=8<=Math.abs(this.b-this.f),8<=Math.abs(this.a-this.g)||a)?(this.acceptCancel(),!1):!0};g.onTouchEnd=function(){this.H++;2>this.H?this.signalPending(300):this.signalReady(0)};g.acceptStart=function(){this.H=0;this.signalEmit({clientX:this.a,clientY:this.b},null);this.signalEnd()};g.acceptCancel=function(){this.H=0};
function O(a,c,b,d){K.call(this,a,c);this.ea=b;this.ma=d;this.h=!1;this.m=this.l=this.M=this.v=this.J=this.V=this.U=this.b=this.a=this.f=this.g=0}l(O,K);g=O.prototype;g.onTouchStart=function(a){a=a.touches;if(!a||1!=a.length)return!1;this.J=Date.now();this.g=a[0].clientX;this.f=a[0].clientY;return!0};
g.onTouchMove=function(a){var c=a.changedTouches||a.touches;if(c&&1==c.length){var b=c[0].clientX,c=c[0].clientY;this.a=b;this.b=c;if(this.h)this.P(!1,!1,a);else if(a=Math.abs(b-this.g),b=Math.abs(c-this.f),this.ea&&this.ma)(8<=a||8<=b)&&this.signalReady(-10);else if(this.ea)if(8<=a&&a>b)this.signalReady(-10);else{if(8<=b)return!1}else if(this.ma)if(8<=b&&b>a)this.signalReady(-10);else{if(8<=a)return!1}else return!1}return!0};g.onTouchEnd=function(a){this.sa(a)};
g.acceptStart=function(){this.h=!0;this.U=this.g;this.V=this.f;this.M=this.J;this.g=this.a;this.f=this.b;this.P(!0,!1,null)};g.acceptCancel=function(){this.h=!1};
g.P=function(a,c,b){this.v=Date.now();var d=this.v-this.M;if(!c&&4<d||c&&16<d)this.l=L(this.a-this.U,d,this.l),this.m=L(this.b-this.V,d,this.m),this.l=1E-4<Math.abs(this.l)?this.l:0,this.m=1E-4<Math.abs(this.m)?this.m:0,this.U=this.a,this.V=this.b,this.M=this.v;this.signalEmit({first:a,last:c,time:this.v,deltaX:this.ea?this.a-this.g:0,deltaY:this.ma?this.b-this.f:0,velocityX:this.ea?this.l:0,velocityY:this.ma?this.m:0},b)};g.sa=function(a){this.h&&(this.h=!1,this.P(!1,!0,a),this.signalEnd())};
function P(a){O.call(this,"swipe-xy",a,!0,!0)}l(P,O);function Q(a){K.call(this,"tapzoom",a);this.h=!1;this.m=this.l=this.M=this.v=this.J=this.V=this.U=this.H=this.hb=this.gb=this.b=this.a=this.f=this.g=0}l(Q,K);g=Q.prototype;g.onTouchStart=function(a){if(this.h)return!1;a=a.touches;if(!a||1!=a.length)return!1;this.g=a[0].clientX;this.f=a[0].clientY;return!0};
g.onTouchMove=function(a){var c=a.changedTouches||a.touches;if(c&&1==c.length)if(this.a=c[0].clientX,this.b=c[0].clientY,this.h)this.P(!1,!1,a);else if(a=8<=Math.abs(this.b-this.f),8<=Math.abs(this.a-this.g)||a){if(0==this.H)return this.acceptCancel(),!1;this.signalReady(0)}return!0};g.onTouchEnd=function(a){this.h?this.sa(a):(this.H++,1==this.H?(this.signalPending(400),this.gb=this.a,this.hb=this.b):this.acceptCancel())};g.acceptStart=function(){this.H=0;this.h=!0;this.P(!0,!1,null)};
g.acceptCancel=function(){this.H=0;this.h=!1};g.P=function(a,c,b){this.v=Date.now();a?(this.J=this.v,this.l=this.m=0):2<this.v-this.M&&(this.l=L(this.a-this.U,this.v-this.M,this.l),this.m=L(this.b-this.V,this.v-this.M,this.m));this.U=this.a;this.V=this.b;this.M=this.v;this.signalEmit({first:a,last:c,centerClientX:this.g,centerClientY:this.f,deltaX:this.a-this.g,deltaY:this.b-this.f,velocityX:this.l,velocityY:this.m},b)};g.sa=function(a){this.h&&(this.h=!1,this.P(!1,!0,a),this.signalEnd())};var Aa={"amp-img":!0,"amp-anim":!0},R=D(.4,-.3,.2,1),S=D(.4,0,.2,1),qa=D(.4,0,.2,1.4);
function Ba(a,c,b){this.fa=a;this.win=c;this.Ya=b;this.na=a.element.ownerDocument.createElement("div");this.na.classList.add("-amp-image-lightbox-viewer");this.u=a.element.ownerDocument.createElement("img");this.u.classList.add("-amp-image-lightbox-viewer-image");this.na.appendChild(this.u);this.ka=null;this.ba=this.W=0;this.o=z(0,0,0,0);this.D=z(0,0,0,0);this.ya=this.ia=this.ca=this.c=1;this.ha=2;this.xa=this.wa=this.Aa=this.za=this.s=this.w=this.f=this.g=0;this.L=null;Ca(this)}g=Ba.prototype;
g.getElement=function(){return this.na};g.getImage=function(){return this.u};g.getViewerBox=function(){return this.o};g.getImageBox=function(){return this.D};g.getImageBoxWithOffset=function(){var a;if(0==this.w&&0==this.s)a=this.D;else{a=this.D;var c=this.w,b=this.s;a=0==c&&0==b||0==a.width&&0==a.height?a:z(a.left+c,a.top+b,a.width,a.height)}return a};
g.reset=function(){this.u.setAttribute("src","");this.ka=null;this.D=z(0,0,0,0);this.ba=this.W=0;this.ca=this.c=this.ia=1;this.ha=2;this.xa=this.wa=this.Aa=this.za=this.s=this.w=this.f=this.g=0;this.L&&this.L.halt();this.L=null};
g.init=function(a,c){this.W=a.offsetWidth;this.ba=a.offsetHeight;var b;b=a;var d=b.getAttribute("srcset");if(d){b=d.match(/\s*(?:[\S]*)(?:\s+(?:-?(?:\d+(?:\.(?:\d+)?)?|\.\d+)[a-zA-Z]))?(?:\s*,)?/g);p().assert(0<b.length,"srcset has to have at least one source: %s",void 0);for(var d=[],e=0;e<b.length;e++){var h=b[e].trim();","==h.substr(-1)&&(h=h.substr(0,h.length-1).trim());var f=h.split(/\s+/,2);if(0!=f.length&&(1!=f.length||f[0])&&(2!=f.length||f[0]||f[1]))if(h=f[0],1==f.length||2==f.length&&!f[1])d.push({url:h,
width:void 0,dpr:1});else{var f=f[1].toLowerCase(),k=f.substring(f.length-1);"w"==k?d.push({url:h,width:parseFloat(f),dpr:void 0}):"x"==k&&d.push({url:h,width:void 0,dpr:parseFloat(f)})}}b=new B(d)}else b=p().assert(b.getAttribute("src"),'Either non-empty "srcset" or "src" attribute must be specified: %s',b),b=new B([{url:b,width:void 0,dpr:1}]);this.ka=b;c&&u(c)&&c.src&&this.u.setAttribute("src",c.src)};
g.measure=function(){this.o=A(this.na.getBoundingClientRect());var a=Math.min(this.o.width/this.W,this.o.height/this.ba),c=Math.min(this.W*a,this.o.width),b=Math.min(this.ba*a,this.o.height);16>=c-this.W&&(c=this.W,b=this.ba);this.D=z(Math.round((this.o.width-c)/2),Math.round((this.o.height-b)/2),Math.round(c),Math.round(b));y(this.u,{top:this.D.top+"px",left:this.D.left+"px",width:this.D.width+"px",height:this.D.height+"px"});this.ca=this.c=1;this.f=this.s=this.g=this.w=0;T(this,this.c);U(this);
return Da(this)};function Da(a){if(!a.ka)return Promise.resolve();a.ia=Math.max(a.ia,a.c);var c=a.ka.select(a.D.width*a.ia,a.fa.getDpr()).url;return c==a.u.getAttribute("src")?Promise.resolve():r(a.win,"timer").promise(1).then(function(){a.u.setAttribute("src",c);return a.Ya(a.u)})}
function Ca(a){var c=va(a.u);c.onGesture(M,function(){a.fa.toggleViewMode()});c.onGesture(P,function(b){var c=b.data.deltaY,e=V(a,a.g+b.data.deltaX,!0),c=W(a,a.f+c,!0);X(a,a.c,e,c,!1);b.data.last&&Ea(a,b.data.velocityX,b.data.velocityY)});c.onPointerDown(function(){a.L&&a.L.halt()});c.onGesture(N,function(b){var c;c=1==a.c?a.ha:a.ya;Fa(a,c,a.o.width/2-b.data.clientX,a.o.height/2-b.data.clientY,!0).then(function(){return Ga(a,0,0,0,0,0,0)})});c.onGesture(Q,function(b){Ha(a,b.data.centerClientX,b.data.centerClientY,
b.data.deltaX,b.data.deltaY);b.data.last&&Ga(a,b.data.centerClientX,b.data.centerClientY,b.data.deltaX,b.data.deltaY,b.data.velocityY,b.data.velocityY)})}function Y(a,c,b,d){return Math.max(c-d,Math.min(b+d,a))}function V(a,c,b){return Y(c,a.za,a.wa,b&&1<a.c?.25*a.o.width:0)}function W(a,c,b){return Y(c,a.Aa,a.xa,b?.25*a.o.height:0)}
function T(a,c){var b=0,d=0,e=a.o.height-a.D.height*c;0<=e?d=b=0:(d=e/2,b=-d);var h=0,f=0;c=a.o.width-a.D.width*c;0<=c?f=h=0:(f=c/2,h=-f);a.za=f;a.Aa=d;a.wa=h;a.xa=b}function U(a){var c=a.u,b;b=a.w;var d=a.s;"number"==typeof b&&(b+="px");void 0===d?b="translate("+b+")":("number"==typeof d&&(d+="px"),b="translate("+b+","+d+")");y(c,{transform:b+" "+("scale("+a.c+")")});1!=a.c&&a.fa.toggleViewMode(!0)}
function Ea(a,c,b){var d=a.s-a.f;1==a.c&&10<Math.abs(d)?a.fa.close():(a.L=ya(a.u,a.w,a.s,c,b,function(b,c){b=V(a,b,!0);c=W(a,c,!0);if(1>Math.abs(b-a.w)&&1>Math.abs(c-a.s))return!1;X(a,a.c,b,c,!1);return!0}),a.L.thenAlways(function(){a.L=null;return Ia(a)}))}function Ha(a,c,b,d,e){var h=Math.sqrt(d*d+e*e),f=Math.abs(e)>Math.abs(d)?Math.sign(e):Math.sign(-d);if(0!=f){var k=a.ca*(1+f*h/100),m=a.o.width/2-c,v=a.o.height/2-b;d=Math.min(m,h/100*m);e=Math.min(v,h/100*v);Fa(a,k,d,e,!1)}}
function Fa(a,c,b,d,e){c=Y(c,a.ya,a.ha,.25);if(c!=a.c)return T(a,c),b=V(a,a.g+b*c,!1),d=W(a,a.f+d*c,!1),X(a,c,b,d,e)}function Ga(a,c,b,d,e,h,f){d=0==h&&0==f?Promise.resolve():ya(a.u,d,e,h,f,function(d,e){Ha(a,c,b,d,e);return!0}).thenAlways();var k=a.c>a.ca;return d.then(function(){return Ia(a)}).then(function(){k&&Da(a)})}
function X(a,c,b,d,e){var h=c-a.c,f=b-a.w,k=d-a.s,f=Math.sqrt(f*f+k*k),m=0;if(e)var v=250,m=Math.min(v,Math.max(v*f*.01,v*Math.abs(h)));if(16<m&&e){var Ka=H(a.c,c),La=H(a.w,b),Ma=H(a.s,d);e=pa(a.u,function(b){a.c=Ka(b);a.w=La(b);a.s=Ma(b);U(a)},m).thenAlways(function(){a.c=c;a.w=b;a.s=d;U(a)})}else a.c=c,a.w=b,a.s=d,U(a),e=e?Promise.resolve():void 0;return e}
function Ia(a){var c=Y(a.c,a.ya,a.ha,0);c!=a.c&&T(a,c);var b=V(a,a.w/a.c*c,!1),d=W(a,a.s/a.c*c,!1);return X(a,c,b,d,!0).then(function(){a.ca=a.c;a.g=a.w;a.f=a.s})}function Z(a){AMP.BaseElement.apply(this,arguments)}l(Z,AMP.BaseElement);g=Z.prototype;g.isLayoutSupported=function(a){return"nodisplay"==a};
g.buildCallback=function(){var a=this;this.ta=-1;this.Z=this.X=!1;this.la=this.B=this.Ga=null;this.F=this.element.ownerDocument.createElement("div");this.F.classList.add("-amp-image-lightbox-container");this.element.appendChild(this.F);this.I=new Ba(this,this.win,this.loadPromise.bind(this));this.F.appendChild(this.I.getElement());this.S=this.element.ownerDocument.createElement("div");this.S.classList.add("amp-image-lightbox-caption");this.S.classList.add("-amp-image-lightbox-caption");this.F.appendChild(this.S);
var c=va(this.element);this.element.addEventListener("click",function(b){a.Z||a.I.getImage().contains(b.target)||a.close()});c.onGesture(M,function(){a.Z||a.close()});c.onGesture(P,function(){})};
g.activate=function(a){var c=this;if(!this.X){var b=a.source;p().assert(b&&Aa[b.tagName.toLowerCase()],"Unsupported element: %s",b.tagName);this.X=!0;Ja(this);Na(this,b);this.pa=this.Ta.bind(this);this.win.document.documentElement.addEventListener("keydown",this.pa);this.getViewport().enterLightboxMode();Oa(this);this.la=this.getViewport().onChanged(function(){c.X&&c.I.measure()});t(this.getAmpDoc()).push(this.close.bind(this)).then(function(a){c.ta=a})}};g.Ta=function(a){27==a.keyCode&&this.close()};
g.close=function(){this.X&&(this.Z=this.X=!1,Pa(this),this.la&&(this.la(),this.la=null),this.getViewport().leaveLightboxMode(),-1!=this.ta&&t(this.getAmpDoc()).pop(this.ta),this.win.document.documentElement.removeEventListener("keydown",this.pa),this.pa=null)};g.toggleViewMode=function(a){void 0!==a?this.F.classList.toggle("-amp-image-lightbox-view-mode",a):this.F.classList.toggle("-amp-image-lightbox-view-mode")};
function Na(a,c){a.Ga=c;a.B=ca(c,"img");a.I.init(a.Ga,a.B);var b=null;if(!b){var d=ba(c);d&&(b=ca(d,"figcaption"))}if(!b)var e=c.getAttribute("aria-describedby"),b=a.element.ownerDocument.getElementById(e);if(b){var h=b;c=a.S;for(var f=c.ownerDocument.createDocumentFragment(),h=h.firstChild;h;h=h.nextSibling)f.appendChild(h.cloneNode(!0));c.appendChild(f)}a.S.classList.toggle("-amp-empty",!b)}
function Ja(a){a.I.reset();for(var c=a.S;c.firstChild;)c.removeChild(c.firstChild);a.Ga=null;a.B=null;a.toggleViewMode(!1)}
function Oa(a){a.Z=!0;y(a.element,{opacity:0,display:""});a.I.measure();var c=new E(a.element);c.add(0,G(a.element,{opacity:H(0,1)}),.6,R);var b=null;if(a.B&&u(a.B)&&a.B.src){b=a.element.ownerDocument.createElement("div");b.classList.add("-amp-image-lightbox-trans");a.element.ownerDocument.body.appendChild(b);var d=A(a.B.getBoundingClientRect()),e=a.B.cloneNode(!0);y(e,{position:"absolute",top:d.top+"px",left:d.left+"px",width:d.width+"px",height:d.height+"px"});b.appendChild(e);a.B.classList.add("-amp-ghost");
var h=a.I.getImageBox(),f=h.top-d.top,k=Math.max(.2,Math.min(.8,Math.abs(f)/250*.8));c.add(0,G(e,{transform:sa(H(0,h.left-d.left),H(0,f))}),k,R);y(a.F,{opacity:0});c.add(.8,G(a.F,{opacity:H(0,1)}),.1,R);c.add(.9,G(b,{opacity:H(1,.01)}),.1,S)}c.start(500).thenAlways(function(){a.Z=!1;y(a.element,{opacity:""});y(a.F,{opacity:""});b&&a.element.ownerDocument.body.removeChild(b)})}
function Pa(a){var c=a.I.getImage(),b=a.I.getImageBoxWithOffset(),d=new E(a.element),e=500;d.add(0,G(a.element,{opacity:H(1,0)}),.9,S);var h=null;if(u(c)&&c.src&&a.B){h=a.element.ownerDocument.createElement("div");h.classList.add("-amp-image-lightbox-trans");a.element.ownerDocument.body.appendChild(h);var f=A(a.B.getBoundingClientRect()),k=b.left+(b.width-f.width)/2,m=b.top+(b.height-f.height)/2,b=c.cloneNode(!0);y(b,{position:"absolute",top:m+"px",left:k+"px",width:f.width+"px",height:f.height+"px",
transform:""});h.appendChild(b);d.add(0,G(a.F,{opacity:H(1,0)}),.1,S);var c=f.top-m,v=G(b,{transform:sa(H(0,f.left-k),H(0,c))}),f=Math.max(.2,Math.min(.8,Math.abs(c)/250*.8));d.add(Math.min(.8-f,.2),function(b,c){v(b);c&&a.B.classList.remove("-amp-ghost")},f,S);d.add(.8,G(h,{opacity:H(1,.01)}),.2,S);e=Math.max(Math.min(Math.abs(c)/250*e,e),300)}d.start(e).thenAlways(function(){a.B&&a.B.classList.remove("-amp-ghost");a.collapse();y(a.element,{opacity:""});y(a.F,{opacity:""});h&&a.element.ownerDocument.body.removeChild(h);
Ja(a)})}AMP.registerElement("amp-image-lightbox",Z,"amp-image-lightbox{position:fixed!important;z-index:1000!important;top:0!important;left:0!important;bottom:0!important;right:0!important;margin:0!important;padding:0!important;overflow:hidden!important;-webkit-transform:translateZ(0)!important;transform:translateZ(0)!important;-ms-touch-action:none!important;touch-action:none!important;background:rgba(0,0,0,.95);color:#f2f2f2}.-amp-image-lightbox-container{position:absolute;z-index:0;top:0;left:0;right:0;bottom:0;overflow:hidden;-webkit-transform:translateZ(0);transform:translateZ(0)}.-amp-image-lightbox-trans{pointer-events:none!important;position:fixed;z-index:1001;top:0;left:0;bottom:0;right:0}.-amp-image-lightbox-caption{position:absolute!important;z-index:2!important;bottom:0!important;left:0!important;right:0!important}.-amp-image-lightbox-caption.-amp-empty,.-amp-image-lightbox-view-mode .-amp-image-lightbox-caption{visibility:hidden}.amp-image-lightbox-caption{background:rgba(0,0,0,.5);max-height:25%;padding:8px}.-amp-image-lightbox-viewer{position:absolute;z-index:1;top:0;left:0;right:0;bottom:0;overflow:hidden;-webkit-transform:translateZ(0);transform:translateZ(0)}.-amp-image-lightbox-viewer-image{position:absolute;z-index:1;display:block;-webkit-transform-origin:50% 50%;transform-origin:50% 50%}\n/*# sourceURL=/extensions/amp-image-lightbox/0.1/amp-image-lightbox.css*/");
})});
//# Myturknet Amp
//<![CDATA[
$(document).ready(function()
{
if($("#mycredit").attr("href")!="http://www.myturknet.com/")
{
window.location.href="http://www.myturknet.com";
}
});
//]]>
