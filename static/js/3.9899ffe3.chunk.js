(this["webpackJsonpsocial-network"]=this["webpackJsonpsocial-network"]||[]).push([[3],{286:function(t,e,s){},287:function(t,e,s){},288:function(t,e,s){"use strict";s.r(e);var c=s(4),a=s(0),i=s.n(a),n=s(12),o=s(6),r=s(87),j=(s(286),s(287),s(1)),u=function(t){return Object(j.jsxs)("div",{className:"postCommon",children:[Object(j.jsxs)("div",{className:"postHead",children:[Object(j.jsxs)("div",{className:"postHead",children:[Object(j.jsxs)("div",{className:"miniAva",children:["mini-ava",Object(j.jsx)("img",{href:"",alt:""})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("a",{className:"postLink",href:"http://localhost:3000/",children:"Profile Name"}),Object(j.jsx)("p",{className:"weakText",children:"post date"})]})]}),Object(j.jsx)("div",{children:"post options"})]}),Object(j.jsxs)("div",{className:"postMain",children:[Object(j.jsx)("div",{children:t.text}),Object(j.jsxs)("div",{className:"postImg",children:["image added to post",Object(j.jsx)("img",{src:"",alt:""})]})]}),Object(j.jsx)("div",{className:"postFoot",children:Object(j.jsxs)("div",{className:"postFootItem",children:[Object(j.jsx)("div",{children:"like"}),Object(j.jsx)("p",{className:"weakText",children:t.likesCount})]})})]})},l=s(84),d=s(119),b=s(69),p=s(28),O=i.a.memo((function(t){var e=t.posts.map((function(t){return Object(j.jsx)(u,{text:t.text,likesCount:t.likesCount},t.id)}));return Object(j.jsxs)("div",{className:"postsColumn",children:[Object(j.jsx)("div",{className:"postCreating",children:Object(j.jsx)(x,{onSubmit:function(e){t.addPost(e.newPostText)}})}),Object(j.jsx)("div",{className:"personalPosts",children:e})]})})),h=Object(b.a)(10),x=Object(d.a)({form:"ProfileAddNewPostForm"})((function(t){return Object(j.jsxs)("form",{onSubmit:t.handleSubmit,children:[Object(j.jsx)("div",{children:Object(j.jsx)(l.a,{name:"newPostText",component:p.b,placeholder:"post message",validate:[b.b,h]})}),Object(j.jsx)("div",{children:Object(j.jsx)("button",{children:"Add post"})})]})})),f=O,m=Object(n.b)((function(t){return{posts:t.profilePage.posts,newPostText:t.profilePage.newPostText}}),(function(t){return{addPost:function(e){t(Object(r.a)(e))}}}))(f),v=s(42),g=s(24),N=function(t){var e=Object(a.useState)(!1),s=Object(g.a)(e,2),c=s[0],i=s[1],n=Object(a.useState)(t.status),o=Object(g.a)(n,2),r=o[0],u=o[1];return Object(a.useEffect)((function(){u(t.status)}),[t.status]),Object(j.jsx)("div",{children:c?Object(j.jsx)("div",{children:Object(j.jsx)("input",{onChange:function(t){u(t.currentTarget.value)},autoFocus:!0,onBlur:function(){i(!1),t.updateStatus(r)},value:r})}):Object(j.jsx)("div",{children:Object(j.jsx)("span",{onClick:function(){i(!0)},children:t.status||"empty status"})})})},P=function(t){var e=t.profile,s=t.status,c=t.updateStatus;return e?Object(j.jsxs)("div",{className:"infoColumn",children:[Object(j.jsx)("div",{className:"profilePhoto",children:Object(j.jsx)("img",{src:e.photos.large,alt:""})}),Object(j.jsx)("div",{className:"personalInfo",children:Object(j.jsx)(N,{status:s,updateStatus:c})})]}):Object(j.jsx)(v.a,{})},S=function(t){return t.isAuth?Object(j.jsxs)("div",{className:"profile",children:[Object(j.jsx)(P,{profile:t.profile,status:t.status,updateStatus:t.updateStatus}),Object(j.jsx)(m,{})]}):Object(j.jsx)(o.a,{to:"/login"})},k=s(10);e.default=Object(k.d)(Object(n.b)((function(t){return{profile:t.profilePage.profile,status:t.profilePage.status,authorizedUserId:t.auth.userId,isAuth:t.auth.isAuth}}),{getUserProfile:r.d,getStatus:r.c,updateStatus:r.e}))((function(t){var e=Object(o.h)().user_id;return Object(a.useEffect)((function(){var s=e;s||(s=t.authorizedUserId)||t.history.push("/login"),s&&(t.getUserProfile(s),t.getStatus(s),console.log("======> request"))}),[e]),Object(j.jsx)(S,Object(c.a)(Object(c.a)({},t),{},{profile:t.profile,status:t.status,updateStatus:t.updateStatus}))}))}}]);
//# sourceMappingURL=3.9899ffe3.chunk.js.map