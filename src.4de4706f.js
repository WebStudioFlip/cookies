parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"clu1":[function(require,module,exports) {

},{"./../images/png/header/pic-donuts_sm.png":[["pic-donuts_sm.1354afa6.png","VXwJ"],"VXwJ"],"./../images/png/body-bg/wheat_sm.png":[["wheat_sm.ae080a35.png","GtZw"],"GtZw"],"./../images/png/body-bg/mobile-bot.png":[["mobile-bot.5c1a4bd9.png","IrJH"],"IrJH"],"./../images/png/body-bg/mobile-top.png":[["mobile-top.773beb8b.png","QWzd"],"QWzd"],"./../images/png/header/pic-donuts@2x_sm.png":[["pic-donuts@2x_sm.ae2927ac.png","hezA"],"hezA"],"./../images/png/body-bg/wheat_sm@2x.png":[["wheat_sm@2x.a6455597.png","b5vU"],"b5vU"],"./../images/png/body-bg/mobile-bot@2x.png":[["mobile-bot@2x.64a77822.png","smZc"],"smZc"],"./../images/png/body-bg/mobile-top@2x.png":[["mobile-top@2x.6b5926b7.png","Ilh9"],"Ilh9"],"./../images/png/header/pic-donuts_md.png":[["pic-donuts_md.2a797146.png","cVZs"],"cVZs"],"./../images/png/body-bg/wheat_md.png":[["wheat_md.32f64781.png","gRs2"],"gRs2"],"./../images/png/registration/donut_lg.png":[["donut_lg.183e3dcf.png","MpC6"],"MpC6"],"./../images/png/registration/kisspng-party_lg.png":[["kisspng-party_lg.f60eb119.png","Dnb2"],"Dnb2"],"./../images/png/body-bg/tablet-bot.png":[["tablet-bot.af45ca95.png","RbmB"],"RbmB"],"./../images/png/body-bg/tablet-top.png":[["tablet-top.3148b4c4.png","D3ok"],"D3ok"],"./../images/png/header/pic-donuts@2x_md.png":[["pic-donuts@2x_md.b917e0c3.png","xsWj"],"xsWj"],"./../images/png/body-bg/wheat_md@2x.png":[["wheat_md@2x.8c2ac0f4.png","xdcU"],"xdcU"],"./../images/png/registration/donut@2x_lg.png":[["donut@2x_lg.2a600efe.png","DFvK"],"DFvK"],"./../images/png/body-bg/tablet-bot@2x.png":[["tablet-bot@2x.89732428.png","yYol"],"yYol"],"./../images/png/body-bg/tablet-top@2x.png":[["tablet-top@2x.0da65e6e.png","nHOp"],"nHOp"],"./../images/png/body-bg/spoon-1.png":[["spoon-1.4ebb04bf.png","WwB6"],"WwB6"],"./../images/png/header/pic-donuts_lg.png":[["pic-donuts_lg.cc18c8de.png","bWXm"],"bWXm"],"./../images/png/body-bg/wheat_lg.png":[["wheat_lg.b7460eff.png","AuLU"],"AuLU"],"./../images/png/body-bg/desktop-bot.png":[["desktop-bot.cc4e9477.png","Flqm"],"Flqm"],"./../images/png/body-bg/desktop-top.png":[["desktop-top.e31bdffa.png","bjOh"],"bjOh"],"./../images/png/body-bg/spoon-1@2x.png":[["spoon-1@2x.ee05db78.png","fDfF"],"fDfF"],"./../images/png/registration/kisspng-party@2x_lg.png":[["kisspng-party@2x_lg.99173535.png","oBcz"],"oBcz"],"./../images/png/body-bg/desktop-bot@2x.png":[["desktop-bot@2x.565995f6.png","QZyo"],"QZyo"],"./../images/png/body-bg/desktop-top@2x.png":[["desktop-top@2x.286a7884.png","exan"],"exan"]}],"wzuc":[function(require,module,exports) {
$(document).ready(function(){$(".reviews__list").slick({slidesToShow:3,slidesToScroll:1,arrows:!1,centerMode:!0,asNavFor:".reviews__bottom",centerPadding:"0px",focusOnSelect:!0,responsive:[{breakpoint:767,settings:{slidesToShow:1}}]}),$(".reviews__bottom").slick({slidesToShow:1,slidesToScroll:1,dots:!0,arrows:!1,centerMode:!0,centerPadding:"0px",asNavFor:".reviews__list",customPaging:function(s,o){var t=o+1;t=t<10?"0"+t:t;var e=s.slideCount;return'<button type="button" role="button" tabindex="0" class="slick-dots-button">        <span class="slick-dots-current">'+t+'</span>        <span class="slick-dots-separator">/</span>        <span class="slick-dots-total">'+(e=e<10?"0"+e:e)+"</span>      </button>"}})});
},{}],"Focm":[function(require,module,exports) {
"use strict";require("./sass/main.scss"),require("./js/slider.js"),$(".menu-mobile__btn").click(function(){$(this).toggleClass("is-active"),$(".menu-mobile").toggleClass("is-open")}),$(".menu-mobile__link").click(function(){$(".menu-mobile").toggleClass("is-open"),$(".menu-mobile__btn").toggleClass("is-active")}),(()=>{const e={readmorebtn:document.querySelector("[data-open]"),lessbtn:document.querySelector("[data-close]"),paragraph:document.querySelector("[data-paragraph-show]")};function t(){e.paragraph.classList.toggle("about-us_is-hidden"),e.readmorebtn.classList.toggle("about-us__button__is-hidden"),e.lessbtn.classList.toggle("about-us__button__is-hidden")}e.readmorebtn.addEventListener("click",t),e.lessbtn.addEventListener("click",t)})(),(()=>{const e={openModalBtn:document.querySelector("[data-open-program]"),closeModalBtn:document.querySelector("[data-close-program]"),modal:document.querySelector("[data-paragraph-show-program]")};function t(){e.modal.classList.toggle("is-hidden"),e.openModalBtn.classList.toggle("button__is-hidden"),e.closeModalBtn.classList.toggle("button__is-hidden")}e.openModalBtn.addEventListener("click",t),e.closeModalBtn.addEventListener("click",t)})(),$(function(){$(".scrollup").click(function(){$("html, body").animate({scrollTop:0},250)})}),$(window).scroll(function(){$(this).scrollTop()>100?$(".scrollup").fadeIn():$(".scrollup").fadeOut()});
},{"./sass/main.scss":"clu1","./js/slider.js":"wzuc"}]},{},["Focm"], null)
//# sourceMappingURL=/cookies/src.4de4706f.js.map