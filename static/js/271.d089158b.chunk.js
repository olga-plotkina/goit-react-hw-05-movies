"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[271],{6713:function(e,t,n){n.d(t,{h:function(){return r}});var r=n(1044).ZP.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"7d3bca08f8a690c3623c76013972de57"}})},5989:function(e,t,n){n.d(t,{O:function(){return u}});var r=n(7689),a=n(1087),c=n(184),u=function(e){var t=e.movies,n=(0,r.TH)();return(0,c.jsx)("ul",{children:t.map((function(e){return(0,c.jsx)("li",{children:(0,c.jsx)(a.rU,{to:"/movies/".concat(e.id),state:{from:n},children:e.title})},e.id)}))})}},1271:function(e,t,n){n.r(t),n.d(t,{default:function(){return d}});var r=n(5861),a=n(885),c=n(7757),u=n.n(c),i=n(5562),s=n.n(i),o=n(6713),f=function(){var e=(0,r.Z)(u().mark((function e(){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.h.get("/trending/movie/day",{params:{page:1}});case 3:return t=e.sent,e.abrupt("return",t.data.results);case 7:e.prev=7,e.t0=e.catch(0),s().Notify.failure(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),p=n(5989),l=n(2791),h=n(184),d=function(){var e=(0,l.useState)([]),t=(0,a.Z)(e,2),n=t[0],c=t[1];return(0,l.useEffect)((function(){function e(){return(e=(0,r.Z)(u().mark((function e(){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f();case 3:t=e.sent,c(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),s().Notify.failure(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),(0,h.jsxs)("main",{children:[(0,h.jsx)("h1",{children:"Trending today"}),(0,h.jsx)(p.O,{movies:n})]})}}}]);
//# sourceMappingURL=271.d089158b.chunk.js.map