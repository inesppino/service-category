(this["webpackJsonpservice-category"]=this["webpackJsonpservice-category"]||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(8),l=a.n(i),c=(a(14),a(6)),o=a(1),s=a(2),u=a(5),p=a(4),v=a(3),h=(a(15),function(e){Object(p.a)(a,e);var t=Object(v.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props,t=e.list,a=e.titleList;return r.a.createElement("div",null,r.a.createElement("h3",null,a),r.a.createElement("ul",null,t.map((function(e){return e.Caption.includes("(")?r.a.createElement("li",{key:e.Id},e.Caption.split("(")[0]," ",r.a.createElement("span",null,"("+e.Caption.split("(")[1])):r.a.createElement("li",{key:e.Id},e.Caption)}))))}}]),a}(n.Component)),d=function(e){Object(p.a)(a,e);var t=Object(v.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props,t=e.lists,a=e.title,n=e.handleCollapsible,i=e.id,l=e.collapsibleControl;return r.a.createElement("div",{className:"card-container ".concat(l)},r.a.createElement("div",{className:"card-title-container"},r.a.createElement("h2",null,a),r.a.createElement("button",{onClick:function(){return n(i)}},r.a.createElement("i",{className:"fas fa-angle-up icon-up"}))),r.a.createElement("div",{className:"card-lists-container",id:a},Object.keys(t).map((function(e){return r.a.createElement(h,{key:e,titleList:e,list:t[e]})}))))}}]),a}(n.Component),b=function(e){Object(p.a)(a,e);var t=Object(v.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={servicesCategories:{},collapsibles:{}},n.handleCollapsible=n.handleCollapsible.bind(Object(u.a)(n)),n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){this.fetchCategories()}},{key:"fetchCategories",value:function(){var e=this,t={};return fetch("https://debug-api.fastpayhotels.net/DataService/EntityService.svc/ServiceType?$filter=(IdServiceCategory%20eq%202)%20or%20(IdServiceCategory%20eq%203)%20or%20(IdServiceCategory%20eq%205)&$format=json&$expand=ServiceCategory&$select=Id,Free,Caption,ServiceCategory/Id,ServiceCategory/Caption").then((function(e){return e.json()})).then((function(a){a.value.map((function(e){return t[e.ServiceCategory.Id]?t[e.ServiceCategory.Id].push(e):t[e.ServiceCategory.Id]=[]})),e.setState({servicesCategories:Object(c.a)({},t)},e.createCollapsiblesHandlers)})),t}},{key:"createCollapsiblesHandlers",value:function(){var e=this.state.servicesCategories,t={};return Object.keys(e).forEach((function(e,a){t[e]=0===a?"":"inactive-collapsible"})),this.setState({collapsibles:t}),t}},{key:"filterData",value:function(e){var t=[],a=[];return e.map((function(e){return e.Free?t.push(e):a.push(e)})),{Free:t,Extra:a}}},{key:"handleCollapsible",value:function(e){var t=Object(c.a)({},this.state.collapsibles);""===t[e]?t[e]="inactive-collapsible":t[e]="",this.setState({collapsibles:t})}},{key:"render",value:function(){var e=this,t=this.state,a=t.servicesCategories,n=t.collapsibles;return r.a.createElement("ul",{className:"service-category-main-list"},Object.keys(a).map((function(t){return r.a.createElement(d,{key:t,id:t,lists:e.filterData(a[t]),title:a[t][0].ServiceCategory.Caption,handleCollapsible:e.handleCollapsible,collapsibleControl:n[t]})})))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,t,a){e.exports=a(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.518c638f.chunk.js.map