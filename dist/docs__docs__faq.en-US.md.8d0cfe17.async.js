(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[13],{"4zsi":function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),o=n.n(a),r=n("dEAq"),l=n("ZpkN");n("JjdP");t["default"]=()=>(o.a.useEffect((()=>{window.location.hash&&r["AnchorLink"].scrollToAnchor(decodeURIComponent(window.location.hash.slice(1)))}),[]),o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"markdown"},o.a.createElement("h1",{id:"faq"},o.a.createElement(r["AnchorLink"],{to:"#faq","aria-hidden":"true",tabIndex:-1},o.a.createElement("span",{className:"icon icon-link"})),"FAQ"),o.a.createElement("p",null,"Here are the frequently asked questions about ahooks, you should look up before you ask in the community or create a new issue."),o.a.createElement("h3",{id:"when-i-use-ahooks-i-get-an-error-regeneratorruntime-is-not-defined-how-can-i-solve-it"},o.a.createElement(r["AnchorLink"],{to:"#when-i-use-ahooks-i-get-an-error-regeneratorruntime-is-not-defined-how-can-i-solve-it","aria-hidden":"true",tabIndex:-1},o.a.createElement("span",{className:"icon icon-link"})),"When I use ahooks, I get an error ",o.a.createElement("code",null,"regeneratorRuntime is not defined"),", how can I solve it?"),o.a.createElement(l["a"],{code:'// install regenerator-runtime\nnpm i regenerator-runtime --save\n\n// Add a reference at the top of the entry file\nimport "regenerator-runtime/runtime";',lang:"unknown"}),o.a.createElement("h3",{id:"i-only-want-to-use-userequest-but-i-have-to-install-the-entire-ahooks"},o.a.createElement(r["AnchorLink"],{to:"#i-only-want-to-use-userequest-but-i-have-to-install-the-entire-ahooks","aria-hidden":"true",tabIndex:-1},o.a.createElement("span",{className:"icon icon-link"})),"I only want to use ",o.a.createElement("code",null,"useRequest"),", but I have to install the entire ",o.a.createElement("code",null,"ahooks"),"?"),o.a.createElement("p",null,"No, ",o.a.createElement("code",null,"useRequest")," is a independent package, can be used by installing ",o.a.createElement("code",null,"@ahooksjs/use-request")," separately."),o.a.createElement("h3",{id:"i-only-want-to-use-one-or-two-of-them-but-all-the-hooks-are-compiled-after-the-project-is-compiled"},o.a.createElement(r["AnchorLink"],{to:"#i-only-want-to-use-one-or-two-of-them-but-all-the-hooks-are-compiled-after-the-project-is-compiled","aria-hidden":"true",tabIndex:-1},o.a.createElement("span",{className:"icon icon-link"})),"I only want to use one or two of them, but all the hooks are compiled after the project is compiled."),o.a.createElement("p",null,"See ",o.a.createElement(r["Link"],{to:"/docs/getting-started?anchor=import-on-demand"},"Import On demand")),o.a.createElement("h3",{id:"browser-compatibilty"},o.a.createElement(r["AnchorLink"],{to:"#browser-compatibilty","aria-hidden":"true",tabIndex:-1},o.a.createElement("span",{className:"icon icon-link"})),"Browser compatibilty"),o.a.createElement("p",null,"Some of the Hooks depend on some new features of ES (e.g. ",o.a.createElement("code",null,"Set")," / ",o.a.createElement("code",null,"Map")," / ",o.a.createElement("code",null,"Promise"),"). If you need to support older browsers (e.g. IE <= 11), consider inlcuding a global polyfill in your bundled application, such as ",o.a.createElement(r["Link"],{to:"https://github.com/zloirock/core-js"},"core-js")," or ",o.a.createElement(r["Link"],{to:"https://babeljs.io/docs/usage/polyfill/"},"babel-polyfill"),"."))))}}]);