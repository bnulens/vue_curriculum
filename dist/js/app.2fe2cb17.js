(function(t){function e(e){for(var a,s,o=e[0],c=e[1],l=e[2],d=0,p=[];d<o.length;d++)s=o[d],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&p.push(n[s][0]),n[s]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);u&&u(e);while(p.length)p.shift()();return r.push.apply(r,l||[]),i()}function i(){for(var t,e=0;e<r.length;e++){for(var i=r[e],a=!0,o=1;o<i.length;o++){var c=i[o];0!==n[c]&&(a=!1)}a&&(r.splice(e--,1),t=s(s.s=i[0]))}return t}var a={},n={app:0},r=[];function s(e){if(a[e])return a[e].exports;var i=a[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,s),i.l=!0,i.exports}s.m=t,s.c=a,s.d=function(t,e,i){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(s.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(i,a,function(e){return t[e]}.bind(null,a));return i},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=c;r.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"03fd":function(t,e,i){"use strict";var a=i("4cf7"),n=i.n(a);n.a},"1d9a":function(t,e,i){"use strict";var a=i("92c9"),n=i.n(a);e["default"]=n.a},"26f0":function(t,e,i){"use strict";var a=i("6e90"),n=i.n(a);n.a},3076:function(t,e,i){"use strict";i.d(e,"a",(function(){return a})),i.d(e,"b",(function(){return n}));var a=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},n=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("footer",[i("div",{staticClass:"ref-icons"},[i("a",{attrs:{href:"https://github.com/bnulens",target:"_blank"}},[i("img",{staticClass:"ref-icon github",attrs:{src:"/assets/icons/github.svg",alt:"GitHub logo"}})]),i("a",{attrs:{href:"https://www.linkedin.com/in/brecht-nulens/",target:"_blank"}},[i("img",{staticClass:"ref-icon",attrs:{src:"/assets/icons/linkedIn.svg",alt:"LinkedIn logo"}})]),i("a",{attrs:{href:"mailto:brechtnulens@gmail.com",target:"_blank"}},[i("img",{staticClass:"ref-icon",attrs:{src:"/assets/icons/gmail.svg",alt:"Gmail logo"}})])])])}]},"30a6":function(t,e,i){"use strict";var a=i("783d"),n=i.n(a);n.a},3368:function(t,e,i){},"33a5":function(t,e,i){},"378b":function(t,e,i){},"4cf7":function(t,e,i){},"4d8b":function(t,e,i){"use strict";var a=i("33a5"),n=i.n(a);n.a},"56d7":function(t,e,i){"use strict";i.r(e);i("e260"),i("e6cf"),i("cca6"),i("a79d");var a=i("2b0e"),n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("HeaderComp"),i("BodyComp"),i("FooterComp")],1)},r=[],s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("header",[i("ul",{staticClass:"navbar"},[t._l(t.navItems,(function(e,a){return i("li",{key:a},[i("a",{attrs:{href:"#"+e}},[t._v(t._s(e))])])})),t._m(0)],2)])},o=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("li",[i("a",{attrs:{href:"mailto:brechtnulens@gmail.com"}},[t._v("contact")])])}],c={data:function(){return{navItems:["skills","experience"]}}},l=c,u=(i("30a6"),i("2877")),d=Object(u["a"])(l,s,o,!1,null,"5ad9b956",null),p=d.exports,f=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("main",{staticClass:"container"},[i("AboutComp"),i("CoderComp"),i("SkillComp"),i("ExperienceComp")],1)},v=[],m=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},b=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{attrs:{id:"about"}},[i("h2",{staticClass:"sr-only"},[t._v("About")]),i("div",{attrs:{id:"about-wrapper"}},[i("div",{staticClass:"about-intro"},[i("p",{staticClass:"about-title"},[t._v("Hello, I am "),i("strong",[t._v("Brecht Nulens")])]),i("p",{staticClass:"about-punch"},[t._v('"An aspiring '),i("strong",[t._v("junior web developer")]),t._v(' with emphasis on graphic design"')]),i("p",{staticClass:"about-catch"},[t._v("... "),i("strong",[t._v("moved")]),t._v(" by conceptualization and visual representation through "),i("strong",[t._v(" project based studies.")])])])]),i("div",{staticClass:"about-card"},[i("div",{staticClass:"about-card-body"},[i("h4",[t._v("A little bit more about myself...")]),i("p",{staticClass:"about-card-content"},[t._v("Focused on "),i("strong",[t._v("continuous learning and improvement.")]),t._v(" Spending spare time on Udemy, W3schools and Laracasts. ")])])])])}],g={},_=g,h=(i("26f0"),Object(u["a"])(_,m,b,!1,null,"0b3ce6c4",null)),C=h.exports,y=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{attrs:{id:"skills"}},[i("h2",[t._v("Skills")]),i("TitledIconList",{attrs:{title:"As a developer",iconList:t.devSkillIcons}}),i("TitledIconList",{attrs:{title:"As a designer",iconList:t.designerSkillIcons}})],1)},k=[],w=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"icon-set"},[i("h3",{staticClass:"icon-set-title"},[t._v(t._s(t.title))]),i("ul",t._l(t.iconList,(function(e){return i("li",{key:e.id},[i("span",{staticClass:"icon-title"},[t._v(t._s(e.title))]),i("img",{attrs:{src:"/assets/icons/"+e.pic+".svg",alt:e.title},on:{mouseover:function(e){t.hover=!0}}})])})),0)])},E=[],x={props:{title:{type:String,required:!0},iconList:{type:Array,required:!0}},data:function(){return{hover:!1}}},j=x,S=(i("cedf"),Object(u["a"])(j,w,E,!1,null,"041855ab",null)),O=S.exports,A=[{id:1,title:"HTML5",pic:"html5"},{id:2,title:"CSS3",pic:"css3"},{id:3,title:"Sass",pic:"sass"},{id:4,title:"Javascript",pic:"javascript"},{id:5,title:"VueJs",pic:"vuejs"},{id:6,title:"NodeJS",pic:"nodejs"},{id:7,title:"JSON",pic:"json"},{id:8,title:"PhP",pic:"php"},{id:9,title:"PostGreSQL",pic:"postgresql"},{id:10,title:"GitKraken",pic:"gitkraken"},{id:11,title:"Git",pic:"git"},{id:12,title:"VSCode",pic:"vscode"},{id:13,title:"Terminal",pic:"terminal"}],L=A,T=[{id:1,title:"Photoshop",pic:"photoshop-cc"},{id:2,title:"Indesign",pic:"indesign-cc"},{id:3,title:"Illustrator",pic:"adobe-illustrator-cc"},{id:4,title:"Figma",pic:"figma"}],P=T,D={components:{TitledIconList:O},data:function(){return{devSkillIcons:L,designerSkillIcons:P}}},$=D,I=Object(u["a"])($,y,k,!1,null,null,null),H=I.exports,G=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{attrs:{id:"experience"}},[i("h2",[t._v("Experience")]),i("div",[i("div",{staticClass:"tabs"},[i("div",{staticClass:"tab",class:{selected:"academics"===t.activeTab},on:{click:function(e){t.activeTab="academics"}}},[t._v("Academics")]),i("div",{staticClass:"tab",class:{selected:"work"===t.activeTab},on:{click:function(e){t.activeTab="work"}}},[t._v("Work")])]),"academics"===t.activeTab?i("ExperienceList",{attrs:{list:t.academics}}):t._e(),"work"===t.activeTab?i("ExperienceList",{attrs:{list:t.workExperience}}):t._e()],1)])},F=[],M=(i("fb6a"),[{id:1,year:"2007-2013",organisation:"Koninklijk Atheneum Plus",location:"Hasselt",title:"Latin - Modern Languages",status:"degree awarded"},{id:2,year:"2013-2014",organisation:"Luca MAD-faculty",location:"Genk",title:"Bachelor Product Design",status:"completed first year - no degree awarded"},{id:3,year:"2014-2018",organisation:"PXL MAD-faculty",location:"Hasselt",title:"Bachelor Graphic Design & Visual Arts",status:"completed 4 years - no degree awarded"},{id:4,year:"2018",organisation:"SYNTRA",location:"Genk",title:"Network Engineer",status:"degree awarded"},{id:5,year:"2019",organisation:"BeCode",location:"Genk",title:"Junior Web Developer",status:"ongoing"}]),B=M,J=[{id:1,year:"2010",organisation:"Recyclagepark Kuringen",location:"Hasselt",title:"Staff member"},{id:2,year:"2011-2017",organisation:"Fiesta Europa",location:"Flanders",title:"Staff member"},{id:3,year:"2014",organisation:"Festival Da Copa",location:"Hasselt",title:"Advertisement for sponsors"},{id:4,year:"2016",organisation:"Festival Da Copa",location:"Hasselt",title:"Advertisement for sponsors"},{id:5,year:"2017",organisation:"Brasserie De Ploeg",location:"Diepenbeek",title:"Service & Attendance"},{id:6,year:"2011-2020",organisation:"Evenement DE TENT",location:"Hasselt",title:"Head of Staff"}],N=J,q=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"xp-wrap"},[i("ul",{staticClass:"xp-list"},t._l(t.list,(function(e){return i("li",{key:e.id},[i("span",{staticClass:"year"},[t._v(t._s(e.year))]),i("p",{staticClass:"title"},[t._v(t._s(e.title))]),i("p",{staticClass:"organisation"},[t._v(t._s(e.organisation))]),i("p",{staticClass:"location"},[t._v(t._s(e.location))]),e.status?i("p",{staticClass:"status"},[t._v(t._s(e.status))]):t._e()])})),0)])},K=[],V={props:{list:{type:Array,required:!0}}},W=V,R=(i("03fd"),Object(u["a"])(W,q,K,!1,null,"896a13f2",null)),z=R.exports,Q={components:{ExperienceList:z},data:function(){return{academics:[],workExperience:[],activeTab:"academics"}},mounted:function(){this.academics=B.slice().reverse(),this.workExperience=N.slice().reverse()}},U=Q,X=(i("a902"),Object(u["a"])(U,G,F,!1,null,"4e90de6a",null)),Y=X.exports,Z=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"coder"}},[t.threwError?i("section",{attrs:{id:"user-error"}},[t._m(0)]):i("section",{attrs:{id:"user-profile"}},[t.loading?i("div",[i("span",[t._v("Fetching profile...")])]):i("div",{staticClass:"user-profile-card"},[i("img",{staticClass:"user-profile-card-avatar",attrs:{src:""+t.profileData.data.avatar_url,alt:""+t.profileData.data.login}}),i("div",{staticClass:"user-profile-card-header"},[i("h1",[t._v(t._s(t.profileData.data.blog))])])])])])},tt=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("span",[t._v("Could not get Github Profile")])])}],et=(i("d3b7"),i("bc3a")),it=i.n(et),at={data:function(){return{profileData:null,loading:!0,threwError:!1}},created:function(){var t=this;it.a.get("https://api.github.com/users/bnulens").then((function(e){return t.profileData=e})).catch((function(e){console.log(e),t.threwError=!0})).finally((function(){return t.loading=!1}))}},nt=at,rt=Object(u["a"])(nt,Z,tt,!1,null,null,null),st=rt.exports,ot={components:{AboutComp:C,SkillComp:H,ExperienceComp:Y,CoderComp:st}},ct=ot,lt=(i("4d8b"),Object(u["a"])(ct,f,v,!1,null,"8300cee0",null)),ut=lt.exports,dt=i("6802"),pt={name:"app",components:{HeaderComp:p,BodyComp:ut,FooterComp:dt["default"]}},ft=pt,vt=(i("6dc4"),Object(u["a"])(ft,n,r,!1,null,null,null)),mt=vt.exports;a["a"].config.productionTip=!1,new a["a"]({render:function(t){return t(mt)}}).$mount("#app")},"659b":function(t,e,i){},6802:function(t,e,i){"use strict";var a=i("3076"),n=i("1d9a"),r=(i("e194"),i("2877")),s=Object(r["a"])(n["default"],a["a"],a["b"],!1,null,"23e80ee6",null);e["default"]=s.exports},"6ca1":function(t,e,i){},"6dc4":function(t,e,i){"use strict";var a=i("659b"),n=i.n(a);n.a},"6e90":function(t,e,i){},"783d":function(t,e,i){},"92c9":function(t,e){},a902:function(t,e,i){"use strict";var a=i("378b"),n=i.n(a);n.a},cedf:function(t,e,i){"use strict";var a=i("6ca1"),n=i.n(a);n.a},e194:function(t,e,i){"use strict";var a=i("3368"),n=i.n(a);n.a}});
//# sourceMappingURL=app.2fe2cb17.js.map