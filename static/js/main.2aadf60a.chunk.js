(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,t,n){e.exports=n.p+"static/media/reactgithub.6b043097.jpg"},17:function(e,t,n){e.exports=n(43)},22:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(14),i=n.n(o),c=(n(22),n(2)),l=n(3),u=n(5),d=n(4),s=n(6),m=n(15),p=n.n(m),g={app:{backgroundColor:"#282c34",minHeight:"100vh",display:"flex",flexDirection:"column",alignItems:"center",color:"white"},appLogo:{animation:"appLogoSpin infinite 20s linear",height:"20vmin",margin:20,borderRadius:20},form:{marginBottom:"20px"},inputText:{padding:8,fontSize:18},button:{border:"none",padding:10,fontSize:18,color:"white",backgroundColor:"#000",textAlign:"center",cursor:"pointer"},cardGroup:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},column:{width:"60%",marginBottom:16,padding:"8px",backgroundColor:"white",borderRadius:10,margin:"1em"},card:{margin:"1em",boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2)"},cardImg:{width:"100%"},cardContainer:{padding:"0 16px",color:"#000"},cardTitle:{color:"grey"},cardUserName:{fontWeight:"bold"},cardButton:{border:"none",outline:0,display:"inlineBlock",padding:8,marginBottom:10,color:"white",backgroundColor:"#000",textAlign:"center",cursor:"pointer",width:"100%"}},h=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={userName:""},n.handleSubmit=function(e){e.preventDefault(),p.a.get("https://api.github.com/users/".concat(n.state.userName)).then(function(e){n.props.onSubmit(e.data),n.setState({userName:""})})},n}return Object(s.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("form",{style:g.form,onSubmit:this.handleSubmit},r.a.createElement("input",{style:g.inputText,type:"text",value:this.state.userName,onChange:function(t){return e.setState({userName:t.target.value})},placeholder:"GitHub Username",required:!0}),r.a.createElement("button",{style:g.button,type:"submit"},"Add card"))}}]),t}(r.a.Component),b=function(e){return r.a.createElement("div",{style:g.column},r.a.createElement("div",{style:g.card},r.a.createElement("img",{alt:"avatar",style:g.cardImg,src:e.avatar_url}),r.a.createElement("div",{style:g.cardContainer},r.a.createElement("h2",{style:g.cardUserName},e.name),r.a.createElement("p",{style:g.cardTitle},e.bio),r.a.createElement("p",null,e.blog),r.a.createElement("p",null,r.a.createElement("button",{style:g.cardButton},"Contact")))))},f=function(e){return r.a.createElement("div",{style:g.cardGroup},e.cards.map(function(e){return r.a.createElement(b,e)}))},y=n(16),v=n.n(y),w=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={cards:[]},n.addNewCard=function(e){n.setState(function(t){return{cards:t.cards.concat(e)}})},n}return Object(s.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{style:g.app},r.a.createElement("img",{src:v.a,style:g.appLogo,alt:"logo"}),r.a.createElement(h,{onSubmit:this.addNewCard}),r.a.createElement(f,{cards:this.state.cards}))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[17,2,1]]]);
//# sourceMappingURL=main.2aadf60a.chunk.js.map