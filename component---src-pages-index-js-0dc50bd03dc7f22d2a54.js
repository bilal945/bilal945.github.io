(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"9eSz":function(e,t,r){"use strict";var a=r("TqRt");t.__esModule=!0,t.default=void 0;var n,i=a(r("PJYZ")),o=a(r("VbXa")),c=a(r("8OQS")),l=a(r("pVnL")),s=a(r("q1tI")),d=a(r("17x9")),u=function(e){var t=(0,l.default)({},e),r=t.resolutions,a=t.sizes,n=t.critical;return r&&(t.fixed=r,delete t.resolutions),a&&(t.fluid=a,delete t.sizes),n&&(t.loading="eager"),t.fluid&&(t.fluid=E([].concat(t.fluid))),t.fixed&&(t.fixed=E([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(y&&!!window.matchMedia(t).matches)},p=function(e){var t=e.fluid,r=e.fixed,a=m(t||r||[]);return a&&a.src},m=function(e){if(y&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t];var r=e.findIndex((function(e){return void 0===e.media}));if(-1!==r)return e[r]}return e[0]},g=Object.create({}),h=function(e){var t=u(e),r=p(t);return g[r]||!1},b="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,y="undefined"!=typeof window,v=y&&window.IntersectionObserver,w=new WeakMap;function x(e){return e.map((function(e){var t=e.src,r=e.srcSet,a=e.srcSetWebp,n=e.media,i=e.sizes;return s.default.createElement(s.default.Fragment,{key:t},a&&s.default.createElement("source",{type:"image/webp",media:n,srcSet:a,sizes:i}),r&&s.default.createElement("source",{media:n,srcSet:r,sizes:i}))}))}function E(e){var t=[],r=[];return e.forEach((function(e){return(e.media?t:r).push(e)})),[].concat(t,r)}function S(e){return e.map((function(e){var t=e.src,r=e.media,a=e.tracedSVG;return s.default.createElement("source",{key:t,media:r,srcSet:a})}))}function O(e){return e.map((function(e){var t=e.src,r=e.media,a=e.base64;return s.default.createElement("source",{key:t,media:r,srcSet:a})}))}function k(e,t){var r=e.srcSet,a=e.srcSetWebp,n=e.media,i=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(n?'media="'+n+'" ':"")+'srcset="'+(t?a:r)+'" '+(i?'sizes="'+i+'" ':"")+"/>"}var j=function(e,t){var r=(void 0===n&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=new window.IntersectionObserver((function(e){e.forEach((function(e){if(w.has(e.target)){var t=w.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(e.target),w.delete(e.target),t())}}))}),{rootMargin:"200px"})),n);return r&&(r.observe(e),w.set(e,t)),function(){r.unobserve(e),w.delete(e)}},z=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',r=e.sizes?'sizes="'+e.sizes+'" ':"",a=e.srcSet?'srcset="'+e.srcSet+'" ':"",n=e.title?'title="'+e.title+'" ':"",i=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",c=e.height?'height="'+e.height+'" ':"",l=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",s=e.loading?'loading="'+e.loading+'" ':"",d=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?k(e,!0):"")+k(e)})).join("")+"<img "+s+o+c+r+a+t+i+n+l+d+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},R=s.default.forwardRef((function(e,t){var r=e.src,a=e.imageVariants,n=e.generateSources,i=e.spreadProps,o=e.ariaHidden,c=s.default.createElement(I,(0,l.default)({ref:t,src:r},i,{ariaHidden:o}));return a.length>1?s.default.createElement("picture",null,n(a),c):c})),I=s.default.forwardRef((function(e,t){var r=e.sizes,a=e.srcSet,n=e.src,i=e.style,o=e.onLoad,d=e.onError,u=e.loading,f=e.draggable,p=e.ariaHidden,m=(0,c.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return s.default.createElement("img",(0,l.default)({"aria-hidden":p,sizes:r,srcSet:a,src:n},m,{onLoad:o,onError:d,ref:t,loading:u,draggable:f,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},i)}))}));I.propTypes={style:d.default.object,onError:d.default.func,onLoad:d.default.func};var L=function(e){function t(t){var r;(r=e.call(this,t)||this).seenBefore=y&&h(t),r.isCritical="eager"===t.loading||t.critical,r.addNoScript=!(r.isCritical&&!t.fadeIn),r.useIOSupport=!b&&v&&!r.isCritical&&!r.seenBefore;var a=r.isCritical||y&&(b||!r.useIOSupport);return r.state={isVisible:a,imgLoaded:!1,imgCached:!1,fadeIn:!r.seenBefore&&t.fadeIn,isHydrated:!1},r.imageRef=s.default.createRef(),r.placeholderRef=t.placeholderRef||s.default.createRef(),r.handleImageLoaded=r.handleImageLoaded.bind((0,i.default)(r)),r.handleRef=r.handleRef.bind((0,i.default)(r)),r}(0,o.default)(t,e);var r=t.prototype;return r.componentDidMount=function(){if(this.setState({isHydrated:y}),this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:h(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},r.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},r.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=j(e,(function(){var e=h(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},r.handleImageLoaded=function(){var e,t,r;e=this.props,t=u(e),(r=p(t))&&(g[r]=!0),this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},r.render=function(){var e=u(this.props),t=e.title,r=e.alt,a=e.className,n=e.style,i=void 0===n?{}:n,o=e.imgStyle,c=void 0===o?{}:o,d=e.placeholderStyle,f=void 0===d?{}:d,p=e.placeholderClassName,g=e.fluid,h=e.fixed,b=e.backgroundColor,y=e.durationFadeIn,v=e.Tag,w=e.itemProp,E=e.loading,k=e.draggable,j=g||h;if(!j)return null;var L=!1===this.state.fadeIn||this.state.imgLoaded,C=!0===this.state.fadeIn&&!this.state.imgCached,P=(0,l.default)({opacity:L?1:0,transition:C?"opacity "+y+"ms":"none"},c),M="boolean"==typeof b?"lightgray":b,H={transitionDelay:y+"ms"},V=(0,l.default)({opacity:this.state.imgLoaded?0:1},C&&H,c,f),T={title:t,alt:this.state.isVisible?"":r,style:V,className:p,itemProp:w},N=this.state.isHydrated?m(j):j[0];if(g)return s.default.createElement(v,{className:(a||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden",maxWidth:N.maxWidth?N.maxWidth+"px":null,maxHeight:N.maxHeight?N.maxHeight+"px":null},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(N.srcSet)},s.default.createElement(v,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/N.aspectRatio+"%"}}),M&&s.default.createElement(v,{"aria-hidden":!0,title:t,style:(0,l.default)({backgroundColor:M,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},C&&H)}),N.base64&&s.default.createElement(R,{ariaHidden:!0,ref:this.placeholderRef,src:N.base64,spreadProps:T,imageVariants:j,generateSources:O}),N.tracedSVG&&s.default.createElement(R,{ariaHidden:!0,ref:this.placeholderRef,src:N.tracedSVG,spreadProps:T,imageVariants:j,generateSources:S}),this.state.isVisible&&s.default.createElement("picture",null,x(j),s.default.createElement(I,{alt:r,title:t,sizes:N.sizes,src:N.src,crossOrigin:this.props.crossOrigin,srcSet:N.srcSet,style:P,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w,loading:E,draggable:k})),this.addNoScript&&s.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:z((0,l.default)({alt:r,title:t,loading:E},N,{imageVariants:j}))}}));if(h){var q=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:N.width,height:N.height},i);return"inherit"===i.display&&delete q.display,s.default.createElement(v,{className:(a||"")+" gatsby-image-wrapper",style:q,ref:this.handleRef,key:"fixed-"+JSON.stringify(N.srcSet)},M&&s.default.createElement(v,{"aria-hidden":!0,title:t,style:(0,l.default)({backgroundColor:M,width:N.width,opacity:this.state.imgLoaded?0:1,height:N.height},C&&H)}),N.base64&&s.default.createElement(R,{ariaHidden:!0,ref:this.placeholderRef,src:N.base64,spreadProps:T,imageVariants:j,generateSources:O}),N.tracedSVG&&s.default.createElement(R,{ariaHidden:!0,ref:this.placeholderRef,src:N.tracedSVG,spreadProps:T,imageVariants:j,generateSources:S}),this.state.isVisible&&s.default.createElement("picture",null,x(j),s.default.createElement(I,{alt:r,title:t,width:N.width,height:N.height,sizes:N.sizes,src:N.src,crossOrigin:this.props.crossOrigin,srcSet:N.srcSet,style:P,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w,loading:E,draggable:k})),this.addNoScript&&s.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:z((0,l.default)({alt:r,title:t,loading:E},N,{imageVariants:j}))}}))}return null},t}(s.default.Component);L.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var C=d.default.shape({width:d.default.number.isRequired,height:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string}),P=d.default.shape({aspectRatio:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,sizes:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string,maxWidth:d.default.number,maxHeight:d.default.number});function M(e){return function(t,r,a){var n;if(!t.fixed&&!t.fluid)throw new Error("The prop `fluid` or `fixed` is marked as required in `"+a+"`, but their values are both `undefined`.");d.default.checkPropTypes(((n={})[r]=e,n),t,"prop",a)}}L.propTypes={resolutions:C,sizes:P,fixed:M(d.default.oneOfType([C,d.default.arrayOf(C)])),fluid:M(d.default.oneOfType([P,d.default.arrayOf(P)])),fadeIn:d.default.bool,durationFadeIn:d.default.number,title:d.default.string,alt:d.default.string,className:d.default.oneOfType([d.default.string,d.default.object]),critical:d.default.bool,crossOrigin:d.default.oneOfType([d.default.string,d.default.bool]),style:d.default.object,imgStyle:d.default.object,placeholderStyle:d.default.object,placeholderClassName:d.default.string,backgroundColor:d.default.oneOfType([d.default.string,d.default.bool]),onLoad:d.default.func,onError:d.default.func,onStartLoad:d.default.func,Tag:d.default.string,itemProp:d.default.string,loading:d.default.oneOf(["auto","lazy","eager"]),draggable:d.default.bool};var H=L;t.default=H},"A2+M":function(e,t,r){var a=r("X8hv");e.exports={MDXRenderer:a}},RXBc:function(e,t,r){"use strict";r.r(t);var a=r("q1tI"),n=r.n(a),i=r("17x9"),o=r.n(i),c=r("Ueje"),l=r("Bl7J"),s=r("vrFN"),d=r("o0o1"),u=r.n(d),f=r("yXPU"),p=r.n(f),m=r("vOnD"),g=(r("9eSz"),r("A2+M"),r("ZMKu")),h=r("0bdg"),b=r("YwrD"),y=r("YtPH"),v=function(e){var t=e.color;return n.a.createElement("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",role:"img",fill:t,x:"0px",y:"0px",viewBox:"250 -250 1000 1000"},n.a.createElement("g",null,n.a.createElement("path",{d:"M862.8,740L643.7,355.8L983.8-240h229L872.6,355.8L1091.8,740H862.8z M503.1,443.7l170.1-280L545.6-60.9H329.7 l127.5,224.6l-170.1,280H503.1z"})))};v.propTypes={color:o.a.string},v.defaultProps={color:"#000000"};var w=v,x=function(e){var t=e.color;return n.a.createElement("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",role:"img",fill:t,x:"0px",y:"0px",width:"430.117px",height:"430.117px",viewBox:"0 0 430.117 430.117"},n.a.createElement("g",null,n.a.createElement("path",{d:"M430.117,261.543V420.56h-92.188V272.193c0-37.271-13.334-62.707-46.703-62.707 c-25.473,0-40.632,17.142-47.301,33.724c-2.432,5.928-3.058,14.179-3.058,22.477V420.56h-92.219c0,0,1.242-251.285,0-277.32h92.21 v39.309c-0.187,0.294-0.43,0.611-0.606,0.896h0.606v-0.896c12.251-18.869,34.13-45.824,83.102-45.824 C384.633,136.724,430.117,176.361,430.117,261.543z M52.183,9.558C20.635,9.558,0,30.251,0,57.463 c0,26.619,20.038,47.94,50.959,47.94h0.616c32.159,0,52.159-21.317,52.159-47.94C103.128,30.251,83.734,9.558,52.183,9.558z M5.477,420.56h92.184v-277.32H5.477V420.56z"})))};x.propTypes={color:o.a.string},x.defaultProps={color:"#000000"};var E=x,S=function(e){var t=e.color;return n.a.createElement("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",role:"img",fill:t,x:"0px",y:"0px",viewBox:"-237 239 24 24"},n.a.createElement("path",{d:"M-234.2,245.9c0-0.3-0.1-0.6-0.3-0.8l-2.2-2.7V242h7l5.4,11.8l4.7-11.8h6.6v0.4l-1.9,1.8c-0.2,0.1-0.2,0.3-0.2,0.5v13.5 c0,0.2,0,0.4,0.2,0.5l1.9,1.8v0.4h-9.4v-0.4l1.9-1.9c0.2-0.2,0.2-0.2,0.2-0.5v-10.9l-5.4,13.7h-0.7l-6.3-13.7v9.2 c-0.1,0.4,0.1,0.8,0.3,1.1l2.5,3.1v0.4h-7.1v-0.4l2.5-3.1c0.3-0.3,0.4-0.7,0.3-1.1C-234.2,256.5-234.2,245.9-234.2,245.9z"}))};S.propTypes={color:o.a.string},S.defaultProps={color:"#000000"};var O=S,k=function(e){var t=e.color;return n.a.createElement("svg",{version:"1.1",role:"img",fill:t,xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",viewBox:"262 -262 1024 1024"},n.a.createElement("path",{d:"M774-249.4c-282.9,0-512,229.1-512,512c0,226.6,146.6,417.9,350.1,485.8c25.6,4.5,35.2-10.9,35.2-24.3 c0-12.2-0.6-52.5-0.6-95.4c-128.6,23.7-161.9-31.4-172.2-60.2c-5.8-14.7-30.7-60.2-52.5-72.3c-17.9-9.6-43.5-33.3-0.6-33.9 c40.3-0.6,69.1,37.1,78.7,52.5c46.1,77.4,119.7,55.7,149.1,42.2c4.5-33.3,17.9-55.7,32.6-68.5c-113.9-12.8-233-57-233-252.8 c0-55.7,19.8-101.8,52.5-137.6c-5.1-12.8-23-65.3,5.1-135.7c0,0,42.9-13.4,140.8,52.5c41-11.5,84.5-17.3,128-17.3 c43.5,0,87,5.8,128,17.3c97.9-66.6,140.8-52.5,140.8-52.5c28.2,70.4,10.2,122.9,5.1,135.7c32.6,35.8,52.5,81.3,52.5,137.6 c0,196.5-119.7,240-233.6,252.8c18.6,16,34.6,46.7,34.6,94.7c0,68.5-0.6,123.5-0.6,140.8c0,13.4,9.6,29.4,35.2,24.3 c202.2-67.8,348.8-259.8,348.8-485.8C1286-20.2,1056.9-249.4,774-249.4z"}))};k.propTypes={color:o.a.string},k.defaultProps={color:"#000000"};var j=k,z=function(e){var t=e.color;return n.a.createElement("svg",{version:"1.1",role:"img",fill:t,xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",width:"430.123px",height:"430.123px",viewBox:"0 0 430.123 430.123"},n.a.createElement("g",null,n.a.createElement("path",{id:"Behance",d:"M388.432,119.12H280.659V92.35h107.782v26.77H388.432z M208.912,228.895 c6.954,10.771,10.429,23.849,10.429,39.203c0,15.878-3.918,30.122-11.889,42.704c-5.071,8.326-11.367,15.359-18.932,21.021 c-8.52,6.548-18.607,11.038-30.203,13.437c-11.633,2.403-24.224,3.617-37.787,3.617H0V81.247h129.25 c32.579,0.53,55.676,9.969,69.315,28.506c8.184,11.369,12.239,25.011,12.239,40.868c0,16.362-4.104,29.454-12.368,39.401 c-4.597,5.577-11.388,10.65-20.378,15.229C191.675,210.236,202.007,218.086,208.912,228.895z M61.722,186.76h56.632 c11.638,0,21.046-2.212,28.292-6.634c7.241-4.415,10.854-12.263,10.854-23.531c0-12.449-4.784-20.712-14.375-24.689 c-8.244-2.763-18.792-4.186-31.591-4.186H61.722V186.76z M162.953,264.275c0-13.902-5.682-23.513-17.023-28.67 c-6.342-2.931-15.29-4.429-26.763-4.536H61.722v71.322h56.556c11.619,0,20.612-1.521,27.102-4.694 C157.084,291.863,162.953,280.76,162.953,264.275z M428.419,220.736c1.302,8.756,1.891,21.46,1.652,38.065H290.493 c0.77,19.266,7.421,32.739,20.035,40.449c7.607,4.835,16.83,7.196,27.63,7.196c11.388,0,20.67-2.879,27.815-8.797 c3.893-3.137,7.327-7.565,10.296-13.152h51.16c-1.34,11.379-7.5,22.92-18.57,34.648c-17.151,18.641-41.205,27.988-72.097,27.988 c-25.52,0-48.011-7.883-67.533-23.592C249.772,307.777,240,282.211,240,246.746c0-33.257,8.773-58.712,26.378-76.43 c17.67-17.751,40.474-26.586,68.583-26.586c16.661,0,31.68,2.978,45.079,8.965c13.357,5.993,24.396,15.425,33.09,28.388 C420.998,192.499,426.058,205.699,428.419,220.736z M378.062,225.73c-0.938-13.322-5.386-23.405-13.395-30.296 c-7.943-6.91-17.866-10.379-29.706-10.379c-12.886,0-22.836,3.708-29.906,10.996c-7.118,7.273-11.547,17.161-13.362,29.68H378.062 L378.062,225.73z"})),n.a.createElement("g",null),n.a.createElement("g",null),n.a.createElement("g",null),n.a.createElement("g",null),n.a.createElement("g",null),n.a.createElement("g",null),n.a.createElement("g",null),n.a.createElement("g",null),n.a.createElement("g",null),n.a.createElement("g",null),n.a.createElement("g",null),n.a.createElement("g",null),n.a.createElement("g",null),n.a.createElement("g",null),n.a.createElement("g",null))};z.propTypes={color:o.a.string},z.defaultProps={color:"#000000"};var R=z,I=function(e){var t=e.color;return n.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 194.818 194.818",x:"0px",y:"0px",role:"img",fill:t,width:"194.818px",height:"194.818px"},n.a.createElement("g",null,n.a.createElement("path",{d:"M185.8,2.2l-56.6,0c-4.8,0-9,3.6-9.3,8.4c-0.3,5.2,3.8,9.6,9,9.6h13.5c8.1,0,12.1,9.7,6.4,15.4L78,106.2 c-3.6,3.6-3.8,9.6-0.1,13.1c1.7,1.7,4,2.5,6.2,2.5c2.3,0,4.6-0.9,6.4-2.6l70.9-70.9c5.7-5.7,15.4-1.7,15.4,6.4v13.1 c0,4.8,3.6,9,8.4,9.3c5.2,0.3,9.6-3.8,9.6-9v-57C194.8,6.2,190.8,2.2,185.8,2.2z"}),n.a.createElement("path",{d:"M147.7,77.3c-4.5,0.6-7.7,4.7-7.7,9.2c0,14.6,0,59.7,0,79.1c0,5-4.1,9-9,9H27c-5,0-9-4.1-9-9V61.7c0-5,4.1-9,9-9l84.4,0 c4.8,0,9-3.6,9.3-8.4c0.3-5.2-3.8-9.6-9-9.6H9c-5,0-9,4.1-9,9v139.9c0,5,4.1,9,9,9H149c5,0,9-4.1,9-9V86.2 C158,80.8,153.2,76.5,147.7,77.3z"})))};I.propTypes={color:o.a.string},I.defaultProps={color:"#000000"};var L=I,C=function(e){var t=e.name,r=e.color;switch(t.toLowerCase()){case"xing":return n.a.createElement(w,{color:r});case"linkedin":return n.a.createElement(E,{color:r});case"medium":return n.a.createElement(O,{color:r});case"github":return n.a.createElement(j,{color:r});case"behance":return n.a.createElement(R,{color:r});case"external":return n.a.createElement(L,{color:r});default:return null}};C.propTypes={name:o.a.string.isRequired,color:o.a.string};var P=C,M=r("upwP"),H=r("rOcY"),V=m.default.div.withConfig({displayName:"social__StyledSocialWrapper",componentId:"sc-1kpxmto-0"})(["display:grid;grid-template-columns:repeat(",",auto);justify-content:start;justify-items:start;margin-left:-2.5rem;margin-right:-2.5rem;padding-left:2.5rem;padding-right:2.5rem;overflow-x:scroll;overflow-y:hidden;-webkit-overflow-scrolling:touch;&::-webkit-scrollbar{display:none;}@media (min-width:",'){overflow:visible;}&::after{content:"";width:2.5rem;}@media (hover:hover){scrollbar-color:'," transparent;&::-webkit-scrollbar{display:block;-webkit-appearance:none;}&::-webkit-scrollbar:horizontal{height:0.8rem;}&::-webkit-scrollbar-thumb{border-radius:8px;border:0.2rem solid ",";background-color:",";}&::-webkit-scrollbar-track{background-color:",";border-radius:8px;}}a{margin-right:0.5rem;margin-bottom:0.75rem;@media (min-width:","){margin-right:1rem;}}"],(function(e){return e.itemCount+1}),(function(e){return e.theme.breakpoints.lg}),(function(e){return e.theme.colors.scrollBar}),(function(e){return e.theme.colors.background}),(function(e){return e.theme.colors.scrollBar}),(function(e){return e.theme.colors.background}),(function(e){return e.theme.breakpoints.sm})),T=m.default.a.withConfig({displayName:"social__StyledSocialProfile",componentId:"sc-1kpxmto-1"})(["width:",";height:auto;background:",";background:linear-gradient( to right,"," 50%,"," 50% );background-size:205% 100%;background-position:right bottom;border-radius:",";border:0.125rem solid ",";padding:",";transition:all 0.1s ease-out;font-size:",";font-weight:500;color:",";&:hover{background-position:left bottom;color:",";}&:hover svg{filter:invert(1);}svg{height:1rem;width:1rem;margin-right:0.5rem;margin-bottom:-0.05rem;}"],(function(e){var t=e.width;return t||"auto"}),(function(e){return e.theme.colors.background}),(function(e){return e.theme.colors.primary}),(function(e){return e.theme.colors.background}),(function(e){return e.theme.borderRadius}),(function(e){return e.theme.colors.primary}),(function(e){var t=e.padding;return t||".3rem 1.25rem"}),(function(e){var t=e.fontSize;return t||"1rem"}),(function(e){return e.theme.colors.primary}),(function(e){return e.theme.colors.background})),N=function(e){var t=e.width,r=e.padding,i=e.fontSize,o=e.fontWeight,c=e.withIcon,l=Object(a.useContext)(h.a).state.darkMode;return n.a.createElement(V,{itemCount:H.socialMedia.length},H.socialMedia.map((function(e,a){var s=e.name,d=e.url;return n.a.createElement(T,{key:a,href:d,target:"_blank",rel:"nofollow noopener noreferrer","aria-label":s,width:t,padding:r,fontSize:i,fontWeight:o},c?n.a.createElement(P,{name:s,color:l?M.a.colors.primary:M.b.colors.primary}):null," ",s)})))};N.propTypes={width:o.a.string,padding:o.a.string,fontSize:o.a.string,fontWeight:o.a.string,withIcon:o.a.bool};var q=N,D=r("lSNA"),B=r.n(D),W=r("qhky"),_=r("I4A6");function X(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function A(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?X(Object(r),!0).forEach((function(t){B()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):X(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var F=Object(m.default)(g.a.div).withConfig({displayName:"splashScreen__StyledSplashScreen",componentId:"sc-12s9sfd-0"})(["position:fixed;top:0;left:0%;z-index:900;height:100%;width:100%;display:flex;justify-content:center;align-items:center;background-color:",";.logo-wrapper{position:relative;display:flex;justify-content:center;align-items:center;width:auto;height:4rem;}.backdrop{position:absolute;top:0;left:0;z-index:1000;width:100%;height:100%;background-color:",";}"],(function(e){var t=e.theme;return e.darkMode?t.colors.background:t.colors.primary}),(function(e){var t=e.theme;return e.darkMode?t.colors.background:t.colors.primary})),J=function(){var e=Object(a.useContext)(h.a),t=e.state,r=e.setState,i=Object(g.b)(),o=Object(g.b)();return Object(a.useEffect)((function(){(function(){var e=p()(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.start({opacity:1});case 2:return e.next=4,o.start({height:"0%",transition:{delay:.8}});case 4:return e.next=6,i.start({opacity:0,transition:{delay:.6}});case 6:r(A(A({},t),{},{isIntroDone:!0}));case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[i,o,r,t]),n.a.createElement(F,{initial:{opacity:0},animate:i,darkMode:t.darkMode},n.a.createElement(W.a,{bodyAttributes:{class:t.isIntroDone?"":"splashScreen"}}),n.a.createElement("div",{className:"logo-wrapper"},n.a.createElement(g.a.div,{className:"backdrop",initial:{height:"100%"},animate:o}),n.a.createElement(_.a,{size:"3rem",color:t.darkMode?M.a.colors.primary:M.b.colors.background})))},G=m.default.section.withConfig({displayName:"hero__StyledSection",componentId:"uhgvfn-0"})(["width:100%;height:auto;background:",";"],(function(e){return e.theme.colors.background})),U=Object(m.default)(b.a).withConfig({displayName:"hero__StyledContentWrapper",componentId:"uhgvfn-1"})(["&&{width:100%;height:100%;min-height:60vh;display:flex;flex-direction:column;justify-content:center;margin-bottom:6rem;@media (min-width:","){margin-bottom:4rem;}.greetings{display:flex;justify-content:flex-start;align-items:center;}.emoji{margin-left:0.75rem;width:2.2rem;height:2.2rem;@media (min-width:","){margin-left:1rem;width:3rem;height:3rem;}}.title{margin-bottom:1.5rem;@media (min-width:","){margin-bottom:0;}}.subtitle{margin-top:-0.75rem;}.description{font-size:1.125rem;margin-bottom:2rem;}}"],(function(e){return e.theme.breakpoints.sm}),(function(e){return e.theme.breakpoints.sm}),(function(e){return e.theme.breakpoints.sm})),Y=g.a.custom(y.a),Q=function(e){var t=e.content[0].node,r=(t.frontmatter,t.body,Object(a.useContext)(h.a).state),i=r.isIntroDone,o=r.darkMode,c=Object(g.b)(),l=Object(g.b)(),s=Object(g.b)(),d=Object(g.b)();return Object(a.useEffect)((function(){(function(){var e=p()(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!i){e.next=8;break}return l.start({rotate:[0,-10,12,-10,9,0,0,0,0,0,0],transition:{duration:2.5,loop:3,repeatDelay:1}}),e.next=4,c.start({opacity:1,y:0,transition:{delay:.4}});case 4:return e.next=6,s.start({opacity:1,x:0});case 6:return e.next=8,d.start({boxShadow:"inset 0 -2rem 0 ".concat(o?M.a.colors.secondary:M.b.colors.secondary),transition:{delay:.4,ease:"circOut"}});case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[i,o,l,c,s,d]),n.a.createElement(G,{id:"hero"},!i&&n.a.createElement(J,null),n.a.createElement(U,null,n.a.createElement(g.a.div,{initial:{opacity:0,y:20},animate:c,"data-testid":"animated-heading"},n.a.createElement("h1",{className:"title"},"Hello :)"),n.a.createElement("h2",{className:"subtitle"},"I write everything ",n.a.createElement(Y,{animate:d,big:!0},"JavaScript"))),n.a.createElement(g.a.div,{initial:{opacity:0,x:20},animate:s},n.a.createElement(q,{fontSize:".95rem",padding:".3rem 1.25rem",width:"auto"}))))};Q.propTypes={content:o.a.arrayOf(o.a.shape({node:o.a.shape({body:o.a.string.isRequired,frontmatter:o.a.object.isRequired}).isRequired}).isRequired).isRequired};var Z=Q,K=function(e){var t=e.data,r=t.index.edges[0].node.frontmatter,a=r.seoTitle,i=r.useSeoTitleSuffix,o={isIntroDone:!r.useSplashScreen,darkMode:!1};return n.a.createElement(c.a,{initialState:o},n.a.createElement(l.a,null,n.a.createElement(s.a,{title:i?"".concat(a," - ").concat(H.seoTitleSuffix):"".concat(a)}),n.a.createElement(Z,{content:t.hero.edges})))};K.propTypes={data:o.a.object.isRequired};t.default=K},X8hv:function(e,t,r){var a=r("sXyB"),n=r("RIqP"),i=r("lSNA"),o=r("8OQS");function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var s=r("q1tI"),d=r("7ljp").mdx,u=r("BfwJ").useMDXScope;e.exports=function(e){var t=e.scope,r=e.children,i=o(e,["scope","children"]),c=u(t),f=s.useMemo((function(){if(!r)return null;var e=l({React:s,mdx:d},c),t=Object.keys(e),i=t.map((function(t){return e[t]}));return a(Function,["_fn"].concat(n(t),[""+r])).apply(void 0,[{}].concat(n(i)))}),[r,t]);return s.createElement(f,l({},i))}},b48C:function(e,t){e.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}},sXyB:function(e,t,r){var a=r("SksO"),n=r("b48C");function i(t,r,o){return n()?e.exports=i=Reflect.construct:e.exports=i=function(e,t,r){var n=[null];n.push.apply(n,t);var i=new(Function.bind.apply(e,n));return r&&a(i,r.prototype),i},i.apply(null,arguments)}e.exports=i}}]);
//# sourceMappingURL=component---src-pages-index-js-0dc50bd03dc7f22d2a54.js.map