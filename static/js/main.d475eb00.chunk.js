(this["webpackJsonpenglish-patient"]=this["webpackJsonpenglish-patient"]||[]).push([[0],{54:function(n,t,e){},73:function(n,t,e){"use strict";e.r(t);var r=e(1),i=e(0),a=e(22),c=e.n(a),o=e(8),s=e(20),u=e(9),b=e.n(u),d=e(16),p=e(2),l=(e(54),e(3)),j=e(6),x=e(15),h=function(n,t){return x.post("/login",{email:n,password:t})},g=function(){var n=window.localStorage.getItem("token");return!!n&&x.get("/me?token=".concat(n))},f="user/SET_USER_DATA",O={user:null},v=function(n){return{type:f,user:n}},m=function(){return function(){var n=Object(d.a)(b.a.mark((function n(t){var e,r;return b.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,g();case 2:(e=n.sent).data.result?(r=e.data.result.user,t(v({firstName:r.firstName,lastName:r.lastName,avatar:r.avatar,phone:r.phone,skype:r.skype,stasiNote:r.stasiNote}))):console.log(e.data.message);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},w=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f:return Object(j.a)(Object(j.a)({},n),{},{user:t.user});default:return n}};function y(){var n=Object(p.a)(["\n    margin:calc(50% - 40px) auto;\n    width: 80px;\n    height: 80px;\n    div{\n        box-sizing: border-box;\n        display: block;\n        position: absolute;\n        width: 64px;\n        height: 64px;\n        margin: 8px;\n        border: 8px solid #fff;\n        border-radius: 50%;\n        animation: "," 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\n        border-color: #fff transparent transparent transparent;\n    }\n    div:nth-child(1){animation-delay: -0.45s;}\n    div:nth-child(2){animation-delay: -0.3s;}\n    div:nth-child(3){animation-delay: -0.15s;}\n"]);return y=function(){return n},n}function k(){var n=Object(p.a)(["\n0% {\n    transform: rotate(0deg);\n  }\n100% {\n    transform: rotate(360deg);\n  }\n"]);return k=function(){return n},n}var A=Object(l.b)(k()),C=l.a.div(y(),A),z=function(n){return Object(r.jsxs)(C,{children:[Object(r.jsx)("div",{}),Object(r.jsx)("div",{}),Object(r.jsx)("div",{}),Object(r.jsx)("div",{})]})},I="app/APP_INITIALIZED",S={isInitialized:!1},F=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case I:return Object(j.a)(Object(j.a)({},n),{},{isInitialized:!0});default:return n}},E=e(5),N="auth/SET_FETCHING",G="auth/SET_ERROR",R={isFetching:!1,errorMessage:""},U=function(n){return{type:N,isFetching:n}},B=function(n){return{type:G,errorMessage:n}},M=function(n,t){return function(){var e=Object(d.a)(b.a.mark((function e(r){var i;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r(U(!0)),r(B("")),e.next=5,h(n,t);case 5:if(!(i=e.sent).data.error){e.next=12;break}return r(B(i.data.error.message)),r(U(!1)),e.abrupt("return",!1);case 12:return window.localStorage.setItem("token",i.data.token),x.defaults.headers.common.Authorization=i.data.token,r(m()),r(U(!1)),e.abrupt("return",!0);case 17:e.next=22;break;case 19:e.prev=19,e.t0=e.catch(0),r(B(e.t0));case 22:case"end":return e.stop()}}),e,null,[[0,19]])})));return function(n){return e.apply(this,arguments)}}()},T=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case N:return Object(j.a)(Object(j.a)({},n),{},{isFetching:t.isFetching});case G:return Object(j.a)(Object(j.a)({},n),{},{errorMessage:t.errorMessage});default:return n}};function _(){var n=Object(p.a)(["\n    border-radius:50%;\n    position:absolute;\n    top:12px;\n    right:18px;\n    padding:20px;\n    transition:background 0.1s linear;\n    :hover{\n        background:rgb(249,7,7,0.2);\n        cursor:pointer;\n    }\n    img{\n        position:absolute;\n        top:7px;\n        left:5px;   \n    }\n"]);return _=function(){return n},n}function X(){var n=Object(p.a)(["\n    margin-left:30px;\n    font-size:18px;\n    p{\n        margin:5px 0px;\n    }\n"]);return X=function(){return n},n}function Y(){var n=Object(p.a)(["\n    display:flex;\n"]);return Y=function(){return n},n}function P(){var n=Object(p.a)(["\n    position:relative;\n    padding: 35px 47px;\n    max-width:420px;\n    width:100%;\n    @media screen and (max-width: 580px){\n        width:auto;\n    }\n    height:auto;\n    margin:0 auto;\n    color:white;\n    background: rgb(23, 24, 34);\n    border:2px solid rgb(255, 255, 255, 0.03);\n    border-radius:12px;\n    z-index:100;\n    h2{\n        text-align:center;\n    }\n"]);return P=function(){return n},n}var D=l.a.div(P()),K=l.a.div(Y()),L=l.a.div(X()),Q=l.a.div(_()),V=function(n){var t=Object(o.c)((function(n){return n.user.user})),e=Object(o.b)();return Object(r.jsxs)(D,{children:[Object(r.jsx)(Q,{onClick:function(){e(function(){var n=Object(d.a)(b.a.mark((function n(t){return b.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:window.localStorage.removeItem("token"),delete x.defaults.headers.common.Authorization,t({type:"auth/LOGOUT"});case 3:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}())},children:Object(r.jsx)("img",{width:"24",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAABjklEQVRYhe3XvWqUQRTG8d8scWc1yUV4A1YpLGz9AmMhWIgXECOIIKhgYxAtgoUWCrG3EBFEwUC0sLCxsEptK16AieyQsMdik4WQLOzG930R3Kc+c54/hzNn5iQjqrTbd6S0PGr8qJoaObLVOiFC8KIK48TCeAB9bXZKuVYFQDdniYVWFcn+RhOACcBQgGAqOBO0GwcIjuAV1jBXJ8C+ORBkvMZFPMfXOgH2VCDo4O2O+VPcSPQaAQiO4T3O4zFuJaJO8wFAMIMPOI1HuNuEOf1On8UqTmEJD5oy3wX4mZje5kdhHvMbBwRulXI8cXSDb6MmD0picYb1YTGDHuiRxmOvSMFs8CWIYCmGgJRO52XJ+aDiHErdnFdKztFK/MI5fMZ9PBwGUYdakNjEBXzCPSw3BTHogcRv/QG0itt40gTEnkmY6OIS3uEmnkXNL+a+5ImCy3iD6zjZKMAOxBau4Kwx7v1hNPRXnNjGxzrN+Zd/RBOA/wZg3N1wupvzShXG4y+nvd66lK7uHqxI3/8ADntfzZYTcX0AAAAASUVORK5CYII=",alt:"logout"})}),Object(r.jsxs)(K,{children:[Object(r.jsx)("img",{alt:"avatar",width:"140",src:"https://www.englishpatient.org/english-patient-files/acc8cfe3-58d0-4cab-bba7-6a61747c0456.jpg"}),Object(r.jsxs)(L,{children:[Object(r.jsx)("div",{children:t.firstName+" "+t.lastName}),Object(r.jsxs)("p",{children:["\u0422\u0435\u043b\u0435\u0444\u043e\u043d: ",t.phone]}),Object(r.jsxs)("p",{children:["Skype: ",t.skype]}),Object(r.jsx)("br",{}),Object(r.jsx)("p",{children:t.stasiNote})]})]})]})},J=e(14);function Z(){var n=Object(p.a)(["\n    font-size:17px;\n    padding-left:25px;\n    color:white;\n    border-radius:6px;\n    box-sizing:border-box;\n    border:2px solid rgb(41,43,53);\n    background:rgb(33,35,48);\n    height:50px;\n    width:100%;\n    font-weight:bold;\n    :focus{\n        outline:none;\n    }\n"]);return Z=function(){return n},n}var q=l.a.input(Z()),H=function(n){return Object(r.jsx)(q,Object(j.a)({},n))};function W(){var n=Object(p.a)(["\n    outline:none;\n    border:none;\n    width:100%;\n    height: 50px;\n    margin-top:8px;\n    background: "," ;\n    border-radius: 6px;\n    cursor: pointer;\n    opacity: 1;\n    color: white;\n    display: flex;\n    -webkit-box-align: center;\n    align-items: center;\n    -webkit-box-pack: center;\n    justify-content: center;\n    font-size: 20px;\n    font-weight: bold;\n    :hover{\n        opacity:0.8;\n    }\n"]);return W=function(){return n},n}var $=l.a.button(W(),(function(n){return"danger"===n.variant?"rgb(234, 82, 61);":"rgb(255, 172, 48);"})),nn=function(n){return Object(r.jsx)($,Object(j.a)(Object(j.a)({},n),{},{children:n.children}))};function tn(){var n=Object(p.a)(["\n    display:block;\n    margin-top:20px;\n    color: white;\n    text-align: center;\n    font-weight: 100;\n    font-size: 16px;\n    letter-spacing:0.3px;\n    span{\n        font-weight:bold;\n        :hover{\n            opacity: 0.75;\n            cursor:pointer;\n        }\n    }\n"]);return tn=function(){return n},n}function en(){var n=Object(p.a)(["\n    p{\n        font-size:16px;\n        color:rgb(123,127,158);\n        margin:14px 0;\n    }\n"]);return en=function(){return n},n}function rn(){var n=Object(p.a)(["\n    padding: 35px 47px;\n    max-width:420px;\n    width:100%;\n    @media screen and (max-width: 580px){\n        width:auto;\n    }\n    height:auto;\n    margin:0 auto;\n    color:white;\n    background: rgb(23, 24, 34);\n    border:2px solid rgb(255, 255, 255, 0.03);\n    border-radius:12px;\n    z-index:100;\n    h2{\n        text-align:center;\n    }\n"]);return rn=function(){return n},n}var an=l.a.div(rn()),cn=l.a.form(en()),on=l.a.span(tn()),sn=function(n){var t=Object(i.useState)(""),e=Object(J.a)(t,2),a=e[0],c=e[1];return Object(r.jsxs)(an,{children:[Object(r.jsx)("h2",{children:"Recover password"}),Object(r.jsxs)(cn,{children:[Object(r.jsx)("p",{children:"Email"}),Object(r.jsx)(H,{placeholder:"Your E-Mail",value:a,onChange:function(n){return c(n.target.value)},type:"email"}),Object(r.jsx)(nn,{variant:"danger",children:"Recover"})]}),Object(r.jsx)(on,{children:Object(r.jsx)("span",{onClick:function(){return n.onCurrentFormChange("signin")},children:"Back"})})]})};function un(){var n=Object(p.a)(["\n    height: 20px;\n    width: 20px;\n"]);return un=function(){return n},n}function bn(){var n=Object(p.a)(["\n    padding: 8px 10px;\n    outline:none;\n    background:transparent;\n    color: rgb(255, 255, 255);\n    font-size: 13px;\n    border: 1px solid rgb(255, 255, 255);\n    border-radius: 5px;\n    position: relative;\n    display:flex;\n    align-items:center;\n    flex: 1 1 0%;\n    justify-content:space-between;\n    :hover{\n        background-color: rgba(255, 255, 255, 0.15);\n        cursor: pointer;\n        transition: all 0.25s ease 0s;\n    }\n"]);return bn=function(){return n},n}var dn=l.a.button(bn()),pn=l.a.img(un()),ln=function(n){return Object(r.jsxs)(dn,Object(j.a)(Object(j.a)({},n),{},{children:[Object(r.jsx)("span",{children:n.children}),Object(r.jsx)(pn,{src:n.iconUrl})]}))};function jn(){var n=Object(p.a)(["\n    width:100%;\n    height:100%;\n    position:absolute;\n    left:0;\n    top:0;\n    z-index:120;\n    background:rgb(0,0,0,0.5);\n    border-raduis:12px;\n"]);return jn=function(){return n},n}function xn(){var n=Object(p.a)(["\n    display:block;\n    text-align:center;\n    color:red;\n    font-size:16px;\n"]);return xn=function(){return n},n}function hn(){var n=Object(p.a)(["\n    width:100%;\n    border-top:1px solid rgb(84, 84, 84);;\n    margin:20px 0;\n    border-radius:3px;\n    display:flex;\n    justify-content:center;\n    span{\n        background:rgb(23, 24, 34);\n        text-align:center;\n        font-size:15px;\n        width:40px;\n        margin-top:-9px;\n        color:rgb(84, 84, 84);\n    }\n"]);return hn=function(){return n},n}function gn(){var n=Object(p.a)(["\n    margin-top:50px;\n    display:flex;\n    justify-content:space-between;\n    padding-bottom:10px;\n    gap:20px;\n"]);return gn=function(){return n},n}function fn(){var n=Object(p.a)(["\n    display:block;\n    margin-top:20px;\n    color: white;\n    text-align: center;\n    font-weight: 100;\n    font-size: 16px;\n    letter-spacing:0.3px;\n    span{\n        font-weight:bold;\n        :hover{\n            opacity: 0.75;\n            cursor:pointer;\n        }\n    }\n"]);return fn=function(){return n},n}function On(){var n=Object(p.a)(["\n    color:rgb(0, 163, 171);\n    text-align:right;\n    display:block;\n    margin:6px 0px;\n    :hover{\n        opacity:0.9;\n        cursor:pointer;\n    }\n"]);return On=function(){return n},n}function vn(){var n=Object(p.a)(["\n    p{\n        font-size:16px;\n        color:rgb(123,127,158);\n        margin:14px 0;\n    }\n"]);return vn=function(){return n},n}function mn(){var n=Object(p.a)(["\n    position:relative;\n    padding: 35px 47px;\n    max-width:420px;\n    width:100%;\n    @media screen and (max-width: 580px){\n        width:auto;\n    }\n    height:auto;\n    margin:0 auto;\n    color:white;\n    background: rgb(23, 24, 34);\n    border:2px solid rgb(255, 255, 255, 0.03);\n    border-radius:12px;\n    z-index:100;\n    h2{\n        text-align:center;\n    }\n"]);return mn=function(){return n},n}var wn=l.a.div(mn()),yn=l.a.form(vn()),kn=l.a.span(On()),An=l.a.span(fn()),Cn=l.a.div(gn()),zn=l.a.div(hn()),In=l.a.span(xn()),Sn=l.a.div(jn()),Fn=function(n){var t=Object(i.useState)("sha-sabir@yandex.ru"),e=Object(J.a)(t,2),a=e[0],c=e[1],s=Object(i.useState)("sabirmipt"),u=Object(J.a)(s,2),p=u[0],l=u[1],j=Object(o.c)((function(n){return n.auth.isFetching})),x=Object(o.c)((function(n){return n.auth.errorMessage})),h=Object(o.b)(),g=Object(E.f)(),f=function(){var n=Object(d.a)(b.a.mark((function n(t){return b.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t.preventDefault(),n.next=3,h(M(a,p));case 3:n.sent?g.push("/"):l("");case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}();return Object(r.jsxs)(wn,{children:[j?Object(r.jsx)(Sn,{children:Object(r.jsx)(z,{})}):"",Object(r.jsx)("h2",{children:"Sign In"}),Object(r.jsxs)(Cn,{children:[Object(r.jsx)(ln,{iconUrl:"https://my.subtitles.love/static/media/bt_icon_face.8550be43.svg",children:"Continue with Facebook"}),Object(r.jsx)(ln,{iconUrl:"https://my.subtitles.love/static/media/bt_icon_google.a677a569.svg",children:"Continue with Google"})]}),Object(r.jsx)(zn,{children:Object(r.jsx)("span",{children:"or"})}),Object(r.jsxs)(yn,{onSubmit:f,children:[Object(r.jsx)("p",{children:"Email"}),Object(r.jsx)(H,{required:!0,value:a,onChange:function(n){return c(n.target.value)},type:"email"}),Object(r.jsx)("p",{children:"Password"}),Object(r.jsx)(H,{required:!0,value:p,onChange:function(n){return l(n.target.value)},type:"password"}),Object(r.jsx)(kn,{onClick:function(){return n.onCurrentFormChange("forgot")},children:"Forgot password"}),Object(r.jsx)(In,{children:x.length?x:""}),Object(r.jsx)(nn,{type:"submit",children:"Login"})]}),Object(r.jsxs)(An,{onClick:function(){return n.onCurrentFormChange("signup")},children:["Don't have an account? ",Object(r.jsx)("span",{children:"Sign Up"})]})]})};function En(){var n=Object(p.a)(["\n    width:100%;\n    border-top:1px solid rgb(84, 84, 84);;\n    margin:20px 0;\n    border-radius:3px;\n    display:flex;\n    justify-content:center;\n    span{\n        background:rgb(23, 24, 34);\n        text-align:center;\n        font-size:15px;\n        width:40px;\n        margin-top:-9px;\n        color:rgb(84, 84, 84);\n    }\n"]);return En=function(){return n},n}function Nn(){var n=Object(p.a)(["\n    margin-top:50px;\n    display:flex;\n    justify-content:space-between;\n    padding-bottom:10px;\n    gap:20px;\n"]);return Nn=function(){return n},n}function Gn(){var n=Object(p.a)(["\n    display:block;\n    width: 100%;\n    text-align: center;\n    color: rgb(255, 252, 252);\n    opacity: 0.75;\n    font-size: 12px;\n    margin-bottom: 15px;\n    margin-top: 15px;\n    span{\n        color: rgb(1, 163, 171);\n        cursor:pointer;\n        text-decoration:underline\n    }\n"]);return Gn=function(){return n},n}function Rn(){var n=Object(p.a)(["\n    display:block;\n    margin-top:20px;\n    color: white;\n    text-align: center;\n    font-weight: 100;\n    font-size: 16px;\n    letter-spacing:0.3px;\n    span{\n        font-weight:bold;\n        :hover{\n            opacity: 0.75;\n            cursor:pointer;\n        }\n    }\n"]);return Rn=function(){return n},n}function Un(){var n=Object(p.a)(["\n    p{\n        font-size:16px;\n        color:rgb(123,127,158);\n        margin:14px 0;\n    }\n"]);return Un=function(){return n},n}function Bn(){var n=Object(p.a)(["\n    padding: 35px 47px;\n    max-width:420px;\n    width:100%;\n    @media screen and (max-width: 580px){\n        width:auto;\n    }\n    height:auto;\n    margin:0 auto;\n    color:white;\n    background: rgb(23, 24, 34);\n    border:2px solid rgb(255, 255, 255, 0.03);\n    border-radius:12px;\n    z-index:100;\n    h2{\n        text-align:center;\n    }\n"]);return Bn=function(){return n},n}var Mn=l.a.div(Bn()),Tn=l.a.form(Un()),_n=l.a.span(Rn()),Xn=l.a.span(Gn()),Yn=l.a.div(Nn()),Pn=l.a.div(En()),Dn=function(n){var t=Object(i.useState)(""),e=Object(J.a)(t,2),a=e[0],c=e[1],o=Object(i.useState)(""),s=Object(J.a)(o,2),u=s[0],b=s[1],d=Object(i.useState)(""),p=Object(J.a)(d,2),l=p[0],j=p[1];return Object(r.jsxs)(Mn,{children:[Object(r.jsx)("h2",{children:"Sign Up"}),Object(r.jsxs)(Yn,{children:[Object(r.jsx)(ln,{iconUrl:"https://my.subtitles.love/static/media/bt_icon_face.8550be43.svg",children:"Continue with Facebook"}),Object(r.jsx)(ln,{iconUrl:"https://my.subtitles.love/static/media/bt_icon_google.a677a569.svg",children:"Continue with Google"})]}),Object(r.jsx)(Pn,{children:Object(r.jsx)("span",{children:"or"})}),Object(r.jsxs)(Tn,{children:[Object(r.jsx)("p",{children:"Email"}),Object(r.jsx)(H,{value:a,onChange:function(n){return c(n.target.value)},type:"email"}),Object(r.jsx)("p",{children:"Password"}),Object(r.jsx)(H,{value:u,onChange:function(n){return b(n.target.value)},type:"password",placeholder:"7 or more symbols"}),Object(r.jsx)("p",{children:"Confirm password"}),Object(r.jsx)(H,{value:l,onChange:function(n){return j(n.target.value)},type:"password",placeholder:"7 or more symbols"}),Object(r.jsxs)(Xn,{children:["By submitting this form I agree to the ",Object(r.jsx)("span",{children:"Privacy Policy"})]}),Object(r.jsx)(nn,{children:"Get started!"})]}),Object(r.jsxs)(_n,{children:["have an account? ",Object(r.jsx)("span",{onClick:function(){return n.onCurrentFormChange("signin")},children:"Sign In"})]})]})};function Kn(){var n=Object(p.a)(["\n    position: relative;\n    display: flex;\n    flex-direction: column;\n    -webkit-box-align: center;\n    align-items: center;\n    -webkit-box-pack: center;\n    justify-content: center;\n    width: 100%;\n    height: 100vh;\n    box-sizing: border-box;\n"]);return Kn=function(){return n},n}var Ln=l.a.div(Kn()),Qn=function(n){var t=Object(i.useState)(n.currentForm||"signin"),e=Object(J.a)(t,2),a=e[0],c=e[1];return Object(r.jsx)(Ln,{children:"signin"===a?Object(r.jsx)(Fn,{onCurrentFormChange:function(n){return c(n)}}):"signup"===a?Object(r.jsx)(Dn,{onCurrentFormChange:function(n){return c(n)}}):"forgot"===a?Object(r.jsx)(sn,{onCurrentFormChange:function(n){return c(n)}}):Object(r.jsx)(Fn,{onCurrentFormChange:function(n){return c(n)}})})};function Vn(){var n=Object(p.a)(["\n    color:white;\n    font-size:32px;\n    letter-spacing:2px;\n    text-align:center\n"]);return Vn=function(){return n},n}var Jn=l.a.div(Vn()),Zn=function(n){var t=Object(E.g)().pathname;return Object(r.jsxs)(Jn,{children:[Object(r.jsx)("b",{children:t})," is Not Found 404",Object(r.jsxs)("p",{children:["go to ",Object(r.jsx)(s.b,{to:"/",children:"/"})]})]})},qn=function(n){var t=Object(o.c)((function(n){return n.user.user}));return Object(r.jsxs)(E.c,{children:[Object(r.jsx)(E.a,{exact:!0,path:"/",render:function(){return t?Object(r.jsx)(V,{}):Object(r.jsx)(Qn,{currentForm:"signin"})}}),Object(r.jsx)(E.a,{path:"*",render:function(){return Object(r.jsx)(Zn,{})}})]})};function Hn(){var n=Object(p.a)(["\n    position: fixed;\n    right: 0px;\n    bottom: 0px;\n    top: 0px;\n"]);return Hn=function(){return n},n}function Wn(){var n=Object(p.a)(["\n    position: fixed;\n    left: 0px;\n    bottom: 0px;\n    top: 0px;\n"]);return Wn=function(){return n},n}function $n(){var n=Object(p.a)(["\n    position: relative;\n    display: flex;\n    flex-direction: column;\n    -webkit-box-align: center;\n    align-items: center;\n    -webkit-box-pack: center;\n    justify-content: center;\n    background: rgb(24, 25, 35);\n    width: 100%;\n    height: 100vh;\n    box-sizing: border-box;\n"]);return $n=function(){return n},n}var nt=l.a.div($n()),tt=l.a.img(Wn()),et=l.a.img(Hn());var rt=function(){var n=Object(o.c)((function(n){return n.app.isInitialized})),t=Object(o.b)();return Object(i.useEffect)((function(){return Object(d.a)(b.a.mark((function n(){return b.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!window.localStorage.getItem("token")){n.next=3;break}return n.next=3,t(m());case 3:t({type:I});case 4:case"end":return n.stop()}}),n)})))()}),[]),Object(r.jsxs)(nt,{children:[Object(r.jsx)(tt,{src:"https://my.subtitles.love/static/media/login_scr_left.6cb41681.svg"}),Object(r.jsx)(et,{src:"https://my.subtitles.love/static/media/login_scr_right.745716da.svg"}),n?Object(r.jsx)(qn,{}):Object(r.jsx)(z,{})]})},it=e(21),at=e(43),ct=Object(it.c)({app:F,user:w,auth:T}),ot=Object(it.d)((function(n,t){return"auth/LOGOUT"===t.type&&(n={app:{isInitialized:!0}}),ct(n,t)}),Object(it.a)(at.a));x.defaults.baseURL="https://api.englishpatient.org",x.defaults.headers.post["Content-Type"]="application/json";var st=window.localStorage.getItem("token");st&&(x.defaults.headers.common.Authorization=st),c.a.render(Object(r.jsx)(s.a,{basename:"/eng_patient",children:Object(r.jsx)(o.a,{store:ot,children:Object(r.jsx)(rt,{})})}),document.getElementById("root"))}},[[73,1,2]]]);
//# sourceMappingURL=main.d475eb00.chunk.js.map