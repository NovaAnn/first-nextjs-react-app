_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[7],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=c,t.useAmp=function(){return c(a.default.useContext(o.AmpStateContext))};var r,a=(r=n("q1tI"))&&r.__esModule?r:{default:r},o=n("lwAK");function c(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,a=void 0!==r&&r,o=e.hasQuery,c=void 0!==o&&o;return n||a&&c}},"20a2":function(e,t,n){e.exports=n("nOHt")},"7W2i":function(e,t,n){var r=n("SksO");e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},"8Kt/":function(e,t,n){"use strict";n("lSNA");t.__esModule=!0,t.defaultHead=l,t.default=void 0;var r,a=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=u();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var o=r?Object.getOwnPropertyDescriptor(e,a):null;o&&(o.get||o.set)?Object.defineProperty(n,a,o):n[a]=e[a]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),o=(r=n("Xuae"))&&r.__esModule?r:{default:r},c=n("lwAK"),i=n("FYa8"),s=n("/0+H");function u(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return u=function(){return e},e}function l(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[a.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(a.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function d(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===a.default.Fragment?e.concat(a.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var p=["name","httpEquiv","charSet","itemProp"];function f(e,t){return e.reduce((function(e,t){var n=a.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(d,[]).reverse().concat(l(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(a){var o=!0,c=!1;if(a.key&&"number"!==typeof a.key&&a.key.indexOf("$")>0){c=!0;var i=a.key.slice(a.key.indexOf("$")+1);e.has(i)?o=!1:e.add(i)}switch(a.type){case"title":case"base":t.has(a.type)?o=!1:t.add(a.type);break;case"meta":for(var s=0,u=p.length;s<u;s++){var l=p[s];if(a.props.hasOwnProperty(l))if("charSet"===l)n.has(l)?o=!1:n.add(l);else{var d=a.props[l],f=r[l]||new Set;"name"===l&&c||!f.has(d)?(f.add(d),r[l]=f):o=!1}}}return o}}()).reverse().map((function(e,t){var n=e.key||t;return a.default.cloneElement(e,{key:n})}))}function h(e){var t=e.children,n=(0,a.useContext)(c.AmpStateContext),r=(0,a.useContext)(i.HeadManagerContext);return a.default.createElement(o.default,{reduceComponentsToState:f,headManager:r,inAmpMode:(0,s.isInAmpMode)(n)},t)}h.rewind=function(){};var m=h;t.default=m},A3pG:function(e,t,n){e.exports={list:"MeetupList_list__1iafn",mainDiv:"MeetupList_mainDiv__1Z6yf",searchDiv:"MeetupList_searchDiv__1qx6I",searchItem:"MeetupList_searchItem__3hm_7",h3Span:"MeetupList_h3Span__3PXOi",switch:"MeetupList_switch__YfrEj",slider:"MeetupList_slider__1MMiu",round:"MeetupList_round__3CeTw"}},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},FYa8:function(e,t,n){"use strict";var r;t.__esModule=!0,t.HeadManagerContext=void 0;var a=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.HeadManagerContext=a},Ijbi:function(e,t,n){var r=n("WkPL");e.exports=function(e){if(Array.isArray(e))return r(e)}},Nsbk:function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},PJYZ:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},RIqP:function(e,t,n){var r=n("Ijbi"),a=n("EbDI"),o=n("ZhPi"),c=n("Bnag");e.exports=function(e){return r(e)||a(e)||o(e)||c()}},RNiq:function(e,t,n){"use strict";n.r(t),n.d(t,"__N_SSG",(function(){return b}));var r=n("nKUr"),a=n("q1tI"),o=n("g4pe"),c=n.n(o),i=n("A3pG"),s=n.n(i),u=n("20a2"),l=n("leqP"),d=n("RPSF"),p=n.n(d);var f=function(e){var t=Object(u.useRouter)();return Object(r.jsx)("li",{className:p.a.item,children:Object(r.jsxs)(l.a,{children:[Object(r.jsx)("div",{className:p.a.image,children:Object(r.jsx)("img",{src:e.image,alt:e.title})}),Object(r.jsxs)("div",{className:p.a.content,children:[Object(r.jsx)("h3",{children:e.title}),Object(r.jsx)("address",{children:e.address})]}),Object(r.jsx)("div",{className:p.a.actions,children:Object(r.jsx)("button",{onClick:function(){t.push("/"+e.id)},children:"Show Details"})})]})})};var h,m=function(e){var t=Object(a.useState)(!1),n=t[0];return t[1],console.log(n),Object(r.jsx)(a.Fragment,{children:Object(r.jsx)("ul",{className:s.a.list,children:e.meetups.map((function(e){return Object(r.jsx)(f,{id:e.id,image:e.image,title:e.title,address:e.address},e.id)}))})})},j=!1;var b=!0;t.default=function(e){var t=["Amsterdam","Rotterdam"],n=Object(a.useState)(new Array(t.length).fill(!1)),o=n[0],i=n[1],u=Object(a.useState)(!1),l=(u[0],u[1]),d=function(e){switch(console.log(e),console.log(e.target.name),e.target.name){case"location":j=!0,console.log("inside location");var n=t.findIndex((function(t){return console.log(t),console.log(e.target.value),t==e.target.value}));console.log(n);var r=o.map((function(e,t){return t===n?!e:e}));i(r)}};return Object(r.jsxs)(a.Fragment,{children:[Object(r.jsxs)(c.a,{children:[Object(r.jsx)("title",{children:"React Meetups"}),Object(r.jsx)("meta",{name:"description",content:"Browse a huge list of highly active React meetups!"})]}),Object(r.jsxs)("div",{className:s.a.mainDiv,children:[Object(r.jsxs)("div",{className:s.a.searchDiv,children:[Object(r.jsxs)("div",{className:s.a.searchItem,children:[Object(r.jsx)("h3",{children:"Location"}),t.map((function(e,t){return Object(r.jsxs)("span",{children:[Object(r.jsx)("span",{className:s.a.h3Span,children:e}),Object(r.jsxs)("label",{className:s.a.switch,children:[Object(r.jsx)("input",{type:"checkbox",name:"location",value:e,checked:o[t],onChange:d.bind(t)}),Object(r.jsx)("span",{className:s.a.slider})]})]})})),Object(r.jsx)("button",{type:"button",onClick:function(){console.log(o);var n=t.filter((function(e,t){return console.log("inside button"),o[t]}));console.log("after button"),console.log(n),j&&(console.log("inside locationchanged"),console.log(e.meetups),h=e.meetups.filter((function(e){return n.findIndex((function(t){return console.log(t),console.log(e.price),e.price==t}))>-1})),console.log(h),l(!0))},children:"Submit"})]}),Object(r.jsxs)("div",{className:s.a.searchItem,children:[Object(r.jsx)("h3",{children:"Price"}),Object(r.jsxs)("span",{children:[Object(r.jsx)("span",{className:s.a.h3Span,children:"$100 to $1000"}),Object(r.jsxs)("label",{className:s.a.switch,children:[Object(r.jsx)("input",{type:"checkbox",name:"price",value:"1000",checked:!0,onChange:d}),Object(r.jsx)("span",{className:s.a.slider})]})]}),Object(r.jsxs)("span",{children:[Object(r.jsx)("span",{className:s.a.h3Span,children:"Greater than $1000"}),Object(r.jsxs)("label",{className:s.a.switch,children:[Object(r.jsx)("input",{type:"checkbox",name:"price",value:"1001",checked:!1,onChange:d}),Object(r.jsx)("span",{className:s.a.slider})]})]})]})]}),!h&&Object(r.jsx)(m,{meetups:e.meetups}),h&&Object(r.jsx)(m,{meetups:h})]})]})}},RPSF:function(e,t,n){e.exports={item:"MeetupItem_item__3siMU",image:"MeetupItem_image__13rAP",content:"MeetupItem_content__3uEkT",actions:"MeetupItem_actions__LvT9B"}},Xuae:function(e,t,n){"use strict";var r=n("RIqP"),a=n("lwsE"),o=n("W8MJ"),c=(n("PJYZ"),n("7W2i")),i=n("a1gu"),s=n("Nsbk");function u(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=s(e);if(t){var a=s(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return i(this,n)}}t.__esModule=!0,t.default=void 0;var l=n("q1tI"),d=function(e){c(n,e);var t=u(n);function n(e){var o;return a(this,n),(o=t.call(this,e))._hasHeadManager=void 0,o.emitChange=function(){o._hasHeadManager&&o.props.headManager.updateHead(o.props.reduceComponentsToState(r(o.props.headManager.mountedInstances),o.props))},o._hasHeadManager=o.props.headManager&&o.props.headManager.mountedInstances,o}return o(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(l.Component);t.default=d},a1gu:function(e,t,n){var r=n("cDf5"),a=n("PJYZ");e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?a(e):t}},g4pe:function(e,t,n){e.exports=n("8Kt/")},lSNA:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},leqP:function(e,t,n){"use strict";var r=n("nKUr"),a=n("rQAc"),o=n.n(a);t.a=function(e){return Object(r.jsx)("div",{className:o.a.card,children:e.children})}},lwAK:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var a=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=a},rQAc:function(e,t,n){e.exports={card:"Card_card__3KSLO"}},vlRD:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("RNiq")}])}},[["vlRD",0,1,2]]]);