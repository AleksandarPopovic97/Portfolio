(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],[,,function(e,t,a){e.exports={Menu:"Menu_Menu__keKnW",openMenu:"Menu_openMenu__2t5Xs",Active:"Menu_Active__8G3o-",CloseMenu:"Menu_CloseMenu__2pAka",Dark:"Menu_Dark__WfLuW",Light:"Menu_Light__otxL-",Navigation:"Menu_Navigation__3RxuS",Link:"Menu_Link__1fnXl"}},function(e,t,a){e.exports={Light:"LandingPage_Light__1Ox5Y",Dark:"LandingPage_Dark__30br7",LandingPage:"LandingPage_LandingPage__21Xq9",DMToggle:"LandingPage_DMToggle__VExuj",ToggleContainer:"LandingPage_ToggleContainer__3IUvP",Slider:"LandingPage_Slider__2Tp_p",Title:"LandingPage_Title__m2y0N",Text:"LandingPage_Text__29Lf_",Bulb:"LandingPage_Bulb__2ZAlw",ToTop:"LandingPage_ToTop__3P1Fa",Arrow:"LandingPage_Arrow__2gBAA",MenuBtn:"LandingPage_MenuBtn__2vmFP"}},,function(e,t,a){e.exports={AnimationWrapper:"EduFrame_AnimationWrapper__3bdPU",Frame:"EduFrame_Frame__1P352",Dark:"EduFrame_Dark__2qHBr",LogoContainer:"EduFrame_LogoContainer__inCdQ",Logo:"EduFrame_Logo__20B_g",Resize:"EduFrame_Resize__1iXey",Institution:"EduFrame_Institution__qetSW",Direction:"EduFrame_Direction___lhs0",Date:"EduFrame_Date__1DU9n"}},function(e,t,a){e.exports={About:"About_About__cPoNb",Dark:"About_Dark__2OOJu",Light:"About_Light__GBrJB",SectionsContainer:"About_SectionsContainer__388FA",LeftSection:"About_LeftSection__16mn4",RightSection:"About_RightSection__2o_OP"}},function(e,t,a){e.exports={Education:"Education_Education__3RlXX",Dark:"Education_Dark__1k21s",Light:"Education_Light__id_VP",Container:"Education_Container__1ny0-",Separator:"Education_Separator__Gz1SP"}},function(e,t,a){e.exports={Project:"Project_Project__3B64M",Container:"Project_Container__3Y_oz",Description:"Project_Description__quCt5",SkillOverlay:"Project_SkillOverlay__3pJ-u"}},function(e,t,a){e.exports={Projects:"Projects_Projects__3vRgn",MoreProjects:"Projects_MoreProjects__nAmdI"}},function(e,t,a){e.exports={Skills:"SkillsnProjects_Skills__21YWc",Dark:"SkillsnProjects_Dark__1GHlX",Light:"SkillsnProjects_Light__3c1j5",Container:"SkillsnProjects_Container__3iDtS"}},function(e,t,a){e.exports={Header:"Header_Header__15pbN",Dark:"Header_Dark__29yzO",Link:"Header_Link__1Lnse",Light:"Header_Light__1bblH"}},,,,,,,,function(e,t,a){e.exports={Contact:"Contact_Contact__2s8ti",Dark:"Contact_Dark__1EcrR",Light:"Contact_Light__3WTQK"}},,,,,,,,,,,,function(e,t,a){e.exports={Skill:"Skill_Skill__30CYq"}},function(e,t,a){e.exports={Skills:"Skills_Skills__2KITS"}},function(e,t,a){e.exports={Backdrop:"Backdrop_Backdrop__17yTi"}},,,,,,,function(e,t,a){},function(e,t,a){},,,,,,,,,,,,function(e,t,a){"use strict";a.r(t);var n=a(1),i=a.n(n),s=a(16),c=a.n(s),o=(a(40),a(41),a(29)),r=a(30),l=a(35),d=a(34),j=a(3),u=a.n(j),h=a(6),_=a.n(h),m=a(0),g=function(e){var t=[_.a.About,e.theme];return e.theme.includes("Dark")?t.push(_.a.Dark):t.push(_.a.Light),Object(m.jsxs)("div",{className:t.join(" "),id:"about",children:[Object(m.jsx)("h1",{children:"About me"}),Object(m.jsxs)("div",{className:_.a.SectionsContainer,children:[Object(m.jsxs)("div",{className:_.a.LeftSection,children:[Object(m.jsx)("h3",{children:"Skills"}),Object(m.jsx)("p",{children:"Team player"}),Object(m.jsx)("p",{children:"Communication"})]}),Object(m.jsxs)("div",{className:_.a.RightSection,children:[Object(m.jsx)("h3",{children:"Interests"}),Object(m.jsx)("p",{children:"Test paragraph"})]})]})]})},b=a(18),p=a(8),x=a.n(p),O=a.p+"static/media/portfolio.028e0bd3.png",k=a(31),v=a.n(k),f=function(e){return Object(n.useEffect)((function(){setTimeout((function(){console.log("delay")}),e.delay)}),[]),Object(m.jsx)("div",{className:v.a.Skill,children:Object(m.jsx)("p",{children:e.skill})})},L=function(e){var t=Object(n.useState)(!1),a=Object(b.a)(t,2),i=a[0],s=a[1];x.a.Container;return Object(m.jsxs)("div",{className:x.a.Project,children:[Object(m.jsx)("h3",{children:e.title}),Object(m.jsxs)("div",{className:x.a.Container,onMouseEnter:function(){s(!0)},onMouseLeave:function(){s(!1)},children:[i?Object(m.jsx)("div",{className:x.a.SkillOverlay,children:e.languages.map((function(e){return Object(m.jsx)(f,{skill:e})}))}):null,Object(m.jsx)("img",{src:e.image})]})]})},C=a(9),N=a.n(C),S=a.p+"static/media/burger.1e3968a7.png",D=a.p+"static/media/tesla.da06c567.png",P=function(e){for(var t=Object(n.useState)(0),a=Object(b.a)(t,2),s=a[0],c=a[1],o=[{image:O,title:"Portfolio",languages:["React","Css","Html"]},{image:S,title:"Burger builder",languages:["React","Css","Html"]},{image:D,title:"Tesla",languages:["React","Css","Html","C#","SQL"]},{image:O,title:"Test",languages:["ReactTest","Css","Html"]},{image:O,title:"Test1",languages:["ReactTest","Css","Html"]},{image:O,title:"Test2",languages:["ReactTest","Css","Html"]}],r=[],l=0,d=0+s;d<o.length&&3!=l;d++)l++,r.push(o[d]);return Object(m.jsx)(i.a.Fragment,{children:Object(m.jsxs)("div",{className:N.a.Projects,children:[r.map((function(e){return Object(m.jsx)(L,{image:e.image,title:e.title,languages:e.languages},e.title)})),Object(m.jsxs)("div",{className:N.a.MoreProjects,children:[Object(m.jsx)("div",{className:N.a.Next,onClick:function(){o.length-s>3&&c(s+1)},children:"Next"}),Object(m.jsx)("div",{className:N.a.Previous,onClick:function(){s>0&&c(s-1)},children:"Previous"})]})]})})},T=a(32),M=a.n(T),A=function(e){return Object(m.jsx)("div",{className:M.a.Skills,children:["C#","React","CSS3","HTML5","C++","Razor","Matlab","JavaScript","C","SQL","Git"].map((function(e){return Object(m.jsx)(f,{skill:e},e)}))})},y=a(10),E=a.n(y),F=function(e){var t=[E.a.Skills,e.theme];return e.theme.includes("Dark")?t.push(E.a.Dark):t.push(E.a.Light),Object(m.jsxs)("div",{className:t.join(" "),id:"skillsNprojects",children:[Object(m.jsx)("h1",{children:"Technical skills and projects"}),Object(m.jsxs)("div",{className:E.a.Container,children:[Object(m.jsx)(A,{}),Object(m.jsx)(P,{})]})]})},w=a(7),B=a.n(w),R=a.p+"static/media/aviation-academy.427d69d1.png",H=a.p+"static/media/aviation-academy-dark.8c6af05e.png",W=a.p+"static/media/ftn-logo.1b91e828.png",z=a.p+"static/media/ftn-logo-dark.b3631ced.png",I=a(5),X=a.n(I),J=a(17),Y=a.n(J),q=(a(25),function(e){Object(n.useEffect)((function(){Y.a.init({duration:1e3})}),[]);var t=[X.a.Frame,e.theme];e.theme.includes("Dark")?t.push(X.a.Dark):t.push(X.a.Light);var a=[X.a.Logo];return e.pictureResize&&a.push(X.a.Resize),Object(m.jsx)("div",{className:X.a.AnimationWrapper,"data-aos":"fade-up",children:Object(m.jsxs)("div",{className:t.join(" "),children:[Object(m.jsx)("div",{className:X.a.LogoContainer,children:Object(m.jsx)("img",{src:e.logoSrc,alt:e.alt,className:a.join(" ")})}),Object(m.jsx)("div",{className:X.a.Institution,children:Object(m.jsx)("h2",{children:e.institution})}),Object(m.jsx)("div",{className:X.a.Direction,children:Object(m.jsx)("h3",{children:e.direction})}),Object(m.jsxs)("div",{className:X.a.Date,children:[Object(m.jsx)("p",{children:e.city}),Object(m.jsx)("p",{children:e.date})]})]})})}),G=function(e){var t=[B.a.Education,e.theme];return e.theme.includes("Dark")?t.push(B.a.Dark):t.push(B.a.Light),Object(m.jsxs)("div",{className:t.join(" "),id:"education",children:[Object(m.jsx)("h1",{children:"Education"}),Object(m.jsxs)("div",{className:B.a.Container,children:[Object(m.jsx)(q,{theme:e.theme,logoSrc:e.theme.includes("Dark")?H:R,alt:"Aviation academy logo",institution:"Aviation academy",direction:"Air transport search and rescue technician",date:"09/2012 - 06/2016",city:"Belgrade",pictureResize:!0}),Object(m.jsx)("div",{className:B.a.Separator}),Object(m.jsx)(q,{theme:e.theme,logoSrc:e.theme.includes("Dark")?z:W,alt:"FTN logo",institution:"Faculty of technical science",direction:"Applied software engineering",date:"09/2016 - Expected to finish in 2021.",city:"Novi Sad"})]})]})},Q=a(19),K=a.n(Q),U=function(e){var t=[K.a.Contact,e.theme];return e.theme.includes("Dark")?t.push(K.a.Dark):t.push(K.a.Light),Object(m.jsxs)("div",{className:t.join(" "),id:"contact",children:[Object(m.jsx)("h1",{children:"Contact"}),Object(m.jsx)("h2",{children:"Work in progress..."})]})},V=a(4),Z=a(11),$=a.n(Z),ee=function(e){var t=[$.a.Link,e.theme];return e.theme.includes("Dark")?t.push($.a.Dark):t.push($.a.Light),Object(m.jsxs)("nav",{className:$.a.Header,children:[Object(m.jsx)(V.Link,{activeClass:"active",to:"about",spy:!0,smooth:!0,offset:0,duration:800,className:t.join(" "),children:"About me"}),Object(m.jsx)(V.Link,{activeClass:"active",to:"education",spy:!0,smooth:!0,offset:0,duration:1100,className:t.join(" "),children:"Education"}),Object(m.jsx)(V.Link,{activeClass:"active",to:"skillsNprojects",spy:!0,smooth:!0,offset:0,duration:1400,className:t.join(" "),children:"Skills and projects"}),Object(m.jsx)(V.Link,{activeClass:"active",to:"contact",spy:!0,smooth:!0,offset:0,duration:1800,className:t.join(" "),children:"Contact"})]})},te=a(12),ae=a(33),ne=a.n(ae),ie=function(e){return e.show?Object(m.jsx)("div",{className:ne.a.Backdrop,onClick:e.onClose}):null},se=a(2),ce=a.n(se),oe=function(e){var t=[ce.a.Menu];return e.show||(t=[ce.a.Menu,ce.a.CloseMenu]),e.theme.includes("Dark")?t.push(ce.a.Dark):t.push(ce.a.Light),Object(m.jsxs)(i.a.Fragment,{children:[Object(m.jsx)(ie,{onClose:e.close,show:e.show}),Object(m.jsxs)("div",{className:t.join(" "),children:[Object(m.jsx)("h1",{children:"Menu"}),Object(m.jsxs)("nav",{className:ce.a.Navigation,children:[Object(m.jsx)(V.Link,{activeClass:ce.a.Active,to:"main",spy:!0,smooth:!0,offset:0,duration:800,className:ce.a.Link,children:"Home"}),Object(m.jsx)(V.Link,{activeClass:ce.a.Active,to:"about",spy:!0,smooth:!0,offset:0,duration:800,className:ce.a.Link,children:"About me"}),Object(m.jsx)(V.Link,{activeClass:ce.a.Active,to:"education",spy:!0,smooth:!0,offset:0,duration:1100,className:ce.a.Link,children:"Education"}),Object(m.jsx)(V.Link,{activeClass:ce.a.Active,to:"skillsNprojects",spy:!0,smooth:!0,offset:0,duration:1400,className:ce.a.Link,children:"Skills and projects"}),Object(m.jsx)(V.Link,{activeClass:ce.a.Active,to:"contact",spy:!0,smooth:!0,offset:0,duration:1800,className:ce.a.Link,children:"Contact"})]})]})]})},re=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return(e=t.call.apply(t,[this].concat(i))).state={darkMode:!1,toTop:!1,menu:!1},e.mode=[u.a.Light],e.title="Aleksandar Popovic",e.text="Student at Faculty of technical science and junior web developer",e.changeMode=function(){var t=!e.state.darkMode;t?e.mode.push(u.a.Dark):e.mode.splice(e.mode.indexOf(u.a.Dark),1),e.setState({darkMode:t})},e.handleScroll=function(t){window.scrollY>400&&!e.state.toTop&&e.setState({toTop:!0}),window.scrollY<400&&e.state.toTop&&e.setState({toTop:!1})},e.toTop=function(){window.scrollTo({top:0,behavior:"smooth"})},e.handleMenuOpen=function(){e.setState({menu:!e.state.menu})},e.handleMenuClose=function(){e.setState({menu:!1})},e}return Object(r.a)(a,[{key:"componentDidMount",value:function(){Y.a.init({duration:1e3}),window.addEventListener("scroll",this.handleScroll)}},{key:"render",value:function(){return Object(m.jsxs)(i.a.Fragment,{children:[Object(m.jsxs)("div",{className:u.a.LandingPage+" "+this.mode.join(" "),id:"main",children:[Object(m.jsx)(ee,{theme:this.mode.join(" ")}),this.state.toTop?Object(m.jsx)("div",{className:u.a.ToTop,onClick:this.toTop,"data-aos":"fade-up",children:Object(m.jsx)(te.a,{className:u.a.Arrow})}):null,Object(m.jsxs)("label",{className:u.a.DMToggle,children:[Object(m.jsxs)("div",{className:u.a.ToggleContainer,children:[Object(m.jsx)(te.d,{}),Object(m.jsx)(te.c,{})]}),Object(m.jsx)("input",{type:"checkbox",onClick:this.changeMode}),Object(m.jsx)("span",{className:u.a.Slider})]}),Object(m.jsx)("div",{className:u.a.Bulb,onClick:this.changeMode,children:Object(m.jsx)(te.b,{})}),Object(m.jsxs)("div",{className:u.a.MenuBtn,onClick:this.handleMenuOpen,children:[Object(m.jsx)("div",{}),Object(m.jsx)("div",{}),Object(m.jsx)("div",{})]}),Object(m.jsx)(oe,{show:this.state.menu,close:this.handleMenuClose,theme:this.mode.join(" ")}),Object(m.jsx)("h1",{className:u.a.Title,children:this.title}),Object(m.jsx)("p",{className:u.a.Text,children:this.text})]}),Object(m.jsx)(g,{theme:this.mode.join(" ")}),Object(m.jsx)(G,{theme:this.mode.join(" ")}),Object(m.jsx)(F,{theme:this.mode.join(" ")}),Object(m.jsx)(U,{theme:this.mode.join(" "),id:"contact"})]})}}]),a}(n.Component),le=function(){return Object(m.jsx)("div",{className:"App",children:Object(m.jsx)(re,{})})},de=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,54)).then((function(t){var a=t.getCLS,n=t.getFID,i=t.getFCP,s=t.getLCP,c=t.getTTFB;a(e),n(e),i(e),s(e),c(e)}))};c.a.render(Object(m.jsx)(i.a.StrictMode,{children:Object(m.jsx)(le,{})}),document.getElementById("root")),de()}],[[53,1,2]]]);
//# sourceMappingURL=main.d65393a1.chunk.js.map