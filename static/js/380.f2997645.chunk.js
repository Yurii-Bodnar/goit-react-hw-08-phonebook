"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[380],{4380:function(e,n,t){t.r(n),t.d(n,{default:function(){return Z}});var a=t(2791),r=t(9434),s=t(5649),c=function(e){return e.contacts.items},i=function(e){return e.filter},l="Contacts_container__SkTzd",o="Contacts_list__R3QeP",u="Contacts_item__WTDnh",m="Contacts_text__Cijp1",d="Contacts_btn__rNftF",h=t(184),_=function(){var e=(0,r.v9)(i),n=(0,r.v9)(c),t=(0,r.I0)();(0,a.useEffect)((function(){t((0,s.K2)())}),[t]);var _=function(e,n){return n?e.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())})):e}(n,e);return(0,h.jsx)("div",{className:l,children:(0,h.jsx)("ul",{className:o,children:null===_||void 0===_?void 0:_.map((function(e){var n=e.name,a=e.id,r=e.number;return(0,h.jsxs)("li",{className:u,children:[(0,h.jsxs)("p",{className:m,children:[n,": ",(0,h.jsx)("span",{children:r})]}),(0,h.jsx)("button",{className:d,onClick:function(){return t((0,s.GK)(a))},type:"button",children:"Delete"})]},a)}))})})},f=t(2081),p="Filter_wrapper__9Ksqy",x="Filter_inputFilter__8QMOp",b=function(){var e=(0,r.v9)((function(e){return e.filter})),n=(0,r.I0)();return(0,h.jsx)("div",{className:p,children:(0,h.jsx)("input",{className:x,onChange:function(e){return n((0,f.x)(e.target.value))},type:"text",name:"filter",value:e})})},j=t(3288),v=t(885),N=t(5984),C="PhonebookForm_container__eeR0i",k="PhonebookForm_text__7HBrP",g="PhonebookForm_inputValue__G1g81",F="PhonebookForm_btn__sTg+T",w=t(5562),y=t.n(w),P=function(){var e=(0,a.useState)(""),n=(0,v.Z)(e,2),t=n[0],i=n[1],l=(0,a.useState)(""),o=(0,v.Z)(l,2),u=o[0],m=o[1],d=(0,r.v9)(c),_=(0,r.I0)(),f=function(e){var n=e.target,t=n.name,a=n.value;switch(t){case"name":i(a);break;case"number":m(a);break;default:return}},p=(0,N.x0)();return(0,h.jsx)(h.Fragment,{children:(0,h.jsxs)("form",{className:C,onSubmit:function(e){if(e.preventDefault(),d.filter((function(e){return e.name===t})).length)return y().Notify.warning("".concat(t," in already in contacts"));var n={name:e.target.name.value,number:e.target.number.value};_((0,s.uK)(n)),i(""),m("")},children:[(0,h.jsxs)("label",{htmlFor:p,children:[(0,h.jsx)("p",{className:k,children:"Name"}),(0,h.jsx)("input",{className:g,onChange:f,type:"text",name:"name",value:t,id:p,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,h.jsxs)("label",{htmlFor:p,children:[(0,h.jsx)("p",{className:k,children:"Number"}),(0,h.jsx)("input",{className:g,onChange:f,type:"tel",name:"number",value:u,id:p,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,h.jsx)("button",{className:F,type:"submit",children:"add conttact"})]})})},Z=function(){return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("h1",{children:"Phonebook"}),(0,h.jsx)(P,{}),(0,h.jsx)("h2",{children:"Contacts"}),(0,h.jsx)(b,{}),(0,h.jsx)(a.Suspense,{fallback:(0,h.jsx)(j.Z,{}),children:(0,h.jsx)(_,{})})]})}}}]);
//# sourceMappingURL=380.f2997645.chunk.js.map