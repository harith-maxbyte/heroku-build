(this.webpackJsonpEnergyApp=this.webpackJsonpEnergyApp||[]).push([[12],{238:function(e,t,a){"use strict";t.a=a.p+"static/media/exportblack.63013d84.svg"},239:function(e,t,a){"use strict";t.a=a.p+"static/media/filterblack.00355919.svg"},240:function(e,t,a){"use strict";t.a=a.p+"static/media/export.c95b6dab.svg"},241:function(e,t,a){"use strict";t.a=a.p+"static/media/print.d7a7dfdf.svg"},242:function(e,t,a){"use strict";a.d(t,"e",(function(){return s})),a.d(t,"a",(function(){return l})),a.d(t,"i",(function(){return d})),a.d(t,"b",(function(){return u})),a.d(t,"g",(function(){return p})),a.d(t,"h",(function(){return b})),a.d(t,"f",(function(){return f})),a.d(t,"c",(function(){return h})),a.d(t,"d",(function(){return g}));var n=a(10),r=a.n(n),o=a(18),c=a(14),i=a(64);function s(e,t){return function(){var a=Object(o.a)(r.a.mark((function a(n){return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:i.a.get("/GetProductDetails?Startdate=".concat(e,"&Enddate=").concat(t,"&ProductName=&ProductCategory=&ProductInventory=")).then(function(){var e=Object(o.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:!0===t.success&&n({type:c.p,data:t.result});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 1:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()}function l(e,t){return function(){var a=Object(o.a)(r.a.mark((function a(n){return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:i.a.postFormData("/AddProductDetails",t).then(function(){var t=Object(o.a)(r.a.mark((function t(a){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:!0===a.success?(e.props.history.push("/admin/products"),n({type:c.a,data:!0}),e.setState({loading:!1}),n({type:c.b,data:!0,message:"Product Added",severity:"success"})):!1===a.isSuccess&&(e.setState({loading:!1}),n({type:c.b,data:!0,message:a.message,severity:"error"}));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(t){e.setState({loading:!1}),n({type:c.b,data:!0,message:t.message,severity:"error"})}));case 1:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()}function d(e,t){return function(){var e=Object(o.a)(r.a.mark((function e(a){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i.a.postFormData("/uploadEfficiencyProfile",t).then(function(){var e=Object(o.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:!0===t.success&&a({type:c.s,data:t.result});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}function u(e,t){return function(){var a=Object(o.a)(r.a.mark((function a(n){return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:i.a.get("/TopProductdetails?Startdate=".concat(e,"&Enddate=").concat(t)).then(function(){var e=Object(o.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:!0===t.success&&n({type:c.o,data:t.result});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 1:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()}function p(){return function(){var e=Object(o.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i.a.get("/ProductCategory").then(function(){var e=Object(o.a)(r.a.mark((function e(a){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:!0===a.success&&t({type:c.v,data:a.result});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}function b(){return function(){var e=Object(o.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i.a.get("/DropDown/GetDropDownList?Entity=Inventory").then(function(){var e=Object(o.a)(r.a.mark((function e(a){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:!0===a.isSuccess&&t({type:c.w,data:a.payload});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}function f(){return function(){var e=Object(o.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i.a.get("/DropDown/GetDropDownList?Entity=Brands").then(function(){var e=Object(o.a)(r.a.mark((function e(a){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:!0===a.isSuccess&&t({type:c.t,data:a.payload});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}function h(e,t){return function(){var a=Object(o.a)(r.a.mark((function a(n){return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:i.a.get("/productBrandSegment?Startdate=".concat(e,"&Enddate=").concat(t)).then(function(){var e=Object(o.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:!0===t.success&&n({type:c.u,data:t.result});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 1:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()}function g(){return function(){var e=Object(o.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i.a.blobGet("/ExportProductDetails").then(function(){var e=Object(o.a)(r.a.mark((function e(t){var a,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{a=document.createElement("a"),n=URL.createObjectURL(t),a.href=n,a.download="product.csv",document.body.appendChild(a),a.click(),document.body.removeChild(a)}catch(r){alert("Some thing went wrong. Please try again.")}case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}},261:function(e,t,a){"use strict";var n=a(4),r=a(2),o=a(0),c=(a(6),a(5)),i=a(7),s=a(23),l=a(123),d=a(12),u=o.forwardRef((function(e,t){var a=e.children,i=e.classes,s=e.className,u=e.color,p=void 0===u?"default":u,b=e.component,f=void 0===b?"button":b,h=e.disabled,g=void 0!==h&&h,x=e.disableElevation,j=void 0!==x&&x,y=e.disableFocusRipple,m=void 0!==y&&y,S=e.endIcon,O=e.focusVisibleClassName,v=e.fullWidth,C=void 0!==v&&v,w=e.size,P=void 0===w?"medium":w,R=e.startIcon,k=e.type,F=void 0===k?"button":k,z=e.variant,I=void 0===z?"text":z,N=Object(n.a)(e,["children","classes","className","color","component","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"]),E=R&&o.createElement("span",{className:Object(c.a)(i.startIcon,i["iconSize".concat(Object(d.a)(P))])},R),T=S&&o.createElement("span",{className:Object(c.a)(i.endIcon,i["iconSize".concat(Object(d.a)(P))])},S);return o.createElement(l.a,Object(r.a)({className:Object(c.a)(i.root,i[I],s,"inherit"===p?i.colorInherit:"default"!==p&&i["".concat(I).concat(Object(d.a)(p))],"medium"!==P&&[i["".concat(I,"Size").concat(Object(d.a)(P))],i["size".concat(Object(d.a)(P))]],j&&i.disableElevation,g&&i.disabled,C&&i.fullWidth),component:f,disabled:g,focusRipple:!m,focusVisibleClassName:Object(c.a)(i.focusVisible,O),ref:t,type:F},N),o.createElement("span",{className:i.label},E,a,T))}));t.a=Object(i.a)((function(e){return{root:Object(r.a)({},e.typography.button,{boxSizing:"border-box",minWidth:64,padding:"6px 16px",borderRadius:e.shape.borderRadius,color:e.palette.text.primary,transition:e.transitions.create(["background-color","box-shadow","border"],{duration:e.transitions.duration.short}),"&:hover":{textDecoration:"none",backgroundColor:Object(s.a)(e.palette.text.primary,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"},"&$disabled":{backgroundColor:"transparent"}},"&$disabled":{color:e.palette.action.disabled}}),label:{width:"100%",display:"inherit",alignItems:"inherit",justifyContent:"inherit"},text:{padding:"6px 8px"},textPrimary:{color:e.palette.primary.main,"&:hover":{backgroundColor:Object(s.a)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},textSecondary:{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object(s.a)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},outlined:{padding:"5px 15px",border:"1px solid ".concat("light"===e.palette.type?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"),"&$disabled":{border:"1px solid ".concat(e.palette.action.disabledBackground)}},outlinedPrimary:{color:e.palette.primary.main,border:"1px solid ".concat(Object(s.a)(e.palette.primary.main,.5)),"&:hover":{border:"1px solid ".concat(e.palette.primary.main),backgroundColor:Object(s.a)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},outlinedSecondary:{color:e.palette.secondary.main,border:"1px solid ".concat(Object(s.a)(e.palette.secondary.main,.5)),"&:hover":{border:"1px solid ".concat(e.palette.secondary.main),backgroundColor:Object(s.a)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"&$disabled":{border:"1px solid ".concat(e.palette.action.disabled)}},contained:{color:e.palette.getContrastText(e.palette.grey[300]),backgroundColor:e.palette.grey[300],boxShadow:e.shadows[2],"&:hover":{backgroundColor:e.palette.grey.A100,boxShadow:e.shadows[4],"@media (hover: none)":{boxShadow:e.shadows[2],backgroundColor:e.palette.grey[300]},"&$disabled":{backgroundColor:e.palette.action.disabledBackground}},"&$focusVisible":{boxShadow:e.shadows[6]},"&:active":{boxShadow:e.shadows[8]},"&$disabled":{color:e.palette.action.disabled,boxShadow:e.shadows[0],backgroundColor:e.palette.action.disabledBackground}},containedPrimary:{color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.main,"&:hover":{backgroundColor:e.palette.primary.dark,"@media (hover: none)":{backgroundColor:e.palette.primary.main}}},containedSecondary:{color:e.palette.secondary.contrastText,backgroundColor:e.palette.secondary.main,"&:hover":{backgroundColor:e.palette.secondary.dark,"@media (hover: none)":{backgroundColor:e.palette.secondary.main}}},disableElevation:{boxShadow:"none","&:hover":{boxShadow:"none"},"&$focusVisible":{boxShadow:"none"},"&:active":{boxShadow:"none"},"&$disabled":{boxShadow:"none"}},focusVisible:{},disabled:{},colorInherit:{color:"inherit",borderColor:"currentColor"},textSizeSmall:{padding:"4px 5px",fontSize:e.typography.pxToRem(13)},textSizeLarge:{padding:"8px 11px",fontSize:e.typography.pxToRem(15)},outlinedSizeSmall:{padding:"3px 9px",fontSize:e.typography.pxToRem(13)},outlinedSizeLarge:{padding:"7px 21px",fontSize:e.typography.pxToRem(15)},containedSizeSmall:{padding:"4px 10px",fontSize:e.typography.pxToRem(13)},containedSizeLarge:{padding:"8px 22px",fontSize:e.typography.pxToRem(15)},sizeSmall:{},sizeLarge:{},fullWidth:{width:"100%"},startIcon:{display:"inherit",marginRight:8,marginLeft:-4,"&$iconSizeSmall":{marginLeft:-2}},endIcon:{display:"inherit",marginRight:-4,marginLeft:8,"&$iconSizeSmall":{marginRight:-2}},iconSizeSmall:{"& > *:first-child":{fontSize:18}},iconSizeMedium:{"& > *:first-child":{fontSize:20}},iconSizeLarge:{"& > *:first-child":{fontSize:22}}}}),{name:"MuiButton"})(u)},628:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return L}));var n=a(36),r=a(37),o=a(38),c=a(39),i=a(0),s=a(30),l=a(530),d=a(62),u=a(227),p=a(261),b=a(265),f=a(613),h=a(216),g=a(214),x=a(608),j=a(609),y=a(610),m=a(611),S=a(619),O=a(612),v=a(119),C=a(376),w=a(7),P=a(250),R=a(255),k=a(44),F=a(256),z=a(242),I=a(240),N=a(241),E=a(238),T=a(239),B=a(3),D=function(e){Object(o.a)(a,e);var t=Object(c.a)(a);function a(e){var r;return Object(n.a)(this,a),(r=t.call(this,e)).handleChangePage=function(e,t){"LEFT"===e?r.state.page>0&&r.setState({page:r.state.page-1}):t>(r.state.page+1)*r.state.rowsPerPage&&r.setState({page:r.state.page+1})},r.activePage=function(e,t){if("LEFT"===e){if(0===r.state.page)return!1}else if(t<=(r.state.page+1)*r.state.rowsPerPage)return!1;return!0},r.handleClick=function(e){r.setState({anchorEl:e.currentTarget})},r.selectAll=function(e){var t=r.props.allProducts;!0===e.target.checked&&r.setState({selected_products:!1===r.state.select_all?t:[],select_all:!r.state.select_all}),!1===e.target.checked&&r.setState({selected_products:!1===r.state.select_all?t:[],select_all:!r.state.select_all})},r.selectProducts=function(e,t){!0===e.target.checked&&r.setState({selected_products:r.state.selected_products.concat(t)}),!1===e.target.checked&&r.setState({selected_products:r.state.selected_products.filter((function(e){return e!==t}))})},r.handleChangeRowsPerPage=function(e){r.setState({rowsPerPage:e.target.value})},r.returnTotalPages=function(e){return e>=r.state.rowsPerPage?Math.ceil(e/r.state.rowsPerPage):1},r.returnColor=function(e){var t="#000000";switch(e){case"INSTOCK":t="#000000";break;case"LIMITED":t="#F3852A";break;case"OUTOFSTOCK":t="#E55562"}return t},r.state={page:0,rowsPerPage:5,selected_products:[],select_all:!1},r}return Object(r.a)(a,[{key:"componentDidMount",value:function(){this.props.dispatch(Object(z.e)()),this.props.dispatch(Object(z.f)()),this.props.dispatch(Object(z.h)()),this.props.dispatch(Object(z.g)())}},{key:"render",value:function(){var e=this,t=this.props,a=t.classes,n=t.allProducts,r=t.productBrands,o=t.productInventories,c=t.productCategories,i=this.state,s=i.rowsPerPage,w=i.page;return Object(B.jsxs)("div",{className:a.root,children:[Object(B.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[Object(B.jsxs)(l.a,{separator:Object(B.jsx)(k.b,{size:15}),"aria-label":"breadcrumb",style:{color:"#9F9E9E",left:"29.21%",right:"26.03%",top:"10.88%",bottom:"10.93%"},children:[Object(B.jsx)(d.a,{onClick:function(){return e.props.history.push("/admin/products")},style:{fontFamily:"SourceSansPro-Regular",color:"#57B78C",cursor:"pointer",fontSize:18,fontWeight:600,width:"74px",height:"20px",fonttyle:"normal",lineHeight:"20px"},color:"primary",children:"Overview"}),Object(B.jsx)(d.a,{style:{fontFamily:"SourceSansPro-Regular",fontSize:15,fontWeight:"600",lineHeight:"20px",width:"53px",height:"20px"},color:"textPrimary",children:"Products"})]}),Object(B.jsxs)("div",{style:{display:"flex",marginBottom:15},children:[Object(B.jsxs)(u.a,{style:{margin:5},variant:"filled",value:"",InputProps:{classes:{input:a.inputDrawerStyle,underline:a.underline,root:a.inputDrawerRoot}},select:!0,SelectProps:{native:!0},children:[Object(B.jsx)("option",{value:"",disabled:!0,style:{fontFamily:"SourceSansPro-Regular"},children:"All brands"}),r.map((function(e,t){return Object(B.jsx)("option",{value:e.value,style:{fontFamily:"SourceSansPro-Regular"},children:e.value},t)}))]}),Object(B.jsxs)(u.a,{style:{margin:5},variant:"filled",value:"",InputProps:{classes:{input:a.inputDrawerStyle,underline:a.underline,root:a.inputDrawerRoot}},select:!0,SelectProps:{native:!0},children:[Object(B.jsx)("option",{value:"",disabled:!0,style:{fontFamily:"SourceSansPro-Regular"},children:"All category"}),c.map((function(e,t){return Object(B.jsx)("option",{value:e.value,style:{fontFamily:"SourceSansPro-Regular"},children:e.value},t)}))]}),Object(B.jsxs)(u.a,{style:{margin:5},variant:"filled",value:"",InputProps:{classes:{input:a.inputDrawerStyle,underline:a.underline,root:a.inputDrawerRoot}},select:!0,SelectProps:{native:!0},children:[Object(B.jsx)("option",{value:"",disabled:!0,style:{fontFamily:"SourceSansPro-Regular"},children:"All inventory"}),o.map((function(e,t){return Object(B.jsx)("option",{value:e.value,style:{fontFamily:"SourceSansPro-Regular"},children:e.value},t)}))]}),Object(B.jsxs)(p.a,{variant:"contained",className:a.buttonVariant,onClick:function(){return e.props.history.push("/admin/products/add")},children:[Object(B.jsx)(R.a,{size:13,style:{paddingRight:5}})," New Product  ",Object(B.jsx)(P.a,{size:13,style:{paddingLeft:5}})]})]})]}),Object(B.jsx)(b.a,{container:!0,spacing:4,children:Object(B.jsx)(b.a,{item:!0,xs:12,children:Object(B.jsxs)(f.a,{component:h.a,className:a.paper,children:[this.state.selected_products.length>0&&Object(B.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",backgroundColor:"#000",borderRadius:"8px 8px 0px 0px"},children:[Object(B.jsx)("div",{children:Object(B.jsxs)(d.a,{style:{alignItems:"center",paddingLeft:15,fontSize:15,color:"#fff",fontFamily:"SourceSansPro-Regular"},children:[" ",this.state.selected_products.length," items selected"]})}),Object(B.jsxs)("div",{style:{display:"flex",alignItems:"center",marginRight:"10px"},children:[Object(B.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[Object(B.jsx)("img",{src:I.a,alt:"exportsvg",size:35,style:{cursor:"pointer"},role:"button"}),Object(B.jsx)(d.a,{style:{alignItems:"center",fontSize:15,margin:"0px 5px",color:"#fff",fontFamily:"SourceSansPro-Regular"},children:" Export"})]}),Object(B.jsxs)("div",{style:{display:"flex",alignItems:"center",margin:"0px 15px"},children:[Object(B.jsx)("img",{src:N.a,alt:"print",size:15,style:{cursor:"pointer"},role:"button"}),Object(B.jsx)(d.a,{style:{alignItems:"center",fontSize:15,margin:"0px 5px",color:"#fff",fontFamily:"SourceSansPro-Regular"},children:" Print"})]}),Object(B.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[Object(B.jsx)(d.a,{style:{alignItems:"center",fontSize:15,margin:"0px 0px",color:"#fff",fontFamily:"SourceSansPro-Regular"},children:" More"}),Object(B.jsx)(g.a,{children:Object(B.jsx)(k.a,{size:15,color:"#fff"})})]}),Object(B.jsx)("div",{style:{borderLeft:"1px solid #666666",height:30}}),Object(B.jsx)("div",{style:{display:"flex",alignItems:"center"},children:Object(B.jsx)(d.a,{style:{alignItems:"center",fontSize:15,margin:"0px 5px",color:"#fff",fontFamily:"SourceSansPro-Regular"},children:" Cancel"})})]})]}),Object(B.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"flex-end",backgroundColor:"#fff",height:40},children:[Object(B.jsxs)("div",{style:{display:"flex",alignItems:"center",paddingRight:"20px"},children:[Object(B.jsx)("img",{src:E.a,alt:"exportblacksvg",size:35,style:{cursor:"pointer"},role:"button"}),Object(B.jsx)(d.a,{style:{alignItems:"center",fontSize:15,fontFamily:"SourceSansPro-Regular",paddingLeft:5},children:" Export"})]}),Object(B.jsxs)("div",{style:{display:"flex",alignItems:"center",marginRight:10},children:[Object(B.jsx)("img",{src:T.a,alt:"filterblack",size:15,style:{cursor:"pointer"},role:"button"}),Object(B.jsx)(d.a,{style:{alignItems:"center",fontSize:15,fontFamily:"SourceSansPro-Regular"},children:"  Filter"})]})]}),Object(B.jsxs)(x.a,{className:a.card,children:[Object(B.jsx)(j.a,{className:a.tableHead,children:Object(B.jsxs)(y.a,{children:[Object(B.jsx)(m.a,{align:"left",className:a.tableHeadCell,children:Object(B.jsx)(S.a,{color:"primary",onClick:function(t){return e.selectAll(t)},checked:n.length===this.state.selected_products.length,inputProps:{"aria-label":"primary checkbox"}})}),Object(B.jsx)(m.a,{align:"left",className:a.tableHeadCell,children:Object(B.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[Object(B.jsx)(d.a,{style:{fontSize:15,fontWeight:"600",color:"#7B8395",fontFamily:"SourceSansPro-Regular",textTransform:"uppercase"},children:"Model Number "}),Object(B.jsxs)("div",{style:{display:"grid",justifyContent:"space-between"},children:[Object(B.jsx)(k.c,{size:14}),Object(B.jsx)(k.a,{size:14})]})]})}),Object(B.jsx)(m.a,{align:"left",className:a.tableHeadCell,children:Object(B.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[Object(B.jsx)(d.a,{style:{fontSize:15,fontWeight:"600",color:"#7B8395",fontFamily:"SourceSansPro-Regular",textTransform:"uppercase"},children:"Brand "}),Object(B.jsxs)("div",{style:{display:"grid",justifyContent:"space-between"},children:[Object(B.jsx)(k.c,{size:14}),Object(B.jsx)(k.a,{size:14})]})]})}),Object(B.jsx)(m.a,{align:"left",className:a.tableHeadCell,children:Object(B.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[Object(B.jsx)(d.a,{style:{fontSize:15,fontWeight:"600",color:"#7B8395",fontFamily:"SourceSansPro-Regular",textTransform:"uppercase"},children:"Category "}),Object(B.jsxs)("div",{style:{display:"grid",justifyContent:"space-between"},children:[Object(B.jsx)(k.c,{size:14}),Object(B.jsx)(k.a,{size:14})]})]})}),Object(B.jsx)(m.a,{align:"left",className:a.tableHeadCell,children:Object(B.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[Object(B.jsx)(d.a,{style:{fontSize:15,fontWeight:"600",color:"#7B8395",fontFamily:"SourceSansPro-Regular",textTransform:"uppercase"},children:"Quantity "}),Object(B.jsxs)("div",{style:{display:"grid",justifyContent:"space-between"},children:[Object(B.jsx)(k.c,{size:14}),Object(B.jsx)(k.a,{size:14})]})]})}),Object(B.jsx)(m.a,{align:"left",className:a.tableHeadCell,children:Object(B.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[Object(B.jsx)(d.a,{style:{fontSize:15,fontWeight:"600",color:"#7B8395",fontFamily:"SourceSansPro-Regular",textTransform:"uppercase"},children:"Price "}),Object(B.jsxs)("div",{style:{display:"grid",justifyContent:"space-between"},children:[Object(B.jsx)(k.c,{size:14}),Object(B.jsx)(k.a,{size:14})]})]})}),Object(B.jsx)(m.a,{align:"left",className:a.tableHeadCell,children:Object(B.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[Object(B.jsx)(d.a,{style:{fontSize:15,fontWeight:"600",color:"#7B8395",fontFamily:"SourceSansPro-Regular",textTransform:"uppercase"},children:"Date Added "}),Object(B.jsxs)("div",{style:{display:"grid",justifyContent:"space-between"},children:[Object(B.jsx)(k.c,{size:14}),Object(B.jsx)(k.a,{size:14})]})]})}),Object(B.jsx)(m.a,{align:"left",className:a.tableHeadCell,style:{textTransform:"uppercase"},children:"Inventory"}),Object(B.jsx)(m.a,{align:"left",className:a.tableHeadCell})]})}),Object(B.jsx)(O.a,{children:n.slice(w*s,w*s+s).map((function(t,n){return Object(B.jsxs)(y.a,{className:a.tableRow,hover:!0,children:[Object(B.jsx)(m.a,{className:a.tableCell,children:Object(B.jsx)(S.a,{color:"primary",checked:e.state.selected_products.includes(t),onClick:function(a){return e.selectProducts(a,t)},inputProps:{"aria-label":"primary checkbox"}})}),Object(B.jsx)(m.a,{className:a.tableCell,children:t.productSKU}),Object(B.jsx)(m.a,{className:a.tableCell,children:t.productName}),Object(B.jsx)(m.a,{className:a.tableCell,children:t.productCategoryName}),Object(B.jsx)(m.a,{className:a.tableCell,children:t.quantity}),Object(B.jsx)(m.a,{className:a.tableCell,children:t.price}),Object(B.jsx)(m.a,{className:a.tableCell,children:t.createdOn}),Object(B.jsx)(m.a,{className:a.tableCell,style:{color:e.returnColor(t.orderStatus),fontWeight:"600"},children:t.inventory}),Object(B.jsx)(m.a,{className:a.tableCell,children:Object(B.jsx)(g.a,{"aria-controls":"simple-menu","aria-haspopup":"true",onClick:function(t){return e.handleClick(t)},children:Object(B.jsx)(F.b,{size:20})})})]},n.toString())}))})]}),Object(B.jsxs)("div",{className:a.tablePageRoot,children:[Object(B.jsxs)("div",{className:a.tablePageRow,children:[Object(B.jsxs)("div",{className:a.tablePagediv,children:[Object(B.jsx)(d.a,{className:a.textRowPage,children:"Items per page :"}),Object(B.jsxs)(u.a,{variant:"filled",value:this.state.rowsPerPage,onChange:function(t){return e.handleChangeRowsPerPage(t)},InputProps:{classes:{input:a.inputStyle,underline:a.underline,root:a.inputRoot}},select:!0,SelectProps:{native:!0},children:[Object(B.jsx)("option",{value:5,style:{fontFamily:"SourceSansPro-Regular"},children:"5"}),Object(B.jsx)("option",{value:15,style:{fontFamily:"SourceSansPro-Regular"},children:"15"}),Object(B.jsx)("option",{value:25,style:{fontFamily:"SourceSansPro-Regular"},children:"25"})]})]}),Object(B.jsx)("div",{className:a.tablePagediv,children:Object(B.jsxs)(d.a,{style:{fontFamily:"SourceSansPro-Regular"},children:[w*s+1," - ",s>n.length?n.length:(w+1)*s," of ",n.length," items"]})})]}),Object(B.jsxs)("div",{className:a.tablePageRow,children:[Object(B.jsx)("div",{className:a.tablePagedivBorder,children:Object(B.jsxs)(d.a,{style:{fontFamily:"SourceSansPro-Regular"},children:[w+1,"  of ",this.returnTotalPages(n.length)," pages"]})}),Object(B.jsx)("div",{className:a.tablePagediv,children:Object(B.jsx)(g.a,{className:a.iconButton,disabled:!this.activePage("LEFT",n.length),onClick:function(){return e.handleChangePage("LEFT",n.length)},children:Object(B.jsx)(P.b,{size:20,color:this.activePage("LEFT",n.length)?"#666666":"#cccccc"})})}),Object(B.jsx)("div",{className:a.tablePagedivLast,children:Object(B.jsx)(g.a,{className:a.iconButton,disabled:!this.activePage("RIGHT",n.length),onClick:function(){return e.handleChangePage("RIGHT",n.length)},children:Object(B.jsx)(P.c,{size:20,color:this.activePage("RIGHT",n.length)?"#666666":"#cccccc"})})})]})]})]})})}),Object(B.jsxs)(v.a,{id:"simple-menu",anchorEl:this.state.anchorEl,keepMounted:!0,open:Boolean(this.state.anchorEl),onClose:function(){return e.setState({anchorEl:null})},children:[Object(B.jsxs)(C.a,{onClick:function(){return e.setState({anchorEl:null})},style:{fontFamily:"SourceSansPro-Regular"},children:[Object(B.jsx)(P.d,{size:20,style:{paddingRight:10}}),"Print Invoice"]}),Object(B.jsxs)(C.a,{onClick:function(){return e.setState({anchorEl:null})},style:{fontFamily:"SourceSansPro-Regular"},children:[Object(B.jsx)(k.h,{size:20,style:{paddingRight:10}}),"Cancel Order"]}),Object(B.jsxs)(C.a,{onClick:function(){return e.setState({anchorEl:null})},style:{fontFamily:"SourceSansPro-Regular"},children:[Object(B.jsx)(F.a,{size:20,style:{paddingRight:10}}),"Mark Completed"]}),Object(B.jsxs)(C.a,{onClick:function(){return e.setState({anchorEl:null})},style:{fontFamily:"SourceSansPro-Regular"},children:[Object(B.jsx)(R.b,{size:20,style:{paddingRight:10}}),"Reassign O&M"]})]})]})}}]),a}(i.Component),L=Object(s.b)((function(e){return{allProducts:e.products_reducers.allProducts,productBrands:e.products_reducers.productBrands,productCategories:e.products_reducers.productCategories,productInventories:e.products_reducers.productInventories}}))(Object(w.a)((function(e){return{root:{padding:e.spacing(4)},buttonVariant:{boxShadow:"0px 0px 0px 0px #E1E7ED",backgroundColor:"#57B78C",margin:"5px 0px",color:"#fff",borderRadius:8,fontSize:14,padding:"5px 20px",height:"fit-content",textTransform:"none",fontFamily:"SourceSansPro-Regular","&:hover":{backgroundColor:"#57B78C"}},card:{border:"1px solid #cccccc",boxShadow:"0px 0px 0px 0px rgba(0,0,0,0)",borderRadius:0,backgroundColor:"#fff"},tableHead:{backgroundColor:"rgba(240, 242, 244, 0.5)",boxShadow:"inset -1px 0px 0px rgba(198, 209, 221, 0.5)",position:"static",width:"168px",height:"48px",left:"0px",top:"0px"},tableRow:{padding:0,height:"35px",color:"#000000",fontSize:"13px",lineHeight:"20px",fontStyle:"normal",fontWeight:"normal"},tableCell:{fontSize:14,padding:"3px 10px",whiteSpace:"nowrap",fontFamily:"SourceSansPro-Regular"},tableCellTop:{fontSize:14,padding:"3px 10px",whiteSpace:"nowrap",fontFamily:"SourceSansPro-Regular",fontWeight:"600"},tableHeadCell:{padding:"10px 10px",fontSize:14,fontWeight:"600",color:"#7B8395",fontFamily:"SourceSansPro-Regular",backgroundColor:"rgba(240, 242, 244, 0.5)",boxShadow:"inset -1px 0px 0px rgba(198, 209, 221, 0.5)",left:"0px",top:"0px"},tableHeadLastCell:{padding:"10px 10px",fontSize:15,fontWeight:"600",color:"#000",backgroundColor:e.palette.primary.light,fontFamily:"SourceSansPro-Regular"},inputRoot:{backgroundColor:"#FFFFFF",borderRadius:"4px",fontSize:"13x !important","&:hover":{backgroundColor:"#FFFFFF"}},inputStyle:{fontFamily:"SourceSansPro-Regular !important",fontSize:"13x !important",padding:"5px !important",paddingRight:"32px !important",color:"#6E8CA8",opacity:1,"&&:after":{color:"#57B78C"}},inputDrawerRoot:{borderRadius:"8px",fontSize:"13x !important",fontFamily:"SourceSansPro-Regular",backgroundColor:"#FDFEFF",border:"1px solid #CFCFCE",boxSizing:"border-box",paddingRight:"16px","&:hover":{border:"1px solid #57B78C",backgroundColor:"#FFFFFF"}},inputDrawerStyle:{fontFamily:"SourceSansPro-Regulark !important",fontSize:"13x !important",padding:"10px !important",paddingRight:"32px !important",color:"#6E8CA8",opacity:1,"&&:after":{color:"#57B78C"}},underline:{"&&&:before":{borderBottom:"none"},"&&:after":{borderBottom:"none"}},tablePageRoot:{fontFamily:"SourceSansPro-Regular",display:"flex",justifyContent:"space-between",backgroundColor:"#FFFFFF",height:"48px",border:"1px solid #cccccc",left:"0px",right:"0px",bottom:"0px"},tablePageRow:{display:"flex",justifyContent:"space-between"},tablePagediv:{display:"flex",justifyContent:"space-between",padding:"5px 15px",borderRight:"1px solid #cccccc",alignItems:"center"},tablePagedivLast:{display:"flex",justifyContent:"space-between",padding:"5px 15px",borderRight:"1px solid #cccccc",borderLeft:"1px solid #cccccc",alignItems:"center"},tablePagedivBorder:{display:"flex",justifyContent:"space-between",padding:"5px 15px",borderRight:"1px solid #cccccc",borderLeft:"1px solid #cccccc",alignItems:"center"},iconButton:{padding:3,borderRadius:0},textRowPage:{fontSize:14,color:"#000",paddingRight:10,fontFamily:"SourceSansPro-Regular"},paper:{borderRadius:"8px",background:"#FFFFFF"},title:{textDecoration:"none",fontSize:"15px",fontWeight:"600",color:e.palette.common.black,fontFamily:"SourceSansPro-Regular"}}}))(D))}}]);
//# sourceMappingURL=12.dec9cde3.chunk.js.map