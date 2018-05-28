(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{360:function(s,C,a){"use strict";a.r(C);var t={created:function(){this.content=unescape("%3Ch2%3EArea%3C/h2%3E%0A%3Cp%3EThe%20Picker%20component%20is%20usually%20used%20with%20%3Ca%20href%3D%22%23/en-US/popup%22%3EPopup%3C/a%3E%20Component.%3C/p%3E%0A%3Ch3%3EInstall%3C/h3%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-javascript%22%3E%3Cspan%20class%3D%22hljs-keyword%22%3Eimport%3C/span%3E%20%7B%20Area%20%7D%20%3Cspan%20class%3D%22hljs-keyword%22%3Efrom%3C/span%3E%20%3Cspan%20class%3D%22hljs-string%22%3E%27vant%27%3C/span%3E%3B%0A%0AVue.use%28Area%29%3B%0A%3C/code%3E%3C/pre%3E%0A%3Ch3%3EUsage%3C/h3%3E%0A%3Ch4%3EBasic%20Usage%3C/h4%3E%0A%3Cp%3ETo%20initailize%20%3Ccode%3EArea%3C/code%3E%20component%2C%20%3Ccode%3Earea-list%3C/code%3E%20property%20is%20required.%20Data%20structure%20will%20be%20introduced%20later.%3C/p%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-html%22%3E%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Evan-area%3C/span%3E%20%3Cspan%20class%3D%22hljs-attr%22%3E%3Aarea-list%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22areaList%22%3C/span%3E%20/%26gt%3B%3C/span%3E%0A%3C/code%3E%3C/pre%3E%0A%3Ch4%3EInitial%20Value%3C/h4%3E%0A%3Cp%3ETo%20have%20a%20selected%20value%uFF0Csimply%20pass%20the%20%3Ccode%3Ecode%3C/code%3E%20of%20target%20area%20to%20%3Ccode%3Evalue%3C/code%3E%20property.%3C/p%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-html%22%3E%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Evan-area%3C/span%3E%20%3Cspan%20class%3D%22hljs-attr%22%3E%3Aarea-list%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22areaList%22%3C/span%3E%20%3Cspan%20class%3D%22hljs-attr%22%3Evalue%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22110101%22%3C/span%3E%20/%26gt%3B%3C/span%3E%0A%3C/code%3E%3C/pre%3E%0A%3Ch4%3EColumns%20Number%3C/h4%3E%0A%3Cp%3E%3Ccode%3Ecolumns-num%3C/code%3E%20property%20is%20used%20to%20config%20number%20of%20columns%20to%20be%20displayed.%20This%20component%20has%203%20columns%20corresponding%20to%20a%203%20level%20picker%20by%20default.%0ASet%20%3Ccode%3Ecolumns-num%3C/code%3E%20with%202%2C%20you%27ll%20have%20a%202%20level%20picker.%3C/p%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-html%22%3E%3Cspan%20class%3D%22hljs-tag%22%3E%26lt%3B%3Cspan%20class%3D%22hljs-name%22%3Evan-area%3C/span%3E%20%3Cspan%20class%3D%22hljs-attr%22%3E%3Aarea-list%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22areaList%22%3C/span%3E%20%3Cspan%20class%3D%22hljs-attr%22%3E%3Acolumns-num%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%222%22%3C/span%3E%20%3Cspan%20class%3D%22hljs-attr%22%3Etitle%3C/span%3E%3D%3Cspan%20class%3D%22hljs-string%22%3E%22Title%22%3C/span%3E%20/%26gt%3B%3C/span%3E%0A%3C/code%3E%3C/pre%3E%0A%3Ch3%3EAPI%3C/h3%3E%0A%3Ctable%3E%0A%3Cthead%3E%0A%3Ctr%3E%0A%3Cth%3EAttribute%3C/th%3E%0A%3Cth%3EDescription%3C/th%3E%0A%3Cth%3EType%3C/th%3E%0A%3Cth%3EDefault%3C/th%3E%0A%3C/tr%3E%0A%3C/thead%3E%0A%3Ctbody%3E%0A%3Ctr%3E%0A%3Ctd%3Evalue%3C/td%3E%0A%3Ctd%3Ethe%20%3Ccode%3Ecode%3C/code%3E%20of%20selected%20area%3C/td%3E%0A%3Ctd%3E%3Ccode%3EString%3C/code%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Etitle%3C/td%3E%0A%3Ctd%3EToolbar%20title%3C/td%3E%0A%3Ctd%3E%3Ccode%3EString%3C/code%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Earea-list%3C/td%3E%0A%3Ctd%3EArea%20data%3C/td%3E%0A%3Ctd%3E%3Ccode%3EObject%3C/code%3E%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Ecolumns-num%3C/td%3E%0A%3Ctd%3Elevel%20of%20picker%3C/td%3E%0A%3Ctd%3E%3Ccode%3EString%20%7C%20Number%3C/code%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3E3%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Eitem-height%3C/td%3E%0A%3Ctd%3EOption%20height%3C/td%3E%0A%3Ctd%3E%3Ccode%3ENumber%3C/code%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3E44%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Eloading%3C/td%3E%0A%3Ctd%3EWhether%20to%20show%20loading%20prompt%3C/td%3E%0A%3Ctd%3E%3Ccode%3EBoolean%3C/code%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3Efalse%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Evisible-item-count%3C/td%3E%0A%3Ctd%3ECount%20of%20visible%20columns%3C/td%3E%0A%3Ctd%3E%3Ccode%3ENumber%3C/code%3E%3C/td%3E%0A%3Ctd%3E%3Ccode%3E5%3C/code%3E%3C/td%3E%0A%3C/tr%3E%0A%3C/tbody%3E%0A%3C/table%3E%0A%3Ch3%3EEvent%3C/h3%3E%0A%3Ctable%3E%0A%3Cthead%3E%0A%3Ctr%3E%0A%3Cth%3EEvent%3C/th%3E%0A%3Cth%3EDescription%3C/th%3E%0A%3Cth%3EArguments%3C/th%3E%0A%3C/tr%3E%0A%3C/thead%3E%0A%3Ctbody%3E%0A%3Ctr%3E%0A%3Ctd%3Econfirm%3C/td%3E%0A%3Ctd%3Etriggers%20when%20clicking%20the%20confirm%20button%3C/td%3E%0A%3Ctd%3Ean%20array%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Ecancel%3C/td%3E%0A%3Ctd%3Etriggers%20when%20clicking%20the%20cancel%20button%3C/td%3E%0A%3Ctd%3E-%3C/td%3E%0A%3C/tr%3E%0A%3Ctr%3E%0A%3Ctd%3Echange%3C/td%3E%0A%3Ctd%3ETriggered%20when%20current%20option%20changed%3C/td%3E%0A%3Ctd%3EPicker%20instance%2C%20current%20values%uFF0Ccolumn%20index%3C/td%3E%0A%3C/tr%3E%0A%3C/tbody%3E%0A%3C/table%3E%0A%3Ch3%3EData%20Structure%3C/h3%3E%0A%3Ch4%3EareaList%3C/h4%3E%0A%3Cp%3EAn%20object%20contains%20three%20properties%3A%20%3Ccode%3Eprovince_list%3C/code%3E%2C%20%3Ccode%3Ecity_list%3C/code%3E%20and%20%3Ccode%3Ecounty_list%3C/code%3E.%0AEach%20property%20is%20a%20simple%20key-value%20object%2C%20key%20is%20a%206-bit%20code%20of%20the%20area%20of%20which%20first%20two%20bits%20stand%20for%20the%20province%20or%20state%2C%20middle%20two%20bits%20are%20used%20as%20city%20code%20and%20the%20last%20two%20are%20district%20code%2C%20value%20is%20the%20name%20of%20the%20area.%20If%20the%20code%20stands%20for%20an%20area%20that%20has%20sub-areas%2C%20lower%20bits%20of%20it%20will%20be%20filled%20with%200.%3C/p%3E%0A%3Cp%3EExample%20of%20%3Ccode%3EAreaList%3C/code%3E%3C/p%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-javascript%22%3E%7B%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Eprovince_list%3C/span%3E%3A%20%7B%0A%20%20%20%20%3Cspan%20class%3D%22hljs-number%22%3E110000%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%27Beijing%27%3C/span%3E%2C%0A%20%20%20%20%3Cspan%20class%3D%22hljs-number%22%3E330000%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%27Zhejiang%20Province%27%3C/span%3E%0A%20%20%7D%2C%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Ecity_list%3C/span%3E%3A%20%7B%0A%20%20%20%20%3Cspan%20class%3D%22hljs-number%22%3E110100%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%27Beijing%20City%27%3C/span%3E%2C%0A%20%20%20%20%3Cspan%20class%3D%22hljs-number%22%3E330100%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%27Hangzhou%27%3C/span%3E%2C%0A%20%20%7D%2C%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Ecounty_list%3C/span%3E%3A%20%7B%0A%20%20%20%20%3Cspan%20class%3D%22hljs-number%22%3E110101%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%27Dongcheng%20District%27%3C/span%3E%2C%0A%20%20%20%20%3Cspan%20class%3D%22hljs-number%22%3E110102%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%27Xicheng%20District%27%3C/span%3E%2C%0A%20%20%20%20%3Cspan%20class%3D%22hljs-number%22%3E110105%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%27Chaoyang%20District%27%3C/span%3E%2C%0A%20%20%20%20%3Cspan%20class%3D%22hljs-number%22%3E110106%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%27Fengtai%20District%27%3C/span%3E%0A%20%20%20%20%3Cspan%20class%3D%22hljs-number%22%3E330105%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%27Gongshu%20District%27%3C/span%3E%2C%0A%20%20%20%20%3Cspan%20class%3D%22hljs-number%22%3E330106%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%27Xihu%20District%27%3C/span%3E%2C%0A%20%20%20%20%3Cspan%20class%3D%22hljs-comment%22%3E//%20....%3C/span%3E%0A%20%20%7D%0A%7D%0A%3C/code%3E%3C/pre%3E%0A%3Cp%3EAll%20code%20of%20China%3A%20%3Ca%20href%3D%22https%3A//github.com/youzan/vant/blob/dev/packages/area/demo/area-en.js%22%3EArea.json%3C/a%3E%3C/p%3E%0A%3Ch4%3Eargument%20of%20callback%20function%20confirm%3C/h4%3E%0A%3Cp%3EAn%20array%20contains%20selected%20area%20objects.%3C/p%3E%0A%3Cp%3E%3Ccode%3Ecode%3C/code%3E%20-%20code%20of%20selected%20area%2C%20%3Ccode%3Ename%3C/code%3E%20-%20name%20of%20selected%20area%3C/p%3E%0A%3Cpre%3E%3Ccode%20class%3D%22language-javascript%22%3E%5B%7B%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Ecode%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%27330000%27%3C/span%3E%2C%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Ename%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%27Zhejiang%20Province%27%3C/span%3E%0A%7D%2C%20%7B%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Ecode%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%27330100%27%3C/span%3E%2C%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Ename%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%27Hangzhou%27%3C/span%3E%0A%7D%2C%7B%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Ecode%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%27330105%27%3C/span%3E%2C%0A%20%20%3Cspan%20class%3D%22hljs-attr%22%3Ename%3C/span%3E%3A%20%3Cspan%20class%3D%22hljs-string%22%3E%27Xihu%20District%27%3C/span%3E%0A%7D%5D%0A%3C/code%3E%3C/pre%3E%0A")}},E=a(0),e=Object(E.a)(t,function(){this.$createElement;this._self._c;return this._m(0)},[function(){var s=this.$createElement;return(this._self._c||s)("section",{domProps:{innerHTML:this._s(this.content)}})}],!1,null,null,null);C.default=e.exports}}]);