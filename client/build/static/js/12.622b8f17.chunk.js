(this.webpackJsonptest=this.webpackJsonptest||[]).push([[12],{731:function(e,t,n){"use strict";n.r(t);var c,i=n(118),r=n(710),a=n(1),s=n(21),o=n(41),l=n(705),d=n(720),u=n(719),b=(n(717),n(8));t.default=function(){var e=Object(a.useState)([]),t=Object(r.a)(e,2),n=t[0],j=t[1],O=Object(a.useState)([]),p=Object(r.a)(O,2),h=p[0],f=p[1],m=Object(a.useState)(0),g=Object(r.a)(m,2),x=g[0],y=g[1],_=Object(a.useState)(0),k=Object(r.a)(_,2),S=k[0],v=k[1],F=Object(a.useState)(0),w=Object(r.a)(F,2),z=w[0],E=w[1],D=Object(a.useState)(0),P=Object(r.a)(D,2),N=P[0],T=P[1],L=Object(o.d)((function(e){return e.user.userSettings.eczaneName})),M=Object(o.d)((function(e){return e.user.userInfo.bakiye})),q=Object(l.a)(c||(c=Object(i.a)(["\n      query {\n        application(onHold: true ) {\n          application_id\n          transaction_id\n          product_name\n          product_barcode\n          goal\n          condition\n          unit_price\n          submitter\n          submitter_pledge\n          description\n          status\n          joiners {\n            name\n            pledge\n          }\n          submit_date\n          final_date\n          status_change_date\n        }\n      }\n    "]))),C=Object(d.a)(q,{fetchPolicy:"network-only",onError:function(e){return console.log(e)}}),G=C.loading,I=C.refetch,J=C.data;return Object(a.useEffect)((function(){if(!1===G&&J&&0!==J.application.length){var e=J.application.map((function(e){var t=new Date(Number(e.final_date)),n="".concat(t.getFullYear(),"-").concat(t.getMonth()+1,"-").concat(t.getDate()),c="";switch(e.status){case"APPROVED":c="rgb(55, 229, 148, 0.25)";break;case"DELETED":c="red"}return{birimFiyat:e.unit_price,durum:e.status,eczane:e.submitter,hedef:e.goal,ID:e.application_id,kampanya:e.condition,pledge:e.submitter_pledge,sonTarih:n,"\u0130la\xe7":e.product_name,description:e.description,"kat\u0131lanlar":e.joiners,bgColor:c}}));return j(e)}}),[G,J]),Object(a.useEffect)((function(){var e;S>=0&&(E(S*(null===(e=n[x])||void 0===e?void 0:e.birimFiyat)),T(M-z))}),[S,z,x,M,n]),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(s.M,{children:Object(b.jsx)(s.i,{children:Object(b.jsx)(s.F,{className:"tableLabel bekleyentekliflerGradient",children:"Bekleyen Teklifler "})})}),Object(b.jsx)(s.M,{children:Object(b.jsx)(s.i,{children:Object(b.jsx)("div",{style:{border:"solid 1px rgb(83, 83, 223, 0.35)"},children:Object(b.jsx)(s.m,{loading:G,header:!0,items:n,fields:u.a,columnFilter:!0,footer:!0,itemsPerPage:10,sorter:!0,pagination:!0,border:!0,scopedSlots:{eczane:function(e){return Object(b.jsx)("td",{style:{fontSize:"12px"},children:e.eczane})},"\u0130la\xe7":function(e){return Object(b.jsx)("td",{children:Object(b.jsx)("b",{children:e.\u0130la\u00e7})})},hedef:function(e){return Object(b.jsx)("td",{children:Object(b.jsxs)(s.a,{color:"secondary",children:[e.pledge,"/",e.hedef]})})},birimFiyat:function(e){return Object(b.jsxs)("td",{style:{color:"green"},children:[e.birimFiyat," TL"]})},kampanya:function(e){return Object(b.jsx)("td",{children:Object(u.c)(e.kampanya)})},durum:function(e){return Object(b.jsx)("td",{children:Object(b.jsx)(s.a,{color:Object(u.b)(e.durum),children:Object(u.d)(e.durum)})})},show_details:function(e,t){return Object(b.jsx)("td",{className:"py-2",children:Object(b.jsx)(s.d,{color:"primary",variant:"outline",shape:"square",size:"sm",onClick:function(){Object(u.h)(t,h,f,v,E,T),y(t)},children:h.includes(t)?"Sakla":"G\xf6ster"})})},details:function(e,t){return Object(b.jsx)(s.j,{show:h.includes(t),children:Object(b.jsx)(s.i,{sm:"12",children:Object(u.i)(L,e.eczane,e,t,S,v,z,N,I)})})}}})})})})]})}}}]);
//# sourceMappingURL=12.622b8f17.chunk.js.map