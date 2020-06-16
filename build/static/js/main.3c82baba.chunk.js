(this["webpackJsonphacker-news"]=this["webpackJsonphacker-news"]||[]).push([[0],{27:function(e,t,a){e.exports=a(58)},32:function(e,t,a){},49:function(e,t,a){},55:function(e,t,a){},56:function(e,t,a){},57:function(e,t,a){},58:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(23),s=a.n(c),o=(a(32),a(11)),i=a(12),l=a(4),u=a(5),m=a(3),h=a(7),p=a(6),S=a(24),f=a.n(S),v=(a(49),a(25)),b=a(26),E=a(8);a(55),a(56);function d(e){var t=e.type,a=e.onClick,n=e.children,c=e.className;return r.a.createElement("button",{className:c,type:t,onClick:a},n)}d.defaultProps={type:"button",onClick:function(){return null},children:"Button",className:"button"};var y=d;var O=function(e){var t=e.onSort,a=e.sortKey,n=e.children;return e.activeSortKey,r.a.createElement(y,{type:"button",className:"button",onClick:function(){return t(a)}},n)},_={NONE:function(e){return e},TITLE:function(e){return Object(E.sortBy)(e,"title")},AUTHOR:function(e){return Object(E.sortBy)(e,"author")},COMMENTS:function(e){return Object(E.sortBy)(e,"num_comments").reverse()},POINTS:function(e){return Object(E.sortBy)(e,"points").reverse()}},N=function(e){Object(h.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={sortKey:"NONE",isSortReverse:!1},n.onSort=n.onSort.bind(Object(m.a)(n)),n}return Object(u.a)(a,[{key:"onSort",value:function(e){var t=this.state.sortKey===e&&!this.state.isSortReverse;this.setState({sortKey:e,isSortReverse:t})}},{key:"render",value:function(){var e=this.props,t=e.list,a=e.onDismiss,n=this.state,c=n.sortKey,s=n.isSortReverse,o=_[c](t),i=s?o.reverse():o;return r.a.createElement("div",{className:"articles"},r.a.createElement("ul",{className:"articles__sort"},r.a.createElement("li",null,r.a.createElement(O,{sortKey:"TITLE",onSort:this.onSort},"Title")),r.a.createElement("li",null,r.a.createElement(O,{sortKey:"AUTHOR",onSort:this.onSort},"Author")),r.a.createElement("li",null,r.a.createElement(O,{sortKey:"COMMENTS",onSort:this.onSort},"Comments")),r.a.createElement("li",null,r.a.createElement(O,{sortKey:"POINTS",onSort:this.onSort},"Points"))),r.a.createElement("ul",{className:"articles__list"},i.map((function(e){return r.a.createElement("li",{className:"articles__item",key:e.objectID},r.a.createElement("h3",{className:"articles__title"},r.a.createElement("a",{href:e.url},e.title)),r.a.createElement("div",{className:"articles__meta"},r.a.createElement("span",{className:"articles__meta-item articles__meta-item--author"},e.author),r.a.createElement("span",{className:"articles__meta-item"},function(e){var t=e.indexOf("T");return e.slice(0,t).split("-").reverse().join(".")}(e.created_at)),r.a.createElement("span",{className:"articles__meta-item"},e.points,"\xa0points"),r.a.createElement("span",{className:"articles__meta-item"},e.num_comments,"\xa0comments")),r.a.createElement(y,{onClick:function(){return a(e.objectID)},type:"button",className:"button"},"Dismiss"))}))))}}]),a}(r.a.Component),j=(a(57),function(e){Object(h.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).inputReft=r.a.createRef(),n}return Object(u.a)(a,[{key:"componentDidMount",value:function(){this.inputReft.current&&this.inputReft.current.focus()}},{key:"render",value:function(){var e=this.props,t=e.value,a=e.onSubmit,n=e.onChange;return r.a.createElement("form",{className:"search",onSubmit:a},r.a.createElement("input",{className:"search__control",type:"text",value:t,onChange:n,ref:this.inputReft}),r.a.createElement(y,{className:"button button--primary",type:"submit"},"Search"))}}]),a}(r.a.Component)),g="https://hn.algolia.com/api/v1",T=function(e){Object(h.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={result:null,searchTerm:"react",isLoading:!1,error:null},n.onSearchChange=n.onSearchChange.bind(Object(m.a)(n)),n.onSearchSubmit=n.onSearchSubmit.bind(Object(m.a)(n)),n.fetchSearchTopStories=n.fetchSearchTopStories.bind(Object(m.a)(n)),n.setSearchTopStories=n.setSearchTopStories.bind(Object(m.a)(n)),n.onDismiss=n.onDismiss.bind(Object(m.a)(n)),n}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this.state.searchTerm;this.fetchSearchTopStories(e,"0")}},{key:"onSearchChange",value:function(e){this.setState({searchTerm:e.target.value})}},{key:"onSearchSubmit",value:function(e){var t=this.state.searchTerm;this.fetchSearchTopStories(t),e.preventDefault()}},{key:"onDismiss",value:function(e){var t=this.state.result,a=t.hits.filter((function(t){return t.objectID!==e}));this.setState({result:Object(i.a)(Object(i.a)({},t),{},{hits:a})})}},{key:"setSearchTopStories",value:function(e){var t=e.hits,a=e.page,n=this.state.result,r=0!==a?n.hits:[],c=[].concat(Object(o.a)(r),Object(o.a)(t));this.setState({result:{hits:c,page:a},isLoading:!1})}},{key:"fetchSearchTopStories",value:function(e){var t=this,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;this.setState({isLoading:!0}),f()("".concat(g).concat("/search","?").concat("query=").concat(e,"&").concat("page=").concat(a,"&").concat("hitsPerPage=").concat("5")).then((function(e){return t.setSearchTopStories(e.data)})).catch((function(e){return t.setState({error:e})}))}},{key:"render",value:function(){var e=this,t=this.state,a=t.result,n=t.searchTerm,c=t.isLoading,s=t.error,o=a&&a.page||0,i=a&&a.hits||[];return r.a.createElement("div",{className:"app"},r.a.createElement("header",{className:"app__header"},r.a.createElement("div",{className:"app__container"},r.a.createElement(j,{value:n,onChange:this.onSearchChange,onSubmit:this.onSearchSubmit},"Search"))),r.a.createElement("div",{className:"app__content"},r.a.createElement("div",{className:"app__container"},s?r.a.createElement("h2",null,"Something went wrong!"):r.a.createElement(N,{list:i,onDismiss:this.onDismiss})),r.a.createElement("div",{className:"app__bottom"},c?r.a.createElement(v.a,{icon:b.a,size:"lg",spin:!0}):r.a.createElement(y,{onClick:function(){return e.fetchSearchTopStories(n,o+1)},className:"button button--primary",type:"button"},"More"))))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(T,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[27,1,2]]]);
//# sourceMappingURL=main.3c82baba.chunk.js.map