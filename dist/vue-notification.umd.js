!function(t,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports,require("vue")):"function"==typeof define&&define.amd?define(["exports","vue"],n):n((t=t||self).VueNotification={},t.Vue)}(this,function(t,n){"use strict";n=n&&n.hasOwnProperty("default")?n.default:n;var i=function(t){if(Array.isArray(t)){for(var n=0,i=new Array(t.length);n<t.length;n++)i[n]=t[n];return i}};var e=function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)};var o=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")};var r=function(t){return i(t)||e(t)||o()};var a=function(t,n,i){return n in t?Object.defineProperty(t,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[n]=i,t};var c=function(t,n){return t(n={exports:{}},n.exports),n.exports}(function(t){var n=function(t){var n,i=Object.prototype,e=i.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},r=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function s(t,n,i,e){var o=n&&n.prototype instanceof v?n:v,r=Object.create(o.prototype),a=new C(e||[]);return r._invoke=function(t,n,i){var e=l;return function(o,r){if(e===p)throw new Error("Generator is already running");if(e===d){if("throw"===o)throw r;return E()}for(i.method=o,i.arg=r;;){var a=i.delegate;if(a){var c=j(a,i);if(c){if(c===h)continue;return c}}if("next"===i.method)i.sent=i._sent=i.arg;else if("throw"===i.method){if(e===l)throw e=d,i.arg;i.dispatchException(i.arg)}else"return"===i.method&&i.abrupt("return",i.arg);e=p;var s=f(t,n,i);if("normal"===s.type){if(e=i.done?d:u,s.arg===h)continue;return{value:s.arg,done:i.done}}"throw"===s.type&&(e=d,i.method="throw",i.arg=s.arg)}}}(t,i,a),r}function f(t,n,i){try{return{type:"normal",arg:t.call(n,i)}}catch(t){return{type:"throw",arg:t}}}t.wrap=s;var l="suspendedStart",u="suspendedYield",p="executing",d="completed",h={};function v(){}function m(){}function b(){}var g={};g[r]=function(){return this};var y=Object.getPrototypeOf,x=y&&y(y(T([])));x&&x!==i&&e.call(x,r)&&(g=x);var w=b.prototype=v.prototype=Object.create(g);function _(t){["next","throw","return"].forEach(function(n){t[n]=function(t){return this._invoke(n,t)}})}function O(t){var n;this._invoke=function(i,o){function r(){return new Promise(function(n,r){!function n(i,o,r,a){var c=f(t[i],t,o);if("throw"!==c.type){var s=c.arg,l=s.value;return l&&"object"==typeof l&&e.call(l,"__await")?Promise.resolve(l.__await).then(function(t){n("next",t,r,a)},function(t){n("throw",t,r,a)}):Promise.resolve(l).then(function(t){s.value=t,r(s)},function(t){return n("throw",t,r,a)})}a(c.arg)}(i,o,n,r)})}return n=n?n.then(r,r):r()}}function j(t,i){var e=t.iterator[i.method];if(e===n){if(i.delegate=null,"throw"===i.method){if(t.iterator.return&&(i.method="return",i.arg=n,j(t,i),"throw"===i.method))return h;i.method="throw",i.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var o=f(e,t.iterator,i.arg);if("throw"===o.type)return i.method="throw",i.arg=o.arg,i.delegate=null,h;var r=o.arg;return r?r.done?(i[t.resultName]=r.value,i.next=t.nextLoc,"return"!==i.method&&(i.method="next",i.arg=n),i.delegate=null,h):r:(i.method="throw",i.arg=new TypeError("iterator result is not an object"),i.delegate=null,h)}function L(t){var n={tryLoc:t[0]};1 in t&&(n.catchLoc=t[1]),2 in t&&(n.finallyLoc=t[2],n.afterLoc=t[3]),this.tryEntries.push(n)}function k(t){var n=t.completion||{};n.type="normal",delete n.arg,t.completion=n}function C(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(L,this),this.reset(!0)}function T(t){if(t){var i=t[r];if(i)return i.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function i(){for(;++o<t.length;)if(e.call(t,o))return i.value=t[o],i.done=!1,i;return i.value=n,i.done=!0,i};return a.next=a}}return{next:E}}function E(){return{value:n,done:!0}}return m.prototype=w.constructor=b,b.constructor=m,b[c]=m.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var n="function"==typeof t&&t.constructor;return!!n&&(n===m||"GeneratorFunction"===(n.displayName||n.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},_(O.prototype),O.prototype[a]=function(){return this},t.AsyncIterator=O,t.async=function(n,i,e,o){var r=new O(s(n,i,e,o));return t.isGeneratorFunction(i)?r:r.next().then(function(t){return t.done?t.value:r.next()})},_(w),w[c]="Generator",w[r]=function(){return this},w.toString=function(){return"[object Generator]"},t.keys=function(t){var n=[];for(var i in t)n.push(i);return n.reverse(),function i(){for(;n.length;){var e=n.pop();if(e in t)return i.value=e,i.done=!1,i}return i.done=!0,i}},t.values=T,C.prototype={constructor:C,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(k),!t)for(var i in this)"t"===i.charAt(0)&&e.call(this,i)&&!isNaN(+i.slice(1))&&(this[i]=n)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var i=this;function o(e,o){return c.type="throw",c.arg=t,i.next=e,o&&(i.method="next",i.arg=n),!!o}for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var s=e.call(a,"catchLoc"),f=e.call(a,"finallyLoc");if(s&&f){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!f)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,n){for(var i=this.tryEntries.length-1;i>=0;--i){var o=this.tryEntries[i];if(o.tryLoc<=this.prev&&e.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var r=o;break}}r&&("break"===t||"continue"===t)&&r.tryLoc<=n&&n<=r.finallyLoc&&(r=null);var a=r?r.completion:{};return a.type=t,a.arg=n,r?(this.method="next",this.next=r.finallyLoc,h):this.complete(a)},complete:function(t,n){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&n&&(this.next=n),h},finish:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.finallyLoc===t)return this.complete(i.completion,i.afterLoc),k(i),h}},catch:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc===t){var e=i.completion;if("throw"===e.type){var o=e.arg;k(i)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,i,e){return this.delegate={iterator:T(t),resultName:i,nextLoc:e},"next"===this.method&&(this.arg=n),h}},t}(t.exports);try{regeneratorRuntime=n}catch(t){Function("r","regeneratorRuntime = r")(n)}});function s(t,n,i,e,o,r,a){try{var c=t[r](a),s=c.value}catch(t){return void i(t)}c.done?n(s):Promise.resolve(s).then(e,o)}var f=function(t){return function(){var n=this,i=arguments;return new Promise(function(e,o){var r=t.apply(n,i);function a(t){s(r,e,o,a,c,"next",t)}function c(t){s(r,e,o,a,c,"throw",t)}a(void 0)})}},l={props:{absolute:{type:Boolean,default:!1},bottom:{type:Boolean,default:!1},left:{type:Boolean,default:!1},right:{type:Boolean,default:!1},top:{type:Boolean,default:!1}}},u={model:{prop:"value",event:"input"},props:{value:{type:Boolean,required:!0}},data:function(){return{isActive:!1}},watch:{value:{handler:function(t){this.isActive=t},immediate:!0},isActive:function(t){t!==this.value&&this.$emit("input",t)}}};function p(t){return Boolean(t)&&Boolean(t.match(/^(#|(rgb|hsl)a?\()/))}var d={props:{color:{type:String}},methods:{setBackgroundColor:function(t){if(p(t))return{"background-color":"".concat(t),"border-color":"".concat(t)}},setTextColor:function(t){if(p(t))return{color:"".concat(t)}}}},h={path:"M20 424.229h20V279.771H20c-11.046 0-20-8.954-20-20V212c0-11.046 8.954-20 20-20h112c11.046 0 20 8.954 20 20v212.229h20c11.046 0 20 8.954 20 20V492c0 11.046-8.954 20-20 20H20c-11.046 0-20-8.954-20-20v-47.771c0-11.046 8.954-20 20-20zM96 0C56.235 0 24 32.235 24 72s32.235 72 72 72 72-32.235 72-72S135.764 0 96 0z",viewBox:"0 0 192 512"},v={path:"M176 432c0 44.112-35.888 80-80 80s-80-35.888-80-80 35.888-80 80-80 80 35.888 80 80zM25.26 25.199l13.6 272C39.499 309.972 50.041 320 62.83 320h66.34c12.789 0 23.331-10.028 23.97-22.801l13.6-272C167.425 11.49 156.496 0 142.77 0H49.23C35.504 0 24.575 11.49 25.26 25.199z",viewBox:"0 0 192 512"},m={path:"M248.747 204.705l6.588 112c.373 6.343 5.626 11.295 11.979 11.295h41.37a12 12 0 0 0 11.979-11.295l6.588-112c.405-6.893-5.075-12.705-11.979-12.705h-54.547c-6.903 0-12.383 5.812-11.978 12.705zM330 384c0 23.196-18.804 42-42 42s-42-18.804-42-42 18.804-42 42-42 42 18.804 42 42zm-.423-360.015c-18.433-31.951-64.687-32.009-83.154 0L6.477 440.013C-11.945 471.946 11.118 512 48.054 512H527.94c36.865 0 60.035-39.993 41.577-71.987L329.577 23.985zM53.191 455.002L282.803 57.008c2.309-4.002 8.085-4.002 10.394 0l229.612 397.993c2.308 4-.579 8.998-5.197 8.998H58.388c-4.617.001-7.504-4.997-5.197-8.997z",viewBox:"0 0 576 512"},b={path:"M193.94 256L296.5 153.44l21.15-21.15c3.12-3.12 3.12-8.19 0-11.31l-22.63-22.63c-3.12-3.12-8.19-3.12-11.31 0L160 222.06 36.29 98.34c-3.12-3.12-8.19-3.12-11.31 0L2.34 120.97c-3.12 3.12-3.12 8.19 0 11.31L126.06 256 2.34 379.71c-3.12 3.12-3.12 8.19 0 11.31l22.63 22.63c3.12 3.12 8.19 3.12 11.31 0L160 289.94 262.56 392.5l21.15 21.15c3.12 3.12 8.19 3.12 11.31 0l22.63-22.63c3.12-3.12 3.12-8.19 0-11.31L193.94 256z",viewBox:"0 0 320 512"};function g(t,n){var i=Object.keys(t);return Object.getOwnPropertySymbols&&i.push.apply(i,Object.getOwnPropertySymbols(t)),n&&(i=i.filter(function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})),i}function y(t){for(var n=arguments,i=1;i<arguments.length;i++){var e=null!=n[i]?n[i]:{};i%2?g(e,!0).forEach(function(n){a(t,n,e[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):g(e).forEach(function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))})}return t}var x,w=["top","bottom","left","right"],_={success:y({},{path:"M435.848 83.466L172.804 346.51l-96.652-96.652c-4.686-4.686-12.284-4.686-16.971 0l-28.284 28.284c-4.686 4.686-4.686 12.284 0 16.971l133.421 133.421c4.686 4.686 12.284 4.686 16.971 0l299.813-299.813c4.686-4.686 4.686-12.284 0-16.971l-28.284-28.284c-4.686-4.686-12.284-4.686-16.97 0z",viewBox:"0 0 512 512"},{height:16}),info:y({},h,{height:14}),warning:y({},v,{height:14}),error:y({},m,{height:16}),close:y({},b)};var O=function(t,n,i,e,o,r,a,c){var s,f=("function"==typeof i?i.options:i)||{};if(f.__file="NotificationItem.vue",f.render||(f.render=t.render,f.staticRenderFns=t.staticRenderFns,f._compiled=!0,o&&(f.functional=!0)),f._scopeId=e,n&&(s=function(t){n.call(this,a(t))}),void 0!==s)if(f.functional){var l=f.render;f.render=function(t,n){return s.call(n),l(t,n)}}else{var u=f.beforeCreate;f.beforeCreate=u?[].concat(u,s):[s]}return f}({render:function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("transition",{attrs:{name:"notification-transition"}},[t.isActive?i("div",t._g({ref:"notification",staticClass:"notification",class:[this.type&&"notification--"+this.type,this.classes],style:t.positionStyle},t.$listeners),[i("div",{staticClass:"notification__wrapper"},[i("div",{staticClass:"notification__content"},[i("span",{staticClass:"notification__message"},[Boolean(t.iconType)&&!t.hideIcon?i("span",{staticClass:"notification__icon"},[i("svg",{attrs:{viewBox:t.iconType.viewBox,width:t.iconType.width,height:t.iconType.height,role:"img",xmlns:"http://www.w3.org/2000/svg"}},[i("path",{attrs:{fill:"currentColor",d:t.iconType.path}})])]):t._e(),t._v(" "),i("p",{staticClass:"notification__text"},[t._v(t._s(t.message)+" ")])]),t._v(" "),t.actionText?i("button",{staticClass:"notification__action",attrs:{type:"button"},on:{click:t.onActionClick}},[t._v("\n          "+t._s(t.actionText)+"\n        ")]):t._e(),t._v(" "),t.showClose?i("button",{staticClass:"notification__close",attrs:{type:"button"},on:{click:t.close}},[i("svg",{attrs:{viewBox:t.NOTIFICATION_ICONS.close.viewBox,role:"img",xmlns:"http://www.w3.org/2000/svg"}},[i("path",{attrs:{fill:"currentColor",d:t.NOTIFICATION_ICONS.close.path}})])]):t._e()])])]):t._e()])},staticRenderFns:[]},function(t){t&&(t("data-v-296231b8_0",{source:"*,::after,::before{box-sizing:border-box}",map:void 0,media:void 0}),t("data-v-296231b8_1",{source:".notification[data-v-296231b8]{position:fixed;display:flex;align-items:center;left:0;right:0;font-size:14px;color:#fff;pointer-events:none;transition:all .4s cubic-bezier(.25,.8,.5,1);transition-property:transform,top,bottom,opacity}.notification--absolute[data-v-296231b8]{position:absolute}.notification--top[data-v-296231b8]{top:0}.notification--bottom[data-v-296231b8]{bottom:0}@media only screen and (min-width:480px){.notification--left[data-v-296231b8],.notification--right[data-v-296231b8]{margin:0 24px}.notification--left.notification--top[data-v-296231b8],.notification--right.notification--top[data-v-296231b8]{transform:translateY(24px)}.notification--left.notification--bottom[data-v-296231b8],.notification--right.notification--bottom[data-v-296231b8]{transform:translateY(-24px)}}.notification__wrapper[data-v-296231b8]{position:relative;display:flex;align-items:center;width:100%;background-color:#000;pointer-events:auto;box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 6px 10px 0 rgba(0,0,0,.14),0 1px 18px 0 rgba(0,0,0,.12)}.notification--success .notification__wrapper[data-v-296231b8]{background-color:#4f88ff}.notification--info .notification__wrapper[data-v-296231b8]{background-color:#5d6a89}.notification--warning .notification__wrapper[data-v-296231b8]{background-color:#f8a623}.notification--error .notification__wrapper[data-v-296231b8]{background-color:#ff4577}@media only screen and (min-width:480px){.notification__wrapper[data-v-296231b8]{width:auto;max-width:568px;min-width:288px;margin:0 auto;border-radius:4px}.notification--left .notification__wrapper[data-v-296231b8]{margin-left:0}.notification--right .notification__wrapper[data-v-296231b8]{margin-right:0}}.notification__content[data-v-296231b8]{position:relative;display:flex;align-items:center;justify-content:space-between;width:100%;min-height:48px;padding:8px 24px;overflow:hidden}.notification--multi-line .notification__content[data-v-296231b8]{min-height:80px;padding:16px 24px}.notification__message[data-v-296231b8]{position:relative;display:flex;align-items:center;flex-grow:1}.notification__message p[data-v-296231b8]{font-stretch:normal;letter-spacing:.23px;line-height:inherit;font-weight:400;margin:0}.notification__close svg[data-v-296231b8]{position:relative;height:20px;width:20px}.notification button[data-v-296231b8]{border:none;margin:0;padding:0;width:auto;overflow:visible;background:0 0;color:inherit;font:inherit;line-height:normal;-webkit-font-smoothing:inherit;-moz-osx-font-smoothing:inherit;-webkit-appearance:none;position:relative;display:inline-flex;flex:0 0 auto;align-items:center;justify-content:center;border-radius:4px;cursor:pointer;padding:8px;margin:0 0 0 16px;height:auto;color:#fff;font-size:14px;font-weight:500;outline:0;text-decoration:none;transition:.3s cubic-bezier(.25,.8,.5,1),color 1ms;user-select:none}.notification button[data-v-296231b8]:active,.notification button[data-v-296231b8]:focus{outline:0;box-shadow:0}.notification button[data-v-296231b8]:hover{background-color:rgba(0,0,0,.1)}.notification button[data-v-296231b8]:first-of-type{margin:0 0 0 24px}.notification button.notification__close[data-v-296231b8]{border-radius:50%}.notification button.notification__action[data-v-296231b8]{background-color:rgba(0,0,0,.1)}.notification button.notification__action[data-v-296231b8]:hover{background-color:rgba(0,0,0,.3)}.notification__icon[data-v-296231b8]{display:flex;justify-content:center;align-items:center;border-radius:4px;width:26px;min-width:26px;height:26px;min-height:26px;margin-right:16px}.notification--success .notification__icon[data-v-296231b8]{background-color:#1c66ff}.notification--info .notification__icon[data-v-296231b8]{background-color:#535e7a}.notification--warning .notification__icon[data-v-296231b8]{background-color:#e18d07}.notification--error .notification__icon[data-v-296231b8]{background-color:#ff1252}.notification__icon svg[data-v-296231b8]{position:relative;width:auto}.notification-transition-enter-active[data-v-296231b8],.notification-transition-leave-active[data-v-296231b8]{transition:transform .4s cubic-bezier(.25,.8,.5,1)}.notification-transition-enter-active .notification__content[data-v-296231b8],.notification-transition-leave-active .notification__content[data-v-296231b8]{transition:opacity .3s linear .1s}.notification-transition-enter .notification__content[data-v-296231b8]{opacity:0}.notification-transition-enter-to .notification__content[data-v-296231b8],.notification-transition-leave .notification__content[data-v-296231b8]{opacity:1}.notification-transition-enter.notification.notification--top[data-v-296231b8],.notification-transition-leave-to.notification.notification--top[data-v-296231b8]{transform:translateY(calc(-100% - 8px))}@media only screen and (min-width:480px){.notification-transition-enter.notification.notification--top.notification--right[data-v-296231b8],.notification-transition-leave-to.notification.notification--top.notification--right[data-v-296231b8]{transform:translateY(24px) translateX(calc(100% + 8px))}.notification-transition-enter.notification.notification--top.notification--left[data-v-296231b8],.notification-transition-leave-to.notification.notification--top.notification--left[data-v-296231b8]{transform:translateY(24px) translateX(calc(-100% - 8px))}}.notification-transition-enter.notification.notification--bottom[data-v-296231b8],.notification-transition-leave-to.notification.notification--bottom[data-v-296231b8]{transform:translateY(100%)}@media only screen and (min-width:480px){.notification-transition-enter.notification.notification--bottom.notification--right[data-v-296231b8],.notification-transition-leave-to.notification.notification--bottom.notification--right[data-v-296231b8]{transform:translateY(-24px) translateX(calc(100% + 8px))}.notification-transition-enter.notification.notification--bottom.notification--left[data-v-296231b8],.notification-transition-leave-to.notification.notification--bottom.notification--left[data-v-296231b8]{transform:translateY(-24px) translateX(calc(-100% - 8px))}}",map:void 0,media:void 0}))},{name:"NotificationItem",mixins:[l,u,d],props:{type:{type:String},hideIcon:{type:Boolean,default:!1},message:{type:String,default:String},position:{type:String,default:String},multiLine:{type:Boolean,default:!1},verticalOffset:{type:Number,default:16},closeDelay:{type:Number,default:4500},actionText:{type:String,default:void 0},onActionClick:{type:Function,default:void 0},showClose:{type:Boolean,default:!1},zIndex:{type:Number,default:1003}},data:function(){return{NOTIFICATION_ICONS:_,activeTimeout:-1}},computed:{classes:function(){return{"notification--active":this.isActive,"notification--multi-line":this.multiLine,"notification--absolute":this.absolute,"notification--bottom":this.bottom||!this.top,"notification--left":this.left,"notification--right":this.right,"notification--top":this.top}},verticalProperty:function(){return/^top/.test(this.position)?"top":"bottom"},positionStyle:function(){return a({zIndex:this.zIndex},this.verticalProperty,"".concat(this.verticalOffset,"px"))},iconType:function(){return this.type&&_[this.type]}},beforeDestroy:function(){this.$refs.notification&&this.$refs.notification.parentNode.removeChild(this.$refs.notification)},watch:{isActive:{handler:(x=f(c.mark(function t(){return c.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.$nextTick();case 2:this.setTimeout();case 3:case"end":return t.stop()}},t,this)})),function(){return x.apply(this,arguments)}),immediate:!0}},methods:{setTimeout:function(t){function n(){return t.apply(this,arguments)}return n.toString=function(){return t.toString()},n}(function(){var t=this;clearTimeout(this.activeTimeout),this.isActive&&this.closeDelay&&(this.activeTimeout=setTimeout(function(){t.isActive=!1},this.closeDelay))}),close:function(){this.isActive=!1}}},"data-v-296231b8",!1,0,function t(){var n=document.head||document.getElementsByTagName("head")[0],i=t.styles||(t.styles={}),e="undefined"!=typeof navigator&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());return function(t,o){if(!document.querySelector('style[data-vue-ssr-id~="'+t+'"]')){var r=e?o.media||"default":t,a=i[r]||(i[r]={ids:[],parts:[],element:void 0});if(!a.ids.includes(t)){var c=o.source,s=a.ids.length;if(a.ids.push(t),o.map&&(c+="\n/*# sourceURL="+o.map.sources[0]+" */",c+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o.map))))+" */"),e&&(a.element=a.element||document.querySelector("style[data-group="+r+"]")),!a.element){var f=a.element=document.createElement("style");f.type="text/css",o.media&&f.setAttribute("media",o.media),e&&(f.setAttribute("data-group",r),f.setAttribute("data-next-index","0")),n.appendChild(f)}if(e&&(s=parseInt(a.element.getAttribute("data-next-index")),a.element.setAttribute("data-next-index",s+1)),a.element.styleSheet)a.parts.push(c),a.element.styleSheet.cssText=a.parts.filter(Boolean).join("\n");else{var l=document.createTextNode(c),u=a.element.childNodes;u[s]&&a.element.removeChild(u[s]),u.length?a.element.insertBefore(l,u[s]):a.element.appendChild(l)}}}}});function j(t,n){var i=Object.keys(t);return Object.getOwnPropertySymbols&&i.push.apply(i,Object.getOwnPropertySymbols(t)),n&&(i=i.filter(function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})),i}function L(t){for(var n=arguments,i=1;i<arguments.length;i++){var e=null!=n[i]?n[i]:{};i%2?j(e,!0).forEach(function(n){a(t,n,e[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):j(e).forEach(function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))})}return t}var k,C=n.extend(O),T=[],E=1,P=function t(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{top:!0,bottom:!1,left:!0,right:!1},i=I(t.options,n),e="notification_"+E++,o=S(i),r=N(o),a="string"==typeof i?{message:i}:i;return(k=new C({propsData:L({},a,{value:!1,position:r,verticalOffset:A(T,r,i)}),mounted:function(){this.$on("input",function(n){n||t.close(e)})}})).id=e,k.$mount(),document.body.appendChild(k.$el),k.value=!0,k.$nextTick(function(){k.dom=k.$el}),T.push(k),k};function S(t){return Object.assign.apply(Object,[{}].concat(r(w.map(function(n){return a({},n,t[n])}))))}function N(t){return Object.keys(t).filter(function(n){return t[n]}).join("-")}function A(t,n){var i=(arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}).offset,e=void 0===i?0:i;return t.filter(function(t){return t.position===n}).reduce(function(t,n){return t+=n.$el.offsetHeight+16},e)}function I(t,n){if(!t.breakpoints)return n;var i=window.innerWidth,e=-1;Object.keys(t.breakpoints).forEach(function(t){console.log(t<=i),t<=i&&t>e&&(e=Number(t))});var o="string"==typeof n?{message:n}:n;return Object.assign({},t.breakpoints[e],o)}["success","warning","info","error"].forEach(function(t){P[t]=function(n){return"string"==typeof n&&(n={message:n}),n.type=t,P(n)}}),P.close=function(t){var n=T.length,i=T.find(function(n){return n.id===t});if(i){var e=T.findIndex(function(n){return n.id===t});if(T.splice(e,1),!(n<=1))for(var o=i.position,r=i.dom.offsetHeight,a=e;a<n-1;a++){if(T[a].position!==o)return;T[a].dom.style[i.verticalProperty]="".concat(parseInt(T[a].dom.style[i.verticalProperty],10)-r-16,"px")}}},P.closeAll=function(){T.forEach(function(t){t.close()})};var B={version:"0.1.1-rc.1",install:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};P.options=n,t.prototype.$notify=P},Notification:P},z=null;"undefined"!=typeof window?z=window.Vue:"undefined"!=typeof global&&(z=global.Vue),z&&z.use(B),t.default=B,Object.defineProperty(t,"__esModule",{value:!0})});
