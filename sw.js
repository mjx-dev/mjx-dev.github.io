/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/07/30/hello-world/index.html","751934723deed3f2bbc02d03b6149a93"],["/2019/08/03/1_create_hexo_blog/index.html","6417b04f576a838c997e1fbeec7e095a"],["/2019/08/07/2-github-jsdelivr-cdn/index.html","912761922369280c1ce779be97afad7d"],["/2019/08/08/3-jquery-effect/index.html","0c7babeebbb39b1f96082b3977fcdcec"],["/2019/08/12/4-github-flagged/index.html","32766fb16831f23d8ae2a3a6f8f46086"],["/2019/08/18/5-welcome-ip/index.html","82aa203a2e30cceab2264f91b65d564c"],["/2019/08/18/6-visual-code-markdown/index.html","3b5e25693c8e5f5d9e94df16c3a24031"],["/2019/08/20/7-markdown/index.html","5bb2534583a88e2c2ffb05dca30ac5e9"],["/2019/08/21/8-github-ban/index.html","d32ba0f5453b7e2d5c109a06c8f23d38"],["/404.html","b7aa217e05b85b1fc9669e824541cb96"],["/about/index.html","c916bdd0d2c939b55ca52b3ada74a3dd"],["/archives/2019/07/index.html","8729d3bc7e1d988fdb13b46ca6749a90"],["/archives/2019/08/index.html","a7781c53b52fdc33c1cc93c8bb125965"],["/archives/2019/08/page/2/index.html","987ac7f8007e5e8c6596f9c9b9beda66"],["/archives/2019/index.html","ad0f8a87b2fb786ab2158e7eeefdc28f"],["/archives/2019/page/2/index.html","5a80e2fa168f2ad8306bbc6a3d663b60"],["/archives/2019/page/3/index.html","d8bb2229af512d26e96aad8b6cfb1fc1"],["/archives/index.html","b92b64b17bd8f185c5068d4251c38fbf"],["/archives/page/2/index.html","b92b64b17bd8f185c5068d4251c38fbf"],["/archives/page/3/index.html","b92b64b17bd8f185c5068d4251c38fbf"],["/blog/categories/index.html","d37870e944d68a51585025ee090c0240"],["/blog/tags/index.html","c1aa74d87d38892e5bcc3d14ec5c1119"],["/bundle.js","9a52b433b84ac5773c30b602fb9c9ef1"],["/categories/编程开发/index.html","7ae5df7d4c4677db407c118b0d76cf47"],["/categories/编程开发/markdown/index.html","15cd1ceb27486a1a21d8016e25c0a170"],["/categories/编程开发/page/2/index.html","4d53faf6146361acf96fce64b8f87a8d"],["/categories/编程开发/vs/index.html","1280a42212baa67f34b6a6c0a484a82f"],["/categories/编程开发/web/index.html","5b623b4f9e8fb079887f7d6362dbb2c3"],["/categories/编程开发/web/page/2/index.html","65522d2a5057379e0ffc49bdf507e189"],["/categories/资讯分享/index.html","88b8d079eec8b369ef7f8a532cacce53"],["/comments/index.html","15cc1b57223276d465e3b6dae67a8ce9"],["/css/blog-encrypt.css","353d9144d834bb7c359cebfdd09e7f5e"],["/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["/friends/index.html","b26d282d258ab612d463cece67e2d512"],["/go.html","97016c24fe1083815eafbcaa2f67fe7f"],["/index.html","fb3ebac719027f5c56b126d232dbb6ec"],["/js/app.js","746d2cc39caf42c3a4f804a28cda4175"],["/js/click_show_text.js","84b949cb121bea92b5b9bf0c859896be"],["/js/praise.js","a68d6027193d17b8cea135acf725d277"],["/js/search.js","abbea8efa3a074fe6998e1fc0211bd14"],["/js/volantis.js","7871f1118223a548639f6865fac0b136"],["/lib/blog-encrypt.js","1caf6acccbaaae88af59a112eaf1b37c"],["/lib/crypto-js.js","60ab5dbd46dfa34dfef3c1548a22a978"],["/mylist/index.html","79158066425e4d9a016cab6f8dfa31dd"],["/page/2/index.html","f9aecc1b6d25400b48c8e488e2622c9b"],["/page/3/index.html","7a5d3f68fa22f7eea7a3dc2334e7aa84"],["/private/admin.html","cf9628949d1441cdf0b46a75abba429c"],["/private/index.html","9ac326de27061fe2721227ee86d19f9f"],["/projects/index.html","e4dde57a047ccc7b072ffab7466e6ccf"],["/res/index.html","9f453736180cedc7fdcb56a3ab82e8b3"],["/style.css","99d8ce0712a9f94c8370a5724c5556d1"],["/sw-register.js","fce2e63fec38811800a321c7930f2b7f"],["/tags/cdn/index.html","0d49939e5370d48fb690d963196db14e"],["/tags/github/index.html","ce717a43c17bf28594f48371fed27d0c"],["/tags/hello-world/index.html","e5a3dd7c66ca141824ca1cadbdde9732"],["/tags/hexo/index.html","2159f641c6ec8e387397bc856533ce9e"],["/tags/jquery/index.html","63cf4267f8f7830bde180a4640bf9108"],["/tags/jsdelivr/index.html","93b468eab14f41cada9774c14f8c97bf"],["/tags/markdown/index.html","a47014fcbe34269cb32ea3320bf107db"],["/tags/visual-studio-code/index.html","740a348c0ad94b9e9496313d1fd2262f"],["/tags/个性化/index.html","f3d656251ce2442ec9057f2576f9e2aa"],["/tags/效果/index.html","8c271beb5b08de407ae7d0289655ffbe"],["/tags/资讯/index.html","be3a6348536989f5bc6330ca271cd1e6"],["/tools/base64.html","a3778b40f14dd5323a1768730269e8ef"],["/tools/index.html","1ce4447bf0c9e244e54234ae77e7115f"],["/tools/random-passwd.html","42050e0d96d34ceb9667fc9791458108"],["/tools/sha.html","d5a4ade0f53e4a22f1c5d08f10a6c0b9"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
