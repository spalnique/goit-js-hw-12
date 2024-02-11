var q=Object.defineProperty;var S=(r,e,o)=>e in r?q(r,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):r[e]=o;var L=(r,e,o)=>(S(r,typeof e!="symbol"?e+"":e,o),o),C=(r,e,o)=>{if(!e.has(r))throw TypeError("Cannot "+o)};var y=(r,e,o)=>{if(e.has(r))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(r):e.set(r,o)};var u=(r,e,o)=>(C(r,e,"access private method"),o);import{a as P,i as b,S as D}from"./assets/vendor-527658dd.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function o(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(t){if(t.ep)return;t.ep=!0;const s=o(t);fetch(t.href,s)}})();var d,w;class v{constructor(e,o,a,t=["largeImageURL","webformatURL","tags"],s=["likes","views","comments","downloads"]){y(this,d);this.id=e,this.requestURL=o,this.requestConfig=a,this.imagePropsList=t,this.descPropsList=s,this.data,this.imgData,this.descData}set(e,o,a,t){this.requestURL=e,this.requestConfig=o,this.imagePropsList=a,this.descPropsList=t}async get(){if(!this.requestURL||!this.requestConfig)return;const e=async()=>await P.get(this.requestURL,{params:this.requestConfig});this.data=await e(),this.descData=u(this,d,w).call(this,this.data.data.hits,this.descPropsList),this.imgData=u(this,d,w).call(this,this.data.data.hits,this.imagePropsList)}static testUserInput(e){return e.trim()?/^[a-z\s]+$/gi.test(e.trim()):!1}}d=new WeakSet,w=function(e,o){return e.map(a=>{const t={};return o.forEach(s=>{t[s]=a[s]}),t})};const F="/goit-js-hw-12/assets/rejectedIcon-9956cb73.svg",O="/goit-js-hw-12/assets/izitoast-close-4cebbc46.svg";class l{constructor(){}static add(){const e=document.createElement("button");document.body.appendChild(e),e.outerHTML=this.markup}static remove(){const e=document.querySelector("#spinner-container");document.body.removeChild(e)}}L(l,"markup");class h{constructor(){}static show(e){e.classList.add("visible")}static hide(e){e.classList.remove("visible")}static isVisible(e){return e.classList.contains("visible")}}var f,j;class p{constructor(e="",o=null,a=null,t=document.querySelector(".js-loadmore-button")||!0){y(this,f);this.parent=e,this.imgData=o,this.descData=a,this.showDesc=t,this.markup=u(this,f,j).call(this,this.imgData,this.descData)}static showPopup(e,o="input"){const a={class:"js-izitoast-message",titleColor:"#FFFFFF",messageColor:"#FFFFFF",message:e==="wrong input"?'Try something like "kitty", "best friends", "on the Moon" ;)':e==="sorry"?"We're sorry, but you've reached the end of search results.":"Sorry, there are no images matching your search query. Please try again!",backgroundColor:e==="wrong input"?"#e0c34c":e==="sorry"?"#278edd":"#ef4040",progressBarColor:e==="wrong input"?"#f7e28b":e==="sorry"?"#4eb2ff":"#b51b1b",messageSize:"16px",position:"topRight",displayMode:"replace",pauseOnHover:!1,iconUrl:F,close:!1,buttons:[[`<button type="button" style="background-color: transparent;"><img src=${O}></button>`,function(t,s){t.hide({transitionOut:"fadeOut"},s)}]],onOpening:function(t,s){const n=document.querySelector(o);n.blur(),n.addEventListener("focus",()=>{b.hide({transitionOut:"fadeOut"},s)},{once:!0})},onClosed:function(t,s){document.querySelector(o).removeEventListener("focus",()=>{b.hide({transitionOut:"fadeOut"},s)},{once:!0})}};b.show(a)}render(e,o){document.querySelector(this.parent).innerHTML+=this.markup,document.querySelectorAll(e).forEach((t,s)=>t.addEventListener("load",()=>{document.querySelectorAll(o)[s].classList.add("visible")}))}}f=new WeakSet,j=function(e,o){const a=this.showDesc?o.map(s=>`<ul class="js-item-desc">
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
          </ul>`):"";return e.map((s,n)=>`<li class="js-gallery-item"><a class="js-image-container" href="${s.largeImageURL}"><img class="js-item-image" src="${s.webformatURL}" alt="${s.tags}" /></a>${a?a[n]:""}</li>`).join(`

`)};async function k(r){r.preventDefault(),i.checkbox.checked=g.isChecked;try{if(h.hide(i.loadmore),l.add(),r.type==="submit"){if(i.container.innerHTML="",c.config.q=i.input.value.trim(),c.config.page=1,!v.testUserInput(i.input.value.trim())){l.remove(),p.showPopup("wrong input"),i.form.reset();return}}else c.config.page+=1;await m.get();const e=m.imgData,o=m.descData,a=m.data.data.totalHits;if(!a){l.remove(),p.showPopup("nothing found"),i.form.reset();return}const t=new p(".js-gallery",e,o,g.isChecked),s=new D(".js-gallery a",{className:"lightbox-wrapper"});l.remove(),t.render(".js-item-image",".js-gallery-item"),s.refresh(),i.form.reset(),a-c.config.per_page*c.config.page>15?h.show(i.loadmore):(h.hide(i.loadmore),p.showPopup("sorry"))}catch(e){console.log(e)}}const i={body:document.querySelector("body"),form:document.querySelector(".js-search-form"),input:document.querySelector(".js-search-input"),container:document.querySelector(".js-gallery"),checkbox:document.querySelector(".js-search-checkbox"),loadmore:document.querySelector(".js-loadmore-button")},g={isChecked:!1},c={url:"https://pixabay.com/api/",config:{key:"42242477-df8643eaa45736c853493b589",image_type:"photo",orientation:"horizontal",safesearch:!0,q:null,page:1,per_page:15}},m=new v(1,c.url,c.config,["largeImageURL","webformatURL","tags"],["likes","views","comments","downloads"]);h.hide(i.loadmore);l.markup='<div id="spinner-container" style="padding-top: 25px; display:flex; flex-direction:column; gap:15px; align-items:center;"><span class="js-processing-request">Loading images, please wait...</span><span class="loader"></span></div>';i.ckeckbox.addEventListener("click",()=>g.isChecked=!g.isChecked);i.form.addEventListener("submit",k);i.loadmore.addEventListener("click",k);
//# sourceMappingURL=commonHelpers.js.map
