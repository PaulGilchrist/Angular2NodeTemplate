"use strict";var __decorate=this&&this.__decorate||function(e,t,r,o){var c,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,o);else for(var i=e.length-1;i>=0;i--)(c=e[i])&&(a=(n<3?c(a):n>3?c(t,r,a):c(t,r))||a);return n>3&&a&&Object.defineProperty(t,r,a),a},__metadata=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},core_1=require("@angular/core"),SortObjectsPipe=function(){function e(){}return e.prototype.transform=function(e,t,r){return void 0===r&&(r=!1),e&&t?e.sort(function(e,o){return e[t]<o[t]?r?1:-1:o[t]<e[t]?r?-1:1:0}):e},e=__decorate([core_1.Pipe({name:"sortObjects"}),__metadata("design:paramtypes",[])],e)}();exports.SortObjectsPipe=SortObjectsPipe;