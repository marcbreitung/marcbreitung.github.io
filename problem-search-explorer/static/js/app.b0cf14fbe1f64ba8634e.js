webpackJsonp([1],{"8Rx0":function(t,e){},"9Z7+":function(t,e){},IpFT:function(t,e){},NHnr:function(t,e,a){"use strict";function s(t){a("9Z7+")}function i(t){a("P0g4")}function r(t){a("IpFT")}function n(t){a("8Rx0")}Object.defineProperty(e,"__esModule",{value:!0});var o=a("7+uW"),l={name:"app"},c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},u=[],h={render:c,staticRenderFns:u},d=h,m=a("VU/8"),v=s,p=m(l,d,!1,v,null,null),_=p.exports,f=a("/ocq"),g={searchStrategy:"BreadthFirstSearch",cols:"10",rows:"10"},y={name:"SearchMenu",data:function(){return g},methods:{doSearch:function(){this.$emit("updateSearch",g)},onChangeMap:function(){this.$emit("updateMap",g)}}},S=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"menu",attrs:{id:"menu"}},[a("h1",{staticClass:"menu__header"},[t._v("Problem Search Explorer")]),t._v(" "),a("div",{staticClass:"menu__section section"},[a("h2",{staticClass:"section__header"},[t._v("Search")]),t._v(" "),a("label",{staticClass:"form__label"},[t._v("Search Strategy")]),t._v(" "),a("div",{staticClass:"form__row"},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.searchStrategy,expression:"searchStrategy"}],staticClass:"form__input menu__select",on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.searchStrategy=e.target.multiple?a:a[0]}}},[a("option",{attrs:{value:"BreadthFirstSearch"}},[t._v("Breadth First Search")]),t._v(" "),a("option",{attrs:{value:"UniformCostSearch"}},[t._v("Uniform Cost Search")]),t._v(" "),a("option",{attrs:{value:"DepthFirstSearch"}},[t._v("Depth First Search")]),t._v(" "),a("option",{attrs:{value:"DepthLimitedSearch"}},[t._v("Depth Limited Search")])])]),t._v(" "),a("div",{staticClass:"form__row"},[a("button",{staticClass:"form__input form__button",on:{click:t.doSearch}},[t._v("Search")])])]),t._v(" "),a("div",{staticClass:"menu__section section"},[a("h2",{staticClass:"section__header"},[t._v("Map")]),t._v(" "),a("div",{staticClass:"form__row"},[a("label",{staticClass:"form__label form__label--small"},[t._v("Columns")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.cols,expression:"cols"}],staticClass:"form__input form__input--small",attrs:{type:"number",placeholder:"Columns (e.g. 10)",step:"1",min:"1",max:"50"},domProps:{value:t.cols},on:{input:function(e){e.target.composing||(t.cols=e.target.value)}}})]),t._v(" "),a("div",{staticClass:"form__row"},[a("label",{staticClass:"form__label form__label--small"},[t._v("Rows")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.rows,expression:"rows"}],staticClass:"form__input form__input--small",attrs:{type:"number",placeholder:"Rows (e.g. 10)",step:"1",min:"1",max:"50"},domProps:{value:t.rows},on:{input:function(e){e.target.composing||(t.rows=e.target.value)}}})]),t._v(" "),a("div",{staticClass:"form__row"},[a("button",{staticClass:"form__input form__button",on:{click:t.onChangeMap}},[t._v("Build Map")])])]),t._v(" "),t._m(0)])},C=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"menu__section section"},[a("a",{staticClass:"link",attrs:{href:"https://github.com/marcbreitung/problem-search-explorer",target:"_blank"}},[a("i",{staticClass:"fa fa-github fa-fw",attrs:{"aria-hidden":"true"}}),t._v("Problem Search Explorer")])])}],b={render:S,staticRenderFns:C},w=b,$=a("VU/8"),x=i,L=$(y,w,!1,x,"data-v-67feddf4",null),F=L.exports,N=a("H2yu"),E={map:null,canvas:null,visualisation:null},B={name:"SearchMap",data:function(){return E},created:function(){this.$nextTick(this.initEvents),this.$nextTick(this.init)},methods:{init:function(){var t=this;this.map=document.getElementById("map"),this.canvas=document.getElementById("canvas"),this.canvas.addEventListener("click",function(e){t.$eventHub.$emit("click-canvas",{x:e.offsetX,y:e.offsetY})},!1),this.visualisation=new N.Canvas({element:this.canvas,height:this.map.offsetHeight,width:this.map.offsetWidth,background:"#223143"}),this.visualisation.rendererFactory.registerRenderer("node",N.NodesRenderer),this.visualisation.rendererFactory.registerRenderer("text",N.TextRenderer),this.visualisation.rendererFactory.registerRenderer("solution",N.SolutionRenderer)},initEvents:function(){this.$eventHub.$on("nodes",this.addNodes),this.$eventHub.$on("start",this.addStart),this.$eventHub.$on("goal",this.addGoal),this.$eventHub.$on("solution",this.addSolution)},addNodes:function(t){this.visualisation.removeLayerByName("startLayer"),this.visualisation.removeLayerByName("goalLayer"),this.visualisation.removeLayerByName("baseLayer"),this.visualisation.removeLayerByName("solutionLayer");var e=new N.Layer("baseLayer",{type:"node",sorting:0,nodes:t,nodeColor:"#6189A5",lineColor:"#6189A5",textColor:"#e34f00",nodeSize:5});this.visualisation.addLayer(e),this.visualisation.update()},addStart:function(t){this.resetSolution(),t.label="A";var e=new N.Layer("startLayer",{type:"text",sorting:3,nodes:[t],nodeColor:"#507b0f",lineColor:"#000000",textColor:"#e7e7e7",nodeSize:12,textSize:12});this.visualisation.addLayer(e),this.visualisation.update()},addGoal:function(t){t.label="B";var e=new N.Layer("goalLayer",{type:"text",sorting:4,nodes:[t],nodeColor:"#e34f00",lineColor:"#000000",textColor:"#e7e7e7",nodeSize:12,textSize:12});this.visualisation.addLayer(e),this.visualisation.update()},addSolution:function(t){var e=new N.Layer("solutionLayer",{type:"solution",sorting:2,nodes:t,nodeColor:"#e7e7e7",lineColor:"#e7e7e7",textColor:"#e7e7e7",lineSize:2});this.visualisation.addLayer(e),this.visualisation.update()},resetSolution:function(){this.visualisation.removeLayerByName("startLayer"),this.visualisation.removeLayerByName("goalLayer"),this.visualisation.removeLayerByName("solutionLayer"),this.visualisation.update()}}},H=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},R=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"map",attrs:{id:"map"}},[a("canvas",{attrs:{id:"canvas"}})])}],M={render:H,staticRenderFns:R},k=M,P=a("VU/8"),U=r,D=P(B,k,!1,U,"data-v-52538a7e",null),I=D.exports,T=a("Ua05"),z=a("tXa0"),A={start:null,goal:null,map:null,mapElement:null,searchStrategyFabric:null,searchStrategy:null},G={components:{SearchMap:I,SearchMenu:F},name:"Explorer",data:function(){return A},created:function(){this.$nextTick(this.init)},methods:{init:function(){this.mapElement=document.getElementById("map"),this.searchStrategyFactory=new z.StrategyFactory,this.searchStrategyFactory.registerStrategy("BreadthFirstSearch",z.BreadthFirstSearch),this.searchStrategyFactory.registerStrategy("UniformCostSearch",z.UniformCostSearch),this.searchStrategyFactory.registerStrategy("DepthFirstSearch",z.DepthFirstSearch),this.searchStrategyFactory.registerStrategy("DepthLimitedSearch",z.DepthLimitedSearch),this.$eventHub.$on("click-canvas",this.findNode),this.map=new T.Map({})},updateSearch:function(t){var e=void 0,a=void 0,s=void 0;if(null===this.start||null===this.goal)return this.$modal.show("select"),!1;this.searchStrategy=this.searchStrategyFactory.getStrategy(t.searchStrategy),e=new z.Graph,e.addNodes(this.map.getNodes()),a=new z.Problem(e,this.start,this.goal);try{s=this.searchStrategy.search(a),this.$eventHub.$emit("solution",s.solutionGraph())}catch(t){"NoSolutionException"===t.name&&this.$modal.show("solution")}},updateMap:function(t){this.map.setSettings({cols:parseInt(t.cols,10),rows:parseInt(t.rows,10),width:this.mapElement.offsetWidth,height:this.mapElement.offsetHeight}),this.map.injectRandom(T.Random),this.start=null,this.goal=null,this.$eventHub.$emit("nodes",this.map.getNodes())},addNode:function(t){return null===this.start&&null===this.goal?(this.start=t,this.$eventHub.$emit("start",this.start),!1):null!==this.start&&null===this.goal?(this.goal=t,this.$eventHub.$emit("goal",this.goal),!0):null!==this.start&&null!==this.goal?(this.goal=null,this.start=t,this.$eventHub.$emit("start",this.start),!0):void 0},findNode:function(t){var e=this.map.findNodeByPosition(t,10);e&&this.addNode(e)}}},V=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"explorer",attrs:{id:"explorer"}},[a("search-menu",{on:{updateSearch:t.updateSearch,updateMap:t.updateMap}}),t._v(" "),a("search-map"),t._v(" "),a("modal",{attrs:{name:"select",height:"auto"}},[a("div",{staticClass:"modal"},[t._v("\n            Please select a start and a goal node.\n        ")])]),t._v(" "),a("modal",{attrs:{name:"solution",height:"auto"}},[a("div",{staticClass:"modal"},[t._v("\n            No solution found.\n        ")])])],1)},W=[],j={render:V,staticRenderFns:W},X=j,Z=a("VU/8"),q=n,J=Z(G,X,!1,q,"data-v-8dfa99cc",null),O=J.exports;o.a.use(f.a),o.a.prototype.$eventHub=new o.a;var Y=new f.a({routes:[{path:"/",name:"Explorer",component:O}]}),K=a("rifk"),Q=a.n(K);o.a.use(Q.a,{dialog:!0}),o.a.config.productionTip=!1,new o.a({el:"#app",router:Y,template:"<App/>",components:{App:_}})},P0g4:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.b0cf14fbe1f64ba8634e.js.map