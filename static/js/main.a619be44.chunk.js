(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{212:function(e,n,t){e.exports=t(506)},233:function(e,n){},242:function(e,n){},260:function(e,n){},262:function(e,n){},281:function(e,n){},282:function(e,n){},342:function(e,n){},344:function(e,n){},354:function(e,n){},356:function(e,n){},381:function(e,n){},383:function(e,n){},384:function(e,n){},389:function(e,n){},391:function(e,n){},404:function(e,n){},416:function(e,n){},419:function(e,n){},424:function(e,n){},432:function(e,n){},505:function(e,n,t){},506:function(e,n,t){"use strict";t.r(n);var a,r,c,o,i,l,u,s,p,d,x,f,g,m,h,b,E=t(0),y=t.n(E),v=t(79),C=t.n(v),O=t(15),w=t.n(O),A=t(43),j=t(64),S=t(13),T=t(54),N=t(63),_=t.n(N),k=t(205),M=t.n(k),D=t(65),I=t(206),L=t(28),R={loading:!1,account:null,smartContract:null,web3:null,errorMsg:""},K=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"CONNECTION_REQUEST":return Object(L.a)({},R,{loading:!0});case"CONNECTION_SUCCESS":return Object(L.a)({},e,{loading:!1,account:n.payload.account,smartContract:n.payload.smartContract,web3:n.payload.web3});case"CONNECTION_FAILED":return Object(L.a)({},R,{loading:!1,errorMsg:n.payload});case"UPDATE_ACCOUNT":return Object(L.a)({},e,{account:n.payload.account});default:return e}},P={loading:!1,totalSupply:0,cost:0,error:!1,errorMsg:""},U=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"CHECK_DATA_REQUEST":return Object(L.a)({},e,{loading:!0,error:!1,errorMsg:""});case"CHECK_DATA_SUCCESS":return Object(L.a)({},e,{loading:!1,totalSupply:n.payload.totalSupply,error:!1,errorMsg:""});case"CHECK_DATA_FAILED":return Object(L.a)({},P,{loading:!1,error:!0,errorMsg:n.payload});default:return e}},F=Object(D.b)({blockchain:K,data:U}),W=[I.a],Y=Object(D.c)(D.a.apply(void 0,W)),z=Object(D.d)(F,Y),B=function(e){return{type:"CHECK_DATA_FAILED",payload:e}},H=function(){return function(){var e=Object(A.a)(w.a.mark(function e(n){var t;return w.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n({type:"CHECK_DATA_REQUEST"}),e.prev=1,e.next=4,z.getState().blockchain.smartContract.methods.totalSupply().call();case 4:t=e.sent,n({type:"CHECK_DATA_SUCCESS",payload:{totalSupply:t}}),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0),n(B("Could not load data from contract."));case 12:case"end":return e.stop()}},e,null,[[1,8]])}));return function(n){return e.apply(this,arguments)}}()},G=function(e){return{type:"CONNECTION_FAILED",payload:e}},Q=function(){return function(){var e=Object(A.a)(w.a.mark(function e(n){var t,a,r,c,o,i,l,u,s;return w.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n({type:"CONNECTION_REQUEST"}),e.next=3,fetch("/config/abi.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 3:return t=e.sent,e.next=6,t.json();case 6:return a=e.sent,e.next=9,fetch("/config/config.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 9:return r=e.sent,e.next=12,r.json();case 12:if(c=e.sent,o=window,i=o.ethereum,!(i&&i.isMetaMask)){e.next=33;break}return _.a.setProvider(i),l=new M.a(i),e.prev=18,e.next=21,i.request({method:"eth_requestAccounts"});case 21:return u=e.sent,e.next=24,i.request({method:"net_version"});case 24:e.sent==c.NETWORK.ID?(s=new _.a(a,c.CONTRACT_ADDRESS),n({type:"CONNECTION_SUCCESS",payload:{account:u[0],smartContract:s,web3:l}}),i.on("accountsChanged",function(e){n(X(e[0]))}),i.on("chainChanged",function(){window.location.reload()})):n(G("Change network to ".concat(c.NETWORK.NAME,"."))),e.next=31;break;case 28:e.prev=28,e.t0=e.catch(18),n(G("Something went wrong."));case 31:e.next=34;break;case 33:n(G("Install Metamask."));case 34:case"end":return e.stop()}},e,null,[[18,28]])}));return function(n){return e.apply(this,arguments)}}()},X=function(e){return function(){var n=Object(A.a)(w.a.mark(function n(t){return w.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:t({type:"UPDATE_ACCOUNT",payload:{account:e}}),t(H(e));case 2:case"end":return n.stop()}},n)}));return function(e){return n.apply(this,arguments)}}()},q=t(14),J=q.a.div(a||(a=Object(S.a)(["\n  background-color: var(--primary);\n  background-image: ",";\n  background-size: cover;\n  background-position: center;\n  width: 100%;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n"])),function(e){var n=e.image;return n?"url(".concat(n,")"):"none"}),V=q.a.div(r||(r=Object(S.a)(["\n  height: 8px;\n  width: 8px;\n"]))),Z=q.a.div(c||(c=Object(S.a)(["\n  height: 16px;\n  width: 16px;\n"]))),$=q.a.div(o||(o=Object(S.a)(["\n  height: 24px;\n  width: 24px;\n"]))),ee=q.a.div(i||(i=Object(S.a)(["\n  height: 32px;\n  width: 32px;\n"]))),ne=q.a.div(l||(l=Object(S.a)(["\n  display: flex;\n  flex: ",";\n  flex-direction: ",";\n  justify-content: ",";\n  align-items: ",";\n  background-color: ",";\n  width: 100%;\n  background-image: ",";\n  background-size: cover;\n  background-position: center;\n"])),function(e){var n=e.flex;return n||0},function(e){var n=e.fd;return n||"column"},function(e){var n=e.jc;return n||"flex-start"},function(e){var n=e.ai;return n||"flex-start"},function(e){return e.test?"pink":"none"},function(e){var n=e.image;return n?"url(".concat(n,")"):"none"}),te=q.a.p(u||(u=Object(S.a)(["\n  color: var(--primary-text);\n  font-size: 22px;\n  font-weight: 500;\n  line-height: 1.6;\n"]))),ae=(q.a.p(s||(s=Object(S.a)(["\n  color: var(--primary-text);\n  font-size: 18px;\n  line-height: 1.6;\n"]))),q.a.p(p||(p=Object(S.a)(["\n  color: var(--primary-text);\n  font-size: 16px;\n  line-height: 1.6;\n"])))),re=(q.a.div(d||(d=Object(S.a)(["\n  :active {\n    opacity: 0.6;\n  }\n"]))),function(e,n){return e.length>n?"".concat(e.substring(0,n),"..."):e}),ce=q.a.button(x||(x=Object(S.a)(["\n  padding: 10px;\n  border-radius: 50px;\n  border: none;\n  background-color: var(--secondary);\n  padding: 10px;\n  font-weight: bold;\n  color: var(--secondary-text);\n  width: 100px;\n  cursor: pointer;\n  box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);\n  -webkit-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);\n  -moz-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);\n  :active {\n    box-shadow: none;\n    -webkit-box-shadow: none;\n    -moz-box-shadow: none;\n  }\n"]))),oe=q.a.button(f||(f=Object(S.a)(["\n  padding: 10px;\n  border-radius: 100%;\n  border: none;\n  background-color: var(--primary);\n  padding: 10px;\n  font-weight: bold;\n  font-size: 15px;\n  color: var(--primary-text);\n  width: 30px;\n  height: 30px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);\n  -webkit-box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);\n  -moz-box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);\n  :active {\n    box-shadow: none;\n    -webkit-box-shadow: none;\n    -moz-box-shadow: none;\n  }\n"]))),ie=q.a.div(g||(g=Object(S.a)(["\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  justify-content: stretched;\n  align-items: stretched;\n  width: 100%;\n  @media (min-width: 767px) {\n    flex-direction: row;\n  }\n"]))),le=q.a.img(m||(m=Object(S.a)(["\n  width: 200px;\n  @media (min-width: 767px) {\n    width: 300px;\n  }\n  transition: width 0.5s;\n  transition: height 0.5s;\n"]))),ue=q.a.img(h||(h=Object(S.a)(["\n  box-shadow: 0px 5px 11px 2px rgba(0, 0, 0, 0.7);\n  border: 4px dashed var(--secondary);\n  background-color: var(--accent);\n  border-radius: 100%;\n  width: 200px;\n  @media (min-width: 900px) {\n    width: 250px;\n  }\n  @media (min-width: 1000px) {\n    width: 300px;\n  }\n  transition: width 0.5s;\n"]))),se=q.a.a(b||(b=Object(S.a)(["\n  color: var(--secondary);\n  text-decoration: none;\n"])));var pe=function(){var e=Object(T.b)(),n=Object(T.c)(function(e){return e.blockchain}),t=Object(T.c)(function(e){return e.data}),a=Object(E.useState)(!1),r=Object(j.a)(a,2),c=r[0],o=r[1],i=Object(E.useState)("Click buy to mint your NFT."),l=Object(j.a)(i,2),u=l[0],s=l[1],p=Object(E.useState)(1),d=Object(j.a)(p,2),x=d[0],f=d[1],g=Object(E.useState)({CONTRACT_ADDRESS:"",SCAN_LINK:"",NETWORK:{NAME:"",SYMBOL:"",ID:0},NFT_NAME:"",SYMBOL:"",MAX_SUPPLY:1,WEI_COST:0,DISPLAY_COST:0,GAS_LIMIT:0,MARKETPLACE:"",MARKETPLACE_LINK:"",SHOW_BACKGROUND:!1}),m=Object(j.a)(g,2),h=m[0],b=m[1],v=function(){""!==n.account&&null!==n.smartContract&&e(H(n.account))},C=function(){var e=Object(A.a)(w.a.mark(function e(){var n,t;return w.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/config/config.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 2:return n=e.sent,e.next=5,n.json();case 5:t=e.sent,b(t);case 7:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}();return Object(E.useEffect)(function(){C()},[]),Object(E.useEffect)(function(){v()},[n.account]),y.a.createElement(J,null,y.a.createElement(ne,{flex:1,ai:"center",style:{padding:24,backgroundColor:"var(--primary)"},image:h.SHOW_BACKGROUND?"/config/images/bg.png":null},y.a.createElement(le,{alt:"logo",src:"/config/images/logo.png"}),y.a.createElement(Z,null),y.a.createElement(ie,{flex:1,style:{padding:24},test:!0},y.a.createElement(ne,{flex:1,jc:"center",ai:"center"},y.a.createElement(ue,{alt:"example",src:"/config/images/example.gif"})),y.a.createElement(ee,null),y.a.createElement(ne,{flex:2,jc:"center",ai:"center",style:{backgroundColor:"var(--accent)",padding:24,borderRadius:24,border:"4px dashed var(--secondary)",boxShadow:"0px 5px 11px 2px rgba(0,0,0,0.7)"}},y.a.createElement(te,{style:{textAlign:"center",fontSize:50,fontWeight:"bold",color:"var(--accent-text)"}},t.totalSupply," / ",h.MAX_SUPPLY),y.a.createElement(ae,{style:{textAlign:"center",color:"var(--primary-text)"}},y.a.createElement(se,{target:"_blank",href:h.SCAN_LINK},re(h.CONTRACT_ADDRESS,15))),y.a.createElement(Z,null),Number(t.totalSupply)>=h.MAX_SUPPLY?y.a.createElement(y.a.Fragment,null,y.a.createElement(te,{style:{textAlign:"center",color:"var(--accent-text)"}},"The sale has ended."),y.a.createElement(ae,{style:{textAlign:"center",color:"var(--accent-text)"}},"You can still find ",h.NFT_NAME," on"),y.a.createElement(Z,null),y.a.createElement(se,{target:"_blank",href:h.MARKETPLACE_LINK},h.MARKETPLACE)):y.a.createElement(y.a.Fragment,null,y.a.createElement(te,{style:{textAlign:"center",color:"var(--accent-text)"}},"1 ",h.SYMBOL," costs ",h.DISPLAY_COST," ",h.NETWORK.SYMBOL,"."),y.a.createElement(V,null),y.a.createElement(ae,{style:{textAlign:"center",color:"var(--accent-text)"}},"Excluding gas fees."),y.a.createElement(Z,null),""===n.account||null===n.smartContract?y.a.createElement(ne,{ai:"center",jc:"center"},y.a.createElement(ae,{style:{textAlign:"center",color:"var(--accent-text)"}},"Connect to the ",h.NETWORK.NAME," network"),y.a.createElement(Z,null),y.a.createElement(ce,{onClick:function(n){n.preventDefault(),e(Q()),v()}},"CONNECT"),""!==n.errorMsg?y.a.createElement(y.a.Fragment,null,y.a.createElement(Z,null),y.a.createElement(ae,{style:{textAlign:"center",color:"var(--accent-text)"}},n.errorMsg)):null):y.a.createElement(y.a.Fragment,null,y.a.createElement(ae,{style:{textAlign:"center",color:"var(--accent-text)"}},u),y.a.createElement($,null),y.a.createElement(ne,{ai:"center",jc:"center",fd:"row"},y.a.createElement(oe,{style:{lineHeight:.4},disabled:c?1:0,onClick:function(e){e.preventDefault(),function(){var e=x-1;e<1&&(e=1),f(e)}()}},"-"),y.a.createElement($,null),y.a.createElement(ae,{style:{textAlign:"center",color:"var(--accent-text)"}},x),y.a.createElement($,null),y.a.createElement(oe,{disabled:c?1:0,onClick:function(e){e.preventDefault(),function(){var e=x+1;e>1&&(e=1),f(e)}()}},"+")),y.a.createElement(Z,null),y.a.createElement(ne,{ai:"center",jc:"center",fd:"row"},y.a.createElement(ce,{disabled:c?1:0,onClick:function(t){t.preventDefault(),function(){var t=h.WEI_COST,a=h.GAS_LIMIT,r=String(t*x),c=String(a*x);console.log("Cost: ",r),console.log("Gas limit: ",c),s("Minting your ".concat(h.NFT_NAME,"...")),o(!0),n.smartContract.methods.mint(x).send({gasLimit:String(c),to:h.CONTRACT_ADDRESS,from:n.account,value:r}).once("error",function(e){console.log(e),s("Sorry, something went wrong please try again later."),o(!1)}).then(function(t){console.log(t),s("WOW, the ".concat(h.NFT_NAME," is yours! go visit Opensea.io to view it.")),o(!1),e(H(n.account))})}(),v()}},c?"BUSY":"BUY")))),y.a.createElement($,null)),y.a.createElement(ee,null),y.a.createElement(ne,{flex:1,jc:"center",ai:"center"},y.a.createElement(ue,{alt:"example",src:"/config/images/example.gif",style:{transform:"scaleX(-1)"}}))),y.a.createElement($,null),y.a.createElement(ne,{jc:"center",ai:"center",style:{width:"70%"}},y.a.createElement(ae,{style:{textAlign:"center",color:"var(--primary-text)"}},"Please make sure you are connected to the right network (",h.NETWORK.NAME," ) and the correct address. Please note: Once you make the purchase, you cannot undo this action."),y.a.createElement(Z,null),y.a.createElement(ae,{style:{textAlign:"center",color:"var(--primary-text)"}},"We have set the gas limit to ",h.GAS_LIMIT," for the contract to successfully mint your NFT. We recommend that you don't lower the gas limit."))))},de=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,510)).then(function(n){var t=n.getCLS,a=n.getFID,r=n.getFCP,c=n.getLCP,o=n.getTTFB;t(e),a(e),r(e),c(e),o(e)})};t(505);C.a.render(y.a.createElement(T.a,{store:z},y.a.createElement(pe,null)),document.getElementById("root")),de()}},[[212,1,2]]]);
//# sourceMappingURL=main.a619be44.chunk.js.map