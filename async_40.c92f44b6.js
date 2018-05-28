(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{318:function(t,C,E){"use strict";E.r(C);var s={created:function(){this.content=unescape("%3Ch2%3EPullRefresh%3C/h2%3E%0A%3Ch3%3EInstall%3C/h3%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-javascript%22%3E%3Cspan%20class%3D%22hljs-keyword%22%3Eimport%3C/span%3E%20%7B%20PullRefresh%20%7D%20%3Cspan%20class%3D%22hljs-keyword%22%3Efrom%3C/span%3E%20%3Cspan%20class%3D%22hljs-string%22%3E%27vant%27%3C/span%3E%3B%0A%0AVue.use%28PullRefresh%29%3B%0A%3C/code%3E%3C/pre%3E%0A%3Ch3%3EUsage%3C/h3%3E%0A%3Ch4%3EBasic%20Usage%3C/h4%3E%0A%3Cp%3EThe%20%3Ccode%3Erefresh%3C/code%3E%20event%20will%20be%20triggered%20when%20pull%20refresh%2C%20you%20should%20set%20%3Ccode%3Ev-model%3C/code%3E%20to%20%3Ccode%3Efalse%3C/code%3E%20to%20reset%20loading%20status%20after%20process%20refresh%20event.%3C/p%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-html%22%3E%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Evan-pull-refresh%3C/span%3E%20%3Cspan%20class%3D%22hljs-attr%22%3Ev-model%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22isLoading%22%3C/span%3E%20@%3Cspan%20class%3D%22hljs-attr%22%3Erefresh%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22onRefresh%22%3C/span%3E%26gt%3B%3C/span%3E%0A%20%20%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Ep%3C/span%3E%26gt%3B%3C/span%3ERefresh%20Count%3A%20%7B%7B%20count%20%7D%7D%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B/%3Cspan%20class%3D%22hljs-name%22%3Ep%3C/span%3E%26gt%3B%3C/span%3E%0A%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B/%3Cspan%20class%3D%22hljs-name%22%3Evan-pull-refresh%3C/span%3E%26gt%3B%3C/span%3E%0A%3C/code%3E%3C/pre%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-javascript%22%3E%3Cspan%20class%3D%22hljs-keyword%22%3Eexport%3C/span%3E%20%3Cspan%20class%3D%22hljs-keyword%22%3Edefault%3C/span%3E%20%7B%0A%20%20data%28%29%20%7B%0A%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Ereturn%3C/span%3E%20%7B%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3Ecount%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-number%22%3E0%3C/span%3E%2C%0A%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-attr%22%3EisLoading%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-literal%22%3Efalse%3C/span%3E%0A%20%20%20%20%7D%0A%20%20%7D%2C%0A%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Emethods%3C/span%3E%3A%20%7B%0A%20%20%20%20onRefresh%28%29%20%7B%0A%20%20%20%20%20%20setTimeout%28%3Cspan%20class%3D%22hljs-function%22%3E%3Cspan%20class%3D%22hljs-params%22%3E%28%29%3C/span%3E%20%3D%26gt%3B%3C/span%3E%20%7B%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Ethis%3C/span%3E.%24toast%28%3Cspan%20class%3D%22hljs-string%22%3E%27Refresh%20Success%27%3C/span%3E%29%3B%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Ethis%3C/span%3E.isLoading%20%3D%20%3Cspan%20class%3D%22hljs-literal%22%3Efalse%3C/span%3E%3B%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22hljs-keyword%22%3Ethis%3C/span%3E.count++%3B%0A%20%20%20%20%20%20%7D%2C%20%3Cspan%20class%3D%22hljs-number%22%3E500%3C/span%3E%29%3B%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A%3C/code%3E%3C/pre%3E%0A%3Ch3%3EAPI%3C/h3%3E%0A%3Ctable%3E%0A%3Cthead%3E%0A%3Ctr%3E%0A%3Cth%3EAttribute%3C/th%3E%0A%3Cth%3EDescription%3C/th%3E%0A%3Cth%3EType%3C/th%3E%0A%3Cth%3EDefault%3C/th%3E%0A%3C/tr%3E%0A%3C/thead%3E%0A%3Ctbody%3E%0A%3Ctr%3E%0A%3Ctd%3Ev-model%3C/td%3E%0A%3Ctd%3ELoading%20status%3C/td%3E%0A%3Ctd%3E%3Ccode%3EBoolean%3C/code%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Epulling-text%3C/td%3E%0A%3Ctd%3EText%20to%20show%20when%20pulling%3C/td%3E%0A%3Ctd%3E%3Ccode%3EString%3C/code%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3EPull%20to%20refresh...%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Eloosing-text%3C/td%3E%0A%3Ctd%3EText%20to%20show%20when%20loosing%3C/td%3E%0A%3Ctd%3E%3Ccode%3EString%3C/code%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3ELoose%20to%20refresh...%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Eloading-text%3C/td%3E%0A%3Ctd%3EText%20to%20show%20when%20loading%3C/td%3E%0A%3Ctd%3E%3Ccode%3EString%3C/code%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3ELoading...%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Eanimation-duration%3C/td%3E%0A%3Ctd%3EAnimation%20duration%3C/td%3E%0A%3Ctd%3E%3Ccode%3ENumber%3C/code%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3E300%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Ehead-height%3C/td%3E%0A%3Ctd%3EHeight%20of%20head%3C/td%3E%0A%3Ctd%3E%3Ccode%3ENumber%3C/code%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3E50%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3C/tbody%3E%0A%3C/table%3E%0A%3Ch3%3EEvent%3C/h3%3E%0A%3Ctable%3E%0A%3Cthead%3E%0A%3Ctr%3E%0A%3Cth%3EEvent%3C/th%3E%0A%3Cth%3EDescription%3C/th%3E%0A%3Cth%3EParameters%3C/th%3E%0A%3C/tr%3E%0A%3C/thead%3E%0A%3Ctbody%3E%0A%3Ctr%3E%0A%3Ctd%3Erefresh%3C/td%3E%0A%3Ctd%3ETriggered%20when%20pull%20refresh%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3C/tbody%3E%0A%3C/table%3E%0A%3Ch3%3ESlot%3C/h3%3E%0A%3Ctable%3E%0A%3Cthead%3E%0A%3Ctr%3E%0A%3Cth%3Ename%3C/th%3E%0A%3Cth%3EDescription%3C/th%3E%0A%3C/tr%3E%0A%3C/thead%3E%0A%3Ctbody%3E%0A%3Ctr%3E%0A%3Ctd%3E-%3C/td%3E%0A%3Ctd%3EDefault%20slot%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Enormal%3C/td%3E%0A%3Ctd%3EContent%20of%20head%20when%20at%20normal%20status%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Epulling%3C/td%3E%0A%3Ctd%3EContent%20of%20head%20when%20at%20pulling%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Eloosing%3C/td%3E%0A%3Ctd%3EContent%20of%20head%20when%20at%20loosing%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Eloading%3C/td%3E%0A%3Ctd%3EContent%20of%20head%20when%20at%20loading%3C/td%3E%0A%3C/tr%3E%0A%3C/tbody%3E%0A%3C/table%3E%0A")}},e=E(0),a=Object(e.a)(s,function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this.$createElement;return(this._self._c||t)("section",{domProps:{innerHTML:this._s(this.content)}})}],!1,null,null,null);C.default=a.exports}}]);