(this["webpackJsonprestaurant-booking-web"]=this["webpackJsonprestaurant-booking-web"]||[]).push([[0],{136:function(e,t,n){},137:function(e,t,n){},1682:function(e,t,n){},1683:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(12),i=n.n(c),o=(n(136),n(137),n(7)),s=n(10),l=function(e){var t=Object.keys(e),n={};return t.forEach((function(t){var a=e[t](void 0,{type:""});if("undefined"===a)throw new Error("".concat(t," does not return state."));n[t]=a})),function(a,r){return r&&t.forEach((function(t){var a=n[t];n[t]=e[t](a,r)})),Object(s.a)({},n)}},u={SET_MENU_OPENED:"SET_MENU_OPENED",SET_IS_FIREBASE_AUTH_ON:"SET_IS_FIREBASE_AUTH_ON",SET_SEARCH_VALUE:"SET_SEARCH_VALUE",SET_PRE_SEARCH_VALUE:"SET_PRE_SEARCH_VALUE",START_SEARCH:"START_SEARCH",PUSH_SEARCH_QUERY:"PUSH_SEARCH_QUERY",REMOVE_SEARCH_QUERY:"REMOVE_SEARCH_QUERY",CLEAR_SEARCH_CACHE:"CLEAR_SEARCH_CACHE",SET_CUR_RESULT:"SET_CUR_RESULT"},j={menuOpened:!0,isFirebaseAuthOn:!0},b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u.SET_MENU_OPENED:return Object(s.a)(Object(s.a)({},e),{},{menuOpened:t.payload});case u.SET_IS_FIREBASE_AUTH_ON:return Object(s.a)(Object(s.a)({},e),{},{isFirebaseAuthOn:t.payload});default:return e}},h=n(123),d={searchValue:null,preSearchValue:null,startSearch:!1,searchQuery:[],curResult:null},O=l({main:b,home:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u.SET_SEARCH_VALUE:return Object(s.a)(Object(s.a)({},e),{},{searchValue:t.payload});case u.SET_PRE_SEARCH_VALUE:return Object(s.a)(Object(s.a)({},e),{},{preSearchValue:t.payload});case u.START_SEARCH:return Object(s.a)(Object(s.a)({},e),{},{startSearch:t.payload});case u.PUSH_SEARCH_QUERY:return Object(s.a)(Object(s.a)({},e),{},{searchQuery:[].concat(Object(h.a)(e.searchQuery),[t.payload])});case u.REMOVE_SEARCH_QUERY:return Object(s.a)(Object(s.a)({},e),{},{searchQuery:e.searchQuery.filter((function(e){return e!==t.payload}))});case u.CLEAR_SEARCH_CACHE:return Object(s.a)(Object(s.a)({},e),{},{searchQuery:searchInitState.searchQuery});case u.SET_CUR_RESULT:return Object(s.a)(Object(s.a)({},e),{},{curResult:t.payload});default:return e}}}),f=n(2),m=Object(a.createContext)(void 0),p=O(),x=function(e){var t=e.children,n=Object(a.useReducer)(O,p),c=Object(o.a)(n,2),i=c[0],s=c[1],l=r.a.useMemo((function(){return[i,s]}),[i]);return Object(f.jsx)(m.Provider,{value:l,children:t})},y=n(1744),g=n(1726),E=n(1728),S=n(1740),v=function(e){e.authorize;return Object(f.jsx)(S.a,{bgcolor:"primary.main",color:"white",children:Object(f.jsx)(g.a,{children:Object(f.jsx)(E.a,{container:!0,children:Object(f.jsx)("h1",{children:"Desktop Header"})})})})},C=n(1729),R=n(1730),A=n(1731),_=n(1685),k=n(1732),w=n(1749),U=n(1741),I=n(1748),H=Object(C.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}}})),T={desktop:v,mobile:function(e){e.authorize;var t=H(),n=Object(a.useState)(!0),r=Object(o.a)(n,2),c=r[0],i=(r[1],Object(a.useState)(null)),s=Object(o.a)(i,2),l=s[0],u=s[1],j=Boolean(l),b=function(){u(null)};return Object(f.jsx)("div",{className:t.root,children:Object(f.jsx)(R.a,{position:"static",color:"inherit",children:Object(f.jsx)(A.a,{children:Object(f.jsxs)(E.a,{container:!0,justify:"space-between",children:[Object(f.jsx)(E.a,{item:!0,children:Object(f.jsx)(k.a,{color:"inherit",children:Object(f.jsx)(_.a,{variant:"h6",children:Object(f.jsx)(S.a,{fontWeight:"bold",children:"LOGO"})})})}),Object(f.jsx)(E.a,{item:!0,children:c&&Object(f.jsxs)("div",{children:[Object(f.jsx)(k.a,{"aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:function(e){u(e.currentTarget)},color:"inherit",children:Object(f.jsx)(I.a,{alt:"Remy Sharp",src:"/static/image/avatar-128/boy_icon-icons.com_55048.png"})}),Object(f.jsxs)(U.a,{id:"menu-appbar",anchorEl:l,anchorOrigin:{vertical:"top",horizontal:"right"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:j,onClose:b,children:[Object(f.jsx)(w.a,{onClick:b,children:"Profile"}),Object(f.jsx)(w.a,{onClick:b,children:"My account"})]})]})})]})})})})}},M={desktop:function(e){e.component,e.authorize;return Object(f.jsx)(S.a,{height:"calc(100vh - 124px)",overflow:"auto",children:Object(f.jsx)(g.a,{children:Object(f.jsx)(E.a,{container:!0,justify:"center",children:Object(f.jsx)(S.a,{mt:5,children:Object(f.jsx)(_.a,{variant:"h2",children:"\u8acb\u4f7f\u7528\u884c\u52d5\u7248\u700f\u89bd"})})})})})},mobile:function(e){var t=e.component;e.authorize;return Object(f.jsx)(S.a,{height:"calc(100vh - 124px)",overflow:"auto",style:{height:"fill-available"},children:Object(f.jsx)(g.a,{children:Object(f.jsx)(t,{})})})}},L=(Object(C.a)({root:{}}),function(e){e.authorize;return Object(f.jsx)(S.a,{position:"absolute",bottom:"0px",m:0,p:0,width:"100%",textAlign:"center",color:"white",bgcolor:"text.disabled",children:Object(f.jsx)(g.a,{children:Object(f.jsx)(E.a,{container:!0,direction:"column",justify:"center",alignItems:"center",children:Object(f.jsx)(E.a,{item:!0,children:Object(f.jsx)("h4",{children:"Desktop Footer"})})})})})}),N=n(119),P=n.n(N),F=n(120),Q=n.n(F),V=n(118),z=n.n(V),Y=n(13),D=(Object(C.a)({root:{}}),{home:{key:"route-home",name:"home",path:"/",icon:Object(f.jsx)(z.a,{fontSize:"large"})},user:{key:"route-about",name:"user",path:"/user",icon:Object(f.jsx)(P.a,{fontSize:"large"})},setting:{key:"route-setting",name:"setting",path:"/setting",icon:Object(f.jsx)(Q.a,{fontSize:"large"})}}),B=function(e){var t=e.icon;e.color;return Object(f.jsx)(t,{color:"primary"})},K={desktop:L,mobile:function(e){e.authorize;var t=Object(Y.g)(),n=t.pathName,r=Object(Y.f)(),c=Object(a.useState)(n),i=Object(o.a)(c,2),s=i[0],l=i[1];return Object(a.useEffect)((function(){t&&l(t.pathname)}),[t.pathName]),Object(f.jsx)(S.a,{position:"absolute",bottom:"0px",m:0,p:0,borderTop:"1px solid #f2f2f2",width:"100%",textAlign:"center",color:"#000",bgcolor:"white",children:Object(f.jsx)(E.a,{container:!0,justify:"space-between",alignItems:"center",children:D&&Object.values(D).map((function(e){return Object(f.jsx)(E.a,{item:!0,children:Object(f.jsx)(k.a,{onClick:function(t){return n=e.path,l(n),void r.push(n);var n},color:s===e.path?"inherit":"default",children:Object(f.jsx)(B,{icon:function(){return e.icon}})})},e.key)}))})})}},W=function(e){return Object(f.jsxs)(r.a.Fragment,{children:[Object(f.jsx)(y.a,{xsDown:!0,children:Object(f.jsx)(T.desktop,Object(s.a)({},e))}),Object(f.jsx)(y.a,{smUp:!0,children:Object(f.jsx)(T.mobile,Object(s.a)({},e))}),Object(f.jsx)(M.mobile,Object(s.a)({},e)),Object(f.jsx)(y.a,{xsDown:!0,children:Object(f.jsx)(K.desktop,Object(s.a)({},e))}),Object(f.jsx)(y.a,{smUp:!0,children:Object(f.jsx)(K.mobile,Object(s.a)({},e))})]})},G=n(1743),q=Object(C.a)({root:{width:"100%"}}),J=function(){q();return Object(f.jsx)(E.a,{container:!0,justify:"center",children:Object(f.jsx)(E.a,{item:!0,xs:12,sm:10,md:8,lg:8,children:Object(f.jsx)("div",{className:q.root,children:Object(f.jsx)(G.a,{severity:"warning",className:q.root,children:"You are not authorized to this page."})})})})},X=function(e){var t=Object(a.useContext)(m),n=Object(o.a)(t,2),r=(n[0],n[1],Object(a.useState)(!0)),c=Object(o.a)(r,2),i=c[0];c[1];return i&&e.children||Object(f.jsx)(W,{component:J,authorize:i})},Z=(n(85),{domain:"lcoalhost:5000",token:""}.domain),$={domain:Z,test:function(){return"".concat(Z,"/test")},getRestaurant:function(){return"".concat(Z,"/restaurant?id={id}")},getRestaurants:function(){return"".concat(Z,"/restaurants?limit={limit}&offset={offset}&type={type}")},getMenus:function(){return"".concat(Z,"/restaurant/menus?id={id}")},searchRestByKeyword:function(){return"".concat(Z,"/search?keyword={keyword}")}},ee="ok",te="Bad Request",ne={webStyleSetting:function(){return new Promise((function(e,t){var n={data:{},status:"ok"};if(n.status===ee)return e(n);t(new Error(te))}))}},ae=function(){var e=Object(a.useContext)(m),t=Object(o.a)(e,2);t[0],t[1];return Object(a.useEffect)((function(){ne.webStyleSetting().then((function(e){})).catch((function(e){console.log(e)}))}),[]),null},re=n(47),ce=n(78),ie=n.n(ce),oe=n(125),se=n(1742),le=n(1733),ue=Object(C.a)((function(e){return{root:{top:"64px","& .MuiTabs-scroller.MuiTabs-fixed span":{height:"5px"}}}})),je=function(e){var t=e.tabs,n=e.handleTabChange,r=e.curTab,c=ue(),i=Object(a.useState)(r||0),s=Object(o.a)(i,2),l=s[0],u=s[1];return Object(f.jsx)(R.a,{className:c.root,position:"fixed",children:Object(f.jsx)(oe.a,{square:!0,variant:"elevation",elevation:0,children:Object(f.jsx)(se.a,{value:l,indicatorColor:"secondary",textColor:"inherit",onChange:function(e,t){u(t),n(t)},"aria-label":"disabled tabs example",variant:"fullWidth",children:t&&Object.values(t).map((function(e){return Object(f.jsx)(le.a,{label:e.label,icon:e.icon},e.key)}))})})})},be=n(1734),he=n(1735),de=n(1737),Oe=n(1736),fe=(n(166),n(1745)),me=Object(C.a)({root:{maxWidth:345}}),pe=function(e){var t=e.restaurant,n=e.handleInfoClick,a=e.handleImgClick,r=e.handleCheckboxChange,c=me();return Object(f.jsx)(be.a,{className:c.root,children:Object(f.jsxs)(he.a,{children:[Object(f.jsx)(Oe.a,{component:"img",alt:"Contemplative Reptile",height:"140",width:"100%",image:t.imgUrl,title:"Contemplative Reptile",onClick:function(e){a&&a(e,t)}}),Object(f.jsx)(de.a,{children:Object(f.jsx)(S.a,{onClick:function(e){n&&(console.log("click"),n(e,t))},children:Object(f.jsxs)(E.a,{container:!0,direction:"column",justify:"space-between",children:[Object(f.jsxs)(E.a,{item:!0,container:!0,justify:"space-between",alignItems:"center",children:[Object(f.jsx)(E.a,{item:!0,xs:10,children:Object(f.jsx)(_.a,{gutterBottom:!0,variant:"subtitle1",children:t&&t.name})}),Object(f.jsx)(E.a,{item:!0,xs:1,children:Object(f.jsx)(fe.a,{checked:t.checked,onChange:function(e){return r(e,t)}})})]}),Object(f.jsx)(E.a,{item:!0,children:Object(f.jsx)(_.a,{variant:"caption",color:"textSecondary",children:t&&t.address})})]})})})]})})},xe=n(19),ye=n.n(xe),ge=110,Ee=1084,Se=function(){return Math.floor(Math.random()*(Ee-ge))+ge},ve=function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;if(1===t||!Number.isInteger(t))return"https://picsum.photos/id/{id}/500/300".replace("{id}",Se());for(var n=[],a=0;a<t;a++)n.push(e());return n},Ce=function(){return[!0,!1][Math.round(Math.random())]},Re=["\u65e5\u5f0f\u71d2\u8089","\u7fa9\u5f0f","\u7f8e\u5f0f","\u6cf0\u5f0f/\u6771\u5357\u4e9e\u6599\u7406","\u6b50\u5f0f/\u7d9c\u5408\u897f\u5f0f","\u53f0\u5f0f","\u4e2d\u5f0f","\u6e2f\u5f0f","\u97d3\u5f0f"],Ae=function(e){return Array.isArray(e)?e[Math.floor(Math.random()*e.length)]:null},_e=ve(20).map((function(e){return{key:ye.a.datatype.uuid(),id:ye.a.datatype.uuid(),name:ye.a.random.words(),address:ye.a.address.cityName()+", "+ye.a.address.streetAddress(),tel:ye.a.phone.phoneNumber(),imgUrl:e,description:ye.a.lorem.paragraphs(),category:Ae(Re),checked:Ce()}})),ke=ve(6).map((function(e){return{key:ye.a.datatype.uuid(),id:ye.a.datatype.uuid(),name:ye.a.random.words(),address:ye.a.address.cityName()+", "+ye.a.address.streetAddress(),tel:ye.a.phone.phoneNumber(),imgUrl:e,description:ye.a.lorem.paragraphs(),category:Ae(Re),checked:Ce()}})),we={small:{name:"small",size:"80x120"},normal:{name:"normal",size:"200x300"},large:{name:"large",size:"400x600"}},Ue=function(e,t){var n=[];if(!Number.isInteger(e))return n;Object.keys(we).indexOf(t)<0&&(t=we.normal.name);for(var a=0;a<e;a++){var r="https://fakeimg.pl/{size}/282828/EAE0D0/?text=menu{id}".replace("{id}",a).replace("{size}",we[t].size);n.push(r)}return n},Ie=function(e,t){if(!e||"string"!==typeof e)return null;var n=$.searchRestByKeyword().replace("{keyword}",e.trim());return t&&t({type:u.PUSH_SEARCH_QUERY,payload:n}),new Promise((function(a,r){var c=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:["name"];if(!e||!Array.isArray(e))return[];if(!t)return e;if("string"!==typeof t)return[];if(!Array.isArray(n)&&"string"!==typeof n)return[];var a=Array.isArray(n)?n:[n],r=[],c=t.trim();return e.forEach((function(e){var t=!1;a.forEach((function(n){"string"===typeof n&&e.hasOwnProperty(n)&&e[n].indexOf(c)>=0&&(t=!0)})),t&&r.push(e)})),r}(_e,e.trim(),"name");t&&t({type:u.REMOVE_SEARCH_QUERY,payload:n}),a(c)}))},He={new:"new",all:"all"},Te=function(e,t){e&&Object.values(He).indexOf(e)>=0||(e=He.all);var n=$.getRestaurants().replace("{limit}",-1).replace("{offset}",0).replace("{type}",e);return t&&t({type:u.PUSH_SEARCH_QUERY,payload:n}),new Promise((function(a,r){var c=e===He.all?_e:ke;t&&t({type:u.REMOVE_SEARCH_QUERY,payload:n}),a(c)}))},Me=function(e){e.restList;var t=Object(a.useContext)(m),n=Object(o.a)(t,2),c=(n[0],n[1]),i=Object(Y.f)(),s=i.location,l=(s.pathname,s.search,s.hash,Object(a.useState)(null)),u=Object(o.a)(l,2),j=u[0],b=u[1],h=function(e,t){i.push({pathname:"restInfo",search:"restId=".concat(t.id)})},d=function(e,t){i.push({pathname:"restInfo",search:"restId=".concat(t.id)})},O=function(e,t){};return Object(a.useEffect)((function(){Te(He.all,c).then((function(e){b(e)})).catch((function(e){console.log(e)}))}),[]),Object(f.jsx)(r.a.Fragment,{children:Object(f.jsx)(E.a,{container:!0,direction:"column",justify:"center",alignItems:"center",children:j&&j.map((function(e){return Object(f.jsx)(S.a,{mb:2,children:Object(f.jsx)(E.a,{item:!0,children:Object(f.jsx)(pe,{restaurant:e,handleInfoClick:h,handleImgClick:d,handleCheckboxChange:O})},e.key)},e.key)}))})})},Le=function(e){e.restList;var t=Object(a.useContext)(m),n=Object(o.a)(t,2),c=(n[0],n[1]),i=Object(Y.f)(),s=i.location,l=(s.pathname,s.search,s.hash,Object(a.useState)(null)),u=Object(o.a)(l,2),j=u[0],b=u[1],h=function(e,t){i.push({pathname:"restInfo",search:"restId=".concat(t.id)})},d=function(e,t){i.push({pathname:"restInfo",search:"restId=".concat(t.id)})},O=function(e,t){};return Object(a.useEffect)((function(){Te(He.new,c).then((function(e){b(e)})).catch((function(e){console.log(e)}))}),[]),Object(f.jsx)(r.a.Fragment,{children:Object(f.jsx)(E.a,{container:!0,direction:"column",justify:"center",alignItems:"center",children:j&&j.map((function(e){return Object(f.jsx)(S.a,{mb:2,children:Object(f.jsx)(E.a,{item:!0,children:Object(f.jsx)(pe,{restaurant:e,handleInfoClick:h,handleImgClick:d,handleCheckboxChange:O})},e.key)},e.key)}))})})},Ne=n(6),Pe=n(1747),Fe=n(1738),Qe=n(1750),Ve=n(1739),ze=n(121),Ye=n.n(ze),De=Object(Ne.a)({root:{borderColor:"#c8c1b5","&:focus":{borderColor:"#c8c1b5"},"&.Mui-focused":{borderColor:"#c8c1b5"},"& fieldset":{borderColor:"#c8c1b5"},"&:hover fieldset":{borderColor:"#c8c1b5"},"&.Mui-focused fieldset":{"&.MuiOutlinedInput-root.Mui-focused.MuiOutlinedInput-notchedOutline":{borderColor:"#c8c1b5"}}}})(Pe.a),Be=Object(C.a)((function(){return{root:{display:"flex"}}})),Ke=function(e){var t=e.placeholder,n=e.label,r=e.defaultValue,c=e.onChange,i=e.onSearch,s=e.useInputLabel,l=e.onKeyUp,u=e.disabled,j=Object(a.useState)(""),b=Object(o.a)(j,2),h=b[0],d=b[1],O=Be();return Object(f.jsx)("div",{className:O.root,children:Object(f.jsxs)(Fe.a,{variant:"outlined",fullWidth:!0,children:[s&&Object(f.jsx)(Qe.a,{htmlFor:"outlined-adornment-keyword-search",children:n||"\u95dc\u9375\u5b57"}),Object(f.jsx)(De,{id:"outlined-adornment-keyword-search",placeholder:t,onChange:function(e){d(e.target.value),c&&c(e)},classes:{root:O.root,focused:O.focused},defaultValue:r,fullWidth:!0,endAdornment:Object(f.jsx)(Ve.a,{position:"end",children:Object(f.jsx)(k.a,{"aria-label":"start search",onClick:function(){i&&i(h)},onMouseDown:function(e){e.preventDefault()},edge:"end",children:Object(f.jsx)(Ye.a,{})})}),inputProps:{onKeyUp:l},disabled:u,labelWidth:s?70:0})]})})};Ke.defaultProps={placeholder:null,label:null,defaultValue:null,useInputLabel:!1,disabled:!1,onChange:null,onSearch:null,onKeyUp:null};var We=Ke,Ge=n(50),qe=n.n(Ge),Je="default",Xe="initial",Ze="searching",$e="finishSearch",et=function(e){e.restList;var t=Object(a.useContext)(m),n=Object(o.a)(t,2),c=n[0],i=n[1],s=c.home,l=s.startSearch,j=s.searchQuery,b=Object(Y.f)(),h=b.location,d=h.search,O=(h.pathname,qe.a.parse(d).keyword),p=Object(a.useState)(O),x=Object(o.a)(p,2),y=x[0],g=x[1],v=Object(a.useState)(""),C=Object(o.a)(v,2),R=C[0],A=C[1],k=Object(a.useState)(!1),w=Object(o.a)(k,2),U=w[0],I=w[1],H=Object(a.useState)(O||""),T=Object(o.a)(H,1)[0],M=Object(a.useState)(null),L=Object(o.a)(M,2),N=L[0],P=L[1],F=Object(a.useState)(Xe),Q=Object(o.a)(F,2),V=Q[0],z=Q[1],D=Object(a.useState)(Je),B=Object(o.a)(D,2),K=B[0],W=(B[1],Object(a.useState)(Je)),G=Object(o.a)(W,2),q=G[0],J=(G[1],function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"start";R===y&&K===q||""!==y&&(i({type:u.START_SEARCH,payload:!0}),i({type:u.PUSH_SEARCH_QUERY,payload:e}),A(y),setTimeout((function(){i({type:u.REMOVE_SEARCH_QUERY,payload:e})}),1e3))});O&&""!==O&&J(),Object(a.useEffect)((function(){i({type:u.SET_CUR_RESULT,payload:null})}),[]),Object(a.useEffect)((function(){l&&(z(Ze),Ie(y,i).then((function(e){P(e),i({type:u.SET_CUR_RESULT,payload:e})})).catch((function(e){console.log(e)})).finally((function(){i({type:u.START_SEARCH,payload:!1}),z($e)})))}),[l]),Object(a.useEffect)((function(){j&&0===j.length?I(!1):I(!0)}),[j]);var X=function(e,t){b.push({pathname:"restInfo",search:"restId=".concat(t.id)})},Z=function(e,t){b.push({pathname:"restInfo",search:"restId=".concat(t.id)})},$=function(e,t){};return Object(f.jsx)(r.a.Fragment,{children:Object(f.jsxs)(E.a,{container:!0,direction:"column",justify:"center",alignItems:"center",children:[Object(f.jsx)(E.a,{item:!0,children:Object(f.jsx)(S.a,{mt:1,mb:2,children:Object(f.jsx)(We,{useInputLabel:!0,keyword:y,onChange:function(e){g(e.target.value.trim()),i({type:u.SET_SEARCH_VALUE,payload:e.target.value.trim()})},onSearch:J,onKeyUp:function(e){"Enter"===e.key&&J()},disabled:U,defaultValue:T,placeholder:"\u8acb\u8f38\u5165\u95dc\u9375\u5b57"})})}),Object(f.jsx)(E.a,{item:!0}),N&&Array.isArray(N)&&N.map((function(e){return Object(f.jsx)(S.a,{mb:2,children:Object(f.jsx)(E.a,{item:!0,children:Object(f.jsx)(pe,{restaurant:e,handleInfoClick:X,handleImgClick:Z,handleCheckboxChange:$})},e.key)},e.key)})),V===$e&&(!N||0===(Array.isArray(N)&&N).length)&&Object(f.jsx)(S.a,{textAlign:"center",mt:4,children:Object(f.jsx)(_.a,{variant:"h5",children:"\u62b1\u6b49\uff01\u627e\u4e0d\u5230\u7b26\u5408\u7684\u8cc7\u8a0a"})}),V===Xe&&Object(f.jsx)(S.a,{textAlign:"center",mt:4,children:Object(f.jsx)(_.a,{variant:"h5",children:"\u8acb\u8f38\u5165\u95dc\u9375\u5b57\u641c\u5c0b"})})]})})},tt={0:{key:"home-tab-01",label:"\u65b0\u589e\u9910\u5ef3",name:"NewList",tabIdx:0,icon:null,component:Le},1:{key:"home-tab-02",label:"\u9910\u5ef3\u6e05\u55ae",name:"AllList",tabIdx:1,icon:null,component:Me},2:{key:"home-tab-03",label:null,name:"Search",tabIdx:2,icon:Object(f.jsx)(ie.a,{}),component:et}},nt=function(e){var t=e.component,n=e.restList;return Object(f.jsx)(t,{restList:n})},at=function(){var e,t,n=Object(a.useContext)(m),c=Object(o.a)(n,2),i=(c[0],c[1],Object(Y.f)().location),s=i.search,l=(i.pathname,qe.a.parse(s).type),u=Object(a.useState)((e=tt,(t=l)&&(Array.isArray(e)||"object"===typeof e)?function(e,t){var n=0;return e.forEach((function(e,a){e.name.toLowerCase()===t.toLowerCase()&&(n=a)})),n}(Array.isArray(e)?e:Object.values(e),t):0)),j=Object(o.a)(u,2),b=j[0],h=j[1],d=Object(a.useState)([]),O=Object(o.a)(d,2),p=O[0];O[1];Object(a.useEffect)((function(){}),[]);return Object(f.jsxs)(r.a.Fragment,{children:[Object(f.jsx)(je,{tabs:tt,handleTabChange:function(e){h(e)},curTab:b}),Object(f.jsx)(S.a,{height:"48px"}),Object(f.jsx)(S.a,{pt:"25px",pb:"70px",children:tt&&tt[b]&&Object(f.jsx)(nt,{component:tt[b].component,restList:p})})]})},rt=function(){return Object(f.jsx)(r.a.Fragment,{children:Object(f.jsx)("h1",{children:"User"})})},ct=function(){return Object(f.jsx)(r.a.Fragment,{children:Object(f.jsx)("h1",{children:"Setting"})})},it=n(122),ot=n.n(it),st=n(81),lt=n.n(st),ut=(n(1681),n(1746)),jt=(n(1682),function(e){var t=e.carouselImgUrls,n=e.thumbImgUrls,c=Object(a.useState)(0),i=Object(o.a)(c,2),s=i[0],l=i[1],u=Object(a.useState)(null),j=Object(o.a)(u,2),b=j[0],h=j[1],d=function(e){l(e)};return Object(a.useEffect)((function(){if(!Array.isArray(n))return null;var e=[];n.forEach((function(t){e.push(Object(f.jsx)("img",{className:"img-example-small",src:t},Object(ut.a)()))})),h(e)}),[n]),Object(f.jsx)("div",{children:Array.isArray(t)&&t.length>0&&Object(f.jsxs)(r.a.Fragment,{children:[Object(f.jsx)(lt.a,{value:s,onChange:d,plugins:["arrows"],children:Array.isArray(t)&&t.map((function(e){return Object(f.jsx)("img",{src:e},Object(ut.a)())}))}),Array.isArray(b)&&b.length>0&&Object(f.jsx)(st.Dots,{value:s,onChange:d,thumbnails:b})]})})}),bt=function(e){return{divider:{backgroundColor:"#f4ab2e",width:"60px",height:"5px",borderRadius:"10px"}}},ht=Object(C.a)(bt),dt=[{key:"route-home",name:"home",path:"/",withHeader:!0,withFooter:!0,public:!0,authority:null,component:at},{key:"route-rest-info",name:"rest-info",path:"/restInfo",withHeader:!0,withFooter:!0,public:!0,authority:null,component:function(){var e=Object(a.useContext)(m),t=Object(o.a)(e,2),n=(t[0],t[1]),c=Object(Y.f)(),i=c.location,s=i.search,l=(i.pathname,qe.a.parse(s).restId),j=Object(a.useState)(null),b=Object(o.a)(j,2),h=b[0],d=b[1],O=ht(),p=Object(a.useState)(null),x=Object(o.a)(p,2),y=x[0],g=x[1],v=Object(a.useState)(null),C=Object(o.a)(v,2),R=C[0],A=C[1],k=Object(a.useState)(null),w=Object(o.a)(k,2),U=(w[0],w[1]);return Object(a.useEffect)((function(){if(!l)return null;(function(e,t){if(!e||"string"!==typeof e)return null;var n=$.getRestaurant().replace("{id}",e);return t&&t({type:u.PUSH_SEARCH_QUERY,payload:n}),new Promise((function(e,a){var r=Math.floor(Math.random()*_e.length),c=_e[r];t&&t({type:u.REMOVE_SEARCH_QUERY,payload:n}),e(c)}))})(l,n).then((function(e){d(e)})).catch((function(e){console.log(e)}))}),[]),Object(a.useEffect)((function(){if(!l)return null;(function(e,t){if(!e)return Promise.reject(new Error("parameter error"));var n=$.getMenus().replace("{id}",e);return t&&t({type:u.PUSH_SEARCH_QUERY,payload:n}),new Promise((function(e,a){var r=Ue(10,we.normal.name),c=Ue(10,we.small.name),i=Ue(10,we.large.name);t&&t({type:u.REMOVE_SEARCH_QUERY,payload:n}),e({normalImgUrls:r,thumbImgUrls:c,largeImgUrls:i})}))})(l,n).then((function(e){var t=e.normalImgUrls,n=e.thumbImgUrls,a=e.largeImgUrls;g(t),A(n),U(a)})).catch((function(e){console.log(e)}))}),[]),Object(f.jsx)(r.a.Fragment,{children:Object(f.jsx)(E.a,{container:!0,direction:"column",justify:"center",alignItems:"center",children:h&&Object(f.jsxs)(r.a.Fragment,{children:[Object(f.jsx)(E.a,{item:!0,container:!0,justify:"flex-start",children:Object(f.jsx)(E.a,{item:!0,children:Object(f.jsxs)(S.a,{mt:3,mx:2,display:"flex",alignItems:"setCurrentKeyword",onClick:function(){c.go(-1)},children:[Object(f.jsx)(ot.a,{}),Object(f.jsx)(_.a,{variant:"body1",children:"Go back"})]})})}),Object(f.jsx)(E.a,{item:!0,children:Object(f.jsx)(S.a,{mt:4,children:Object(f.jsx)(pe,{restaurant:h})})}),Object(f.jsx)(E.a,{item:!0,children:Object(f.jsx)(S.a,{my:2,className:O.divider})}),Object(f.jsx)(E.a,{item:!0,container:!0,justify:"flex-start",children:Object(f.jsxs)(S.a,{my:2,mx:2,textAlign:"left",children:[Object(f.jsx)(_.a,{variant:"h6",children:"\u9910\u5ef3\u8cc7\u8a0a"}),Object(f.jsx)(_.a,{variant:"body2",children:h.tel}),Object(f.jsx)(_.a,{variant:"body2",children:h.category}),Object(f.jsx)(_.a,{variant:"caption",children:h.description})]})}),Object(f.jsx)(E.a,{item:!0,children:Object(f.jsx)(S.a,{my:2,className:O.divider})}),Object(f.jsxs)(E.a,{item:!0,container:!0,justify:"flex-start",children:[Object(f.jsx)(E.a,{item:!0,xs:12,children:Object(f.jsx)(S.a,{mt:2,mb:1,mx:2,textAlign:"left",children:Object(f.jsx)(_.a,{variant:"h6",children:"\u83dc\u55ae"})})}),Object(f.jsx)(E.a,{item:!0,xs:12,children:Object(f.jsx)(S.a,{mt:1,mb:2,mx:2,children:Object(f.jsx)(jt,{carouselImgUrls:y,thumbImgUrls:R})})})]}),Object(f.jsx)(E.a,{item:!0,children:Object(f.jsx)(S.a,{height:"80px"})})]})})})}},{key:"route-about",name:"user",path:"/user",withHeader:!0,withFooter:!0,public:!0,authority:null,component:rt},{key:"route-setting",name:"setting",path:"/setting",withHeader:!0,withFooter:!0,public:!0,authority:null,component:ct}],Ot=Object(C.a)({root:{width:"100%"}}),ft=function(){Ot();return Object(f.jsx)(E.a,{container:!0,justify:"center",children:Object(f.jsx)(E.a,{item:!0,xs:12,sm:10,md:8,lg:8,children:Object(f.jsx)("div",{className:Ot.root,children:Object(f.jsx)(G.a,{severity:"warning",className:Ot.root,children:"The page is not found"})})})})},mt=function(){return Object(f.jsx)(re.a,{children:Object(f.jsxs)(Y.c,{children:[dt&&dt.filter((function(e){return e.public})).map((function(e){return Object(f.jsx)(Y.a,{exact:!0,path:e.path,children:Object(f.jsx)(W,Object(s.a)({},e))},e.key)})),Object(f.jsx)(Y.a,{children:Object(f.jsx)(W,{component:ft})})]})})};var pt=function(){return Object(f.jsx)(x,{children:Object(f.jsxs)(X,{children:[Object(f.jsx)(ae,{}),Object(f.jsx)(mt,{})]})})},xt=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,1752)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),c(e),i(e)}))};i.a.render(Object(f.jsx)(r.a.StrictMode,{children:Object(f.jsx)(pt,{})}),document.getElementById("root")),xt()}},[[1683,1,2]]]);
//# sourceMappingURL=main.698fbf7a.chunk.js.map