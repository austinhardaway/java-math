webpackJsonp([1],{"1/oy":function(t,e){},"9M+g":function(t,e){},GfHa:function(t,e){},Id91:function(t,e){},Jmt5:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n("7+uW"),a=n("e6fC"),r={name:"App",components:{},methods:{check:function(t){var e=t.type,n=t.val,o=t.typeIn,a=t.valIn,r=t.style;e==o&&Math.abs(a-n)<.02&&(r.push("green"),this.$forceUpdate())}},computed:{byte:function(){return Math.floor(127*Math.random())},int:function(){return Math.floor(300*Math.random())},float:function(){return Math.floor(300*Math.random()*100/1)/100},double:function(){return Math.floor(500*Math.random()*100/1)/100},char:function(){return String.fromCharCode(97+Math.floor(26*Math.random()))},problems:function(){return[{expr:"(i*d)/i",type:"double",val:Math.floor(this.int*this.double/this.int*100/1)/100,style:[]},{expr:"i/(2*i)",type:"int",val:Math.floor(Math.floor(this.int/(2*this.int)*100/1)/100),style:[]},{expr:"i*c",type:"int",val:Math.floor(Math.floor(this.int*this.char.charCodeAt(0)*100/1)/100),style:[]},{expr:"b+b",type:"int",val:this.byte+this.byte,style:[]},{expr:"i + c + i + d",type:"double",val:Math.floor(100*(2*this.int+this.char.charCodeAt(0)+this.double)/1)/100,style:[]},{expr:" 3 / b",type:"int",val:Math.floor(3/this.byte),style:[]},{expr:"((int)(d*100))/100.0",type:"double",val:Math.floor(100*this.double)/100,style:[]}]}}},i={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("h1",[t._v("Java Math Review")]),t._v(" "),n("pre",[n("code",[t._v("\n    int i = "+t._s(t.int)+";\n    byte b = "+t._s(t.byte)+";\n    float f = "+t._s(t.float)+"F;\n    double d = "+t._s(t.double)+";\n    char c = '"+t._s(t.char)+"'\n  ")])]),t._v(" "),n("table",{staticClass:"table"},[t._m(0),t._v(" "),t._l(t.problems,function(e){return n("tr",{key:e.val,class:e.style},[n("td",[t._v(t._s(e.expr)+" ")]),t._v(" "),n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.typeIn,expression:"problem.typeIn"}],attrs:{type:"text"},domProps:{value:e.typeIn},on:{input:function(n){n.target.composing||t.$set(e,"typeIn",n.target.value)}}})]),t._v(" "),n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.valIn,expression:"problem.valIn"}],attrs:{type:"text"},domProps:{value:e.valIn},on:{input:function(n){n.target.composing||t.$set(e,"valIn",n.target.value)}}})]),t._v(" "),n("td",[n("button",{staticClass:"btn-primary",on:{click:function(n){t.check(e)}}},[t._v("Check")])])])}),n("tr")],2)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("thead",[e("th",[this._v("Expression")]),this._v(" "),e("th",[this._v("Type")]),this._v(" "),e("th",[this._v("Val")]),this._v(" "),e("th",[this._v("Check")])])}]};var s=n("VU/8")(r,i,!1,function(t){n("u2Tt")},null,null).exports,l=(n("Jmt5"),n("9M+g"),n("/ocq"));o.a.use(l.a);var h=new l.a({});o.a.config.productionTip=!1,o.a.use(a.a),new o.a({el:"#app",router:h,components:{App:s},template:"<App/>"})},u2Tt:function(t,e){},zj2Q:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.cb230689df2fdf53ef16.js.map