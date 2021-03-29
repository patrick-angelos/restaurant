(()=>{"use strict";var e={917:(e,n,t)=>{t.d(n,{Z:()=>i});var o=t(645),r=t.n(o)()((function(e){return e[1]}));r.push([e.id,"html, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n    vertical-align: baseline;\n    box-sizing: border-box;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n    display: block;\n    box-sizing: border-box;\n}\nbody {\n    line-height: 1;\n    box-sizing: border-box;\n}\nol, ul {\n    list-style: none;\n    box-sizing: border-box;\n}\nblockquote, q {\n    quotes: none;\n    box-sizing: border-box;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n\na{\n    text-decoration: none;\n    color: inherit;\n}\n\nbutton {\n    border-width: 0;\n    cursor: pointer;\n}",""]);const i=r},426:(e,n,t)=>{t.d(n,{Z:()=>i});var o=t(645),r=t.n(o)()((function(e){return e[1]}));r.push([e.id,".fixed {\n  position: fixed;\n}\n\n.flex {\n  display: flex;\n}\n\n.flex-md {\n  display: block;\n}\n\n.space-between {\n  justify-content: space-between;\n}\n\n.reverse {\n  flex-direction: row-reverse;\n}\n\n.m-top-10 {\n  margin-top: 10px;\n}\n\n.m-top-20 {\n  margin-top: 20px;\n}\n\n.m-top-50 {\n  margin-top: 50px;\n}\n\n.m-left-10 {\n  margin-left: 10px;\n}\n\n.color-white {\n  color: rgb(184, 184, 184);\n}\n\n.navbar {\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 60px;\n  z-index: 2;\n  background-color: rgb(0, 75, 0);\n}\n\n.center {\n  text-align: center;\n  padding-top: 20px;\n  padding-bottom: 20px;\n}\n\n.main {\n  width: 100%;\n  min-height: calc(100vh - 60px);\n  margin-top: 60px;\n  overflow: hidden;\n}\n\n.bg-img {\n  width: 100%;\n  height: calc(100vh - 60px);\n  top: 60px;\n}\n\n.color-green {\n  color: rgb(0, 75, 0);\n}\n\n.footer {\n  height: 60px;\n  width: 100%;\n  background-color: rgb(0, 75, 0);\n}\n\n.wrapper {\n  position: relative;\n  max-width: 900px;\n  margin: 15% auto;\n}\n\n.item {\n  background-color: #6e1c19;\n  padding: 80px;\n}\n\n.tab {\n  position: absolute;\n  padding: 15px;\n  top: -45px;\n  cursor: pointer;\n  background-color: #9b2723;\n}\n\n.active {\n  background-color: #6e1c19;\n}\n\n.category-title {\n  text-align: center;\n  margin-bottom: 50px;\n}\n\n.img-container {\n  width: 100%;\n}\n\n.menu-img {\n  width: 100%;\n}\n\n.options {\n  width: 100%;\n}\n\n@media (min-width: 768px) {\n  .flex-md {\n    display: flex;\n  }\n\n  .options {\n    width: 45%;\n  }\n\n  .img-container {\n    width: 45%;\n  }\n}\n",""]);const i=r},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=e(n);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,o){"string"==typeof e&&(e=[[null,e,""]]);var r={};if(o)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(r[a]=!0)}for(var c=0;c<e.length;c++){var d=[].concat(e[c]);o&&r[d[0]]||(t&&(d[2]?d[2]="".concat(t," and ").concat(d[2]):d[2]=t),n.push(d))}},n}},379:(e,n,t)=>{var o,r=function(){var e={};return function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[n]=t}return e[n]}}(),i=[];function a(e){for(var n=-1,t=0;t<i.length;t++)if(i[t].identifier===e){n=t;break}return n}function c(e,n){for(var t={},o=[],r=0;r<e.length;r++){var c=e[r],d=n.base?c[0]+n.base:c[0],s=t[d]||0,l="".concat(d," ").concat(s);t[d]=s+1;var p=a(l),u={css:c[1],media:c[2],sourceMap:c[3]};-1!==p?(i[p].references++,i[p].updater(u)):i.push({identifier:l,updater:h(u,n),references:1}),o.push(l)}return o}function d(e){var n=document.createElement("style"),o=e.attributes||{};if(void 0===o.nonce){var i=t.nc;i&&(o.nonce=i)}if(Object.keys(o).forEach((function(e){n.setAttribute(e,o[e])})),"function"==typeof e.insert)e.insert(n);else{var a=r(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(n)}return n}var s,l=(s=[],function(e,n){return s[e]=n,s.filter(Boolean).join("\n")});function p(e,n,t,o){var r=t?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(e.styleSheet)e.styleSheet.cssText=l(n,r);else{var i=document.createTextNode(r),a=e.childNodes;a[n]&&e.removeChild(a[n]),a.length?e.insertBefore(i,a[n]):e.appendChild(i)}}function u(e,n,t){var o=t.css,r=t.media,i=t.sourceMap;if(r?e.setAttribute("media",r):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}var m=null,f=0;function h(e,n){var t,o,r;if(n.singleton){var i=f++;t=m||(m=d(n)),o=p.bind(null,t,i,!1),r=p.bind(null,t,i,!0)}else t=d(n),o=u.bind(null,t,n),r=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return o(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;o(e=n)}else r()}}e.exports=function(e,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=(void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o));var t=c(e=e||[],n);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var o=0;o<t.length;o++){var r=a(t[o]);i[r].references--}for(var d=c(e,n),s=0;s<t.length;s++){var l=a(t[s]);0===i[l].references&&(i[l].updater(),i.splice(l,1))}t=d}}}},910:(e,n,t)=>{e.exports=t.p+"d3055d696fd7ecc656c0.jpeg"},170:(e,n,t)=>{e.exports=t.p+"54a98599a57771cd15d6.png"},137:(e,n,t)=>{e.exports=t.p+"01328b51bbe0cf0e64e0.jpg"},367:(e,n,t)=>{e.exports=t.p+"6ff53bc1bf9a7c75c12e.jpg"}},n={};function t(o){var r=n[o];if(void 0!==r)return r.exports;var i=n[o]={id:o,exports:{}};return e[o](i,i.exports,t),i.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var o=n.getElementsByTagName("script");o.length&&(e=o[o.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),(()=>{var e=t(137);const n=document.querySelector("#content");function o(){const e=document.querySelector(".item"),n=document.createElement("h2");n.classList.add("center"),n.textContent="La Pasta Italian cusine";const t=document.createElement("p");t.classList.add("center"),t.textContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",e.appendChild(n),e.appendChild(t)}var r=t(367),i=t(170),a=t(910);const c=(e,n,t)=>({getTitle:()=>e,getImg:()=>n,getOptions:()=>t}),d=(e,n,t)=>({getTitle:()=>e,getPrice:()=>n,getDescription:()=>t}),s=d("Lorem ipsum dolor sit amet","6,20","Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium."),l=d("Lorem ipsum dolor","6,20","Sed ut perspiciatis unde omnis iste natus error sit voluptatem."),p=[c("Pizza",r,[s,l,s,l]),c("Pasta",i,[s,l,s,l]),c("Burgers",a,[s,l,s,l])];function u(e){const n=document.createElement("div");n.classList.add("color-white","flex","space-between");const t=document.createElement("h4");t.textContent=`${e.getTitle()}`;const o=document.createElement("p");o.textContent=`${e.getPrice()}`,n.appendChild(t),n.appendChild(o);const r=document.createElement("p");r.classList.add("m-top-10"),r.textContent=e.getDescription();const i=document.createElement("div");return i.classList.add("m-top-10"),i.appendChild(n),i.appendChild(r),i}function m(e,n){const t=document.createElement("div");t.classList.add("options");const o=e.getOptions();for(let e=0;e<o.length;e+=1){const n=u(o[e]);t.appendChild(n)}const r=function(e){const n=document.createElement("img");n.classList.add("menu-img"),n.src=e;const t=document.createElement("div");return t.classList.add("img-container"),t.appendChild(n),t}(e.getImg()),i=document.createElement("div");i.classList.add("flex-md","space-between",`${n}`),i.appendChild(r),i.appendChild(t);const a=function(e){const n=document.createElement("h3");return n.textContent=e,n.classList.add("category-title"),n}(e.getTitle()),c=document.createElement("div");return c.classList.add("menu-category","m-top-20"),c.appendChild(a),c.appendChild(i),c}function f(e,n){const t=document.createElement("a");t.classList.add("m-left-10"),t.href="#";const o=document.createElement("i");return o.classList.add(e,n),t.appendChild(o),t}var h=t(379),g=t.n(h),b=t(917);g()(b.Z,{insert:"head",singleton:!1}),b.Z.locals;var v=t(426);g()(v.Z,{insert:"head",singleton:!1}),v.Z.locals,(()=>{const e=document.createElement("header"),t=document.createElement("nav");t.classList.add("fixed","navbar");const o=document.createElement("h1");o.textContent="La Pasta",o.classList.add("center"),t.appendChild(o),e.appendChild(t),n.appendChild(e)})(),(()=>{const t=document.createElement("main"),o=document.createElement("div");o.classList.add("bg-img","fixed"),o.style.background=`url(${e})`,o.style.backgroundRepeat="no-repeat",o.style.backgroundSize="cover";const r=document.createElement("div");r.classList.add("wrapper");const i=document.createElement("div");i.classList.add("tab","active"),i.textContent="About";const a=document.createElement("div");a.classList.add("tab"),a.textContent="Menu";const c=document.createElement("div");c.classList.add("tab"),c.textContent="Contact";const d=document.createElement("div");d.classList.add("item"),r.appendChild(i),r.appendChild(a),r.appendChild(c),r.appendChild(d),t.appendChild(o),t.appendChild(r),n.appendChild(t),a.style.left=`${i.offsetWidth}px`,c.style.left=`${i.offsetWidth+a.offsetWidth}px`})(),o();const x=document.querySelector(".item"),C=document.querySelectorAll(".tab"),y=[o,function(){const e=document.querySelector(".item");for(let n=0;n<p.length;n+=1){let t="n";n%2==0&&(t="reverse");const o=m(p[n],t);e.appendChild(o)}},function(){const e=document.querySelector(".item"),n=document.createElement("h2");n.classList.add("center"),n.textContent="Follow us on:";const t=f("fab","fa-instagram"),o=f("fab","fa-twitter"),r=f("fab","fa-facebook-f");n.appendChild(t),n.appendChild(o),n.appendChild(r);const i=document.createElement("p");i.classList.add("center"),i.textContent="You can contact us here, 'adress'",e.appendChild(i),e.appendChild(n)}];function w(e){x.innerHTML="";for(let e=0;e<C.length;e+=1)C[e].classList.remove("active");C[e].classList.add("active"),y[e]()}for(let e=0;e<C.length;e+=1)C[e].onclick=w.bind(null,e)})()})();