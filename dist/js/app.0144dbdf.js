(function(e){function t(t){for(var n,r,s=t[0],l=t[1],c=t[2],u=0,d=[];u<s.length;u++)r=s[u],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&d.push(i[r][0]),i[r]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);m&&m(t);while(d.length)d.shift()();return o.push.apply(o,c||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],n=!0,s=1;s<a.length;s++){var l=a[s];0!==i[l]&&(n=!1)}n&&(o.splice(t--,1),e=r(r.s=a[0]))}return e}var n={},i={app:0},o=[];function r(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=e,r.c=n,r.d=function(e,t,a){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(a,n,function(t){return e[t]}.bind(null,n));return a},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var m=l;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"034f":function(e,t,a){"use strict";a("85ec")},"0dbb":function(e,t,a){e.exports=a.p+"img/anil.a3e98267.jpg"},"2db5":function(e,t,a){e.exports=a.p+"img/blog.d6a5fe9b.jpg"},"346f":function(e,t,a){},"36fb":function(e,t,a){},4292:function(e,t,a){e.exports=a.p+"img/visitnepal.3477aa97.jpg"},"484e":function(e,t,a){e.exports=a.p+"img/medmax.d626cf97.jpg"},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",{attrs:{id:"inspire"}},[a("v-navigation-drawer",{attrs:{app:"",relative:"",left:"",temporary:""},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[a("v-list-item",[a("v-list-item-content",[a("v-list-item-title",{staticClass:"text-h6 text-center"},[e._v(" Er. Anil Kumar Thakur ")]),a("v-list-item-subtitle",{staticClass:"text-center"},[e._v(" Full Stack Developer ")])],1)],1),a("v-divider"),a("v-list",{attrs:{dense:"",nav:""}},e._l(e.items,(function(t){return a("v-list-item",{key:t.title,attrs:{link:"",to:t.to}},[a("v-list-item-icon",[a("v-icon",[e._v(e._s(t.icon))])],1),a("v-list-item-content",[a("v-list-item-title",[e._v(e._s(t.title))])],1)],1)})),1)],1),a("v-app-bar",{attrs:{app:""}},[a("v-app-bar-nav-icon",{staticClass:"d-none d-lg-flex",on:{click:function(t){e.drawer=!e.drawer}}}),a("v-toolbar-title"),a("v-spacer"),a("v-switch",{staticClass:"mt-5",attrs:{inset:"","persistent-hint":""},model:{value:e.$vuetify.theme.dark,callback:function(t){e.$set(e.$vuetify.theme,"dark",t)},expression:"$vuetify.theme.dark"}})],1),a("v-main",[a("v-container",[a("router-view")],1)],1),[a("v-row",{directives:[{name:"touch",rawName:"v-touch",value:{left:function(){return e.swipe("Left")},right:function(){return e.swipe("Right")},up:function(){return e.swipe("Up")},down:function(){return e.swipe("Down")}},expression:"{\n        left: () => swipe('Left'),\n        right: () => swipe('Right'),\n        up: () => swipe('Up'),\n        down: () => swipe('Down'),\n      }"}],staticClass:"grey lighten-2",attrs:{align:"center",justify:"center"}})]],2)},o=[],r={data:function(){return{swipeDirection:"None",drawer:null,items:[{title:"Home",icon:"mdi-home",to:"/"},{title:"Feature",icon:"mdi-star-circle",to:"/feature"},{title:"Portfolio",icon:"mdi-face-man-profile",to:"/portfolio"},{title:"About Me",icon:"mdi-information-variant",to:"/about-me"},{title:"Gallery",icon:"mdi-view-gallery-outline",to:"/gallery"},{title:"Contact Me",icon:"mdi-card-account-phone",to:"/contact-me"}],right:null}},methods:{swipe:function(e){this.swipeDirection=e}}},s=r,l=(a("034f"),a("2877")),c=a("6544"),m=a.n(c),u=a("7496"),d=a("40dc"),p=a("5bc1"),f=a("a523"),v=a("ce7e"),h=a("132d"),g=a("8860"),b=a("da13"),x=a("5d23"),y=a("34c3"),w=a("f6c4"),_=a("f774"),k=a("0fd9"),C=a("2fa4"),j=a("b73d"),V=a("2a7f"),O=a("269a"),S=a.n(O),T=a("c3f0"),E=Object(l["a"])(s,i,o,!1,null,null,null),I=E.exports;m()(E,{VApp:u["a"],VAppBar:d["a"],VAppBarNavIcon:p["a"],VContainer:f["a"],VDivider:v["a"],VIcon:h["a"],VList:g["a"],VListItem:b["a"],VListItemContent:x["a"],VListItemIcon:y["a"],VListItemSubtitle:x["b"],VListItemTitle:x["c"],VMain:w["a"],VNavigationDrawer:_["a"],VRow:k["a"],VSpacer:C["a"],VSwitch:j["a"],VToolbarTitle:V["a"]}),S()(E,{Touch:T["a"]});var M=a("f309");n["a"].use(M["a"]);var P=new M["a"]({}),A=a("8c4f"),D=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{},[n("v-row",[n("v-col",{attrs:{lg:"6",md:"12",sm:"12"}},[n("v-layout",{attrs:{row:"",wrap:"","align-center":"",bg:"","fill-height":"","grid-list-md":"","text-xs-center":""}},[n("v-flex",[n("h3",{staticClass:"my-3 font-weight-regular text-subtitle-2",staticStyle:{"letter-spacing":"1px !important"}},[e._v(" WELCOME TO MY WORLD ")]),n("h3",{staticClass:"font-weight-bold text-h4 mt-5"},[e._v(" Hi, I'm Anil Kumar Thakur ")]),n("h3",{staticClass:"font-weight-bold text-h4 mb-5"},[n("text-type")],1),n("v-row",{staticClass:"mt-16"},[n("social-media"),n("best-skill")],1)],1)],1)],1),n("v-col",{staticClass:"mt-lg-8",attrs:{lg:"6",md:"12",sm:"12","order-md":"12","order-sm":"12"}},[n("v-layout",{attrs:{row:"",wrap:"","align-center":"",bg:"","fill-height":"","grid-list-md":"","text-xs-center":""}},[n("v-flex",[n("v-img",{attrs:{src:a("0dbb")}})],1)],1)],1)],1)],1)},N=[],L=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-col",{staticClass:"mt-lg-5",attrs:{lg:"12",md:"12",sm:"12"}},[a("v-row",{staticClass:"justify-center"},[a("h6",{staticClass:"text-center"},[e._v("BEST SKILL ON")])]),a("v-row",{staticClass:"justify-center"},e._l(e.icons,(function(e,t){return a("best-skill-list",{key:t,attrs:{colorname:e.colorname,iconname:e.iconname,tooltips:e.tooltips}})})),1)],1)},$=[],B=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-col",{attrs:{lg:"1",md:"1",sm:"1"}},[a("v-tooltip",{attrs:{top:""},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on,i=t.attrs;return[a("v-btn",e._g(e._b({staticClass:"px-1",attrs:{icon:"",dark:"",href:e.href}},"v-btn",i,!1),n),[a("v-icon",{attrs:{color:e.colorname}},[e._v(e._s(e.iconname))])],1)]}}])},[a("span",[a("v-btn",{attrs:{href:e.href}},[e._v(" "+e._s(e.tooltips))])],1)])],1)},F=[],R={name:"BestSkillList",props:{colorname:String,iconname:String,href:String,tooltips:String}},H=R,q=(a("f0fd"),a("8336")),K=a("62ad"),W=a("3a2f"),z=Object(l["a"])(H,B,F,!1,null,null,null),J=z.exports;m()(z,{VBtn:q["a"],VCol:K["a"],VIcon:h["a"],VTooltip:W["a"]});var Y={components:{BestSkillList:J},name:"BestSkill",data:function(){return{icons:[{colorname:"red",iconname:"mdi-laravel",tooltips:"Laravel "},{colorname:"green",iconname:"mdi-vuejs",tooltips:"VueJs"},{colorname:"indigo",iconname:"mdi-bootstrap",tooltips:"Bootstrap"},{colorname:"primary",iconname:"mdi-jquery",tooltips:"jQuery"},{colorname:"amber",iconname:"mdi-language-javascript",tooltips:"JavaScript "},{colorname:"indigo accent-4",iconname:"mdi-language-css3",tooltips:"Cascading Style Sheets"},{colorname:"indigo accent-4",iconname:"inertia-js",tooltips:"InertiaJs"}]}}},G=Y,U=Object(l["a"])(G,L,$,!1,null,null,null),Q=U.exports;m()(U,{VCol:K["a"],VRow:k["a"]});var Z=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-col",{attrs:{lg:"12",md:"12",sm:"12"}},[a("v-row",{staticClass:"justify-center"},[a("h6",{staticClass:"text-center"},[e._v("FIND WITH ME")])]),a("v-row",{staticClass:"justify-center"},e._l(e.icons,(function(e,t){return a("best-skill-list",{key:t,attrs:{colorname:e.colorname,href:e.href,iconname:e.iconname,tooltips:e.tooltips}})})),1)],1)},X=[],ee={components:{BestSkillList:J},name:"SocialMedia",data:function(){return{icons:[{href:"https://github.com/anilkumarthakur60",colorname:"grey darken-4",iconname:"mdi-github",tooltips:"https://github.com/anilkumarthakur60"},{href:"https://www.facebook.com/anilkumarthakur60",colorname:"primary",iconname:"mdi-facebook",tooltips:"https://www.facebook.com/anilkumarthakur60/"},{href:"https://twitter.com/kumaranil60",colorname:"primary",iconname:"mdi-twitter",tooltips:"https://twitter.com/kumaranil60"},{href:"https://www.instagram.com/anilkumarthakur60/",colorname:"red",iconname:"mdi-instagram",tooltips:"https://www.instagram.com/anilkumarthakur60/"},{href:"https://www.linkedin.com/in/anil-kumar-thakur-489724129/",colorname:"primary",iconname:"mdi-linkedin",tooltips:"https://www.linkedin.com/in/anil-kumar-thakur-489724129/"},{href:"mailto:anilkumarthakur60@gmail.com",colorname:"grey darken-4",iconname:"mdi-email",tooltips:"mailto:anilkumarthakur60@gmail.com"}]}}},te=ee,ae=Object(l["a"])(te,Z,X,!1,null,null,null),ne=ae.exports;m()(ae,{VCol:K["a"],VRow:k["a"]});var ie=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("vue-typer",{attrs:{text:["Full Stack Developer","Professional Coder"],repeat:1/0,shuffle:!1,"initial-action":"typing","pre-type-delay":70,"type-delay":70,"pre-erase-delay":2e3,"erase-delay":250,"erase-style":"clear","erase-on-complete":!1,"caret-animation":"smooth"}})},oe=[],re=a("e956"),se={name:"TextType",components:{VueTyper:re["VueTyper"]}},le=se,ce=(a("fe4b"),Object(l["a"])(le,ie,oe,!1,null,null,null)),me=ce.exports,ue={components:{TextType:me,BestSkill:Q,SocialMedia:ne},name:"Home",mounted:function(){document.title="Er.Anil Kumar Thakur | Home"}},de=ue,pe=a("0e8f"),fe=a("adda"),ve=a("a722"),he=Object(l["a"])(de,D,N,!1,null,null,null),ge=he.exports;m()(he,{VCol:K["a"],VFlex:pe["a"],VImg:fe["a"],VLayout:ve["a"],VRow:k["a"]});var be=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-row",[n("v-col",{attrs:{lg:"6",md:"6",sm:"12"}},[n("v-img",{attrs:{src:a("0dbb")}})],1),n("v-col",{attrs:{lg:"6",md:"6",sm:"12"}},[n("h3",{staticClass:"font-weight-bold text-sm-h3 text-lg-h4 text-md-h3 my-5"},[e._v(" About Me ")]),n("h5",{staticClass:"font-weight-bold text-sm-h5 text-lg-h5 text-md-h5 my-5"},[e._v(" Creative Software Developer based in Kathmandu, Nepal ")]),n("p",{staticClass:"text-justify font-weight-medium"},[e._v(" I'm Web Developer, and very passionate and dedicated to my work. With 1year plus years experience as a professional web developer, I have acquired the skills and knowledge necessary to make your project a success. I enjoy every step of the design process, from discussion and collaboration. "),n("br"),n("br"),e._v(" I design and develop services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores. My passion is to design digital user experiences through the bold interface and meaningful interactions. Check out my Portfolio ")]),n("div",{staticClass:"d-flex"},[n("v-icon",{staticClass:"mr-4",attrs:{color:"success "}},[e._v("mdi-check-all")]),n("p",[e._v("Helping with the design and development of web application")])],1),n("div",{staticClass:"d-flex"},[n("v-icon",{staticClass:"mr-4",attrs:{color:"success "}},[e._v("mdi-check-all")]),n("p",[e._v("Testing and debugging software to keep it optimized")])],1),n("div",{staticClass:"d-flex"},[n("v-icon",{staticClass:"mr-4",attrs:{color:"success "}},[e._v("mdi-check-all")]),n("p",[e._v("Writing clean code for the front and back end for reusability")])],1),n("div",{staticClass:"d-flex"},[n("v-icon",{staticClass:"mr-4",attrs:{color:"success "}},[e._v("mdi-check-all")]),n("p",[e._v("Developing APIs and RESTful services")])],1),n("div",{staticClass:"d-flex"},[n("v-icon",{staticClass:"mr-4",attrs:{color:"success "}},[e._v("mdi-check-all")]),n("p",[e._v(" Considering security, maintenance, scalability, and more when developing ")])],1),n("v-btn",{attrs:{color:"success",href:"https://drive.google.com/drive/folders/18QPnAkmyNxLqsHVFgH1YTK_C4PqsuuZo?usp=sharing",target:"_blank"}},[e._v(" Download My Resume ")])],1)],1)},xe=[],ye={name:"About",mounted:function(){document.title="Er.Anil Kumar Thakur| About Me"}},we=ye,_e=Object(l["a"])(we,be,xe,!1,null,null,null),ke=_e.exports;m()(_e,{VBtn:q["a"],VCol:K["a"],VIcon:h["a"],VImg:fe["a"],VRow:k["a"]});var Ce=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-row",{attrs:{justify:"center",color:"#26c6da",dark:""}},[a("v-col",{staticClass:"text-center"},[a("v-subheader",{staticClass:"justify-center"},[e._v("VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK")]),a("div",{staticClass:"justify-center font-weight-bold text-lg-h5 text-md-h5 text-sm-h5"},[e._v(" My Portfolio ")]),a("v-row",{staticClass:"mt-6"},e._l(e.portfoliolists,(function(e,t){return a("portfolio-list",{key:t,attrs:{name:e.name,image:e.image,text:e.text}})})),1)],1)],1)},je=[],Ve=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-col",{staticClass:"d-flex child-flex",attrs:{lg:"3",md:"4",sm:"6"}},[a("v-hover",{scopedSlots:e._u([{key:"default",fn:function(t){var n=t.hover;return[a("v-card",{class:{"on-hover":n},attrs:{elevation:n?12:2,rounded:"xl"}},[a("v-img",{staticClass:"rounded-xl",attrs:{src:e.image}}),a("v-card-title",{},[a("h1",{staticClass:"red--text text-h5 text-left ml-4 my-5"},[e._v(e._s(e.name))])]),a("v-card-actions",{staticClass:"card-actions"},[a("v-btn",{attrs:{text:"",color:"teal accent-4"},on:{click:function(t){e.reveal=!0}}},[e._v(" Explore ")])],1),a("v-expand-transition",[e.reveal?a("v-card",{staticClass:"transition-fast-in-fast-out v-card--reveal",staticStyle:{height:"100%"},attrs:{rounded:"xl"}},[a("v-card-text",{staticClass:"pb-0"},[a("p",{staticClass:"text-justify text-subtitle-2 px-4 pb-5",domProps:{textContent:e._s(e.text)}},[e._v(" "+e._s(e.text)+" ")])]),a("v-card-actions",{staticClass:"pt-0 card-actions"},[a("v-btn",{attrs:{text:"",color:"teal accent-4"},on:{click:function(t){e.reveal=!1}}},[a("v-icon",[e._v("mdi-window-close")])],1)],1)],1):e._e()],1)],1)]}}])})],1)},Oe=[],Se={name:"PortfolioList",props:["name","image","text"],data:function(){return{reveal:!1}}},Te=Se,Ee=(a("5933"),a("b0af")),Ie=a("99d9"),Me=a("0789"),Pe=a("ce87"),Ae=Object(l["a"])(Te,Ve,Oe,!1,null,null,null),De=Ae.exports;m()(Ae,{VBtn:q["a"],VCard:Ee["a"],VCardActions:Ie["a"],VCardText:Ie["b"],VCardTitle:Ie["c"],VCol:K["a"],VExpandTransition:Me["a"],VHover:Pe["a"],VIcon:h["a"],VImg:fe["a"]});var Ne={components:{PortfolioList:De},name:"Portfolio",data:function(){return{portfoliolists:[{name:"Online Saffron Conttages",image:a("6d60"),text:"Online Food OrderSystem will primarily provide a platform to order food item  of items, product  through the internet. The Online Food order  Management System will be a huge marketplace as most of the business are going  based on the internet."},{name:"Garjoo Classified",image:a("c8cc"),text:"E-commerce Management System will primarily provide a platform to purchase, sell, distribution of items, product  through the internet. The E-commerce Management System will be a huge marketplace as most of the business are going  based on the internet."},{name:"Government Telemedicine",image:a("6bbe"),text:' <a href="https://ehealth.solupoly.org/admin/login/595752746157343d"> akjbs</a>.'},{name:"Delivery Report Systerm",image:a("9ea6"),text:"This system helps to manage the information related to health care and aids in the job completion of health care providers effectively. They manage the data related to all departments of healthcare such as, creative problem solving. Analyze data, and processes."},{name:"Video Conferencing App",image:a("772e"),text:"One to One Video call for the conferencing system for counseling. Build with laravel as backend and vuejs as frontend ,Bootstrap for the UI design . Anyone willing to have counseling have to pay first through esewa and then only he can have conferencing with that agency."},{name:"SingleEcommerce System",image:a("9c61"),text:"E-commerce Management System will primarily provide a platform to purchase, sell, distribution of items, product  through the internet. The E-commerce Management System will be a huge marketplace as most of the business are going  based on the internet"},{name:"Medmax Innovation Pvt Ltd",image:a("484e"),text:"Medmax Innovation is an emerging IT company best known for good service quality and cost effective packages. They are about customer satisfaction rather than our earning. They believe in earning respect and trust is more valuable than earning money. "},{name:"Medmax Medical Holesale",image:a("6d6d"),text:"Med Max pvt. Ltd. is a Nepal based Medical Holsale & Clinical Chain company with established 2075. They vigorous Health related solutions, using the latest System tools and incorporating products in our service areas. "},{name:"Content Management System",image:a("2db5"),text:"content management system (CMS) is an application that is used to manage web content, allowing multiple contributors to create, edit and publish. Content in a CMS is typically stored in a database and displayed in a presentation layer based on a set of templates."}]}},mounted:function(){document.title="Er.Anil Kumar Thakur | My Portfoli"}},Le=Ne,$e=a("e0c7"),Be=Object(l["a"])(Le,Ce,je,!1,null,null,null),Fe=Be.exports;m()(Be,{VCol:K["a"],VRow:k["a"],VSubheader:$e["a"]});var Re=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-row",[e._l(e.imgs,(function(t,n){return a("v-col",{key:n,staticClass:"d-flex child-flex",attrs:{sm:"12",md:"4",lg:"4"},on:{click:function(){return e.showImg(n)}}},[a("v-hover",{scopedSlots:e._u([{key:"default",fn:function(n){var i=n.hover;return[a("v-card",{class:{"on-hover":i},attrs:{elevation:i?12:2,rounded:"xl"}},[a("v-responsive",[a("v-card",{staticClass:"mx-auto pa-4",attrs:{rounded:"xl"}},[a("v-img",{staticClass:"rounded-xl",attrs:{src:t},on:{click:e.showMultiple}})],1)],1)],1)]}}],null,!0)})],1)})),a("v-col",[a("v-col",{attrs:{sm:"12",md:"4",lg:"3"}},[a("vue-easy-lightbox",{attrs:{visible:e.visible,imgs:e.imgs,index:e.index},on:{hide:e.handleHide}})],1)],1)],2)},He=[],qe=a("825ae"),Ke={components:{VueEasyLightbox:qe["a"]},data:function(){return{transparent:"rgba(255, 255, 255, 0)",imgs:[a("9ea6"),a("772e"),a("9c61"),a("484e"),a("6d6d"),a("2db5"),a("4292"),a("ea1f"),a("8758")],visible:!1,index:0}},methods:{showSingle:function(){this.imgs={title:"this is a placeholder",src:"https://i.loli.net/2018/11/10/5be6852dec46e.jpeg"},this.show()},showImg:function(e){this.index=e,this.visible=!0},showMultiple:function(){this.index=0,this.show()},show:function(){this.visible=!0},handleHide:function(){this.visible=!1}},mounted:function(){document.title="Er.Anil Kumar Thakur | My Gallery"}},We=Ke,ze=a("6b53"),Je=Object(l["a"])(We,Re,He,!1,null,null,null),Ye=Je.exports;m()(Je,{VCard:Ee["a"],VCol:K["a"],VHover:Pe["a"],VImg:fe["a"],VResponsive:ze["a"],VRow:k["a"]});var Ge=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{},[e._m(0),e._m(1),n("v-row",[n("v-col",{attrs:{sm:"12",md:"4",lg:"4"}},[n("v-hover",{scopedSlots:e._u([{key:"default",fn:function(t){var i=t.hover;return[n("v-card",{staticClass:"pb-5 pa-4 rounded-xl",class:{"on-hover":i},attrs:{elevation:i?12:2}},[n("v-img",{staticClass:"rounded-xl mb-5",attrs:{src:a("0dbb")}}),n("div",{staticClass:"text-h4 mt-5"},[e._v("Anil Kumar Thakur")]),n("div",{staticClass:"text-h6 red--text"},[e._v("Full Stack Developer")]),n("div",{staticClass:"text-subtitle-2 mt-5"},[e._v(" I am available for freelance work. Connect with me via and call in to my account. ")]),n("div",{staticClass:"text-subtitle-2 mt-5"},[e._v(" Phone: "),n("span",{staticClass:"red--text"},[e._v("+977-9808711001")])]),n("div",{staticClass:"text-subtitle-2 mt-5"},[e._v(" Email: "),n("v-btn",{staticClass:"text-lowercase",attrs:{text:!0,plain:"",href:"mailto:anilkumarthakur60@gmail.com"}},[e._v("anilkumarthakur60@gmail.com")])],1)],1)]}}])})],1),n("v-col",{attrs:{sm:"12",lg:"8",md:"8"}},[n("v-hover",{scopedSlots:e._u([{key:"default",fn:function(e){var t=e.hover;return[n("v-card",{staticClass:"pb-5 pa-4 rounded-xl",class:{"on-hover":t},attrs:{elevation:t?12:2}},[n("forms")],1)]}}])})],1)],1)],1)},Ue=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"text-justify my-5"},[a("h6",{staticClass:"text-sm-h6 text-center font-weight-bold text-lg-h5"},[e._v(" CONTACT ")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"text-justify my-4"},[a("h6",{staticClass:"text-sm-h5 text-center font-weight-bold text-lg-h4"},[e._v(" Contact With Me ")])])}],Qe=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("validation-observer",{ref:"observer",scopedSlots:e._u([{key:"default",fn:function(t){var n=t.invalid;return[a("form",{on:{submit:function(t){return t.preventDefault(),e.submit.apply(null,arguments)}}},[a("validation-provider",{attrs:{name:"Name",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.errors;return[a("v-text-field",{staticClass:"my-lg-6 my-md-4 my-sm-2",attrs:{outlined:"","auto-grow":"",color:"primary","error-messages":n,label:"Name",required:""},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}})]}}],null,!0)}),a("validation-provider",{attrs:{name:"phoneNumber",rules:{required:!0,min:8,max:13,digits:8,regex:"/^(?:+977|0977)?-?(?:(?:(?:98|97)-?d{8})|(?:01-?d{7})|(?:0d{2}-?d{6}))$/"}},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.errors;return[a("v-text-field",{staticClass:"my-lg-6 my-md-4 my-sm-2",attrs:{outlined:"","auto-grow":"",color:"primary",counter:13,"error-messages":n,label:"Phone Number",name:"phone number",required:""},model:{value:e.phoneNumber,callback:function(t){e.phoneNumber=t},expression:"phoneNumber"}})]}}],null,!0)}),a("validation-provider",{attrs:{name:"phoneNumber",rules:"required|"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.errors;return[a("v-text-field",{staticClass:"my-lg-6 my-md-4 my-sm-2",attrs:{outlined:"","auto-grow":"",color:"primary","error-messages":n,label:"phoneNumber",rules:{required:!0,min:8,max:13,digits:13}},model:{value:e.phoneNumber,callback:function(t){e.phoneNumber=t},expression:"phoneNumber"}})]}}],null,!0)}),a("validation-provider",{attrs:{name:"email",rules:"required|email"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.errors;return[a("v-text-field",{staticClass:"my-lg-6 my-md-4 my-sm-2",attrs:{outlined:"","auto-grow":"",color:"primary","error-messages":n,label:"E-mail",required:""},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}})]}}],null,!0)}),a("validation-provider",{attrs:{name:"message",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.errors;return[a("v-textarea",{attrs:{outlined:"","auto-grow":"",color:"primary","error-messages":n,label:"Message",required:""},model:{value:e.message,callback:function(t){e.message=t},expression:"message"}})]}}],null,!0)}),a("div",{staticClass:"my-lg-6 my-md-4 my-sm-2"},[a("v-btn",{staticClass:"mr-4",attrs:{type:"submit",disabled:n}},[e._v(" submit ")]),a("v-btn",{on:{click:e.clear}},[e._v(" clear ")])],1)],1)]}}])})},Ze=[],Xe=a("5530"),et=(a("b0c0"),a("4c93")),tt=a("7bb1");Object(tt["d"])("eager"),Object(tt["c"])("digits",Object(Xe["a"])(Object(Xe["a"])({},et["a"]),{},{message:"{_field_} needs to be {length} digits. ({_value_})"})),Object(tt["c"])("required",Object(Xe["a"])(Object(Xe["a"])({},et["f"]),{},{message:"{_field_} can not be empty"})),Object(tt["c"])("max",Object(Xe["a"])(Object(Xe["a"])({},et["c"]),{},{message:"{_field_} may not be greater than {length} characters"})),Object(tt["c"])("min",Object(Xe["a"])(Object(Xe["a"])({},et["d"]),{},{message:"{_field_} may not be smaller than {length} characters"})),Object(tt["c"])("regex",Object(Xe["a"])(Object(Xe["a"])({},et["e"]),{},{message:"{_field_} {_value_} does not match {regex}"})),Object(tt["c"])("email",Object(Xe["a"])(Object(Xe["a"])({},et["b"]),{},{message:"Email must be valid"}));var at={name:"Forms",components:{ValidationProvider:tt["b"],ValidationObserver:tt["a"]},data:function(){return{name:"",phoneNumber:"",email:"",select:null,message:"",items:["Item 1","Item 2","Item 3","Item 4"],checkbox:null}},methods:{submit:function(){this.$refs.observer.validate()},clear:function(){this.name="",this.phoneNumber="",this.email="",this.message="",this.select=null,this.checkbox=null,this.$refs.observer.reset()},showtoast:function(){this.$toasted.show("hello billo")}}},nt=at,it=a("8654"),ot=a("a844"),rt=Object(l["a"])(nt,Qe,Ze,!1,null,null,null),st=rt.exports;m()(rt,{VBtn:q["a"],VTextField:it["a"],VTextarea:ot["a"]});var lt={components:{Forms:st},name:"Contact",mounted:function(){document.title="Er.Anil Kumar Thakur | Contact Me "}},ct=lt,mt=Object(l["a"])(ct,Ge,Ue,!1,null,null,null),ut=mt.exports;m()(mt,{VBtn:q["a"],VCard:Ee["a"],VCol:K["a"],VHover:Pe["a"],VImg:fe["a"],VRow:k["a"]});var dt=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-row",[a("v-col",{attrs:{sm:"12"}},[a("v-subheader",{staticClass:"justify-center"},[e._v("VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK")]),a("div",{staticClass:"text-h5 text-center font-weight-bold"},[e._v("My Portfolio")])],1),a("v-col"),a("div",{},[a("div",{staticClass:"justify-center font-weight-bold text-lg-h5 text-md-h5 text-sm-h5"}),a("v-row",e._l(e.whatidolists,(function(e){return a("what-i-do",{key:e.name,attrs:{name:e.name,image:e.image,text:e.text}})})),1)],1)],1)},pt=[],ft=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-col",{staticClass:"d-flex child-flex",attrs:{lg:"3",md:"3",sm:"12"}},[a("v-hover",{scopedSlots:e._u([{key:"default",fn:function(t){var n=t.hover;return[a("v-card",{staticClass:"mx-auto rounded-xl",class:{"on-hover":n},attrs:{elevation:n?12:2}},[a("v-img",{staticClass:"rounded-xl",attrs:{src:e.image}},[a("v-expand-transition",[n?a("div",{staticClass:"\n              d-flex\n              transition-fast-in-fast-out\n              orange\n              darken-2\n              v-card--reveal\n              text-h2\n              white--text\n            ",staticStyle:{height:"100%"}},[a("v-img",{staticClass:"rounded-xl",attrs:{src:e.image}})],1):e._e()])],1),a("v-card-text",{staticClass:"pt-6",staticStyle:{position:"relative"}},[a("h3",{staticClass:"text-h5 font-weight mb-2"},[e._v(" "+e._s(e.name)+" ")]),a("div",{staticClass:"text-justify text-subtitle-2 mb-2"},[e._v(" "+e._s(e.text)+" ")])])],1)]}}])})],1)},vt=[],ht={name:"WhatIDo",props:["name","image","text"]},gt=ht,bt=(a("954a"),Object(l["a"])(gt,ft,vt,!1,null,null,null)),xt=bt.exports;m()(bt,{VCard:Ee["a"],VCardText:Ie["b"],VCol:K["a"],VExpandTransition:Me["a"],VHover:Pe["a"],VImg:fe["a"]});var yt={components:{WhatIDo:xt},name:"Feature",data:function(){return{whatidolists:[{name:"Front End",image:a("f936"),text:"Frontend Developer  with 2  years experience building and maintaining responsive websites . Proficient in  modern web technology and frameworks like Vue js, Inertia JS ,Bootstrap ,Vuetify."},{name:"Backend",image:a("bdf1"),text:"Backend Developer with 1.5 year experience in  industry. Analyze data, processes, and codes to troubleshoot problems and identify areas for improvement also taking lead on projects as needed."},{name:"Project Management",image:a("5928"),text:"Managed project plan and Worked closely with management on assigned projects from inception through implementation to ensure adequate internal communication between end user and developerd."},{name:"Database Design",image:a("a27e"),text:"Relational Database design for small to large scale project. Maintaining and enhancing the performance of existing database. Optimize database systems for performance and reliability. "}]}},mounted:function(){document.title="Er.Anil Kumar Thakur | Feature"}},wt=yt,_t=Object(l["a"])(wt,dt,pt,!1,null,null,null),kt=_t.exports;m()(_t,{VCol:K["a"],VRow:k["a"],VSubheader:$e["a"]}),n["a"].use(A["a"]);var Ct=[{path:"/",name:"Home",component:ge},{path:"/about-me",name:"About",component:ke},{path:"/portfolio",name:"Portfolio",component:Fe},{path:"/gallery",name:"Gallery",component:Ye},{path:"/contact-me",name:"Contact",component:ut},{path:"/feature",name:"Feature",component:kt}],jt=new A["a"]({routes:Ct}),Vt=jt,Ot=a("f2ff");n["a"].use(Ot["a"]),n["a"].config.productionTip=!1,new n["a"]({vuetify:P,router:Vt,render:function(e){return e(I)}}).$mount("#app")},5928:function(e,t,a){e.exports=a.p+"img/projectmanagement.7134660b.jpg"},5933:function(e,t,a){"use strict";a("8f84")},"6bbe":function(e,t,a){e.exports=a.p+"img/telemed.9c3cc168.png"},"6d60":function(e,t,a){e.exports=a.p+"img/saffroncottages.121e52cd.png"},"6d6d":function(e,t,a){e.exports=a.p+"img/medmaxchain.a91e27aa.jpg"},"772e":function(e,t,a){e.exports=a.p+"img/videochat.a8702f05.jpg"},"79a0":function(e,t,a){},"85ec":function(e,t,a){},8758:function(e,t,a){e.exports=a.p+"img/calculator.9bf23233.jpg"},"8f84":function(e,t,a){},"954a":function(e,t,a){"use strict";a("346f")},"9c61":function(e,t,a){e.exports=a.p+"img/ecoomerce.684b2ea1.jpg"},"9ea6":function(e,t,a){e.exports=a.p+"img/meriaamai.2cfec2eb.jpg"},a27e:function(e,t,a){e.exports=a.p+"img/database.bf264cb3.png"},bdf1:function(e,t,a){e.exports=a.p+"img/backend.7c6f44f9.webp"},c8cc:function(e,t,a){e.exports=a.p+"img/garjoonepal.9e12a521.png"},ea1f:function(e,t,a){e.exports=a.p+"img/htmlportfolio.e7212034.jpg"},f0fd:function(e,t,a){"use strict";a("36fb")},f936:function(e,t,a){e.exports=a.p+"img/frontend.bd8ea473.svg"},fe4b:function(e,t,a){"use strict";a("79a0")}});
//# sourceMappingURL=app.0144dbdf.js.map