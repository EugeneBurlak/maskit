module.exports=function(e){var t={};function n(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(i,r,function(t){return e[t]}.bind(null,r));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="./",n(n.s=0)}([function(e,t,n){"use strict";function i(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}n.r(t);var r=function(){function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.input=t,this.value="",this.mask=this.createMaskArray(t.getAttribute("data-maskit")),this.options=n,this.filled=!1,this.init()}var t,n,r;return t=e,(n=[{key:"createMaskArray",value:function(e){var t=[],n=0;for(var i in e)i=parseInt(i),n?--n:"{"===e[i]&&"}"===e[i+2]?(t.push({type:"plain",value:e[i+1]}),n+=2):"?+-()[]{}.,\\/-=_~`|'\" ".split("").indexOf(e[i])>=0?t.push({type:"plain",value:e[i]}):t.push({type:"dynamic",value:e[i]});return t}},{key:"checkMaskChar",value:function(e,t,n,i){var r="",u=t[n];return"plain"===u.type&&(r+=u.value,r+=this.checkMaskChar(e,t,++n,i)),"dynamic"===u.type&&("0"===u.value&&/^[0-9]+$/.test(e)&&(r+=e),"A"===u.value&&/^[A-Za-zА-Яа-я]+$/.test(e)&&(r+=e),"Ы"===u.value&&/^[А-Яа-я]+$/.test(e)&&(r+=e)),r.length&&i(),r}},{key:"checkMask",value:function(e,t){var n="",i=0;for(var r in e){if(!t[r])return n;var u=e[r=parseInt(r)].toString();u===t[r].value?(n+=u,++i):n+=this.checkMaskChar(u,t,i,(function(){++i}))}return n}},{key:"onFilled",value:function(){var e=this.options.onFilled;this.filled=!0,e&&e(this)}},{key:"offFilled",value:function(){var e=this.options.offFilled;this.filled=!1,e&&e(this)}},{key:"onBlur",value:function(){var e=this.options,t=e.onBlur;e.notFilledClear&&this.value.length!==this.mask.length&&this.setValue(""),t&&t(this)}},{key:"setValue",value:function(e){this.input.value=e,e.length===this.mask.length?this.onFilled():this.offFilled()}},{key:"listenerInput",value:function(){var e=this;this.input.addEventListener("input",(function(t){e.value=e.checkMask(t.target.value,e.mask),e.setValue(e.value)}))}},{key:"listenerBlur",value:function(){var e=this;this.input.addEventListener("blur",(function(t){e.onBlur()}))}},{key:"runListener",value:function(){this.listenerInput(),this.listenerBlur()}},{key:"init",value:function(){this.runListener()}}])&&i(t.prototype,n),r&&i(t,r),e}();t.default=r}]);