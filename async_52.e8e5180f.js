(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{303:function(E,C,t){"use strict";t.r(C);var s={created:function(){this.content=unescape("%3Ch2%3EPagination%3C/h2%3E%0A%3Ch3%3EInstall%3C/h3%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-javascript%22%3E%3Cspan%20class%3D%22hljs-keyword%22%3Eimport%3C/span%3E%20%7B%20Pagination%20%7D%20%3Cspan%20class%3D%22hljs-keyword%22%3Efrom%3C/span%3E%20%3Cspan%20class%3D%22hljs-string%22%3E%27vant%27%3C/span%3E%3B%0A%0AVue.use%28Pagination%29%3B%0A%3C/code%3E%3C/pre%3E%0A%3Ch3%3EUsage%3C/h3%3E%0A%3Ch4%3EBasic%20Usage%3C/h4%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-html%22%3E%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Evan-pagination%3C/span%3E%20%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Ev-model%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22currentPage%22%3C/span%3E%20%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3E%3Atotal-items%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%2224%22%3C/span%3E%20%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3E%3Aitems-per-page%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%225%22%3C/span%3E%0A/%26gt%3B%3C/span%3E%0A%3C/code%3E%3C/pre%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-javascript%22%3E%3Cspan%20class%3D%22hljs-keyword%22%3Eexport%3C/span%3E%20%3Cspan%20class%3D%22hljs-keyword%22%3Edefault%3C/span%3E%20%7B%0A%20%20data%28%29%20%7B%0A%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Ereturn%3C/span%3E%20%20%7B%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3EcurrentPage%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-number%22%3E1%3C/span%3E%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A%3C/code%3E%3C/pre%3E%0A%3Ch4%3ESimple%20mode%3C/h4%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-html%22%3E%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Evan-pagination%3C/span%3E%20%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Ev-model%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22currentPage%22%3C/span%3E%20%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3E%3Apage-count%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%2212%22%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Emode%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22simple%22%3C/span%3E%20%0A/%26gt%3B%3C/span%3E%0A%3C/code%3E%3C/pre%3E%0A%3Ch4%3EShow%20ellipses%3C/h4%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-html%22%3E%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Evan-pagination%3C/span%3E%20%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Ev-model%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22currentPage%22%3C/span%3E%20%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3E%3Atotal-items%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22125%22%3C/span%3E%20%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3E%3Ashow-page-size%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%223%22%3C/span%3E%20%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Eforce-ellipses%3C/span%3E%0A/%26gt%3B%3C/span%3E%0A%3C/code%3E%3C/pre%3E%0A%3Ch3%3EAPI%3C/h3%3E%0A%3Ctable%3E%0A%3Cthead%3E%0A%3Ctr%3E%0A%3Cth%3EAttribute%3C/th%3E%0A%3Cth%3EDescription%3C/th%3E%0A%3Cth%3EType%3C/th%3E%0A%3Cth%3EDefault%3C/th%3E%0A%3C/tr%3E%0A%3C/thead%3E%0A%3Ctbody%3E%0A%3Ctr%3E%0A%3Ctd%3Ev-model%3C/td%3E%0A%3Ctd%3ECurrent%20page%20number%3C/td%3E%0A%3Ctd%3E%3Ccode%3ENumber%3C/code%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Emode%3C/td%3E%0A%3Ctd%3EMode%2C%20can%20be%20set%20to%20%3Ccode%3Esimple%3C/code%3E%20%3Ccode%3Emulti%3C/code%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3EString%3C/code%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3Emulti%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Eitems-per-page%3C/td%3E%0A%3Ctd%3EItem%20number%20per%20page%3C/td%3E%0A%3Ctd%3E%3Ccode%3ENumber%3C/code%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3E10%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Eprev-text%3C/td%3E%0A%3Ctd%3EPrevious%20text%3C/td%3E%0A%3Ctd%3E%3Ccode%3EString%3C/code%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3EPrevious%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Enext-text%3C/td%3E%0A%3Ctd%3ENext%20text%3C/td%3E%0A%3Ctd%3E%3Ccode%3EString%3C/code%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3ENext%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Eshow-page-size%3C/td%3E%0A%3Ctd%3ECount%20of%20page%20size%20to%20show%3C/td%3E%0A%3Ctd%3E%3Ccode%3ENumber%3C/code%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3E5%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Eforce-ellipses%3C/td%3E%0A%3Ctd%3EWhether%20to%20show%20ellipses%3C/td%3E%0A%3Ctd%3E%3Ccode%3EBoolean%3C/code%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3Efalse%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3C/tbody%3E%0A%3C/table%3E%0A%3Ch3%3EEvent%3C/h3%3E%0A%3Ctable%3E%0A%3Cthead%3E%0A%3Ctr%3E%0A%3Cth%3EEvent%3C/th%3E%0A%3Cth%3EDescription%3C/th%3E%0A%3Cth%3EArguments%3C/th%3E%0A%3C/tr%3E%0A%3C/thead%3E%0A%3Ctbody%3E%0A%3Ctr%3E%0A%3Ctd%3Echange%3C/td%3E%0A%3Ctd%3ETriggered%20on%20page%20change%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3C/tbody%3E%0A%3C/table%3E%0A")}},a=t(0),e=Object(a.a)(s,function(){this.$createElement;this._self._c;return this._m(0)},[function(){var E=this.$createElement;return(this._self._c||E)("section",{domProps:{innerHTML:this._s(this.content)}})}],!1,null,null,null);C.default=e.exports}}]);