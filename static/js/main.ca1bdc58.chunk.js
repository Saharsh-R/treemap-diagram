(this["webpackJsonptreemap-diagram"]=this["webpackJsonptreemap-diagram"]||[]).push([[0],{196:function(t,e,a){"use strict";a.r(e);var n=a(0),r=a(16),c=a.n(r),i=a(223),s=a(222),o=a(14),d=a(197),l=a(225),u=a(218),j=a(10),h=a(89),f=a(219),p=a(88),b=a(200),g=a(221),m=a(220),O=a(4);function y(){return Object(O.jsxs)(d.a,{variant:"body2",color:"textSecondary",align:"center",children:["Copyright \xa9 ",Object(O.jsx)(u.a,{target:"_blank",href:"https://saharsh-r.github.io/",children:"Saharsh Rathi"})," at ",(new Date).toUTCString(),"."]})}function v(t){var e=t.id,a=(t.key,t.data),r=t.width,c=void 0===r?1200:r,i=t.height,s=void 0===i?570:i;return Object(n.useEffect)((function(){var t=function(t){return j.g().size([c-130,s]).padding(1)(j.a(t).eachBefore((function(t){t.data.id=(t.parent?t.parent.data.id+".":"")+t.data.name})).sum((function(t){return t.value})).sort((function(t,e){return e.value-t.value})))}(a),e=j.c,n=j.b(e),r=j.d("#tree-map-diagram"),i=t.leaves().map((function(t){return t.data.category})),o=[],d=new Set;i.forEach((function(t){d.has(t)||(o.push(t),d.add(t))}));var l=o.map((function(t){return n(t)})),u=j.b().domain(o).range(l);r.append("g").attr("id","legend").attr("class","legendOrdinal").attr("transform","translate(".concat(c-130+20,",20)"));var f=Object(p.a)().shape("rect",j.e().type(j.f).size(150)()).shapePadding(10).scale(u);r.select(".legendOrdinal").call(f).selectAll("rect").attr("class","legend-item");var b=Object(h.a)().attr("class","d3-tip").attr("id","tooltip").offset([-10,0]).html((function(t){return t})),g=r.selectAll("whythisnotg").data(t.leaves()).enter().append("g").attr("class","group").attr("transform",(function(t){return"translate(".concat(t.x0,",").concat(t.y0,")")}));g.append("rect").attr("id",(function(t){return t.data.id})).attr("class","tile").attr("height",(function(t){return t.y1-t.y0})).attr("width",(function(t){return t.x1-t.x0})).attr("data-name",(function(t){return t.data.name})).attr("data-category",(function(t){return t.data.category})).attr("data-value",(function(t){return t.value})).attr("fill",(function(t){return n(t.data.category)})).on("mouseover",(function(t,e){b.attr("data-value",e.value);var a="<span style='color:#FE621D'>Name: </span>".concat(e.data.name,"</br>")+"<span style='color:#FE621D'>Category: </span>".concat(e.data.category,"</br>")+"<span style='color:#FE621D'>Value: </span>".concat(e.value);b.show(a,this),j.d(t.currentTarget).style("fill","white")})).on("mouseout",(function(t,e){j.d(t.currentTarget).style("fill",n(e.data.category)),b.hide(this)})),g.append("text").selectAll("fgsdfg").attr("class","tile-text").data((function(t){return t.data.name.split(/(?=[A-Z][^A-Z])/g).concat(t.value)})).enter().append("tspan").attr("x",2).attr("y",(function(t,e){return 8+8*e})).text((function(t){return t})).attr("class","tile-text"),r.call(b)}),[]),Object(O.jsx)("div",{id:e,style:{position:"relative",display:"flex",alignItems:"center",justifyContent:"center"},children:Object(O.jsx)("svg",{id:"tree-map-diagram",width:c,height:s,children:" "})})}function x(){var t=Object(n.useState)([]),e=Object(o.a)(t,2),a=(e[0],e[1]),r=Object(n.useState)([]),c=Object(o.a)(r,2),i=c[0],s=c[1],u=Object(n.useState)("Video Game Sales"),j=Object(o.a)(u,2),h=j[0],p=j[1],x=Object(n.useState)(""),S=Object(o.a)(x,2),k=S[0],w=S[1],C=Object(n.useState)(0),A=Object(o.a)(C,2),E=A[0],_=A[1],D=Object(n.useState)(!1),T=Object(o.a)(D,2),V=T[0],z=T[1];return Object(n.useEffect)((function(){""==k?fetch("https://cdn.freecodecamp.org/testable-projects-fcc/data/tree_map/video-game-sales-data.json").then((function(t){return t.json()})).then((function(t){a(t),s(t),_(E+1),z(!1)})):fetch(k).then((function(t){return t.json()})).then((function(t){s(t),_(E+1),z(!1)}))}),[k]),Object(O.jsx)(f.a,{container:!0,spacing:5,alignItems:"center",justify:"center",direction:"column",style:{backgroundImage:"radial-gradient( grey, #414141, #000000)"},children:Object(O.jsx)(f.a,{item:!0,children:Object(O.jsxs)(l.a,{boxShadow:24,p:2,style:{backgroundColor:"white"},borderRadius:40,children:[Object(O.jsx)(d.a,{variant:"h4",component:"h1",align:"center",id:"title",gutterBottom:!0,children:h}),Object(O.jsxs)(d.a,{variant:"body1",component:"h2",id:"description",align:"center",gutterBottom:!0,children:["Here is the Treemap about the ",h," grouped by their respective categories."]}),0==E||V?Object(O.jsx)(f.a,{container:!0,justify:"center",children:Object(O.jsx)(m.a,{})}):Object(O.jsx)(v,{id:"barchart",data:i},E),Object(O.jsx)(l.a,{m:1,children:Object(O.jsx)(f.a,{container:!0,justify:"center",children:Object(O.jsxs)(g.a,{size:"large",variant:"contained","aria-label":"contained primary button group",children:[Object(O.jsx)(b.a,{onClick:function(){z(!0),p("Kickstarter Pledges"),w("https://cdn.freecodecamp.org/testable-projects-fcc/data/tree_map/kickstarter-funding-data.json")},children:"Kickstarter Pledges"}),Object(O.jsx)(b.a,{onClick:function(){z(!0),p("Movie Sales"),w("https://cdn.freecodecamp.org/testable-projects-fcc/data/tree_map/movie-data.json")},children:"Movie Sales"}),Object(O.jsx)(b.a,{onClick:function(){z(!0),p("Video Game Sales"),w("https://cdn.freecodecamp.org/testable-projects-fcc/data/tree_map/video-game-sales-data.json")},children:"Video Game Sales"})]})})}),Object(O.jsx)(y,{})]})})})}var S=a(40),k=a(90),w=Object(k.a)({palette:{primary:{main:"#556cd6"},secondary:{main:"#19857b"},error:{main:S.a.A400},background:{default:"#fff"}}});c.a.render(Object(O.jsxs)(s.a,{theme:w,children:[Object(O.jsx)(i.a,{}),Object(O.jsx)(x,{})]}),document.querySelector("#root"))}},[[196,1,2]]]);
//# sourceMappingURL=main.ca1bdc58.chunk.js.map