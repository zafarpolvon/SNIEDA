(function(t){function s(s){for(var e,r,o=s[0],c=s[1],n=s[2],p=0,d=[];p<o.length;p++)r=o[p],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&d.push(i[r][0]),i[r]=0;for(e in c)Object.prototype.hasOwnProperty.call(c,e)&&(t[e]=c[e]);m&&m(s);while(d.length)d.shift()();return l.push.apply(l,n||[]),a()}function a(){for(var t,s=0;s<l.length;s++){for(var a=l[s],e=!0,o=1;o<a.length;o++){var c=a[o];0!==i[c]&&(e=!1)}e&&(l.splice(s--,1),t=r(r.s=a[0]))}return t}var e={},i={app:0},l=[];function r(s){if(e[s])return e[s].exports;var a=e[s]={i:s,l:!1,exports:{}};return t[s].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=e,r.d=function(t,s,a){r.o(t,s)||Object.defineProperty(t,s,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,s){if(1&s&&(t=r(t)),8&s)return t;if(4&s&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&s&&"string"!=typeof t)for(var e in t)r.d(a,e,function(s){return t[s]}.bind(null,e));return a},r.n=function(t){var s=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(s,"a",s),s},r.o=function(t,s){return Object.prototype.hasOwnProperty.call(t,s)},r.p="/SNIEDA/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=s,o=o.slice();for(var n=0;n<o.length;n++)s(o[n]);var m=c;l.push([0,"chunk-vendors"]),a()})({0:function(t,s,a){t.exports=a("56d7")},"034f":function(t,s,a){"use strict";a("85ec")},"137c":function(t,s,a){},"56d7":function(t,s,a){"use strict";a.r(s);a("e260"),a("e6cf"),a("cca6"),a("a79d");var e=a("2b0e"),i=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},l=[],r={name:"App"},o=r,c=(a("034f"),a("2877")),n=Object(c["a"])(o,i,l,!1,null,null,null),m=n.exports,p=a("8c4f"),d=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"home"},[a("div",{staticClass:"header"},[a("nav",{staticClass:"relative flex flex-wrap items-center justify-between px-2 py-3 mb-3"},[a("div",{staticClass:"container px-4 mx-auto flex flex-wrap items-center justify-between"},[a("div",{staticClass:"w-full relative flex justify-between lg:w-auto  px-4 lg:static lg:block lg:justify-start"},[t._m(0),a("button",{staticClass:"cursor-pointer text-2xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none",attrs:{type:"button"},on:{click:function(s){return t.toggleNavbar()}}},[a("i",{staticClass:"fas fa-bars text-2xl text-white"})])]),a("div",{staticClass:"lg:flex lg:flex-grow items-center",class:{hidden:!t.showMenu,flex:t.showMenu}},[a("ul",{staticClass:"flex flex-col lg:flex-row list-none ml-auto"},t._l(t.menus,(function(s){return a("li",{key:s.id,staticClass:"nav-item"},[a("a",{staticClass:"px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug  hover:opacity-75",attrs:{href:"#pablo"}},[t._v(" "+t._s(s)+" ")])])})),0)]),a("div",{staticClass:"lg:flex lg:flex-grow items-center",class:{hidden:!t.showMenu,flex:t.showMenu}},[t._m(1)])])]),a("div",{staticClass:"text-left container mx-auto"},[a("div",{staticClass:"mx-0 lg:mx-32 xl:mx-32 mt-24 xl:mt-0 lg:mt-0"},[t._m(2),a("Countdown")],1)])]),t._m(3),a("div",{directives:[{name:"scrollanimation",rawName:"v-scrollanimation"}],staticClass:"about"},[t._m(4)]),a("div",{directives:[{name:"scrollanimation",rawName:"v-scrollanimation"}],staticClass:"start observer"},[a("div",{staticClass:"container mx-auto"},[a("div",{staticClass:"mx-0 xl:mx-32 lg:mx-32 px-4 xl:px-0 lg:px-0 mt-0 xl:mt-28 lg:mt-28"},[a("div",{staticClass:"icon-heading flex"},[t.loading?a("div",{staticClass:"lds-ring mr-6 "},[a("div"),a("div"),a("div"),a("div")]):t._e(),a("h2",{staticClass:"h2"},[t._v("Быстрый старт")])]),t._m(5),t._m(6)])])]),a("div",{directives:[{name:"scrollanimation",rawName:"v-scrollanimation"}],staticClass:"advantages"},[t._m(7)]),a("div",{directives:[{name:"scrollanimation",rawName:"v-scrollanimation"}],staticClass:"partners"},[a("div",{staticClass:"container mx-auto"},[a("div",{staticClass:"mx-0 xl:mx-32 lg:mx-32 px-4 xl:px-0 lg:px-0 mt-16 xl:mt-32 lg:mt-32"},[a("div",{staticClass:"icon-heading flex"},[t.loading?a("div",{staticClass:"lds-ring mr-6"},[a("div"),a("div"),a("div"),a("div")]):t._e(),a("h2",{staticClass:"h2"},[t._v("Партнеры - топовые бренды")])]),t._m(8)])])]),a("div",{directives:[{name:"scrollanimation",rawName:"v-scrollanimation"}],staticClass:"program"},[a("div",{staticClass:"container mx-auto"},[a("div",{staticClass:"mx-0 xl:mx-32 lg:mx-32 px-4 xl:px-0 lg:px-0 mt-16 xl:mt-32 lg:mt-32"},[a("div",{staticClass:"icon-heading text-center"},[t.loading?a("div",{staticClass:"lds-ring mr-6"},[a("div"),a("div"),a("div"),a("div")]):t._e(),a("h2",{staticClass:"h2"},[t._v("Быстрый старт")]),t._m(9)]),t._m(10)])])]),a("div",{directives:[{name:"scrollanimation",rawName:"v-scrollanimation"}],staticClass:"teachers"},[a("div",{staticClass:"container mx-auto"},[a("div",{staticClass:"mx-0 xl:mx-32 lg:mx-32 px-4 xl:px-0 lg:px-0 mt-16 xl:mt-32 lg:mt-32 pb-24"},[a("div",{staticClass:"icon-heading flex"},[t.loading?a("div",{staticClass:"lds-ring mr-6"},[a("div"),a("div"),a("div"),a("div")]):t._e(),a("h2",{staticClass:"h2"},[t._v("Партнеры - топовые бренды")])]),t._m(11)])])]),a("div",{directives:[{name:"scrollanimation",rawName:"v-scrollanimation"}],staticClass:"footer"},[t._m(12)])])},u=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("a",{staticClass:"text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase ",attrs:{href:"#pablo"}},[a("img",{attrs:{src:"https://firebasestorage.googleapis.com/v0/b/vue-store-1.appspot.com/o/logo.png?alt=media&token=df01d8ba-3c5e-4d26-9138-abcf950e4804",alt:""}})])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ul",{staticClass:"flex flex-col lg:flex-row list-none ml-auto"},[a("a",{staticClass:" main-screen-button grad",attrs:{href:""}},[t._v("Зайти в кабинет")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("h1",{staticClass:"font-bold focus-with h1-main-screen mt-12 xl:mt-60 lg:mt-60"},[t._v("Первый курс "),a("br"),t._v(" по компьтерной сборе")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"main-screen-last-line"},[a("div",{staticClass:"mx-auto container"},[a("div",{staticClass:"mx-0 xl:mx-32 lg:mx-32 px-4 xl:px-0 lg:px-0"},[a("div",{staticClass:"grid grid-cols-9 xl:gap-14 lg:gap-0 gap-0"},[a("div",{staticClass:"xl:col-span-2 lg:col-span-2 col-span-9 my-auto"},[a("a",{staticClass:"main-screen__button--active grad1",attrs:{href:"#"}},[t._v("Заказать курс")])]),a("div",{staticClass:"xl:col-span-2 lg:col-span-2 col-span-9 my-auto mt-6 xl:mt-0 lg:mt-0"},[a("li",{staticClass:"flex justify-between "},[a("h5",{staticClass:"opacity-40"},[t._v("Учеников всего:")]),a("p",[t._v("190")])]),a("li",{staticClass:"flex pt-4 justify-between"},[a("h5",{staticClass:"opacity-40"},[t._v("Успешно закончил курс:")]),a("p",[t._v("200")])])]),a("div",{staticClass:"xl:col-span-5 lg:col-span-2 col-span-9 my-auto "},[a("div",{staticClass:"flex mt-6 xl:mt-0 lg:mt-0"},[a("h5",{staticClass:"opacity-40"},[t._v("Заработано учениками:")]),a("p",{staticClass:"ml-4 font-bold"},[t._v("400 000₽")])]),a("div",{staticClass:"h-2 my-2 relative overflow-hidden"},[a("div",{staticClass:"w-full h-full bg-gray-200 absolute"}),a("div",{staticClass:"h-full grad1 absolute",staticStyle:{width:"60%"}})]),a("div",{staticClass:"flex  opacity-40 justify-between"},[a("h5",[t._v("0")]),a("p",[t._v("1 000 000₽")])])])])])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"container mx-auto"},[a("div",{staticClass:"mx-0 xl:mx-32 lg:mx-32 px-4 xl:px-0 lg:px-0"},[a("div",{staticClass:"grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 gap-4 xl:mt-28 mt-12 lg:mt-28 pb-24"},[a("div",{staticClass:"rectangle-1 mx-auto"},[a("img",{staticClass:"mt-16",attrs:{src:"https://firebasestorage.googleapis.com/v0/b/vue-store-1.appspot.com/o/image.png?alt=media&token=ae37906a-15e8-44a9-b2b4-04af91edbce6",alt:""}})]),a("div",{staticClass:"text-left mt-24"},[a("h2",{staticClass:"about-h1"},[t._v("Чем мы занимаемся?")]),a("p",{staticClass:"about-p mt-8"},[t._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget neque, dignissim et feugiat elit augue in suspendisse egestas. Dictum vestibulum mi et sed nunc, orci fermentum vestibulum, morbi. Et neque, adipiscing sapien sem senectus praesent aenean consequat. Aenean facilisi turpis aliquet fringilla. Nunc sem felis sed interdum feugiat mattis elit, sollicitudin. Quam pharetra rhoncus risus, cursus id elementum aliquet. Nullam turpis arcu malesuada arcu interdum placerat nisi, lobortis.")])])])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",{staticClass:"start-p mt-8"},[t._v("Больше 90% учеников прошли полный курс и смогли "),a("br"),t._v(" собрать свой первый компьютер")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"grid grid-cols-4 pb-24 start-percentage mt-12"},[a("h3",[t._v("100%")]),a("h3",[t._v("75%")]),a("h3",[t._v("50%")]),a("h3",[t._v("Итог")]),a("div",{staticClass:"my-auto"},[a("div",{staticClass:"xl:h-20 h-14 grad2"})]),a("div",{staticClass:"my-auto"},[a("div",{staticClass:"h-12 grad3"})]),a("div",{staticClass:"my-auto"},[a("div",{staticClass:"h-7 grad"})]),a("div",{staticClass:"my-auto"},[a("div",{staticClass:"h-2.5  grad3"})]),a("div",{staticClass:"col-span-4 flex flex-col xl:flex-row lg:flex-row mt-9"},[a("p",[t._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus eget velit quisque accumsan amet tortor. Velit, volutpat egestas fringilla mi porttitor tempus. Placerat dui.")]),a("p",[t._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus eget velit quisque accumsan amet tortor. Velit, volutpat egestas fringilla mi porttitor tempus. Placerat dui.")]),a("p",[t._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus eget velit quisque accumsan amet tortor. Velit, volutpat egestas fringilla mi porttitor tempus. Placerat dui.")]),a("p",[t._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus eget velit quisque accumsan amet tortor. Velit, volutpat egestas fringilla mi porttitor tempus. Placerat dui.")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"container mx-auto"},[a("div",{staticClass:"mx-0 xl:mx-32 lg:mx-32 px-4 xl:px-0 lg:px-0 mt-0 xl:mt-28 lg:mt-28 text-center"},[a("h2",{staticClass:"h2"},[t._v("Получите профессию прямо сейчас")]),a("div",{staticClass:"grid xl:grid-cols-3 grid-cols-1 lg:grid-cols-1 gap-12 mt-24"},[a("div",[a("img",{staticClass:"mx-auto",attrs:{src:"https://firebasestorage.googleapis.com/v0/b/vue-store-1.appspot.com/o/icon-1.png?alt=media&token=9e177f37-8ace-493e-b5f2-6f0c0081c2c8",alt:""}}),a("h5",{staticClass:"h5 mt-14 mb-10"},[t._v("Только практические навыки в работе")]),a("p",{staticClass:"p"},[t._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus eget velit quisque accumsan amet tortor. Velit, volutpat egestas fringilla mi porttitor tempus. Placerat dui.")])]),a("div",[a("img",{staticClass:"mx-auto",attrs:{src:"https://firebasestorage.googleapis.com/v0/b/vue-store-1.appspot.com/o/icon-2.png?alt=media&token=53d83444-7bef-405c-8262-86001b729b81",alt:""}}),a("h5",{staticClass:"h5 mt-14 mb-10"},[t._v("Только практические навыки в работе")]),a("p",{staticClass:"p"},[t._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus eget velit quisque accumsan amet tortor. Velit, volutpat egestas fringilla mi porttitor tempus. Placerat dui.")])]),a("div",[a("img",{staticClass:"mx-auto",attrs:{src:"https://firebasestorage.googleapis.com/v0/b/vue-store-1.appspot.com/o/icon-3.png?alt=media&token=65ceaef4-656b-423b-ae77-b81a1da7a588",alt:""}}),a("h5",{staticClass:"h5 mt-14 mb-10"},[t._v("Только практические навыки в работе")]),a("p",{staticClass:"p"},[t._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus eget velit quisque accumsan amet tortor. Velit, volutpat egestas fringilla mi porttitor tempus. Placerat dui.")])])])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"grid grid-cols-4 mt-20"},[a("div",{staticClass:"border-gray-600 border-r border-b"},[a("img",{staticClass:"mx-auto py-4 px-2 xl:px-0 lg:px-0",attrs:{src:"https://firebasestorage.googleapis.com/v0/b/vue-store-1.appspot.com/o/msi.png?alt=media&token=6d52773f-9dc1-4bca-907e-5ed35033f0a0",alt:""}})]),a("div",{staticClass:"border-gray-600 border-r border-b"},[a("img",{staticClass:"mx-auto py-4 px-2 xl:px-0 lg:px-0",attrs:{src:"https://firebasestorage.googleapis.com/v0/b/vue-store-1.appspot.com/o/msi.png?alt=media&token=6d52773f-9dc1-4bca-907e-5ed35033f0a0",alt:""}})]),a("div",{staticClass:"border-gray-600 border-r border-b"},[a("img",{staticClass:"mx-auto py-4 px-2 xl:px-0 lg:px-0",attrs:{src:"https://firebasestorage.googleapis.com/v0/b/vue-store-1.appspot.com/o/msi.png?alt=media&token=6d52773f-9dc1-4bca-907e-5ed35033f0a0",alt:""}})]),a("div",{staticClass:"border-gray-600 border-b"},[a("img",{staticClass:"mx-auto py-4 px-2 xl:px-0 lg:px-0",attrs:{src:"https://firebasestorage.googleapis.com/v0/b/vue-store-1.appspot.com/o/msi.png?alt=media&token=6d52773f-9dc1-4bca-907e-5ed35033f0a0",alt:""}})]),a("div",{staticClass:"border-gray-600 border-r"},[a("img",{staticClass:"mx-auto py-4 px-2 xl:px-0 lg:px-0",attrs:{src:"https://firebasestorage.googleapis.com/v0/b/vue-store-1.appspot.com/o/msi.png?alt=media&token=6d52773f-9dc1-4bca-907e-5ed35033f0a0",alt:""}})]),a("div",{staticClass:"border-gray-600 border-r"},[a("img",{staticClass:"mx-auto py-4 px-2 xl:px-0 lg:px-0",attrs:{src:"https://firebasestorage.googleapis.com/v0/b/vue-store-1.appspot.com/o/msi.png?alt=media&token=6d52773f-9dc1-4bca-907e-5ed35033f0a0",alt:""}})]),a("div",{staticClass:"border-gray-600 border-r"},[a("img",{staticClass:"mx-auto py-4 px-2 xl:px-0 lg:px-0",attrs:{src:"https://firebasestorage.googleapis.com/v0/b/vue-store-1.appspot.com/o/msi.png?alt=media&token=6d52773f-9dc1-4bca-907e-5ed35033f0a0",alt:""}})]),a("div",{staticClass:"border-gray-600 "},[a("img",{staticClass:"mx-auto py-4 px-2 xl:px-0 lg:px-0",attrs:{src:"https://firebasestorage.googleapis.com/v0/b/vue-store-1.appspot.com/o/msi.png?alt=media&token=6d52773f-9dc1-4bca-907e-5ed35033f0a0",alt:""}})])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",{staticClass:"start-p mt-8"},[t._v("Больше 90% учеников прошли полный курс и смогли "),a("br"),t._v(" собрать свой первый компьютер")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"mt-20 flex justify-center px-0 xl:px-64"},[a("div",{staticClass:"text-right mr-20 xl:mr-32"},[a("div",{staticClass:"mt-10"},[a("p",{staticClass:"p opacity-40"},[t._v("Неделя №1")]),a("h6",{staticClass:"h6"},[t._v("Красивая часть курса, которая помогает в успехе")])]),a("div",{staticClass:"mt-20"},[a("p",{staticClass:"p opacity-40"},[t._v("Неделя №3")]),a("h6",{staticClass:"h6"},[t._v("Красивая часть курса, которая помогает в успехе")])]),a("div",{staticClass:"mt-20"},[a("p",{staticClass:"p opacity-40"},[t._v("Неделя №5")]),a("h6",{staticClass:"h6"},[t._v("Красивая часть курса, которая помогает в успехе")])]),a("div",{staticClass:"mt-20"},[a("p",{staticClass:"p opacity-40"},[t._v("Неделя №7")]),a("h6",{staticClass:"h6"},[t._v("Красивая часть курса, которая помогает в успехе")])])]),a("div",{staticClass:"h-full w-2 grad flex flex-col"},[a("div",{staticClass:"w-12 xl:w-24 lg:w-24 h-0.5 -ml-12 xl:-ml-24 lg:-ml-24 bg-gray-600 mt-16 xl:mt-20 lg:mt-20"}),a("div",{staticClass:"w-12 xl:w-24 lg:w-24 h-0.5 ml-2 bg-gray-600 mt-16 xl:mt-20 lg:mt-20"}),a("div",{staticClass:"w-12 xl:w-24 lg:w-24 h-0.5 -ml-12 xl:-ml-24 lg:-ml-24 bg-gray-600 mt-56 xl:mt-20 lg:mt-20"}),a("div",{staticClass:"w-12 xl:w-24 lg:w-24 h-0.5 ml-2 bg-gray-600 mt-16 xl:mt-20 lg:mt-20"}),a("div",{staticClass:"w-12 xl:w-24 lg:w-24 h-0.5 -ml-12 xl:-ml-24 lg:-ml-24 bg-gray-600 mt-52 xl:mt-20 lg:mt-20"}),a("div",{staticClass:"w-12 xl:w-24 lg:w-24 h-0.5 ml-2 bg-gray-600 mt-16 xl:mt-20 lg:mt-20"}),a("div",{staticClass:"w-12 xl:w-24 lg:w-24 h-0.5 -ml-12 xl:-ml-24 lg:-ml-24 bg-gray-600 mt-52 xl:mt-20 lg:mt-20 mb-24"})]),a("div",{staticClass:"text-left ml-20 xl:ml-32"},[a("div",{staticClass:"mt-28"},[a("p",{staticClass:"p opacity-40"},[t._v("Неделя №2")]),a("h6",{staticClass:"h6"},[t._v("Красивая часть курса, которая помогает в успехе")])]),a("div",{staticClass:"mt-20"},[a("p",{staticClass:"p opacity-40"},[t._v("Неделя №4")]),a("h6",{staticClass:"h6"},[t._v("Красивая часть курса, которая помогает в успехе")])]),a("div",{staticClass:"mt-20"},[a("p",{staticClass:"p opacity-40"},[t._v("Неделя №6")]),a("h6",{staticClass:"h6"},[t._v("Красивая часть курса, которая помогает в успехе")])])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 mt-24"},[a("div",{staticClass:"person text-center"},[a("img",{staticClass:"mx-auto",attrs:{src:"https://firebasestorage.googleapis.com/v0/b/vue-store-1.appspot.com/o/Ellipse%202.png?alt=media&token=caaff918-9e36-48eb-9e62-e8f64cd06fe0",alt:""}}),a("h4",{staticClass:"mt-10"},[t._v("Дмитрий Иванов")]),a("p",{staticClass:"p mt-3 mb-7"},[t._v("Специалист по видеокартам")]),a("a",{staticClass:"border rounded-full main-screen-button",attrs:{href:"#"}},[t._v("Биография")])]),a("div",{staticClass:"person text-center mt-12 xl:mt-0 lg:mt-12"},[a("img",{staticClass:"mx-auto",attrs:{src:"https://firebasestorage.googleapis.com/v0/b/vue-store-1.appspot.com/o/Ellipse%201.png?alt=media&token=f357a31a-82c8-4b51-8691-640adbe24d0e",alt:""}}),a("h4",{staticClass:"mt-10"},[t._v("Дмитрий Иванов")]),a("p",{staticClass:"p mt-3 mb-7"},[t._v("Специалист по видеокартам")]),a("a",{staticClass:"border rounded-full main-screen-button",attrs:{href:"#"}},[t._v("Биография")])]),a("div",{staticClass:"person text-center mt-12 xl:mt-0 lg:mt-12"},[a("img",{staticClass:"mx-auto",attrs:{src:"https://firebasestorage.googleapis.com/v0/b/vue-store-1.appspot.com/o/Ellipse%203.png?alt=media&token=2b0da79c-ed0d-4bc8-b547-5d0ffc2bb0a4",alt:""}}),a("h4",{staticClass:"mt-10"},[t._v("Дмитрий Иванов")]),a("p",{staticClass:"p mt-3 mb-7"},[t._v("Специалист по видеокартам")]),a("a",{staticClass:"border rounded-full main-screen-button",attrs:{href:"#"}},[t._v("Биография")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"container mx-auto"},[a("div",{staticClass:"mx-0 xl:mx-32 lg:mx-32 px-4 xl:px-0 lg:px-0 mt-0 xl:mt-16 lg:mt-16 pb-24 text-center"},[a("h2",{staticClass:"h2"},[t._v("Статьи каждую неделю")]),a("p",{staticClass:"p pt-6 opacity-40"},[t._v("Больше 90% учеников прошли полный курс и смогли "),a("br"),t._v(" собрать свой первый компьютер")]),a("div",{staticClass:"footer-form mt-16"},[a("div",{staticClass:"mx-auto footer-inner flex"},[a("input",{staticClass:"w-2/3 h-full",attrs:{id:"search",type:"text",placeholder:"Search"}}),a("button",{staticClass:"w-1/3"},[t._v(" Подписаться ")])])])])])}],g=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("div",{staticClass:"number-main pb-24"},[a("li",{staticClass:"mr-2 xl:mr-12 lg:mr-12 mx-auto xl:mx-0 lg:mx-0 "},[a("h5",[t._v(t._s(t.days))]),a("p",[t._v("Дней")])]),a("li",{staticClass:"mr-2 xl:mr-12 lg:mr-12 mx-auto xl:mx-0 lg:mx-0"},[a("h5",[t._v(t._s(t.hours))]),a("p",[t._v("Часов")])]),a("li",{staticClass:"mr-2 xl:mr-12 lg:mr-12 mx-auto xl:mx-0 lg:mx-0"},[a("h5",[t._v(t._s(t.minutes))]),a("p",[t._v("Минут")])]),a("li",{staticClass:"mr-2 xl:mr-12 lg:mr-12 mx-auto xl:mx-0 lg:mx-0"},[a("h5",[t._v(t._s(t.seconds))]),a("p",[t._v("Секунд")])])])])},v=[],x=(a("4d90"),{data:function(){return{time:1621098,timer:null}},mounted:function(){},methods:{decrementOrAlert:function(){this.time>0&&this.time--}},computed:{days:function(){return String(Math.floor(this.time/24/60/60)).padStart(2,"0")},hoursLeft:function(){return String(Math.floor(this.time-86400*this.days)).padStart(2,"0")},hours:function(){return String(Math.floor(this.hoursLeft/3600)).padStart(2,"0").padStart(2,"0")},minutesLeft:function(){return String(Math.floor(this.hoursLeft-3600*this.hours)).padStart(2,"0")},minutes:function(){return String(Math.floor(this.minutesLeft/60)).padStart(2,"0")},seconds:function(){return String(this.time%60).padStart(2,"0")}},created:function(){this.timer=setInterval(this.decrementOrAlert,1e3)}}),f=x,b=(a("fce5"),Object(c["a"])(f,g,v,!1,null,"f52d98ac",null)),h=b.exports,C={name:"Home",data:function(){return{menus:["Главная","Курсы","Расписание","Преподователи","Рассылка","Контакты"],showMenu:!1,loading:!1}},mounted:function(){console.log(vScrollanimation)},methods:{toggleNavbar:function(){this.showMenu=!this.showMenu}},components:{Countdown:h}},_=C,y=(a("dd80"),Object(c["a"])(_,d,u,!1,null,"0b82bfcd",null)),w=y.exports;e["a"].use(p["a"]);var k=[{path:"/",name:"Home",component:w}],E=new p["a"]({mode:"history",base:"/SNIEDA/",routes:k}),S=E,j=a("2f62");e["a"].use(j["a"]);var N=new j["a"].Store({state:{},mutations:{},actions:{},modules:{}}),q=(a("def6"),a("159b"),new IntersectionObserver((function(t,s){t.forEach((function(t){t.isIntersecting&&(t.target.classList.add("enter"),console.log(t),s.unobserve(t.target))}))}))),O={bind:function(t){t.classList.add("before-enter"),q.observe(t)}};e["a"].directive("scrollanimation",O),e["a"].config.productionTip=!1,new e["a"]({router:S,store:N,render:function(t){return t(m)}}).$mount("#app")},"85ec":function(t,s,a){},b573:function(t,s,a){},dd80:function(t,s,a){"use strict";a("b573")},def6:function(t,s,a){},fce5:function(t,s,a){"use strict";a("137c")}});
//# sourceMappingURL=app.3b5094cb.js.map