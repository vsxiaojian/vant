(window.webpackJsonp=window.webpackJsonp||[]).push([[132],{145:function(e,t,n){var l=n(201);"string"==typeof l&&(l=[[e.i,l,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};n(13)(l,a);l.locals&&(e.exports=l.locals)},201:function(e,t,n){(e.exports=n(14)(!1)).push([e.i,"\n.demo-slider {\n  -webkit-user-select: none;\n          user-select: none;\n}\n.demo-slider .van-slider {\n    margin: 0 15px 30px;\n}\n",""])},202:function(e,t,n){"use strict";var l=n(145);n.n(l).a},416:function(e,t,n){"use strict";n.r(t);var l={i18n:{"zh-CN":{title1:"基本用法",title2:"指定选择范围",title3:"禁用",title4:"指定步长",text:"当前值："},"en-US":{title1:"Basic Usage",title2:"Range",title3:"Disabled",title4:"Step size",text:"Current value: "}},data:function(){return{value1:50,value2:50,value3:50,value4:50}},methods:{onChange:function(e){this.$toast(this.$t("text")+e)}}},a=(n(202),n(0)),i=Object(a.a)(l,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("demo-section",[n("demo-block",{attrs:{title:e.$t("title1")}},[n("van-slider",{on:{change:e.onChange},model:{value:e.value1,callback:function(t){e.value1=t},expression:"value1"}})],1),n("demo-block",{attrs:{title:e.$t("title2")}},[n("van-slider",{attrs:{min:10,max:90},on:{change:e.onChange},model:{value:e.value2,callback:function(t){e.value2=t},expression:"value2"}})],1),n("demo-block",{attrs:{title:e.$t("title3")}},[n("van-slider",{attrs:{disabled:""},model:{value:e.value3,callback:function(t){e.value3=t},expression:"value3"}})],1),n("demo-block",{attrs:{title:e.$t("title4")}},[n("van-slider",{attrs:{step:10,"bar-height":"4px"},on:{change:e.onChange},model:{value:e.value4,callback:function(t){e.value4=t},expression:"value4"}})],1)],1)},[],!1,null,null,null);t.default=i.exports}}]);