(function(t){function e(e){for(var n,r,s=e[0],l=e[1],c=e[2],u=0,d=[];u<s.length;u++)r=s[u],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&d.push(i[r][0]),i[r]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);m&&m(e);while(d.length)d.shift()();return o.push.apply(o,c||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],n=!0,s=1;s<a.length;s++){var l=a[s];0!==i[l]&&(n=!1)}n&&(o.splice(e--,1),t=r(r.s=a[0]))}return t}var n={},i={app:0},o=[];function r(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=n,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(a,n,function(e){return t[e]}.bind(null,n));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var m=l;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";a("85ec")},"0dbb":function(t,e,a){t.exports=a.p+"img/anil.a3e98267.jpg"},"2db5":function(t,e,a){t.exports=a.p+"img/blog.d6a5fe9b.jpg"},"346f":function(t,e,a){},"36fb":function(t,e,a){},"39f4":function(t,e,a){t.exports=a.p+"img/anil.d5b43e53.png"},4292:function(t,e,a){t.exports=a.p+"img/visitnepal.3477aa97.jpg"},"484e":function(t,e,a){t.exports=a.p+"img/medmax.d626cf97.jpg"},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",{attrs:{id:"inspire"}},[a("v-navigation-drawer",{attrs:{app:"",relative:"",left:"",temporary:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[a("v-list-item",[a("v-list-item-content",[a("v-list-item-title",{staticClass:"text-h6 text-center"},[t._v(" Er. Anil Kumar Thakur ")]),a("v-list-item-subtitle",{staticClass:"text-center"},[t._v(" Full Stack Developer ")])],1)],1),a("v-divider"),a("v-list",{attrs:{dense:"",nav:""}},t._l(t.items,(function(e){return a("v-list-item",{key:e.title,attrs:{link:"",to:e.to}},[a("v-list-item-icon",[a("v-icon",[t._v(t._s(e.icon))])],1),a("v-list-item-content",[a("v-list-item-title",[t._v(t._s(e.title))])],1)],1)})),1)],1),a("v-app-bar",{attrs:{app:""}},[a("v-app-bar-nav-icon",{on:{click:function(e){t.drawer=!t.drawer}}}),a("v-toolbar-title"),a("v-spacer"),a("v-switch",{staticClass:"mt-5",attrs:{inset:"","persistent-hint":""},model:{value:t.$vuetify.theme.dark,callback:function(e){t.$set(t.$vuetify.theme,"dark",e)},expression:"$vuetify.theme.dark"}})],1),a("v-main",[a("v-container",[a("router-view"),[a("v-row",{directives:[{name:"touch",rawName:"v-touch",value:{left:function(){return t.swipe("Left")},right:function(){return t.swipe("Right")},up:function(){return t.swipe("Up")},down:function(){return t.swipe("Down")}},expression:"{\n            left: () => swipe('Left'),\n            right: () => swipe('Right'),\n            up: () => swipe('Up'),\n            down: () => swipe('Down'),\n          }"}],staticClass:"grey lighten-2",attrs:{align:"center",justify:"center"}})]],2)],1)],1)},o=[],r={components:{},data:function(){return{swipeDirection:"None",drawer:null,items:[{title:"Home",icon:"mdi-home",to:"/"},{title:"Feature",icon:"mdi-star-circle",to:"/feature"},{title:"Portfolio",icon:"mdi-face-man-profile",to:"/portfolio"},{title:"About Me",icon:"mdi-information-variant",to:"/about-me"},{title:"Gallery",icon:"mdi-view-gallery-outline",to:"/gallery"},{title:"Contact Me",icon:"mdi-card-account-phone",to:"/contact-me"}],right:null}},methods:{swipe:function(t){this.swipeDirection=t}}},s=r,l=(a("034f"),a("2877")),c=a("6544"),m=a.n(c),u=a("7496"),d=a("40dc"),p=a("5bc1"),f=a("a523"),v=a("ce7e"),h=a("132d"),g=a("8860"),b=a("da13"),x=a("5d23"),y=a("34c3"),w=a("f6c4"),_=a("f774"),k=a("0fd9"),C=a("2fa4"),j=a("b73d"),V=a("2a7f"),S=a("269a"),O=a.n(S),T=a("c3f0"),E=Object(l["a"])(s,i,o,!1,null,null,null),M=E.exports;m()(E,{VApp:u["a"],VAppBar:d["a"],VAppBarNavIcon:p["a"],VContainer:f["a"],VDivider:v["a"],VIcon:h["a"],VList:g["a"],VListItem:b["a"],VListItemContent:x["a"],VListItemIcon:y["a"],VListItemSubtitle:x["b"],VListItemTitle:x["c"],VMain:w["a"],VNavigationDrawer:_["a"],VRow:k["a"],VSpacer:C["a"],VSwitch:j["a"],VToolbarTitle:V["a"]}),O()(E,{Touch:T["a"]});var I=a("f309");n["a"].use(I["a"]);var P=new I["a"]({}),D=a("8c4f"),$=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-row",{staticClass:"mx-2"},[n("v-col",{attrs:{lg:"6",md:"12",sm:"12"}},[n("v-layout",{attrs:{row:"",wrap:"","align-center":"",bg:"","fill-height":"","grid-list-md":"","text-xs-center":""}},[n("v-flex",[n("h3",{staticClass:"my-3 font-weight-regular text-subtitle-2 align-self-center",staticStyle:{"letter-spacing":"1px !important"}},[t._v(" WELCOME TO MY WORLD ")]),n("h3",{staticClass:"font-weight-bold text-h4 mt-5"},[t._v(" Hi, I'm Er. Anil Kumar Thakur ")]),n("h3",{staticClass:"font-weight-bold text-h4 mb-5"},[n("text-type")],1),n("v-row",{staticClass:"mt-16"},[n("social-media"),n("best-skill")],1)],1)],1)],1),n("v-col",{staticClass:"mt-lg-8",attrs:{lg:"6",md:"12",sm:"12","order-md":"12","order-sm":"12"}},[n("v-layout",{attrs:{row:"",wrap:"","align-center":"",bg:"","fill-height":"","grid-list-md":"","text-xs-center":""}},[n("v-flex",[n("v-img",{attrs:{src:a("39f4")}})],1)],1)],1)],1)},A=[],L=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-col",{staticClass:"mt-lg-5",attrs:{lg:"12",md:"12",sm:"12"}},[a("v-row",{staticClass:"justify-center"},[a("h6",{staticClass:"text-center"},[t._v("BEST SKILL ON")])]),a("v-row",{staticClass:"justify-center"},t._l(t.icons,(function(t,e){return a("best-skill-list",{key:e,attrs:{colorname:t.colorname,iconname:t.iconname,tooltips:t.tooltips}})})),1)],1)},F=[],H=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-col",{attrs:{lg:"1",md:"1",sm:"1"}},[a("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,i=e.attrs;return[a("v-btn",t._g(t._b({staticClass:"px-1",attrs:{icon:"",dark:"",href:t.href}},"v-btn",i,!1),n),[a("v-icon",{attrs:{color:t.colorname}},[t._v(t._s(t.iconname))])],1)]}}])},[a("span",[t._v(" "+t._s(t.tooltips)+" ")])])],1)},B=[],R={name:"BestSkillList",props:{colorname:String,iconname:String,href:String,tooltips:String}},K=R,q=(a("f0fd"),a("8336")),N=a("62ad"),W=a("3a2f"),z=Object(l["a"])(K,H,B,!1,null,null,null),J=z.exports;m()(z,{VBtn:q["a"],VCol:N["a"],VIcon:h["a"],VTooltip:W["a"]});var G={components:{BestSkillList:J},name:"BestSkill",data:function(){return{icons:[{colorname:"red",iconname:"mdi-laravel",tooltips:"Laravel "},{colorname:"green",iconname:"mdi-vuejs",tooltips:"VueJs"},{colorname:"indigo",iconname:"mdi-bootstrap",tooltips:"Bootstrap"},{colorname:"primary",iconname:"mdi-jquery",tooltips:"jQuery"},{colorname:"amber",iconname:"mdi-language-javascript",tooltips:"JavaScript "},{colorname:"indigo accent-4",iconname:"mdi-language-css3",tooltips:"Cascading Style Sheets"},{colorname:"indigo accent-4",iconname:"inertia-js",tooltips:"InertiaJs"}]}}},U=G,Y=Object(l["a"])(U,L,F,!1,null,null,null),Q=Y.exports;m()(Y,{VCol:N["a"],VRow:k["a"]});var Z=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-col",{attrs:{lg:"12",md:"12",sm:"12"}},[a("v-row",{staticClass:"justify-center"},[a("h6",{staticClass:"text-center"},[t._v("FIND WITH ME")])]),a("v-row",{staticClass:"justify-center"},t._l(t.icons,(function(t,e){return a("best-skill-list",{key:e,attrs:{colorname:t.colorname,href:t.href,iconname:t.iconname,tooltips:t.tooltips}})})),1)],1)},X=[],tt={components:{BestSkillList:J},name:"SocialMedia",data:function(){return{icons:[{href:"https://github.com/anilkumarthakur60",colorname:"grey darken-4",iconname:"mdi-github",tooltips:"https://github.com/anilkumarthakur60"},{href:"https://www.facebook.com/anilkumarthakur60",colorname:"primary",iconname:"mdi-facebook",tooltips:"https://www.facebook.com/anilkumarthakur60/"},{href:"https://twitter.com/kumaranil60",colorname:"primary",iconname:"mdi-twitter",tooltips:"https://twitter.com/kumaranil60"},{href:"https://www.instagram.com/anilkumarthakur60/",colorname:"red",iconname:"mdi-instagram",tooltips:"https://www.instagram.com/anilkumarthakur60/"},{href:"https://www.linkedin.com/in/anil-kumar-thakur-489724129/",colorname:"primary",iconname:"mdi-linkedin",tooltips:"https://www.linkedin.com/in/anil-kumar-thakur-489724129/"},{href:"mailto:anilkumarthakur60@gmail.com",colorname:"grey darken-4",iconname:"mdi-email",tooltips:"mailto:anilkumarthakur60@gmail.com"}]}}},et=tt,at=Object(l["a"])(et,Z,X,!1,null,null,null),nt=at.exports;m()(at,{VCol:N["a"],VRow:k["a"]});var it=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("vue-typer",{attrs:{text:["Full Stack Web Developer","Professional Coder"],repeat:1/0,shuffle:!1,"initial-action":"typing","pre-type-delay":70,"type-delay":70,"pre-erase-delay":2e3,"erase-delay":250,"erase-style":"clear","erase-on-complete":!1,"caret-animation":"smooth"}})},ot=[],rt=a("e956"),st={name:"TextType",components:{VueTyper:rt["VueTyper"]}},lt=st,ct=(a("fe4b"),Object(l["a"])(lt,it,ot,!1,null,null,null)),mt=ct.exports,ut={components:{TextType:mt,BestSkill:Q,SocialMedia:nt},name:"Home",mounted:function(){document.title="Er. Anil Kumar Thakur | Home"}},dt=ut,pt=a("0e8f"),ft=a("adda"),vt=a("a722"),ht=Object(l["a"])(dt,$,A,!1,null,null,null),gt=ht.exports;m()(ht,{VCol:N["a"],VFlex:pt["a"],VImg:ft["a"],VLayout:vt["a"],VRow:k["a"]});var bt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-row",[n("v-col",{staticClass:"justify-center align-self-center",attrs:{lg:"6",md:"6",sm:"12"}},[n("v-img",{attrs:{src:a("0dbb")}})],1),n("v-col",{attrs:{lg:"6",md:"6",sm:"12"}},[n("h3",{staticClass:"\n        font-weight-bold\n        d-flex\n        justify-center\n        text-sm-h3 text-lg-h4 text-md-h3\n        mx-auto\n      "},[t._v(" About Me ")]),n("h5",{staticClass:"\n        font-weight-bold\n        d-flex\n        my-2\n        justify-center\n        text-sm-h6 text-lg-h6 text-md-h5\n      "},[t._v(" Full Stack Web Developer ")]),n("p",{staticClass:"text-justify font-weight-medium"},[t._v(" I'm full Stack Web Developer, and very passionate and dedicated to my work. With 2 year plus years experience as a professional web developer, I have acquired the skills and knowledge necessary to make your project a success. I enjoy every step from design to developmet process with discussion and collaboration. "),n("br"),n("br"),t._v(" I design and develop services for customers of all sizes, specializing in creating stylish, modern web app, web services and online stores. My passion is to design digital user experiences through the bold interface and meaningful interactions. Check out my Portfolio ")]),n("div",{staticClass:"d-flex"},[n("v-icon",{staticClass:"mr-4",attrs:{color:"success "}},[t._v("mdi-check-all")]),n("p",[t._v("Helping with the design and development of web application")])],1),n("div",{staticClass:"d-flex"},[n("v-icon",{staticClass:"mr-4",attrs:{color:"success "}},[t._v("mdi-check-all")]),n("p",[t._v("Testing and debugging software to keep it optimized")])],1),n("div",{staticClass:"d-flex"},[n("v-icon",{staticClass:"mr-4",attrs:{color:"success "}},[t._v("mdi-check-all")]),n("p",[t._v("Ensuring cross-platform compatibility and optimization")])],1),n("div",{staticClass:"d-flex"},[n("v-icon",{staticClass:"mr-4",attrs:{color:"success "}},[t._v("mdi-check-all")]),n("p",[t._v("Keeping up with technological advances to optimize their software")])],1),n("div",{staticClass:"d-flex"},[n("v-icon",{staticClass:"mr-4",attrs:{color:"success "}},[t._v("mdi-check-all")]),n("p",[t._v("Writing clean code for the front and back end for reusability")])],1),n("div",{staticClass:"d-flex"},[n("v-icon",{staticClass:"mr-4",attrs:{color:"success "}},[t._v("mdi-check-all")]),n("p",[t._v("Developing APIs and RESTful services")])],1),n("div",{staticClass:"d-flex mb-3"},[n("v-icon",{staticClass:"mr-4",attrs:{color:"success "}},[t._v("mdi-check-all")]),n("p",[t._v(" Considering security, maintenance, scalability, and more when developing ")])],1),n("v-btn",{attrs:{color:"success",href:"https://drive.google.com/drive/folders/18QPnAkmyNxLqsHVFgH1YTK_C4PqsuuZo?usp=sharing",target:"_blank"}},[t._v(" Download My Resume ")]),n("v-btn",{staticClass:"ml-lg-2 my-2",attrs:{depressed:"",color:"primary",to:"/contact-me"}},[t._v(" Contact Me ")])],1)],1)},xt=[],yt={name:"About",components:{},mounted:function(){document.title="Er. Anil Kumar Thakur| About Me"},methods:{alertDisplay:function(){}}},wt=yt,_t=Object(l["a"])(wt,bt,xt,!1,null,null,null),kt=_t.exports;m()(_t,{VBtn:q["a"],VCol:N["a"],VIcon:h["a"],VImg:ft["a"],VRow:k["a"]});var Ct=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-row",{attrs:{justify:"center",color:"#26c6da",dark:""}},[a("v-col",{staticClass:"text-center"},[a("v-subheader",{staticClass:"justify-center"},[t._v("VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK")]),a("div",{staticClass:"justify-center font-weight-bold text-lg-h5 text-md-h5 text-sm-h5"},[t._v(" My Portfolio ")]),a("v-row",{staticClass:"mt-6"},t._l(t.portfoliolists,(function(t,e){return a("portfolio-list",{key:e,attrs:{name:t.name,image:t.image,text:t.text}})})),1)],1)],1)},jt=[],Vt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-col",{staticClass:"d-flex child-flex",attrs:{lg:"3",md:"4",sm:"6"}},[a("v-hover",{scopedSlots:t._u([{key:"default",fn:function(e){var n=e.hover;return[a("v-card",{class:{"on-hover":n},attrs:{elevation:n?12:2,rounded:"xl"}},[a("v-img",{staticClass:"rounded-xl",attrs:{src:t.image}}),a("v-card-title",[a("h1",{staticClass:"red--text text-h5 text-left ml-4 my-5"},[t._v(t._s(t.name))])]),a("v-card-actions",{staticClass:"card-actions"},[a("v-btn",{attrs:{text:"",color:"teal accent-4"},on:{click:function(e){t.reveal=!0}}},[t._v(" Explore ")])],1),a("v-expand-transition",[t.reveal?a("v-card",{staticClass:"transition-fast-in-fast-out v-card--reveal",staticStyle:{height:"100%"},attrs:{rounded:"xl"}},[a("v-card-text",{staticClass:"pb-0"},[a("p",{staticClass:"text-justify text-subtitle-2 px-4 pb-5",domProps:{textContent:t._s(t.text)}},[t._v(" "+t._s(t.text)+" ")])]),a("v-card-actions",{staticClass:"pt-0 card-actions"},[a("v-btn",{attrs:{text:"",color:"teal accent-4"},on:{click:function(e){t.reveal=!1}}},[a("v-icon",[t._v("mdi-window-close")])],1)],1)],1):t._e()],1)],1)]}}])})],1)},St=[],Ot={name:"PortfolioList",props:["name","image","text"],data:function(){return{reveal:!1}}},Tt=Ot,Et=(a("5933"),a("b0af")),Mt=a("99d9"),It=a("0789"),Pt=a("ce87"),Dt=Object(l["a"])(Tt,Vt,St,!1,null,null,null),$t=Dt.exports;m()(Dt,{VBtn:q["a"],VCard:Et["a"],VCardActions:Mt["a"],VCardText:Mt["b"],VCardTitle:Mt["c"],VCol:N["a"],VExpandTransition:It["a"],VHover:Pt["a"],VIcon:h["a"],VImg:ft["a"]});var At={components:{PortfolioList:$t},name:"Portfolio",data:function(){return{portfoliolists:[{name:"Online Saffron Conttages",image:a("6d60"),text:"Online Food OrderSystem will primarily provide a platform to order food item  of items, product  through the internet. The Online Food order  Management System will be a huge marketplace as most of the business are going  based on the internet."},{name:"Garjoo Classified",image:a("c8cc"),text:"E-commerce Management System will primarily provide a platform to purchase, sell, distribution of items, product  through the internet. The E-commerce Management System will be a huge marketplace as most of the business are going  based on the internet."},{name:"Government Telemedicine",image:a("6bbe"),text:' <a href="https://ehealth.solupoly.org/admin/login/595752746157343d"> akjbs</a>.'},{name:"Delivery Report Systerm",image:a("9ea6"),text:"This system helps to manage the information related to health care and aids in the job completion of health care providers effectively. They manage the data related to all departments of healthcare such as, creative problem solving. Analyze data, and processes."},{name:"Video Conferencing App",image:a("772e"),text:"One to One Video call for the conferencing system for counseling. Build with laravel as backend and vuejs as frontend ,Bootstrap for the UI design . Anyone willing to have counseling have to pay first through esewa and then only he can have conferencing with that agency."},{name:"SingleEcommerce System",image:a("9c61"),text:"E-commerce Management System will primarily provide a platform to purchase, sell, distribution of items, product  through the internet. The E-commerce Management System will be a huge marketplace as most of the business are going  based on the internet"},{name:"Medmax Innovation Pvt Ltd",image:a("484e"),text:"Medmax Innovation is an emerging IT company best known for good service quality and cost effective packages. They are about customer satisfaction rather than our earning. They believe in earning respect and trust is more valuable than earning money. "},{name:"Medmax Medical Holesale",image:a("6d6d"),text:"Med Max pvt. Ltd. is a Nepal based Medical Holsale & Clinical Chain company with established 2075. They vigorous Health related solutions, using the latest System tools and incorporating products in our service areas. "},{name:"Content Management System",image:a("2db5"),text:"content management system (CMS) is an application that is used to manage web content, allowing multiple contributors to create, edit and publish. Content in a CMS is typically stored in a database and displayed in a presentation layer based on a set of templates."}]}},mounted:function(){document.title="Er. Anil Kumar Thakur | My Portfoli"}},Lt=At,Ft=a("e0c7"),Ht=Object(l["a"])(Lt,Ct,jt,!1,null,null,null),Bt=Ht.exports;m()(Ht,{VCol:N["a"],VRow:k["a"],VSubheader:Ft["a"]});var Rt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-row",[t._l(t.imgs,(function(e,n){return a("v-col",{key:n,staticClass:"d-flex child-flex",attrs:{sm:"12",md:"4",lg:"3"},on:{click:function(){return t.showImg(n)}}},[a("v-hover",{scopedSlots:t._u([{key:"default",fn:function(n){var i=n.hover;return[a("v-card",{class:{"on-hover":i},attrs:{elevation:i?12:2,rounded:"xl"}},[a("v-responsive",[a("v-card",{staticClass:"mx-auto pa-4",attrs:{rounded:"xl"}},[a("v-img",{staticClass:"rounded-xl",attrs:{src:e},on:{click:t.showMultiple}})],1)],1)],1)]}}],null,!0)})],1)})),a("v-col",[a("v-col",{attrs:{sm:"12",md:"4",lg:"3"}},[a("vue-easy-lightbox",{attrs:{visible:t.visible,imgs:t.imgs,index:t.index},on:{hide:t.handleHide}})],1)],1)],2)},Kt=[],qt=a("825ae"),Nt={components:{VueEasyLightbox:qt["a"]},data:function(){return{transparent:"rgba(255, 255, 255, 0)",imgs:[{title:"Online Food Ordering (https://online.saffroncottages.com.au/)",src:a("6d60")},{title:"Garjoo Classified (http://garjoonepal.com/)",src:a("c8cc")},{title:"Hospial Meriaamai Delivery System (https://meriaamai.org/)",src:a("9ea6")},{title:"Telemedicine (https://telemedicine.akt.com.np/)",src:a("772e")},{title:"Government Telemedicine (http://103.140.1.125/)",src:a("6bbe")},{title:"Single Vendor Ecommerce (https://ecommerce.anilkumarthakur.com.np/)",src:a("9c61")},{title:"Medmax Erp (https://erp.medmax.com.np/auth/login)",src:a("7251")},{title:"MedMax Innovation Pvt Ltd (https://www.medmaxinnovation.com/)",src:a("484e")},{title:"Medmax Pharmacy (https://medmax.com.np/s)",src:a("6d6d")},{title:"Samana Media (https://www.samanamedia.com/)",src:a("dc48")},{title:"Blog CMS using laravel ,Bootstrap ",src:a("2db5")},{title:"Visit Nepal HTMl CSS JS (https://anilkumarthakur60.github.io/Visit-Nepal-2020-front-end-/)",src:a("4292")},{title:"Video Conferencing",src:a("ea1f")},{title:"Calculator using HTML and Javascript (https://anilkumarthakur60.github.io/calculator/)",src:a("8758")}],visible:!1,index:0}},methods:{showImg:function(t){this.index=t,this.visible=!0},showMultiple:function(){this.index=0,this.show()},show:function(){this.visible=!0},handleHide:function(){this.visible=!1}},mounted:function(){document.title="Er. Anil Kumar Thakur | My Gallery"}},Wt=Nt,zt=a("6b53"),Jt=Object(l["a"])(Wt,Rt,Kt,!1,null,null,null),Gt=Jt.exports;m()(Jt,{VCard:Et["a"],VCol:N["a"],VHover:Pt["a"],VImg:ft["a"],VResponsive:zt["a"],VRow:k["a"]});var Ut=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._m(0),t._m(1),n("v-row",[n("v-col",{attrs:{sm:"12",md:"4",lg:"4"}},[n("v-hover",{scopedSlots:t._u([{key:"default",fn:function(e){var i=e.hover;return[n("v-card",{staticClass:"pb-5 pa-4 rounded-xl",class:{"on-hover":i},attrs:{elevation:i?12:2}},[n("v-img",{staticClass:"rounded-xl mb-5",attrs:{src:a("0dbb")}}),n("div",{staticClass:"text-h4 mt-5"},[t._v("Er. Anil Kumar Thakur")]),n("div",{staticClass:"text-h6 red--text"},[t._v("Full Stack Web Developer")]),n("div",{staticClass:"text-subtitle-2 mt-5"},[t._v(" I am available for freelance work. Please connect me with detail below. ")]),n("div",{staticClass:"text-subtitle-2 mt-5"},[t._v(" Phone: "),n("span",{staticClass:"red--text"},[t._v("+977-9808711001")])]),n("div",{staticClass:"text-subtitle-2 mt-5"},[t._v(" Email: "),n("v-btn",{staticClass:"text-lowercase",attrs:{text:!0,plain:"",href:"mailto:anilkumarthakur60@gmail.com"}},[t._v("anilkumarthakur60@gmail.com")])],1)],1)]}}])})],1),n("v-col",{staticClass:"mb-sm-5",attrs:{sm:"12",lg:"8",md:"8"}},[n("v-hover",{scopedSlots:t._u([{key:"default",fn:function(t){var e=t.hover;return[n("v-card",{staticClass:"pb-5 pa-4 rounded-xl",class:{"on-hover":e},attrs:{elevation:e?12:2}},[n("forms")],1)]}}])})],1)],1)],1)},Yt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{},[a("h6",{staticClass:"text-sm-h6 d-flex justify-center font-weight-bold text-lg-h5"},[t._v(" CONTACT ")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"text-justify my-2"},[a("h6",{staticClass:"text-sm-h5 text-center font-weight-bold text-lg-h4"},[t._v(" Contact With Me ")])])}],Qt=(a("d3b7"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("validation-observer",{ref:"observer",scopedSlots:t._u([{key:"default",fn:function(e){var n=e.invalid;return[a("form",{on:{submit:function(e){return e.preventDefault(),t.submit.apply(null,arguments)}}},[a("validation-provider",{attrs:{name:"Name",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.errors;return[a("v-text-field",{staticClass:"my-lg-6 my-md-4 my-sm-2",attrs:{outlined:"","auto-grow":"",color:"primary","error-messages":n,label:"Name",required:""},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})]}}],null,!0)}),a("validation-provider",{attrs:{name:"phone",rules:{required:!0,min:8,max:17}},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.errors;return[a("v-text-field",{staticClass:"my-lg-6 my-md-4 my-sm-2",attrs:{outlined:"","auto-grow":"",color:"primary",counter:14,"error-messages":n,label:"Phone Number",name:"phone",required:""},model:{value:t.form.phone,callback:function(e){t.$set(t.form,"phone",e)},expression:"form.phone"}})]}}],null,!0)}),a("validation-provider",{attrs:{name:"email",rules:"required|email"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.errors;return[a("v-text-field",{staticClass:"my-lg-6 my-md-4 my-sm-2",attrs:{outlined:"","auto-grow":"",color:"primary","error-messages":n,label:"E-mail",required:""},model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}})]}}],null,!0)}),a("validation-provider",{attrs:{name:"message",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.errors;return[a("v-textarea",{attrs:{outlined:"","auto-grow":"",counter:"",color:"primary","error-messages":n,label:"Message",required:""},model:{value:t.form.message,callback:function(e){t.$set(t.form,"message",e)},expression:"form.message"}})]}}],null,!0)}),a("div",{staticClass:"my-lg-6 my-md-4 my-sm-2"},[a("v-btn",{staticClass:"mr-4",attrs:{type:"submit",disabled:n}},[t._v(" submit ")]),a("v-btn",{on:{click:t.clear}},[t._v(" clear ")])],1)],1)]}}])})}),Zt=[],Xt=a("5530"),te=(a("b0c0"),a("bc3a")),ee=a.n(te),ae=a("4c93"),ne=a("7bb1");Object(ne["d"])("eager"),Object(ne["c"])("digits",Object(Xt["a"])(Object(Xt["a"])({},ae["a"]),{},{message:"{_field_} needs to be {length} digits. ({_value_})"})),Object(ne["c"])("required",Object(Xt["a"])(Object(Xt["a"])({},ae["f"]),{},{message:"{_field_} can not be empty"})),Object(ne["c"])("max",Object(Xt["a"])(Object(Xt["a"])({},ae["c"]),{},{message:"{_field_} may not be greater than {length} characters"})),Object(ne["c"])("min",Object(Xt["a"])(Object(Xt["a"])({},ae["d"]),{},{message:"{_field_} may not be smaller than {length} characters"})),Object(ne["c"])("regex",Object(Xt["a"])(Object(Xt["a"])({},ae["e"]),{},{message:"{_field_} {_value_} does not match {regex}"})),Object(ne["c"])("email",Object(Xt["a"])(Object(Xt["a"])({},ae["b"]),{},{message:"Email must be valid"}));var ie={name:"Forms",components:{ValidationProvider:ne["b"],ValidationObserver:ne["a"]},data:function(){return{form:{name:null,email:null,phone:null,message:null}}},methods:{submit:function(){var t=this;this.$refs.observer.validate(),ee.a.post("https://matrixaccount.herokuapp.com/api/messages",this.form).then((function(e){t.$swal("Thank you for contacting me!",e.data.success,"success"),t.clear()})).catch((function(e){console.log("error",e),t.$swal("Error Occured",e,"error")})).finally((function(){return t.loading=!1}))},clear:function(){this.form.name="",this.form.phone="",this.form.email="",this.form.message="",this.$refs.observer.reset()}}},oe=ie,re=a("8654"),se=a("a844"),le=Object(l["a"])(oe,Qt,Zt,!1,null,null,null),ce=le.exports;m()(le,{VBtn:q["a"],VTextField:re["a"],VTextarea:se["a"]});var me={components:{Forms:ce},name:"Contact",mounted:function(){document.title="Er.Anil Kumar Thakur | Contact Me "},methods:{alertDisplay:function(){this.$swal("Heading","this is a Heading","OK")},submitForm:function(){var t=this;ee.a.post("http://127.0.0.1:8000/api/messages",this.form).then((function(e){console.log(e),t.$swal("Heading",e.success,"OK")})).catch((function(e){console.log(e),t.errored=!0})).finally((function(){return t.loading=!1}))}},data:function(){return{form:{name:null,email:null,phone:null,message:null}}}},ue=me,de=Object(l["a"])(ue,Ut,Yt,!1,null,null,null),pe=de.exports;m()(de,{VBtn:q["a"],VCard:Et["a"],VCol:N["a"],VHover:Pt["a"],VImg:ft["a"],VRow:k["a"]});var fe=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-row",[a("v-col",{attrs:{sm:"12"}},[a("v-subheader",{staticClass:"justify-center"},[t._v("VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK")]),a("div",{staticClass:"text-h5 text-center font-weight-bold"},[t._v("My Portfolio")])],1),a("v-col",[a("div",[a("div",{staticClass:"\n          justify-center\n          font-weight-bold\n          text-lg-h5 text-md-h5 text-sm-h5\n        "}),a("v-row",t._l(t.whatidolists,(function(t){return a("what-i-do",{key:t.name,attrs:{name:t.name,image:t.image,text:t.text}})})),1)],1)])],1)},ve=[],he=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-col",{staticClass:"d-flex child-flex",attrs:{lg:"3",md:"3",sm:"12"}},[a("v-hover",{scopedSlots:t._u([{key:"default",fn:function(e){var n=e.hover;return[a("v-card",{staticClass:"mx-auto rounded-xl",class:{"on-hover":n},attrs:{elevation:n?12:2}},[a("v-img",{staticClass:"rounded-xl",attrs:{src:t.image}},[a("v-expand-transition",[n?a("div",{staticClass:"\n              d-flex\n              transition-fast-in-fast-out\n              orange\n              darken-2\n              v-card--reveal\n              text-h2\n              white--text\n            ",staticStyle:{height:"100%"}},[a("v-img",{staticClass:"rounded-xl",attrs:{src:t.image}})],1):t._e()])],1),a("v-card-text",{staticClass:"pt-6",staticStyle:{position:"relative"}},[a("h3",{staticClass:"text-h5 font-weight mb-2"},[t._v(" "+t._s(t.name)+" ")]),a("div",{staticClass:"text-justify text-subtitle-2 mb-2"},[t._v(" "+t._s(t.text)+" ")])])],1)]}}])})],1)},ge=[],be={name:"WhatIDo",props:["name","image","text"]},xe=be,ye=(a("954a"),Object(l["a"])(xe,he,ge,!1,null,null,null)),we=ye.exports;m()(ye,{VCard:Et["a"],VCardText:Mt["b"],VCol:N["a"],VExpandTransition:It["a"],VHover:Pt["a"],VImg:ft["a"]});var _e={components:{WhatIDo:we},name:"Feature",data:function(){return{whatidolists:[{name:"Front End",image:a("f936"),text:"Frontend Developer  with 2  years experience building and maintaining responsive websites . Proficient in  modern web technology and frameworks like Vue js, Inertia JS ,Bootstrap ,Vuetify."},{name:"Backend",image:a("bdf1"),text:"Backend Developer with 2 year experience in  industry. Analyze requirement, processes, and codes to troubleshoot problems and identify areas for improvement also taking lead on projects as needed."},{name:"Project Management",image:a("5928"),text:"Managed project plan and Worked closely with management on assigned projects from inception through implementation to ensure adequate internal communication between end user and developerd."},{name:"Database Design",image:a("a27e"),text:"Relational Database design for small to large scale project. Maintaining and enhancing the performance of existing database. Optimize database systems for performance and reliability. "}]}},mounted:function(){document.title="Er. Anil Kumar Thakur | Feature"}},ke=_e,Ce=Object(l["a"])(ke,fe,ve,!1,null,null,null),je=Ce.exports;m()(Ce,{VCol:N["a"],VRow:k["a"],VSubheader:Ft["a"]}),n["a"].use(D["a"]);var Ve=[{path:"/",name:"Home",component:gt},{path:"/about-me",name:"About",component:kt},{path:"/portfolio",name:"Portfolio",component:Bt},{path:"/gallery",name:"Gallery",component:Gt},{path:"/contact-me",name:"Contact",component:pe},{path:"/feature",name:"Feature",component:je}],Se=new D["a"]({routes:Ve,mode:"history"}),Oe=Se,Te=a("f2ff"),Ee=a("f9d5"),Me=a.n(Ee);a("4413");n["a"].use(Me.a),n["a"].use(Te["a"]),n["a"].config.productionTip=!1,n["a"].mixin({data:function(){return{apiUrl:"http://127.0.0.1:8000/api/"}}}),new n["a"]({vuetify:P,router:Oe,render:function(t){return t(M)}}).$mount("#app")},5928:function(t,e,a){t.exports=a.p+"img/projectmanagement.7134660b.jpg"},5933:function(t,e,a){"use strict";a("8f84")},"6bbe":function(t,e,a){t.exports=a.p+"img/telemed.9c3cc168.png"},"6d60":function(t,e,a){t.exports=a.p+"img/saffroncottages.121e52cd.png"},"6d6d":function(t,e,a){t.exports=a.p+"img/medmaxchain.a91e27aa.jpg"},7251:function(t,e,a){t.exports=a.p+"img/medmaxerp.5d8f63f7.png"},"772e":function(t,e,a){t.exports=a.p+"img/videochat.a8702f05.jpg"},"79a0":function(t,e,a){},"85ec":function(t,e,a){},8758:function(t,e,a){t.exports=a.p+"img/calculator.9bf23233.jpg"},"8f84":function(t,e,a){},"954a":function(t,e,a){"use strict";a("346f")},"9c61":function(t,e,a){t.exports=a.p+"img/ecoomerce.684b2ea1.jpg"},"9ea6":function(t,e,a){t.exports=a.p+"img/meriaamai.2cfec2eb.jpg"},a27e:function(t,e,a){t.exports=a.p+"img/database.bf264cb3.png"},bdf1:function(t,e,a){t.exports=a.p+"img/backend.7c6f44f9.webp"},c8cc:function(t,e,a){t.exports=a.p+"img/garjoonepal.9e12a521.png"},dc48:function(t,e,a){t.exports=a.p+"img/samananews.95f4d923.png"},ea1f:function(t,e,a){t.exports=a.p+"img/htmlportfolio.e7212034.jpg"},f0fd:function(t,e,a){"use strict";a("36fb")},f936:function(t,e,a){t.exports=a.p+"img/frontend.bd8ea473.svg"},fe4b:function(t,e,a){"use strict";a("79a0")}});
//# sourceMappingURL=app.3c66bce5.js.map