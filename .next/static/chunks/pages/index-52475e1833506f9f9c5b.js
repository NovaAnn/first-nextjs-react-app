_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[7],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=c,t.useAmp=function(){return c(a.default.useContext(o.AmpStateContext))};var r,a=(r=n("q1tI"))&&r.__esModule?r:{default:r},o=n("lwAK");function c(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,a=void 0!==r&&r,o=e.hasQuery,c=void 0!==o&&o;return n||a&&c}},"20a2":function(e,t,n){e.exports=n("nOHt")},"7W2i":function(e,t,n){var r=n("SksO");e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},"8Kt/":function(e,t,n){"use strict";n("lSNA");t.__esModule=!0,t.defaultHead=l,t.default=void 0;var r,a=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=u();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var o=r?Object.getOwnPropertyDescriptor(e,a):null;o&&(o.get||o.set)?Object.defineProperty(n,a,o):n[a]=e[a]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),o=(r=n("Xuae"))&&r.__esModule?r:{default:r},c=n("lwAK"),i=n("FYa8"),s=n("/0+H");function u(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return u=function(){return e},e}function l(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[a.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(a.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function d(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===a.default.Fragment?e.concat(a.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var p=["name","httpEquiv","charSet","itemProp"];function f(e,t){return e.reduce((function(e,t){var n=a.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(d,[]).reverse().concat(l(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(a){var o=!0,c=!1;if(a.key&&"number"!==typeof a.key&&a.key.indexOf("$")>0){c=!0;var i=a.key.slice(a.key.indexOf("$")+1);e.has(i)?o=!1:e.add(i)}switch(a.type){case"title":case"base":t.has(a.type)?o=!1:t.add(a.type);break;case"meta":for(var s=0,u=p.length;s<u;s++){var l=p[s];if(a.props.hasOwnProperty(l))if("charSet"===l)n.has(l)?o=!1:n.add(l);else{var d=a.props[l],f=r[l]||new Set;"name"===l&&c||!f.has(d)?(f.add(d),r[l]=f):o=!1}}}return o}}()).reverse().map((function(e,t){var n=e.key||t;return a.default.cloneElement(e,{key:n})}))}function h(e){var t=e.children,n=(0,a.useContext)(c.AmpStateContext),r=(0,a.useContext)(i.HeadManagerContext);return a.default.createElement(o.default,{reduceComponentsToState:f,headManager:r,inAmpMode:(0,s.isInAmpMode)(n)},t)}h.rewind=function(){};var m=h;t.default=m},A3pG:function(e,t,n){e.exports={list:"MeetupList_list__1iafn",mainDiv:"MeetupList_mainDiv__1Z6yf",searchDiv:"MeetupList_searchDiv__1qx6I",searchItem:"MeetupList_searchItem__3hm_7",h3Span:"MeetupList_h3Span__3PXOi",h3Count:"MeetupList_h3Count__3Ps_J",switch:"MeetupList_switch__YfrEj",slider:"MeetupList_slider__1MMiu",round:"MeetupList_round__3CeTw"}},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},FYa8:function(e,t,n){"use strict";var r;t.__esModule=!0,t.HeadManagerContext=void 0;var a=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.HeadManagerContext=a},"HaE+":function(e,t,n){"use strict";function r(e,t,n,r,a,o,c){try{var i=e[o](c),s=i.value}catch(u){return void n(u)}i.done?t(s):Promise.resolve(s).then(r,a)}function a(e){return function(){var t=this,n=arguments;return new Promise((function(a,o){var c=e.apply(t,n);function i(e){r(c,a,o,i,s,"next",e)}function s(e){r(c,a,o,i,s,"throw",e)}i(void 0)}))}}n.d(t,"a",(function(){return a}))},Ijbi:function(e,t,n){var r=n("WkPL");e.exports=function(e){if(Array.isArray(e))return r(e)}},Nsbk:function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},PJYZ:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},RIqP:function(e,t,n){var r=n("Ijbi"),a=n("EbDI"),o=n("ZhPi"),c=n("Bnag");e.exports=function(e){return r(e)||a(e)||o(e)||c()}},RNiq:function(e,t,n){"use strict";n.r(t),n.d(t,"__N_SSG",(function(){return g}));var r=n("nKUr"),a=n("o0o1"),o=n.n(a),c=n("HaE+"),i=n("q1tI"),s=n("g4pe"),u=n.n(s),l=n("A3pG"),d=n.n(l),p=n("20a2"),f=n("leqP"),h=n("RPSF"),m=n.n(h);var v=function(e){var t=Object(p.useRouter)();return Object(r.jsx)("li",{className:m.a.item,children:Object(r.jsxs)(f.a,{children:[Object(r.jsx)("div",{className:m.a.image,children:Object(r.jsx)("img",{src:e.image,alt:e.title})}),Object(r.jsxs)("div",{className:m.a.content,children:[Object(r.jsx)("h3",{children:e.title}),Object(r.jsx)("address",{children:e.address})]}),Object(r.jsx)("div",{className:m.a.actions,children:Object(r.jsx)("button",{onClick:function(){t.push("/"+e.id)},children:"Show Details"})})]})})};var j,b=function(e){var t=Object(i.useState)(!1),n=t[0];return t[1],console.log(n),Object(r.jsx)(i.Fragment,{children:Object(r.jsx)("ul",{className:d.a.list,children:e.meetups.map((function(e){return Object(r.jsx)(v,{id:e.id,image:e.image,title:e.title,address:e.address},e.id)}))})})},_=!1;var g=!0;t.default=function(e){console.log(e);var t=["Amsterdam","Rotterdam"],n=Object(i.useState)(new Array(t.length).fill(!1)),a=n[0],s=n[1],l=Object(i.useState)(!1),p=(l[0],l[1],function(e){switch(console.log(e),console.log(e.target.name),e.target.name){case"location":_=!0,console.log("inside location");var n=t.findIndex((function(t){return console.log(t),console.log(e.target.value),t==e.target.value}));console.log(n);var r=a.map((function(e,t){return t===n?!e:e}));s(r)}});return Object(r.jsxs)(i.Fragment,{children:[Object(r.jsxs)(u.a,{children:[Object(r.jsx)("title",{children:"React Meetups"}),Object(r.jsx)("meta",{name:"description",content:"Browse a huge list of highly active React meetups!"})]}),Object(r.jsxs)("div",{className:d.a.mainDiv,children:[Object(r.jsxs)("div",{className:d.a.searchDiv,children:[e.locationArray&&Object(r.jsxs)("div",{className:d.a.searchItem,children:[Object(r.jsx)("h3",{children:"Location"}),e.locationArray.map((function(e,t){return Object(r.jsxs)("span",{children:[Object(r.jsxs)("label",{className:d.a.switch,children:[Object(r.jsx)("input",{type:"checkbox",name:"location",value:e,checked:a[t],onChange:p.bind(t)}),Object(r.jsx)("span",{className:d.a.slider})]}),Object(r.jsx)("span",{className:d.a.h3Span,children:e._id}),Object(r.jsx)("span",{className:d.a.h3Span,children:e.count})]})}))]}),e.priceArray&&Object(r.jsxs)("div",{className:d.a.searchItem,children:[Object(r.jsx)("h3",{children:"Price"}),e.priceArray.map((function(e,t,n){return Object(r.jsxs)("span",{children:[Object(r.jsxs)("label",{className:d.a.switch,children:[Object(r.jsx)("input",{type:"checkbox",name:"location",value:e,checked:a[t],onChange:p.bind(t)}),Object(r.jsx)("span",{className:d.a.slider})]}),0==t&&Object(r.jsxs)("span",{className:d.a.h3Span,children:["0 to ",e._id]}),t>0&&t<n.length-1&&Object(r.jsxs)("span",{className:d.a.h3Span,children:[n[t-1]._id," to ",e._id]}),t>0&&t>=n.length-1&&Object(r.jsxs)("span",{className:d.a.h3Span,children:["Greater than  ",e._id]}),Object(r.jsx)("span",{className:d.a.h3Span,children:e.count})]})}))]}),Object(r.jsx)("button",{type:"button",onClick:function(){console.log(a);var n=t.filter((function(e,t){return console.log("inside button"),a[t]}));if(console.log("after button"),console.log(n),_){var r=function(){var t=Object(c.a)(o.a.mark((function t(){var n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("innside async hand"),n="/api/"+e.meetups[0].price+"&"+e.meetups[0].price,console.log(n),t.next=5,fetch(n,{method:"GET",headers:{"Content-Type":"application/json"}});case 5:t.sent;case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();console.log("inside locationchanged"),console.log(e.meetups),j=e.meetups.filter((function(e){return n.findIndex((function(t){return console.log(t),console.log(e.price),e.price==t}))>-1})),console.log(j),r()}},children:"Submit"})]}),Object(r.jsx)(b,{meetups:e.meetups})]})]})}},RPSF:function(e,t,n){e.exports={item:"MeetupItem_item__3siMU",image:"MeetupItem_image__13rAP",content:"MeetupItem_content__3uEkT",actions:"MeetupItem_actions__LvT9B"}},Xuae:function(e,t,n){"use strict";var r=n("RIqP"),a=n("lwsE"),o=n("W8MJ"),c=(n("PJYZ"),n("7W2i")),i=n("a1gu"),s=n("Nsbk");function u(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=s(e);if(t){var a=s(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return i(this,n)}}t.__esModule=!0,t.default=void 0;var l=n("q1tI"),d=function(e){c(n,e);var t=u(n);function n(e){var o;return a(this,n),(o=t.call(this,e))._hasHeadManager=void 0,o.emitChange=function(){o._hasHeadManager&&o.props.headManager.updateHead(o.props.reduceComponentsToState(r(o.props.headManager.mountedInstances),o.props))},o._hasHeadManager=o.props.headManager&&o.props.headManager.mountedInstances,o}return o(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(l.Component);t.default=d},a1gu:function(e,t,n){var r=n("cDf5"),a=n("PJYZ");e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?a(e):t}},g4pe:function(e,t,n){e.exports=n("8Kt/")},lSNA:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},leqP:function(e,t,n){"use strict";var r=n("nKUr"),a=n("rQAc"),o=n.n(a);t.a=function(e){return Object(r.jsx)("div",{className:o.a.card,children:e.children})}},lwAK:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var a=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=a},rQAc:function(e,t,n){e.exports={card:"Card_card__3KSLO"}},vlRD:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("RNiq")}])}},[["vlRD",0,1,2]]]);