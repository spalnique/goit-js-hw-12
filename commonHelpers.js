var k=Object.defineProperty;var S=(a,e,t)=>e in a?k(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t;var y=(a,e,t)=>(S(a,typeof e!="symbol"?e+"":e,t),t),q=(a,e,t)=>{if(!e.has(a))throw TypeError("Cannot "+t)};var m=(a,e,t)=>{if(e.has(a))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(a):e.set(a,t)};var g=(a,e,t)=>(q(a,e,"access private method"),t);import{a as F,i as h,S as C}from"./assets/vendor-527658dd.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function t(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(o){if(o.ep)return;o.ep=!0;const r=t(o);fetch(o.href,r)}})();var p,w;class b{constructor(e,t,s){m(this,p);this.requestURL=e,this.requestConfig=t,this.propsList=s,this.data,this.totalHits}set(e,t,s){this.requestURL=e,this.requestConfig=t,this.propsList=s}async get(){if(!this.requestURL||!this.requestConfig)return;const e=await F.get(this.requestURL,{params:this.requestConfig});this.totalHits=e.data.totalHits,this.data=g(this,p,w).call(this,e.data.hits,this.propsList)}static testUserInput(e){return e.trim()?/^[a-z0-9\.\s]+$/gi.test(e.trim()):!1}}p=new WeakSet,w=function(e,t){return e.map(s=>{const o={};return t.forEach(r=>{o[r]=s[r]}),o})};const $="/goit-js-hw-12/assets/rejectedIcon-9956cb73.svg",E="/goit-js-hw-12/assets/izitoast-close-4cebbc46.svg";class l{constructor(){}static add(){const e=document.createElement("button");document.body.appendChild(e),e.outerHTML=this.markup}static remove(){const e=document.querySelector("#spinner-container");document.body.removeChild(e)}}y(l,"markup");class j{constructor(){}static show(e){e.classList.remove("hidden"),e.classList.add("visible")}static hide(e){e.classList.remove("visible"),e.classList.add("hidden")}static isVisible(e){return e.classList.contains("visible")}}var u,v;class d{constructor(e,t=null,s){m(this,u);this.parent=e,this.data=t,this.showDesc=s,this.markup=g(this,u,v).call(this,this.data)}static showPopup(e,t="input"){const s={class:"js-izitoast-message",titleColor:"#FFFFFF",messageColor:"#FFFFFF",message:e==="wrong input"?'Try something like "kitty", "best friends", "on the Moon" ;)':e==="sorry"?"We're sorry, but you've reached the end of search results.":"Sorry, there are no images matching your search query. Please try again!",backgroundColor:e==="wrong input"?"#e0c34c":e==="sorry"?"#278edd":"#ef4040",progressBarColor:e==="wrong input"?"#f7e28b":e==="sorry"?"#4eb2ff":"#b51b1b",messageSize:"16px",position:"topRight",displayMode:"replace",pauseOnHover:!1,iconUrl:$,close:!1,buttons:[[`<button type="button" style="background-color: transparent;"><img src=${E}></button>`,function(o,r){o.hide({transitionOut:"fadeOut"},r)}]],onOpening:function(o,r){const n=document.querySelector(t);n.blur(),n.addEventListener("focus",()=>{h.hide({transitionOut:"fadeOut"},r)},{once:!0})},onClosed:function(o,r){document.querySelector(t).removeEventListener("focus",()=>{h.hide({transitionOut:"fadeOut"},r)},{once:!0})}};h.show(s)}render(e,t){document.querySelector(this.parent).innerHTML+=this.markup,document.querySelectorAll(e).forEach((o,r)=>o.addEventListener("load",()=>{document.querySelectorAll(t)[r].classList.add("visible")}))}toggleDesc(e,t){const s=document.querySelector(this.parent),o=document.querySelectorAll(e);s.innerHTML&&o.forEach(r=>{t?(r.classList.add("js-item-desc-ext"),r.parentElement.classList.add("js-gallery-item-ext")):(r.classList.remove("js-item-desc-ext"),r.parentElement.classList.remove("js-gallery-item-ext"))})}}u=new WeakSet,v=function(e){return e.map(s=>this.showDesc?`<li class="js-gallery-item js-gallery-item-ext"><a class="js-image-container" href="${s.largeImageURL}"><img class="js-item-image" src="${s.webformatURL}" alt="${s.tags}" /></a>
            <ul class="js-item-desc js-item-desc-ext">
              <li class="js-desc-wrapper">
                <span class="js-desc-prop">Likes</span>
                <span class="js-desc-value">${s.likes}</span>
              </li>
              <li class="js-desc-wrapper">
                <span class="js-desc-prop">Views</span>
                <span class="js-desc-value">${s.views}</span>
              </li>
              <li class="js-desc-wrapper">
                <span class="js-desc-prop">Comments</span>
                <span class="js-desc-value">${s.comments}</span>
              </li>
              <li class="js-desc-wrapper">
                <span class="js-desc-prop">Downloads</span>
                <span class="js-desc-value">${s.downloads}</span>
              </li>
            </ul>
          </li>`:`<li class="js-gallery-item"><a class="js-image-container" href="${s.largeImageURL}"><img class="js-item-image" src="${s.webformatURL}" alt="${s.tags}" /></a>
            <ul class="js-item-desc">
              <li class="js-desc-wrapper">
                <span class="js-desc-prop">Likes</span>
                <span class="js-desc-value">${s.likes}</span>
              </li>
              <li class="js-desc-wrapper">
                <span class="js-desc-prop">Views</span>
                <span class="js-desc-value">${s.views}</span>
              </li>
              <li class="js-desc-wrapper">
                <span class="js-desc-prop">Comments</span>
                <span class="js-desc-value">${s.comments}</span>
              </li>
              <li class="js-desc-wrapper">
                <span class="js-desc-prop">Downloads</span>
                <span class="js-desc-value">${s.downloads}</span>
              </li>
            </ul>
          </li>`).join(`

`)};function O(a,e){const t=window.getComputedStyle(a),s=parseFloat(t.rowGap),o=parseFloat(a.lastChild.getBoundingClientRect().height);window.scrollBy({top:e?o*2.75+s:o*2.5+s,behavior:"smooth"})}async function L(a){a.preventDefault();try{if(l.add(),a.type==="submit"){if(i.container.innerHTML="",c.config.q=i.input.value.trim(),c.config.page=1,!b.testUserInput(i.input.value.trim())){l.remove(),d.showPopup("wrong input"),i.form.reset();return}}else c.config.page+=1;await f.get();const e=f.totalHits,t=c.config.per_page*c.config.page;if(!e){l.remove(),d.showPopup("nothing found"),i.form.reset();return}const s=new d(".js-gallery",f.data,i.checkbox.checked);i.checkbox.removeEventListener("click",()=>s.toggleDesc(".js-item-desc",i.checkbox.checked)),l.remove(),s.render(".js-item-image",".js-gallery-item"),i.checkbox.addEventListener("click",()=>s.toggleDesc(".js-item-desc",i.checkbox.checked)),U.refresh(),e-t>0?j.show(i.loadmore):(d.showPopup("sorry"),j.hide(i.loadmore),i.form.reset()),i.input.value=""}catch(e){console.log(e)}}const i={body:document.querySelector("body"),form:document.querySelector(".js-search-form"),input:document.querySelector(".js-search-input"),container:document.querySelector(".js-gallery"),checkbox:document.querySelector(".js-search-checkbox"),loadmore:document.querySelector(".js-loadmore-button")},c={url:"https://pixabay.com/api/",config:{key:"42242477-df8643eaa45736c853493b589",image_type:"photo",orientation:"horizontal",safesearch:!0,q:null,page:1,per_page:200}},f=new b(c.url,c.config,["largeImageURL","webformatURL","tags","likes","views","comments","downloads"]),U=new C(".js-gallery a",{className:"lightbox-wrapper"});l.markup='<div id="spinner-container" style="padding-top: 25px; display:flex; flex-direction:column; gap:15px; align-items:center;"><span class="js-processing-request">Loading images, please wait...</span><div class="loader"></div></div>';i.form.addEventListener("submit",async a=>{await L(a)});i.loadmore.addEventListener("click",async a=>{console.log(document.body.scrollHeight),await L(a),O(i.container,i.checkbox.checked)});
//# sourceMappingURL=commonHelpers.js.map
