(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[17],{"1XEM":function(e,t,a){e.exports={tagCloud:"tagCloud___Blez5"}},3:function(e,t){},CIdX:function(e,t,a){e.exports={waterWave:"waterWave___hvLJA",text:"text___3asSo",waterWaveCanvasWrapper:"waterWaveCanvasWrapper___2ndFj"}},"H+7v":function(e,t,a){e.exports={activeChart:"activeChart___15gpK",activeChartGrid:"activeChartGrid___3PL4c",activeChartLegend:"activeChartLegend___2Ieyc",dashedLine:"dashedLine___2fgZX",line:"line___2cxqk"}},Wnft:function(e,t,a){e.exports={mapChart:"mapChart___4fQJB",pieCard:"pieCard___1ETZj"}},a5Wf:function(e,t,a){"use strict";a.r(t);a("IzEo");var n=a("bx4M"),i=(a("14J3"),a("BMrR")),r=(a("jCWc"),a("kPKH")),o=a("fWQN"),s=a("mtLc"),c=a("yKVA"),l=a("879j"),d=(a("aHsQ"),a("sGsY")),h=a("9kvl"),u=a("q1tI"),j=a.n(u),p=a("FRQA"),f=a("ZhIB"),v=a.n(f),m=a("yP6+"),b=a("k1fw"),x=a("nKUr");function g(e){var t=e.style;t.height="100%";var a=parseInt("".concat(getComputedStyle(e).height),10),n=parseInt("".concat(getComputedStyle(e).paddingTop),10)+parseInt("".concat(getComputedStyle(e).paddingBottom),10);return a-n}function O(e){if(!e)return 0;var t=e,a=g(t),n=t.parentNode;return n&&(a=g(n)),a}function y(){return function(e){var t=function(t){Object(c["a"])(n,t);var a=Object(l["a"])(n);function n(){var e;Object(o["a"])(this,n);for(var t=arguments.length,i=new Array(t),r=0;r<t;r++)i[r]=arguments[r];return e=a.call.apply(a,[this].concat(i)),e.state={computedHeight:0},e.root=null,e.handleRoot=function(t){e.root=t},e}return Object(s["a"])(n,[{key:"componentDidMount",value:function(){var e=this.props.height;if(!e&&this.root){var t=O(this.root);this.setState({computedHeight:t}),t<1&&(t=O(this.root),this.setState({computedHeight:t}))}}},{key:"render",value:function(){var t=this.props.height,a=this.state.computedHeight,n=t||a;return Object(x["jsx"])("div",{ref:this.handleRoot,children:n>0&&Object(x["jsx"])(e,Object(b["a"])(Object(b["a"])({},this.props),{},{height:n}))})}}]),n}(j.a.Component);return t}}var _=y,k=m["Guide"].Arc,C=m["Guide"].Html,w=m["Guide"].Line,S=function(e){switch(e){case"2":return"\u5dee";case"4":return"\u4e2d";case"6":return"\u826f";case"8":return"\u4f18";default:return""}};m["Shape"].registerShape&&m["Shape"].registerShape("point","pointer",{drawShape:function(e,t){var a=e.points[0];a=this.parsePoint(a);var n=this.parsePoint({x:0,y:0});return t.addShape("line",{attrs:{x1:n.x,y1:n.y,x2:a.x,y2:a.y,stroke:e.color,lineWidth:2,lineCap:"round"}}),t.addShape("circle",{attrs:{x:n.x,y:n.y,r:6,stroke:e.color,lineWidth:3,fill:"#fff"}})}});var M=function(e){var t=e.title,a=e.height,n=void 0===a?1:a,i=e.percent,r=e.forceFit,o=void 0===r||r,s=e.formatter,c=void 0===s?S:s,l=e.color,d=void 0===l?"#2F9CFF":l,h=e.bgColor,u=void 0===h?"#F0F2F5":h,j={value:{type:"linear",min:0,max:10,tickCount:6,nice:!0}},p=[{value:i/10}],f=function(){return'\n  <div style="width: 300px;text-align: center;font-size: 12px!important;">\n    <div style="font-size: 14px; color: rgba(0,0,0,0.43);margin: 0;">'.concat(t,'</div>\n    <div style="font-size: 24px;color: rgba(0,0,0,0.85);margin: 0;">\n      ').concat((10*p[0].value).toFixed(2),"%\n    </div>\n  </div>")},v={fontSize:12,fill:"rgba(0, 0, 0, 0.65)",textAlign:"center"};return Object(x["jsxs"])(m["Chart"],{height:n,data:p,scale:j,padding:[-16,0,16,0],forceFit:o,children:[Object(x["jsx"])(m["Coord"],{type:"polar",startAngle:-1.25*Math.PI,endAngle:.25*Math.PI,radius:.8}),Object(x["jsx"])(m["Axis"],{name:"1",line:void 0}),Object(x["jsx"])(m["Axis"],{line:void 0,tickLine:void 0,subTickLine:void 0,name:"value",zIndex:2,label:{offset:-12,formatter:c,textStyle:v}}),Object(x["jsxs"])(m["Guide"],{children:[Object(x["jsx"])(w,{start:[3,.905],end:[3,.85],lineStyle:{stroke:d,lineDash:void 0,lineWidth:2}}),Object(x["jsx"])(w,{start:[5,.905],end:[5,.85],lineStyle:{stroke:d,lineDash:void 0,lineWidth:3}}),Object(x["jsx"])(w,{start:[7,.905],end:[7,.85],lineStyle:{stroke:d,lineDash:void 0,lineWidth:3}}),Object(x["jsx"])(k,{start:[0,.965],end:[10,.965],style:{stroke:u,lineWidth:10}}),Object(x["jsx"])(k,{start:[0,.965],end:[p[0].value,.965],style:{stroke:d,lineWidth:10}}),Object(x["jsx"])(C,{position:["50%","95%"],html:f()})]}),Object(x["jsx"])(m["Geom"],{line:!1,type:"point",position:"value*1",shape:"pointer",color:d,active:!1})]})},F=_()(M),z=a("iz+Y"),A=a.n(z),W=function(e){var t=e.height,a=void 0===t?1:t,n=e.data,i=void 0===n?[]:n,r=e.forceFit,o=void 0===r||r,s=e.color,c=void 0===s?"rgba(24, 144, 255, 0.2)":s,l=e.borderColor,d=void 0===l?"#1089ff":l,h=e.scale,u=void 0===h?{x:{},y:{}}:h,j=e.borderWidth,p=void 0===j?2:j,f=e.line,v=e.xAxis,g=e.yAxis,O=e.animate,y=void 0===O||O,_=[36,5,30,5],k={x:Object(b["a"])({type:"cat",range:[0,1]},u.x),y:Object(b["a"])({min:0},u.y)},C=["x*y",function(e,t){return{name:e,value:t}}],w=a+54;return Object(x["jsx"])("div",{className:A.a.miniChart,style:{height:a},children:Object(x["jsx"])("div",{className:A.a.chartContent,children:a>0&&Object(x["jsxs"])(m["Chart"],{animate:y,scale:k,height:w,forceFit:o,data:i,padding:_,children:[Object(x["jsx"])(m["Axis"],Object(b["a"])({name:"x",label:null,line:null,tickLine:null,grid:null},v),"axis-x"),Object(x["jsx"])(m["Axis"],Object(b["a"])({name:"y",label:null,line:null,tickLine:null,grid:null},g),"axis-y"),Object(x["jsx"])(m["Tooltip"],{showTitle:!1,crosshairs:!1}),Object(x["jsx"])(m["Geom"],{type:"area",position:"x*y",color:c,tooltip:C,shape:"smooth",style:{fillOpacity:1}}),f?Object(x["jsx"])(m["Geom"],{type:"line",position:"x*y",shape:"smooth",color:d,size:p,tooltip:!1}):Object(x["jsx"])("span",{style:{display:"none"}})]})})})},N=_()(W),L=(a("/zsF"),a("PArb")),D=a("jrin"),T=a("cQSq"),R=a.n(T),q=a("9/5/"),B=a.n(q),I=a("Jssm"),P=a.n(I),G=a("TSYQ"),E=a.n(G),H=a("d9mD"),U=a.n(H),J=function(e){Object(c["a"])(a,e);var t=Object(l["a"])(a);function a(){var e;Object(o["a"])(this,a);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return e=t.call.apply(t,[this].concat(i)),e.state={legendData:[],legendBlock:!1},e.chart=void 0,e.root=void 0,e.requestRef=0,e.resize=B()((function(){var t=e.props.hasLegend,a=e.state.legendBlock;t&&e.root?e.root&&e.root.parentNode&&e.root.parentNode.clientWidth<=380?a||e.setState({legendBlock:!0}):a&&e.setState({legendBlock:!1}):window.removeEventListener("resize",e.resize)}),300),e.getG2Instance=function(t){e.chart=t,requestAnimationFrame((function(){e.getLegendData(),e.resize()}))},e.getLegendData=function(){if(e.chart){var t=e.chart.getAllGeoms()[0];if(t){var a=t.get("dataArray")||[],n=a.map((function(e){var t=e[0]._origin;return t.color=e[0].color,t.checked=!0,t}));e.setState({legendData:n})}}},e.handleRoot=function(t){e.root=t},e.handleLegendClick=function(t,a){var n=t;n.checked=!n.checked;var i=e.state.legendData;i[a]=n;var r=i.filter((function(e){return e.checked})).map((function(e){return e.x}));e.chart&&e.chart.filter("x",(function(e){return r.indexOf("".concat(e))>-1})),e.setState({legendData:i})},e}return Object(s["a"])(a,[{key:"componentDidMount",value:function(){var e=this;window.addEventListener("resize",(function(){e.requestRef=requestAnimationFrame((function(){return e.resize()}))}),{passive:!0})}},{key:"componentDidUpdate",value:function(e){var t=this.props.data;t!==e.data&&this.getLegendData()}},{key:"componentWillUnmount",value:function(){this.requestRef&&window.cancelAnimationFrame(this.requestRef),window.removeEventListener("resize",this.resize),this.resize&&this.resize.cancel()}},{key:"render",value:function(){var e,t,a=this,n=this.props,i=n.valueFormat,r=n.subTitle,o=n.total,s=n.hasLegend,c=void 0!==s&&s,l=n.className,d=n.style,h=n.height,u=void 0===h?0:h,j=n.forceFit,p=void 0===j||j,f=n.percent,v=n.color,b=n.inner,g=void 0===b?.75:b,O=n.animate,y=void 0===O||O,_=n.colors,k=n.lineWidth,C=void 0===k?1:k,w=this.state,S=w.legendData,M=w.legendBlock,F=E()(U.a.pie,l,(e={},Object(D["a"])(e,U.a.hasLegend,!!c),Object(D["a"])(e,U.a.legendBlock,M),e)),z=this.props,A=z.data,W=z.selected,N=void 0===W||W,R=z.tooltip,q=void 0===R||R,B=A||[],I=N,G=q,H=_;B=B||[],I=I||!0,G=G||!0;var J={x:{type:"cat",range:[0,1]},y:{min:0}};(f||0===f)&&(I=!1,G=!1,t=function(e){return"\u5360\u6bd4"===e?v||"rgba(24, 144, 255, 0.85)":"#F0F2F5"},B=[{x:"\u5360\u6bd4",y:parseFloat("".concat(f))},{x:"\u53cd\u6bd4",y:100-parseFloat("".concat(f))}]);var Q=["x*percent",function(e,t){return{name:e,value:"".concat((100*t).toFixed(2),"%")}}],V=[12,0,12,0],Z=new T["DataView"];return Z.source(B).transform({type:"percent",field:"y",dimension:"x",as:"percent"}),Object(x["jsxs"])("div",{ref:this.handleRoot,className:F,style:d,children:[Object(x["jsx"])(P.a,{maxFontSize:25,children:Object(x["jsxs"])("div",{className:U.a.chart,children:[Object(x["jsxs"])(m["Chart"],{scale:J,height:u,forceFit:p,data:Z,padding:V,animate:y,onGetG2Instance:this.getG2Instance,children:[!!G&&Object(x["jsx"])(m["Tooltip"],{showTitle:!1}),Object(x["jsx"])(m["Coord"],{type:"theta",innerRadius:g}),Object(x["jsx"])(m["Geom"],{style:{lineWidth:C,stroke:"#fff"},tooltip:G?Q:void 0,type:"intervalStack",position:"percent",color:["x",f||0===f?t:H],selected:I})]}),(r||o)&&Object(x["jsxs"])("div",{className:U.a.total,children:[r&&Object(x["jsx"])("h4",{className:"pie-sub-title",children:r}),o&&Object(x["jsx"])("div",{className:"pie-stat",children:"function"===typeof o?o():o})]})]})}),c&&Object(x["jsx"])("ul",{className:U.a.legend,children:S.map((function(e,t){return Object(x["jsxs"])("li",{onClick:function(){return a.handleLegendClick(e,t)},children:[Object(x["jsx"])("span",{className:U.a.dot,style:{backgroundColor:e.checked?e.color:"#aaa"}}),Object(x["jsx"])("span",{className:U.a.legendTitle,children:e.x}),Object(x["jsx"])(L["a"],{type:"vertical"}),Object(x["jsx"])("span",{className:U.a.percent,children:"".concat((Number.isNaN(e.percent)?0:100*e.percent).toFixed(2),"%")}),Object(x["jsx"])("span",{className:U.a.value,children:i?i(e.y):e.y})]},e.x)}))})]})}}]),a}(u["Component"]),Q=_()(J),V=a("tJVT"),Z=a("1XEM"),X=a.n(Z),Y="https://gw.alipayobjects.com/zos/rmsportal/gWyeGLCdFFRavBGIDzWk.png",K=function(e){Object(c["a"])(a,e);var t=Object(l["a"])(a);function a(){var e;Object(o["a"])(this,a);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return e=t.call.apply(t,[this].concat(i)),e.state={dv:null,height:0,width:0},e.requestRef=0,e.isUnmount=!1,e.root=void 0,e.imageMask=void 0,e.resize=function(){e.requestRef=requestAnimationFrame((function(){e.renderChart(e.props)}))},e.saveRootRef=function(t){e.root=t},e.initTagCloud=function(){function e(e){return Object(b["a"])(Object(b["a"])({},e.style),{},{fillOpacity:e.opacity,fontSize:e.origin._origin.size,rotate:e.origin._origin.rotate,text:e.origin._origin.text,textAlign:"center",fontFamily:e.origin._origin.font,fill:e.color,textBaseline:"Alphabetic"})}m["Shape"].registerShape("point","cloud",{drawShape:function(t,a){var n=e(t);return a.addShape("text",{attrs:Object(b["a"])(Object(b["a"])({},n),{},{x:t.x,y:t.y})})}})},e.renderChart=B()((function(t){var a=t||e.props,n=a.data,i=a.height;if(!(n.length<1)&&e.root){var r=i,o=e.root.offsetWidth,s=function(){var t=(new R.a.View).source(n),a=t.range("value"),i=Object(V["a"])(a,2),s=i[0],c=i[1];t.transform({type:"tag-cloud",fields:["name","value"],imageMask:e.imageMask,font:"Verdana",size:[o,r],padding:0,timeInterval:5e3,rotate:function(){return 0},fontSize:function(e){var t=Math.pow((e.value-s)/(c-s),2);return 12.5*t+5}}),e.isUnmount||e.setState({dv:t,width:o,height:r})};e.imageMask?s():(e.imageMask=new Image,e.imageMask.crossOrigin="",e.imageMask.src=Y,e.imageMask.onload=s)}}),200),e}return Object(s["a"])(a,[{key:"componentDidMount",value:function(){var e=this;requestAnimationFrame((function(){e.initTagCloud(),e.renderChart(e.props)})),window.addEventListener("resize",this.resize,{passive:!0})}},{key:"componentDidUpdate",value:function(e){var t=this.props.data;e&&JSON.stringify(e.data)!==JSON.stringify(t)&&this.renderChart(this.props)}},{key:"componentWillUnmount",value:function(){this.isUnmount=!0,window.cancelAnimationFrame(this.requestRef),window.removeEventListener("resize",this.resize)}},{key:"render",value:function(){var e=this.props,t=e.className,a=e.height,n=this.state,i=n.dv,r=n.width,o=n.height;return Object(x["jsx"])("div",{className:E()(X.a.tagCloud,t),style:{width:"100%",height:a},ref:this.saveRootRef,children:i&&Object(x["jsxs"])(m["Chart"],{width:r,height:o,data:i,padding:0,scale:{x:{nice:!1},y:{nice:!1}},children:[Object(x["jsx"])(m["Tooltip"],{showTitle:!1}),Object(x["jsx"])(m["Coord"],{reflect:"y"}),Object(x["jsx"])(m["Geom"],{type:"point",position:"x*y",color:"text",shape:"cloud",tooltip:["text*value",function(e,t){return{name:e,value:t}}]})]})})}}]),a}(u["Component"]),$=_()(K),ee=a("CIdX"),te=a.n(ee),ae=function(e){Object(c["a"])(a,e);var t=Object(l["a"])(a);function a(){var e;Object(o["a"])(this,a);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return e=t.call.apply(t,[this].concat(i)),e.state={radio:1},e.timer=0,e.root=null,e.node=null,e.resize=function(){if(e.root){var t=e.props.height,a=void 0===t?1:t,n=e.root.parentNode,i=n.offsetWidth;e.setState({radio:i<a?i/a:1})}},e}return Object(s["a"])(a,[{key:"componentDidMount",value:function(){var e=this;this.renderChart(),this.resize(),window.addEventListener("resize",(function(){requestAnimationFrame((function(){return e.resize()}))}),{passive:!0})}},{key:"componentDidUpdate",value:function(e){var t=this.props.percent;e.percent!==t&&this.renderChart("update")}},{key:"componentWillUnmount",value:function(){cancelAnimationFrame(this.timer),this.node&&(this.node.innerHTML=""),window.removeEventListener("resize",this.resize)}},{key:"renderChart",value:function(e){var t=this.props,a=t.percent,n=t.color,i=void 0===n?"#1890FF":n,r=a/100,o=this;if(cancelAnimationFrame(this.timer),this.node&&(0===r||r)){var s=this.node,c=s.getContext("2d");if(c){var l=s.width,d=s.height,h=l/2,u=2,j=h-u;c.beginPath(),c.lineWidth=2*u;for(var p=l-u,f=p/8,v=.2,m=v,b=u,x=0,g=0,O=.005,y=[],_=h-u,k=-Math.PI/2,C=!0,w=k;w<k+2*Math.PI;w+=1/(8*Math.PI))y.push([h+_*Math.cos(w),h+_*Math.sin(w)]);var S=y.shift();c.strokeStyle=i,c.moveTo(S[0],S[1]),F()}}function M(){if(c){c.beginPath(),c.save();for(var e=[],t=b;t<=b+p;t+=20/p){var a=x+(b+t)/f,n=Math.sin(a)*m,r=t,o=2*j*(1-g)+(h-j)-f*n;c.lineTo(r,o),e.push([r,o])}var s=e.shift();c.lineTo(b+p,d),c.lineTo(b,d),c.lineTo(s[0],s[1]);var l=c.createLinearGradient(0,0,0,d);l.addColorStop(0,"#ffffff"),l.addColorStop(1,i),c.fillStyle=l,c.fill(),c.restore()}}function F(){if(c){if(c.clearRect(0,0,l,d),C&&"update"!==e)if(y.length){var t=y.shift();c.lineTo(t[0],t[1]),c.stroke()}else C=!1,c.lineTo(S[0],S[1]),c.stroke(),y=[],c.globalCompositeOperation="destination-over",c.beginPath(),c.lineWidth=u,c.arc(h,h,_,0,2*Math.PI,!0),c.beginPath(),c.save(),c.arc(h,h,h-3*u,0,2*Math.PI,!0),c.restore(),c.clip(),c.fillStyle=i;else{if(r>=.85){if(m>v/4){var a=.01*v;m-=a}}else if(r<=.1){if(m<1.5*v){var n=.01*v;m+=n}}else{if(m<=v){var s=.01*v;m+=s}if(m>=v){var j=.01*v;m-=j}}r-g>0&&(g+=O),r-g<0&&(g-=O),x+=.07,M()}o.timer=requestAnimationFrame(F)}}}},{key:"render",value:function(){var e=this,t=this.state.radio,a=this.props,n=a.percent,i=a.title,r=a.height,o=void 0===r?1:r;return Object(x["jsxs"])("div",{className:te.a.waterWave,ref:function(t){return e.root=t},style:{transform:"scale(".concat(t,")")},children:[Object(x["jsx"])("div",{style:{width:o,height:o,overflow:"hidden"},children:Object(x["jsx"])("canvas",{className:te.a.waterWaveCanvasWrapper,ref:function(t){return e.node=t},width:2*o,height:2*o})}),Object(x["jsxs"])("div",{className:te.a.text,style:{width:o},children:[i&&Object(x["jsx"])("span",{children:i}),Object(x["jsxs"])("h4",{children:[n,"%"]})]})]})}}]),a}(u["Component"]),ne=_()(ae),ie=a("WmNS"),re=a.n(ie),oe=a("9og8"),se=a("68d/"),ce=a("95SA"),le=["#eff3ff","#c6dbef","#9ecae1","#6baed6","#4292c6","#2171b5","#084594"],de=function(e){Object(c["a"])(a,e);var t=Object(l["a"])(a);function a(){var e;Object(o["a"])(this,a);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return e=t.call.apply(t,[this].concat(i)),e.state={data:null,grid:null,loading:!1},e}return Object(s["a"])(a,[{key:"componentDidMount",value:function(){var e=Object(oe["a"])(re.a.mark((function e(){var t,a,n,i;return re.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([fetch("https://gw.alipayobjects.com/os/bmw-prod/c5dba875-b6ea-4e88-b778-66a862906c93.json").then((function(e){return e.json()})),fetch("https://gw.alipayobjects.com/os/bmw-prod/8990e8b4-c58e-419b-afb9-8ea3daff2dd1.json").then((function(e){return e.json()}))]);case 2:t=e.sent,a=Object(V["a"])(t,2),n=a[0],i=a[1],this.setState({data:n,grid:i,loading:!0});case 7:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"render",value:function(){var e=this.state,t=e.data,a=e.grid,n=e.loading;return!1===n?Object(x["jsx"])(ce["a"],{}):Object(x["jsxs"])(se["b"],{map:{center:[110.19382669582967,50.258134],pitch:0,style:"blank",zoom:1},style:{position:"relative",width:"100%",height:"452px"},children:[a&&Object(x["jsx"])(se["a"],{source:{data:a,transforms:[{type:"hexagon",size:8e5,field:"capacity",method:"sum"}]},color:{values:"#ddd"},shape:{values:"hexagon"},style:{coverage:.7,opacity:.8}},"1"),t&&[Object(x["jsx"])(se["c"],{options:{autoFit:!0},source:{data:t},scale:{values:{color:{field:"cum_conf",type:"quantile"},size:{field:"cum_conf",type:"log"}}},color:{field:"cum_conf",values:le},shape:{values:"circle"},active:{option:{color:"#0c2c84"}},size:{field:"cum_conf",values:[0,30]},style:{opacity:.8}},"2"),Object(x["jsx"])(se["c"],{source:{data:t},color:{values:"#fff"},shape:{field:"Short_Name_ZH",values:"text"},filter:{field:"cum_conf",values:function(e){return e>2e3}},size:{values:12},style:{opacity:1,strokeOpacity:1,strokeWidth:0}},"5")]]})}}]),a}(u["Component"]),he=a("oBTY"),ue=a("H+7v"),je=a.n(ue);function pe(e){return 1*e<10?"0".concat(e):e}function fe(){for(var e=[],t=0;t<24;t+=1)e.push({x:"".concat(pe(t),":00"),y:Math.floor(200*Math.random())+50*t});return e}var ve=function(e){Object(c["a"])(a,e);var t=Object(l["a"])(a);function a(){var e;Object(o["a"])(this,a);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return e=t.call.apply(t,[this].concat(i)),e.state={activeData:fe()},e.timer=void 0,e.requestRef=void 0,e.loopData=function(){e.requestRef=requestAnimationFrame((function(){e.timer=window.setTimeout((function(){e.setState({activeData:fe()},(function(){e.loopData()}))}),1e3)}))},e}return Object(s["a"])(a,[{key:"componentDidMount",value:function(){this.loopData()}},{key:"componentWillUnmount",value:function(){clearTimeout(this.timer),this.requestRef&&cancelAnimationFrame(this.requestRef)}},{key:"render",value:function(){var e=this.state.activeData,t=void 0===e?[]:e;return Object(x["jsxs"])("div",{className:je.a.activeChart,children:[Object(x["jsx"])(d["a"],{title:"\u76ee\u6807\u8bc4\u4f30",value:"\u6709\u671b\u8fbe\u5230\u9884\u671f"}),Object(x["jsx"])("div",{style:{marginTop:32},children:Object(x["jsx"])(N,{animate:!1,line:!0,borderWidth:2,height:84,scale:{y:{tickCount:3}},yAxis:{tickLine:void 0,label:void 0,title:void 0,line:void 0},data:t})}),t&&Object(x["jsxs"])("div",{children:[Object(x["jsxs"])("div",{className:je.a.activeChartGrid,children:[Object(x["jsxs"])("p",{children:[Object(he["a"])(t).sort()[t.length-1].y+200," \u4ebf\u5143"]}),Object(x["jsxs"])("p",{children:[Object(he["a"])(t).sort()[Math.floor(t.length/2)].y," \u4ebf\u5143"]})]}),Object(x["jsx"])("div",{className:je.a.dashedLine,children:Object(x["jsx"])("div",{className:je.a.line})}),Object(x["jsx"])("div",{className:je.a.dashedLine,children:Object(x["jsx"])("div",{className:je.a.line})})]}),t&&Object(x["jsxs"])("div",{className:je.a.activeChartLegend,children:[Object(x["jsx"])("span",{children:"00:00"}),Object(x["jsx"])("span",{children:t[Math.floor(t.length/2)].x}),Object(x["jsx"])("span",{children:t[t.length-1].x})]})]})}}]),a}(u["Component"]),me=a("Wnft"),be=a.n(me),xe=d["a"].Countdown,ge=Date.now()+1728e5+3e4,Oe=function(e){Object(c["a"])(a,e);var t=Object(l["a"])(a);function a(){return Object(o["a"])(this,a),t.apply(this,arguments)}return Object(s["a"])(a,[{key:"componentDidMount",value:function(){var e=this.props.dispatch;e({type:"dashboardAndmonitor/fetchTags"})}},{key:"render",value:function(){var e=this.props,t=e.dashboardAndmonitor,a=e.loading,o=t.tags;return Object(x["jsx"])(p["a"],{children:Object(x["jsxs"])(j.a.Fragment,{children:[Object(x["jsxs"])(i["a"],{gutter:24,children:[Object(x["jsx"])(r["a"],{xl:18,lg:24,md:24,sm:24,xs:24,style:{marginBottom:24},children:Object(x["jsxs"])(n["a"],{title:Object(x["jsx"])(h["a"],{id:"dashboardandmonitor.monitor.trading-activity",defaultMessage:"Real-Time Trading Activity"}),bordered:!1,children:[Object(x["jsxs"])(i["a"],{children:[Object(x["jsx"])(r["a"],{md:6,sm:12,xs:24,children:Object(x["jsx"])(d["a"],{title:Object(x["jsx"])(h["a"],{id:"dashboardandmonitor.monitor.total-transactions",defaultMessage:"Total transactions today"}),suffix:"\u5143",value:v()(124543233).format("0,0")})}),Object(x["jsx"])(r["a"],{md:6,sm:12,xs:24,children:Object(x["jsx"])(d["a"],{title:Object(x["jsx"])(h["a"],{id:"dashboardandmonitor.monitor.sales-target",defaultMessage:"Sales target completion rate"}),value:"92%"})}),Object(x["jsx"])(r["a"],{md:6,sm:12,xs:24,children:Object(x["jsx"])(xe,{title:Object(x["jsx"])(h["a"],{id:"dashboardandmonitor.monitor.remaining-time",defaultMessage:"Remaining time of activity"}),value:ge,format:"HH:mm:ss:SSS"})}),Object(x["jsx"])(r["a"],{md:6,sm:12,xs:24,children:Object(x["jsx"])(d["a"],{title:Object(x["jsx"])(h["a"],{id:"dashboardandmonitor.monitor.total-transactions-per-second",defaultMessage:"Total transactions per second"}),suffix:"\u5143",value:v()(234).format("0,0")})})]}),Object(x["jsx"])("div",{className:be.a.mapChart,children:Object(x["jsx"])(de,{})})]})}),Object(x["jsxs"])(r["a"],{xl:6,lg:24,md:24,sm:24,xs:24,children:[Object(x["jsx"])(n["a"],{title:Object(x["jsx"])(h["a"],{id:"dashboardandmonitor.monitor.activity-forecast",defaultMessage:"Activity forecast"}),style:{marginBottom:24},bordered:!1,children:Object(x["jsx"])(ve,{})}),Object(x["jsx"])(n["a"],{title:Object(x["jsx"])(h["a"],{id:"dashboardandmonitor.monitor.efficiency",defaultMessage:"Efficiency"}),style:{marginBottom:24},bodyStyle:{textAlign:"center"},bordered:!1,children:Object(x["jsx"])(F,{title:Object(h["d"])({id:"dashboardandmonitor.monitor.ratio",defaultMessage:"Ratio"}),height:180,percent:87})})]})]}),Object(x["jsxs"])(i["a"],{gutter:24,children:[Object(x["jsx"])(r["a"],{xl:12,lg:24,sm:24,xs:24,style:{marginBottom:24},children:Object(x["jsx"])(n["a"],{title:Object(x["jsx"])(h["a"],{id:"dashboardandmonitor.monitor.proportion-per-category",defaultMessage:"Proportion Per Category"}),bordered:!1,className:be.a.pieCard,children:Object(x["jsxs"])(i["a"],{style:{padding:"16px 0"},children:[Object(x["jsx"])(r["a"],{span:8,children:Object(x["jsx"])(Q,{animate:!1,percent:28,title:Object(x["jsx"])(h["a"],{id:"dashboardandmonitor.monitor.fast-food",defaultMessage:"Fast food"}),total:"28%",height:128,lineWidth:2})}),Object(x["jsx"])(r["a"],{span:8,children:Object(x["jsx"])(Q,{animate:!1,color:"#5DDECF",percent:22,title:Object(x["jsx"])(h["a"],{id:"dashboardandmonitor.monitor.western-food",defaultMessage:"Western food"}),total:"22%",height:128,lineWidth:2})}),Object(x["jsx"])(r["a"],{span:8,children:Object(x["jsx"])(Q,{animate:!1,color:"#2FC25B",percent:32,title:Object(x["jsx"])(h["a"],{id:"dashboardandmonitor.monitor.hot-pot",defaultMessage:"Hot pot"}),total:"32%",height:128,lineWidth:2})})]})})}),Object(x["jsx"])(r["a"],{xl:6,lg:12,sm:24,xs:24,style:{marginBottom:24},children:Object(x["jsx"])(n["a"],{title:Object(x["jsx"])(h["a"],{id:"dashboardandmonitor.monitor.popular-searches",defaultMessage:"Popular Searches"}),loading:a,bordered:!1,bodyStyle:{overflow:"hidden"},children:Object(x["jsx"])($,{data:o||[],height:161})})}),Object(x["jsx"])(r["a"],{xl:6,lg:12,sm:24,xs:24,style:{marginBottom:24},children:Object(x["jsx"])(n["a"],{title:Object(x["jsx"])(h["a"],{id:"dashboardandmonitor.monitor.resource-surplus",defaultMessage:"Resource Surplus"}),bodyStyle:{textAlign:"center",fontSize:0},bordered:!1,children:Object(x["jsx"])(ne,{height:161,title:Object(x["jsx"])(h["a"],{id:"dashboardandmonitor.monitor.fund-surplus",defaultMessage:"Fund Surplus"}),percent:34})})})]})]})})}}]),a}(u["Component"]);t["default"]=Object(h["c"])((function(e){var t=e.dashboardAndmonitor,a=e.loading;return{dashboardAndmonitor:t,loading:a.models.dashboardAndmonitor}}))(Oe)},d9mD:function(e,t,a){e.exports={pie:"pie___2nzPi",chart:"chart____y02v",hasLegend:"hasLegend___2tvLi",legend:"legend___aOylG",dot:"dot___3cUod",line:"line___3wzdx",legendTitle:"legendTitle___3d-qz",percent:"percent___1EUip",value:"value___3oEZu",title:"title___3EZr5",total:"total___2C3lg",legendBlock:"legendBlock___1RfCR"}},"iz+Y":function(e,t,a){e.exports={miniChart:"miniChart___27WlV",chartContent:"chartContent___2FNqq",chartLoading:"chartLoading___2DxhP"}}}]);