var k=Object.defineProperty;var S=(o,e,a)=>e in o?k(o,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):o[e]=a;var b=(o,e,a)=>(S(o,typeof e!="symbol"?e+"":e,a),a),q=(o,e,a)=>{if(!e.has(o))throw TypeError("Cannot "+a)};var g=(o,e,a)=>{if(e.has(o))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(o):e.set(o,a)};var p=(o,e,a)=>(q(o,e,"access private method"),a);import{a as D,i as f,S as E}from"./assets/vendor-527658dd.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function a(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(t){if(t.ep)return;t.ep=!0;const s=a(t);fetch(t.href,s)}})();var d,y;class j{constructor(e,a,i,t=["largeImageURL","webformatURL","tags"],s=["likes","views","comments","downloads"]){g(this,d);this.id=e,this.requestURL=a,this.requestConfig=i,this.imagePropsList=t,this.descPropsList=s,this.data,this.imgData,this.descData}set(e,a,i,t){this.requestURL=e,this.requestConfig=a,this.imagePropsList=i,this.descPropsList=t}async get(){if(!this.requestURL||!this.requestConfig)return;const e=async()=>await D.get(this.requestURL,{params:this.requestConfig});this.data=await e(),this.descData=p(this,d,y).call(this,this.data.data.hits,this.descPropsList),this.imgData=p(this,d,y).call(this,this.data.data.hits,this.imagePropsList)}static testUserInput(e){return e.trim()?/^[a-z0-9\.\s]+$/gi.test(e.trim()):!1}}d=new WeakSet,y=function(e,a){return e.map(i=>{const t={};return a.forEach(s=>{t[s]=i[s]}),t})};const F="/goit-js-hw-12/assets/rejectedIcon-9956cb73.svg",$="/goit-js-hw-12/assets/izitoast-close-4cebbc46.svg";class l{constructor(){}static add(){const e=document.createElement("button");document.body.appendChild(e),e.outerHTML=this.markup}static remove(){const e=document.querySelector("#spinner-container");document.body.removeChild(e)}}b(l,"markup");class w{constructor(){}static show(e){e.classList.remove("hidden"),e.classList.add("visible")}static hide(e){e.classList.remove("visible"),e.classList.add("hidden")}static isVisible(e){return e.classList.contains("visible")}}var h,v;class u{constructor(e="",a=null,i=null,t=document.querySelector(".js-loadmore-button")||!0){g(this,h);this.parent=e,this.imgData=a,this.descData=i,this.showDesc=t,this.markup=p(this,h,v).call(this,this.imgData,this.descData)}static showPopup(e,a="input"){const i={class:"js-izitoast-message",titleColor:"#FFFFFF",messageColor:"#FFFFFF",message:e==="wrong input"?'Try something like "kitty", "best friends", "on the Moon" ;)':e==="sorry"?"We're sorry, but you've reached the end of search results.":"Sorry, there are no images matching your search query. Please try again!",backgroundColor:e==="wrong input"?"#e0c34c":e==="sorry"?"#278edd":"#ef4040",progressBarColor:e==="wrong input"?"#f7e28b":e==="sorry"?"#4eb2ff":"#b51b1b",messageSize:"16px",position:"topRight",displayMode:"replace",pauseOnHover:!1,iconUrl:F,close:!1,buttons:[[`<button type="button" style="background-color: transparent;"><img src=${$}></button>`,function(t,s){t.hide({transitionOut:"fadeOut"},s)}]],onOpening:function(t,s){const n=document.querySelector(a);n.blur(),n.addEventListener("focus",()=>{f.hide({transitionOut:"fadeOut"},s)},{once:!0})},onClosed:function(t,s){document.querySelector(a).removeEventListener("focus",()=>{f.hide({transitionOut:"fadeOut"},s)},{once:!0})}};f.show(i)}render(e,a){document.querySelector(this.parent).innerHTML+=this.markup,document.querySelectorAll(e).forEach((t,s)=>t.addEventListener("load",()=>{document.querySelectorAll(a)[s].classList.add("visible")}))}}h=new WeakSet,v=function(e,a){const i=a.map(s=>this.showDesc?`<ul class="js-item-desc style="margin-top: 0; transition-duration: 250ms;">
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
          </ul>`:`<ul class="js-item-desc style="margin-top: -56px; transition-duration: 450ms;">
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
          </ul>`);return e.map((s,n)=>this.showDesc?`<li class="js-gallery-item" style="height: 256px; transition-duration: 250ms;"><a class="js-image-container" href="${s.largeImageURL}"><img class="js-item-image" src="${s.webformatURL}" alt="${s.tags}" /></a>${i[n]}</li>`:`<li class="js-gallery-item" style="height: 200px; transition-duration: 450ms;"><a class="js-image-container" href="${s.largeImageURL}"><img class="js-item-image" src="${s.webformatURL}" alt="${s.tags}" /></a>${i[n]}</li>`).join(`

