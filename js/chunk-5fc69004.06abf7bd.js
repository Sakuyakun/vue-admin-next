(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5fc69004"],{"19cf":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("el-breadcrumb",{staticClass:"eden-breadcrumb",attrs:{separator:"/"}},[r("transition-group",{attrs:{name:"breadcrumb"}},t._l(t.list,function(e,n){return e.meta.title?r("el-breadcrumb-item",{key:e.path},["noredirect"===e.redirect||n===e.length-1?r("span",{staticClass:"no-redirect"},[t._v("\n        "+t._s(t.getTitle(e.meta.title))+"\n      ")]):r("router-link",{attrs:{to:e.redirect||e.path}},[t._v("\n        "+t._s(t.getTitle(e.meta.title))+"\n      ")])],1):t._e()}),1)],1)},a=[],c=(r("7f7f"),{name:"breadcrumb",data:function(){return{list:null}},created:function(){this.getBreadcrumb()},watch:{$route:function(){this.getBreadcrumb()}},methods:{getBreadcrumb:function(){var t=this.$route.matched.filter(function(t){return t.name});t[0]&&"dashboard"!==t[0].name&&(t=[{path:"/dashboard",meta:{title:"dashboard"}}].concat(t)),this.list=t},getTitle:function(t){return this.$te("route.".concat(t))?this.$t("route.".concat(t)):t}}}),i=c,u=(r("92bd"),r("33d9"),r("2877")),s=Object(u["a"])(i,n,a,!1,null,"5b9a5ab4",null);e["default"]=s.exports},"33d9":function(t,e,r){"use strict";var n=r("eb35"),a=r.n(n);a.a},"92bd":function(t,e,r){"use strict";var n=r("ae0b"),a=r.n(n);a.a},ae0b:function(t,e,r){},eb35:function(t,e,r){}}]);