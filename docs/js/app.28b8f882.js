(function(t){function e(e){for(var a,c,r=e[0],o=e[1],u=e[2],l=0,f=[];l<r.length;l++)c=r[l],Object.prototype.hasOwnProperty.call(s,c)&&s[c]&&f.push(s[c][0]),s[c]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(t[a]=o[a]);d&&d(e);while(f.length)f.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,c=1;c<n.length;c++){var r=n[c];0!==s[r]&&(a=!1)}a&&(i.splice(e--,1),t=o(o.s=n[0]))}return t}var a={},c={app:0},s={app:0},i=[];function r(t){return o.p+"js/"+({}[t]||t)+"."+{"chunk-127beaae":"73779955","chunk-14c7b094":"c00350bd","chunk-15a542bd":"e0f6b8c1","chunk-330b7904":"63cb4019","chunk-3c700842":"9e415976","chunk-4431c58e":"01868d96","chunk-4f4601a7":"f807ef18","chunk-5cb76f88":"441b453a","chunk-69d02cc2":"df4f4c37","chunk-6ec979ee":"eaba13db","chunk-78ab8490":"b3c1e092","chunk-7a6df304":"4e4ee8f6","chunk-9d99a3a4":"c0afb8e3","chunk-a0f3e386":"14f1117d","chunk-b4bc52d0":"38f74d09"}[t]+".js"}function o(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.e=function(t){var e=[],n={"chunk-127beaae":1,"chunk-14c7b094":1,"chunk-15a542bd":1,"chunk-330b7904":1,"chunk-3c700842":1,"chunk-4431c58e":1,"chunk-4f4601a7":1,"chunk-5cb76f88":1,"chunk-69d02cc2":1,"chunk-6ec979ee":1,"chunk-78ab8490":1,"chunk-7a6df304":1,"chunk-9d99a3a4":1,"chunk-a0f3e386":1,"chunk-b4bc52d0":1};c[t]?e.push(c[t]):0!==c[t]&&n[t]&&e.push(c[t]=new Promise((function(e,n){for(var a="css/"+({}[t]||t)+"."+{"chunk-127beaae":"2603f4cf","chunk-14c7b094":"5905ea58","chunk-15a542bd":"55f47199","chunk-330b7904":"af912e27","chunk-3c700842":"d4c10f23","chunk-4431c58e":"0c770150","chunk-4f4601a7":"6ecefd01","chunk-5cb76f88":"a25e9826","chunk-69d02cc2":"36890111","chunk-6ec979ee":"87b3479e","chunk-78ab8490":"cd4a07f7","chunk-7a6df304":"cfae9544","chunk-9d99a3a4":"7d8b42d0","chunk-a0f3e386":"743e68f7","chunk-b4bc52d0":"17f5c082"}[t]+".css",s=o.p+a,i=document.getElementsByTagName("link"),r=0;r<i.length;r++){var u=i[r],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===a||l===s))return e()}var f=document.getElementsByTagName("style");for(r=0;r<f.length;r++){u=f[r],l=u.getAttribute("data-href");if(l===a||l===s)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var a=e&&e.target&&e.target.src||s,i=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=a,delete c[t],d.parentNode.removeChild(d),n(i)},d.href=s;var h=document.getElementsByTagName("head")[0];h.appendChild(d)})).then((function(){c[t]=0})));var a=s[t];if(0!==a)if(a)e.push(a[2]);else{var i=new Promise((function(e,n){a=s[t]=[e,n]}));e.push(a[2]=i);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,o.nc&&l.setAttribute("nonce",o.nc),l.src=r(t);var f=new Error;u=function(e){l.onerror=l.onload=null,clearTimeout(d);var n=s[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),c=e&&e.target&&e.target.src;f.message="Loading chunk "+t+" failed.\n("+a+": "+c+")",f.name="ChunkLoadError",f.type=a,f.request=c,n[1](f)}s[t]=void 0}};var d=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},o.m=t,o.c=a,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(n,a,function(e){return t[e]}.bind(null,a));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var f=0;f<u.length;f++)e(u[f]);var d=l;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},2738:function(t,e,n){t.exports=n.p+"img/lonbon.18cce4ea.png"},"428c":function(t,e,n){t.exports=n.p+"img/logo_white.367c0206.png"},5091:function(t,e,n){},"547b":function(t,e,n){"use strict";n("5091")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Nav"),n("div",{staticClass:"body"},[n("router-view")],1),n("Footer")],1)},s=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:"nav"+[t.bgc?" bgc":""]},[t._m(0)])},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"wrapper"},[a("div",{staticClass:"logo"},[a("a",{attrs:{href:"/"}},[a("img",{attrs:{src:n("428c"),alt:"logo"}}),a("span",[t._v("安徽鼎华网络科技有限公司")])])]),a("div",{staticClass:"menu"},[a("span",[a("a",{attrs:{href:"/"}},[t._v("首页")])]),a("span",[a("a",{attrs:{href:"/about"}},[t._v("关于我们")])]),a("span",[a("a",{attrs:{href:"/project"}},[t._v("项目案列")])]),a("span",[a("a",{attrs:{href:"/case"}},[t._v("产品中心")])]),a("span",[a("a",{attrs:{href:"/news"}},[t._v("新闻中心")])])]),a("div",{staticClass:"contact"},[a("img",{attrs:{src:n("9fa8"),alt:""}}),a("span",[t._v("0551-68502009")])])])}],o={name:"Nav",data:function(){return{bgc:!1}},mounted:function(){var t=this;window.addEventListener("scroll",(function(){var e=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop;t.bgc=e>=1}))}},u=o,l=(n("a209"),n("2877")),f=Object(l["a"])(u,i,r,!1,null,"0f282248",null),d=f.exports,h=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},m=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"footer"},[n("div",{staticClass:"top"},[n("div",{staticClass:"project"},[n("div",{staticClass:"title"},[t._v("项目案例")]),n("div",{staticClass:"item"},[n("a",{attrs:{href:""}},[t._v("智慧监管")])]),n("div",{staticClass:"item"},[n("a",{attrs:{href:""}},[t._v("智慧监狱")])]),n("div",{staticClass:"item"},[n("a",{attrs:{href:""}},[t._v("智慧戒毒")])]),n("div",{staticClass:"item"},[n("a",{attrs:{href:""}},[t._v("智慧园区")])])]),n("div",{staticClass:"link"},[n("div",{staticClass:"title"},[t._v("友情链接")]),n("div",{staticClass:"item"},[n("a",{attrs:{href:"http://www.chinagci.com/html/index.html",target:"_blank"}},[t._v("杰赛科技")])])]),n("div",{staticClass:"job"},[n("div",{staticClass:"title"},[t._v("人才招聘")]),n("div",{staticClass:"item"},[n("a",{attrs:{href:"https://jobs.51job.com/all/co6169924.html",target:"_blank"}},[t._v("前程无忧")])]),n("div",{staticClass:"item"},[n("a",{attrs:{href:"https://jobs.51job.com/all/co6169924.html",target:"_blank"}},[t._v("BOSS直聘")])])]),n("div",{staticClass:"contact"},[n("div",{staticClass:"title"},[t._v("联系我们")]),n("div",{staticClass:"item"},[t._v("电话: 0551-68502009")]),n("div",{staticClass:"item"},[t._v("邮箱: wangyongping@dinghua.com")]),n("div",{staticClass:"item"},[t._v("地址: 安徽省合肥市中安创谷科技园A4栋633室")])])]),n("div",{staticClass:"bottom"},[t._v("Copyright © 2020 鼎华网络科技有限公司 版权所有")])])}],p={name:"Footer"},v=p,b=(n("547b"),Object(l["a"])(v,h,m,!1,null,"42784c77",null)),g=b.exports,C={name:"home",components:{Nav:d,Footer:g},mounted:function(){document.addEventListener("contextmenu",(function(t){t.preventDefault()}))}},k=C,w=(n("5c0b"),Object(l["a"])(k,c,s,!1,null,null,null)),_=w.exports,A=(n("d3b7"),n("8c4f")),E=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},y=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("div",{staticClass:"banner v-cloak"},[a("img",{attrs:{src:n("c623"),alt:""}})]),a("div",{staticClass:"project"},[a("div",{staticClass:"title"},[t._v("解决方案")]),a("div",{staticClass:"subtitle"},[t._v("提供专业化解决方案, 为行业创造价值，让技术服务市场，打造精品案例。")]),a("div",{staticClass:"box"},[a("a",{staticClass:"item item_1",attrs:{href:"/"}},[a("div",{staticClass:"item-title"},[t._v("智慧监管")])]),a("a",{staticClass:"item item_2",attrs:{href:"/"}},[a("div",{staticClass:"item-title"},[t._v("智慧监狱")])]),a("a",{staticClass:"item item_3",attrs:{href:"/"}},[a("div",{staticClass:"item-title"},[t._v("智慧戒毒")])]),a("a",{staticClass:"item item_4",attrs:{href:"/"}},[a("div",{staticClass:"item-title"},[t._v("智慧园区")])])])]),a("div",{staticClass:"news"},[a("div",{staticClass:"title"},[t._v("新闻中心")]),a("div",{staticClass:"box"},[a("a",{staticClass:"item item_1",attrs:{href:"/news/news1"}},[a("div",{staticClass:"info"},[a("span",{staticClass:"desc"},[t._v("公司正式搬迁至合肥中安创谷科技园")]),a("span",{staticClass:"date"},[t._v("5-23")])])]),a("a",{staticClass:"item item_2",attrs:{href:"/news/news2"}},[a("div",{staticClass:"info"},[a("span",{staticClass:"desc"},[t._v("根植公安监管行业的“智慧点”")]),a("span",{staticClass:"date"},[t._v("7-8")])])]),a("a",{staticClass:"item item_3",attrs:{href:"/news/news3"}},[a("div",{staticClass:"info"},[a("span",{staticClass:"desc"},[t._v("智慧监狱建设现状及发展前景介绍")]),a("span",{staticClass:"date"},[t._v("11-8")])])])])]),a("div",{staticClass:"partner"},[a("div",{staticClass:"title"},[t._v("合作伙伴")]),a("div",{staticClass:"box"},[a("div",{staticClass:"item"},[a("img",{attrs:{src:n("78f5"),alt:""}})]),a("div",{staticClass:"item"},[a("img",{attrs:{src:n("7ce7"),alt:""}})]),a("div",{staticClass:"item"},[a("img",{attrs:{src:n("2738"),alt:""}})]),a("div",{staticClass:"item"},[a("img",{attrs:{src:n("91e2"),alt:""}})]),a("div",{staticClass:"item"},[a("img",{attrs:{src:n("8435"),alt:""}})]),a("div",{staticClass:"item"},[a("img",{attrs:{src:n("9e94"),alt:""}})])])])])}],j={name:"Home"},x=j,S=(n("92a8"),Object(l["a"])(x,E,y,!1,null,"c69b64fc",null)),O=S.exports;a["a"].use(A["a"]);var P=[{path:"/",name:"Home",component:O},{path:"/about",name:"About",component:function(){return n.e("chunk-9d99a3a4").then(n.bind(null,"f820"))}},{path:"/case",name:"Case",component:function(){return n.e("chunk-78ab8490").then(n.bind(null,"9fe4"))}},{path:"/case/Security",name:"Security",component:function(){return n.e("chunk-4f4601a7").then(n.bind(null,"b602"))}},{path:"/case/Emergency",name:"Emergency",component:function(){return n.e("chunk-b4bc52d0").then(n.bind(null,"f626"))}},{path:"/case/Perceive",name:"Perceive",component:function(){return n.e("chunk-a0f3e386").then(n.bind(null,"c5df"))}},{path:"/case/Supervision",name:"Supervision",component:function(){return n.e("chunk-7a6df304").then(n.bind(null,"fb6f"))}},{path:"/project",name:"Project",component:function(){return n.e("chunk-14c7b094").then(n.bind(null,"07bd"))}},{path:"/project/Smartprison",name:"Smartprison",component:function(){return n.e("chunk-6ec979ee").then(n.bind(null,"37a6"))}},{path:"/project/Supervision",name:"Supervision",component:function(){return n.e("chunk-330b7904").then(n.bind(null,"6265"))}},{path:"/project/Park",name:"Park",component:function(){return n.e("chunk-15a542bd").then(n.bind(null,"51ac"))}},{path:"/project/Detoxification",name:"Detoxification",component:function(){return n.e("chunk-69d02cc2").then(n.bind(null,"1517"))}},{path:"/news",name:"News",component:function(){return n.e("chunk-5cb76f88").then(n.bind(null,"a2f9"))}},{path:"/news/news1",name:"news1",component:function(){return n.e("chunk-3c700842").then(n.bind(null,"1ec2"))}},{path:"/news/news2",name:"news2",component:function(){return n.e("chunk-4431c58e").then(n.bind(null,"6620"))}},{path:"/news/news3",name:"news3",component:function(){return n.e("chunk-127beaae").then(n.bind(null,"928f"))}}],D=new A["a"]({base:"",routes:P}),L=D;n("f5df1");a["a"].config.productionTip=!1,new a["a"]({router:L,render:function(t){return t(_)}}).$mount("#app")},"584c":function(t,e,n){},"5c0b":function(t,e,n){"use strict";n("9c0c")},"78f5":function(t,e,n){t.exports=n.p+"img/hikvision.1f5e85c6.png"},"7ce7":function(t,e,n){t.exports=n.p+"img/supermap.9908cfba.png"},8435:function(t,e,n){t.exports=n.p+"img/ITC.59474cb7.jpg"},8456:function(t,e,n){},"91e2":function(t,e,n){t.exports=n.p+"img/meiyi.43624d7f.png"},"92a8":function(t,e,n){"use strict";n("584c")},"9c0c":function(t,e,n){},"9e94":function(t,e,n){t.exports=n.p+"img/7vp.1b6fcf77.png"},"9fa8":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAE/ElEQVRoQ+1ZXWhcRRT+zr1hN5Gm4EOt1Y1pZu7N2gZD+yBiLdiWqogP4k/zoIJoFB9EH6r4B2IFRQVFsOCDliJYEayKaAURaRVbWlELFtfGvTObRCWitYrUdSFu5siE3bDZ7M+d3Q01koGQZXO+75xvzsw5MxPCEh+0xOPHsoCzncHlDPzvMpDJZBLJZHI1Ea02xqzwfX9mZmYm7/t+3v4uFAqzn4eGhqY7Ib7lJTQ2NjacSCQ2MPNGItoAYDUznw/g3JiB/U5EETMrY4zyPC8qFovfptPpb2LiZ81iC9BabwZwHYDtADYC8F0cOdieAvAJgC+Y+XAQBF83wjYUEEXRKiJ6HMC1RBQ4BNExU2Z+JQiCe+oR1hUQRdEWInr1bAVeHbAx5u4wDPdUf19TgFLqJSK6r2PT2CGiRCIR9vX1qUq6BQKUUk8T0WMt+MwAmASQZ+Y8gL+I6IwxZq7aeJ7HJd4dAIZcfRDRp0KIrXUFZLPZdb7vf+dKDCDT1dU10t/fHws7OTm5vlgsHgPQ6+qLiO4XQuwu4+ZlQGv9LoAbXEkBvCmlvMUFl8vlDjHzFhfMbNkkOimEWL9AgFKqj4h+cCUskb4ghHjQBRtF0S7P855wwcwFTXSxEOL7eX0gm81e5fv+x60QGmOeDMNwlwtWa22Dd8JU8I9KKffOE6CUeoCInncJomxbFpDJZFZ0d3fvZuY0Ea1h5guI6G8Atjn9ysxHgiB42OLaEUBEcxmf2wPtEJYFRFEkPc+bV+aqJuRUMplcl0qlTrfjr3LPzQloZ02WBZSOG583yqIx5vowDN9vx19lOW1XwIee5+0ZGBh4zwady+X2MfOtjQRUOreFA8BDRHQTgDUOy3evlHJ03h7QWtsy+EYMkhPMvM8Yc2BwcPBk2V5rfSOAd2Lgrcm9UsqXK23t0cXzvCuJaEuz8srMdwRB8Fp1FbrM933bXCrHDDNniciWrCyAt6WUX9YKUmtd7rJNNTCzZubLwzC0m7vmmJiYWFMsFm0RmC0G9qdsWFnx5jUyOwsVbD+GYaibRdPGZvwgn8/fPjw8/EczHw2XZKtgpdQ2IroTQMM134T/CBGNlptSK7E0uw8kjTG9RLSyq6url5l7jTHbPc+7uZXDWK0Amdke+o4DOM7Mn9kl29PT84sttXEENRSglLL3gbviENWweZSItDHmHwCDRPScCw8RnWbmnwAclFLurIetK2BqauqcQqFgN/UlLo6tbbFYXJVOp3+rxI2Pj681xoy7chHRUSHEJmcBSqmtRHSwBYcjQoj9tXBKqSuI6LArJ4BLpZRf1cLVzYDW+hEAzzg6m5BSDjTCaK3tpeciR96dUsoXnQQopT4iomtcHNW6MVXjW7wH7JdSjsQWoLW2M2RnynUsSgbsZg6CwB47FoyaSyiXy+1g5rdco7f2RLQYewDMvDkIgiPVMdUUoLV+HcBtrQjodBUqx2Dfp4QQT8UV8CeAla0KKOHa6gPVvpn5UBAE25oKKJ0KD7UZ/KLApZQLVsyCL/7LApLJZF8qlbLdeW4sKQHGmE1hGB5tKMD+UWttW/7aRVkHLZIS0ZQQ4sKme6AkoJ0njxZDbAyr93TT6HX66tLD0zCAFYsSVXPSMwBOAHhWSnkgdiOrNrRvmdPT0+c199c5C9/3f45z0Yn9H5rOhdZZpmUBnZ1Pd7blDLjPWWcRSz4D/wJTCgtPnqnNAQAAAABJRU5ErkJggg=="},a209:function(t,e,n){"use strict";n("8456")},c623:function(t,e,n){t.exports=n.p+"img/banner_4.4d9fd992.jpg"}});
//# sourceMappingURL=app.28b8f882.js.map