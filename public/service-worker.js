if(!self.define){let e,s={};const n=(n,a)=>(n=new URL(n+".js",a).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(a,i)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let c={};const o=e=>n(e,t),r={module:{uri:t},exports:c,require:o};s[t]=Promise.all(a.map((e=>r[e]||o(e)))).then((e=>(i(...e),c)))}}define(["./workbox-7c2a5a06"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"434af078512000203212119bf342c673"},{url:"/_next/static/Sigojamn0LA_RgfqKj8k8/_buildManifest.js",revision:"236a99977be2988ad5a4442065879b74"},{url:"/_next/static/Sigojamn0LA_RgfqKj8k8/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/13-c0336484e7eedb2d.js",revision:"Sigojamn0LA_RgfqKj8k8"},{url:"/_next/static/chunks/fd9d1056-5fc0659828b82348.js",revision:"Sigojamn0LA_RgfqKj8k8"},{url:"/_next/static/chunks/framework-bbd6635ffcdac37f.js",revision:"Sigojamn0LA_RgfqKj8k8"},{url:"/_next/static/chunks/main-794fd98b1d134afd.js",revision:"Sigojamn0LA_RgfqKj8k8"},{url:"/_next/static/chunks/main-app-3410fc4aa5fb5914.js",revision:"Sigojamn0LA_RgfqKj8k8"},{url:"/_next/static/chunks/pages/_app-b3af922276b30dd6.js",revision:"Sigojamn0LA_RgfqKj8k8"},{url:"/_next/static/chunks/pages/_error-ff9ea5b06aea70a9.js",revision:"Sigojamn0LA_RgfqKj8k8"},{url:"/_next/static/chunks/pages/index-2ac447e0d0bff04f.js",revision:"Sigojamn0LA_RgfqKj8k8"},{url:"/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"/_next/static/chunks/webpack-7c3664812a47bba3.js",revision:"Sigojamn0LA_RgfqKj8k8"},{url:"/_next/static/css/653967b5e1c20ea8.css",revision:"653967b5e1c20ea8"},{url:"/images/bg-sidebar-desktop.svg",revision:"c92d1f80f891b766d98d547f88928981"},{url:"/images/bg-sidebar-mobile.svg",revision:"e02fa37c89bb934513bcd4e13fbd3949"},{url:"/images/icon-192x192.png",revision:"a7c4eb304715754353e87f412fcb12c7"},{url:"/images/icon-256x256.png",revision:"c579406696553a0af6b33d635b8da00e"},{url:"/images/icon-384x384.png",revision:"48f3cc7a4db5f1269f2f2434b0df027a"},{url:"/images/icon-512x512.png",revision:"04ba071686356a80cb348cb99d782008"},{url:"/images/icon-advanced.svg",revision:"4f6f45aad5b6d66e7e23b5cff237f718"},{url:"/images/icon-arcade.svg",revision:"e999314c3ef64cc95cebc2427a87414a"},{url:"/images/icon-pro.svg",revision:"9321837a44718e56638aaf4410db2470"},{url:"/images/icon-thank-you.svg",revision:"a80e58e4b8751e0621e2461b289747d4"},{url:"/images/manifest.json",revision:"2e3397ce20b9037ed31bd78429807eb0"},{url:"/images/mobileView.png",revision:"defa4ba8685bea9e4ca28eea97c57083"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:n,state:a})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