`)};function C(o,e){const a=window.getComputedStyle(o),i=parseFloat(a.rowGap),t=parseFloat(o.lastChild.getBoundingClientRect().height);window.scrollBy({top:e?t*2.75+i:t*2.5+i,behavior:"smooth"})}async function L(o){o.preventDefault();try{if(w.hide(r.loadmore),l.add(),o.type==="submit"){if(r.container.innerHTML="",c.config.q=r.input.value.trim(),c.config.page=1,!j.testUserInput(r.input.value.trim())){l.remove(),u.showPopup("wrong input"),r.form.reset();return}}else c.config.page+=1;await m.get();const e=m.imgData,a=m.descData,i=m.data.data.totalHits,t=c.config.per_page*c.config.page;if(!i){l.remove(),u.showPopup("nothing found"),r.form.reset();return}const s=new u(".js-gallery",e,a,r.checkbox.checked);l.remove(),s.render(".js-item-image",".js-gallery-item"),P.refresh(),i-t>0?w.show(r.loadmore):(u.showPopup("sorry"),r.form.reset()),r.input.value=""}catch(e){console.log(e)}}const r={body:document.querySelector("body"),form:document.querySelector(".js-search-form"),input:document.querySelector(".js-search-input"),container:document.querySelector(".js-gallery"),checkbox:document.querySelector(".js-search-checkbox"),loadmore:document.querySelector(".js-loadmore-button")},c={url:"https://pixabay.com/api/",config:{key:"42242477-df8643eaa45736c853493b589",image_type:"photo",orientation:"horizontal",safesearch:!0,q:null,page:1,per_page:15}},m=new j(1,c.url,c.config,["largeImageURL","webformatURL","tags"],["likes","views","comments","downloads"]),P=new E(".js-gallery a",{className:"lightbox-wrapper"});w.hide(r.loadmore);l.markup='<div id="spinner-container" style="padding-top: 25px; display:flex; flex-direction:column; gap:15px; align-items:center;"><span class="js-processing-request">Loading images, please wait...</span><div class="loader"></div></div>';r.form.addEventListener("submit",async o=>{await L(o)});r.loadmore.addEventListener("click",async o=>{await L(o),C(r.container,r.checkbox.checked)});r.checkbox.addEventListener("click",()=>{if(!r.container.innerHTML)return;document.querySelectorAll(".js-item-desc").forEach(e=>{r.checkbox.checked?e.style.transitionDuration="450ms":e.style.transitionDuration="250ms",r.checkbox.checked?e.parentElement.style.transitionDuration="250ms":e.parentElement.style.transitionDuration="450ms",r.checkbox.checked?e.style.marginTop="0":e.style.marginTop="-56px",r.checkbox.checked?e.parentElement.style.height="256px":e.parentElement.style.height="200px"})});
//# sourceMappingURL=commonHelpers.js.map
