(function(e){function t(t){for(var n,s,o=t[0],l=t[1],c=t[2],u=0,d=[];u<o.length;u++)s=o[u],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&d.push(r[s][0]),r[s]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);m&&m(t);while(d.length)d.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var e,t=0;t<i.length;t++){for(var a=i[t],n=!0,o=1;o<a.length;o++){var l=a[o];0!==r[l]&&(n=!1)}n&&(i.splice(t--,1),e=s(s.s=a[0]))}return e}var n={},r={app:0},i=[];function s(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=e,s.c=n,s.d=function(e,t,a){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(a,n,function(t){return e[t]}.bind(null,n));return a},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var m=l;i.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"034f":function(e,t,a){"use strict";a("85ec")},"0dbb":function(e,t,a){e.exports=a.p+"img/anil.a3e98267.jpg"},"2db5":function(e,t,a){e.exports=a.p+"img/blog.d6a5fe9b.jpg"},"346f":function(e,t,a){},4292:function(e,t,a){e.exports=a.p+"img/visitnepal.3477aa97.jpg"},"484e":function(e,t,a){e.exports=a.p+"img/medmax.d626cf97.jpg"},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",{attrs:{id:"inspire"}},[a("v-navigation-drawer",{attrs:{app:"",relative:"",left:"",temporary:""},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[a("v-list-item",[a("v-list-item-content",[a("v-list-item-title",{staticClass:"text-h6 text-center"},[e._v(" Er. Anil Kumar Thakur ")]),a("v-list-item-subtitle",{staticClass:"text-center"},[e._v(" Full Stack Developer ")])],1)],1),a("v-divider"),a("v-list",{attrs:{dense:"",nav:""}},e._l(e.items,(function(t){return a("v-list-item",{key:t.title,attrs:{link:"",to:t.to}},[a("v-list-item-icon",[a("v-icon",[e._v(e._s(t.icon))])],1),a("v-list-item-content",[a("v-list-item-title",[e._v(e._s(t.title))])],1)],1)})),1)],1),a("v-app-bar",{attrs:{app:""}},[a("v-app-bar-nav-icon",{on:{click:function(t){e.drawer=!e.drawer}}}),a("v-toolbar-title"),a("v-spacer"),a("v-switch",{staticClass:"mt-5",attrs:{inset:"","persistent-hint":""},model:{value:e.$vuetify.theme.dark,callback:function(t){e.$set(e.$vuetify.theme,"dark",t)},expression:"$vuetify.theme.dark"}})],1),a("v-main",[a("v-container",[a("router-view")],1)],1)],1)},i=[],s={data:function(){return{drawer:null,items:[{title:"Home",icon:"mdi-home",to:"/"},{title:"Feature",icon:"mdi-star-circle",to:"/feature"},{title:"Portfolio",icon:"mdi-face-man-profile",to:"/portfolio"},{title:"About Me",icon:"mdi-information-variant",to:"/about-me"},{title:"Gallery",icon:"mdi-view-gallery-outline",to:"/gallery"},{title:"Contact Me",icon:"mdi-card-account-phone",to:"/contact-me"}],right:null}}},o=s,l=(a("034f"),a("2877")),c=a("6544"),m=a.n(c),u=a("7496"),d=a("40dc"),v=a("5bc1"),f=a("a523"),p=a("ce7e"),h=a("132d"),g=a("8860"),b=a("da13"),x=a("5d23"),y=a("34c3"),_=a("f6c4"),w=a("f774"),C=a("2fa4"),k=a("b73d"),j=a("2a7f"),V=Object(l["a"])(o,r,i,!1,null,null,null),O=V.exports;m()(V,{VApp:u["a"],VAppBar:d["a"],VAppBarNavIcon:v["a"],VContainer:f["a"],VDivider:p["a"],VIcon:h["a"],VList:g["a"],VListItem:b["a"],VListItemContent:x["a"],VListItemIcon:y["a"],VListItemSubtitle:x["b"],VListItemTitle:x["c"],VMain:_["a"],VNavigationDrawer:w["a"],VSpacer:C["a"],VSwitch:k["a"],VToolbarTitle:j["a"]});var S=a("f309");n["a"].use(S["a"]);var I=new S["a"]({}),T=a("8c4f"),E=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-row",[n("v-col",{attrs:{lg:"6",md:"12",sm:"12"}},[n("v-layout",{attrs:{row:"",wrap:"","align-center":"",bg:"","fill-height":"","grid-list-md":"","text-xs-center":""}},[n("v-flex",[n("h3",{staticClass:"my-3 font-weight-regular text-subtitle-2",staticStyle:{"letter-spacing":"1px !important"}},[e._v(" WELCOME TO MY WORLD ")]),n("h3",{staticClass:"font-weight-bold text-h4 mt-5"},[e._v(" Hi, I'm Anil Kumar Thakur ")]),n("h3",{staticClass:"font-weight-bold text-h4 mb-5"},[n("text-type")],1),n("v-row",{staticClass:"mt-16"},[n("social-media"),n("best-skill")],1)],1)],1)],1),n("v-col",{staticClass:"mt-lg-8",attrs:{lg:"6",md:"12",sm:"12","order-md":"12","order-sm":"12"}},[n("v-layout",{attrs:{row:"",wrap:"","align-center":"",bg:"","fill-height":"","grid-list-md":"","text-xs-center":""}},[n("v-flex",[n("v-img",{attrs:{src:a("0dbb")}})],1)],1)],1)],1)},M=[],A=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-col",{staticClass:"mt-lg-5",attrs:{lg:"12",md:"12",sm:"12"}},[a("v-row",{staticClass:"justify-center"},[a("h6",{staticClass:"text-center"},[e._v("BEST SKILL ON")])]),a("v-row",{staticClass:"justify-center"},e._l(e.icons,(function(e,t){return a("best-skill-list",{key:t,attrs:{colorname:e.colorname,iconname:e.iconname}})})),1)],1)},P=[],$=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-col",{attrs:{lg:"1",md:"1",sm:"1"}},[a("v-btn",{staticClass:"px-1",attrs:{icon:"",href:e.href,target:"_blank"}},[a("v-icon",{attrs:{color:e.colorname}},[e._v(e._s(e.iconname))])],1)],1)},D=[],N={name:"BestSkillList",props:["colorname","iconname","href"]},L=N,B=a("8336"),F=a("62ad"),R=Object(l["a"])(L,$,D,!1,null,null,null),H=R.exports;m()(R,{VBtn:B["a"],VCol:F["a"],VIcon:h["a"]});var q={components:{BestSkillList:H},name:"BestSkill",data:function(){return{icons:[{colorname:"red",iconname:"mdi-laravel"},{colorname:"green",iconname:"mdi-vuejs"},{colorname:"indigo",iconname:"mdi-bootstrap"},{colorname:"primary",iconname:"mdi-jquery"},{colorname:"amber",iconname:"mdi-language-javascript"},{colorname:"indigo accent-4",iconname:"mdi-language-css3"}]}}},K=q,W=a("0fd9"),z=Object(l["a"])(K,A,P,!1,null,null,null),G=z.exports;m()(z,{VCol:F["a"],VRow:W["a"]});var J=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-col",{attrs:{lg:"12",md:"12",sm:"12"}},[a("v-row",{staticClass:"justify-center"},[a("h6",{staticClass:"text-center "},[e._v("FIND WITH ME")])]),a("v-row",{staticClass:"justify-center"},e._l(e.icons,(function(e,t){return a("best-skill-list",{key:t,attrs:{colorname:e.colorname,href:e.href,iconname:e.iconname}})})),1)],1)},U=[],Y={components:{BestSkillList:H},name:"SocialMedia",data:function(){return{icons:[{href:"https://github.com/anilkumarthakur60",colorname:"grey darken-4",iconname:"mdi-github"},{href:"https://www.facebook.com/anilkumarthakur60",colorname:"primary",iconname:"mdi-facebook"},{href:"https://twitter.com/kumaranil60",colorname:"primary",iconname:"mdi-twitter"},{href:"https://www.instagram.com/anilkumarthakur60/",colorname:"red",iconname:"mdi-instagram"},{href:"https://www.linkedin.com/in/anil-kumar-thakur-489724129/",colorname:"primary",iconname:"mdi-linkedin"},{href:"mailto:anilkumarthakur60@gmail.com",colorname:"grey darken-4",iconname:"mdi-email"}]}}},X=Y,Z=Object(l["a"])(X,J,U,!1,null,null,null),Q=Z.exports;m()(Z,{VCol:F["a"],VRow:W["a"]});var ee=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("vue-typer",{attrs:{text:["Full Stack Developer","Professional Coder"],repeat:1/0,shuffle:!1,"initial-action":"typing","pre-type-delay":70,"type-delay":70,"pre-erase-delay":2e3,"erase-delay":250,"erase-style":"clear","erase-on-complete":!1,"caret-animation":"smooth"}})},te=[],ae=a("e956"),ne={name:"TextType",components:{VueTyper:ae["VueTyper"]}},re=ne,ie=(a("fe4b"),Object(l["a"])(re,ee,te,!1,null,null,null)),se=ie.exports,oe={components:{TextType:se,BestSkill:G,SocialMedia:Q},name:"Home",mounted:function(){document.title="Er.Anil Kumar Thakur | Home"}},le=oe,ce=a("0e8f"),me=a("adda"),ue=a("a722"),de=Object(l["a"])(le,E,M,!1,null,null,null),ve=de.exports;m()(de,{VCol:F["a"],VFlex:ce["a"],VImg:me["a"],VLayout:ue["a"],VRow:W["a"]});var fe=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-row",[n("v-col",{attrs:{lg:"6",md:"6",sm:"12"}},[n("v-img",{attrs:{src:a("0dbb")}})],1),n("v-col",{attrs:{lg:"6",md:"6",sm:"12"}},[n("h3",{staticClass:"font-weight-bold text-sm-h3 text-lg-h4 text-md-h3 my-5"},[e._v(" About Me ")]),n("h5",{staticClass:"font-weight-bold text-sm-h5 text-lg-h5 text-md-h5 my-5"},[e._v(" Creative Software Developer based in Kathmandu, Nepal ")]),n("p",{staticClass:"text-justify font-weight-medium"},[e._v(" I'm Web Developer, and very passionate and dedicated to my work. With 1year plus years experience as a professional web developer, I have acquired the skills and knowledge necessary to make your project a success. I enjoy every step of the design process, from discussion and collaboration. "),n("br"),n("br"),e._v(" I design and develop services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores. My passion is to design digital user experiences through the bold interface and meaningful interactions. Check out my Portfolio ")]),n("div",{staticClass:"d-flex"},[n("v-icon",{staticClass:"mr-4",attrs:{color:"success "}},[e._v("mdi-check-all")]),n("p",[e._v("Helping with the design and development of web application")])],1),n("div",{staticClass:"d-flex"},[n("v-icon",{staticClass:"mr-4",attrs:{color:"success "}},[e._v("mdi-check-all")]),n("p",[e._v("Testing and debugging software to keep it optimized")])],1),n("div",{staticClass:"d-flex"},[n("v-icon",{staticClass:"mr-4",attrs:{color:"success "}},[e._v("mdi-check-all")]),n("p",[e._v("Writing clean code for the front and back end for reusability")])],1),n("div",{staticClass:"d-flex"},[n("v-icon",{staticClass:"mr-4",attrs:{color:"success "}},[e._v("mdi-check-all")]),n("p",[e._v("Developing APIs and RESTful services")])],1),n("div",{staticClass:"d-flex"},[n("v-icon",{staticClass:"mr-4",attrs:{color:"success "}},[e._v("mdi-check-all")]),n("p",[e._v(" Considering security, maintenance, scalability, and more when developing ")])],1),n("v-btn",{attrs:{color:"success",href:"https://drive.google.com/file/d/1IcK62u-Mvrwk_RMawI0d_XZ8GlkBALUn/view?usp=sharing",target:"_blank"}},[e._v(" Download My Resume ")])],1)],1)},pe=[],he={name:"About",mounted:function(){document.title="Er.Anil Kumar Thakur| About Me"}},ge=he,be=Object(l["a"])(ge,fe,pe,!1,null,null,null),xe=be.exports;m()(be,{VBtn:B["a"],VCol:F["a"],VIcon:h["a"],VImg:me["a"],VRow:W["a"]});var ye=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-row",{attrs:{justify:"center"}},[a("v-col",{staticClass:"text-center"},[a("v-subheader",{staticClass:"justify-center"},[e._v("VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK")]),a("div",{staticClass:"justify-center font-weight-bold text-lg-h4 text-md-h3 text-sm-h3"},[e._v(" My Portfolio ")]),a("v-row",{staticClass:"mt-6"},e._l(e.portfoliolists,(function(e,t){return a("portfolio-list",{key:t,attrs:{name:e.name,image:e.image,text:e.text}})})),1)],1)],1)},_e=[],we=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-col",{staticClass:"d-flex child-flex",attrs:{lg:"4",md:"6",sm:"12"}},[a("v-hover",{scopedSlots:e._u([{key:"default",fn:function(t){var n=t.hover;return[a("v-card",{class:{"on-hover":n},attrs:{elevation:n?12:2,rounded:"xl"}},[a("v-img",{staticClass:"rounded-xl",attrs:{src:e.image}}),a("v-card-title",{},[a("h1",{staticClass:"red--text text-h5 text-left ml-4 my-5"},[e._v(e._s(e.name))])]),a("v-card-actions",{staticClass:"card-actions"},[a("v-btn",{attrs:{text:"",color:"teal accent-4"},on:{click:function(t){e.reveal=!0}}},[e._v(" Explore ")])],1),a("v-expand-transition",[e.reveal?a("v-card",{staticClass:"transition-fast-in-fast-out v-card--reveal",staticStyle:{height:"100%"},attrs:{rounded:"xl"}},[a("v-card-text",{staticClass:"pb-0"},[a("p",{staticClass:"text-justify text-subtitle-2 px-4 pb-5"},[e._v(e._s(e.text))])]),a("v-card-actions",{staticClass:"pt-0 card-actions"},[a("v-btn",{attrs:{text:"",color:"teal accent-4"},on:{click:function(t){e.reveal=!1}}},[a("v-icon",[e._v("mdi-window-close")])],1)],1)],1):e._e()],1)],1)]}}])})],1)},Ce=[],ke={name:"PortfolioList",props:["name","image","text"],data:function(){return{reveal:!1}}},je=ke,Ve=(a("5933"),a("b0af")),Oe=a("99d9"),Se=a("0789"),Ie=a("ce87"),Te=Object(l["a"])(je,we,Ce,!1,null,null,null),Ee=Te.exports;m()(Te,{VBtn:B["a"],VCard:Ve["a"],VCardActions:Oe["a"],VCardText:Oe["b"],VCardTitle:Oe["c"],VCol:F["a"],VExpandTransition:Se["a"],VHover:Ie["a"],VIcon:h["a"],VImg:me["a"]});var Me={components:{PortfolioList:Ee},name:"Portfolio",data:function(){return{portfoliolists:[{name:"Video Conferencing App",image:a("772e"),text:"One to One Video call for the conferencing system for counseling. Build with laravel as backend and vuejs as frontend ,Bootstrap for the UI design . Anyone willing to have counseling have to pay first through esewa and then only he can have conferencing with that agency."},{name:"Delivery Report Systerm",image:a("9ea6"),text:"This system helps to manage the information related to health care and aids in the job completion of health care providers effectively. They manage the data related to all departments of healthcare such as, creative problem solving. Analyze data, and processes."},{name:"SingleEcommerce System",image:a("9c61"),text:"E-commerce Management System will primarily provide a platform to purchase, sell, distribution of items, product  through the internet. The E-commerce Management System will be a huge marketplace as most of the business are going  based on the internet"},{name:"Medmax Innovation Pvt Ltd",image:a("484e"),text:"Medmax Innovation is an emerging IT company best known for good service quality and cost effective packages. They are about customer satisfaction rather than our earning. They believe in earning respect and trust is more valuable than earning money. "},{name:"Medmax Medical Holesale",image:a("6d6d"),text:"Med Max pvt. Ltd. is a Nepal based Medical Holsale & Clinical Chain company with established 2075. They vigorous Health related solutions, using the latest System tools and incorporating products in our service areas. "},{name:"Content Management System",image:a("2db5"),text:"content management system (CMS) is an application that is used to manage web content, allowing multiple contributors to create, edit and publish. Content in a CMS is typically stored in a database and displayed in a presentation layer based on a set of templates."}]}},mounted:function(){document.title="Er.Anil Kumar Thakur | My Portfoli"}},Ae=Me,Pe=a("e0c7"),$e=Object(l["a"])(Ae,ye,_e,!1,null,null,null),De=$e.exports;m()($e,{VCol:F["a"],VRow:W["a"],VSubheader:Pe["a"]});var Ne=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-row",[e._l(e.imgs,(function(t){return a("v-col",{key:t,staticClass:"d-flex child-flex",attrs:{sm:"12",md:"4",lg:"4"}},[a("v-hover",{scopedSlots:e._u([{key:"default",fn:function(n){var r=n.hover;return[a("v-card",{class:{"on-hover":r},attrs:{elevation:r?12:2,rounded:"xl"}},[a("v-responsive",[a("v-card",{staticClass:"mx-auto pa-4",attrs:{rounded:"xl"}},[a("v-img",{staticClass:"rounded-xl",attrs:{src:t},on:{click:e.showMultiple}})],1)],1)],1)]}}],null,!0)})],1)})),a("v-col",[a("v-col",{attrs:{sm:"12",md:"4",lg:"3"}},[a("vue-easy-lightbox",{attrs:{visible:e.visible,imgs:e.imgs,index:e.index},on:{hide:e.handleHide}})],1)],1)],2)},Le=[],Be=a("825ae"),Fe={components:{VueEasyLightbox:Be["a"]},data:function(){return{transparent:"rgba(255, 255, 255, 0)",imgs:[a("9ea6"),a("772e"),a("9c61"),a("484e"),a("6d6d"),a("2db5"),a("4292"),a("ea1f"),a("8758")],visible:!1,index:0}},methods:{showSingle:function(){this.imgs={title:"this is a placeholder",src:"https://i.loli.net/2018/11/10/5be6852dec46e.jpeg"},this.show()},showMultiple:function(){this.index=0,this.show()},show:function(){this.visible=!0},handleHide:function(){this.visible=!1}},mounted:function(){document.title="Er.Anil Kumar Thakur | My Gallery"}},Re=Fe,He=a("6b53"),qe=Object(l["a"])(Re,Ne,Le,!1,null,null,null),Ke=qe.exports;m()(qe,{VCard:Ve["a"],VCol:F["a"],VHover:Ie["a"],VImg:me["a"],VResponsive:He["a"],VRow:W["a"]});var We=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{},[e._m(0),e._m(1),n("v-row",[n("v-col",{attrs:{sm:"12",md:"4",lg:"4"}},[n("v-hover",{scopedSlots:e._u([{key:"default",fn:function(t){var r=t.hover;return[n("v-card",{staticClass:"pb-5 pa-4 rounded-xl",class:{"on-hover":r},attrs:{elevation:r?12:2}},[n("v-img",{staticClass:"rounded-xl mb-5",attrs:{src:a("0dbb")}}),n("div",{staticClass:"text-h4 mt-5"},[e._v("Anil Kumar Thakur")]),n("div",{staticClass:"text-h6 red--text"},[e._v("Full Stack Developer")]),n("div",{staticClass:"text-subtitle-2 mt-5"},[e._v(" I am available for freelance work. Connect with me via and call in to my account. ")]),n("div",{staticClass:"text-subtitle-2 mt-5"},[e._v(" Phone: "),n("span",{staticClass:"red--text"},[e._v("+977-9808711001")])]),n("div",{staticClass:"text-subtitle-2 mt-5"},[e._v(" Email: "),n("v-btn",{staticClass:"text-lowercase",attrs:{text:!0,plain:"",href:"mailto:anilkumarthakur60@gmail.com"}},[e._v("anilkumarthakur60@gmail.com")])],1)],1)]}}])})],1),n("v-col",{attrs:{sm:"12",lg:"8",md:"8"}},[n("v-card",{staticClass:"pa-5",attrs:{rounded:"lg"}},[n("forms")],1)],1)],1)],1)},ze=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"text-justify my-5"},[a("h6",{staticClass:"text-sm-h6 text-center font-weight-bold text-lg-h5"},[e._v(" CONTACT ")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"text-justify my-4"},[a("h6",{staticClass:"text-sm-h5 text-center font-weight-bold text-lg-h4"},[e._v(" Contact With Me ")])])}],Ge=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("validation-observer",{ref:"observer",scopedSlots:e._u([{key:"default",fn:function(t){var n=t.invalid;return[a("form",{on:{submit:function(t){return t.preventDefault(),e.submit.apply(null,arguments)}}},[a("validation-provider",{attrs:{name:"Name",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.errors;return[a("v-text-field",{staticClass:"my-lg-6 my-md-4 my-sm-2",attrs:{outlined:"","auto-grow":"",color:"primary","error-messages":n,label:"Name",required:""},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}})]}}],null,!0)}),a("validation-provider",{attrs:{name:"phoneNumber",rules:{required:!0,min:8,max:13,digits:8,regex:"/^(?:+977|0977)?-?(?:(?:(?:98|97)-?d{8})|(?:01-?d{7})|(?:0d{2}-?d{6}))$/"}},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.errors;return[a("v-text-field",{staticClass:"my-lg-6 my-md-4 my-sm-2",attrs:{outlined:"","auto-grow":"",color:"primary",counter:13,"error-messages":n,label:"Phone Number",name:"phone number",required:""},model:{value:e.phoneNumber,callback:function(t){e.phoneNumber=t},expression:"phoneNumber"}})]}}],null,!0)}),a("validation-provider",{attrs:{name:"phoneNumber",rules:"required|"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.errors;return[a("v-text-field",{staticClass:"my-lg-6 my-md-4 my-sm-2",attrs:{outlined:"","auto-grow":"",color:"primary","error-messages":n,label:"phoneNumber",rules:{required:!0,min:8,max:13,digits:13}},model:{value:e.phoneNumber,callback:function(t){e.phoneNumber=t},expression:"phoneNumber"}})]}}],null,!0)}),a("validation-provider",{attrs:{name:"email",rules:"required|email"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.errors;return[a("v-text-field",{staticClass:"my-lg-6 my-md-4 my-sm-2",attrs:{outlined:"","auto-grow":"",color:"primary","error-messages":n,label:"E-mail",required:""},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}})]}}],null,!0)}),a("validation-provider",{attrs:{name:"message",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.errors;return[a("v-textarea",{attrs:{outlined:"","auto-grow":"",color:"primary","error-messages":n,label:"Message",required:""},model:{value:e.message,callback:function(t){e.message=t},expression:"message"}})]}}],null,!0)}),a("div",{staticClass:"my-lg-6 my-md-4 my-sm-2"},[a("v-btn",{staticClass:"mr-4",attrs:{type:"submit",disabled:n}},[e._v(" submit ")]),a("v-btn",{on:{click:e.clear}},[e._v(" clear ")])],1)],1)]}}])})},Je=[],Ue=a("5530"),Ye=(a("b0c0"),a("4c93")),Xe=a("7bb1");Object(Xe["d"])("eager"),Object(Xe["c"])("digits",Object(Ue["a"])(Object(Ue["a"])({},Ye["a"]),{},{message:"{_field_} needs to be {length} digits. ({_value_})"})),Object(Xe["c"])("required",Object(Ue["a"])(Object(Ue["a"])({},Ye["f"]),{},{message:"{_field_} can not be empty"})),Object(Xe["c"])("max",Object(Ue["a"])(Object(Ue["a"])({},Ye["c"]),{},{message:"{_field_} may not be greater than {length} characters"})),Object(Xe["c"])("min",Object(Ue["a"])(Object(Ue["a"])({},Ye["d"]),{},{message:"{_field_} may not be smaller than {length} characters"})),Object(Xe["c"])("regex",Object(Ue["a"])(Object(Ue["a"])({},Ye["e"]),{},{message:"{_field_} {_value_} does not match {regex}"})),Object(Xe["c"])("email",Object(Ue["a"])(Object(Ue["a"])({},Ye["b"]),{},{message:"Email must be valid"}));var Ze={name:"Forms",components:{ValidationProvider:Xe["b"],ValidationObserver:Xe["a"]},data:function(){return{name:"",phoneNumber:"",email:"",select:null,message:"",items:["Item 1","Item 2","Item 3","Item 4"],checkbox:null}},methods:{submit:function(){this.$refs.observer.validate()},clear:function(){this.name="",this.phoneNumber="",this.email="",this.message="",this.select=null,this.checkbox=null,this.$refs.observer.reset()},showtoast:function(){this.$toasted.show("hello billo")}}},Qe=Ze,et=a("8654"),tt=a("a844"),at=Object(l["a"])(Qe,Ge,Je,!1,null,null,null),nt=at.exports;m()(at,{VBtn:B["a"],VTextField:et["a"],VTextarea:tt["a"]});var rt={components:{Forms:nt},name:"Contact",mounted:function(){document.title="Er.Anil Kumar Thakur | Contact Me "}},it=rt,st=Object(l["a"])(it,We,ze,!1,null,null,null),ot=st.exports;m()(st,{VBtn:B["a"],VCard:Ve["a"],VCol:F["a"],VHover:Ie["a"],VImg:me["a"],VRow:W["a"]});var lt=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{},[a("h6",{staticClass:"text-h6"},[e._v("Feature")]),a("h1",{staticClass:"font-weight-bold"},[e._v("What I DO")]),a("v-row",e._l(e.whatidolists,(function(e){return a("what-i-do",{key:e.name,attrs:{name:e.name,image:e.image,text:e.text}})})),1)],1)},ct=[],mt=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-col",{staticClass:"d-flex child-flex",attrs:{lg:"3",md:"3",sm:"12"}},[a("v-hover",{scopedSlots:e._u([{key:"default",fn:function(t){var n=t.hover;return[a("v-card",{staticClass:"mx-auto rounded-xl",class:{"on-hover":n},attrs:{elevation:n?12:2}},[a("v-img",{staticClass:"rounded-xl",attrs:{src:e.image}},[a("v-expand-transition",[n?a("div",{staticClass:"\n              d-flex\n              transition-fast-in-fast-out\n              orange\n              darken-2\n              v-card--reveal\n              text-h2\n              white--text\n            ",staticStyle:{height:"100%"}},[a("v-img",{staticClass:"rounded-xl",attrs:{src:e.image}})],1):e._e()])],1),a("v-card-text",{staticClass:"pt-6",staticStyle:{position:"relative"}},[a("h3",{staticClass:"text-h5 font-weight mb-2"},[e._v(" "+e._s(e.name)+" ")]),a("div",{staticClass:"text-justify text-subtitle-2 mb-2"},[e._v(" "+e._s(e.text)+" ")])])],1)]}}])})],1)},ut=[],dt={name:"WhatIDo",props:["name","image","text"]},vt=dt,ft=(a("954a"),Object(l["a"])(vt,mt,ut,!1,null,null,null)),pt=ft.exports;m()(ft,{VCard:Ve["a"],VCardText:Oe["b"],VCol:F["a"],VExpandTransition:Se["a"],VHover:Ie["a"],VImg:me["a"]});var ht={components:{WhatIDo:pt},name:"Feature",data:function(){return{whatidolists:[{name:"Front End",image:a("f936"),text:"Frontend Developer  with 1.5  years experience building and maintaining responsive websites . Proficient in  modern web technology and frameworks like Vue js, Inertia JS ,Bootstrap ,Vuetify."},{name:"Backend",image:a("bdf1"),text:"Backend Developer with 1.5 year experience in  industry. Analyze data, processes, and codes to troubleshoot problems and identify areas for improvement also taking lead on projects as needed."},{name:"Project Management",image:a("5928"),text:"Managed project plan and Worked closely with management on assigned projects from inception through implementation to ensure adequate internal communication between end user and developerd."},{name:"Database Design",image:a("a27e"),text:"Relational Database design for small to large scale project. Maintaining and enhancing the performance of existing database. Optimize database systems for performance and reliability. "}]}},mounted:function(){document.title="Er.Anil Kumar Thakur | Feature"}},gt=ht,bt=Object(l["a"])(gt,lt,ct,!1,null,null,null),xt=bt.exports;m()(bt,{VRow:W["a"]}),n["a"].use(T["a"]);var yt=[{path:"/",name:"Home",component:ve},{path:"/about-me",name:"About",component:xe},{path:"/portfolio",name:"Portfolio",component:De},{path:"/gallery",name:"Gallery",component:Ke},{path:"/contact-me",name:"Contact",component:ot},{path:"/feature",name:"Feature",component:xt}],_t=new T["a"]({routes:yt}),wt=_t;n["a"].config.productionTip=!1,new n["a"]({vuetify:I,router:wt,render:function(e){return e(O)}}).$mount("#app")},5928:function(e,t,a){e.exports=a.p+"img/projectmanagement.7134660b.jpg"},5933:function(e,t,a){"use strict";a("8f84")},"6d6d":function(e,t,a){e.exports=a.p+"img/medmaxchain.a91e27aa.jpg"},"772e":function(e,t,a){e.exports=a.p+"img/videochat.a8702f05.jpg"},"79a0":function(e,t,a){},"85ec":function(e,t,a){},8758:function(e,t,a){e.exports=a.p+"img/calculator.9bf23233.jpg"},"8f84":function(e,t,a){},"954a":function(e,t,a){"use strict";a("346f")},"9c61":function(e,t,a){e.exports=a.p+"img/ecoomerce.684b2ea1.jpg"},"9ea6":function(e,t,a){e.exports=a.p+"img/meriaamai.2cfec2eb.jpg"},a27e:function(e,t,a){e.exports=a.p+"img/database.bf264cb3.png"},bdf1:function(e,t,a){e.exports=a.p+"img/backend.7c6f44f9.webp"},ea1f:function(e,t,a){e.exports=a.p+"img/htmlportfolio.e7212034.jpg"},f936:function(e,t,a){e.exports=a.p+"img/frontend.bd8ea473.svg"},fe4b:function(e,t,a){"use strict";a("79a0")}});
//# sourceMappingURL=app.a656e5ed.js.map