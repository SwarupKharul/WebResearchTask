(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[41],{nvug:function(e,t,o){"use strict";o.r(t);var l=o("HALo"),n=o("dhJC"),c=o("Mn/V"),i=o("q1tI"),r=o.n(i),a=o("vOnD"),d=r.a.createElement,s=Object(a.default)(c.d).withConfig({displayName:"MrpTooltip__StyledCard",componentId:"sc-1x18bye-0"})(["display:flex;justify-content:space-between;"]),u=Object(a.default)(c.C).withConfig({displayName:"MrpTooltip__StyledButton",componentId:"sc-1x18bye-1"})(["width:100%;text-align:center;"]);t.default=function(e){var t=e.hideCloseButton,o=e.closeBottomSheet,r=Object(n.a)(e,["hideCloseButton","closeBottomSheet"]),p=Object(i.useContext)(a.ThemeContext).isMobile,h=r.mrp,y=r.productPrice,b=r.discountedPrice,m=r.title,g=r.message,C=Object(i.useState)(!1),v=C[0],f=C[1];return d(c.I,Object(l.a)({},r,{title:"Price Details",open:v,onStateChange:f,indicator:r.children}),!p&&d(c.l,{title:"Price Details",hideCloseButton:t,handleClose:o}),d(c.h,null),d(c.d,{p:16},h&&d(s,{mb:12},d(c.v,{color:"greyT1"},"Maximum Retail Price (MRP)"),d(c.v,{color:"greyBase"},"\u20b9",h)),y&&d(s,{mb:12},d(c.v,{color:"greyT1"},"Product Price"),d(c.v,{color:"greyBase"},"\u20b9",y)),b&&d(s,null,d(c.v,{color:"greyT1"},"Final Discounted Price"),d(c.v,{color:"greyBase"},"\u20b9",b))),m&&d(c.d,{pl:16,pr:16},d(c.h,null)),m&&d(c.d,{p:16},d(c.v,{color:"greyT2",mb:8},m),d(c.v,{color:"greyT2"},g)),p&&d(c.h,null),p&&d(c.d,{p:"12px 16px"},d(u,{onClick:function(){return f(!1)}},"OK")))}}}]);