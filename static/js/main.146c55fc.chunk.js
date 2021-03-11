(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{11:function(e,t,n){e.exports={container:"src_container__Bep1_"}},19:function(e,t,n){},22:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(1),r=n.n(c),o=n(12),i=n.n(o),s=n(13),u=n(2),l=n(3),d=n(6),m=n(5),h=n(4),b=n(24),j=(n(19),function(e){Object(d.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={name:"",number:""},e.handleChange=function(t){var n=t.currentTarget,a=n.name,c=n.value;e.setState(Object(h.a)({},a,c))},e.handleSubmit=function(t){t.preventDefault();var n=e.state,a=n.name,c=n.number,r=e.props.onAdd;e.validateForm()&&(r({id:Object(b.a)(),name:a,number:c}),e.reset())},e.validateForm=function(){var t=e.state.name;return(0,e.props.onCheckUnick)(t)},e.reset=function(){e.setState({name:"",number:""})},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this.state,t=e.name,n=e.number;return Object(a.jsx)("form",{onSubmit:this.handleSubmit,children:Object(a.jsxs)("div",{children:[Object(a.jsx)("p",{children:"Name"}),Object(a.jsx)("input",{type:"text",name:"name",placeholder:"Enter name",value:t,onChange:this.handleChange}),Object(a.jsx)("p",{children:"Number"}),Object(a.jsx)("input",{type:"tel",name:"number",placeholder:"Enter phone number",value:n,onChange:this.handleChange}),Object(a.jsx)("button",{type:"submit",disabled:""===t||""===n,children:"Add contact"})]})})}}]),n}(c.Component)),f=n(8),p=n(9),v=n.n(p),O=function(e){var t=e.id,n=e.name,c=e.number,r=e.onRemove;return Object(a.jsxs)("li",{className:v.a.item,children:[n," : ",c,Object(a.jsx)("button",{className:v.a.button,onClick:function(){return r(t)},children:"Delete"})]})},g=function(e){var t=e.contacts,n=e.onRemove;return 0===t.length?null:Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h2",{children:" Contacts"}),Object(a.jsx)("ul",{children:t.map((function(e){return Object(a.jsx)(O,Object(f.a)(Object(f.a)({},e),{},{onRemove:n}))}))})]})},C=n(10),x=n.n(C),k=function(e){var t=e.filter,n=e.onChange;return Object(a.jsx)("input",{type:"text",name:"filter",value:t,onChange:function(e){var t=e.target;return n(t.value)},placeholder:"Enter find contact"})};k.prototype={value:x.a.string.isRequired,onChange:x.a.func.isRequired};var y=k,S=n(11),N=n.n(S),_=function(e){Object(d.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={name:"",contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},e.handleAddContact=function(t){var n={id:t.id,name:t.name,number:t.number};e.setState((function(e){var t=e.contacts;return{contacts:[].concat(Object(s.a)(t),[n])}}))},e.handldeUnickName=function(t){var n=!!e.state.contacts.find((function(e){return e.name===t}));return n&&alert("Contact is already exist"),!n},e.handleChangeFilter=function(t){e.setState({filter:t})},e.getVisibleContacts=function(){var t=e.state,n=t.contacts,a=t.filter;return n.filter((function(e){return e.name.toLowerCase().includes(a.toLowerCase())}))},e.handleRemoveContact=function(t){return e.setState((function(e){return{contacts:e.contacts.filter((function(e){return e.id!==t}))}}))},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=localStorage.getItem("contacts"),t=JSON.parse(e);t&&this.setState({contacts:t}),console.log("component DID mounnt")}},{key:"componentDidUpdate",value:function(){localStorage.setItem("contacts",JSON.stringify(this.state.contacts)),console.log("component DID Update")}},{key:"render",value:function(){console.log("render");var e=this.state.filter,t=this.getVisibleContacts();return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("div",{className:N.a.container,children:[Object(a.jsx)("h1",{children:"Phonebook"}),Object(a.jsx)(j,{onAdd:this.handleAddContact,onCheckUnick:this.handldeUnickName}),Object(a.jsx)("h2",{children:"Find contacts"}),Object(a.jsx)(y,{filter:e,onChange:this.handleChangeFilter})]}),Object(a.jsx)("div",{className:N.a.container,children:Object(a.jsx)(g,{contacts:t,onRemove:this.handleRemoveContact})})]})}}]),n}(c.Component);i.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(_,{})}),document.getElementById("root"))},9:function(e,t,n){e.exports={item:"ContactList_item__1pOXn",button:"ContactList_button__23jTM"}}},[[22,1,2]]]);
//# sourceMappingURL=main.146c55fc.chunk.js.map