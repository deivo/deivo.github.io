(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{791:function(t,s,a){"use strict";a.r(s);var l=a(13),e=Object(l.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"var和let、const的区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#var和let、const的区别"}},[t._v("#")]),t._v(" var和let、const的区别")]),t._v(" "),a("h3",{attrs:{id:"let-vs-const"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#let-vs-const"}},[t._v("#")]),t._v(" Let VS const")]),t._v(" "),a("ul",[a("li",[t._v("赋值其实就是指针指向的过程，先创建值，再创建变量，最后将值和变量进行指针关联；LET创建的是变量，是因为可以修改当前变量的指针指向，而CONST创建的变量，指针指向一旦确定，则不能再更改（之前看一些好的文章，有的文章中介绍CONST创建的是常量，我认为这样说法是不严谨的，因为毕竟它只是指针不能改变，如果指向的是一个对象，在不改变指针的情况下，我们是可以修改对象值的）")]),t._v(" "),a("li",[t._v("真实项目中，我们对于一些需要宏观管控的标识值，一般都是基于CONST创建（例如：vuex或者redux中需要派发的行为标识），以及一些后续不能再更改指向的变量或者函数，也会基于CONST创建！")])]),t._v(" "),a("h3",{attrs:{id:"var-vs-let-const"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#var-vs-let-const"}},[t._v("#")]),t._v(" var VS let/const")]),t._v(" "),a("ul",[a("li",[a("ol",[a("li",[t._v("Let不存在变量提升(加一句：所以不能在声明的代码之前使用)，我之前在公司写项目，基本上都是基于ES6 LET处理了，这样我会把后续需要用到的变量，在代码起始的位置都先声明定义一下（给的是默认值） “变量声明前置”，而且创建函数也一般都是基于函数表达式的方式创建了，保证只有在创建代码的后面函数才可以有效执行...")])])]),t._v(" "),a("li",[a("ol",{attrs:{start:"2"}},[a("li",[t._v("let不允许重复声明 （真实项目中，代码量较多，除了声明前置，可以避免重复声明报错的问题，而且我会尽可能把业务拆分，每一个小模块单独在一个闭包中，降低相同上下文中变量声明的个数，这也是防止重复声明的办法...）")])])]),t._v(" "),a("li",[a("ol",{attrs:{start:"3"}},[a("li",[t._v("在全局上下文中，基于LET声明的全局变量和全局对象GO(window)没有任何的关系，var声明的变量会和GO有映射机制")])])]),t._v(" "),a("li",[a("ol",{attrs:{start:"4"}},[a("li",[t._v("暂时性死区问题，基于typeof检测一个未被声明的变量，不会报错，结果是undefined（我之前看过一些类库的部分源码，比如JQ，他们利用这个机制，检测上下文中是否存在window/module，从而验证出是浏览器环境还是Node环境...）；但是如果此变量在后面会被LET声明，则直接报错，错误信息是：不允许在声明之前使用变量（这是浏览器词法解析阶段处理的事情）")])])]),t._v(" "),a("li",[a("ol",{attrs:{start:"5"}},[a("li",[t._v("我认为除了上述，最重要的还是 LET/CONST/FUNCTION 都会把当前所在的大括号（除函数以外）作为一个全新的块级上下文；应用这个机制，我们在项目开发的时候，如果遇到循环事件绑定等类似的需求，无需在自己构建闭包来存储了，只需要基于LET的块作用的特征即可解决，很方便...当然还有一些其它的应用，也是利用块上下文的特点完成的...")])])])])])}),[],!1,null,null,null);s.default=e.exports}}]);