(this["webpackJsonplive-from-eci"]=this["webpackJsonplive-from-eci"]||[]).push([[0],{402:function(t,e,n){},404:function(t,e,n){},552:function(t,e,n){},555:function(t,e,n){"use strict";n.r(e);var c=n(1),a=n.n(c),r=n(52),s=n.n(r),i=(n(402),n(94)),o=n(566),u=(n(403),n(404),n(563)),l=n(564),d=n(567),j=n(366),f=n.n(j),b=n(18),h={cursor:"pointer"};function O(t){var e=t.states,n=t.candidates,a=t.constituencies,r=Object(c.useState)({states:[],constituencies:[],candidates:[]}),s=Object(i.a)(r,2),o=s[0],j=s[1],O=Object(c.useState)(""),x=Object(i.a)(O,2),p=x[0],m=x[1];Object(c.useEffect)((function(){j(p?{states:e.filter((function(t){return t.state.includes(p)})),candidates:n.filter((function(t){return t.candidate.includes(p)})),constituencies:a.filter((function(t){return t.constituency.includes(p)}))}:{states:e,candidates:n,constituencies:a})}),[p,e,a,n]);var g=function(t){var e=a.filter((function(e){return e.stateCode===t.code})).length,c=n.filter((function(e){return e.stateCode===t.code})).length;return"".concat(e," constituencies, ").concat(c," candidates")},y=function(t){var c=n.filter((function(e){return e.constituencyCode===t.code})).length,a=e.find((function(e){return e.code===t.stateCode}));return"".concat(c," candidates, ").concat(a.state)},v=function(t){var e=a.find((function(e){return e.code===t.constituencyCode}));return e?"".concat(t.party," contesting from ").concat(e.constituency):(console.warn("Unknown constituency:",{candidate:t}),"".concat(t.party))};return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(u.a,{justify:"center",children:Object(b.jsx)(l.a,{xs:24,md:8,children:Object(b.jsx)(f.a,{placeholder:"input search text",onSearch:m,enterButton:!0})})}),Object(b.jsxs)(u.a,{gutter:{xs:8,sm:16,md:24,lg:32},children:[Object(b.jsx)(l.a,{xs:24,md:8,children:Object(b.jsx)(d.b,{itemLayout:"horizontal",dataSource:o.states.slice(0,5),renderItem:function(t){return Object(b.jsx)(d.b.Item,{onClick:function(){console.log("Go to state page")},style:h,children:Object(b.jsx)(d.b.Item.Meta,{description:g(t),title:t.state})})}})}),Object(b.jsx)(l.a,{xs:24,md:8,children:Object(b.jsx)(d.b,{itemLayout:"horizontal",dataSource:o.constituencies.slice(0,5),renderItem:function(t){return Object(b.jsx)(d.b.Item,{children:Object(b.jsx)(d.b.Item.Meta,{description:y(t),title:t.constituency})})}})}),Object(b.jsx)(l.a,{xs:24,md:8,children:Object(b.jsx)(d.b,{itemLayout:"horizontal",dataSource:o.candidates.slice(0,5),renderItem:function(t){return Object(b.jsx)(d.b.Item,{children:Object(b.jsx)(d.b.Item.Meta,{description:v(t),title:t.candidate})})}})})]})]})}var x=n(570),p={float:"left",width:"120px",height:"31px",margin:"16px 24px 16px 0",fontWeight:"bold",color:"white",lineHeight:"31px"};function m(t){var e=t.page,n=t.setPage;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("div",{style:p,children:"Live from ECI"}),Object(b.jsxs)(x.a,{theme:"dark",mode:"inline",defaultSelectedKeys:[e],onClick:function(t){return n(t.key)},children:[Object(b.jsx)(x.a.Item,{children:"States"},"1"),Object(b.jsx)(x.a.Item,{children:"Map"},"2"),Object(b.jsx)(x.a.Item,{children:"Favorites"},"3"),Object(b.jsx)(x.a.Item,{children:"Search"},"4")]})]})}function g(t){var e=t.state;return Object(b.jsxs)("div",{children:["TODO: Show the state map of ",e.code]})}function y(){return Object(b.jsx)(g,{state:{code:"S22",name:"TN"}})}var v=n(568),S=n(372),I=n.n(S),C={url:function(t){return"https://results.eci.gov.in/Result2021/partywiseresult-".concat(t,".htm?st=").concat(t)}},k="https://fathomless-stream-86331.herokuapp.com",w=function(t){return fetch(k+"/",{headers:{"Target-URL":t}}).then((function(t){return t.text()}))},F=function(){return fetch(k+"/getCandidateData").then((function(t){return t.json()})).then((function(t){return t.success?t.data:(console.error(t.message),{states:[],constituencies:[],candidates:[]})}))},P=n(373),L=n(374),T=n(375),M=n(388),D=n(386),E=n(569),B=function(t){Object(M.a)(n,t);var e=Object(D.a)(n);function n(){return Object(L.a)(this,n),e.apply(this,arguments)}return Object(T.a)(n,[{key:"render",value:function(){var t=this.props,e=t.stateData,n=t.title,c=e.map((function(t){return{party:t.party,value:parseInt(t.value,10)}})),a=c.reduce((function(t,e){return t+e.value}),0),r={appendPadding:10,data:c,angleField:"value",colorField:"party",radius:1,innerRadius:.5,meta:{value:{formatter:function(t){return t}}},label:{type:"inner",offset:"-50%",style:{textAlign:"center"},autoRotate:!1,content:"{value}"},statistic:{title:{formatter:function(t){return t&&t.party?t.party:n}},content:{formatter:function(t){return t&&t.value||a}}},interactions:[{type:"element-selected"},{type:"element-active"}]};return Object(b.jsx)(E.a,Object(P.a)({},r))}}]),n}(a.a.Component);function N(t){var e=t.state,n=Object(c.useState)([]),a=Object(i.a)(n,2),r=a[0],s=a[1];return Object(c.useEffect)((function(){w(C.url(e.code)).then((function(t){var e=/<table ([\w\W]*)>([\w\W]*)<\/table>/gm.exec(t)[0],n=I.a.parse(e).results[0].filter((function(t){return 4===Object.keys(t).length&&"Total"!==t.Party})).map((function(t){return{party:t.Party,value:t.Total}}));console.log(n),s(n)}))}),[e.code]),Object(b.jsx)(B,{stateData:r,title:e.state})}n(552);function R(t){var e=t.states;return Object(b.jsx)(v.a,{autoplay:!0,dotPosition:"left",dots:"dot-style",children:e.map((function(t,e){return Object(b.jsx)(N,{state:t},e)}))})}var W=function(){var t=o.a.Content,e=o.a.Footer,n=o.a.Sider,a=Object(c.useState)("1"),r=Object(i.a)(a,2),s=r[0],u=r[1],l=Object(c.useState)([]),d=Object(i.a)(l,2),j=d[0],f=d[1],h=Object(c.useState)([]),x=Object(i.a)(h,2),p=x[0],g=x[1],v=Object(c.useState)([]),S=Object(i.a)(v,2),I=S[0],C=S[1];return Object(c.useEffect)((function(){F().then((function(t){var e=t.states,n=t.constituencies,c=t.candidates;C(e),f(c),g(n)}))}),[]),Object(b.jsx)("div",{className:"App",children:Object(b.jsxs)(o.a,{children:[Object(b.jsx)(n,{breakpoint:"lg",collapsedWidth:"0",onBreakpoint:function(t){console.log(t)},onCollapse:function(t,e){console.log(t,e)},children:Object(b.jsx)(m,{page:s,setPage:u})}),"\xa0",Object(b.jsxs)(o.a,{className:"layout",children:[Object(b.jsx)(t,{style:{margin:"24px 16px 0"},children:Object(b.jsx)("div",{className:"site-layout-background",style:{padding:24,minHeight:360},children:"1"===s?Object(b.jsx)(R,{states:I}):"2"===s?Object(b.jsx)(y,{}):"4"===s?Object(b.jsx)(O,{states:I,candidates:j,constituencies:p}):Object(b.jsx)("div",{})})},s),Object(b.jsx)(e,{style:{textAlign:"center"},children:"\xa92021 Sathishkumar Maruthamuthu"})]})]})})},z=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,571)).then((function(e){var n=e.getCLS,c=e.getFID,a=e.getFCP,r=e.getLCP,s=e.getTTFB;n(t),c(t),a(t),r(t),s(t)}))};s.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(W,{})}),document.getElementById("root")),z()}},[[555,1,2]]]);
//# sourceMappingURL=main.a3ce03aa.chunk.js.map