!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.sal=t():e.sal=t()}(this,function(){return(()=>{"use strict";var r={d:(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)},e={};function t(t,e){var n,r=Object.keys(t);return Object.getOwnPropertySymbols&&(n=Object.getOwnPropertySymbols(t),e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,n)),r}function n(r){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?t(Object(o),!0).forEach(function(e){var t,n;t=r,e=o[n=e],n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(o)):t(Object(o)).forEach(function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(o,e))})}return r}r.d(e,{default:()=>O});function a(e,t){e=new CustomEvent(e,{bubbles:!0,detail:t}),t.target.dispatchEvent(e)}function o(){b(),p()}function s(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};p(),Array.from(document.querySelectorAll(l.selector)).forEach(f),d(e),y()}function i(){var e=v();c.push(e)}var l={root:null,rootMargin:"0% 50%",threshold:.5,animateClassName:"sal-animate",disabledClassName:"sal-disabled",enterEventName:"sal:in",exitEventName:"sal:out",selector:"[data-sal]",once:!0,disabled:!1},c=[],u=null,d=function(e){e&&e!==l&&(l=n(n({},l),e))},f=function(e){e.classList.remove(l.animateClassName)},b=function(){document.body.classList.add(l.disabledClassName)},p=function(){u.disconnect(),u=null},m=function(e,o){e.forEach(function(e){var t=e.target,n=void 0!==t.dataset.salRepeat,r=void 0!==t.dataset.salOnce,n=n||!(r||l.once);e.intersectionRatio>=l.threshold?((r=e).target.classList.add(l.animateClassName),a(l.enterEventName,r),n||o.unobserve(t)):n&&(f((e=e).target),a(l.exitEventName,e))})},v=function(){var e=[].filter.call(document.querySelectorAll(l.selector),function(e){return l.animateClassName,!e.classList.contains(l.animateClassName)});return e.forEach(function(e){return u.observe(e)}),e},y=function(){document.body.classList.remove(l.disabledClassName),u=new IntersectionObserver(m,{root:l.root,rootMargin:l.rootMargin,threshold:l.threshold}),c=v()};const O=function(){if(d(0<arguments.length&&void 0!==arguments[0]?arguments[0]:l),"undefined"==typeof window)return console.warn("Sal was not initialised! Probably it is used in SSR."),{elements:c,disable:o,enable:y,reset:s,update:i};if(!window.IntersectionObserver)throw b(),Error("Your browser does not support IntersectionObserver!\nGet a polyfill from here:\nhttps://github.com/w3c/IntersectionObserver/tree/master/polyfill");return(l.disabled||"function"==typeof l.disabled&&l.disabled()?b:y)(),{elements:c,disable:o,enable:y,reset:s,update:i}};return e.default})()});