"use strict";(self.webpackChunkproyecto_8=self.webpackChunkproyecto_8||[]).push([[828],{828:(H,p,c)=>{c.r(p),c.d(p,{HomeModule:()=>s});var f=c(895),u=c(773),t=c(256);class i{constructor(o){this.resolverData=o}Time(){let l,d,h,o=new Date,e=o.getHours(),m=o.getMinutes(),r=o.getSeconds();l=e>=13?e-12:e,e<10&&(l=`0${l}`),h=m<10?`0${m}`:m,d=r<10?`0${r}`:r,this.results=`${l}:${h}:${d}${e>=13?"p.m":"a.m"}`}ngOnInit(){this.resolverData.queryParams.subscribe(o=>{this.cityLogin=o.city}),this.Time(),setInterval(()=>this.Time(),1e3)}}i.\u0275fac=function(o){return new(o||i)(t.Y36(u.gz))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-home"]],decls:4,vars:1,consts:[[2,"color","#c901c9"]],template:function(o,e){1&o&&(t.TgZ(0,"h3"),t._uU(1,"Hora actual en Tegucigalpa "),t.TgZ(2,"span",0),t._uU(3),t.qZA()()),2&o&&(t.xp6(3),t.Oqu(e.results))},styles:["h3[_ngcontent-%COMP%]{font-size:40px;padding:20px;box-shadow:0 2px 10px #fff;background:rgba(0,0,0,.089)}"]});const g=[{path:"",component:i}];class n{}n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[u.Bz.forChild(g),u.Bz]});class s{}s.\u0275fac=function(o){return new(o||s)},s.\u0275mod=t.oAB({type:s}),s.\u0275inj=t.cJS({imports:[f.ez,n]})}}]);