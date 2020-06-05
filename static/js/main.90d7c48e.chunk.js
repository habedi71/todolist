(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],{13:function(e,t,n){e.exports=n(25)},18:function(e,t,n){},25:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),r=n(11),i=n.n(r),c=(n(18),n(2)),l=n(3),s=n(5),u=n(4),d=(n(19),n(12)),m=function(e){var t=e.todo,n=e.children,o=t.done?"text-muted font-weight-normal":"font-weight-bold";return a.a.createElement("li",{className:"list-group-item"},a.a.createElement("div",{className:"row"},n,a.a.createElement("span",{className:"".concat(o," mx-2 align-center")},t.task)))},f=n(7),h=n(6),p=function(e){var t=e.id,n=e.onClick,o=e.todoDone,r={bg:"bg-info text-white",icon:h.c};return o?"":a.a.createElement("button",{onClick:function(){return n(-t)},title:"Delete",className:"".concat(r.bg," px-3 pb-1 m-0 border-0 rounded")},a.a.createElement(f.a,{className:"small",icon:r.icon}))},b=function(e){var t=e.id,n=e.todoDone,o=e.onClick,r=n?{bg:"bg-warning",icon:h.a,title:"Remove"}:{bg:"bg-info text-white",icon:h.b,title:"Recover"};return a.a.createElement(a.a.Fragment,null,a.a.createElement("button",{onClick:function(){return o(t)},title:r.title,className:"".concat(r.bg," px-3 mx-2 border-0 rounded")},a.a.createElement(f.a,{icon:r.icon})),a.a.createElement(p,{todoDone:n,id:t,onClick:o}))},g=function(e){var t=e.currentTodos,n=e.onClickProps,o=e.todoDone,r=t.map((function(e){return e.done===!o?a.a.createElement(m,{key:e.id,todo:e},a.a.createElement(b,{onClick:n,id:e.id,todoDone:o})):""}));return a.a.createElement("ul",{className:"shadow p-3 mb-5 bg-white rounded list-group w-100"},r)},v=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(c.a)(this,n);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={input:""},e.handleChange=function(t){e.setState({input:t.target.value})},e.handleSubmit=function(t){t.preventDefault(),t.target.todoInput.value="",t.target.todoInput.focus(),0!==e.state.input.length&&e.props.onSubmitProps(e.state.input)},e}return Object(l.a)(n,[{key:"render",value:function(){return a.a.createElement("form",{className:"shadow p-3 mb-5 bg-white rounded d-flex flex-row m-5",onSubmit:this.handleSubmit},a.a.createElement("input",{type:"text",name:"todoInput",onChange:this.handleChange,className:"col form-control mb-2 mr-sm-2",placeholder:"Enter Todo"}),a.a.createElement("button",{className:"btn btn-primary mb-2"},"Add Todo"))}}]),n}(a.a.Component),w=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(c.a)(this,n);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={count:0,todos:[]},e.clickHandler=function(t){var n=[];n=t>0?e.state.todos.map((function(e){return e.id===t?{task:e.task,done:!e.done,id:e.id}:e})):e.state.todos.filter((function(e){return e.id!==Math.abs(t)})),e.setState({todos:n})},e.submitHandler=function(t){if(0!==t.length){var n=e.state,o=n.count,a=n.todos,r={task:t,done:!1,id:++o};e.setState({todos:[].concat(Object(d.a)(a),[r]),count:o})}},e}return Object(l.a)(n,[{key:"render",value:function(){return a.a.createElement("div",{className:"d-flex flex-column align-items-center"},a.a.createElement("div",{className:"col-xl-5 col-lg-8 col-sm-10"},a.a.createElement(v,{onSubmitProps:this.submitHandler}),a.a.createElement("h4",null,"Todo List"),a.a.createElement("hr",null),a.a.createElement(g,{onClickProps:this.clickHandler,todoDone:!0,currentTodos:this.state.todos}),a.a.createElement("h4",{className:"mt-4"},"List History"),a.a.createElement("hr",null),a.a.createElement(g,{onClickProps:this.clickHandler,todoDone:!1,currentTodos:this.state.todos})))}}]),n}(o.Component),k=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return a.a.createElement(w,null)}}]),n}(o.Component),E=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function y(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}i.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(k,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/todolist",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/todolist","/service-worker.js");E?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var o=n.headers.get("content-type");404===n.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):y(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):y(t,e)}))}}()}},[[13,1,2]]]);
//# sourceMappingURL=main.90d7c48e.chunk.js.map