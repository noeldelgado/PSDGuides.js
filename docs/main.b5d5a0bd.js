parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"d0fl":[function(require,module,exports) {
"use strict";function t(t){this.config={canvas:document.body,canvasWidth:0,alignment:"center",backColor:"rgba(132, 170, 234, 0)",lineColor:"cyan",horizontalGuides:[],verticalGuides:[],zindex:9999},this._ui=null,this._verticalGuides=null,this._horizontalGuides=null,this.__resizeHandler=null,this._reGroup=null,this._reSplit=null,this.active=null,Object.keys(t).forEach(function(i){this.config[i]=t[i]},this),this._init()}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0,t.prototype._init=function(){return this._ui={},this.active=!1,this._verticalGuides=[],this._horizontalGuides=[],this._reGroup=new RegExp("[()\\s]","g"),this._reSplit=new RegExp("[,*]","g"),this._ui.documentElement=window.document.documentElement,this._ui.body=window.document.body,this._ui.wrapper=document.createElement("div"),this._ui.hContainer=document.createElement("div"),this._ui.vContainer=document.createElement("div"),this._setStyles(this._ui.wrapper,{display:"none",position:"absolute",top:0,left:0,zIndex:this.config.zIndex,backgroundColor:this.config.backColor})._setStyles(this._ui.hContainer,{position:"absolute",top:0,height:"100%",borderLeft:"1px solid "+this.config.lineColor,borderRight:"1px solid "+this.config.lineColor})._setStyles(this._ui.vContainer,{position:"absolute",top:0,height:"100%",width:"100%"}),this._ui.wrapper.className="psd-guides-wrapper",this.config.canvas.appendChild(this._ui.wrapper),this._bindEvents(),this._overrideCSS(),this.addVerticalGuides(this.config.verticalGuides),this.addHorizontalGuides(this.config.horizontalGuides),this.update(),this},t.prototype._bindEvents=function(){return this.__resizeHandler=this._resizeHandler.bind(this),window.addEventListener("resize",this.__resizeHandler,!1),this},t.prototype._resizeHandler=function(){this.active&&(this._hide(),window.clearTimeout(this._resizeTimer),this._resizeTimer=window.setTimeout(function(){this.update().activate()}.bind(this),250))},t.prototype.addVerticalGuides=function(t){return this._verticalGuides=this._verticalGuides.concat(this._getParsedGuides(t)),this},t.prototype.addHorizontalGuides=function(t){return this._horizontalGuides=this._horizontalGuides.concat(this._getParsedGuides(t)),this},t.prototype._getParsedGuides=function(t){var i=[];return t.map(function(t){var e,n,o,s,r;if("string"!=typeof t||-1===t.indexOf("*"))i.push(~~t);else for(n=(e=t.replace(this._reGroup,"").split(this._reSplit)).pop(),o=e.length,s=0;s<n;s++)for(r=0;r<o;r++)i.push(~~e[r])},this),i},t.prototype._createVerticalLines=function(){var t,i;return t=document.createDocumentFragment(),i=0,this.getVerticalGuides().map(function(e){this._appendLine(t,{height:e+"px",borderBottom:"1px solid "+this.config.lineColor}),i+=e},this),i=Math.max(this._ui.body.clientHeight,i),this._ui.wrapper.style.height=i,this._ui.vContainer.appendChild(t),this._ui.wrapper.appendChild(this._ui.vContainer),this},t.prototype._createHorizontalLines=function(){var t,i,e;return t=document.createDocumentFragment(),i=this.config.canvasWidth,e=0,this._setStyles(this._ui.hContainer,{width:i+"px",marginLeft:this._getAligment(i)+"px"}).getHorizontalGuides().map(function(i){this._appendLine(t,{position:"absolute",left:e+"px",width:i+"px",height:"100%",borderRight:"1px solid "+this.config.lineColor}),e+=i},this),this._ui.hContainer.appendChild(t),this._ui.wrapper.appendChild(this._ui.hContainer),this},t.prototype._removeLines=function(){for(;this._ui.hContainer.firstChild;)this._ui.hContainer.removeChild(this._ui.hContainer.firstChild);for(;this._ui.vContainer.firstChild;)this._ui.vContainer.removeChild(this._ui.vContainer.firstChild);return this},t.prototype._appendLine=function(t,i){var e=document.createElement("div");return this._setStyles(e,i),t.appendChild(e),this},t.prototype._getMaxSize=function(t){var i,e,n;return i=Math.max(this._ui.body["scroll"+t],this._ui.documentElement["scroll"+t]),e=Math.max(this._ui.body["offset"+t],this._ui.documentElement["offset"+t]),n=Math.max(this._ui.body["client"+t],this._ui.documentElement["client"+t]),Math.max(i,e,n)},t.prototype._getAligment=function(t){return"left"===this.config.alignment?0:"right"===this.config.alignment?Math.floor(this._getMaxSize("Width")-t):Math.floor((this._getMaxSize("Width")-t)/2)},t.prototype._setStyles=function(t,i){return Object.keys(i).forEach(function(e){t.style[e]=i[e]}),this},t.prototype._overrideCSS=function(){var t,i,e;return t=".psd-guides-wrapper * {-webkit-box-sizing: border-box !important; box-sizing: border-box !important;}",i=document.getElementsByTagName("head")[0],(e=document.createElement("style")).type="text/css",e.styleSheet?e.styleSheet.cssText=t:e.appendChild(document.createTextNode(t)),i.appendChild(e),this},t.prototype._hide=function(){this._ui.wrapper.style.display="none"},t.prototype.getHorizontalGuides=function(){return this._horizontalGuides},t.prototype.getVerticalGuides=function(){return this._verticalGuides},t.prototype.removeHorizontalGuides=function(){return this._horizontalGuides=[],this},t.prototype.removeVerticalGuides=function(){return this._verticalGuides=[],this},t.prototype.removeGuides=function(){return this.removeHorizontalGuides().removeVerticalGuides(),this},t.prototype.update=function(){return this._setStyles(this._ui.wrapper,{width:this._getMaxSize("Width")+"px",height:this._getMaxSize("Height")+"px"})._removeLines()._createVerticalLines()._createHorizontalLines(),this},t.prototype.activate=function(){return this.active=!0,this.update(),this._ui.wrapper.style.display="",this},t.prototype.deactivate=function(){return this.active=!1,this._hide(),this},t.prototype.destroy=function(){return this._removeLines(),this._ui.wrapper.removeChild(this._ui.vContainer),this._ui.wrapper.removeChild(this._ui.hContainer),this.config.canvas.removeChild(this._ui.wrapper),window.removeEventListener("resize",this.__resizeHandler,!1),Object.keys(this).forEach(function(t){delete this[t]},this),null};var i=t;exports.default=i;
},{}],"HJDO":[function(require,module,exports) {
"use strict";var e=t(require("/src/PSDGuides.js"));function t(e){return e&&e.__esModule?e:{default:e}}var r=[].slice.call(document.querySelectorAll(".psdguides-ctrl"),0),n=document.querySelector(".psdguides-ctrl--fixed"),u=new e.default({canvasWidth:500,lineColor:"cyan",horizontalGuides:["(10, 60) * 7"],verticalGuides:[37,70,25,55,20,50,35,3,40,15,30,50,55,130,90,110,"(55, 110) * 2",35,3,155]});function i(e){return null==e||e.preventDefault(),u.active?(n.textContent="Show PSDGuides.js",u.deactivate()):(n.textContent="Hide PSDGuides.js",u.activate())}r.forEach(function(e){e.addEventListener("click",i,!1)});var c=e=>{var{length:t}=e,r=Math.ceil(t/2),n=e.sort((e,t)=>e-t);return t%2==0?(n[r]+n[r-1])/2:n[r-1]},l=e=>{const{length:t}=e;return e.reduce((e,t)=>e+t)/t},a=e=>{var t,r,n=[],u=[],i=0;for(t=0;t<e.length;t+=1)u[r=e[t]]=(u[r]||0)+1,u[r]>i&&(i=u[r]);for(t in u)u.hasOwnProperty(t)&&u[t]===i&&n.push(Number(t));return n};
},{"/src/PSDGuides.js":"d0fl"}]},{},["HJDO"], null)
//# sourceMappingURL=main.b5d5a0bd.js.map