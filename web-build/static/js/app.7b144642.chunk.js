(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{150:function(e,a,t){e.exports=t.p+"static/media/arduino.8769f0a4.png"},218:function(e,a,t){"use strict";t.d(a,"a",(function(){return Q}));var n=t(1),r=t.n(n),l=t(9),o=t.n(l),c=t(0),i=t.n(c),m=t(311),s=t(313),u=t(64),E=t(314),d=t(12),h=t(299),f=t(300),g=t(301),p=t(172),b=t(138),S=t(319),z=t(303),v=t(320),w=t(50),x=t(321),C=t(69),k=t.n(C),L=t(150),I=t.n(L),j=t(135);function O(e){var a=e.navigation,t=(Object(E.c)(),Object(c.useState)("")),n=r()(t,2);n[0],n[1];return c.createElement(x.a,null,c.createElement(h.a,{_dark:{bg:"blueGray.900"},_light:{bg:"violet.900"},px:4,flex:1},c.createElement((function(){var e=c.useState(""),t=r()(e,2),n=t[0],l=t[1],i=c.useState(""),m=r()(i,2),s=m[0],E=m[1],x=c.useState(""),C=r()(x,2),L=C[0],j=C[1],O=c.useState(""),B=r()(O,2),T=(B[0],B[1]),y="",R="";if("User does not exist"==L.warning_error)y=!0;else y=!1;if("Incorrect password"==L.warning_error)R=!0;else R=!1;if(function(){var e;o.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,o.a.awrap(u.a.getItem("token"));case 3:null!==(e=a.sent)&&T(e),a.next=9;break;case 7:a.prev=7,a.t0=a.catch(0);case 9:case"end":return a.stop()}}),null,null,[[0,7]],Promise)}(),"Login done"==L.loginState){var _=L.token;u.a.setItem("token",_),u.a.setItem("LoginSave","DashBorard");a.navigate("DashBorard")}return c.createElement(d.a,{alignItems:"center",w:"xs",bg:"light.50",borderRadius:10,shadow:5},c.createElement(d.a,{w:"90%",maxWidth:"300px"},c.createElement(h.a,null,c.createElement(f.a,{source:I.a,alt:"Inicial Logo",size:"200"}),c.createElement(g.a,{top:1,fontSize:22},"ArduinoHomeControl")),c.createElement(p.a,{marginTop:5,isInvalid:y},c.createElement(b.a,{mx:"4"},c.createElement(p.a.Label,null,"Usu\xe1rio "),c.createElement(S.a,{borderBottomColor:"light.200",variant:"underlined",type:"user",placeholder:"",onChangeText:function(e){return l(e)}}),c.createElement(p.a.HelperText,null),c.createElement(p.a.ErrorMessage,{leftIcon:c.createElement(z.a,{size:"xs"})},"Usu\xe1rio n\xe3o existe"))),c.createElement(p.a,{marginBottom:5,isInvalid:R},c.createElement(b.a,{mx:"4"},c.createElement(p.a.Label,null,"Senha"),c.createElement(S.a,{borderBottomColor:"light.200",type:"password",variant:"underlined",placeholder:"*******",onChangeText:E}),c.createElement(p.a.HelperText,null),c.createElement(p.a.ErrorMessage,{leftIcon:c.createElement(z.a,{size:"xs"})},"Senha incorreta"))),c.createElement(d.a,{alignItems:"center",marginBottom:5},c.createElement(v.a,{bg:"indigo.800",w:"50%",variant:"solid",colorScheme:"indigo",borderRadius:20,onPress:function(){k.a.get("https://apiarduinowebcontrol.herokuapp.com/",{params:{req:"login",username:n,password:s}}).then((function(e){console.log(e.data),j(e.data)}))}},c.createElement(w.a,{color:"light.50"},"Entrar")))))}),null),c.createElement(j.a,{onPress:function(){return a.navigate("SingUp")}},c.createElement(g.a,{top:4,_web:{marginTop:4},size:"xs",color:"#f5f3ff"},"N\xe3o possui conta? ",c.createElement(g.a,{color:"white",size:"xs"},"Clique aqui")))))}var B=t(322),T=t(114),y=t(306),R=t(312),_=t(142),H=t(316),U=t(309),P=t(317),A=t(220),D=t(308),F=t(315),V=t(310),q=t(307),M=(k.a.create({baseURL:"https://apiarduinowebcontrol.herokuapp.com/"}),t(305));function N(e){var a=e.navigation,t=i.a.useState(""),n=r()(t,2),l=n[0],m=n[1],s=i.a.useState(""),E=r()(s,2),f=E[0],p=E[1],b=i.a.useState(""),S=r()(b,2),z=S[0],w=S[1];return Object(c.useEffect)((function(){!function(){var e;o.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,o.a.awrap(u.a.getItem("token"));case 3:null!==(e=a.sent)&&m(e),a.next=9;break;case 7:a.prev=7,a.t0=a.catch(0);case 9:case"end":return a.stop()}}),null,null,[[0,7]],Promise)}()})),i.a.createElement(x.a,null,i.a.createElement((function(){var e=Object(B.a)(),t=(e.value,e.onCopy);return"valid token"==f.warning?i.a.createElement(h.a,{w:"100%",h:"100%",safeAreaBottom:!0},i.a.createElement(d.a,{safeAreaTop:!0,w:"100%",h:"100%",maxW:580,justifyContent:"space-between"},i.a.createElement((function(){return i.a.createElement(d.a,null,i.a.createElement(d.a,{left:3,top:5},i.a.createElement(T.a,{justifyContent:"space-between",w:"90%"},i.a.createElement(g.a,{fontSize:30},"Ol\xe1, ",f.name),i.a.createElement(h.a,null,i.a.createElement(M.a,{name:"exit-outline",size:30,color:"black",onPress:function(){return function(){u.a.setItem("token",""),u.a.setItem("LoginSave","Login"),setTimeout(function(){a.navigate("Login")}.bind(this),2e3)}()}}))),i.a.createElement(j.a,{onPress:function(){return t(z)}},i.a.createElement(T.a,{space:1},i.a.createElement(g.a,{fontSize:15,color:"violet.600"},"Arduino ID: ",f.arduinoid)))))}),null),i.a.createElement((function(){var e=Object(c.useState)(!1),a=r()(e,2),t=a[0],n=a[1],l=Object(c.useState)(),o=r()(l,2),m=o[0],s=o[1],u=Object(c.useState)(),E=r()(u,2),f=E[0],p=E[1],b=Object(c.useState)(),S=r()(b,2),z=S[0],w=S[1],x=Object(c.useState)(),C=r()(x,2),k=C[0],L=C[1],I=Object(c.useState)(),j=r()(I,2),O=j[0],B=j[1],A=Object(c.useState)(),M=r()(A,2),N=M[0],W=M[1],G=Object(c.useState)(),J=r()(G,2),K=J[0],Q=J[1],X=Object(c.useState)(),Y=r()(X,2),Z=Y[0],$=Y[1],ee=Object(c.useState)(),ae=r()(ee,2),te=ae[0],ne=ae[1],re=Object(c.useState)(),le=r()(re,2),oe=le[0],ce=le[1],ie=Object(c.useState)(),me=r()(ie,2),se=me[0],ue=me[1],Ee=Object(c.useState)(),de=r()(Ee,2),he=de[0],fe=de[1],ge=Object(c.useState)(),pe=r()(ge,2),be=pe[0],Se=pe[1],ze=Object(c.useState)(),ve=r()(ze,2),we=ve[0],xe=ve[1],Ce=Object(c.useState)(),ke=r()(Ce,2),Le=ke[0],Ie=ke[1];return i.a.createElement(d.a,{bg:"violet.800",w:"100%",h:"81%",borderTopRadius:45,shadow:5},i.a.createElement(h.a,null,i.a.createElement(y.a,{borderRadius:10,horizontal:!0,w:"80%",h:81,top:3,showsHorizontalScrollIndicator:!1},i.a.createElement(T.a,{space:4},i.a.createElement(d.a,{w:100,h:"100%",bg:"light.100",borderRadius:10,shadow:5},i.a.createElement(h.a,{top:4},i.a.createElement(g.a,{fontSize:30},"0"),i.a.createElement(g.a,{fontSize:10},"Luzes ligadas"))),i.a.createElement(d.a,{w:100,h:"100%",bg:"light.100",borderRadius:10,shadow:5},i.a.createElement(h.a,{top:4},i.a.createElement(q.a,{name:"user",size:35,color:"black"}),i.a.createElement(g.a,{fontSize:10},"Conta"))),i.a.createElement(d.a,{w:100,h:"100%",bg:"light.100",borderRadius:10,shadow:5},i.a.createElement(h.a,{top:4},i.a.createElement(q.a,{name:"github",size:35,color:"black"}),i.a.createElement(g.a,{fontSize:10},"Docs GitHub"))),i.a.createElement(d.a,{w:100,h:"100%",bg:"light.100",borderRadius:10,shadow:5},i.a.createElement(h.a,{top:4},i.a.createElement(q.a,{name:"setting",size:35,color:"black"}),i.a.createElement(g.a,{fontSize:10},"Configura\xe7\xf5es")))))),i.a.createElement(d.a,{bg:"violet.700",w:"100%",h:"80%",top:"5%",borderTopRadius:45,shadow:5},i.a.createElement(h.a,{top:50},i.a.createElement(R.a,{isOpen:t,onClose:function(){return n(!1)}},i.a.createElement(R.a.Content,{maxWidth:"400px"},i.a.createElement(R.a.Body,null,i.a.createElement(h.a,null,i.a.createElement(T.a,{space:9},i.a.createElement(_.a,{space:2},i.a.createElement(h.a,null,i.a.createElement(H.a,{size:"md",colorScheme:"violet",onChange:function(){return s(!m)},isChecked:m}),i.a.createElement(g.a,{fontSize:10},"Luz 1")),i.a.createElement(h.a,null,i.a.createElement(H.a,{size:"md",colorScheme:"violet",onChange:function(){return p(!f)},isChecked:f}),i.a.createElement(g.a,{fontSize:10},"Luz 2")),i.a.createElement(h.a,null,i.a.createElement(H.a,{size:"md",colorScheme:"violet",onChange:function(){return w(!z)},isChecked:z}),i.a.createElement(g.a,{fontSize:10},"Luz 3")),i.a.createElement(h.a,null,i.a.createElement(H.a,{size:"md",colorScheme:"violet",onChange:function(){return L(!k)},isChecked:k}),i.a.createElement(g.a,{fontSize:10},"Luz 4")),i.a.createElement(h.a,null,i.a.createElement(H.a,{size:"md",colorScheme:"violet",onChange:function(){return B(!O)},isChecked:O}),i.a.createElement(g.a,{fontSize:10},"Luz 5"))),i.a.createElement(_.a,{space:2},i.a.createElement(h.a,null,i.a.createElement(H.a,{size:"md",colorScheme:"violet",onChange:function(){return W(!N)},isChecked:N}),i.a.createElement(g.a,{fontSize:10},"Luz 6")),i.a.createElement(h.a,null,i.a.createElement(H.a,{size:"md",colorScheme:"violet",onChange:function(){return Q(!K)},isChecked:K}),i.a.createElement(g.a,{fontSize:10},"Luz 7")),i.a.createElement(h.a,null,i.a.createElement(H.a,{size:"md",colorScheme:"violet",onChange:function(){return $(!Z)},isChecked:Z}),i.a.createElement(g.a,{fontSize:10},"Luz 8")),i.a.createElement(h.a,null,i.a.createElement(H.a,{size:"md",colorScheme:"violet",onChange:function(){return ne(!te)},isChecked:te}),i.a.createElement(g.a,{fontSize:10},"Luz 9")),i.a.createElement(h.a,null,i.a.createElement(H.a,{size:"md",colorScheme:"violet",onChange:function(){return ce(!oe)},isChecked:oe}),i.a.createElement(g.a,{fontSize:10},"Luz 10"))),i.a.createElement(_.a,{space:2},i.a.createElement(h.a,null,i.a.createElement(H.a,{size:"md",colorScheme:"violet",onChange:function(){return ue(!se)},isChecked:se}),i.a.createElement(g.a,{fontSize:10},"Luz 11")),i.a.createElement(h.a,null,i.a.createElement(H.a,{size:"md",colorScheme:"violet",onChange:function(){return fe(!he)},isChecked:he}),i.a.createElement(g.a,{fontSize:10},"Luz 12")),i.a.createElement(h.a,null,i.a.createElement(H.a,{size:"md",colorScheme:"violet",onChange:function(){return Se(!be)},isChecked:be}),i.a.createElement(g.a,{fontSize:10},"Luz 13")),i.a.createElement(h.a,null,i.a.createElement(H.a,{size:"md",colorScheme:"violet",onChange:function(){return xe(!we)},isChecked:we}),i.a.createElement(g.a,{fontSize:10},"Luz 14")),i.a.createElement(h.a,null,i.a.createElement(H.a,{size:"md",colorScheme:"violet",onChange:function(){return Ie(!Le)},isChecked:Le}),i.a.createElement(g.a,{fontSize:10},"Luz 15")))))))),i.a.createElement(T.a,{space:9,_web:{w:"60%",alignContent:"center",alignItems:"center"}},i.a.createElement(v.a,{onPress:function(){return n(!0)},colorScheme:"warning",shadow:1,bg:"warning.500",w:"40%",h:120,borderRadius:10},i.a.createElement(h.a,null,i.a.createElement(D.a,{name:"light-bulb",size:54,color:"#f5f5f4"}),i.a.createElement(g.a,{fontSize:20,color:"#f5f5f4"},"Luzes"),i.a.createElement(U.a,{bg:"#FF0000",borderRadius:10,_text:{fontSize:8,color:"white"}},"Em desenvolvimento"))),i.a.createElement(v.a,{shadow:1,colorScheme:"lightBlue",bg:"lightBlue.500",w:"40%",h:120,borderRadius:10},i.a.createElement(h.a,null,i.a.createElement(V.a,{name:"thermometer-4",size:54,color:"#f5f5f4"}),i.a.createElement(g.a,{fontSize:20,color:"#f5f5f4"},"AC")),i.a.createElement(U.a,{bg:"#FF0000",borderRadius:10,_text:{fontSize:8,color:"white"}},"Em desenvolvimento"))),i.a.createElement(v.a,{shadow:1,colorScheme:"indigo",bg:"indigo.500",w:"90%",h:120,top:5,borderRadius:10},i.a.createElement(h.a,null,i.a.createElement(F.a,{name:"faucet",size:54,color:"#f5f5f4"}),i.a.createElement(g.a,{fontSize:20,color:"#f5f5f4"},"Jardim"),i.a.createElement(U.a,{bg:"#FF0000",borderRadius:10,_text:{fontSize:8,color:"white"}},"Em desenvolvimento"))))),i.a.createElement(d.a,{alignItems:"center",bottom:3},i.a.createElement(T.a,null,i.a.createElement(P.a,{href:"https://github.com/birdra1n",isExternal:!0},i.a.createElement(g.a,{color:"white",fontSize:15},"Developed by BirdRa1n \ud83d\udc68\ud83c\udffb\u200d\ud83d\udcbb")))))}),null))):(k.a.get("https://apiarduinowebcontrol.herokuapp.com/",{params:{req:"painel",token:l,filter:"all"}}).then((function(e){console.log(e.data),p(e.data),w(e.data.arduinoid)})),i.a.createElement(h.a,{bg:"#581c87",w:"100%",h:"100%",safeAreaBottom:!0},i.a.createElement(T.a,{space:2,justifyContent:"center"},i.a.createElement(A.a,{accessibilityLabel:"Loading posts",color:"white"}),i.a.createElement(g.a,{color:"white",fontSize:"md"},"Carregando"))))}),null))}var W=t(318),G=t(154);function J(e){var a=e.navigation,t=i.a.useState(!1),n=r()(t,2);n[0],n[1];return i.a.createElement(x.a,null,i.a.createElement(h.a,{_dark:{bg:"blueGray.900"},_light:{bg:"violet.900"},px:4,flex:1},i.a.createElement((function(){var e=i.a.useState(""),t=r()(e,2),n=t[0],l=t[1],o=i.a.useState(""),c=r()(o,2),m=c[0],s=c[1],u=i.a.useState(""),E=r()(u,2),f=E[0],x=E[1],C=i.a.useState(""),L=r()(C,2),I=L[0],j=L[1],O=i.a.useState(""),B=r()(O,2),T=B[0],y=B[1],R=i.a.useState(""),H=r()(R,2),U=(H[0],H[1]),P=i.a.useState(!1),A=r()(P,2),D=A[0],F=A[1],V=i.a.useState(!1),q=r()(V,2),M=q[0],N=q[1],J=i.a.useState(""),K=r()(J,2),Q=K[0],X=K[1],Y=i.a.useState(!1),Z=r()(Y,2),$=Z[0],ee=Z[1];console.log(Q);var ae=D;return i.a.createElement(d.a,{alignItems:"center",w:"xs",bg:"light.50",borderRadius:10,shadow:5},i.a.createElement(d.a,{w:"90%",alignItems:"center"},i.a.createElement(W.a,{isOpen:$},i.a.createElement(G.a,{w:"100%",colorScheme:"violet",status:"success"},i.a.createElement(_.a,{space:2,flexShrink:1,w:"100%"},i.a.createElement(_.a,{flexShrink:1,space:2,alignItems:"center",justifyContent:"space-between"},i.a.createElement(_.a,{space:1,flexShrink:1,alignItems:"center"},i.a.createElement(g.a,{top:0,fontSize:20},"Bem vindo! sua conta foi criada com sucesso \ud83e\udd73"))))))),i.a.createElement(d.a,{w:"90%",maxWidth:"300px"},i.a.createElement(h.a,null,i.a.createElement(g.a,{top:1,fontSize:22},"Cadastre-se")),i.a.createElement(p.a,{marginTop:5},i.a.createElement(b.a,{mx:"4"},i.a.createElement(p.a.Label,null,"Nome "),i.a.createElement(S.a,{defaultValue:T,borderBottomColor:"light.200",variant:"underlined",type:"user",placeholder:"",onChangeText:function(e){return y(e)}}),i.a.createElement(p.a.HelperText,null))),i.a.createElement(p.a,{marginTop:5,isInvalid:M},i.a.createElement(b.a,{mx:"4"},i.a.createElement(p.a.Label,null,"Usu\xe1rio "),i.a.createElement(S.a,{defaultValue:n,borderBottomColor:"light.200",variant:"underlined",type:"user",placeholder:"",onChangeText:function(e){return l(e)}}),i.a.createElement(p.a.HelperText,null),i.a.createElement(p.a.ErrorMessage,{leftIcon:i.a.createElement(z.a,{size:"xs"})},"Usu\xe1rio j\xe1 existe"))),i.a.createElement(p.a,{marginTop:5},i.a.createElement(b.a,{mx:"4"},i.a.createElement(p.a.Label,null,"E-mail "),i.a.createElement(S.a,{defaultValue:I,borderBottomColor:"light.200",variant:"underlined",type:"e-mail",placeholder:"",onChangeText:function(e){return j(e)}}),i.a.createElement(p.a.HelperText,null),i.a.createElement(p.a.ErrorMessage,{leftIcon:i.a.createElement(z.a,{size:"xs"})},"Usu\xe1rio n\xe3o existe"))),i.a.createElement(p.a,{marginBottom:5,isInvalid:ae},i.a.createElement(b.a,{mx:"4"},i.a.createElement(p.a.Label,null,"Senha"),i.a.createElement(S.a,{borderBottomColor:"light.200",type:"password",variant:"underlined",placeholder:"*******",onChangeText:s}),i.a.createElement(p.a.HelperText,null),i.a.createElement(p.a.ErrorMessage,{leftIcon:i.a.createElement(z.a,{size:"xs"})},"Senhas n\xe3o conferem"))),i.a.createElement(p.a,{marginBottom:5},i.a.createElement(b.a,{mx:"4"},i.a.createElement(p.a.Label,null,"Confirmar senha"),i.a.createElement(S.a,{defaultValue:f,borderBottomColor:"light.200",type:"password",variant:"underlined",placeholder:"*******",onChangeText:x}),i.a.createElement(p.a.HelperText,null))),i.a.createElement(d.a,{alignItems:"center",marginBottom:5},i.a.createElement(v.a,{bg:"indigo.800",w:"50%",variant:"solid",colorScheme:"indigo",borderRadius:20,onPress:function(){return function(){m!=f?(U("senhas n\xe3o conferem"),F(!0)):(F(!1),k.a.get("https://apiarduinowebcontrol.herokuapp.com/",{params:{req:"newuser",username:n,password:m,name:T,email:I}}).then((function(e){console.log(e.data),X(e.data)})),"User already exists"==Q.warning_error?N(!0):(N(!1),ee(!$),setTimeout(function(){a.navigate("Login")}.bind(this),2e3)))}()}},i.a.createElement(w.a,{color:"light.50"},"Criar")))))}),null)))}var K=Object(s.a)();function Q(){var e=Object(c.useState)("Login"),a=r()(e,2),t=a[0],n=a[1];return Object(c.useEffect)((function(){!function(){var e;o.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,o.a.awrap(u.a.getItem("LoginSave"));case 3:null!==(e=a.sent)&&n(e),a.next=9;break;case 7:a.prev=7,a.t0=a.catch(0);case 9:case"end":return a.stop()}}),null,null,[[0,7]],Promise)}()})),c.createElement((function(){return c.createElement(m.a,null,c.createElement(K.Navigator,{initialRouteName:t},c.createElement(K.Screen,{name:"Login",component:O,options:{headerShown:!1}}),c.createElement(K.Screen,{name:"DashBorard",component:N,options:{headerShown:!1,headerBackVisible:!1}}),c.createElement(K.Screen,{name:"SingUp",component:J,options:{headerShown:!1,headerBackVisible:!1}})))}),null)}},231:function(e,a,t){e.exports=t(288)}},[[231,1,2]]]);
//# sourceMappingURL=app.7b144642.chunk.js.map