(()=>{"use strict";const e=document.querySelector("#content");(()=>{const t=document.createElement("header"),n=document.createElement("nav");n.classList.add("fixed","navbar");const d=document.createElement("h1");d.textContent="Restaurant name",d.classList.add("center"),n.appendChild(d),t.appendChild(n),e.appendChild(t)})(),(()=>{const t=document.createElement("main");t.classList.add("main","background");const n=document.createElement("div");n.classList.add("wrapper");const d=document.createElement("div");d.classList.add("tab"),d.textContent="About";const a=document.createElement("div");a.classList.add("tab"),a.textContent="Menu";const c=document.createElement("div");c.classList.add("tab"),c.textContent="Contact";const s=document.createElement("div");s.classList.add("item"),n.appendChild(d),n.appendChild(a),n.appendChild(c),n.appendChild(s),t.appendChild(n),e.appendChild(t),a.style.left=d.offsetWidth+"px",c.style.left=d.offsetWidth+a.offsetWidth+"px"})(),(()=>{const t=document.createElement("footer");t.classList.add("footer"),e.appendChild(t)})()})();