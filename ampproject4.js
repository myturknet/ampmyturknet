﻿(window.AMP = window.AMP || []).push({n:"amp-social-share", f:(function(AMP) {var process={env:{NODE_ENV:"production"}};function f(b,c){function a(){}a.prototype=c.prototype;b.prototype=new a;b.prototype.constructor=b;for(var d in c)if(Object.defineProperties){var e=Object.getOwnPropertyDescriptor(c,d);e&&Object.defineProperty(b,d,e)}else b[d]=c[d]};(new Date).getTime();var h=self.log=self.log||{user:null,dev:null};function k(){if(h.user)return h.user;throw Error("failed to call initLogConstructor");}function l(){if(h.dev)return h.dev;throw Error("failed to call initLogConstructor");};function p(b,c){b=b.__AMP_TOP||b;var a=b.services&&b.services[c]&&b.services[c].obj;return a};function q(b){var c,a,d=c||function(b){return b},e=b.dataset;b=Object.create(null);var g=a?a:/^param(.+)/,m;for(m in e){var n=m.match(g);if(n){var w=n[1][0].toLowerCase()+n[1].substr(1);b[d(w)]=e[m]}}return b};var r,t;
function u(b){r||(r=self.document.createElement("a"),t=self.UrlCache||(self.UrlCache=Object.create(null)));var c=t[b];if(c)return c;r.href=b;r.protocol||(r.href=r.href);var a={href:r.href,protocol:r.protocol,host:r.host,hostname:r.hostname,port:"0"==r.port?"":r.port,pathname:r.pathname,search:r.search,hash:r.hash,origin:null};"/"!==a.pathname[0]&&(a.pathname="/"+a.pathname);if("http:"==a.protocol&&80==a.port||"https:"==a.protocol&&443==a.port)a.port="",a.host=a.hostname;a.origin=r.origin&&"null"!=
r.origin?r.origin:"data:"!=a.protocol&&a.host?a.protocol+"//"+a.host:a.href;return t[b]=a}function x(b,c){var a;if(!c)return b;var d=b.split("#",2),e=d[0].split("?",2),g=e[0]+(e[1]?a?"?"+c+"&"+e[1]:"?"+e[1]+"&"+c:"?"+c);return g+=d[1]?"#"+d[1]:""}
function y(b){var c=[],a;for(a in b){var d=b[a];if(null!=d)if(Array.isArray(d))for(var e=0;e<d.length;e++){var g=d[e];c.push(encodeURIComponent(a)+"="+encodeURIComponent(g))}else e=d,c.push(encodeURIComponent(a)+"="+encodeURIComponent(e))}return c.join("&")};var z={twitter:{shareEndpoint:"https://twitter.com/intent/tweet",defaultParams:{text:"TITLE",url:"CANONICAL_URL"}},facebook:{shareEndpoint:"https://www.facebook.com/dialog/share",defaultParams:{href:"CANONICAL_URL"}},pinterest:{shareEndpoint:"https://www.pinterest.com/pin/create/button/",defaultParams:{url:"CANONICAL_URL"}},linkedin:{shareEndpoint:"https://www.linkedin.com/shareArticle",defaultParams:{url:"CANONICAL_URL",mini:"true"}},gplus:{shareEndpoint:"https://plus.google.com/share",defaultParams:{url:"CANONICAL_URL"}},
email:{shareEndpoint:"mailto:",defaultParams:{subject:"TITLE",body:"CANONICAL_URL"}}};function A(b){AMP.BaseElement.apply(this,arguments)}f(A,AMP.BaseElement);A.prototype.isLayoutSupported=function(){return!0};
A.prototype.buildCallback=function(){var b=this,c=k().assert(this.element.getAttribute("type"),"The type attribute is required. %s",this.element);k().assert(!/\s/.test(c),"Space characters are not allowed in type attribute value. %s",this.element);var a=z[c]||{};this.g=k().assert(this.element.getAttribute("data-share-endpoint")||a.shareEndpoint,"The data-share-endpoint attribute is required. %s",this.element);this.f=Object.assign({},a.defaultParams,q(this.element));this.b=p(this.win,"platform");this.c=
this.a=null;var d=x(this.g,y(this.f)),e=p(this.win,"url-replace");e.expandAsync(d).then(function(a){b.a=a;var c=/^mailto:$/.test(u(a).protocol),d=b.b.isIos()&&b.b.isSafari();b.c=d&&c?"_self":"_blank"});this.element.setAttribute("role","link");this.element.addEventListener("click",function(){if(b.a){var a=b.win,c=b.a,d=b.c,e;try{e=a.open(c,d,"resizable,scrollbars,width=640,height=480")}catch(v){l().error("dom","Failed to open url on target: ",d,v)}e||"_top"==d||a.open(c,"_top")}else l().error("amp-social-share",
"Clicked before href is set.")});this.element.classList.add("amp-social-share-"+c)};AMP.registerElement("amp-social-share",A,"/**\n * Note: Attribute selectors were used initially here but we switched to using\n * class-based selector to style each type because of a bug on iOS Safari 8.\n * See https://github.com/ampproject/amphtml/issues/4277 for more details.\n */\n\n.amp-social-share-facebook {\n  background-image: url('data:image/svg+xml;charset=utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20512%20512%22%3E%3Cpath%20fill%3D%22%23ffffff%22%20d%3D%22M211.9%20197.4h-36.7v59.9h36.7V433.1h70.5V256.5h49.2l5.2-59.1h-54.4c0%200%200-22.1%200-33.7%200-13.9%202.8-19.5%2016.3-19.5%2010.9%200%2038.2%200%2038.2%200V82.9c0%200-40.2%200-48.8%200%20-52.5%200-76.1%2023.1-76.1%2067.3C211.9%20188.8%20211.9%20197.4%20211.9%20197.4z%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E');\n}\n\n.amp-social-share-pinterest {\n  background-image: url('data:image/svg+xml;charset=utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20512%20512%22%3E%3Cpath%20fill%3D%22%23ffffff%22%20d%3D%22M266.6%2076.5c-100.2%200-150.7%2071.8-150.7%20131.7%200%2036.3%2013.7%2068.5%2043.2%2080.6%204.8%202%209.2%200.1%2010.6-5.3%201-3.7%203.3-13%204.3-16.9%201.4-5.3%200.9-7.1-3-11.8%20-8.5-10-13.9-23-13.9-41.3%200-53.3%2039.9-101%20103.8-101%2056.6%200%2087.7%2034.6%2087.7%2080.8%200%2060.8-26.9%20112.1-66.8%20112.1%20-22.1%200-38.6-18.2-33.3-40.6%206.3-26.7%2018.6-55.5%2018.6-74.8%200-17.3-9.3-31.7-28.4-31.7%20-22.5%200-40.7%2023.3-40.7%2054.6%200%2019.9%206.7%2033.4%206.7%2033.4s-23.1%2097.8-27.1%20114.9c-8.1%2034.1-1.2%2075.9-0.6%2080.1%200.3%202.5%203.6%203.1%205%201.2%202.1-2.7%2028.9-35.9%2038.1-69%202.6-9.4%2014.8-58%2014.8-58%207.3%2014%2028.7%2026.3%2051.5%2026.3%2067.8%200%20113.8-61.8%20113.8-144.5C400.1%20134.7%20347.1%2076.5%20266.6%2076.5z%22%2F%3E%3C%2Fsvg%3E');\n}\n\n.amp-social-share-linkedin {\n  background-image: url('data:image/svg+xml;charset=utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20512%20512%22%3E%3Cpath%20fill%3D%22%23ffffff%22%20d%3D%22M186.4%20142.4c0%2019-15.3%2034.5-34.2%2034.5%20-18.9%200-34.2-15.4-34.2-34.5%200-19%2015.3-34.5%2034.2-34.5C171.1%20107.9%20186.4%20123.4%20186.4%20142.4zM181.4%20201.3h-57.8V388.1h57.8V201.3zM273.8%20201.3h-55.4V388.1h55.4c0%200%200-69.3%200-98%200-26.3%2012.1-41.9%2035.2-41.9%2021.3%200%2031.5%2015%2031.5%2041.9%200%2026.9%200%2098%200%2098h57.5c0%200%200-68.2%200-118.3%200-50-28.3-74.2-68-74.2%20-39.6%200-56.3%2030.9-56.3%2030.9v-25.2H273.8z%22%2F%3E%3C%2Fsvg%3E');\n}\n\n.amp-social-share-gplus {\n  background-image: url('data:image/svg+xml;charset=utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20512%20512%22%3E%3Cpath%20fill%3D%22%23ffffff%22%20d%3D%22M179.7%20237.6L179.7%20284.2%20256.7%20284.2C253.6%20304.2%20233.4%20342.9%20179.7%20342.9%20133.4%20342.9%2095.6%20304.4%2095.6%20257%2095.6%20209.6%20133.4%20171.1%20179.7%20171.1%20206.1%20171.1%20223.7%20182.4%20233.8%20192.1L270.6%20156.6C247%20134.4%20216.4%20121%20179.7%20121%20104.7%20121%2044%20181.8%2044%20257%2044%20332.2%20104.7%20393%20179.7%20393%20258%20393%20310%20337.8%20310%20260.1%20310%20251.2%20309%20244.4%20307.9%20237.6L179.7%20237.6%20179.7%20237.6ZM468%20236.7L429.3%20236.7%20429.3%20198%20390.7%20198%20390.7%20236.7%20352%20236.7%20352%20275.3%20390.7%20275.3%20390.7%20314%20429.3%20314%20429.3%20275.3%20468%20275.3%22%2F%3E%3C%2Fsvg%3E');\n}\n\n.amp-social-share-email {\n  background-image: url('data:image/svg+xml;charset=utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20512%20512%22%3E%3Cpath%20fill%3D%22%23ffffff%22%20d%3D%22M101.3%20141.6v228.9h0.3%20308.4%200.8V141.6H101.3zM375.7%20167.8l-119.7%2091.5%20-119.6-91.5H375.7zM127.6%20194.1l64.1%2049.1%20-64.1%2064.1V194.1zM127.8%20344.2l84.9-84.9%2043.2%2033.1%2043-32.9%2084.7%2084.7L127.8%20344.2%20127.8%20344.2zM384.4%20307.8l-64.4-64.4%2064.4-49.3V307.8z%22%2F%3E%3C%2Fsvg%3E');\n}\n\n.amp-social-share-twitter {\n  background-image: url('data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%22-49%20141%20512%20512%22%3E%3Cpath%20fill%3D%22%23ffffff%22%20d%3D%22M432.9%2C256.9c-16.6%2C7.4-34.5%2C12.4-53.2%2C14.6c19.2-11.5%2C33.8-29.7%2C40.8-51.3c-17.9%2C10.6-37.8%2C18.4-58.9%2C22.5%20c-16.9-18-41-29.2-67.7-29.2c-51.2%2C0-92.7%2C41.5-92.7%2C92.7c0%2C7.2%2C0.8%2C14.3%2C2.4%2C21.1c-77-3.9-145.3-40.8-191.1-96.9%20C4.6%2C244%2C0%2C259.9%2C0%2C276.9C0%2C309%2C16.4%2C337.4%2C41.3%2C354c-15.2-0.4-29.5-4.7-42-11.6c0%2C0.4%2C0%2C0.8%2C0%2C1.1c0%2C44.9%2C31.9%2C82.4%2C74.4%2C90.9%20c-7.8%2C2.1-16%2C3.3-24.4%2C3.3c-6%2C0-11.7-0.6-17.5-1.7c11.8%2C36.8%2C46.1%2C63.6%2C86.6%2C64.4c-31.8%2C24.9-71.7%2C39.7-115.2%2C39.7%20c-7.5%2C0-14.8-0.4-22.2-1.3c41.1%2C26.4%2C89.8%2C41.7%2C142.2%2C41.7c170.5%2C0%2C263.8-141.3%2C263.8-263.8c0-4.1-0.1-8-0.3-12%20C404.8%2C291.8%2C420.5%2C275.5%2C432.9%2C256.9z%22%2F%3E%3C%2Fsvg%3E');\n}\n\namp-social-share{background-repeat:no-repeat;background-position:center;background-size:contain;text-decoration:none;cursor:pointer;position:relative}\n\n.amp-social-share-twitter{background-color:#55acee}\n\n.amp-social-share-facebook{background-color:#3b5998}\n\n.amp-social-share-pinterest{background-color:#bd081c}\n\n.amp-social-share-linkedin{background-color:#0077b5}\n\n.amp-social-share-gplus{background-color:#dc4e41}\n\n.amp-social-share-email{background-color:#000}\n/*# sourceURL=/extensions/amp-social-share/0.1/amp-social-share.css*/");
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