(this["webpackJsonpmarks-monitor"]=this["webpackJsonpmarks-monitor"]||[]).push([[0],{183:function(e,t,n){},185:function(e,t,n){},186:function(e,t,n){},187:function(e,t,n){},205:function(e,t,n){"use strict";n.r(t);var c=n(0),s=n.n(c),i=n(6),a=n.n(i),r=(n(80),n(10)),l=(n(81),n(3)),o=(n(82),n(26)),d=function(e,t){var n=document.getElementById(e);n&&n.classList.toggle(t)},j=n(15),u=n(1),b="NavSideBar";function h(){var e=JSON.parse(JSON.stringify(o)),t=function(e){if("main"===e)return"tag is-secondary pt-1"};return Object(u.jsx)("div",{id:b,className:b,children:Object(u.jsx)("div",{className:"box is-flex is-flex-direction-column-reverse",children:Object(u.jsx)("div",{className:"pb-6 mb-6",children:e.list.map((function(e,n){return Object(u.jsx)("div",{className:"ml-0 mr-0",children:Object(u.jsx)(j.b,{to:"/marks-monitor".concat(e.link),id:e.name,className:"LocalTitleLink ".concat(t(e.name)),style:{order:n},onClick:function(){return d(b,"active")},children:e.title},n)},n)}))})})})}var m=n(75),O=(n(88),n(71)),x=function(e){var t=new Date(e).toUTCString().split(" ");switch(t[2]){case"Jan":return"".concat(t[1]," \u042f\u043d\u0432 ").concat(t[3]);case"Feb":return"".concat(t[1]," \u0424\u0435\u0432 ").concat(t[3]);case"Mar":return"".concat(t[1]," \u041c\u0430\u0440 ").concat(t[3]);case"Apr":return"".concat(t[1]," \u0410\u043f\u0440 ").concat(t[3]);case"May":return"".concat(t[1]," \u041c\u0430\u044f ").concat(t[3]);case"Jun":return"".concat(t[1]," \u0418\u044e\u043d ").concat(t[3]);case"Jul":return"".concat(t[1]," \u0418\u044e\u043b ").concat(t[3]);case"Aug":return"".concat(t[1]," \u0410\u0432\u0433 ").concat(t[3]);case"Sep":return"".concat(t[1]," \u0421\u0435\u043d ").concat(t[3]);case"Oct":return"".concat(t[1]," \u041e\u043a\u0442 ").concat(t[3]);case"Nov":return"".concat(t[1]," \u041d\u043e\u044f ").concat(t[3]);case"Dec":return"".concat(t[1]," \u0414\u0435\u043a ").concat(t[3]);default:return""}},f=function(e){var t={label:"\u041c\u0438\u043d\u0443\u0442\u044b",data:e.data.map((function(e){return Number(e.minutes.toFixed(2))})),backgroundColor:e.data.map((function(e){return"#1cff1c88"}))},n={label:"\u0411\u0430\u043b\u043b\u044b",data:e.data.map((function(e){return e.points})),backgroundColor:e.data.map((function(e){return"#00c3ff88"}))},c={labels:e.data.map((function(t,n){return e.data.length>12?0===n||n===e.data.length-1?x(t.date):"":x(t.date)})),datasets:[t,n]};return Object(u.jsx)("div",{className:"continer",children:Object(u.jsx)(O.Bar,{data:c,options:{scales:{yAxes:[{ticks:{beginAtZero:!0}}]},tooltips:{enabled:!0},responsive:!0,maintainAspectRatio:!1,legend:{labels:{fontSize:20}},devicePixelRatio:4},height:.4*window.innerHeight,redraw:e.redraw})})},v=Object(c.createContext)({data:[],loaded:!1}),p=(n(183),function(e){return Object(u.jsx)("div",{children:Object(u.jsx)("div",{className:"preloader",style:{width:e.width,height:e.height},children:Object(u.jsx)("div",{className:"loader"})})})}),g=n(74),N=(n(185),"Stats");function k(){var e=Object(c.useContext)(v),t=Object(c.useState)(Object(u.jsx)(p,{width:"100%",height:"100%"})),n=Object(r.a)(t,2),s=n[0],i=n[1],a=Object(c.useState)((function(){var t,n;return e.loaded?t=(n=e.data.length-1)-7>0?n-7:0:(t=0,n=4),{left:t,right:n}})),l=Object(r.a)(a,2),o=l[0],d=l[1],j={min:0,max:e.data.length-1,step:1,value:[o.left,o.right],count:1,pushable:3,draggableTrack:!0,onChange:function(e){d({left:e[0],right:e[1]})},dots:e.data.length<13};return Object(c.useEffect)((function(){if(e.loaded){var t=e.data.length-1;d({left:t-7>0?t-7:0,right:t})}}),[e]),Object(c.useEffect)((function(){i(Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(f,{data:e.data.slice(o.left,o.right+1)}),Object(u.jsx)("div",{className:"mt-3",children:Object(u.jsx)(g.a,Object(m.a)({},j))})]}))}),[o]),Object(u.jsx)("div",{className:N,id:N,children:Object(u.jsx)("div",{className:"container p-3 py-6",children:Object(u.jsxs)("div",{className:"content box",children:[Object(u.jsx)("h1",{children:"\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043a\u0430"}),s]})})})}n(186),n(61);var S=function(e){return s.a.createElement("ion-icon",{name:e})};function y(){return Object(u.jsx)("div",{className:"Spend",children:Object(u.jsx)("div",{className:"container p-3 py-6",children:Object(u.jsxs)("div",{className:"content box",children:[Object(u.jsx)("h1",{children:"\u041a\u0430\u043a \u0442\u0440\u0430\u0442\u0438\u0442\u044c \u0431\u0430\u043b\u043b\u044b"}),Object(u.jsx)("p",{children:"\u0414\u043b\u044f \u043d\u0430\u0447\u0430\u043b\u0430 \u043e\u0431\u0433\u043e\u0432\u043e\u0440\u0438\u043c \u043e\u0441\u043d\u043e\u0432\u043d\u044b\u0435 \u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u0438\u044f."}),Object(u.jsxs)("ul",{children:[Object(u.jsxs)("li",{children:[S("time-outline"),"\u041c\u0438\u043d\u0443\u0442\u044b \u043c\u043e\u0433\u0443\u0442 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c\u0441\u044f \u043a\u0430\u043a ",S("star-outline"),"\u0431\u0430\u043b\u043b\u044b. ",S("time-outline"),"1 \u043c\u0438\u043d\u0443\u0442\u0430 = ",S("star-outline"),"1 \u0431\u0430\u043b\u043b."]}),Object(u.jsxs)("li",{children:[S("star-outline"),"\u0411\u0430\u043b\u043b\u044b \u043d\u0435\u043b\u044c\u0437\u044f \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u043a\u0430\u043a ",S("time-outline"),"\u043c\u0438\u043d\u0443\u0442\u044b."]}),Object(u.jsxs)("li",{children:["\u0417\u0430\u0440\u0430\u0431\u043e\u0442\u0430\u043d\u043d\u044b\u0435 ",S("star-outline"),'\u0431\u0430\u043b\u043b\u044b \u043c\u043e\u0436\u043d\u043e \u043f\u043e\u0442\u0440\u0430\u0442\u0438\u0442\u044c \u043d\u0430 "\u043d\u0438\u0448\u0442\u044f\u043a\u0438" (\u0441\u043f\u0438\u0441\u043e\u043a "\u043d\u0438\u0448\u0442\u044f\u043a\u043e\u0432" \u0435\u0449\u0435 \u043d\u0435 \u0433\u043e\u0442\u043e\u0432).']}),Object(u.jsxs)("li",{children:[S("star-outline"),"\u0411\u0430\u043b\u043b\u044b \u043d\u0430 \u043d\u0438\u0448\u0442\u044f\u043a\u0438 \u043c\u043e\u0436\u043d\u043e \u0442\u0440\u0430\u0442\u0438\u0442\u044c \u0432 \u043b\u044e\u0431\u043e\u0439 \u0434\u0435\u043d\u044c \u043d\u0435\u0434\u0435\u043b\u0438."]})]}),Object(u.jsx)("p",{children:"\u0425\u043e\u0440\u043e\u0448\u043e, \u0441 \u044d\u0442\u0438\u043c \u0440\u0430\u0437\u043e\u0431\u0440\u0430\u043b\u0438\u0441\u044c. \u041d\u0443 \u0430 \u0442\u0435\u043f\u0435\u0440\u044c \u043f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435 \u043e \u0442\u043e\u043c, \u043a\u0430\u043a \u0432\u044b\u0441\u0447\u0438\u0442\u044b\u0432\u0430\u044e\u0442\u0441\u044f \u0442\u0440\u0430\u0442\u044b."}),Object(u.jsxs)("ul",{children:[Object(u.jsxs)("li",{children:[S("time-outline"),"\u041c\u0438\u043d\u0443\u0442\u044b \u043c\u043e\u0436\u043d\u043e \u043f\u043e\u0442\u0440\u0430\u0442\u0438\u0442\u044c \u043d\u0430 \u0432\u0440\u0435\u043c\u044f \u0438\u0433\u0440\u044b \u0432 \u043a\u043e\u043c\u043f\u044c\u044e\u0442\u0435\u0440."]}),Object(u.jsxs)("li",{children:["\u0415\u0441\u043b\u0438 ",S("star-outline"),"\u0431\u0430\u043b\u043b\u043e\u0432 \u0437\u0430 \u043b\u0438\u0441\u0442\u043e\u0447\u043a\u0438 \u0445\u0432\u0430\u0442\u0430\u0435\u0442, \u0442\u043e \u043d\u0438\u0448\u0442\u044f\u043a\u0438 \u043f\u043e\u043a\u0443\u043f\u0430\u044e\u0442\u0441\u044f \u043d\u0430 \u043d\u0438\u0445."]}),Object(u.jsxs)("li",{children:["\u0415\u0441\u043b\u0438 ",S("star-outline"),"\u0431\u0430\u043b\u043b\u043e\u0432 \u0437\u0430 \u043b\u0438\u0441\u0442\u043e\u0447\u043a\u0438 \u043d\u0430 \u0445\u0432\u0430\u0442\u0430\u0435\u0442, \u0442\u043e \u043c\u043e\u0436\u043d\u043e \u0432\u044b\u0447\u0435\u0441\u0442\u044c \u043d\u0435\u0434\u043e\u0441\u0442\u0430\u044e\u0449\u0438\u0435 ",S("star-outline"),"\u0431\u0430\u043b\u043b\u044b \u0438\u0437 ",S("time-outline"),"\u043c\u0438\u043d\u0443\u0442."]}),Object(u.jsxs)("li",{children:["\u0415\u0441\u043b\u0438 \u0438 \u0442\u0430\u043a ",S("star-outline"),"\u0431\u0430\u043b\u043b\u043e\u0432 \u043d\u0435 \u0445\u0432\u0430\u0442\u0438\u043b\u043e, \u0442\u043e, \u0443\u0432\u044b, \u043d\u0438\u043a\u0430\u043a\u0438\u0445 \u043d\u0438\u0448\u0442\u044f\u043a\u043e\u0432."]})]}),Object(u.jsxs)("p",{children:["\u041d\u0435\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u043d\u044b\u0435 ",S("star-outline"),"\u0431\u0430\u043b\u043b\u044b \u043c\u043e\u0436\u043d\u043e \u043a\u043e\u043f\u0438\u0442\u044c, \u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440:"]}),Object(u.jsxs)("p",{className:"example notification is-light",children:["\u041f\u043e\u0441\u043b\u0435 \u0440\u0430\u0441\u0447\u0435\u0442\u0430 \u0431\u044b\u043b\u043e ",S("star-outline"),"2000 \u0431\u0430\u043b\u043b\u043e\u0432 \u0438 45 \u043c\u0438\u043d\u0443\u0442. ",S("star-outline"),"1000 \u0442\u044b \u043f\u043e\u0442\u0440\u0430\u0442\u0438\u043b, \u0430 \u043e\u0441\u0442\u0430\u043b\u044c\u043d\u043e\u0435 \u0440\u0435\u0448\u0438\u043b \u043e\u0441\u0442\u0430\u0432\u0438\u0442\u044c. \u041f\u043e\u043b\u0443\u0447\u0430\u0435\u0442\u0441\u044f \u0443 \u0442\u0435\u0431\u044f \u0442\u0435\u043f\u0435\u0440\u044c ",S("star-outline"),"1000 \u0431\u0430\u043b\u043b\u043e\u0432 \u0438 45 \u043c\u0438\u043d\u0443\u0442."]}),Object(u.jsxs)("p",{children:["\u0421\u0430\u043c\u043e\u0435 \u0432\u0430\u0436\u043d\u043e\u0435 \u043f\u043e\u043c\u043d\u0438\u0442\u044c, \u0447\u0442\u043e \u043c\u0438\u043d\u0443\u0442\u044b \u043a\u043e\u043f\u044f\u0442\u0441\u044f ",Object(u.jsx)("span",{className:"tag is-warning",children:"\u043e\u0442\u0434\u0435\u043b\u044c\u043d\u043e"})," \u043e\u0442 \u0431\u0430\u043b\u043b\u043e\u0432 \u0437\u0430 \u043b\u0438\u0441\u0442\u043e\u0447\u043a\u0438, \u0430 \u0442\u0440\u0430\u0442\u0438\u0442\u044c\u0441\u044f - ",Object(u.jsx)("span",{className:"tag is-warning",children:"\u0432\u043c\u0435\u0441\u0442\u0435"}),". \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440:"]}),Object(u.jsxs)("p",{className:"example notification is-light",children:["\u041f\u043e\u0441\u043b\u0435 \u0440\u0430\u0441\u0447\u0435\u0442\u0430 \u0431\u044b\u043b\u043e ",S("star-outline"),"450 \u0431\u0430\u043b\u043b\u043e\u0432 \u0438 80 \u043c\u0438\u043d\u0443\u0442. ",S("star-outline"),"500 \u0442\u044b \u043f\u043e\u0442\u0440\u0430\u0442\u0438\u043b, \u0430 \u043e\u0441\u0442\u0430\u043b\u044c\u043d\u043e\u0435 \u0440\u0435\u0448\u0438\u043b \u043e\u0441\u0442\u0430\u0432\u0438\u0442\u044c. \u041f\u043e\u043b\u0443\u0447\u0430\u0435\u0442\u0441\u044f \u0443 \u0442\u0435\u0431\u044f \u0442\u0435\u043f\u0435\u0440\u044c ",S("star-outline"),"0 \u0431\u0430\u043b\u043b\u043e\u0432 \u0438 30 \u043c\u0438\u043d\u0443\u0442."]})]})})})}n(187);var w=n(43);function C(){var e=JSON.parse(JSON.stringify(w)).marks,t=JSON.parse(JSON.stringify(w)).sheets,n="\u2219",c=0;return Object(u.jsx)("div",{className:"Earn",children:Object(u.jsx)("div",{className:"container p-3 py-6",children:Object(u.jsxs)("div",{className:"content box",children:[Object(u.jsx)("h1",{children:"\u041a\u0430\u043a \u043f\u043e\u043b\u0443\u0447\u0430\u0442\u044c \u0431\u0430\u043b\u043b\u044b"}),Object(u.jsxs)("ul",{className:"",children:[Object(u.jsxs)("li",{children:["\u041f\u0440\u0438 \u043f\u043e\u0434\u0441\u0447\u0435\u0442\u0435 ",S("time-outline"),"\u043c\u0438\u043d\u0443\u0442, \u0441\u043d\u0430\u0447\u0430\u043b\u0430 \u0441\u043a\u043b\u0430\u0434\u044b\u0432\u0430\u044e\u0442\u0441\u044f ",S("star-outline"),'\u0431\u0430\u043b\u043b\u044b \u0437\u0430 "5", "4", "3".']},c++),Object(u.jsxs)("li",{children:['\u041a\u0430\u0436\u0434\u0430\u044f "5" \u043f\u0440\u0438\u043d\u043e\u0441\u0438\u0442 ',S("time-outline"),e.five," \u043c\u0438\u043d\u0443\u0442."]},c++),Object(u.jsxs)("li",{children:['\u041a\u0430\u0436\u0434\u0430\u044f "4" \u043f\u0440\u0438\u043d\u043e\u0441\u0438\u0442 ',S("time-outline"),e.four," \u043c\u0438\u043d\u0443\u0442."]},c++),Object(u.jsxs)("li",{children:['\u041a\u0430\u0436\u0434\u0430\u044f "3" \u0432\u044b\u0447\u0438\u0442\u0430\u0435\u0442 ',S("time-outline"),e.three," \u043c\u0438\u043d\u0443\u0442."]},c++),Object(u.jsxs)("li",{children:['\u041a\u0430\u0436\u0434\u0430\u044f "2" \u0434\u0435\u043b\u0438\u0442 ',S("time-outline"),"\u043c\u0438\u043d\u0443\u0442\u044b \u0437\u0430 \u0434\u0440\u0443\u0433\u0438\u0435 \u043e\u0446\u0435\u043d\u043a\u0438 \u043d\u0430 2."]},c++)]}),Object(u.jsx)("p",{children:'\u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u0437\u0430 \u0442\u0440\u0438 "5", \u043f\u044f\u0442\u044c "4", \u0434\u0432\u0435 "3" \u0438 \u043e\u0434\u043d\u0443 "2" \u0442\u044b \u043f\u043e\u043b\u0443\u0447\u0438\u0448\u044c:'}),Object(u.jsxs)("p",{className:"example notification is-light",children:["(",e.five," ",n," 3 ","+"," ",e.four," ",n," 5 ","\u2212"," ",e.three," ",n," 2 ) ",":"," (2 ",n," 1) = ",(3*e.five+5*e.four-2*e.three)/2," ",S("time-outline"),"\u043c\u0438\u043d\u0443\u0442"]}),Object(u.jsxs)("p",{children:["\u041f\u043e\u043c\u043d\u0438, \u0447\u0442\u043e ",S("star-outline"),"\u0431\u0430\u043b\u043b\u044b \u043c\u043e\u0436\u043d\u043e \u0437\u0430\u0440\u0430\u0431\u0430\u0442\u044b\u0432\u0430\u0442\u044c \u0438 \u0438\u043d\u0430\u0447\u0435. \u041a\u0430\u0436\u0434\u044b\u0439 \u043b\u0438\u0441\u0442\u043e\u0447\u0435\u043a \u043f\u0440\u0438\u043d\u043e\u0441\u0438\u0442 \u043d\u0435\u043c\u043d\u043e\u0433\u043e ",S("star-outline"),"\u0431\u0430\u043b\u043b\u043e\u0432 \u0437\u0430 \u043a\u0430\u0436\u0434\u044b\u0439 \u0440\u0435\u0448\u0435\u043d\u043d\u044b\u0439 \u043f\u0440\u0438\u043c\u0435\u0440 \u043d\u0430 \u044d\u0442\u043e\u043c \u043b\u0438\u0441\u0442\u043a\u0435. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 \u0446\u0435\u043d\u0430 \u043f\u0440\u0438\u043c\u0435\u0440\u0430 - ",S("star-outline"),"3, \u043d\u0430 \u043b\u0438\u0441\u0442\u043a\u0435 \u0447\u0435\u0442\u044b\u0440\u0435 \u043f\u0440\u0438\u043c\u0435\u0440\u0430, \u0437\u043d\u0430\u0447\u0438\u0442 \u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u043e \u043c\u043e\u0436\u043d\u043e \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c ",S("star-outline"),"12 \u0431\u0430\u043b\u043b\u043e\u0432."]}),Object(u.jsx)("ul",{children:t.level.map((function(e,t){return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("li",{children:["\u041f\u0440\u0438\u043c\u0435\u0440\u044b \u043d\u0430 ",Object(u.jsx)("span",{className:"tag is-task-level-".concat(t+1),style:{fontSize:"0.9rem"},children:e.colorName})," \u043b\u0438\u0441\u0442\u043a\u0435 \u0441\u0442\u043e\u044f\u0442 ",S("star-outline"),e.cost," \u0431\u0430\u043b\u043b\u043e\u0432."]},t)})}))})]})})})}var J=n(44),E=n.n(J),F="https://marks-mon.herokuapp.com",A="api/weeks/v1",B={get:function(){return E.a.get("".concat(F,"/").concat(A,"/get/"),{method:"GET",headers:{"Access-Control-Allow-Origin":"*"}})},create:function(e){return E.a.post("".concat(F,"/").concat(A,"/create/"),e,{method:"POST",headers:{"Access-Control-Allow-Origin":"*"}})}},T=function(e){var t="button "+e.addClasses;return Object(u.jsx)("button",{id:e.id,className:t,type:"button",onClick:function(){return e.callback()},children:e.content})},L=function(e){var t="button "+e.addClasses;return Object(u.jsx)(j.b,{role:"button",to:e.to,id:e.id,className:t,onClick:function(){e.callback&&e.callback()},children:e.content})},P=function(){return Object(u.jsxs)("div",{id:"bar",className:"level is-mobile mb-0",children:[Object(u.jsx)("div",{className:"level-left",children:Object(u.jsx)("div",{className:"level-item",children:Object(u.jsx)(L,{id:"go-home",to:"/marks-monitor/",callback:function(){return function(e,t){var n=document.getElementById(e);n&&n.classList.remove(t)}(b,"active")},content:S("home-outline"),addClasses:"is-secondary is-inverted"})})}),Object(u.jsx)("div",{className:"level-right is-pulled-right",children:Object(u.jsx)("div",{className:"level-item",children:Object(u.jsx)(T,{id:"NavSideBar-open",callback:function(){return d(b,"active")},content:S("menu-outline"),addClasses:"is-secondary is-inverted"})})})]})},I=function(e){var t=Object(c.useContext)(v).loaded,n=Object(c.useState)(Object(u.jsx)(p,{width:"100%",height:"100%"})),s=Object(r.a)(n,2),i=s[0],a=s[1];return Object(c.useEffect)((function(){t&&a(Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("div",{className:"subtitle",children:"\u0422\u0435\u043a\u0443\u0449\u0438\u0439 \u0431\u0430\u043b\u0430\u043d\u0441"}),Object(u.jsx)("div",{className:"counter",children:e.minutes+e.points}),Object(u.jsxs)("div",{className:"subtitle",children:[S("time-outline"),e.minutes," ",S("star-outline"),e.points]}),Object(u.jsx)("div",{className:"subtitle",children:Object(u.jsx)("a",{className:"button p-3 is-rounded is-outlined is-secondary",href:"#Stats",children:S("arrow-down-outline")})})]}))}),[t]),Object(u.jsx)("section",{className:"hero is-fullheight",children:Object(u.jsx)("div",{className:"hero-body is-flex-direction-column is-justify-content-center",children:Object(u.jsx)("div",{id:"hero-box",className:"box",children:i})})})};function D(){var e=JSON.parse(JSON.stringify(o)),t=Object(c.useState)(!1),n=Object(r.a)(t,2),s=n[0],i=n[1],a=Object(c.useState)([]),d=Object(r.a)(a,2),j=d[0],b=d[1],m=Object(c.useState)(0),O=Object(r.a)(m,2),x=O[0],f=O[1],p=Object(c.useState)(0),g=Object(r.a)(p,2),N=g[0],S=g[1];return Object(c.useEffect)((function(){B.get().then((function(e){b(e.data.payload),i(!0)})).catch((function(e){return console.error(e)}))}),[]),Object(c.useEffect)((function(){if(j.length){var e=j.length-1;f(Number(j[e].minutes.toFixed(2))),S(j[e].points)}}),[j]),Object(u.jsx)("div",{className:"App",children:Object(u.jsxs)(v.Provider,{value:{data:j,loaded:s},children:[Object(u.jsx)(P,{}),Object(u.jsx)(h,{}),Object(u.jsx)(l.c,{children:e.list.map((function(e,t){var n;switch(e.name){case"main":n=Object(u.jsxs)("div",{id:"wrapper",children:[Object(u.jsx)(I,{minutes:x,points:N}),Object(u.jsx)("section",{children:Object(u.jsx)(k,{})})]});break;case"earn":n=Object(u.jsx)(C,{});break;case"spend":n=Object(u.jsx)(y,{});break;case"stats":n=Object(u.jsx)(k,{})}return Object(u.jsx)(l.a,{path:"/marks-monitor".concat(e.link),children:Object(u.jsx)(u.Fragment,{children:n})},t)}))})]})})}var M=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,206)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,i=t.getLCP,a=t.getTTFB;n(e),c(e),s(e),i(e),a(e)}))};a.a.render(Object(u.jsx)(s.a.StrictMode,{children:Object(u.jsx)(j.a,{children:Object(u.jsx)(D,{})})}),document.getElementById("root")),M()},26:function(e){e.exports=JSON.parse('{"list":[{"name":"stats","title":"\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043a\u0430","link":"/stats"},{"name":"earn","title":"\u041a\u0430\u043a \u043f\u043e\u043b\u0443\u0447\u0430\u0442\u044c \u0431\u0430\u043b\u043b\u044b","link":"/earn"},{"name":"spend","title":"\u041a\u0430\u043a \u0442\u0440\u0430\u0442\u0438\u0442\u044c \u0431\u0430\u043b\u043b\u044b","link":"/spend"},{"name":"main","title":"\u041d\u0430 \u0433\u043b\u0430\u0432\u043d\u0443\u044e","link":"/"}]}')},43:function(e){e.exports=JSON.parse('{"marks":{"five":25,"four":10,"three":15},"sheets":{"level":[{"colorName":"\u0437\u0435\u043b\u0435\u043d\u043e\u043c","cost":6},{"colorName":"\u043f\u0435\u0440\u0441\u0438\u043a\u043e\u0432\u043e\u043c","cost":8},{"colorName":"\u0440\u043e\u0437\u043e\u0432\u043e\u043c","cost":16},{"colorName":"\u0436\u0435\u043b\u0442\u043e\u043c","cost":18},{"colorName":"\u043e\u0440\u0430\u043d\u0436\u0435\u0432\u043e\u043c","cost":70}]}}')},61:function(e,t,n){},80:function(e,t,n){},81:function(e,t,n){},82:function(e,t,n){},88:function(e,t,n){}},[[205,1,2]]]);
//# sourceMappingURL=main.fc01bc8f.chunk.js.map