(this["webpackJsonpmarks-monitor"]=this["webpackJsonpmarks-monitor"]||[]).push([[0],{176:function(e,t,c){},177:function(e,t,c){},178:function(e,t,c){},196:function(e,t,c){"use strict";c.r(t);var n=c(1),i=c.n(n),s=c(66),a=c.n(s),r=(c(73),c(10)),l=(c(74),c(2)),o=(c(75),c(23)),j=function(e,t){var c=document.getElementById(e);c&&c.classList.toggle(t)},d=c(12),u=c(0),b=function(){var e=JSON.parse(JSON.stringify(o)),t="NavSideBar";return Object(u.jsx)("div",{id:t,className:t,children:Object(u.jsx)("div",{className:"box nontification is-light py-6",children:e.list.map((function(e,c){return Object(u.jsx)("div",{children:Object(u.jsx)(d.b,{to:"/marks-monitor".concat(e.link),id:e.name,className:"LocalTitleLink",style:{order:c},onClick:function(){return j(t,"active")},children:e.title},c)},c)}))})})},h=(c(81),c(68)),O=function(e){var t={label:"\u041c\u0438\u043d\u0443\u0442\u044b",data:e.data.map((function(e){return Number(e.minutes.toFixed(2))})),backgroundColor:e.data.map((function(e){return"#1cff1c88"}))},c={label:"\u0411\u0430\u043b\u043b\u044b",data:e.data.map((function(e){return e.points})),backgroundColor:e.data.map((function(e){return"#00c3ff88"}))},n={labels:e.data.map((function(e){return function(e){var t=new Date(e).toUTCString().split(" ");switch(t[2]){case"Jan":return"".concat(t[1]," \u042f\u043d\u0432 ").concat(t[3]);case"Feb":return"".concat(t[1]," \u0424\u0435\u0432 ").concat(t[3]);case"Mar":return"".concat(t[1]," \u041c\u0430\u0440 ").concat(t[3]);case"Apr":return"".concat(t[1]," \u0410\u043f\u0440 ").concat(t[3]);case"May":return"".concat(t[1]," \u041c\u0430\u044f ").concat(t[3]);case"Jun":return"".concat(t[1]," \u0418\u044e\u043d ").concat(t[3]);case"Jul":return"".concat(t[1]," \u0418\u044e\u043b ").concat(t[3]);case"Aug":return"".concat(t[1]," \u0410\u0432\u0433 ").concat(t[3]);case"Sep":return"".concat(t[1]," \u0421\u0435\u043d ").concat(t[3]);case"Oct":return"".concat(t[1]," \u041e\u043a\u0442 ").concat(t[3]);case"Nov":return"".concat(t[1]," \u041d\u043e\u044f ").concat(t[3]);case"Dec":return"".concat(t[1]," \u0414\u0435\u043a ").concat(t[3])}}(e.date)})),datasets:[t,c]};return Object(u.jsx)("div",{className:"continer",children:Object(u.jsx)(h.Bar,{data:n,options:{scales:{yAxes:[{ticks:{beginAtZero:!0}}]},tooltips:{enabled:!0},responsive:!0,maintainAspectRatio:!1,legend:{labels:{fontSize:20}},devicePixelRatio:4},height:.4*window.innerHeight})})},m=Object(n.createContext)({data:[],loaded:!1}),x=(c(176),function(e){return Object(u.jsx)("div",{children:Object(u.jsx)("div",{className:"preloader",style:{width:e.width,height:e.height},children:Object(u.jsx)("div",{className:"loader"})})})}),f=function(){var e="Stats",t=Object(n.useContext)(m),c=Object(n.useState)(Object(u.jsx)(x,{width:"100%",height:"100%"})),i=Object(r.a)(c,2),s=i[0],a=i[1];return Object(n.useEffect)((function(){t.loaded&&a(Object(u.jsx)(O,{data:t.data}))}),[t]),Object(u.jsx)("div",{className:e,id:e,children:Object(u.jsx)("div",{className:"container p-3",children:Object(u.jsxs)("div",{className:"content box",children:[Object(u.jsx)("h1",{children:"\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043a\u0430"}),s]})})})},p=(c(177),c(57),function(e){return i.a.createElement("ion-icon",{name:e})}),v=function(){return Object(u.jsx)("div",{className:"Spend",children:Object(u.jsx)("div",{className:"container p-3",children:Object(u.jsxs)("div",{className:"content box",children:[Object(u.jsx)("h1",{children:"\u041a\u0430\u043a \u0442\u0440\u0430\u0442\u0438\u0442\u044c \u0431\u0430\u043b\u043b\u044b"}),Object(u.jsx)("p",{children:"\u0414\u043b\u044f \u043d\u0430\u0447\u0430\u043b\u0430 \u043e\u0431\u0433\u043e\u0432\u043e\u0440\u0438\u043c \u043e\u0441\u043d\u043e\u0432\u043d\u044b\u0435 \u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u0438\u044f."}),Object(u.jsxs)("ul",{children:[Object(u.jsxs)("li",{children:[p("time-outline"),"\u041c\u0438\u043d\u0443\u0442\u044b \u043c\u043e\u0433\u0443\u0442 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c\u0441\u044f \u043a\u0430\u043a ",p("star-outline"),"\u0431\u0430\u043b\u043b\u044b. ",p("time-outline"),"1 \u043c\u0438\u043d\u0443\u0442\u0430 = ",p("star-outline"),"1 \u0431\u0430\u043b\u043b."]}),Object(u.jsxs)("li",{children:[p("star-outline"),"\u0411\u0430\u043b\u043b\u044b \u043d\u0435\u043b\u044c\u0437\u044f \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u043a\u0430\u043a ",p("time-outline"),"\u043c\u0438\u043d\u0443\u0442\u044b."]}),Object(u.jsxs)("li",{children:["\u0417\u0430\u0440\u0430\u0431\u043e\u0442\u0430\u043d\u043d\u044b\u0435 ",p("star-outline"),'\u0431\u0430\u043b\u043b\u044b \u043c\u043e\u0436\u043d\u043e \u043f\u043e\u0442\u0440\u0430\u0442\u0438\u0442\u044c \u043d\u0430 "\u043d\u0438\u0448\u0442\u044f\u043a\u0438" (\u0441\u043f\u0438\u0441\u043e\u043a "\u043d\u0438\u0448\u0442\u044f\u043a\u043e\u0432" \u0435\u0449\u0435 \u043d\u0435 \u0433\u043e\u0442\u043e\u0432).']}),Object(u.jsxs)("li",{children:[p("star-outline"),"\u0411\u0430\u043b\u043b\u044b \u043d\u0430 \u043d\u0438\u0448\u0442\u044f\u043a\u0438 \u043c\u043e\u0436\u043d\u043e \u0442\u0440\u0430\u0442\u0438\u0442\u044c \u0432 \u043b\u044e\u0431\u043e\u0439 \u0434\u0435\u043d\u044c \u043d\u0435\u0434\u0435\u043b\u0438."]})]}),Object(u.jsx)("p",{children:"\u0425\u043e\u0440\u043e\u0448\u043e, \u0441 \u044d\u0442\u0438\u043c \u0440\u0430\u0437\u043e\u0431\u0440\u0430\u043b\u0438\u0441\u044c. \u041d\u0443 \u0430 \u0442\u0435\u043f\u0435\u0440\u044c \u043f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435 \u043e \u0442\u043e\u043c, \u043a\u0430\u043a \u0432\u044b\u0441\u0447\u0438\u0442\u044b\u0432\u0430\u044e\u0442\u0441\u044f \u0442\u0440\u0430\u0442\u044b."}),Object(u.jsxs)("ul",{children:[Object(u.jsxs)("li",{children:[p("time-outline"),"\u041c\u0438\u043d\u0443\u0442\u044b \u043c\u043e\u0436\u043d\u043e \u043f\u043e\u0442\u0440\u0430\u0442\u0438\u0442\u044c \u043d\u0430 \u0432\u0440\u0435\u043c\u044f \u0438\u0433\u0440\u044b \u0432 \u043a\u043e\u043c\u043f\u044c\u044e\u0442\u0435\u0440."]}),Object(u.jsxs)("li",{children:["\u0415\u0441\u043b\u0438 ",p("star-outline"),"\u0431\u0430\u043b\u043b\u043e\u0432 \u0437\u0430 \u043b\u0438\u0441\u0442\u043e\u0447\u043a\u0438 \u0445\u0432\u0430\u0442\u0430\u0435\u0442, \u0442\u043e \u043d\u0438\u0448\u0442\u044f\u043a\u0438 \u043f\u043e\u043a\u0443\u043f\u0430\u044e\u0442\u0441\u044f \u043d\u0430 \u043d\u0438\u0445."]}),Object(u.jsxs)("li",{children:["\u0415\u0441\u043b\u0438 ",p("star-outline"),"\u0431\u0430\u043b\u043b\u043e\u0432 \u0437\u0430 \u043b\u0438\u0441\u0442\u043e\u0447\u043a\u0438 \u043d\u0430 \u0445\u0432\u0430\u0442\u0430\u0435\u0442, \u0442\u043e \u043c\u043e\u0436\u043d\u043e \u0432\u044b\u0447\u0435\u0441\u0442\u044c \u043d\u0435\u0434\u043e\u0441\u0442\u0430\u044e\u0449\u0438\u0435 ",p("star-outline"),"\u0431\u0430\u043b\u043b\u044b \u0438\u0437 ",p("time-outline"),"\u043c\u0438\u043d\u0443\u0442."]}),Object(u.jsxs)("li",{children:["\u0415\u0441\u043b\u0438 \u0438 \u0442\u0430\u043a ",p("star-outline"),"\u0431\u0430\u043b\u043b\u043e\u0432 \u043d\u0435 \u0445\u0432\u0430\u0442\u0438\u043b\u043e, \u0442\u043e, \u0443\u0432\u044b, \u043d\u0438\u043a\u0430\u043a\u0438\u0445 \u043d\u0438\u0448\u0442\u044f\u043a\u043e\u0432."]})]}),Object(u.jsxs)("p",{children:["\u041d\u0435\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u043d\u044b\u0435 ",p("star-outline"),"\u0431\u0430\u043b\u043b\u044b \u043c\u043e\u0436\u043d\u043e \u043a\u043e\u043f\u0438\u0442\u044c, \u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440:"]}),Object(u.jsxs)("p",{className:"example notification is-light",children:["\u041f\u043e\u0441\u043b\u0435 \u0440\u0430\u0441\u0447\u0435\u0442\u0430 \u0431\u044b\u043b\u043e ",p("star-outline"),"2000 \u0431\u0430\u043b\u043b\u043e\u0432 \u0438 45 \u043c\u0438\u043d\u0443\u0442. ",p("star-outline"),"1000 \u0442\u044b \u043f\u043e\u0442\u0440\u0430\u0442\u0438\u043b, \u0430 \u043e\u0441\u0442\u0430\u043b\u044c\u043d\u043e\u0435 \u0440\u0435\u0448\u0438\u043b \u043e\u0441\u0442\u0430\u0432\u0438\u0442\u044c. \u041f\u043e\u043b\u0443\u0447\u0430\u0435\u0442\u0441\u044f \u0443 \u0442\u0435\u0431\u044f \u0442\u0435\u043f\u0435\u0440\u044c ",p("star-outline"),"1000 \u0431\u0430\u043b\u043b\u043e\u0432 \u0438 45 \u043c\u0438\u043d\u0443\u0442."]}),Object(u.jsxs)("p",{children:["\u0421\u0430\u043c\u043e\u0435 \u0432\u0430\u0436\u043d\u043e\u0435 \u043f\u043e\u043c\u043d\u0438\u0442\u044c, \u0447\u0442\u043e \u043c\u0438\u043d\u0443\u0442\u044b \u043a\u043e\u043f\u044f\u0442\u0441\u044f ",Object(u.jsx)("span",{className:"tag is-warning",children:"\u043e\u0442\u0434\u0435\u043b\u044c\u043d\u043e"})," \u043e\u0442 \u0431\u0430\u043b\u043b\u043e\u0432 \u0437\u0430 \u043b\u0438\u0441\u0442\u043e\u0447\u043a\u0438, \u0430 \u0442\u0440\u0430\u0442\u0438\u0442\u044c\u0441\u044f - ",Object(u.jsx)("span",{className:"tag is-warning",children:"\u0432\u043c\u0435\u0441\u0442\u0435"}),". \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440:"]}),Object(u.jsxs)("p",{className:"example notification is-light",children:["\u041f\u043e\u0441\u043b\u0435 \u0440\u0430\u0441\u0447\u0435\u0442\u0430 \u0431\u044b\u043b\u043e ",p("star-outline"),"450 \u0431\u0430\u043b\u043b\u043e\u0432 \u0438 80 \u043c\u0438\u043d\u0443\u0442. ",p("star-outline"),"500 \u0442\u044b \u043f\u043e\u0442\u0440\u0430\u0442\u0438\u043b, \u0430 \u043e\u0441\u0442\u0430\u043b\u044c\u043d\u043e\u0435 \u0440\u0435\u0448\u0438\u043b \u043e\u0441\u0442\u0430\u0432\u0438\u0442\u044c. \u041f\u043e\u043b\u0443\u0447\u0430\u0435\u0442\u0441\u044f \u0443 \u0442\u0435\u0431\u044f \u0442\u0435\u043f\u0435\u0440\u044c ",p("star-outline"),"0 \u0431\u0430\u043b\u043b\u043e\u0432 \u0438 30 \u043c\u0438\u043d\u0443\u0442."]})]})})})},N=(c(178),c(37)),g=function(){var e=JSON.parse(JSON.stringify(N)).marks,t=JSON.parse(JSON.stringify(N)).sheets,c="\u2219",n=0;return Object(u.jsx)("div",{className:"Earn",children:Object(u.jsx)("div",{className:"container p-3",children:Object(u.jsxs)("div",{className:"content box",children:[Object(u.jsx)("h1",{children:"\u041a\u0430\u043a \u043f\u043e\u043b\u0443\u0447\u0430\u0442\u044c \u0431\u0430\u043b\u043b\u044b"}),Object(u.jsxs)("ul",{className:"",children:[Object(u.jsxs)("li",{children:["\u041f\u0440\u0438 \u043f\u043e\u0434\u0441\u0447\u0435\u0442\u0435 ",p("time-outline"),"\u043c\u0438\u043d\u0443\u0442, \u0441\u043d\u0430\u0447\u0430\u043b\u0430 \u0441\u043a\u043b\u0430\u0434\u044b\u0432\u0430\u044e\u0442\u0441\u044f ",p("star-outline"),'\u0431\u0430\u043b\u043b\u044b \u0437\u0430 "5", "4", "3".']},n++),Object(u.jsxs)("li",{children:['\u041a\u0430\u0436\u0434\u0430\u044f "5" \u043f\u0440\u0438\u043d\u043e\u0441\u0438\u0442 ',p("time-outline"),e.five," \u043c\u0438\u043d\u0443\u0442."]},n++),Object(u.jsxs)("li",{children:['\u041a\u0430\u0436\u0434\u0430\u044f "4" \u043f\u0440\u0438\u043d\u043e\u0441\u0438\u0442 ',p("time-outline"),e.four," \u043c\u0438\u043d\u0443\u0442."]},n++),Object(u.jsxs)("li",{children:['\u041a\u0430\u0436\u0434\u0430\u044f "3" \u0432\u044b\u0447\u0438\u0442\u0430\u0435\u0442 ',p("time-outline"),e.three," \u043c\u0438\u043d\u0443\u0442."]},n++),Object(u.jsxs)("li",{children:['\u041a\u0430\u0436\u0434\u0430\u044f "2" \u0434\u0435\u043b\u0438\u0442 ',p("time-outline"),"\u043c\u0438\u043d\u0443\u0442\u044b \u0437\u0430 \u0434\u0440\u0443\u0433\u0438\u0435 \u043e\u0446\u0435\u043d\u043a\u0438 \u043d\u0430 2."]},n++)]}),Object(u.jsx)("p",{children:'\u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u0437\u0430 \u0442\u0440\u0438 "5", \u043f\u044f\u0442\u044c "4", \u0434\u0432\u0435 "3" \u0438 \u043e\u0434\u043d\u0443 "2" \u0442\u044b \u043f\u043e\u043b\u0443\u0447\u0438\u0448\u044c:'}),Object(u.jsxs)("p",{className:"example notification is-light",children:["(",e.five," ",c," 3 ","+"," ",e.four," ",c," 5 ","\u2212"," ",e.three," ",c," 2 ) ",":"," (2 ",c," 1) = ",(3*e.five+5*e.four-2*e.three)/2," ",p("time-outline"),"\u043c\u0438\u043d\u0443\u0442"]}),Object(u.jsxs)("p",{children:["\u041f\u043e\u043c\u043d\u0438, \u0447\u0442\u043e ",p("star-outline"),"\u0431\u0430\u043b\u043b\u044b \u043c\u043e\u0436\u043d\u043e \u0437\u0430\u0440\u0430\u0431\u0430\u0442\u044b\u0432\u0430\u0442\u044c \u0438 \u0438\u043d\u0430\u0447\u0435. \u041a\u0430\u0436\u0434\u044b\u0439 \u043b\u0438\u0441\u0442\u043e\u0447\u0435\u043a \u043f\u0440\u0438\u043d\u043e\u0441\u0438\u0442 \u043d\u0435\u043c\u043d\u043e\u0433\u043e ",p("star-outline"),"\u0431\u0430\u043b\u043b\u043e\u0432 \u0437\u0430 \u043a\u0430\u0436\u0434\u044b\u0439 \u0440\u0435\u0448\u0435\u043d\u043d\u044b\u0439 \u043f\u0440\u0438\u043c\u0435\u0440 \u043d\u0430 \u044d\u0442\u043e\u043c \u043b\u0438\u0441\u0442\u043a\u0435. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 \u0446\u0435\u043d\u0430 \u043f\u0440\u0438\u043c\u0435\u0440\u0430 - ",p("star-outline"),"3, \u043d\u0430 \u043b\u0438\u0441\u0442\u043a\u0435 \u0447\u0435\u0442\u044b\u0440\u0435 \u043f\u0440\u0438\u043c\u0435\u0440\u0430, \u0437\u043d\u0430\u0447\u0438\u0442 \u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u043e \u043c\u043e\u0436\u043d\u043e \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c ",p("star-outline"),"12 \u0431\u0430\u043b\u043b\u043e\u0432."]}),Object(u.jsx)("ul",{children:t.level.map((function(e,t){return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("li",{children:["\u041f\u0440\u0438\u043c\u0435\u0440\u044b \u043d\u0430 ",Object(u.jsx)("span",{className:"tag is-task-level-".concat(t+1),style:{fontSize:"0.9rem"},children:e.colorName})," \u043b\u0438\u0441\u0442\u043a\u0435 \u0441\u0442\u043e\u044f\u0442 ",p("star-outline"),e.cost," \u0431\u0430\u043b\u043b\u043e\u0432."]},t)})}))})]})})})},k=c(38),S=c.n(k),y="https://marks-mon.herokuapp.com",w="api/weeks/v1",C={get:function(){return S.a.get("".concat(y,"/").concat(w,"/get/"),{method:"GET",headers:{"Access-Control-Allow-Origin":"*"}})},create:function(e){return S.a.post("".concat(y,"/").concat(w,"/create/"),e,{method:"POST",headers:{"Access-Control-Allow-Origin":"*"}})}},J=function(e){var t="button "+e.addClasses;return Object(u.jsx)("button",{id:e.id,className:t,type:"button",onClick:function(){return e.callback()},children:e.content})},A=function(e){var t="button "+e.addClasses;return Object(u.jsx)(d.b,{role:"button",to:e.to,id:e.id,className:t,onClick:function(){e.callback&&e.callback()},children:e.content})},E=function(){return Object(u.jsxs)("div",{id:"bar",className:"level is-mobile mb-0",children:[Object(u.jsx)("div",{className:"level-left",children:Object(u.jsx)("div",{className:"level-item",children:Object(u.jsx)(A,{id:"go-home",to:"/marks-monitor/",callback:function(){return function(e,t){var c=document.getElementById(e);c&&c.classList.remove(t)}("NavSideBar","active")},content:p("home-outline"),addClasses:"is-secondary is-inverted"})})}),Object(u.jsx)("div",{className:"level-right is-pulled-right",children:Object(u.jsx)("div",{className:"level-item",children:Object(u.jsx)(J,{id:"NavSideBar-open",callback:function(){return j("NavSideBar","active")},content:p("menu-outline"),addClasses:"is-secondary is-inverted"})})})]})},F=function(e){var t=Object(n.useContext)(m).loaded,c=Object(n.useState)(Object(u.jsx)(x,{width:"100%",height:"100%"})),i=Object(r.a)(c,2),s=i[0],a=i[1];return Object(n.useEffect)((function(){t&&a(Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("div",{className:"subtitle",children:"\u0422\u0435\u043a\u0443\u0449\u0438\u0439 \u0431\u0430\u043b\u0430\u043d\u0441"}),Object(u.jsx)("div",{className:"counter",children:e.minutes+e.points}),Object(u.jsxs)("div",{className:"subtitle",children:[p("time-outline"),e.minutes," ",p("star-outline"),e.points]}),Object(u.jsx)("div",{className:"subtitle",children:Object(u.jsx)("a",{className:"button p-3 is-rounded is-outlined is-primary",href:"#Stats",children:p("arrow-down-outline")})})]}))}),[t]),Object(u.jsx)("section",{className:"hero is-fullheight",children:Object(u.jsx)("div",{className:"hero-body is-flex-direction-column is-justify-content-center",children:Object(u.jsx)("div",{id:"hero-box",className:"box",children:s})})})};function B(){var e=JSON.parse(JSON.stringify(o)),t=Object(n.useState)(!1),c=Object(r.a)(t,2),i=c[0],s=c[1],a=Object(n.useState)([]),j=Object(r.a)(a,2),d=j[0],h=j[1],O=Object(n.useState)(0),x=Object(r.a)(O,2),p=x[0],N=x[1],k=Object(n.useState)(0),S=Object(r.a)(k,2),y=S[0],w=S[1];return Object(n.useEffect)((function(){C.get().then((function(e){h(e.data.payload),s(!0)})).catch((function(e){return console.error(e)}))}),[]),Object(n.useEffect)((function(){if(d.length){var e=d.length-1;N(Number(d[e].minutes.toFixed(2))),w(d[e].points)}}),[d]),Object(u.jsx)("div",{className:"App",children:Object(u.jsxs)(m.Provider,{value:{data:d,loaded:i},children:[Object(u.jsx)(E,{}),Object(u.jsx)(b,{}),Object(u.jsx)(l.c,{children:e.list.map((function(e,t){var c;switch(e.name){case"main":c=Object(u.jsxs)("div",{id:"wrapper",children:[Object(u.jsx)(F,{minutes:p,points:y}),Object(u.jsx)("section",{children:Object(u.jsx)(f,{})})]});break;case"earn":c=Object(u.jsx)(g,{});break;case"spend":c=Object(u.jsx)(v,{});break;case"stats":c=Object(u.jsx)(f,{})}return Object(u.jsx)(l.a,{path:"/marks-monitor".concat(e.link),children:Object(u.jsx)(u.Fragment,{children:c})},t)}))})]})})}var L=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,197)).then((function(t){var c=t.getCLS,n=t.getFID,i=t.getFCP,s=t.getLCP,a=t.getTTFB;c(e),n(e),i(e),s(e),a(e)}))};a.a.render(Object(u.jsx)(i.a.StrictMode,{children:Object(u.jsx)(d.a,{children:Object(u.jsx)(B,{})})}),document.getElementById("root")),L()},23:function(e){e.exports=JSON.parse('{"list":[{"name":"stats","title":"\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043a\u0430","link":"/stats"},{"name":"earn","title":"\u041a\u0430\u043a \u043f\u043e\u043b\u0443\u0447\u0430\u0442\u044c \u0431\u0430\u043b\u043b\u044b","link":"/earn"},{"name":"spend","title":"\u041a\u0430\u043a \u0442\u0440\u0430\u0442\u0438\u0442\u044c \u0431\u0430\u043b\u043b\u044b","link":"/spend"},{"name":"main","title":"\u041d\u0430 \u0433\u043b\u0430\u0432\u043d\u0443\u044e","link":"/"}]}')},37:function(e){e.exports=JSON.parse('{"marks":{"five":25,"four":10,"three":15},"sheets":{"level":[{"colorName":"\u0437\u0435\u043b\u0435\u043d\u043e\u043c","cost":6},{"colorName":"\u043f\u0435\u0440\u0441\u0438\u043a\u043e\u0432\u043e\u043c","cost":8},{"colorName":"\u0440\u043e\u0437\u043e\u0432\u043e\u043c","cost":16},{"colorName":"\u0436\u0435\u043b\u0442\u043e\u043c","cost":18},{"colorName":"\u043e\u0440\u0430\u043d\u0436\u0435\u0432\u043e\u043c","cost":70}]}}')},57:function(e,t,c){},73:function(e,t,c){},74:function(e,t,c){},75:function(e,t,c){},81:function(e,t,c){}},[[196,1,2]]]);
//# sourceMappingURL=main.91fcf57c.chunk.js.map