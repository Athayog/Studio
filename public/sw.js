if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let a=Promise.resolve();return s[e]||(a=new Promise((async a=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=a}else importScripts(e),a()}))),a.then((()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]}))},a=(a,s)=>{Promise.all(a.map(e)).then((e=>s(1===e.length?e[0]:e)))},s={require:Promise.resolve(a)};self.define=(a,c,i)=>{s[a]||(s[a]=Promise.resolve().then((()=>{let s={};const t={uri:location.origin+a.slice(1)};return Promise.all(c.map((a=>{switch(a){case"exports":return s;case"module":return t;default:return e(a)}}))).then((e=>{const a=i(...e);return s.default||(s.default=a),s}))})))}}define("./sw.js",["./workbox-a8b10d99"],(function(e){"use strict";importScripts("worker-VlGj86ztNyI8LF23JTJhS.js"),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/404.svg",revision:"254b0696d836d00d0dd50aef08e8fbf7"},{url:"/Logo_FIlled_No_Text.png",revision:"0f961c70503f923d090dd9a273ce1591"},{url:"/Logo_Filled.png",revision:"53e6ca9987c00e94ca711f4fc2044315"},{url:"/ProfileFallback.svg",revision:"274c1245805e6fc55ce3d9ceb946915f"},{url:"/Rys_200_Logo.png",revision:"af08fe3d912b80c0b8cfeffc8f076118"},{url:"/_next/static/VlGj86ztNyI8LF23JTJhS/_buildManifest.js",revision:"VlGj86ztNyI8LF23JTJhS"},{url:"/_next/static/VlGj86ztNyI8LF23JTJhS/_ssgManifest.js",revision:"VlGj86ztNyI8LF23JTJhS"},{url:"/_next/static/chunks/05d954cf.c78f2832844e5df9d4ca.js",revision:"VlGj86ztNyI8LF23JTJhS"},{url:"/_next/static/chunks/17007de1.46aac5e194416d173c4e.js",revision:"VlGj86ztNyI8LF23JTJhS"},{url:"/_next/static/chunks/180c65b5445eb609a7eba18f2d7a66654f23436d.14c23c8b8dc3f46ea449.js",revision:"VlGj86ztNyI8LF23JTJhS"},{url:"/_next/static/chunks/1bfc9850.1eca234033b41517b7cf.js",revision:"VlGj86ztNyI8LF23JTJhS"},{url:"/_next/static/chunks/1c9f75c09fbf7d6c1ab33b040aa82650cfcac444.b699f7b3302a53fd4a9d.js",revision:"VlGj86ztNyI8LF23JTJhS"},{url:"/_next/static/chunks/200b0f08b3f9dec313e2299266ff1b6e951da367.f9e0a7bf03a76a92330a.js",revision:"VlGj86ztNyI8LF23JTJhS"},{url:"/_next/static/chunks/2a1eea4572efa00ccc46c6ae3bbde82a5fc46799.c9a9b262b0ddc343c688.js",revision:"VlGj86ztNyI8LF23JTJhS"},{url:"/_next/static/chunks/30766e7cdcfada403c6ba82dbee075e1c22060a3.1bdf256a7c390ed13a7f.js",revision:"VlGj86ztNyI8LF23JTJhS"},{url:"/_next/static/chunks/31664189.a482251f0d6cdf73fe2f.js",revision:"VlGj86ztNyI8LF23JTJhS"},{url:"/_next/static/chunks/31ca615d728bded19060c93cc29d33fb78eca6b6.53c7418bb421a085810c.js",revision:"VlGj86ztNyI8LF23JTJhS"},{url:"/_next/static/chunks/46e9069e296df7092453aa6c669f41f985ca38b3.4ddf107d1a78ebe7d7bb.js",revision:"VlGj86ztNyI8LF23JTJhS"},{url:"/_next/static/chunks/4d776529d2293de9ad7beed50cd90cda41cc3688.e0370055d27c756ea372.js",revision:"VlGj86ztNyI8LF23JTJhS"},{url:"/_next/static/chunks/4d972829f026df6d1760c7254f9dfc4c1c04a327.a5391cce9dd9d38b878d.js",revision:"VlGj86ztNyI8LF23JTJhS"},{url:"/_next/static/chunks/5be5f1ac07a208242ea19b3efcae0372fe7ed031.e7b94d36fb4e77688005.js",revision:"VlGj86ztNyI8LF23JTJhS"},{url:"/_next/static/chunks/6626481927d7aec41cb1fccbb3bdbd2fa66bd58e.d4734cd7d79e9b7eea93.js",revision:"VlGj86ztNyI8LF23JTJhS"},{url:"/_next/static/chunks/72a1ebd57a7d9371c74841b20368222c672c8ff0.ab80d246b8429c3b2bed.js",revision:"VlGj86ztNyI8LF23JTJhS"},{url:"/_next/static/chunks/75f360e5eba750b63d325308b994cff0435ac5a7.b55ecc5686bc02a6cadf.js",revision:"VlGj86ztNyI8LF23JTJhS"},{url:"/_next/static/chunks/78e521c3.a4cf697ace99dcd68928.js",revision:"VlGj86ztNyI8LF23JTJhS"},{url:"/_next/static/chunks/8821a8e134f02a96d551b47fcbbb95ca97f2aa85.b81379e951adb95aff36.js",revision:"VlGj86ztNyI8LF23JTJhS"},{url:"/_next/static/chunks/8c4929de.a9925960561a71f34764.js",revision:"VlGj86ztNyI8LF23JTJhS"},{url:"/_next/static/chunks/8c7b1368.26a25deb26cdf4749e54.js",revision:"VlGj86ztNyI8LF23JTJhS"},{url:"/_next/static/chunks/95b64a6e.ff4cfc6e11126c48ab5f.js",revision:"VlGj86ztNyI8LF23JTJhS"},{url:"/_next/static/chunks/9f2d8f89d469c62b72f0f5e5ae01911a2f94d493.64ecb5664075cea4969e.js",revision:"VlGj86ztNyI8LF23JTJhS"},{url:"/_next/static/chunks/a207bae4420351ec43f21eeb417e09a546a4d17b.e23a9518ed04eb12890e.js",revision:"VlGj86ztNyI8LF23JTJhS"},{url:"/_next/static/chunks/c4e8da0c.26997b6de833834e910c.js",revision:"VlGj86ztNyI8LF23JTJhS"},{url:"/_next/static/chunks/cc43abe466ba67208de07bfbe3e30601bcfa503b.3e0e2cc5fd5bff2ee6d0.js",revision:"VlGj86ztNyI8LF23JTJhS"},{url:"/_next/static/chunks/commons.86a5043b44f829a607bb.js",revision:"VlGj86ztNyI8LF23JTJhS"},{url:"/_next/static/chunks/d0447323.cf8a822688b02e4a09a7.js",revision:"VlGj86ztNyI8LF23JTJhS"},{url:"/_next/static/chunks/d74e515b31b2d9208b7e6cadfe2e98ee2e03d20a.d9da81ec96c2a931a7ae.js",revision:"VlGj86ztNyI8LF23JTJhS"},{url:"/_next/static/chunks/d7eeaac4.66c7dfe1430a11eef48b.js",revision:"VlGj86ztNyI8LF23JTJhS"},{url:"/_next/static/chunks/dbc733d70ef82e4c31f61ab953b9c30ecf45fe65.385ff023fa987fc43ed3.js",revision:"VlGj86ztNyI8LF23JTJhS"},{url:"/_next/static/chunks/f5ee1dbc.8f96c05767cc94e0d196.js",revision:"VlGj86ztNyI8LF23JTJhS"},{url:"/_next/static/chunks/fa9c58a49ace3382bb6ba5d743ca7390ce3caddd.9b36e744f99f9579e627.js",revision:"VlGj86ztNyI8LF23JTJhS"},{url:"/_next/static/chunks/ff239f9d.bb05bc3964cee2d74940.js",revision:"VlGj86ztNyI8LF23JTJhS"},{url:"/_next/static/chunks/framework.1daa53885d0d89f974e4.js",revision:"VlGj86ztNyI8LF23JTJhS"},{url:"/_next/static/chunks/main-1659030f046541956111.js",revision:"VlGj86ztNyI8LF23JTJhS"},{url:"/_next/static/chunks/pages/404-efdcafa86fd4616ba855.js",revision:"VlGj86ztNyI8LF23JTJhS"},{url:"/_next/static/chunks/pages/_app-46d8cccc68390f037350.js",revision:"VlGj86ztNyI8LF23JTJhS"},{url:"/_next/static/chunks/pages/_error-ec3b2f7ec2c8b2ba5e67.js",revision:"VlGj86ztNyI8LF23JTJhS"},{url:"/_next/static/chunks/pages/about-6e3533a72be0e8fcd8e2.js",revision:"VlGj86ztNyI8LF23JTJhS"},{url:"/_next/static/chunks/pages/account-d85dcd335532c92c8cdd.js",revision:"VlGj86ztNyI8LF23JTJhS"},{url:"/_next/static/chunks/pages/account/%5BaccountType%5D-313015b8ef7d64d6b511.js",revision:"VlGj86ztNyI8LF23JTJhS"},{url:"/_next/static/chunks/pages/admin-942fc4120413493f5863.js",revision:"VlGj86ztNyI8LF23JTJhS"},{url:"/_next/static/chunks/pages/admin/account-273396631e9683d5774d.js",revision:"VlGj86ztNyI8LF23JTJhS"},{url:"/_next/static/chunks/pages/admin/customers-df3664d10dad0c20f8ca.js",revision:"VlGj86ztNyI8LF23JTJhS"},{url:"/_next/static/chunks/pages/admin/customers/%5BuserId%5D-9e177a85ac0746c17e6e.js",revision:"VlGj86ztNyI8LF23JTJhS"},{url:"/_next/static/chunks/pages/admin/dashboard-8ba1d7c1d50a832b6d6b.js",revision:"VlGj86ztNyI8LF23JTJhS"},{url:"/_next/static/chunks/pages/admin/faq-594d2a7eec2aece93ded.js",revision:"VlGj86ztNyI8LF23JTJhS"},{url:"/_next/static/chunks/pages/admin/forms-004684697231aff8a16a.js",revision:"VlGj86ztNyI8LF23JTJhS"},{url:"/_next/static/chunks/pages/admin/forms/enquiry-07a8b74202e4e445bedd.js",revision:"VlGj86ztNyI8LF23JTJhS"},{url:"/_next/static/chunks/pages/admin/forms/leads-2c1037a57166cefbc998.js",revision:"VlGj86ztNyI8LF23JTJhS"},{url:"/_next/static/chunks/pages/admin/forms/offerings-5d65bb14458a83e283a1.js",revision:"VlGj86ztNyI8LF23JTJhS"},{url:"/_next/static/chunks/pages/admin/images-1bbe57854c33ec3477e3.js",revision:"VlGj86ztNyI8LF23JTJhS"},{url:"/_next/static/chunks/pages/admin/offerings-aa6af59e9de2187cc22a.js",revision:"VlGj86ztNyI8LF23JTJhS"},{url:"/_next/static/chunks/pages/admin/offerings/%5BofferingsType%5D-9c937192e224719f1985.js",revision:"VlGj86ztNyI8LF23JTJhS"},{url:"/_next/static/chunks/pages/admin/schedule-601777e0531e02142698.js",revision:"VlGj86ztNyI8LF23JTJhS"},{url:"/_next/static/chunks/pages/admin/schedule/%5Btype%5D-fa44f3a035b72db32f5c.js",revision:"VlGj86ztNyI8LF23JTJhS"},{url:"/_next/static/chunks/pages/admin/testimonials-cc11cbba71e079295f23.js",revision:"VlGj86ztNyI8LF23JTJhS"},{url:"/_next/static/chunks/pages/admin/users-ac3d7807a2d5388c07ef.js",revision:"VlGj86ztNyI8LF23JTJhS"},{url:"/_next/static/chunks/pages/blog/%5BblogId%5D-7137b8762a6c5f9363f3.js",revision:"VlGj86ztNyI8LF23JTJhS"},{url:"/_next/static/chunks/pages/index-b15978588c94b427e455.js",revision:"VlGj86ztNyI8LF23JTJhS"},{url:"/_next/static/chunks/pages/offerings/chikitsa-c64ce6194f46e1551140.js",revision:"VlGj86ztNyI8LF23JTJhS"},{url:"/_next/static/chunks/pages/offerings/online-6fe2477395a9df9eaf50.js",revision:"VlGj86ztNyI8LF23JTJhS"},{url:"/_next/static/chunks/pages/offerings/onsite-3a91badcb0b50b9deb89.js",revision:"VlGj86ztNyI8LF23JTJhS"},{url:"/_next/static/chunks/pages/offerings/personal-4f5bf79721ec37844fa4.js",revision:"VlGj86ztNyI8LF23JTJhS"},{url:"/_next/static/chunks/pages/offerings/shikshana-a8556e92694f35912db7.js",revision:"VlGj86ztNyI8LF23JTJhS"},{url:"/_next/static/chunks/pages/offerings/shikshana/graduates-7674d05860489f827693.js",revision:"VlGj86ztNyI8LF23JTJhS"},{url:"/_next/static/chunks/pages/offerings/space-ef07a0bd0d6af4b42705.js",revision:"VlGj86ztNyI8LF23JTJhS"},{url:"/_next/static/chunks/pages/offerings/workshops-a3bed47ec52ceb4a8b4f.js",revision:"VlGj86ztNyI8LF23JTJhS"},{url:"/_next/static/chunks/pages/payment/success-657b776b351fc1df0667.js",revision:"VlGj86ztNyI8LF23JTJhS"},{url:"/_next/static/chunks/pages/privacy-8b5dbac22779e0fbbb00.js",revision:"VlGj86ztNyI8LF23JTJhS"},{url:"/_next/static/chunks/pages/refund-1380f3b57960f50a5a3b.js",revision:"VlGj86ztNyI8LF23JTJhS"},{url:"/_next/static/chunks/pages/register/%5Bform%5D-4fdfdb7a98b5883b01de.js",revision:"VlGj86ztNyI8LF23JTJhS"},{url:"/_next/static/chunks/pages/terms-3f76f9752a85c55a55e7.js",revision:"VlGj86ztNyI8LF23JTJhS"},{url:"/_next/static/chunks/polyfills-7c3fbef897d7c8dfaeb1.js",revision:"VlGj86ztNyI8LF23JTJhS"},{url:"/_next/static/chunks/webpack-245f049e565ebf942e09.js",revision:"VlGj86ztNyI8LF23JTJhS"},{url:"/_next/static/css/96811f85db2c9fe54656.css",revision:"VlGj86ztNyI8LF23JTJhS"},{url:"/_next/static/css/a7976ed3707e643f4bc8.css",revision:"VlGj86ztNyI8LF23JTJhS"},{url:"/_next/static/css/ebaaa8b882a17b818014.css",revision:"VlGj86ztNyI8LF23JTJhS"},{url:"/_next/static/images/Logo_Filled-cebdadce7b1477601f65c7708c86e108.png",revision:"VlGj86ztNyI8LF23JTJhS"},{url:"/_next/static/images/ProfileFallback-b8e8dc1fbdb522b7740565080dedc861.svg",revision:"VlGj86ztNyI8LF23JTJhS"},{url:"/_next/static/images/Rys_200_Logo-6daafe922bc90b8e3e8928a3e42cb159.png",revision:"VlGj86ztNyI8LF23JTJhS"},{url:"/_next/static/images/athayogAbout-12f7f59ee7b2ac1d9b768da0570df95b.jpg",revision:"VlGj86ztNyI8LF23JTJhS"},{url:"/_next/static/images/athayogChikitsa-d63def3f92bf5ce9188cf31f1a4e779d.jpg",revision:"VlGj86ztNyI8LF23JTJhS"},{url:"/_next/static/images/athayogOnline-f36af1780c575a7b1f2827526557319c.jpg",revision:"VlGj86ztNyI8LF23JTJhS"},{url:"/_next/static/images/athayogOnsite-47002c6ea406eecf79165369008d8cbf.jpg",revision:"VlGj86ztNyI8LF23JTJhS"},{url:"/_next/static/images/athayogPersonal-f8e3377c9134a2a7800320c011876a12.jpeg",revision:"VlGj86ztNyI8LF23JTJhS"},{url:"/_next/static/images/athayogShikshana-4d75ac7e4351db3f9b0e39dad326d3b3.jpg",revision:"VlGj86ztNyI8LF23JTJhS"},{url:"/_next/static/images/athayogSpace-f856d758d683fa9426891b7407daa390.jpg",revision:"VlGj86ztNyI8LF23JTJhS"},{url:"/_next/static/images/athayogWorkshop-3c557e2723a07bbdfdae870812eddee8.jpg",revision:"VlGj86ztNyI8LF23JTJhS"},{url:"/_next/static/images/logo-63f911939c08f377c6163824e56508f5.png",revision:"VlGj86ztNyI8LF23JTJhS"},{url:"/_next/static/images/manigandan-876e98f8430601402b5dcab324c1a937.jpg",revision:"VlGj86ztNyI8LF23JTJhS"},{url:"/_next/static/images/neeraj-505f2b18da9fd699f759bc4da4dc4a16.jpg",revision:"VlGj86ztNyI8LF23JTJhS"},{url:"/_next/static/images/og-aca767b24d715ce005607de062595ec8.png",revision:"VlGj86ztNyI8LF23JTJhS"},{url:"/_next/static/images/paymentSuccess-9ceeb7ffdbe33a1ff9e909356f0561e0.svg",revision:"VlGj86ztNyI8LF23JTJhS"},{url:"/_next/static/images/sharath-e222320115a1173805da76ccd22c7292.jpg",revision:"VlGj86ztNyI8LF23JTJhS"},{url:"/_next/static/images/svyasa-6606f6ebb842df87397621b2d118e8a9.png",revision:"VlGj86ztNyI8LF23JTJhS"},{url:"/_next/static/images/swathi-ee356d899bf51597b8ef670dd81dbf3c.jpg",revision:"VlGj86ztNyI8LF23JTJhS"},{url:"/_next/static/images/yogaPose1-65b1ccbd5f983b64467be978e7c2b612.jpg",revision:"VlGj86ztNyI8LF23JTJhS"},{url:"/_next/static/images/yogaPose2-57d5aa79c6a5bdfc76ba8d128f2b23e2.jpg",revision:"VlGj86ztNyI8LF23JTJhS"},{url:"/anjali.jpg",revision:"ac6bfb14936b1d02b78eda5470d464de"},{url:"/athayogAbout.jpg",revision:"3ba1994f3c777d585ec78f809fe47d23"},{url:"/athayogChikitsa.jpg",revision:"99f9fd90ac1b93273fe55842df38c194"},{url:"/athayogOnline.jpg",revision:"0acc6320ccabd30d18a08c8c573962f2"},{url:"/athayogOnsite.jpeg",revision:"ee55ca21bfa51e235c24c2f5bc782dc9"},{url:"/athayogOnsite.jpg",revision:"7def94a37da4823c4e2f31ca1d155464"},{url:"/athayogPersonal.jpeg",revision:"a80bbbb9b243a56f733341fa1f854330"},{url:"/athayogShikshana.jpg",revision:"c50038418c93e34c0f4b6686fca58071"},{url:"/athayogSpace.jpg",revision:"0f43589ea5a871ff237805069c5af7ca"},{url:"/athayogWorkshop.jpg",revision:"7ff688dd6d1bdae711d23de9d5232afe"},{url:"/browserconfig.xml",revision:"a493ba0aa0b8ec8068d786d7248bb92c"},{url:"/deep_space.svg",revision:"cc08dc6e5c08b1b11a3a813416c78d77"},{url:"/deepak.jpg",revision:"4ee069e95a348a72bd67ae000ce9612e"},{url:"/defaultCarousel.png",revision:"98359c290ae3530c084d1914e9b4e4ba"},{url:"/favicons/android-chrome-192x192.png",revision:"6e5d82af3260fa17a99f6cbc993351b7"},{url:"/favicons/android-chrome-512x512.png",revision:"5421133e3f29412095b830123c130015"},{url:"/favicons/apple-touch-icon.png",revision:"1a519cf8086741514f4aef05d01c770a"},{url:"/favicons/favicon-16x16.png",revision:"be53b0eb7d2c1f300ce2b6329891d521"},{url:"/favicons/favicon-32x32.png",revision:"ef6e4f59899f1580cfe58fd57c1d7893"},{url:"/favicons/favicon.ico",revision:"30aa48642a2bf15a8fc424a66a0b6437"},{url:"/favicons/icon-192x192.png",revision:"3af13886f93f6b7e6693449643b4467a"},{url:"/favicons/icon-256x256.png",revision:"9a795a08cda8500195d4baeaee0382bf"},{url:"/favicons/icon-384x384.png",revision:"a487e2465e4fd71dbc6a85c9250bd3b6"},{url:"/favicons/icon-512x512.png",revision:"a514c51d12c52fcdecbfab846b9bb69f"},{url:"/favicons/logo.png",revision:"ae12667debdbb661f3a4497511c766a7"},{url:"/favicons/maskable_icon.png",revision:"858a2da104b19c84b589a09cb6e1c591"},{url:"/favicons/mstile-150x150.png",revision:"556a31c9102b6e963a9d6751fdce3581"},{url:"/favicons/site.webmanifest",revision:"d0af8da4ff37b0bde1b2a4a767bf826a"},{url:"/favicons/wallhaven-v9gvz5.jpg",revision:"2409e046bf5f848830417ea03f88a7a5"},{url:"/kamaljeet.jpg",revision:"bc0ca6fa1b96baf621589b18b6c0fc49"},{url:"/kavitha.jpg",revision:"7f52ca5b027e11445af71b51b9c50336"},{url:"/manifest.json",revision:"f1099454999c93c31f90d3cc652fd2a1"},{url:"/manigandan.jpg",revision:"4cd48f0d78156ea82d32d815eb2ac1e1"},{url:"/neeraj.jpg",revision:"275fbc6cfca4a06721b4ace058045df1"},{url:"/og.png",revision:"e99972e3fe50bd7c9cf36a92ade6ab7a"},{url:"/paymentFailure.svg",revision:"14b8ec2430068425a3174f0a4d71d4ab"},{url:"/paymentSuccess.svg",revision:"5a81d229440c634531b39e6df11745c5"},{url:"/prashant.jpg",revision:"009b6656d7e90d544cf901ff20d5ffc6"},{url:"/privacy.md",revision:"2d93c8169639e49fe03cfb13152ee21b"},{url:"/sharath.jpg",revision:"0a1755d654c2a7a620fa9cc27b9c0734"},{url:"/sitemap.xml",revision:"90079963a8974c03f6cb4158bb2ef4a5"},{url:"/spandhana.jpg",revision:"4fc7a1599d906461dd3f1387f99bf5fb"},{url:"/svyasa.jpeg",revision:"d5e0e011a6705f79d986b94c485bca1f"},{url:"/svyasa.png",revision:"72a7ac7e934e4d5a6fb2f547efa0aed5"},{url:"/swathi.jpg",revision:"c48111f5a7cebe53bb661a548c86f237"},{url:"/video_testimonials_1.mp4",revision:"cfb8fa90f0b6b5b1b66cf84ce96185a3"},{url:"/video_testimonials_2.mp4",revision:"953c51089a7c4bbb57ab524c6474c8de"},{url:"/video_testimonials_3.mp4",revision:"e2fc7d515934544c6bbda1d6aaf0b3b0"},{url:"/video_testimonials_4.mp4",revision:"4688831fa4290606416b655e8355b4c6"},{url:"/yogaPose1.jpg",revision:"d1db624e6214d44f31a5a06ea5ece29f"},{url:"/yogaPose2.jpg",revision:"4437ee22d0694c7760f2d6d7577ebd4a"},{url:"/yogaPose3.jpg",revision:"1294a4cdde9a1e7e27a06f93e2d7a580"},{url:"/yoga_office.jpg",revision:"eabcf4c2e80f144819e57549877d727f"},{url:"/yoga_with_kids.jpg",revision:"9034fcd298ff3e44bc4a49f54bcc7b9a"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[new e.ExpirationPlugin({maxEntries:1,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/.*/i,new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));
