(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{23:function(e){e.exports={a:[{name:"Mana Asthavon",title:"Queen of Demons",race:"Demon",organization:"Shadowfall",primaryColor:"lime",secondaryColor:"green",textBackgroundColor:"hsl(125, 82%, 28%)",textDark:!0,traits:"none",picture:"Img/Mana2.gif",headshot:"Img/Mana.jpg",player:"The Frost"},{name:"Adamant",title:"???",race:"Race Unknown",organization:"Unaffiliated",primaryColor:"#b30000",secondaryColor:"#ff6666",textBackgroundColor:"#ff99cc",textDark:!0,traits:"none",picture:"Img/Adamant2.jpg",headshot:"Img/Adamant.jpg",player:"Watamote"},{name:"Sofia",title:"The Melody",race:"Quincy",organization:"Vandenreich",primaryColor:"#bc9e08",secondaryColor:"#ecc60ecc",textBackgroundColor:"#8f673a",textDark:!1,traits:"none",picture:"Img/Sofia2.gif",headshot:"Img/Sofia.PNG",player:"The Owl"},{name:"Calypso",title:"Crybaby",race:"Danava of Dreams/Nightmares",organization:"Unaffiliated",primaryColor:"#fb9327de",secondaryColor:"#ea0f0f",textBackgroundColor:"#ea0f0f",textDark:!1,traits:"none",picture:"Img/Calypso2.PNG",headshot:"Img/Calypso.jpg",player:"Lillian"},{name:"Henrex Astillon",title:"Stealth Force Captain",race:"Shinigami/Demon Hybrid",organization:"Gotei 13, Vastime, Guild of Heroes",primaryColor:"#5A178C",secondaryColor:"#316AD5",textBackgroundColor:"#6131d5",textDark:!1,traits:"none",picture:"Img/Henrex2.png",headshot:"Img/Henrex.png",player:"Henrex"},{name:"Yasuko",title:"Spirit Tamer",race:"Spiritual Human",organization:"Hebi Laboratories",primaryColor:"#8B008B",secondaryColor:"#4B0082",textBackgroundColor:"#8B008B",textDark:!1,traits:"none",picture:"Img/Yasuko2.jpg",headshot:"Img/Yasuko.PNG",player:"MWD"},{name:"Suzu Hebi",title:"Trecera Espada",race:"Transcended Arrancar",organization:"Shadow Fall",primaryColor:"#9400D3",secondaryColor:"#9400D3",textBackgroundColor:"#9400D3",textDark:!1,traits:"none",picture:"Img/Suzu2.jpg",headshot:"Img/Suzu.PNG",player:"Zetsurin"}]}},24:function(e,t,a){e.exports=a(55)},29:function(e,t,a){},31:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},32:function(e,t,a){},34:function(e,t,a){},38:function(e,t,a){},53:function(e,t,a){},55:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(9),i=a.n(o);a(29),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));for(var l=a(4),s=a(5),c=a(7),m=a(6),p=a(8),u=(a(31),a(32),a(56)),d=(a(34),function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){if(!this.props.item.textDark){var e=document.getElementsByClassName("name-focus"),t=!0,a=!1,n=void 0;try{for(var r,o=e[Symbol.iterator]();!(t=(r=o.next()).done);t=!0){r.value.style.color="white"}}catch(i){a=!0,n=i}finally{try{t||null==o.return||o.return()}finally{if(a)throw n}}}}},{key:"render",value:function(){var e=this.props.item.name;return window.setTimeout(function(){var t=document.getElementById("name-box-"+e),a=document.getElementById("name-"+e);t&&a&&(a.classList.remove("invisible"),t.classList.remove("invisible"))},500),r.a.createElement("span",{className:"headshot"},r.a.createElement("span",{id:"name-box-"+this.props.item.name,className:"name-box invisible",style:{"background-color":this.props.item.textBackgroundColor}},r.a.createElement("span",{id:"name-"+this.props.item.name,className:"name-focus invisible"},this.props.item.name,r.a.createElement("br",null),this.props.item.title,r.a.createElement("br",null),this.props.item.race,r.a.createElement("br",null),this.props.item.organization)),r.a.createElement("img",{className:"image-box",id:"imgFull",src:this.props.item.headshot}))}}]),t}(n.Component)),h=function(e){e.match;var t=e.item;return r.a.createElement(u.a,{to:"/".concat(t.name)},r.a.createElement(d,{item:t}))},f=function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componetdidUpdate",value:function(){document.getElementById("main-color").style.backgroundColor="#61dafb"}},{key:"inWords",value:function(e){var t=["","one ","two ","three ","four ","five ","six ","seven ","eight ","nine ","ten ","eleven ","twelve ","thirteen ","fourteen ","fifteen ","sixteen ","seventeen ","eighteen ","nineteen "],a=["","","twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"];if((e=e.toString()).length>9)return"overflow";var n=("000000000"+e).substr(-9).match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);if(n){var r="";return r+=0!=n[1]?(t[Number(n[1])]||a[n[1][0]]+" "+t[n[1][1]])+"crore ":"",r+=0!=n[2]?(t[Number(n[2])]||a[n[2][0]]+" "+t[n[2][1]])+"lakh ":"",r+=0!=n[3]?(t[Number(n[3])]||a[n[3][0]]+" "+t[n[3][1]])+"thousand ":"",r+=0!=n[4]?(t[Number(n[4])]||a[n[4][0]]+" "+t[n[4][1]])+"hundred ":"",r+=0!=n[5]?(""!=r?"and ":"")+(t[Number(n[5])]||a[n[5][0]]+" "+t[n[5][1]])+"only ":""}}},{key:"render",value:function(){var e=0,t=[];if(this.props.items.length>0){var a=!0,n=!1,o=void 0;try{for(var i,l=this.props.items[Symbol.iterator]();!(a=(i=l.next()).done);a=!0){var s=i.value;e+=1,t.push(r.a.createElement("span",{className:"headshot-box"},r.a.createElement(h,{match:this.props.match,item:s,key:this.inWords(e)})))}}catch(c){n=!0,o=c}finally{try{a||null==l.return||l.return()}finally{if(n)throw o}}}return t}}]),t}(n.Component),y=(a(38),function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){document.getElementById(this.props.item.name).style.backgroundColor=this.props.item.primaryColor,document.getElementById("main-color").style.backgroundColor=this.props.item.secondaryColor,document.getElementById("inner-info-"+this.props.item.name).style.backgroundColor=this.props.item.textBackgroundColor;var e=document.getElementsByClassName("basic-button"),t=!0,a=!1,n=void 0;try{for(var r,o=e[Symbol.iterator]();!(t=(r=o.next()).done);t=!0){r.value.style.backgroundColor=this.props.item.secondaryColor}}catch(b){a=!0,n=b}finally{try{t||null==o.return||o.return()}finally{if(a)throw n}}if(!this.props.item.textDark){var i=document.getElementsByClassName("info-field"),l=!0,s=!1,c=void 0;try{for(var m,p=i[Symbol.iterator]();!(l=(m=p.next()).done);l=!0){m.value.style.color="white"}}catch(b){s=!0,c=b}finally{try{l||null==p.return||p.return()}finally{if(s)throw c}}}if(!this.props.item.textDark){var u=document.getElementsByClassName("basic-button"),d=!0,h=!1,f=void 0;try{for(var y,v=u[Symbol.iterator]();!(d=(y=v.next()).done);d=!0){y.value.style.color="white"}}catch(b){h=!0,f=b}finally{try{d||null==v.return||v.return()}finally{if(h)throw f}}}var g=document.createElement("img");(g.src=this.props.item.picture,console.log(g.height),console.log(g.width),console.log(g),g.width>g.height)&&document.getElementById("img-"+this.props.item.name).classList.replace("relevant-image-vertical","relevant-image-horizontal");if(this.props.linkLeft)document.getElementById("left-move-"+this.props.item.name);if(this.props.linkRight)document.getElementById("right-move-"+this.props.item.name)}},{key:"componentDidUpdate",value:function(){document.getElementById("main-color").style.backgroundColor="#61dafb";var e=document.getElementsByClassName("basic-button"),t=!0,a=!1,n=void 0;try{for(var r,o=e[Symbol.iterator]();!(t=(r=o.next()).done);t=!0){r.value.style.backgroundColor="#61dafb"}}catch(u){a=!0,n=u}finally{try{t||null==o.return||o.return()}finally{if(a)throw n}}if(!this.props.item.textDark){var i=document.getElementsByClassName("basic-button"),l=!0,s=!1,c=void 0;try{for(var m,p=i[Symbol.iterator]();!(l=(m=p.next()).done);l=!0){m.value.style.color="black"}}catch(u){s=!0,c=u}finally{try{l||null==p.return||p.return()}finally{if(s)throw c}}}}},{key:"render",value:function(){return r.a.createElement("div",{id:"full-page"+this.props.item.name,className:"full-results-page"},r.a.createElement("span",{className:"left-move",id:"left-move-"+this.props.item.name}),r.a.createElement("span",{className:"right-move",id:"right-move-"+this.props.item.name}),r.a.createElement("span",{className:"result-page",id:this.props.item.name},r.a.createElement("div",{className:"inner-information"},r.a.createElement("center",null,r.a.createElement("img",{src:this.props.item.picture,id:"img-"+this.props.item.name,className:"relevant-image-vertical"})),r.a.createElement("br",null),r.a.createElement("div",{className:"text-field",id:"inner-info-"+this.props.item.name},r.a.createElement("div",{className:"info-field"},r.a.createElement("br",null),"Name: ",this.props.item.name?this.props.item.name:"ERROR NO NAME GIVEN!"),r.a.createElement("div",{className:"info-field"},"Title"+(this.props.item.organization.includes(" ")?"s":""),": ",this.props.item.title?this.props.item.title:"N/A"),r.a.createElement("div",{className:"info-field"},"Race: ",this.props.item.race?this.props.item.race:"N/A"),r.a.createElement("div",{className:"info-field"},"Organization"+(this.props.item.organization.includes(" ")?"s":"")," : ",this.props.item.organization?this.props.item.organization:"N/A"),r.a.createElement("br",null),r.a.createElement("div",{className:"info-field"},"Overall Power Concept"+(this.props.item.organization.includes(" ")?"s":""),": ",this.props.item.powers?this.props.item.powers:"N/A"),r.a.createElement("br",null),r.a.createElement("div",{className:"info-field"},"Player: ",this.props.item.player),r.a.createElement("br",null)))))}}]),t}(n.Component)),v=a(13),g=(a(53),function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componetdidUpdate",value:function(){}},{key:"render",value:function(){return r.a.createElement("span",{className:"overview-page-outer"},r.a.createElement("span",{className:"overview-page-inner"}))}}]),t}(n.Component)),b=a(57),E=function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this;function t(e){return{opacity:e.opacity,transform:"scale(".concat(e.scale,")")}}function a(e){return Object(v.b)(e,{stiffness:330,damping:22,zIndex:100})}var n={atEnter:{opacity:0,scale:1.2},atLeave:{opacity:a(0),scale:a(.8)},atActive:{opacity:a(1),scale:a(1)}},o=[],i=0,l=!0,s=!1,c=void 0;try{for(var m,p=function(){var e=m.value;i+=1,o.push(r.a.createElement(v.a,{atEnter:n.atEnter,atLeave:n.atLeave,atActive:n.atActive,mapStyles:t,className:"route-wrapper",key:i,path:"/".concat(e.name),component:function(){return r.a.createElement(y,{item:e})}}))},d=this.props.itemList[Symbol.iterator]();!(l=(m=d.next()).done);l=!0)p()}catch(h){s=!0,c=h}finally{try{l||null==d.return||d.return()}finally{if(s)throw c}}return r.a.createElement("div",{className:"App"},r.a.createElement(b.a,null,r.a.createElement("div",{className:"App",id:"main-color"},r.a.createElement("header",{className:"App-header"},r.a.createElement(u.a,{to:"/",className:"link-button",style:{textDecoration:"none"}},r.a.createElement("button",{className:"basic-button"},"Overview")),r.a.createElement(u.a,{to:"/roster",className:"link-button",style:{textDecoration:"none"}},r.a.createElement("button",{className:"basic-button"},"Roster"))),r.a.createElement("div",{className:"App-body"},r.a.createElement(v.a,{atEnter:n.atEnter,atLeave:n.atLeave,atActive:n.atActive,mapStyles:t,className:"route-wrapper",exact:!0,path:"/",component:function(){return r.a.createElement("div",null,r.a.createElement(g,null))}}),r.a.createElement(v.a,{atEnter:n.atEnter,atLeave:n.atLeave,atActive:n.atActive,mapStyles:t,className:"route-wrapper",path:"/roster",component:function(t){var a=t.match;return r.a.createElement("div",null,r.a.createElement("h2",null,"Roster"),r.a.createElement(f,{match:a,items:e.props.itemList}))}}),o))))}}]),t}(n.Component),k=a(23).a,N=[],C=0;C<k.length;C++){var x=k[C];x.headshot=x.headshot,N.push(x)}for(var w=[],j=[],B=0;B<N.length;B++)w.includes(N[B].player)||j.push(N[B]);i.a.render(r.a.createElement(E,{itemList:j}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[24,2,1]]]);
//# sourceMappingURL=main.69eed52d.chunk.js.map