'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "d778d8b1f42d0dd1bb284e5ca9549187",
".git/config": "c75412ce9e9a2829ca909c4c400c2c25",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "c617cde18743ab9ffa217cb3bdc5b160",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "b6ebeb43d46d6d926bb385695e178168",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "bb37f704da31a5176d02006eb0b2be13",
".git/logs/refs/heads/main": "bb37f704da31a5176d02006eb0b2be13",
".git/logs/refs/remotes/origin/HEAD": "febc775d53f9984ccb13dd4884d5aa07",
".git/logs/refs/remotes/origin/main": "d913c5603da47e0667699d1f90c18b3e",
".git/objects/02/cb6bf486d56004d5335c2cd39dcb82c8457491": "e7b0cd7ad79aea82b7dacc44747abb1c",
".git/objects/0f/1ac36155eb193703d8d4f3a30d380f15cb6bfc": "d49f2b46a64fc54a317098002617d21b",
".git/objects/12/5c284dc2bbed823ed6389e50cc75a8a1ef2351": "9ab0bcea773dc4fd6ef989aef459b28a",
".git/objects/16/34caccd1dfe17a6dc818db8ee6ca3f9ec68195": "37109879a043caacc737d6f2ab7ce256",
".git/objects/17/822a528cbbf7e9641e6f4f1ff15ddef37d742c": "a4f73858d40c6bf7aa64dc7caa976d0c",
".git/objects/1d/0074d2bb9fff79f4c66bcf3c53fe78f2b415d2": "839c336709054a44225953333c6afa08",
".git/objects/1d/4e14e2a9c4cf15ac1d72ebe5750fc5914e463c": "b269ef3cde5d257fd238987fd0db236e",
".git/objects/1f/25fa649628e34724784d27ad355f3387567c2c": "85f7cfc53dface57ea18555c3ec84073",
".git/objects/24/1a35fef26b7411aa2e5cfb233dde58c1fcbf51": "fab4bd668784a6eb610aef1f6b63a7b3",
".git/objects/24/4acd18776b25bb1032461cdaf2c2aa431a4054": "091777e612d4fd41881ea1b2821f46f2",
".git/objects/37/7ead7488ba04497de54363ee4e4436edf85774": "d08a584d3f7b4fb2a65c159d695456ff",
".git/objects/3b/4c29b45347e4cdfa8fab12d624cb480ba62046": "a8e61fe9f452b0edf255fc8345672bdb",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/42/641261d49baf13dffae2a77c9cb879a3d88b75": "b94db320ab820af9fb615654200359fe",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4a/dd3c1db22ed31aed26f77e9665af454761a8f5": "a8e0a255fd1d0cfec300039b1e79a7aa",
".git/objects/4b/ce11f832f26ee264d95b6790237601cf5a6088": "d9243641979aa81a886b057ab392745a",
".git/objects/4c/68aeb526a77abc9e61f55ba1d2e2b15c976237": "1f3a1c6f1fafd9513260617f6bca6c27",
".git/objects/55/919b0b32f21410d9755ffbe64aeb2d07650744": "ffb88073b04c5f9454f1e7f08edc733c",
".git/objects/56/41959d65b22e4571f5c51f9a623ea5c00dbb84": "89716a4beb77ad0377f2482493517a51",
".git/objects/59/62efb2dffef4c259bda261b128fcab4b659c34": "11e1a7683fedc73b6a0da57ee3c6a112",
".git/objects/5d/333d3fc98f6bfce6c73773717b87c615fe7d3e": "48336892caf8eee439ab4b343d76f76c",
".git/objects/6a/15956edc62fa26339aee84209344d13439b8d1": "cdae8e0b173001da290c1fa9c433c188",
".git/objects/6a/562868741911ffc3a5345f3c094a71eb0d073d": "ad3237b80e6dc65be0e2000c6c0a445f",
".git/objects/71/88cb5ba109e5ee5f388d789155054b84b5456f": "5fa414c6d3e3b99c9b60428acfa87d87",
".git/objects/73/a5ca9e6ea457a8e87e3e88047b9268f15bb75b": "437e873491b95548ba60fecc00fa7933",
".git/objects/75/585509b8149dc1c76240976074190f20834416": "ebf9fec2fd2a794a69ef153b1fe154b2",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/8c/99d67288d7f98ae50e8b1e91af888edf54a8d9": "44d1de9b4724e0f0c575d933ab7da073",
".git/objects/8d/366b3a699532cccc9fee4fe1998871bf553cfa": "cd9214db14737839cf393efea8091b80",
".git/objects/8d/82183cb502255b1e1c549fda8115585f328298": "9116426079fad0c250cd61051267ae4d",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a6/f75fc1df3878ddf55fd096703aeb88f30e2862": "dfbab5960cc10175904db1b5fafca9ab",
".git/objects/a9/41b7cf74bd5115a4aeee1148f6a08c1b79767d": "a5c4784f9d6d2b5f7d175b6edd4de100",
".git/objects/aa/f9775aa89c03137dbf48721cdc05191703de5e": "25802b31f0bee36b4e1a7a67835f99f0",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/b1/edbc4856c646d7a819b0dbf46c8035a94a9e2f": "d4a4dce9c699a5031b4b4f6791c065fa",
".git/objects/c5/81df7f3b92185c5b780715cf71350de28f7a81": "152246450e5e2f82b3f80a413944dbbd",
".git/objects/c6/2bf79bcc8065123384f5d6906d9e1bbb55f90d": "7736f291299efcd673614433ccd49321",
".git/objects/c9/1ea4691114a92235a77bc476665ba8f3653eed": "845718904d783062a05f6d8565c0c713",
".git/objects/ca/6c6f40efb54ec142a65788dfeaf21a6784d039": "1001483d4396b0467b182e9dc6ad0714",
".git/objects/d8/127a5ce4dd7fea28bdf7ade8e142607e293c45": "aec93aef711c9e3d3c92a830affb927c",
".git/objects/de/09ffe9f345b4865e5961096a7337bc32fed4d5": "8998b2fb2e85e1d1b1be201346cb585b",
".git/objects/df/cc08eef4eaa99533cb640ac0b53afa76859842": "740ef0b59f9b18e48b4d4bb03e1d3bc5",
".git/objects/df/e0770424b2a19faf507a501ebfc23be8f54e7b": "76f8baefc49c326b504db7bf751c967d",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/ec/90192b2360aed80a45029b7f527b90c9e52413": "0fa4e6d7325feac300c97507032460b6",
".git/objects/f0/d8aebae2c19331fca3863f6eb51352e5069469": "a22866013214a199795cbfe1751d174b",
".git/objects/ff/5776ab6f26d90cd9e3c9c09104c9c59f543832": "ec7c7b07f26092978459ea2dcee80267",
".git/ORIG_HEAD": "803f3abc98c8f22244c80ae077117b15",
".git/refs/heads/main": "62247aed1ce6e76a99476118916c9d49",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "62247aed1ce6e76a99476118916c9d49",
"assets/AssetManifest.json": "fb9a3bbffcb0773c434a42a5328f3911",
"assets/assets/images/backend_icon.png": "a9f40c5e289f8a24b377154ee3f61af9",
"assets/assets/images/C%2523.png": "c3e10f25c57efdb685198374021cacb4",
"assets/assets/images/facebook.png": "1c131dbd08b8636ada8dbd9758b57ddb",
"assets/assets/images/flutter.png": "7a48d7c8f2d7f65d904aaa538e7252ca",
"assets/assets/images/flutter_circle.png": "59abe6cc666a648c33f9488e53663858",
"assets/assets/images/github.png": "b17444f181dfac9004b1138776afc162",
"assets/assets/images/java.png": "8f7e4cc176298fd0724a1fe3b1c3f18e",
"assets/assets/images/java_circle.png": "cb18683cd0bb39f5ea863c4fe9ee2b2c",
"assets/assets/images/Jona.png": "45f4169834997ba211d07c1248069bc8",
"assets/assets/images/khalid.png": "d844bf2982bc466a968c2107542a0489",
"assets/assets/images/linkedIn.png": "539e826d2e9efd907a4a487e3fd4c27a",
"assets/assets/images/logo.png": "3d0c2946c5e1fce21b3eae19ee964705",
"assets/assets/images/python.png": "64aeac68d191109b6041934d98b8847c",
"assets/assets/images/python_circle.png": "b85d209d9c34e721a8f420175edf1a04",
"assets/assets/images/Unity.png": "0e4ed77d950cdaaacc2df0842317e4e1",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "85c527c8e21bb978df0a1317dbc8cede",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.ico": "f55fc14a5aacfc43e10d62eae5df16a6",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"icons/icon-192.png": "10cb611203171b17d7a112813f8e4260",
"icons/icon-512.png": "be0be3ac9d719bed147c786242ebef4d",
"index.html": "1a0e324f67671098f400fdc2bd5e67b6",
"/": "1a0e324f67671098f400fdc2bd5e67b6",
"main.dart.js": "1c66afa56272f44dd774c06e0f230985",
"manifest.json": "3ba9247033c84adad06cc1af575130b5",
"version.json": "009c9e65172e010890f7f65fde438006"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
