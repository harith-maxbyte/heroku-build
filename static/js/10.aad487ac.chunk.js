(this.webpackJsonpEnergyApp=this.webpackJsonpEnergyApp||[]).push([[10],{238:function(e,t,a){"use strict";t.a=a.p+"static/media/exportblack.63013d84.svg"},239:function(e,t,a){"use strict";t.a=a.p+"static/media/filterblack.00355919.svg"},240:function(e,t,a){"use strict";t.a=a.p+"static/media/export.c95b6dab.svg"},241:function(e,t,a){"use strict";t.a=a.p+"static/media/print.d7a7dfdf.svg"},242:function(e,t,a){"use strict";a.d(t,"d",(function(){return i})),a.d(t,"a",(function(){return l})),a.d(t,"h",(function(){return d})),a.d(t,"b",(function(){return u})),a.d(t,"f",(function(){return p})),a.d(t,"g",(function(){return b})),a.d(t,"e",(function(){return f})),a.d(t,"c",(function(){return h}));var n=a(10),r=a.n(n),s=a(18),c=a(14),o=a(64);function i(e,t){return function(){var a=Object(s.a)(r.a.mark((function a(n){return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:o.a.get("/GetProductDetails?Startdate=".concat(e,"&Enddate=").concat(t,"&ProductName=&ProductCategory=&ProductInventory=")).then(function(){var e=Object(s.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:!0===t.success&&n({type:c.p,data:t.result});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 1:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()}function l(e,t){return function(){var a=Object(s.a)(r.a.mark((function a(n){return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:o.a.postFormData("/AddProductDetails",t).then(function(){var t=Object(s.a)(r.a.mark((function t(a){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:!0===a.success?(e.props.history.push("/admin/products"),n({type:c.a,data:!0}),e.setState({loading:!1}),n({type:c.b,data:!0,message:"Product Added",severity:"success"})):!1===a.isSuccess&&(e.setState({loading:!1}),n({type:c.b,data:!0,message:a.message,severity:"error"}));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(t){e.setState({loading:!1}),n({type:c.b,data:!0,message:t.message,severity:"error"})}));case 1:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()}function d(e,t){return function(){var e=Object(s.a)(r.a.mark((function e(a){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:o.a.postFormData("/uploadEfficiencyProfile",t).then(function(){var e=Object(s.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:!0===t.success&&a({type:c.s,data:t.result});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}function u(e,t){return function(){var a=Object(s.a)(r.a.mark((function a(n){return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:o.a.get("/TopProductdetails?Startdate=".concat(e,"&Enddate=").concat(t)).then(function(){var e=Object(s.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:!0===t.success&&n({type:c.o,data:t.result});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 1:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()}function p(){return function(){var e=Object(s.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:o.a.get("/ProductCategory").then(function(){var e=Object(s.a)(r.a.mark((function e(a){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:!0===a.success&&t({type:c.v,data:a.result});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}function b(){return function(){var e=Object(s.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:o.a.get("/DropDown/GetDropDownList?Entity=Inventory").then(function(){var e=Object(s.a)(r.a.mark((function e(a){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:!0===a.isSuccess&&t({type:c.w,data:a.payload});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}function f(){return function(){var e=Object(s.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:o.a.get("/DropDown/GetDropDownList?Entity=Brands").then(function(){var e=Object(s.a)(r.a.mark((function e(a){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:!0===a.isSuccess&&t({type:c.t,data:a.payload});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}function h(e,t){return function(){var a=Object(s.a)(r.a.mark((function a(n){return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:o.a.get("/productBrandSegment?Startdate=".concat(e,"&Enddate=").concat(t)).then(function(){var e=Object(s.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:!0===t.success&&n({type:c.u,data:t.result});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 1:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()}},245:function(e,t,a){"use strict";a.d(t,"a",(function(){return f}));var n=a(36),r=a(37),s=a(38),c=a(39),o=a(0),i=a(264),l=a.n(i),d=a(215),u=a(261),p=a(3),b={content:{top:"50%",left:"50%",width:"30%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)"}},f=function(e){Object(s.a)(a,e);var t=Object(c.a)(a);function a(e){var r;return Object(n.a)(this,a),(r=t.call(this,e)).handleDate=function(e){"from"===e.target.name?r.setState({fromDate:e.target.value}):r.setState({toDate:e.target.value})},r.handleClose=function(){r.props.cancel()},r.handleSuccess=function(){console.log(r.state.fromDate,r.state.toDate),r.state.fromDate<r.state.toDate?r.props.handelopen(r.state.fromDate,r.state.toDate):r.setState({error:"End date should be greater than start date"})},r.state={fromDate:r.props.fromDate,toDate:r.props.toDate,error:""},r}return Object(r.a)(a,[{key:"render",value:function(){return Object(p.jsx)("div",{children:Object(p.jsxs)(l.a,{style:b,isOpen:this.props.isOpen,ariaHideApp:!1,children:[Object(p.jsx)("div",{style:{marginBottom:"5%",fontWeight:"700"},children:"Select Custom Date"}),Object(p.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[Object(p.jsxs)("div",{children:[Object(p.jsx)("label",{children:"Start Date"}),Object(p.jsx)("br",{}),Object(p.jsx)(d.a,{type:"date",value:this.state.fromDate,onChange:this.handleDate,name:"from"})]}),Object(p.jsxs)("div",{children:[Object(p.jsx)("label",{children:"End Date"}),Object(p.jsx)("br",{}),Object(p.jsx)(d.a,{type:"date",value:this.state.toDate,onChange:this.handleDate,name:"to"})]})]}),Object(p.jsx)("p",{style:{textAlign:"center",padding:"2%",color:"red"},children:this.state.error}),Object(p.jsxs)("div",{style:{display:"flex",justifyContent:"flex-end"},children:[Object(p.jsx)(u.a,{style:{width:"20%",background:"#EB7676"},onClick:this.handleClose,children:"Cancel"}),Object(p.jsx)(u.a,{style:{width:"20%",background:"#90ee90",marginLeft:"5%"},onClick:this.handleSuccess,children:"Apply"})]})]})})}}]),a}(o.Component)},635:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return H}));var n=a(36),r=a(37),s=a(38),c=a(39),o=a(0),i=a(30),l=a(532),d=a(62),u=a(227),p=a(261),b=a(265),f=a(551),h=a(617),g=a(618),j=a(619),x=a(620),m=a(621),y=a(622),O=a(216),S=a(214),C=a(629),v=a(119),P=a(378),F=a(7),w=a(250),k=a(314),R=a(255),D=a(44),z=a(256),B=a(242),A=a(312),N=a(238),I=a(239),L=a(240),E=a(241),T=a(245),M=a(3),_=function(e){Object(s.a)(a,e);var t=Object(c.a)(a);function a(e){var r;return Object(n.a)(this,a),(r=t.call(this,e)).handleChangePage=function(e,t){"LEFT"===e?r.state.page>0&&r.setState({page:r.state.page-1}):t>(r.state.page+1)*r.state.rowsPerPage&&r.setState({page:r.state.page+1})},r.activePage=function(e,t){if("LEFT"===e){if(0===r.state.page)return!1}else if(t<=(r.state.page+1)*r.state.rowsPerPage)return!1;return!0},r.handleClick=function(e){r.setState({anchorEl:e.currentTarget})},r.selectAll=function(e){var t=r.props.allProducts;!0===e.target.checked&&r.setState({selected_products:!1===r.state.select_all?t:[],select_all:!r.state.select_all}),!1===e.target.checked&&r.setState({selected_products:!1===r.state.select_all?t:[],select_all:!r.state.select_all})},r.selectProducts=function(e,t){!0===e.target.checked&&r.setState({selected_products:r.state.selected_products.concat(t)}),!1===e.target.checked&&r.setState({selected_products:r.state.selected_products.filter((function(e){return e!==t}))})},r.handleChangeRowsPerPage=function(e){r.setState({rowsPerPage:e.target.value})},r.ChangeDateFormat=function(e){var t=e.split("T")[0].split("-"),a=new Date(t[0],t[1]-1,t[2]).toLocaleString("default",{month:"short"});return t[2]+" "+a+" "+t[0]},r.returnTotalPages=function(e){return e>=r.state.rowsPerPage?Math.ceil(e/r.state.rowsPerPage):1},r.returnColor=function(e){var t="#000000";switch(e){case"IS":t="#000000";break;case"Limited":case"Videocon AC":case"Voltas AC":case"Whirlpool AC":case"Blue Star AC":case"BPL AC":case"Daikin AC":case"Haier AC":case"IFB AC":case"Intex AC":case"Sansui AC":case"Smart Ac":t="#F3852A";break;case"OS":t="#E55562";break;case"Vestar AC":case"MarQ AC":t="#7FDBFF";break;case"Trane AC":case"Koryo AC":t="#0074D9";break;case"White Westinghouse AC":case"O General AC":t="#85144b";break;case"Carrier AC":t="#0000FF";break;case"Croma AC":case"Product 1":t="#FF69B4";break;case"Godrej AC":t="#008000";break;case"Hitachi AC":t="#B22222";break;case"Hyundai AC":t="#FFFACD";break;case"LG AC":t="#2ECC40";break;case"Lloyd AC":t="#FF851B";break;case"Micromax AC":t="#B10DC9";break;case"Midea AC":t="#FFDC00";break;case"Mitashi AC":t="#001f3f";break;case"Mitchubisi":t="#39CCCC";break;case"Mitsubishi AC":t="#01FF70";break;case"Onida AC":t="#F012BE";break;case"Panasonic AC":t="#3D9970";break;case"Product 2":t="#AAAAAA";break;case"Product New":t="#EB7676";break;case"Samsung AC":t="#FEC9B4";break;case"test":t="#57B78C";break;case"Toshiba AC":t="#5EC8E6"}return t},r.returnPiechart=function(e){if(console.log("productsBrandSegmentationPie=",e),e.length>0){var t=[],a=[],n=[],s=[];e.map((function(e){return a.push(e.count),n.push(e.ProductName),s.push(e.ProductName),""}));for(var c=0;c<a.length;c++)t.push({id:s[c],label:n[c],value:a[c]});return Object(M.jsxs)(M.Fragment,{children:[Object(M.jsx)("h3",{style:{display:"flex",alignItems:"center",color:"#000",fontWeight:"600",fontSize:18,paddingLeft:12,fontFamily:"SourceSansPro-SemiBold"},children:"Brand segmentation"}),Object(M.jsx)("div",{style:{width:600,height:400},children:Object(M.jsx)(k.a,{data:t,margin:{top:20,right:80,bottom:80,left:20},innerRadius:0,padAngle:.7,cornerRadius:3,activeOuterRadiusOffset:8,borderWidth:1,borderColor:{from:"color",modifiers:[["darker",.2]]},arcLinkLabelsSkipAngle:10,arcLinkLabelsTextColor:"#616060",arcLinkLabelsThickness:2,enableArcLabels:!1,arcLinkLabelsColor:{from:"color"},arcLabelsSkipAngle:10,arcLinkLabel:function(e){return e.value+"%"},arcLabelsTextColor:{from:"color",modifiers:[["darker",2]]},colors:function(e){return r.returnColor(e.label)},tooltip:function(e){var t=e.datum,a=(t.id,t.value),n=(t.color,t.label);return Object(M.jsx)("div",{style:{display:"table",maxWidth:"50%",background:"#1B1B1B",color:"#FFFFFF",borderRadius:"8px",padding:"4px",fontFamily:"SourceSansPro-SemiBold",fontStyle:"normal",fontSize:"14px",fontWeight:600,textAlign:"center",lineHeight:"20px"},children:n+":"+a})},theme:{tooltip:{container:{background:"#333"}}},legends:[{anchor:"right",direction:"column",justify:!1,translateX:90,translateY:60,itemsSpacing:10,itemWidth:100,itemHeight:18,overflowX:"auto",itemTextColor:"#777A7F",itemDirection:"left-to-right",itemOpacity:1,symbolSize:10,symbolShape:"circle",navigation:{activeColor:"#003399",animation:"true",arrowSize:"12",enabled:"true",inactiveColor:"#cccccc",style:void 0},effects:[{on:"hover",style:{itemTextColor:"#000"}}]}]})})]})}},r.initialProductLoad=function(){var e=new Date,t=new Date(e.getTime()-6048e5),a=t.getDate(),n=t.getMonth()+1,s=t.getFullYear()+"-"+n+"-"+a,c=e.getDate(),o=e.getMonth()+1,i=e.getFullYear()+"-"+o+"-"+c;r.props.dispatch(Object(B.d)(s,i)),r.props.dispatch(Object(B.b)(s,i)),r.props.dispatch(Object(B.c)(s,i))},r.filterOption=function(e){var t=new Date,a=new Date(t.getTime()-24*e*60*60*1e3),n=a.getDate(),r=a.getMonth()+1,s=a.getFullYear()+"-"+r+"-"+n,c=t.getDate(),o=t.getMonth()+1,i=t.getFullYear()+"-"+o+"-"+c;return"Last ".concat(e," days Orders (").concat(s," to ").concat(i,")")},r.selectFilterOptions=function(e){r.setState({val:e.target.value});var t=parseInt(e.target.value);if(7===t||30===t){var a=new Date,n=new Date(a.getTime()-24*t*60*60*1e3),s=n.getDate(),c=n.getMonth()+1,o=n.getFullYear()+"-"+c+"-"+s,i=a.getDate(),l=a.getMonth()+1,d=a.getFullYear()+"-"+l+"-"+i;r.props.dispatch(Object(B.d)(o,d)),r.props.dispatch(Object(B.b)(o,d)),r.props.dispatch(Object(B.c)(o,d)),r.setState({startDate:"",endDate:""})}else r.setState({enableCustomModal:!0,val:t})},r.handleCloseCustomModel=function(){r.setState({enableCustomModal:!r.state.enableCustomModal})},r.changeCustomDate=function(){console.log("comes true"),r.setState({enableCustomModal:!0})},r.handleOpenCustomModel=function(e,t){r.setState({startDate:e,endDate:t,enableCustomModal:!r.state.enableCustomModal}),r.props.dispatch(Object(B.d)(e,t)),r.props.dispatch(Object(B.b)(e,t)),r.props.dispatch(Object(B.c)(e,t))},r.state={page:0,rowsPerPage:5,selected_prdouct_category:"",selected_prdouct_inventory:"",selected_prdouct_brand:"",selected_products:[],select_all:!1,val:7,enableListView:!1,startDate:"",endDate:"",enableCustomModal:!1},r}return Object(r.a)(a,[{key:"componentDidMount",value:function(){this.initialProductLoad()}},{key:"render",value:function(){var e=this,t=this.props,a=t.classes,n=t.allProducts,r=t.popularProducts,s=t.productsBrandSegmentationPie,c=this.state,o=c.rowsPerPage,i=c.page;return console.log("popularProducts=",r),Object(M.jsxs)("div",{className:a.root,children:[this.state.enableCustomModal&&Object(M.jsx)(T.a,{isOpen:this.state.enableCustomModal,fromDate:this.state.startDate,toDate:this.state.endDate,handelopen:this.handleOpenCustomModel,cancel:this.handleCloseCustomModel}),Object(M.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",boxSizing:"border-box",borderRadius:"8px",order:"1",flexGrow:"0",margin:"8px 0px"},children:[Object(M.jsxs)(l.a,{separator:Object(M.jsx)(D.b,{size:15}),"aria-label":"breadcrumb",style:{color:"#9F9E9E",left:"29.21%",right:"26.03%",top:"10.88%",bottom:"10.93%"},children:[Object(M.jsx)(d.a,{onClick:function(){return e.setState({enableListView:!1})},style:{fontFamily:"SourceSansPro-Regular",color:"#616060",cursor:"pointer",fontSize:18,fontWeight:600,width:"74px",height:"20px",fonttyle:"normal",lineHeight:"20px"},color:"primary",children:"Overview"}),this.state.enableListView&&Object(M.jsx)(d.a,{style:{fontFamily:"SourceSansPro-Regular",fontSize:15,fontWeight:"600",lineHeight:"20px",width:"53px",height:"20px"},color:"textPrimary",children:"Products"})]}),Object(M.jsxs)("div",{style:{display:"flex",marginBottom:13},children:[Object(M.jsxs)(u.a,{style:{margin:5},variant:"filled",value:this.state.val,InputProps:{classes:{input:a.inputDrawerStyle,underline:a.underline,root:a.inputDrawerRoot}},select:!0,onChange:this.selectFilterOptions,SelectProps:{native:!0},children:[Object(M.jsx)("option",{value:"7",style:{fontFamily:"SourceSansPro-Regular"},children:this.filterOption(7)}),Object(M.jsx)("option",{value:"30",style:{fontFamily:"SourceSansPro-Regular"},children:this.filterOption(30)}),Object(M.jsx)("option",{value:"0",style:{fontFamily:"SourceSansPro-Regular"},children:"Custom date"})]}),Object(M.jsxs)(p.a,{variant:"contained",className:a.buttonVariant,onClick:function(){return e.props.history.push("/admin/products/add")},children:[Object(M.jsx)(R.a,{size:13,style:{paddingRight:5}})," New Product"]})]})]}),"0"===this.state.val&&Object(M.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"flex-end",fontSize:"14px",marginBottom:"2%"},children:[this.state.startDate," to ",this.state.endDate," ",Object(M.jsx)("span",{style:{color:"blue",fontSize:"12px",marginLeft:"4%",cursor:"pointer"},onClick:this.changeCustomDate,children:"Change"})]}),Object(M.jsxs)(b.a,{container:!0,spacing:4,children:[!this.state.enableListView&&Object(M.jsx)(b.a,{item:!0,xs:12,md:5,children:Object(M.jsxs)(f.a,{className:a.card,style:{boxShadow:"none",height:"100%"},children:[Object(M.jsx)(d.a,{style:{display:"flex",alignItems:"center",color:"#000",fontWeight:"600",fontSize:18,paddingTop:20,paddingLeft:20,paddingBottom:8,fontFamily:"SourceSansPro-SemiBold"},children:"Popular Products"}),Object(M.jsx)("div",{style:{padding:10},children:Object(M.jsxs)(h.a,{children:[Object(M.jsx)(g.a,{children:Object(M.jsxs)(j.a,{children:[Object(M.jsx)(x.a,{align:"left",style:{fontSize:14,fontFamily:"SourceSansPro-SemiBold",fontWeight:"600",letterSpacing:"0.05em",lineHeight:"20px",color:"#7B8395",padding:5,textTransform:"uppercase",fontStyle:"normal"},children:"Product Name"}),Object(M.jsx)(x.a,{align:"left",style:{fontSize:14,fontFamily:"SourceSansPro-SemiBold",fontWeight:"600",letterSpacing:"0.05em",lineHeight:"20px",color:"#7B8395",padding:5,textTransform:"uppercase",fontStyle:"normal"},children:"Volume"}),Object(M.jsx)(x.a,{align:"left",style:{fontSize:14,fontFamily:"SourceSansPro-SemiBold",fontWeight:"600",letterSpacing:"0.05em",lineHeight:"20px",color:"#7B8395",padding:5,textTransform:"uppercase",fontStyle:"normal"},children:"Selling Price"})]})}),Object(M.jsx)(m.a,{children:r.map((function(e,t){return Object(M.jsxs)(j.a,{className:a.tableRow,hover:!0,children:[Object(M.jsx)(x.a,{className:a.tableCellTop,children:e.ProductName}),Object(M.jsx)(x.a,{className:a.tableCellTop,children:100===Number(e.ProductSalesPercentage)?Number(e.ProductSalesPercentage).toFixed(0)+"%":Number(e.ProductSalesPercentage).toFixed(1)+"%"}),Object(M.jsxs)(x.a,{className:a.tableCellTop,children:["S$",e.Sales.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1,")]})]},t.toString())}))})]})})]})}),!this.state.enableListView&&Object(M.jsx)(b.a,{item:!0,xs:12,md:7,children:Object(M.jsx)(f.a,{className:a.card,children:this.returnPiechart(s)})}),Object(M.jsx)(b.a,{item:!0,xs:12,children:Object(M.jsxs)(y.a,{component:O.a,className:a.paper,children:[this.state.selected_products.length>0&&Object(M.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",backgroundColor:"#000",borderRadius:"8px 8px 0px 0px"},children:[Object(M.jsx)("div",{children:Object(M.jsxs)(d.a,{style:{alignItems:"center",paddingLeft:15,fontSize:15,color:"#fff",fontFamily:"SourceSansPro-Regular"},children:[" ",this.state.selected_products.length," items selected"]})}),Object(M.jsxs)("div",{style:{display:"flex",alignItems:"center",marginRight:"10px"},children:[Object(M.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[Object(M.jsx)("img",{src:L.a,alt:"exportsvg",size:35,style:{cursor:"pointer"},role:"button"}),Object(M.jsx)(d.a,{style:{alignItems:"center",fontSize:15,margin:"0px 5px",color:"#fff",fontFamily:"SourceSansPro-Regular"},children:" Export"})]}),Object(M.jsxs)("div",{style:{display:"flex",alignItems:"center",margin:"0px 15px"},children:[Object(M.jsx)("img",{src:E.a,alt:"print",size:15,style:{cursor:"pointer"},role:"button"}),Object(M.jsx)(d.a,{style:{alignItems:"center",fontSize:15,margin:"0px 5px",color:"#fff",fontFamily:"SourceSansPro-Regular"},children:" Print"})]}),Object(M.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[Object(M.jsx)(d.a,{style:{alignItems:"center",fontSize:15,margin:"0px 0px",color:"#fff",fontFamily:"SourceSansPro-Regular"},children:" More"}),Object(M.jsx)(S.a,{children:Object(M.jsx)(D.a,{size:15,color:"#fff"})})]}),Object(M.jsx)("div",{style:{borderLeft:"1px solid #666666",height:30}}),Object(M.jsx)("div",{style:{display:"flex",alignItems:"center"},children:Object(M.jsx)(d.a,{style:{alignItems:"center",fontSize:15,margin:"0px 5px",color:"#fff",fontFamily:"SourceSansPro-Regular"},children:" Cancel"})})]})]}),Object(M.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"flex-end",backgroundColor:"#fff"},children:[Object(M.jsxs)("div",{style:{display:"flex",alignItems:"center",paddingRight:"20px"},children:[Object(M.jsx)("img",{src:N.a,alt:"exportblacksvg",size:35,style:{cursor:"pointer"},role:"button"}),Object(M.jsx)(d.a,{style:{alignItems:"center",fontSize:15,fontFamily:"SourceSansPro-Regular",paddingLeft:5},children:" Export"})]}),Object(M.jsxs)("div",{style:{display:"flex",alignItems:"center",marginRight:10},children:[Object(M.jsx)("img",{src:I.a,alt:"filterblack",size:15,style:{cursor:"pointer"},role:"button"}),Object(M.jsx)(d.a,{style:{alignItems:"center",fontSize:15,fontFamily:"SourceSansPro-Regular"},children:"  Filter"})]}),Object(M.jsx)("div",{style:{borderLeft:"1px solid #666666",height:30}}),Object(M.jsx)("div",{style:{display:"flex",alignItems:"center"},children:Object(M.jsx)(S.a,{onClick:function(){return e.setState({enableListView:!e.state.enableListView})},children:Object(M.jsx)(A.a,{size:20,style:{padding:"5px 10px"}})})})]}),Object(M.jsxs)(h.a,{className:a.card,children:[Object(M.jsx)(g.a,{className:a.tableHead,children:Object(M.jsxs)(j.a,{children:[Object(M.jsx)(x.a,{align:"left",className:a.tableHeadCell,children:Object(M.jsx)(C.a,{color:"primary",onClick:function(t){return e.selectAll(t)},checked:n.length===this.state.selected_products.length,inputProps:{"aria-label":"primary checkbox"}})}),Object(M.jsx)(x.a,{align:"left",className:a.tableHeadCell,children:Object(M.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[Object(M.jsx)(d.a,{style:{fontSize:15,fontWeight:"600",color:"#7B8395",fontFamily:"SourceSansPro-Regular",textTransform:"uppercase"},children:"Model Number "}),Object(M.jsxs)("div",{style:{display:"grid",justifyContent:"space-between"},children:[Object(M.jsx)(D.c,{size:14}),Object(M.jsx)(D.a,{size:14})]})]})}),Object(M.jsx)(x.a,{align:"left",className:a.tableHeadCell,children:Object(M.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[Object(M.jsx)(d.a,{style:{fontSize:15,fontWeight:"600",color:"#7B8395",fontFamily:"SourceSansPro-Regular",textTransform:"uppercase"},children:"Brand "}),Object(M.jsxs)("div",{style:{display:"grid",justifyContent:"space-between"},children:[Object(M.jsx)(D.c,{size:14}),Object(M.jsx)(D.a,{size:14})]})]})}),Object(M.jsx)(x.a,{align:"left",className:a.tableHeadCell,children:Object(M.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[Object(M.jsx)(d.a,{style:{fontSize:15,fontWeight:"600",color:"#7B8395",fontFamily:"SourceSansPro-Regular",textTransform:"uppercase"},children:"Category "}),Object(M.jsxs)("div",{style:{display:"grid",justifyContent:"space-between"},children:[Object(M.jsx)(D.c,{size:14}),Object(M.jsx)(D.a,{size:14})]})]})}),Object(M.jsx)(x.a,{align:"left",className:a.tableHeadCell,children:Object(M.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[Object(M.jsx)(d.a,{style:{fontSize:15,fontWeight:"600",color:"#7B8395",fontFamily:"SourceSansPro-Regular",textTransform:"uppercase"},children:"Quantity "}),Object(M.jsxs)("div",{style:{display:"grid",justifyContent:"space-between"},children:[Object(M.jsx)(D.c,{size:14}),Object(M.jsx)(D.a,{size:14})]})]})}),Object(M.jsx)(x.a,{align:"left",className:a.tableHeadCell,children:Object(M.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[Object(M.jsx)(d.a,{style:{fontSize:15,fontWeight:"600",color:"#7B8395",fontFamily:"SourceSansPro-Regular",textTransform:"uppercase"},children:"Price "}),Object(M.jsxs)("div",{style:{display:"grid",justifyContent:"space-between"},children:[Object(M.jsx)(D.c,{size:14}),Object(M.jsx)(D.a,{size:14})]})]})}),Object(M.jsx)(x.a,{align:"left",className:a.tableHeadCell,children:Object(M.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[Object(M.jsx)(d.a,{style:{fontSize:15,fontWeight:"600",color:"#7B8395",fontFamily:"SourceSansPro-Regular",textTransform:"uppercase"},children:"Date Added "}),Object(M.jsxs)("div",{style:{display:"grid",justifyContent:"space-between"},children:[Object(M.jsx)(D.c,{size:14}),Object(M.jsx)(D.a,{size:14})]})]})}),Object(M.jsx)(x.a,{align:"left",className:a.tableHeadCell,style:{textTransform:"uppercase"},children:"Inventory"}),Object(M.jsx)(x.a,{align:"left",className:a.tableHeadCell})]})}),Object(M.jsx)(m.a,{children:n.slice(i*o,i*o+o).map((function(t,n){return Object(M.jsxs)(j.a,{className:a.tableRow,hover:!0,children:[Object(M.jsx)(x.a,{className:a.tableCell,children:Object(M.jsx)(C.a,{color:"primary",checked:e.state.selected_products.includes(t),onClick:function(a){return e.selectProducts(a,t)},inputProps:{"aria-label":"primary checkbox"}})}),Object(M.jsx)(x.a,{className:a.tableCell,children:t.ProductCode}),Object(M.jsx)(x.a,{className:a.tableCell,children:t.ProductName}),Object(M.jsx)(x.a,{className:a.tableCell,children:t.ProductCategory}),Object(M.jsx)(x.a,{className:a.tableCell,children:t.Quantity}),Object(M.jsxs)(x.a,{className:a.tableCell,children:["$",t.Price]}),Object(M.jsx)(x.a,{className:a.tableCell,children:e.ChangeDateFormat(t.CreatedOn)}),Object(M.jsxs)(x.a,{className:a.tableCell,style:{color:e.returnColor(t.ProductInventory),fontWeight:"600"},children:["IS"===t.ProductInventory?"In stock":"Out of stock","IS"!==t.ProductInventory&&"OS"!==t.ProductInventory?"Limited":""]}),Object(M.jsx)(x.a,{className:a.tableCell,children:Object(M.jsx)(S.a,{"aria-controls":"simple-menu","aria-haspopup":"true",onClick:function(t){return e.handleClick(t)},children:Object(M.jsx)(z.b,{size:20})})})]},n.toString())}))})]}),Object(M.jsxs)("div",{className:a.tablePageRoot,children:[Object(M.jsxs)("div",{className:a.tablePageRow,children:[Object(M.jsxs)("div",{className:a.tablePagediv,children:[Object(M.jsx)(d.a,{className:a.textRowPage,children:"Items per page :"}),Object(M.jsxs)(u.a,{variant:"filled",value:this.state.rowsPerPage,onChange:function(t){return e.handleChangeRowsPerPage(t)},InputProps:{classes:{input:a.inputStyle,underline:a.underline,root:a.inputRoot}},select:!0,SelectProps:{native:!0},children:[Object(M.jsx)("option",{value:5,style:{fontFamily:"SourceSansPro-Regular"},children:"5"}),Object(M.jsx)("option",{value:15,style:{fontFamily:"SourceSansPro-Regular"},children:"15"}),Object(M.jsx)("option",{value:25,style:{fontFamily:"SourceSansPro-Regular"},children:"25"})]})]}),Object(M.jsx)("div",{className:a.tablePagediv,children:Object(M.jsxs)(d.a,{style:{fontFamily:"SourceSansPro-Regular"},children:[i*o+1," - ",o>n.length?n.length:(i+1)*o," of ",n.length," items"]})})]}),Object(M.jsxs)("div",{className:a.tablePageRow,children:[Object(M.jsx)("div",{className:a.tablePagedivBorder,children:Object(M.jsxs)(d.a,{style:{fontFamily:"SourceSansPro-Regular"},children:[i+1,"  of ",this.returnTotalPages(n.length)," pages"]})}),Object(M.jsx)("div",{className:a.tablePagediv,children:Object(M.jsx)(S.a,{className:a.iconButton,disabled:!this.activePage("LEFT",n.length),onClick:function(){return e.handleChangePage("LEFT",n.length)},children:Object(M.jsx)(w.b,{size:20,color:this.activePage("LEFT",n.length)?"#666666":"#cccccc"})})}),Object(M.jsx)("div",{className:a.tablePagedivLast,children:Object(M.jsx)(S.a,{className:a.iconButton,disabled:!this.activePage("RIGHT",n.length),onClick:function(){return e.handleChangePage("RIGHT",n.length)},children:Object(M.jsx)(w.c,{size:20,color:this.activePage("RIGHT",n.length)?"#666666":"#cccccc"})})})]})]})]})})]}),Object(M.jsxs)(v.a,{id:"simple-menu",anchorEl:this.state.anchorEl,keepMounted:!0,open:Boolean(this.state.anchorEl),onClose:function(){return e.setState({anchorEl:null})},children:[Object(M.jsxs)(P.a,{onClick:function(){return e.setState({anchorEl:null})},style:{fontFamily:"SourceSansPro-Regular"},children:[Object(M.jsx)(w.d,{size:20,style:{paddingRight:10}}),"Print Invoice"]}),Object(M.jsxs)(P.a,{onClick:function(){return e.setState({anchorEl:null})},style:{fontFamily:"SourceSansPro-Regular"},children:[Object(M.jsx)(D.h,{size:20,style:{paddingRight:10}}),"Cancel Order"]}),Object(M.jsxs)(P.a,{onClick:function(){return e.setState({anchorEl:null})},style:{fontFamily:"SourceSansPro-Regular"},children:[Object(M.jsx)(z.a,{size:20,style:{paddingRight:10}}),"Mark Completed"]}),Object(M.jsxs)(P.a,{onClick:function(){return e.setState({anchorEl:null})},style:{fontFamily:"SourceSansPro-Regular"},children:[Object(M.jsx)(R.b,{size:20,style:{paddingRight:10}}),"Reassign O&M"]})]})]})}}]),a}(o.Component),H=Object(i.b)((function(e){return{allProducts:e.products_reducers.allProducts,popularProducts:e.products_reducers.popularProducts,productBrands:e.products_reducers.productBrands,productCategories:e.products_reducers.productCategories,productInventories:e.products_reducers.productInventories,productsBrandSegmentationPie:e.products_reducers.productsBrandSegmentationPie}}))(Object(F.a)((function(e){return{root:{padding:e.spacing(4)},buttonVariant:{boxShadow:"0px 0px 0px 0px #E1E7ED",backgroundColor:"#57B78C",margin:"5px 0px",color:"#fff",borderRadius:8,fontSize:14,padding:"5px 20px",height:"fit-content",textTransform:"none",fontFamily:"SourceSansPro-Regular","&:hover":{backgroundColor:"#57B78C"}},card:{boxShadow:"0px 0px 0px 0px rgba(0,0,0,0)",background:"#FFFFFF",border:"1px solid #E1E0E0",boxSizing:"border-box",borderRadius:"8px"},tableHead:{backgroundColor:"rgba(240, 242, 244, 0.5)",boxShadow:"inset -1px 0px 0px rgba(198, 209, 221, 0.5)",position:"static",width:"168px",height:"48px",left:"0px",top:"0px"},tableRow:{padding:0,height:"35px",color:"#000000",fontSize:"13px",lineHeight:"20px",fontStyle:"normal",fontWeight:"normal"},tableCell:{fontSize:14,padding:"3px 10px",whiteSpace:"nowrap",fontFamily:"SourceSansPro-Regular"},tableCellTop:{fontSize:14,padding:"3px 10px",whiteSpace:"nowrap",fontFamily:"SourceSansPro-Regular",fontWeight:"600"},tableHeadCell:{padding:"10px 10px",fontSize:14,fontWeight:"600",color:"#7B8395",fontFamily:"SourceSansPro-Regular",backgroundColor:"rgba(240, 242, 244, 0.5)",boxShadow:"inset -1px 0px 0px rgba(198, 209, 221, 0.5)",left:"0px",top:"0px"},tableHeadLastCell:{padding:"10px 10px",fontSize:15,fontWeight:"600",color:"#000",backgroundColor:e.palette.primary.light,fontFamily:"SourceSansPro-Regular"},inputRoot:{backgroundColor:"#FFFFFF",borderRadius:"4px",fontSize:"13x !important","&:hover":{backgroundColor:"#FFFFFF"}},inputStyle:{fontFamily:"SourceSansPro-Regular !important",fontSize:"13x !important",padding:"5px !important",paddingRight:"32px !important",color:"#6E8CA8",opacity:1,"&&:after":{color:"#57B78C"}},inputDrawerRoot:{backgroundColor:"#FFFFFF",border:"1px solid #E1E7ED",borderRadius:"4px",fontSize:"13x !important",fontFamily:"SourceSansPro-Regular","&:hover":{border:"1px solid #57B78C",backgroundColor:"#FFFFFF"}},inputDrawerStyle:{fontFamily:"SourceSansPro-Regulark !important",fontSize:"13x !important",padding:"10px !important",paddingRight:"32px !important",color:"#6E8CA8",opacity:1,"&&:after":{color:"#57B78C"}},underline:{"&&&:before":{borderBottom:"none"},"&&:after":{borderBottom:"none"}},tablePageRoot:{fontFamily:"SourceSansPro-Regular",display:"flex",justifyContent:"space-between",backgroundColor:"#FFFFFF",height:"48px",border:"1px solid #cccccc",left:"0px",right:"0px",bottom:"0px"},tablePageRow:{display:"flex",justifyContent:"space-between"},tablePagediv:{display:"flex",justifyContent:"space-between",padding:"5px 15px",borderRight:"1px solid #cccccc",alignItems:"center"},tablePagedivLast:{display:"flex",justifyContent:"space-between",padding:"5px 15px",borderRight:"1px solid #cccccc",alignItems:"center"},tablePagedivBorder:{display:"flex",justifyContent:"space-between",padding:"5px 15px",borderRight:"1px solid #cccccc",borderLeft:"1px solid #cccccc",alignItems:"center"},iconButton:{padding:3,borderRadius:0},textRowPage:{fontSize:14,color:"#000",paddingRight:10,fontFamily:"SourceSansPro-Regular"},paper:{borderRadius:"8px",background:"#FFFFFF"},title:{textDecoration:"none",fontSize:"15px",fontWeight:"600",color:e.palette.common.black,fontFamily:"SourceSansPro-Regular"}}}))(_))}}]);
//# sourceMappingURL=10.aad487ac.chunk.js.map