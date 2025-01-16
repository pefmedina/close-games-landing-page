'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"favicon.png": "01659a46afb6891817cd8e35442fb7ee",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"favicon_bkp.png": "5dcef449791fa27946b3d35ad8803796",
"CNAME": "a8dce5cdcc61ceceea8ae0f0097ac4db",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/refs/remotes/origin/main": "3f62abd7bb966ea00d4af3ea4ae4f03b",
".git/refs/heads/main": "3f62abd7bb966ea00d4af3ea4ae4f03b",
".git/objects/fa/2462657b8ef50faab51aecd308ab1997c6300f": "2d74a55b7e1bf9f6c85a6ad4f80f9992",
".git/objects/3f/1d81d6ae1e1cd72cf12331ae87a510c4fb1b65": "a4712d7e484bb5dd9f440d5df532dc1c",
".git/objects/3f/e751ac4b7189a529ebbc8bcd942650f84fbb2e": "c9ab028a3e522cd3b94242cccf628ae6",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/60/e148cfbb12779d76ceaa05bba7f62fdb9aad40": "b2bf38ed551af5f686e90be21a0f544c",
".git/objects/de/c6347ea0a7e1a0982c39f5cd29e62c30b169a0": "5e341f913ec698df7824a9434cfe8470",
".git/objects/e0/d2cd01305ee8b8f13f068d64d6ebf947d35ef2": "543a71202ef9f63c68a83067479829c8",
".git/objects/90/37eb1c198d7656d64006f751b9db48d26f2f0f": "e0bd2150638214e9dd549de855977676",
".git/objects/90/ec8ec14c792454e8e8ea8f54d0953578afb0cb": "de5e8d99ee2edb3fb1ed23eb16b3a662",
".git/objects/f1/b4ffcb6ffe0c1a20035197c046b81d648aa0c6": "8ca3ac5ee2287ee8cfd1cf8b5131292d",
".git/objects/09/96423e79bbe126fe03041688bb5c1a39361360": "3f50bfc404a319810a99046c26ad797e",
".git/objects/a4/2e11c74117c069069d0b0d8f885844b4e49f8b": "088122f4e6f5a146f7a272e32ccb9962",
".git/objects/a3/430126f1fec61ede687088df28e4ec68c7be22": "ca0f79f45331150db4e29e354a47c071",
".git/objects/86/846d27fe090a72cc3712ebaaa5bb0983812a86": "c4dbed3559008010892cdc686f27e37d",
".git/objects/13/9cd34b42b779d5775e87d7dc2d3d5e2be19332": "172b2b334502dfeddb551d81bb93e0ec",
".git/objects/71/3551aa6062a889e5c3634d3afa656bded79f24": "2246dec5a97ddba67e4135f321ba4099",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/47/6928f376e96b93961b3929c6975481538c8c87": "29bdf1cc03e195e158ac10f6de2f4548",
".git/objects/9f/87fee6bac9e8ae527982097a8a57f3f9215f6e": "9c3e7ab389aed5f5dc4a4c6bffef6384",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/2b/9472bcd0d237e015d104444c57c2467ab8cff4": "b70b897ed2772f596acd545f9de30989",
".git/objects/bc/4cfd22a8f7e19c1de26aa18a51e83c46c22568": "8786611e109f350b70e4ece76bb3ec59",
".git/objects/79/b04269dd8bd2a4a7ee06288a002e5b07156241": "5724daf34ff5c22ded4d233c7b509e3a",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/3b/e49a07c1dddc39d88c2adb603d7bbfb4840cdd": "3190e4f2a318529aeab7e049f7699008",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/dc/f12d677bd160f3c9935d2d964e6404d7b6cb64": "bdb78e8858f6a8d4c8c31d03e6cff8e1",
".git/objects/dc/9e89c7c6d3d9bbcf78d2642eb79ec548a44012": "95a5629819eee858de7e3b6cacbb4129",
".git/objects/dc/19c1ea53ff5491bc7c5a2c1a7eb8a5d86736f0": "bf4c76fd4b7ffdbd8669f524e5611c3f",
".git/objects/dc/7632184dfc239f1109edfc44468aefd51edfd0": "4e07439b1c06b55715e1e90c1141089f",
".git/objects/45/9369a39466f9b99c08228a7d182e4005889290": "f649aa1e3aaf1a1bb596d6b7bd03d6e5",
".git/objects/be/490132e83b1295eeb83ce8b2dee205c6b944b4": "ada973dae44071c6769eaae56c8590e2",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/75/344f8a1a4f71ef5a6ddf3fa21a2275247331ea": "27964ee4b96a5389a58f9548c59add4e",
".git/objects/43/ea420dd11dc166fd22f9d83f94f89832acf19e": "efa583211bed3ceb60d2e767154eabe0",
".git/objects/43/085eb71b7f5b0845f93ad16694ace15545d08f": "e69b00bcb5e51bc8434dde62fa3c34dd",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/0c/086b305f9630799a83f43b3420eb5458dbbc6f": "d4960d5f9ee5ae646a9796a7f38865bb",
".git/objects/f4/ad1d80b5cba7c444597ac1d9cb38467e97853c": "77107ef6f4d4abd7774da75dbf4f460e",
".git/objects/31/6ba154d1f66d8401935f62ae0c1e3b73714ab8": "2b2b15d4df77f0d3d7f7886bc1a9c833",
".git/objects/c7/ca8e0e723f2c77e72563be44478c5cb46907ce": "52a534635d649b57cafdee20dd607955",
".git/objects/3d/630b9bd2bd188353bc2a90b338d446280f8d59": "f42de33d499e8d617c0468091872ad6c",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/ca/8482c88c44dcfdf9ead9d3726df9574ac9775c": "81cbf504c8b90bc81a07b514349a4ac5",
".git/objects/8d/d4ba75b1181f63a05f6ba167f5855b4ea805e6": "3061255a966a7fd6c607626b53fd596e",
".git/objects/4a/31142172ace03e1448696c9635406d572b1aa7": "d4849ffb8dea7a0a2aeba2660a2a7e30",
".git/objects/b4/0b8db7de6f8bb8dbf1bf71a49c1f04a0db0aab": "cdd1fa6257994463a8f7c548ede0b928",
".git/objects/c6/897d6802711e55599efa0f1502418071a1ebaa": "7a7fde1bddccff2490c5aa1829091acb",
".git/objects/1d/b545ac6d35fb9039ff0ef803628cdd2154f571": "b0818317706750317dcfcd95bc05b5f0",
".git/objects/b1/67ee287bfd40dfda3853a91cd53ddf1a7c1ee3": "37b442d94e5ed8eb1e1ba568f17bf1b2",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/d7/5299bb71b2b1f9fa4945be22d7adcdc5bb772c": "5f29f9c8391b9edaffc39dd4f17e3bf9",
".git/objects/f9/1c32c48647f39213a503229b5d4b929c215744": "71f361fac00dffed047447aae3e9ed77",
".git/objects/fe/1baf8eb0dd40f7a7244bdc723f3b2b59985906": "b0abe762a3c62722d1d55d080f3276c3",
".git/objects/e6/5a8e4a91fc96ef3e767a390820d987d57a6ef9": "dc46d74f90a7f3ff41700d77eb7ccc8f",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/24/6c051a0a2bbd03beafaca0b38d38e66a8780cd": "acde5b4cdacc1fd13322960a026646c8",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/44/b2099b3520c81b549d7602c676d2cbd0bfdd7f": "40b1707f06ba221d319b7a7094ad7237",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/75b4040365ba6428fe9e5b621a2cd8aae6c142": "9bd7aa5127c70a5ea1725de01e58f83f",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d1/ef8a0b2a20456a44ca485642aeac8631f08357": "864e7f9e3d951c9a7c53131a99c8af6a",
".git/objects/0f/c344c7e8b9e32ea1ad91f30ded22556352d7bf": "a8a30f28869f7378465338066f34d80d",
".git/objects/02/6be8cb3eddd19181a98250411292c07d7f725e": "411088bfc6a8678bc9be603ac20a1f11",
".git/objects/bb/514df2e0a2a30cd47661e223469daeb4a0ddf8": "dfe4b3c91a9019f7886e65135f1a3979",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/d934dffb74bebf2fa6cdb1c6d8ac93125a31d7": "3cfd40a0713e24b64e1a86fb5744d4c5",
".git/objects/57/eb954467132b9f8078cb6d33b132068bdea1ca": "c8597555595083b56b839bbf5f24c4bc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/22/9344e06fed91488e45d9851046a6809e068b9c": "dd32c3e2734023f93026e3d1850d081b",
".git/objects/21/9dc25e77c46088d4c5aa8aaadd31a13e3aa75d": "2c017116e4d1980d7859c3a7a7f5c6d1",
".git/objects/62/c89ee094658c7a9465824fdb42793a64ea557b": "133cd5da638f245b079d9e9cdc29ae38",
".git/objects/7b/7d1295a98575030c074492f59e576a81e7ef1b": "0560d995b339a578e2a4987f0b21ff0f",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/a6/da6937e6e9502f97f4f8fc7fc6c27902e95a93": "16effe4c297d8f3bc65a7e697a33eb78",
".git/objects/af/c94264d8cff53e24c2ebf5c7c17137f2c976e4": "36df627762b0f36dc2fa70dae37fdc81",
".git/objects/34/51943950aabb2bca61af2656d4bd281383b104": "6e10e0c5563f8871ce23a7567dbd3306",
".git/objects/6a/dc764af481e28babadf53f6c3f55019e5920b4": "62b8d7f9e5f0648be7f205bc0c0888ae",
".git/objects/6a/5dc71e12698701b4c74f06d40bf37c9da20892": "30ed990546a5188e93ad846bc2306268",
".git/objects/95/67788d5d7dc2c041f31c083c1f1bd3322382b5": "0c3579284e5ac375fdca7c198a70e193",
".git/objects/7a/8b1c1fa7a5bfb87714bf10d9912590bf6f65cb": "d832428327b3afe2bac7a5f8025c9f8c",
".git/objects/6f/f6b5d4f594349d9614d8be44f2e93d93c2ead7": "8264e4f7bae4b416ab196e66b9b5620f",
".git/objects/0e/479f74f409901425504b670ffd60ad44466d56": "ec70906928a86d30d2bd8401979d7543",
".git/objects/d8/9f3194ac8224f363790698e24bba4ba1c623a4": "a29bf47dffa0d5dee5d57aa3b3809e65",
".git/objects/01/f8c1f5119e63edd453063987a5f473da3b5416": "d6f974dca1f2bf17ee529c6247f10e98",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/35/9cab337ae1b0fad3ab5cc4f55fe3348e9f0480": "053c16f3b6dc17b2bfba9767d13792ea",
".git/objects/35/2e6a8d567f34cf2ee7d643899ef6289317bb2b": "00702942fd6cf03a90dff4f2a0f4ec3f",
".git/objects/35/cde722be745305967ec0372e9c79ca31527aa5": "cc2c735833d0632336234cb407af5d54",
".git/objects/7c/84bac91832364ffcf9a20bcb9168b93fc15084": "bdf8673dec936afcb33b6784815ab45d",
".git/objects/7c/09d499f23e8c9cfadbd067e09e62b423cd8b4a": "4f5d6ea007527788d254cd3ceeb9b8a8",
".git/objects/85/b5daab35a0eee0950dd41f756c6bbeb7c5adcb": "f6a6be4bdf76379c59438ad07e0ecdcf",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/85/912d470477988673d82ab4bf9ebfcd9836a07f": "c1c18ffb5a6a6a2dc1004493f2c8cad8",
".git/objects/85/1fa4d7fb030e3e23b06f1dd83418a9840e3999": "7ddb12afbabb879ac0dd1d53404704cb",
".git/objects/ee/b1aed0ab0bb416ae4c76483c619236a90059c0": "d8957360bd7ed5f8007e81d2dfc91f98",
".git/objects/91/172bf433954a4016d73193c5d2b3f91b00f1cc": "dfc98d23da932b628ede1d94ad8ad754",
".git/objects/c1/12a9971615c2c537dbe2a9dc21b3ecb1bca32d": "e2c17cfb5ec79c3ba60384039c3eb5ce",
".git/objects/33/59da39b3095a38c9562cf81b8df395e1a25690": "63a41115e94acbf889c5d57999f1c919",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f6/80f14fda525f0f7776f466eb94a713f24ed6bd": "c1ad2041b957cf463097684f7a378fcc",
".git/REBASE_HEAD": "ed775c23038a119caa68c87498bea6b4",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/FETCH_HEAD": "95b761355194f56e04be7372b409e6d5",
".git/config": "029041b878e353a96863a45c6ca528ce",
".git/COMMIT_EDITMSG": "6f62be1737610a2e4cd5b4441238c856",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/ORIG_HEAD": "ed775c23038a119caa68c87498bea6b4",
".git/logs/refs/remotes/origin/main": "a7c994a8ccf9a107e672746c4e9eee64",
".git/logs/refs/heads/main": "4cbc86d7d6719a79a75111cf4a9e635b",
".git/logs/HEAD": "b307245363413492712bfa45ba512f10",
".git/index": "078b7e37a95e69363f5e3f155b367fd9",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
"manifest.json": "7eaa25409738f3602bb0bb0de076ae82",
"main.dart.js": "d43c6ff0a4cf10e8de1b9cda89c53c94",
"assets/web/assets/icon_22.png": "88c7b852484eb5a017722fb584db7ba8",
"assets/web/assets/google.png": "d79194de514470bd4040c2bfe88b10b7",
"assets/web/assets/logo_new.png": "01659a46afb6891817cd8e35442fb7ee",
"assets/web/assets/icon_11.png": "cc425beca12c51c8b23342c703210a55",
"assets/web/assets/icon.jpeg": "743d07357806606226afd52634661b1c",
"assets/web/assets/icon.png": "cfb67867c8e4afa162779628e66e8ae6",
"assets/web/assets/logo_new_2.png": "bd09eda2e368fa3415f0dc5328352574",
"assets/web/assets/icon_2.jpeg": "ea2bfeb56eb773d9fce079133b49f9f3",
"assets/web/assets/logo.png": "d60a3c20e1f4d9fc9cc5db48ad256c02",
"assets/web/assets/bg.png": "746c302fc1159f41d3da76a00fe90644",
"assets/web/assets/icon_2.png": "778b092b7b672f778b6a743ec176c157",
"assets/AssetManifest.bin.json": "37a5c7112966012316b55fe5bfb03559",
"assets/icon_22.png": "88c7b852484eb5a017722fb584db7ba8",
"assets/NOTICES": "57dfa606d2fe23715d44eb29da79b21e",
"assets/google.png": "d79194de514470bd4040c2bfe88b10b7",
"assets/logo_new.png": "01659a46afb6891817cd8e35442fb7ee",
"assets/icon_11.png": "cc425beca12c51c8b23342c703210a55",
"assets/icon.jpeg": "743d07357806606226afd52634661b1c",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "5742e45f296b8cf1dac2532b28647e6b",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/AssetManifest.json": "13780ce8e1b70250e29956c49271e867",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "f3307f62ddff94d2cd8b103daf8d1b0f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "84f4dc505afa6bea9716ca8703094d3e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "17ee8e30dde24e349e70ffcdc0073fb0",
"assets/icon.png": "cfb67867c8e4afa162779628e66e8ae6",
"assets/logo_new_2.png": "bd09eda2e368fa3415f0dc5328352574",
"assets/icon_2.jpeg": "ea2bfeb56eb773d9fce079133b49f9f3",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/logo.png": "d60a3c20e1f4d9fc9cc5db48ad256c02",
"assets/bg.png": "746c302fc1159f41d3da76a00fe90644",
"assets/icon_2.png": "778b092b7b672f778b6a743ec176c157",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"flutter_bootstrap.js": "1162dd55e860524d6192df8649131313",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"index.html": "091228932ef30a7dbb33df9e3dadf7fb",
"/": "091228932ef30a7dbb33df9e3dadf7fb",
"version.json": "7eccba52b18e7cd68db87edb1ef477bb"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
