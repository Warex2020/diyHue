(this.webpackJsonpdiyhue=this.webpackJsonpdiyhue||[]).push([[14],{111:function(e,t,c){"use strict";c.r(t),c.d(t,"default",(function(){return v}));var o=c(14),n=c(2),l=c(16),a=c.n(l),r=c(94),s=c(12),i=c(27),u=c(92),d=c.n(u),j=(c(93),c(95)),b=(c(96),c(6)),h=function(e){var t=e.HOST_IP,c=e.api_key,o=e.id,n=e.light,l=e.modelIds,u=e.setType,h=e.setMessage,p=function(){a.a.delete("".concat(t,"/api/").concat(c,"/lights/").concat(o)).then((function(e){console.log(e.data),h("Light successfully deleted"),u("none"),u("success")})).catch((function(e){console.error(e),h("Error occured, check browser console"),u("none"),u("error")}))};return Object(b.jsxs)("div",{className:"card light expanded",children:[Object(b.jsxs)("div",{className:"row1",children:[Object(b.jsx)("div",{className:"icon",children:Object(b.jsx)(s.g,{onClick:function(){a.a.put("".concat(t,"/api/").concat(c,"/lights/").concat(o,"/state"),{alert:"select"}).then((function(e){console.log(e.data),h("Light alerted"),u("none"),u("success")})).catch((function(e){console.error(e),h("Error occured, check browser console"),u("none"),u("error")}))}})}),Object(b.jsxs)("div",{className:"text",children:[n.name," "]})]}),Object(b.jsxs)("div",{className:"row3",children:[Object(b.jsx)(d.a,{options:l,value:n.modelid,onChange:function(e){return c=e.value,console.log(Object(r.a)({},o,c)),void a.a.post("".concat(t,"/light-types"),Object(r.a)({},o,c)).then((function(e){console.log(e.data),h("Modelid updated"),u("none"),u("success")})).catch((function(e){console.error(e),h("Error occured, check browser console"),u("none"),u("error")}));var c},placeholder:"Choose light modelid"}),Object(b.jsx)("div",{className:"btn blue",children:Object(b.jsx)(i.c,{title:"Update"})}),Object(b.jsxs)("div",{className:"btn red",children:[Object(b.jsx)(i.a,{title:"Delete",onClick:function(){Object(j.confirmAlert)({title:"Delete light "+n.name,message:"Are you sure to do this?",buttons:[{label:"Yes",onClick:function(){return p()}},{label:"No"}]})}})," "]})]}),Object(b.jsx)("div",{className:"row4",children:Object(b.jsxs)("ul",{children:[Object(b.jsxs)("li",{children:["Protocol: ",n.protocol]}),Object(b.jsxs)("li",{children:["IP: ",n.protocol_cfg.ip]})]})}),n.state.reachable||Object(b.jsx)("div",{className:"label",children:"Offline"})]})},p=c(102),O=c(100),m=function(e){var t=e.setType,c=e.setMessage,l=e.HOST_IP,s=e.API_KEY,i=Object(n.useState)({protocol:"auto"}),u=Object(o.a)(i,2),j=u[0],h=u[1],m=function(e,t){h(Object(O.a)(Object(O.a)({},j),{},Object(r.a)({},e,t)))};return Object(b.jsxs)("form",{onSubmit:function(e){return function(e){e.preventDefault();var o={protocol:j.protocol,ip:j.ip,config:Object(p.a)(j,["protocol","ip"])};a.a.post("".concat(l,"/api/").concat(s,"/lights"),o),c("Light added"),t("none"),t("success")}(e)},className:"add-form",children:[Object(b.jsx)(d.a,{options:[{value:"auto",label:"Autodetect"},{value:"domoticz",label:"Domoticz"},{value:"flex",label:"Flex"},{value:"jeedom",label:"Jeedom"},{value:"milight",label:"MiLight"},{value:"mibox",label:"Mi Box"},{value:"wiz",label:"Wiz"}],value:j.protocol,onChange:function(e){return m("protocol",e.value)},placeholder:"Choose light protocol"}),Object(b.jsxs)("div",{className:"form-control",children:[Object(b.jsx)("label",{children:"Light Ip"}),Object(b.jsx)("input",{type:"text",placeholder:"192.168.x.x",value:j.ip,onChange:function(e){return m("ip",e.target.value)}})]}),"auto"!==j.protocol&&Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("div",{className:"form-control",children:[Object(b.jsx)("label",{children:"Name"}),Object(b.jsx)("input",{type:"text",value:j.lightName,onChange:function(e){return m("lightName",e.target.value)},placeholder:"Name used on diyhue"})]}),Object(b.jsx)("div",{className:"form-control",children:Object(b.jsx)(d.a,{options:[{value:"LOM001",label:"On/Off Plug"},{value:"LWB010",label:"Dimmable Light"},{value:"LTW001",label:"Color temperature Light"},{value:"LCT015",label:"Color Light"},{value:"LST002",label:"Color Strip"}],value:j.lightModelID,onChange:function(e){return m("lightModelID",e.value)},placeholder:"Emulated light type"})})]}),("milight"===j.protocol||"mibox"===j.protocol)&&Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("div",{className:"form-control",children:[Object(b.jsx)("label",{children:"Device ID"}),Object(b.jsx)("input",{type:"text",value:j.miID,onChange:function(e){return m("miID",e.target.value)},placeholder:"0x1234"})]}),Object(b.jsx)(d.a,{options:[{value:"rgbw",label:"RGBW"},{value:"cct",label:"CCT"},{value:"rgb_cct",label:"RGB-CCT"},{value:"rgb",label:"RGB"}],value:j.miModes,onChange:function(e){return m("miModes",e.value)},placeholder:"Choose light mode"}),Object(b.jsx)(d.a,{options:["1","2","3","4"],value:j.miGroups,onChange:function(e){return m("miGroups",e.value)},placeholder:"Choose light group"})]}),"mibox"===j.protocol&&Object(b.jsxs)("div",{className:"form-control",children:[Object(b.jsx)("label",{children:"Port"}),Object(b.jsx)("input",{type:"number",placeholder:"Mi Box port",value:j.miBoxPort,onChange:function(e){return m("miboxPort",e.target.value)}})]}),"domoticz"===j.protocol&&Object(b.jsxs)("div",{className:"form-control",children:[Object(b.jsx)("label",{children:"Device ID"}),Object(b.jsx)("input",{type:"text",placeholder:"",value:j.domoticzID,onChange:function(e){return m("domoticzID",e.target.value)}})]}),"jeedom"===j.protocol&&Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("div",{className:"form-control",children:[Object(b.jsx)("label",{children:"Light Api"}),Object(b.jsx)("input",{type:"text",placeholder:"Light Api",value:j.jeedomlightAPI,onChange:function(e){return m("jeedomlightAPI",e.target.value)}})]}),Object(b.jsxs)("div",{className:"form-control",children:[Object(b.jsx)("label",{children:"Light ID"}),Object(b.jsx)("input",{type:"text",placeholder:"Light ID",value:j.jeedomlightID,onChange:function(e){return m("jeedomlightID",e.target.value)}})]})]}),Object(b.jsx)("div",{className:"form-control",children:Object(b.jsx)("input",{type:"submit",value:"Add Light",className:"btn btn-block"})})]})},g=c(90);function v(e){var t=e.HOST_IP,c=e.API_KEY,l=Object(n.useState)({}),r=Object(o.a)(l,2),s=r[0],i=r[1],u=Object(n.useState)([]),d=Object(o.a)(u,2),j=d[0],p=d[1],O=Object(n.useState)("none"),v=Object(o.a)(O,2),x=v[0],f=v[1],N=Object(n.useState)("no message"),C=Object(o.a)(N,2),y=C[0],I=C[1],D=Object(n.useState)(!1),L=Object(o.a)(D,2),k=L[0],P=L[1];return Object(n.useEffect)((function(){var e=function(){void 0!==c&&a.a.get("".concat(t,"/lights")).then((function(e){console.log(e.data),i(e.data)})).catch((function(e){console.error(e)}))};e(),void 0!==c&&a.a.get("".concat(t,"/light-types")).then((function(e){console.log(e.data),p(e.data.result)})).catch((function(e){console.error(e)}));var o=setInterval((function(){e()}),2e3);return function(){return clearInterval(o)}}),[t,c]),Object(b.jsxs)("div",{className:"content",children:["none"!==x&&Object(b.jsx)(g.a,{type:x,message:y,duration:"5000",setType:f}),Object(b.jsxs)("div",{className:"cardGrid",children:[Object(b.jsxs)("div",{className:"btn generic",onClick:function(){void 0!==c&&a.a.post("".concat(t,"/api/").concat(c,"/lights"),"").then((function(e){console.log(e.data),I("Searching for new lights..."),f("none"),f("success")})).catch((function(e){console.error(e),I("Error occured, check browser console"),f("none"),f("error")}))},children:["Scan For Lights",Object(b.jsx)("div",{className:"btn btn-block"})]}),Object(b.jsx)("button",{onClick:function(){return P(!k)},className:"generic",style:{},children:"Add light manually"}),k&&Object(b.jsx)(m,{setType:f,setMessage:I,HOST_IP:t,API_KEY:c})]}),Object(b.jsx)("div",{className:"cardGrid",children:Object.entries(s).map((function(e){var n=Object(o.a)(e,2),l=n[0],a=n[1];return Object(b.jsx)(h,{HOST_IP:t,api_key:c,id:l,light:a,modelIds:j,setType:f,setMessage:I},l)}))})]})}},90:function(e,t,c){"use strict";c.d(t,"a",(function(){return r}));var o=c(12),n=c(91),l=c.n(n),a=c(6);function r(e){var t=e.type,c=e.message,n=e.duration,r=e.setType;return Object(a.jsx)(l.a,{duration:n,persistOnHover:!0,children:Object(a.jsx)("div",{className:"notificationContainer",children:Object(a.jsxs)("div",{className:"notification ".concat(t),children:[Object(a.jsx)("p",{children:c}),Object(a.jsx)("div",{className:"icon",children:Object(a.jsx)(o.m,{onClick:function(){return r("none")}})})]})})})}}}]);
//# sourceMappingURL=14.9edd26e8.chunk.js.map