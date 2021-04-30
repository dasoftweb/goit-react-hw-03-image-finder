(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{65:function(e,t,a){},66:function(e,t,a){"use strict";a.r(t);a(21);var n=a(1),r=a.n(n),c=a(8),o=a.n(c),i=a(10),s=a(4),l=a(5),u=a(7),h=a(6),d=a(19),g=a.n(d),m=a(0),j=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={query:""},e.handleChange=function(t){e.setState({query:t.currentTarget.value})},e.handleSubmit=function(t){t.preventDefault(),e.props.onSubmit(e.state.query),e.setState({query:""})},e}return Object(l.a)(a,[{key:"render",value:function(){return Object(m.jsx)("header",{className:"Searchbar",children:Object(m.jsxs)("form",{className:"SearchForm",onSubmit:this.handleSubmit,children:[Object(m.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(m.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(m.jsx)("input",{className:"SearchForm-input",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",value:this.state.query,onChange:this.handleChange})]})})}}]),a}(n.Component),b=function(e){var t=e.alt,a=e.previewURL,n=e.largeImageURL,r=e.onImageClick;return Object(m.jsx)("li",{className:"ImageGalleryItem",onClick:function(){return r(n,t)},children:Object(m.jsx)("img",{src:a,alt:t,className:"ImageGalleryItem-image"})})},p=function(e){var t=e.images,a=e.onImageClick;return Object(m.jsx)("ul",{className:"ImageGallery",children:t.map((function(e){var t=e.id,n=e.tags,r=e.webformatURL,c=e.largeImageURL;return Object(m.jsx)(b,{alt:n,previewURL:r,largeImageURL:c,onImageClick:a},t)}))})},f=a(20),y=a.n(f),v=function(e){var t=e.searchQuery,a=void 0===t?"":t,n=e.currentPage,r=void 0===n?1:n,c=e.pageSize,o=void 0===c?12:c;return y.a.get("https://pixabay.com/api/?q=".concat(a,"&page=").concat(r,"&key=20663729-402ac0755ef01966534e76e9d&image_type=photo&orientation=horizontal&per_page=").concat(o)).then((function(e){return e.data.hits}))},O=function(e){var t=e.onClick;return Object(m.jsx)("div",{children:Object(m.jsx)("button",{type:"button",className:"Button",onClick:t,children:"Load More"})})},S=document.querySelector("#modal-root"),w=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).handleKeydown=function(t){"Escape"===t.code&&e.props.onClose()},e.handleOverlayClick=function(t){t.currentTarget===t.target&&e.props.onClose()},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeydown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeydown)}},{key:"render",value:function(){return Object(c.createPortal)(Object(m.jsx)("div",{className:"Overlay",onClick:this.handleOverlayClick,children:Object(m.jsx)("div",{className:"Modal",children:this.props.children})}),S)}}]),a}(n.Component),x=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={images:[],currentPage:1,searchQuery:"",pageSize:12,isLoading:!1,error:null,showModal:!1,largeImageURL:"",alt:""},e.onChangeQuery=function(t){e.setState({searchQuery:t,currentPage:1,images:[],error:null})},e.toggleModal=function(){e.setState((function(e){return{showModal:!e.showModal}})),e.state.showModal&&e.setState({largeImgUrl:"",alt:""})},e.handleModal=function(t,a){e.setState({largeImgUrl:t,alt:a}),e.toggleModal()},e.fetchImages=function(){var t=e.state,a={searchQuery:t.searchQuery,currentPage:t.currentPage,pageSize:t.pageSize};e.setState({isLoading:!0}),v(a).then((function(t){e.setState((function(e){return{images:[].concat(Object(i.a)(e.images),Object(i.a)(t)),currentPage:e.currentPage+1}}))})).catch((function(t){return e.setState({error:t})})).finally((function(){return e.setState({isLoading:!1},window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"}))}))},e}return Object(l.a)(a,[{key:"componentDidUpdate",value:function(e,t){t.searchQuery!==this.state.searchQuery&&this.fetchImages()}},{key:"render",value:function(){var e=this.state,t=e.images,a=e.isLoading,n=e.error,r=e.showModal,c=e.largeImgUrl,o=e.alt;return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(j,{onSubmit:this.onChangeQuery}),n&&Object(m.jsx)("h3",{className:"Error",children:"Search error:( Please try again!"}),Object(m.jsx)(p,{images:t,onImageClick:this.handleModal}),a&&Object(m.jsx)(g.a,{className:"Loader",type:"Oval",color:"#3f51b5",height:50,width:50,timeout:1e3}),(t.length&&!a)>0&&Object(m.jsx)(O,{onClick:this.fetchImages}),r&&Object(m.jsx)(w,{onClose:this.toggleModal,children:Object(m.jsx)("img",{src:c,alt:o})})]})}}]),a}(n.Component);a(65);o.a.render(Object(m.jsx)(r.a.StrictMode,{children:Object(m.jsx)(x,{})}),document.getElementById("root"))}},[[66,1,2]]]);
//# sourceMappingURL=main.74d095b2.chunk.js.map