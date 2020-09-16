(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],[,,,,,,,function(e){e.exports=JSON.parse('{"projects":[{"title":"\ud83d\uddb2\ufe0f The Button \ud83d\uddb2\ufe0f","about":"I designed and developed the host of Cut\'s spicy new dating show, The Button. Button is comprised of 76 RGB LEDs and a \u201cpush button\u201d microswitch connected to an Arduino along with an internal speaker. The Director interacts with the Button through a lightweight web app written in JavaScript with a NodeJS back-end. When the Director selects a command from the UI, the web app publishes a message to a specific topic through a combination of MQTT and Sockets over the network. The Arduino, subscribed to this topic, begins one of the custom animations controlling the LEDs based on the contents of the message. By incorporating the P5.js Processing library, the web app is able to trigger animations that react to decibel thresholds as audio is streamed from the Director\u2019s microphone to the internal speaker. This is how the Director is able to \u201ctalk through\u201d and control the Button with reactive LEDs from a separate room. The studio lights are connected to an IP power switch controlled by a Rasperry Pi. The Raspberry Pi is running a Python application subscribed to specific topics published to the MQTT broker and can react by turning on or off based on the message contents. The Button has over 10 million views across YouTube and Facebook, it is also the closest thing I have to a child.","press":[{"title":"an artist\'s guide to computation,","link":"https://artistsguidetocomputation.substack.com/p/dont-eat-the-mummies"},{"title":"ART CONNECT Magazine","link":"https://www.artconnect.com/magazine/digital-media-tenderness-and-aggression/"}],"linkToProject":"https://www.youtube.com/watch?v=XFfuUns9I14"},{"title":"\ud83d\udc36 Weird Dog Portfolio \ud83d\udc36","about":"I designed and developed Weird Dog\'s website, a lightweight React app. Weird Dog is a production company based in Seattle. Hire them!","press":[],"linkToProject":"weird.dog"}]}')},,function(e,t){e.exports="data:image/png;base64,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"},function(e,t,n){},,function(e,t){e.exports="data:image/png;base64,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"},function(e,t,n){},,function(e,t,n){e.exports=n.p+"static/media/btn_main.9e134070.jpeg"},function(e,t,n){e.exports=n.p+"static/media/weirddog.5fd2eac3.png"},function(e,t,n){e.exports=n.p+"static/media/info.ee6de916.png"},function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAABlklEQVRoge2YP0oDQRSHv2ghiFqZwl5whWgluYAgnsXGzhS5g72HUJEk4BFSiYJXMGJKBQMWiUVmyBB23Jnd2cyA74MfYZd9w3w7b/9kQRCEf0EDmMWeRAjWYk8gFCKSGiKSGiKSGiJSE32gDWyp34FP8SyR9Czzu3esjy6gc2IRabvUp/SutQN85ezfBj6Lin2ukTHw4nG8LweW/YeuA7gs+xg4AjLg27HGN33L/AaO9YUHfAAtY+CrmkS0zPJdy7XWWWIfWFcZ1ihTNoXtBPOWelerobfrarGgIuZKtNT2DJiwuPg6ltqfVERsEjpDFi3WA+6ALnAONC01KxfJa6e8og5/kwGjWCJFK2FGt1hTrUQXuAWePcaoRcRHwpTJ219mrCAiru3kE3NMGxnwFFKkrrO3/CDNYwO4BqYhRPTZCbESrpkAl8w/EAKcAm9VRVYtYeYR2FMyu8BDFZEY93wzI+BMyTSAC8q9NUSV0JkCN8AmFYgtYeYVOC4jkdI/xEqk9hWlNCKSGiKSGiKSGiIiCIIQhV9aqvtgADl99gAAAABJRU5ErkJggg=="},function(e,t,n){e.exports=n(27)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(14),i=n.n(r),c=(n(24),n(2)),s=n(6),l=n(4),m=n(3),u=(n(10),function(){return o.a.createElement("div",{className:"mainContent",id:"content"},o.a.createElement("div",{className:"imgWrapper"},o.a.createElement("h1",{className:"contentTitle"},"~ about"),o.a.createElement("p",{className:"contentBody"},"Lindsay Gilbert is a software engineer based out of Seattle, WA. Her work takes its form in live game shows, interactive online dating experiments, and generative art projects. Lindsay is inspired by surprises in analog methods, repetition, and bad robots. She is currently pursuing a Master\u2019s in Computer Science, with a specialization in Machine Learning.")))}),A=function(){return o.a.createElement("div",{className:"mainContent",id:"content"},o.a.createElement("div",{className:"imgWrapper"},o.a.createElement("h1",{className:"contentTitle"},"~ contact"),o.a.createElement("p",{className:"contentBody"},"Have a project in mind? Let's collab!"),o.a.createElement("p",{className:"press"},"Email: lindsaygilbert722@gmail.com"),o.a.createElement("a",{className:"linkToProject",target:"_blank",href:"https://www.instagram.com/lindsayrgil/"},"Check out more of my work on instagram @lindsayrgil")))},h=n(1),d=n(15),g=n.n(d),p=n(16),w=n.n(p),f=n(17),C=n.n(f),v=n(9),E=n.n(v),b=n(18),y=n.n(b),T=n(7),j=function(e){return o.a.createElement("h1",{className:"contentTitle"},e.title)},B=function(e){return o.a.createElement("p",{className:"contentBody"},e.body)},x=function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement("p",{className:"press"},"Press:"),o.a.createElement("span",null,e.press.map((function(e){return o.a.createElement("a",{className:"pressLink",target:"_blank",href:e.link},e.title)}))))},S=function(e){return o.a.createElement("a",{className:"linkToProject contentProject",target:"_blank",href:e.linkToProject},"\ud83d\udca5 Check it out here \ud83d\udca5")},P=function(e){var t,n=e.left;return o.a.createElement("div",{className:n?"leftContainer":"rightContainer"},o.a.createElement("svg",(t={id:"wave",version:"1.1"},Object(h.a)(t,"id","Layer_1"),Object(h.a)(t,"xmlns","http://www.w3.org/2000/svg"),Object(h.a)(t,"x","0px"),Object(h.a)(t,"y","0px"),Object(h.a)(t,"viewBox","0 0 456.7 39.9"),Object(h.a)(t,"style",{enableBackground:"new 0 0 456.7 39.9;"}),Object(h.a)(t,"xmlSpace","preserve"),t),o.a.createElement("path",{className:"st69",d:"M4.2,33.2c0.1-0.1,7-6.9,15.9-13.8C27.7,13.7,38.7,6,47.5,6c7.5,0,14,6.6,20.3,12.9l0.4,0.4 c6.8,6.9,14.6,14.6,24.6,14.6c9.9,0,17.7-7.8,24.5-14.6l0.5-0.5C124,12.5,130.5,6,137.9,6c7.5,0,13.9,6.5,20.2,12.9l0.4,0.4 c6.8,6.9,14.6,14.6,24.5,14.6c10,0,17.8-7.8,24.6-14.6l0.5-0.5C214.4,12.5,220.9,6,228.4,6c7.5,0,14,6.5,20.2,12.9l0.4,0.4 c6.8,6.9,14.5,14.6,24.5,14.6c9.9,0,17.7-7.8,24.5-14.6l0.3-0.3c6.3-6.4,12.9-13,20.5-13c7.5,0,14.1,6.6,20.4,13l0.3,0.3 c6.8,6.9,14.6,14.6,24.5,14.6c9.9,0,17.6-7.8,24.5-14.6l0.2-0.2C395.1,12.6,401.6,6,409.2,6c8.7,0,19.8,7.7,27.3,13.4 c8.9,6.8,15.9,13.7,16,13.8"})))},k=function(e){var t=e.currentProjectIndex,n=e.handleNextProject,a=e.handleShowContentInfo,r=e.showContentInfo,i={0:{image:g.a},1:{image:w.a}};return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"prevArrowWrapper",onClick:n},o.a.createElement("img",{className:"previousArrow",src:E.a}),o.a.createElement(P,{left:!0})),o.a.createElement("div",{className:"mainContent",id:"content"},o.a.createElement("div",{className:"imgWrapper"},r?o.a.createElement("div",null,o.a.createElement(j,{title:T.projects[t].title}),o.a.createElement(B,{body:T.projects[t].about}),T.projects[t].press.length>0&&o.a.createElement(x,{press:T.projects[t].press}),o.a.createElement(S,{linkToProject:T.projects[t].linkToProject})):o.a.createElement("img",{src:i[t].image,width:"800px",className:"image"}),o.a.createElement("img",{src:r?y.a:C.a,className:"info",onClick:a}))),o.a.createElement("div",{className:"nextArrowWrapper",onClick:n},o.a.createElement(P,{left:!1}),o.a.createElement("img",{className:"nextArrow",src:E.a})))},I=n(5),H=(n(25),function(e){Object(l.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e))._onMouseMove=function(e){a.setState({mouse_x:(window.innerWidth-e.screenX)/window.innerWidth,mouse_y:(window.innerHeight-e.screenY)/window.innerHeight})},a.state={mouse_x:0,mouse_y:0},a}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=new I.d,n=new I.b(-1,1,1,-1,-1,1),a=new I.c(2,2),o={u_mouse:{type:"vec2",value:new I.f},u_time:{type:"float",value:0},u_resolution:{type:"vec3",value:new I.g}},r=new I.h;r.setSize(window.innerWidth,window.innerHeight),this.mount.appendChild(r.domElement);var i=new I.e({uniforms:o,fragmentShader:this.fragmentShader()});t.add(new I.a(a,i));!function a(i){!function(e){var t=e.domElement,n=t.clientWidth,a=t.clientHeight,o=t.height,r=t.width,i=n!==r||a!==o;i&&e.setSize(r,o,!1)}(r),i*=.001,o.u_mouse.value.set(e.state.mouse_x,e.state.mouse_y),o.u_resolution.value.set(window.innerWidth,window.innerHeight,1),o.u_time.value=i,requestAnimationFrame(a),r.render(t,n)}()}},{key:"vertexShader",value:function(){return"\n      varying vec3 vUv; \n\n      void main() {\n        vUv = position; \n\n        vec4 modelViewPosition = modelViewMatrix * vec4(position, 1.0);\n        gl_Position = projectionMatrix * modelViewPosition; \n      }\n    "}},{key:"fragmentShader",value:function(){return"\n      #include <common>\n\n      uniform vec3 u_resolution;\n      uniform vec2 u_mouse;\n      uniform float u_time; \n\n      void mainImage( out vec4 fragColor, in vec2 fragCoord )\n      {\n        // normalized pixel coords\n        vec2 uv = fragCoord/u_resolution.xy;\n\n        // time varying pixel color\n        vec3 col = 0.5 + 0.5*cos(u_time+uv.xyx*40.0+vec3(0,2,4));\n\n        //output to screen\n        fragColor = vec4(col, 1.0);\n      }\n      void main() {\n        //mainImage(gl_FragColor, gl_FragCoord.xy);\n        vec2 st = gl_FragCoord.xy/u_resolution.xy;\n        gl_FragColor = vec4(st.x, u_mouse.x, u_mouse.y, 1.0);\n      }\n  "}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{ref:function(t){return e.mount=t},onMouseMove:this._onMouseMove})}}]),n}(a.Component)),L=(n(12),n(13),function(e){Object(l.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).handleMouseOverText=function(){document.getElementById("o").style.transform="scale(10, 2)"},a.handleMouseLeaveText=function(){document.getElementById("o").style.transform="scale(1, 1)"},a.handleMouseOverTest=function(){a.magnify("myimage",2)},a.openSesame=function(){a.setState({menuOpen:!a.state.menuOpen})},a}return Object(s.a)(n,[{key:"render",value:function(){var e=this;return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"header headerBtm"},o.a.createElement("span",{className:"projectsText headerBtmText",onClick:function(){return e.props.handleChangeContentType("contact")}},"contact")))}}]),n}(a.Component)),O=function(e){Object(l.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).handleMouseOverText=function(){document.getElementById("o").style.transform="scale(10, 2)"},a.handleMouseLeaveText=function(){document.getElementById("o").style.transform="scale(1, 1)"},a.handleMouseOverTest=function(){a.magnify("myimage",2)},a.openSesame=function(){a.setState({menuOpen:!a.state.menuOpen})},a}return Object(s.a)(n,[{key:"render",value:function(){var e=this;return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"header headerTop"},o.a.createElement("span",{className:"projectsText headerTopText",onClick:function(){return e.props.handleChangeContentType("projects")}},"projects"),o.a.createElement("span",{className:"aboutText headerTopText",onClick:function(){return e.props.handleChangeContentType("about")}},"about")))}}]),n}(a.Component),N=(n(26),function(e){Object(l.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={contentType:"projects",currentProjectIndex:0,showContent:!1,showContentInfo:!1},e.handleChangeContentType=function(t){e.setState({contentType:t})},e.handleShowContent=function(){e.setState({showContent:!e.state.showContent})},e.handleShowContentInfo=function(){e.setState({showContentInfo:!e.state.showContentInfo})},e.handleNextProject=function(){return 0===e.state.currentProjectIndex?e.setState({currentProjectIndex:1}):e.setState({currentProjectIndex:0})},e}return Object(s.a)(n,[{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(O,{handleShowContent:this.handleShowContent,handleChangeContentType:this.handleChangeContentType}),"projects"===this.state.contentType&&o.a.createElement(k,{handleShowContentInfo:this.handleShowContentInfo,handleNextProject:this.handleNextProject,showContentInfo:this.state.showContentInfo,currentProjectIndex:this.state.currentProjectIndex}),"about"===this.state.contentType&&o.a.createElement(u,null),"contact"===this.state.contentType&&o.a.createElement(A,null),o.a.createElement(L,{handleChangeContentType:this.handleChangeContentType}),o.a.createElement(H,null))}}]),n}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[19,1,2]]]);
//# sourceMappingURL=main.7ac89f3b.chunk.js.map