"use strict";var precacheConfig=[["/Portfolio/index.html","c04b92d5ccd1c851d53c4190b98f261d"],["/Portfolio/static/css/main.a179dc96.css","ee69562c2d9fc00b20ccdb574beb494f"],["/Portfolio/static/js/main.4c8e0200.js","c40d5a5b786d7cd3f1c34776cf26bb00"],["/Portfolio/static/media/1.2260a7e5.png","2260a7e5f0a660581e28578a4817c468"],["/Portfolio/static/media/1.3d515f71.png","3d515f716a87a894cb434d6ec5f009d1"],["/Portfolio/static/media/1.8eb6b1be.png","8eb6b1be560bb50b9c805d5edcfb14db"],["/Portfolio/static/media/1.f05941c7.png","f05941c7582ae2d343df8144364e0b0c"],["/Portfolio/static/media/2.b5d431bd.png","b5d431bd439f7cecbce2911a1b594fae"],["/Portfolio/static/media/2.cf34ceae.png","cf34ceaef58ec1f85b3e5dd83254c04a"],["/Portfolio/static/media/2.e89a14c7.png","e89a14c70af3f9968397205939674e17"],["/Portfolio/static/media/3.33e5460f.png","33e5460fb74e6787f18d48c7b42d94b0"],["/Portfolio/static/media/3.7e5e875c.png","7e5e875c03a4854827c0ee8e543d7eab"],["/Portfolio/static/media/4.31d69142.png","31d69142a194fcd63021adbf0b662802"],["/Portfolio/static/media/4.c21401f6.png","c21401f63ba8360850d75a5b91bff381"],["/Portfolio/static/media/4.d586b7e6.png","d586b7e66132b1104dadfde3355e6763"],["/Portfolio/static/media/5.6c6db93d.png","6c6db93dddc4c28a4406a0c86bb675ae"],["/Portfolio/static/media/5.f59d9ea2.png","f59d9ea29e24c1a87eee52996afaca07"],["/Portfolio/static/media/6.a060b7ae.png","a060b7ae7160e6896abc6067c36393bd"],["/Portfolio/static/media/7.42915922.png","429159220e9f134b78326c9a83264948"],["/Portfolio/static/media/badrums.56679a2d.png","56679a2d930d61e78e89325e3203a493"],["/Portfolio/static/media/cinnober.08f4f736.png","08f4f7364f05ee7227576341d864e24a"],["/Portfolio/static/media/fresh.5938bc72.png","5938bc723f672325be0f85c6e7378455"],["/Portfolio/static/media/hikikomori.efe4c7a5.png","efe4c7a53ed0bc7a356f64e5fdb41f8e"],["/Portfolio/static/media/phocus.77455e65.png","77455e65d48cb219c276d992e5eeb023"],["/Portfolio/static/media/slick.b7c9e1e4.woff","b7c9e1e479de3b53f1e4e30ebac2403a"],["/Portfolio/static/media/slick.ced611da.eot","ced611daf7709cc778da928fec876475"],["/Portfolio/static/media/slick.d41f55a7.ttf","d41f55a78e6f49a5512878df1737e58a"],["/Portfolio/static/media/slick.f97e3bbf.svg","f97e3bbf73254b0112091d0192f17aec"],["/Portfolio/static/media/tremory.14d54ff9.png","14d54ff96c6797d36d019130dec7822d"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],c=new URL(t,self.location),n=createCacheKey(c,hashParamName,a,/\.\w{8}\./);return[c.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var c=new Request(a,{credentials:"same-origin"});return fetch(c).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),c="index.html";(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,c),t=urlsToCacheKeys.has(a));var n="/Portfolio/index.html";!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL(n,self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});