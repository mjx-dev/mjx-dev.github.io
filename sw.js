/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/07/30/hello-world/index.html","02045dd354da8bdc3072b62f314438ac"],["/2019/08/03/1_create_hexo_blog/index.html","28be80889b94af2aabedccc39bdaeb12"],["/2019/08/07/2-github-jsdelivr-cdn/index.html","01f2ad8e385b0c821f84d27b87b9aac4"],["/2019/08/08/3-jquery-effect/index.html","796d3eb982645c123a427bcd3051f8e0"],["/2019/08/12/4-github-flagged/index.html","bef543e0cbb592308d5653fa58f97034"],["/2019/08/18/5-welcome-ip/index.html","a0e6ac3c660eabb359b07f4e26497cb9"],["/2019/08/18/6-visual-code-markdown/index.html","1cb91fb77eacebf9e7e845d8001eaf19"],["/2019/08/20/7-markdown/index.html","a989ce29aaa4dbf5000e231de97f3a86"],["/2019/08/21/8-github-ban/index.html","4ed0703053626a4c042aac38444b573f"],["/404.html","9421d9cea84463bd73f5bc6f448046e9"],["/about/index.html","0fdadf0cdbca707ba26ff89891433f1c"],["/archives/2019/07/index.html","2a18cc0466ac84e68ffb6ef306383917"],["/archives/2019/08/index.html","64e345ac149f78b6b1baa9c66cb1f38f"],["/archives/2019/08/page/2/index.html","28fe40607659d5b1b76e8e1651bac154"],["/archives/2019/index.html","c76fec758624029bc92a3fa5bbae5ddc"],["/archives/2019/page/2/index.html","6793b2c15bb95a87f27eb07747b1f155"],["/archives/2019/page/3/index.html","2833f532bbd3cb4cfb16521d3bd88608"],["/archives/index.html","6f1bd8fe4c1fd29129d3e134178d5966"],["/archives/page/2/index.html","6f1bd8fe4c1fd29129d3e134178d5966"],["/archives/page/3/index.html","6f1bd8fe4c1fd29129d3e134178d5966"],["/blog/categories/index.html","ea13c9e80e1902b9aa223f8fe9b1cfa0"],["/blog/tags/index.html","12adfc3994bd67ba0df6644ca7622cfa"],["/bundle.js","9a52b433b84ac5773c30b602fb9c9ef1"],["/categories/编程开发/index.html","4dc534a9d89e1ed5df43a8bcfc997dfb"],["/categories/编程开发/markdown/index.html","94837d15d51ea9e1d038bc08e4a68e2f"],["/categories/编程开发/page/2/index.html","345816c3ef2188fb4abfc393a12bccc5"],["/categories/编程开发/vs/index.html","faa80e560f34531b9ee0d280d45f0de3"],["/categories/编程开发/web/index.html","ed2abd2d9b980e2388741b0899dbbe19"],["/categories/编程开发/web/page/2/index.html","54f5d80b4fa751dffe9bdc99a9c08bdd"],["/categories/资讯分享/index.html","2e3cd4bb1e05ba7a4e34d2216e54005a"],["/comments/index.html","e8b25a78d450841cb0d161e731b93ab6"],["/css/blog-encrypt.css","353d9144d834bb7c359cebfdd09e7f5e"],["/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["/friends/index.html","cc5a365a03befbaf4eb542812eff7aed"],["/go.html","97016c24fe1083815eafbcaa2f67fe7f"],["/index.html","2e215ed8a4d28c095b04eb34fca5ee65"],["/js/app.js","746d2cc39caf42c3a4f804a28cda4175"],["/js/click_show_text.js","84b949cb121bea92b5b9bf0c859896be"],["/js/praise.js","a68d6027193d17b8cea135acf725d277"],["/js/search.js","abbea8efa3a074fe6998e1fc0211bd14"],["/js/volantis.js","7871f1118223a548639f6865fac0b136"],["/lib/blog-encrypt.js","1caf6acccbaaae88af59a112eaf1b37c"],["/lib/crypto-js.js","60ab5dbd46dfa34dfef3c1548a22a978"],["/mylist/index.html","9d0d3ab0cd671e36be80183d426f6831"],["/page/2/index.html","a23d4771c1978809a84e8a322e0de655"],["/page/3/index.html","365b19dbc27678140e5b4152d6d6af88"],["/private/admin.html","b6a3da1f540c4bf2da732d2af54dbe00"],["/private/index.html","c938448ec3b4e02e0b46f55a0f01a2e8"],["/projects/index.html","06c234d6dacbbd329f22a5c0781f27c9"],["/res/index.html","d50a8a3e70ed654c2b53510d02339adb"],["/style.css","64f5423405482eb1e05eb831ae0cc9bf"],["/sw-register.js","8dfb1f8a2983e5ee854f8a9175333f2f"],["/tags/cdn/index.html","16cf009f5dedff1bc7851cc4299cb5e4"],["/tags/github/index.html","59dc5b66ecef11d26536e081232cd942"],["/tags/hello-world/index.html","bb3634e5e980c5c6d3c61b6a19399d85"],["/tags/hexo/index.html","471bf4a114fa718820bd8bdc16f6d65b"],["/tags/jquery/index.html","8ff52d4bd0cfd10d6b438428190350c0"],["/tags/jsdelivr/index.html","bc318c4f72e6ed3023d5639c3c82b2b7"],["/tags/markdown/index.html","17eb04a3539656d5ea0ca35903cce084"],["/tags/visual-studio-code/index.html","ae044782ea1b7e773634df4c52748b34"],["/tags/个性化/index.html","6fe56b5ae883d3112c6fde2f5a6059fd"],["/tags/效果/index.html","b6d0b50e30629685357a57a992ce9413"],["/tags/资讯/index.html","75b73c3370d95456acf1f2f6acb2f14f"],["/tools/base64.html","b412db362a95a2e66c8d8cda1b5a8e3e"],["/tools/index.html","23f15040f7251175c46cffed67280fa2"],["/tools/random-passwd.html","d2e95c3d8d844fa643e0ede4266d2082"],["/tools/sha.html","71c405700fd8ec32057e752f01f73a6a"]];
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
