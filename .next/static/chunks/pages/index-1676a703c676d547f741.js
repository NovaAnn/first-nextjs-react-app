_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[7],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=i,t.useAmp=function(){return i(o.default.useContext(a.AmpStateContext))};var r,o=(r=n("q1tI"))&&r.__esModule?r:{default:r},a=n("lwAK");function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,o=void 0!==r&&r,a=e.hasQuery,i=void 0!==a&&a;return n||o&&i}},"20a2":function(e,t,n){e.exports=n("nOHt")},"7W2i":function(e,t,n){var r=n("SksO");e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},"8Kt/":function(e,t,n){"use strict";n("lSNA");t.__esModule=!0,t.defaultHead=l,t.default=void 0;var r,o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=u();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var a=r?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(n,o,a):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),a=(r=n("Xuae"))&&r.__esModule?r:{default:r},i=n("lwAK"),c=n("FYa8"),s=n("/0+H");function u(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return u=function(){return e},e}function l(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[o.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function d(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var f=["name","httpEquiv","charSet","itemProp"];function p(e,t){return e.reduce((function(e,t){var n=o.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(d,[]).reverse().concat(l(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(o){var a=!0,i=!1;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){i=!0;var c=o.key.slice(o.key.indexOf("$")+1);e.has(c)?a=!1:e.add(c)}switch(o.type){case"title":case"base":t.has(o.type)?a=!1:t.add(o.type);break;case"meta":for(var s=0,u=f.length;s<u;s++){var l=f[s];if(o.props.hasOwnProperty(l))if("charSet"===l)n.has(l)?a=!1:n.add(l);else{var d=o.props[l],p=r[l]||new Set;"name"===l&&i||!p.has(d)?(p.add(d),r[l]=p):a=!1}}}return a}}()).reverse().map((function(e,t){var n=e.key||t;return o.default.cloneElement(e,{key:n})}))}function h(e){var t=e.children,n=(0,o.useContext)(i.AmpStateContext),r=(0,o.useContext)(c.HeadManagerContext);return o.default.createElement(a.default,{reduceComponentsToState:p,headManager:r,inAmpMode:(0,s.isInAmpMode)(n)},t)}h.rewind=function(){};var m=h;t.default=m},A3pG:function(e,t,n){e.exports={list:"MeetupList_list__1iafn",mainDiv:"MeetupList_mainDiv__1Z6yf",searchDiv:"MeetupList_searchDiv__1qx6I",searchItem:"MeetupList_searchItem__3hm_7",h3Span:"MeetupList_h3Span__3PXOi",h3Count:"MeetupList_h3Count__3Ps_J",switch:"MeetupList_switch__YfrEj",slider:"MeetupList_slider__1MMiu",round:"MeetupList_round__3CeTw"}},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},FYa8:function(e,t,n){"use strict";var r;t.__esModule=!0,t.HeadManagerContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.HeadManagerContext=o},"HaE+":function(e,t,n){"use strict";function r(e,t,n,r,o,a,i){try{var c=e[a](i),s=c.value}catch(u){return void n(u)}c.done?t(s):Promise.resolve(s).then(r,o)}function o(e){return function(){var t=this,n=arguments;return new Promise((function(o,a){var i=e.apply(t,n);function c(e){r(i,o,a,c,s,"next",e)}function s(e){r(i,o,a,c,s,"throw",e)}c(void 0)}))}}n.d(t,"a",(function(){return o}))},Ijbi:function(e,t,n){var r=n("WkPL");e.exports=function(e){if(Array.isArray(e))return r(e)}},Nsbk:function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},PJYZ:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},RIqP:function(e,t,n){var r=n("Ijbi"),o=n("EbDI"),a=n("ZhPi"),i=n("Bnag");e.exports=function(e){return r(e)||o(e)||a(e)||i()}},RNiq:function(e,t,n){"use strict";n.r(t),n.d(t,"__N_SSG",(function(){return w}));var r=n("nKUr"),o=n("o0o1"),a=n.n(o),i=n("HaE+");function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function s(e){return function(e){if(Array.isArray(e))return c(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(e){if("string"===typeof e)return c(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?c(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var u=n("q1tI"),l=n("g4pe"),d=n.n(l),f=n("A3pG"),p=n.n(f),h=n("20a2"),m=n("leqP"),v=n("RPSF"),b=n.n(v);var g=function(e){var t=Object(h.useRouter)();return Object(r.jsx)("li",{className:b.a.item,children:Object(r.jsxs)(m.a,{children:[Object(r.jsx)("div",{className:b.a.image,children:Object(r.jsx)("img",{src:e.image,alt:e.title})}),Object(r.jsxs)("div",{className:b.a.content,children:[Object(r.jsx)("h3",{children:e.title}),Object(r.jsx)("address",{children:e.address})]}),Object(r.jsx)("div",{className:b.a.actions,children:Object(r.jsx)("button",{onClick:function(){t.push("/"+e.id)},children:"Show Details"})})]})})};var j,_=function(e){var t=Object(u.useState)(!1),n=t[0];return t[1],console.log(n),Object(r.jsx)(u.Fragment,{children:Object(r.jsx)("ul",{className:p.a.list,children:e.meetups.map((function(e){return Object(r.jsx)(g,{id:e.id,image:e.image,title:e.title,address:e.address},e.id)}))})})},y=!1,x=!1,O=[];var w=!0;t.default=function(e){console.log(e);var t=e.locationArray.map((function(e){return e._id})),n=e.priceArray.map((function(e){return e._id})),o=Object(u.useState)(new Array(t.length).fill(!1)),c=o[0],l=o[1],f=Object(u.useState)(new Array(n.length).fill(!1)),h=f[0],m=f[1],v=Object(u.useState)(!1),b=(v[0],v[1],function(e){switch(console.log(e),console.log(e.target.name),e.target.name){case"location":x=!0,console.log("inside location");var r=t.findIndex((function(t){return console.log(t),console.log(e.target.value),t==e.target.value}));console.log(r);var o=c.map((function(e,t){return t===r?!e:e}));l(o);case"price":y=!0,console.log("inside price");var a=n.findIndex((function(t){return console.log(t),console.log(e.target.value),t==e.target.value}));console.log(a);var i=h.map((function(e,t){return t===a?!e:e}));m(i)}});return Object(r.jsxs)(u.Fragment,{children:[Object(r.jsxs)(d.a,{children:[Object(r.jsx)("title",{children:"React Meetups"}),Object(r.jsx)("meta",{name:"description",content:"Browse a huge list of highly active React meetups!"})]}),Object(r.jsxs)("div",{className:p.a.mainDiv,children:[Object(r.jsxs)("div",{className:p.a.searchDiv,children:[e.locationArray&&Object(r.jsxs)("div",{className:p.a.searchItem,children:[Object(r.jsx)("h3",{children:"Location"}),e.locationArray.map((function(e,t){return Object(r.jsxs)("span",{children:[Object(r.jsxs)("label",{className:p.a.switch,children:[Object(r.jsx)("input",{type:"checkbox",name:"location",value:e._id,checked:c[t],onChange:b.bind(t)}),Object(r.jsx)("span",{className:p.a.slider})]}),Object(r.jsx)("span",{className:p.a.h3Span,children:e._id}),Object(r.jsx)("span",{className:p.a.h3Count,children:e.count})]})}))]}),e.priceArray&&Object(r.jsxs)("div",{className:p.a.searchItem,children:[Object(r.jsx)("h3",{children:"Price"}),e.priceArray.map((function(e,t,n){return Object(r.jsxs)("span",{children:[Object(r.jsxs)("label",{className:p.a.switch,children:[Object(r.jsx)("input",{type:"checkbox",name:"price",value:e._id,checked:h[t],onChange:b.bind(t)}),Object(r.jsx)("span",{className:p.a.slider})]}),0==t&&Object(r.jsxs)("span",{className:p.a.h3Span,children:["0 to ",e._id]}),t>0&&t<n.length-1&&Object(r.jsxs)("span",{className:p.a.h3Span,children:[n[t-1]._id," to ",e._id]}),t>0&&t>=n.length-1&&Object(r.jsxs)("span",{className:p.a.h3Span,children:["Greater than  ",e._id]}),Object(r.jsx)("span",{className:p.a.h3Count,children:e.count})]})}))]}),Object(r.jsx)("button",{type:"button",onClick:function(){console.log(c);var r=t.filter((function(e,t){return console.log("inside button"),c[t]})),o=n.filter((function(e,t){return console.log("inside button"),h[t]})),u=[2e4,4e4,6e4,8e4];console.log("after button"),console.log(r);var l={price:{$in:s(r)}};if(console.log(l),x){var d=function(){var t=Object(i.a)(a.a.mark((function t(){var n;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("innside async hand"),n="/api/"+e.meetups[0].price+"&"+e.meetups[0].price,console.log(n),t.next=5,fetch(n,{method:"GET",headers:{"Content-Type":"application/json"}});case 5:t.sent;case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();console.log("inside locationchanged"),console.log(e.meetups),j=e.meetups.filter((function(e){return r.findIndex((function(t){return console.log(t),console.log(e.price),e.price==t}))>-1})),console.log(j),d()}if(y){console.log("inside pricechanged"),console.log(o);var f=o.map((function(e){var t=u.find((function(t){return t>e}));return t?[e,t]:[e]}));console.log(f),f.forEach((function(e,t){console.log("inside swarch array"),console.log(e),e.length>1?O[t]={$and:[{$expr:{$gt:[{$toInt:"$location"},e[0]]}},{$expr:{$lt:[{$toInt:"$location"},e[1]]}}]}:O[t]={$expr:{$gt:[{$toInt:"$location"},e[0]]}}}));var p={$or:[].concat(O)};console.log(p),addMeetupHandler();var m={$and:[p,l]};console.log("totQuery"),console.log(m)}},children:"Submit"})]}),Object(r.jsx)(_,{meetups:e.meetups})]})]})}},RPSF:function(e,t,n){e.exports={item:"MeetupItem_item__3siMU",image:"MeetupItem_image__13rAP",content:"MeetupItem_content__3uEkT",actions:"MeetupItem_actions__LvT9B"}},Xuae:function(e,t,n){"use strict";var r=n("RIqP"),o=n("lwsE"),a=n("W8MJ"),i=(n("PJYZ"),n("7W2i")),c=n("a1gu"),s=n("Nsbk");function u(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=s(e);if(t){var o=s(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return c(this,n)}}t.__esModule=!0,t.default=void 0;var l=n("q1tI"),d=function(e){i(n,e);var t=u(n);function n(e){var a;return o(this,n),(a=t.call(this,e))._hasHeadManager=void 0,a.emitChange=function(){a._hasHeadManager&&a.props.headManager.updateHead(a.props.reduceComponentsToState(r(a.props.headManager.mountedInstances),a.props))},a._hasHeadManager=a.props.headManager&&a.props.headManager.mountedInstances,a}return a(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(l.Component);t.default=d},a1gu:function(e,t,n){var r=n("cDf5"),o=n("PJYZ");e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?o(e):t}},g4pe:function(e,t,n){e.exports=n("8Kt/")},lSNA:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},leqP:function(e,t,n){"use strict";var r=n("nKUr"),o=n("rQAc"),a=n.n(o);t.a=function(e){return Object(r.jsx)("div",{className:a.a.card,children:e.children})}},lwAK:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=o},rQAc:function(e,t,n){e.exports={card:"Card_card__3KSLO"}},vlRD:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("RNiq")}])}},[["vlRD",0,1,2]]]);