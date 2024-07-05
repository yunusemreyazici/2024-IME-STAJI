import{c as t,g as o,j as x,k as i}from"./chunk-LRH74UCM.js";var O=o(i(),1);var P=class extends O.ColumnsBase{};t(P,"LanguageColumns"),P.columnsKey="Administration.Language",P.Fields=(0,O.fieldsProxy)();var v=o(i(),1);var u=class{static getLookup(){return(0,v.getLookup)("Administration.Language")}static getLookupAsync(){return x(this,null,function*(){return(0,v.getLookupAsync)("Administration.Language")})}};t(u,"LanguageRow"),u.idProperty="Id",u.nameProperty="LanguageName",u.localTextPrefix="Administration.Language",u.lookupKey="Administration.Language",u.deletePermission="Administration:Translation",u.insertPermission="Administration:Translation",u.readPermission="Administration:Translation",u.updatePermission="Administration:Translation",u.Fields=(0,v.fieldsProxy)();var K=o(i(),1),h;(e=>(e.baseUrl="Administration/Language",e.Methods={Create:"Administration/Language/Create",Update:"Administration/Language/Update",Delete:"Administration/Language/Delete",Retrieve:"Administration/Language/Retrieve",List:"Administration/Language/List"},["Create","Update","Delete","Retrieve","List"].forEach(s=>{e[s]=function(p,a,d){return(0,K.serviceRequest)(e.baseUrl+"/"+s,p,a,d)}})))(h||(h={}));var D=o(i(),1);var U=class extends D.ColumnsBase{};t(U,"RoleColumns"),U.columnsKey="Administration.Role",U.Fields=(0,D.fieldsProxy)();var L=o(i(),1);var l=class{static getLookup(){return(0,L.getLookup)("Administration.Role")}static getLookupAsync(){return x(this,null,function*(){return(0,L.getLookupAsync)("Administration.Role")})}};t(l,"RoleRow"),l.idProperty="RoleId",l.nameProperty="RoleName",l.localTextPrefix="Administration.Role",l.lookupKey="Administration.Role",l.deletePermission="Administration:Security",l.insertPermission="Administration:Security",l.readPermission="Administration:Security",l.updatePermission="Administration:Security",l.Fields=(0,L.fieldsProxy)();var k=o(i(),1),N;(e=>(e.baseUrl="Administration/Role",e.Methods={Create:"Administration/Role/Create",Update:"Administration/Role/Update",Delete:"Administration/Role/Delete",Retrieve:"Administration/Role/Retrieve",List:"Administration/Role/List"},["Create","Update","Delete","Retrieve","List"].forEach(s=>{e[s]=function(p,a,d){return(0,k.serviceRequest)(e.baseUrl+"/"+s,p,a,d)}})))(N||(N={}));var C=o(i(),1);var q=class extends C.ColumnsBase{};t(q,"UserColumns"),q.columnsKey="Administration.User",q.Fields=(0,C.fieldsProxy)();var S=o(i(),1);var m=class{static getLookup(){return(0,S.getLookup)("Administration.User")}static getLookupAsync(){return x(this,null,function*(){return(0,S.getLookupAsync)("Administration.User")})}};t(m,"UserRow"),m.idProperty="UserId",m.isActiveProperty="IsActive",m.nameProperty="Username",m.localTextPrefix="Administration.User",m.lookupKey="Administration.User",m.deletePermission="Administration:Security",m.insertPermission="Administration:Security",m.readPermission="Administration:Security",m.updatePermission="Administration:Security",m.Fields=(0,S.fieldsProxy)();var F=o(i(),1),M;(e=>(e.baseUrl="Administration/User",e.Methods={Create:"Administration/User/Create",Update:"Administration/User/Update",Delete:"Administration/User/Delete",Retrieve:"Administration/User/Retrieve",List:"Administration/User/List"},["Create","Update","Delete","Retrieve","List"].forEach(s=>{e[s]=function(p,a,d){return(0,F.serviceRequest)(e.baseUrl+"/"+s,p,a,d)}})))(M||(M={}));var A=o(i(),1);var E=class extends A.PrefixedContext{constructor(c){if(super(c),!E.init){E.init=!0;var e=A.StringEditor;(0,A.initFormType)(E,["LanguageId",e,"LanguageName",e])}}},H=E;t(H,"LanguageForm"),H.formKey="Administration.Language";var B;(e=>(e.Security="Administration:Security",e.Translation="Administration:Translation"))(B||(B={}));var g=o(i(),1);var b=class extends g.PrefixedContext{constructor(c){if(super(c),!b.init){b.init=!0;var e=g.StringEditor;(0,g.initFormType)(b,["RoleName",e,"RoleKey",e])}}},T=b;t(T,"RoleForm"),T.formKey="Administration.Role";var V=o(i(),1);var y=class{};t(y,"RolePermissionRow"),y.idProperty="RolePermissionId",y.nameProperty="PermissionKey",y.localTextPrefix="Administration.RolePermission",y.deletePermission="Administration:Security",y.insertPermission="Administration:Security",y.readPermission="Administration:Security",y.updatePermission="Administration:Security",y.Fields=(0,V.fieldsProxy)();var G=o(i(),1),j;(e=>(e.baseUrl="Administration/RolePermission",e.Methods={Update:"Administration/RolePermission/Update",List:"Administration/RolePermission/List"},["Update","List"].forEach(s=>{e[s]=function(p,a,d){return(0,G.serviceRequest)(e.baseUrl+"/"+s,p,a,d)}})))(j||(j={}));var W=o(i(),1),z;(e=>(e.baseUrl="Administration/Translation",e.Methods={List:"Administration/Translation/List",Update:"Administration/Translation/Update"},["List","Update"].forEach(s=>{e[s]=function(p,a,d){return(0,W.serviceRequest)(e.baseUrl+"/"+s,p,a,d)}})))(z||(z={}));var Y=o(i(),1),Q=(e=>(e[e.Email=1]="Email",e[e.SMS=2]="SMS",e))(Q||{});Y.Decorators.registerEnumType(Q,"Maps_Project.Administration.TwoFactorAuthType");var n=o(i(),1);var I=class extends n.PrefixedContext{constructor(c){if(super(c),!I.init){I.init=!0;var e=n.StringEditor,s=n.EmailAddressEditor,p=n.LookupEditor,a=n.BooleanEditor,d=n.EnumEditor,re=n.ImageUploadEditor,X=n.PasswordEditor;(0,n.initFormType)(I,["Username",e,"DisplayName",e,"Email",s,"Roles",p,"MobilePhoneNumber",e,"MobilePhoneVerified",a,"TwoFactorAuth",d,"UserImage",re,"Password",X,"PasswordConfirm",X,"Source",e,"IsActive",a])}}},J=I;t(J,"UserForm"),J.formKey="Administration.User";var Z=o(i(),1);var R=class{};t(R,"UserPermissionRow"),R.idProperty="UserPermissionId",R.nameProperty="PermissionKey",R.localTextPrefix="Administration.UserPermission",R.deletePermission="Administration:Security",R.insertPermission="Administration:Security",R.readPermission="Administration:Security",R.updatePermission="Administration:Security",R.Fields=(0,Z.fieldsProxy)();var w=o(i(),1),$;(e=>(e.baseUrl="Administration/UserPermission",e.Methods={Update:"Administration/UserPermission/Update",List:"Administration/UserPermission/List",ListRolePermissions:"Administration/UserPermission/ListRolePermissions",ListPermissionKeys:"Administration/UserPermission/ListPermissionKeys"},["Update","List","ListRolePermissions","ListPermissionKeys"].forEach(s=>{e[s]=function(p,a,d){return(0,w.serviceRequest)(e.baseUrl+"/"+s,p,a,d)}})))($||($={}));var _=o(i(),1);var f=class{};t(f,"UserRoleRow"),f.idProperty="UserRoleId",f.localTextPrefix="Administration.UserRole",f.deletePermission="Administration:Security",f.insertPermission="Administration:Security",f.readPermission="Administration:Security",f.updatePermission="Administration:Security",f.Fields=(0,_.fieldsProxy)();var te=o(i(),1),ee;(e=>(e.baseUrl="Administration/UserRole",e.Methods={Update:"Administration/UserRole/Update",List:"Administration/UserRole/List"},["Update","List"].forEach(s=>{e[s]=function(p,a,d){return(0,te.serviceRequest)(e.baseUrl+"/"+s,p,a,d)}})))(ee||(ee={}));export{P as a,H as b,u as c,h as d,U as e,T as f,j as g,l as h,N as i,q as j,J as k,$ as l,m,M as n};
//# sourceMappingURL=chunk-SHZY47RY.js.map