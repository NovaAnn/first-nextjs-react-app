_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[6],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=i,t.useAmp=function(){return i(o.default.useContext(a.AmpStateContext))};var r,o=(r=n("q1tI"))&&r.__esModule?r:{default:r},a=n("lwAK");function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,o=void 0!==r&&r,a=e.hasQuery,i=void 0!==a&&a;return n||o&&i}},"0GHO":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/[meetupId]",function(){return n("kqZg")}])},"7W2i":function(e,t,n){var r=n("SksO");e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},"8Kt/":function(e,t,n){"use strict";n("lSNA");t.__esModule=!0,t.defaultHead=l,t.default=void 0;var r,o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=u();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var a=r?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(n,o,a):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),a=(r=n("Xuae"))&&r.__esModule?r:{default:r},i=n("lwAK"),s=n("FYa8"),c=n("/0+H");function u(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return u=function(){return e},e}function l(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[o.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function d(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var f=["name","httpEquiv","charSet","itemProp"];function p(e,t){return e.reduce((function(e,t){var n=o.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(d,[]).reverse().concat(l(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(o){var a=!0,i=!1;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){i=!0;var s=o.key.slice(o.key.indexOf("$")+1);e.has(s)?a=!1:e.add(s)}switch(o.type){case"title":case"base":t.has(o.type)?a=!1:t.add(o.type);break;case"meta":for(var c=0,u=f.length;c<u;c++){var l=f[c];if(o.props.hasOwnProperty(l))if("charSet"===l)n.has(l)?a=!1:n.add(l);else{var d=o.props[l],p=r[l]||new Set;"name"===l&&i||!p.has(d)?(p.add(d),r[l]=p):a=!1}}}return a}}()).reverse().map((function(e,t){var n=e.key||t;return o.default.cloneElement(e,{key:n})}))}function m(e){var t=e.children,n=(0,o.useContext)(i.AmpStateContext),r=(0,o.useContext)(s.HeadManagerContext);return o.default.createElement(a.default,{reduceComponentsToState:p,headManager:r,inAmpMode:(0,c.isInAmpMode)(n)},t)}m.rewind=function(){};var h=m;t.default=h},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},FYa8:function(e,t,n){"use strict";var r;t.__esModule=!0,t.HeadManagerContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.HeadManagerContext=o},H1Ta:function(e,t,n){},Ijbi:function(e,t,n){var r=n("WkPL");e.exports=function(e){if(Array.isArray(e))return r(e)}},Nsbk:function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},PJYZ:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},Qetd:function(e,t,n){"use strict";var r=Object.assign.bind(Object);e.exports=r,e.exports.default=e.exports},RIqP:function(e,t,n){var r=n("Ijbi"),o=n("EbDI"),a=n("ZhPi"),i=n("Bnag");e.exports=function(e){return r(e)||o(e)||a(e)||i()}},SksO:function(e,t){function n(t,r){return e.exports=n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},n(t,r)}e.exports=n},W8MJ:function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}},WkPL:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}},Xuae:function(e,t,n){"use strict";var r=n("RIqP"),o=n("lwsE"),a=n("W8MJ"),i=(n("PJYZ"),n("7W2i")),s=n("a1gu"),c=n("Nsbk");function u(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=c(e);if(t){var o=c(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return s(this,n)}}t.__esModule=!0,t.default=void 0;var l=n("q1tI"),d=function(e){i(n,e);var t=u(n);function n(e){var a;return o(this,n),(a=t.call(this,e))._hasHeadManager=void 0,a.emitChange=function(){a._hasHeadManager&&a.props.headManager.updateHead(a.props.reduceComponentsToState(r(a.props.headManager.mountedInstances),a.props))},a._hasHeadManager=a.props.headManager&&a.props.headManager.mountedInstances,a}return a(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(l.Component);t.default=d},YEck:function(e,t,n){e.exports={detail:"MeetupDetail_detail__C_8IT",imgItem:"MeetupDetail_imgItem__yL32N",mainRow:"MeetupDetail_mainRow__2ltUN",detailsFlex:"MeetupDetail_detailsFlex__1_Iro"}},ZhPi:function(e,t,n){var r=n("WkPL");e.exports=function(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}},a1gu:function(e,t,n){var r=n("cDf5"),o=n("PJYZ");e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?o(e):t}},cDf5:function(e,t){function n(t){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?e.exports=n=function(e){return typeof e}:e.exports=n=function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(t)}e.exports=n},g4pe:function(e,t,n){e.exports=n("8Kt/")},kqZg:function(e,t,n){"use strict";n.r(t),n.d(t,"__N_SSG",(function(){return l}));var r=n("nKUr"),o=n("q1tI"),a=n("g4pe"),i=n.n(a),s=(n("H1Ta"),n("YEck")),c=n.n(s);var u=function(e){return Object(r.jsxs)("section",{className:c.a.detail,children:[Object(r.jsx)("img",{src:e.image,alt:e.title}),Object(r.jsx)("address",{children:e.address}),Object(r.jsxs)("div",{className:c.a.detailsFlex,children:[Object(r.jsxs)("h6",{children:[Object(r.jsx)("span",{children:Object(r.jsx)("i",{className:"fas fa-map-marker-alt",style:{color:"#77002e"}})}),"Amsterdam"]}),Object(r.jsxs)("h6",{children:[Object(r.jsx)("span",{children:Object(r.jsx)("i",{className:"fas fa-male",style:{color:"#77002e"}})}),"Bachelors"]}),Object(r.jsxs)("h6",{children:[Object(r.jsx)("span",{children:Object(r.jsx)("i",{className:"fas fa-building",style:{color:"#77002e"}})}),"1BHK"]}),Object(r.jsxs)("h6",{children:[Object(r.jsx)("span",{children:Object(r.jsx)("i",{className:"fas fa-tag",style:{color:"#77002e"}})}),"$58000"]}),Object(r.jsxs)("h6",{children:[Object(r.jsx)("span",{children:Object(r.jsx)("i",{className:"fas fa-phone",style:{color:"#77002e"}})}),"+31 616932568"]})]}),Object(r.jsx)("p",{children:"Amenities"}),Object(r.jsx)("div",{className:c.a.mainRow,children:Object(r.jsxs)("div",{className:"row",style:{display:"flex",flexWrap:"wrap"},children:[Object(r.jsx)("div",{className:"form-group col-md-3",children:Object(r.jsx)("div",{className:c.a.imgItem,children:Object(r.jsx)("img",{src:"https://cdn-icons-png.flaticon.com/128/816/816655.png",style:{maxHeight:"5rem"}})})}),Object(r.jsx)("div",{className:"form-group col-md-3",children:Object(r.jsx)("div",{className:c.a.imgItem,children:Object(r.jsx)("img",{style:{maxHeight:"5rem"},src:"https://t4.ftcdn.net/jpg/02/98/58/67/240_F_298586773_RJyugngszfs8bkVtcB7uZ4h7ooMRscjA.jpg"})})}),Object(r.jsx)("div",{className:"form-group col-md-3",children:Object(r.jsx)("div",{className:c.a.imgItem,children:Object(r.jsx)("img",{style:{maxHeight:"5rem"},src:"https://cdn-icons.flaticon.com/png/128/2182/premium/2182879.png?token=exp=1640132675~hmac=0dcf409868cadbe0a0973c90e156cfe4"})})}),Object(r.jsx)("div",{className:"form-group col-md-3",children:Object(r.jsx)("div",{className:c.a.imgItem,children:Object(r.jsx)("img",{style:{maxHeight:"5rem"},src:"https://cdn-icons.flaticon.com/png/128/1872/premium/1872999.png?token=exp=1640132703~hmac=f9649e96cee213d41921a5d7f3b87bad"})})})]})}),Object(r.jsx)("div",{className:"row",children:Object(r.jsx)("div",{className:"form-group col-md-12",children:Object(r.jsx)("p",{children:"At Griffis Union Station our pet-friendly apartment homes give you everything you want and need in your next home. Our modern and luxury apartment homes offer a range of floor plans including one and two- bedroom options. From in-home washers and dryers to stainless steel appliances*, our apartment interiors combine all the most important features in your next home. Around the community, you can find a year-round resort style pool and pet wash, making living even better beyond your front door. Ideally located on Inca Street in downtown Denver, our community provides you access to dining, shopping, arts, entertainment and recreation. At Griffis Union Station the city skyline is electrifying, the night life is buzzing, and the mountains are calling! Situated just blocks from Denver's historic Union Station and Coors Field ballpark, all the hottest attractions are close by. Schedule your tour today and see why living at Griffis Union Station is the best of downtown Denver."})})})]})};var l=!0;t.default=function(e){return Object(r.jsxs)(o.Fragment,{children:[Object(r.jsxs)(i.a,{children:[Object(r.jsx)("title",{children:e.meetupData.title}),Object(r.jsx)("meta",{name:"description",content:e.meetupData.description}),Object(r.jsx)("link",{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"}),Object(r.jsx)("script",{src:"https://kit.fontawesome.com/fdba8ed509.js",crossorigin:"anonymous"})]}),Object(r.jsx)(u,{image:e.meetupData.image,title:e.meetupData.title,address:e.meetupData.address,description:e.meetupData.description})]})}},lSNA:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},lwAK:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=o},lwsE:function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}}},[["0GHO",0,1,3]]]);