"use strict";var __decorate=this&&this.__decorate||function(e,o,t,n){var r,a=arguments.length,c=a<3?o:null===n?n=Object.getOwnPropertyDescriptor(o,t):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,o,t,n);else for(var p=e.length-1;p>=0;p--)(r=e[p])&&(c=(a<3?r(c):a>3?r(o,t,c):r(o,t))||c);return a>3&&c&&Object.defineProperty(o,t,c),c},__metadata=this&&this.__metadata||function(e,o){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,o)},core_1=require("@angular/core"),common_1=require("@angular/common"),router_1=require("@angular/router"),common_2=require("@angular/common"),help_component_1=require("./help.component"),help_home_component_1=require("./help-home.component"),help_nav_component_1=require("./help-nav.component"),help_routing_1=require("./help.routing"),HelpModule=function(){function e(){}return e=__decorate([core_1.NgModule({declarations:[help_component_1.HelpComponent,help_home_component_1.HelpHomeComponent,help_nav_component_1.HelpNavComponent],imports:[common_1.CommonModule,router_1.RouterModule,help_routing_1.routing],providers:[{provide:common_2.LocationStrategy,useClass:common_2.HashLocationStrategy}]}),__metadata("design:paramtypes",[])],e)}();exports.HelpModule=HelpModule;