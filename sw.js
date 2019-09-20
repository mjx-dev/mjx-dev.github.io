/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/07/30/hello-world/index.html","6df569c525e41458354bd5042abc8adf"],["/2019/08/03/1_create_hexo_blog/index.html","54726e781c46bc95d2c50abe1bb7de31"],["/2019/08/07/2-github-jsdelivr-cdn/index.html","79a558eeb30a3071c68bf532ca00bb9e"],["/2019/08/08/3-jquery-effect/index.html","47f66ffe7edd36c5bf2110f33d6bdd35"],["/2019/08/12/4-github-flagged/index.html","8e23133c5bdafd2847a457ff5446f15d"],["/2019/08/18/5-welcome-ip/index.html","1473586ba52e0773cfbf9503d8412685"],["/2019/08/18/6-visual-code-markdown/index.html","2f4df5963e16c3d3d744bd7428c6cadf"],["/2019/08/20/7-markdown/index.html","dafcd86665fd7936de18dc84cf151724"],["/2019/08/21/8-github-ban/index.html","ff526a03a82a6ef5984f9bb7223213d9"],["/404.html","b4102a0f5eaf66c7993c488eb66a4e55"],["/about/index.html","fa9e293341b7a42799176dcc90580eed"],["/archives/2019/07/index.html","20da2617ff01c035acbf2fb3cc3618b0"],["/archives/2019/08/index.html","6b6fae94515c341787c01630ebcc0e10"],["/archives/2019/08/page/2/index.html","6ea80e768b0ff46de7b9bf09758e58c7"],["/archives/2019/index.html","29368b6c2c0715135546b68e731679ce"],["/archives/2019/page/2/index.html","1991fa33e4cbfaa54566de96e78f3977"],["/archives/2019/page/3/index.html","3510fd9c368db011af08bf6435d1330c"],["/archives/index.html","536b9b51d51b68b73f4c14f5e34d4e44"],["/archives/page/2/index.html","536b9b51d51b68b73f4c14f5e34d4e44"],["/archives/page/3/index.html","536b9b51d51b68b73f4c14f5e34d4e44"],["/blog/categories/index.html","9b2b6fa981d82fcfd08e8a49a6d42028"],["/blog/tags/index.html","c21fe05a70f306741396004345355dc3"],["/bundle.js","9a52b433b84ac5773c30b602fb9c9ef1"],["/categories/编程开发/index.html","051bbc50ef0b54364ca04bff611ea6c8"],["/categories/编程开发/markdown/index.html","1369e229c5433c0cf04b2809aeafcadb"],["/categories/编程开发/page/2/index.html","a457e21d58a1de143ac935201d0eb98a"],["/categories/编程开发/vs/index.html","75cbebbf7e4c7c0e84b69b7f53f8bbe1"],["/categories/编程开发/web/index.html","c1cbb544e93828edb5aa9274c2cfd0f0"],["/categories/编程开发/web/page/2/index.html","fa71ed7a7563ba079116d6d983fa7201"],["/categories/资讯分享/index.html","89d666a6608101c901412e0da030157f"],["/comments/index.html","42900ea47e0b5c5a844b385dba983b9b"],["/css/blog-encrypt.css","353d9144d834bb7c359cebfdd09e7f5e"],["/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["/friends/index.html","662b09364a8dfc507c0fad9ad15e3b6e"],["/go.html","97016c24fe1083815eafbcaa2f67fe7f"],["/index.html","4b1cc9f3b5c52dc55fe7886b795a14d6"],["/js/app.js","746d2cc39caf42c3a4f804a28cda4175"],["/js/click_show_text.js","84b949cb121bea92b5b9bf0c859896be"],["/js/praise.js","a68d6027193d17b8cea135acf725d277"],["/js/search.js","abbea8efa3a074fe6998e1fc0211bd14"],["/js/volantis.js","7871f1118223a548639f6865fac0b136"],["/lib/blog-encrypt.js","1caf6acccbaaae88af59a112eaf1b37c"],["/lib/crypto-js.js","60ab5dbd46dfa34dfef3c1548a22a978"],["/mylist/index.html","6aebeac3b823b51693ba211ce6ceff7e"],["/page/2/index.html","0cc519b7a9a26e74f9a2ad610866fde0"],["/page/3/index.html","751958cc7534c99181e96fbfb3de3782"],["/private/admin.html","b45867741d05139f5ba213aad21c5e27"],["/private/index.html","0db2acb072d07085f5cc5134403a3a2b"],["/projects/index.html","f44f289ada3934916e706d015f0e6533"],["/res/index.html","69147c8877a7f67d0bee0b2229c21597"],["/style.css","99d8ce0712a9f94c8370a5724c5556d1"],["/tags/cdn/index.html","f15a76454db23e2b74e8b2667d545090"],["/tags/github/index.html","0a6caaedb82f2d5643b3424dbb99ebba"],["/tags/hello-world/index.html","78306510f0cb8e445842b6b7dbfe7c3a"],["/tags/hexo/index.html","e0c810106198dd04878412166e2bc11a"],["/tags/jquery/index.html","5a5e61cf0e2fd82f9db178411f17acb5"],["/tags/jsdelivr/index.html","a4c8c665ec2d38c5326095bdd35447e8"],["/tags/markdown/index.html","e431ad82975e0a5a2332c715120a39af"],["/tags/visual-studio-code/index.html","6b0128d7041278f4acb48a03c0d89924"],["/tags/个性化/index.html","f67a4589215e71f339d17af46df4b6f4"],["/tags/效果/index.html","f5f18a4ad5cf3ad8b3dbeb76dfce0829"],["/tags/资讯/index.html","04450f83f413534df5b36f7e5e396d54"],["/tools/base64.html","d182e14c2c0a4d5496b5f1cb6573d783"],["/tools/index.html","9220886357f11ad7f6931538a41caadb"],["/tools/random-passwd.html","c13b037c22016ad09f4047997191543b"],["/tools/sha.html","ac8e5d295dc53f8a2137b41466c92c70"]];
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
