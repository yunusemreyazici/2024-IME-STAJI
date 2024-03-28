import{a as v,c as T,d as o,e as U}from"../../../../_chunks/chunk-BAA4W46O.js";import{a as y}from"../../../../_chunks/chunk-TXETSPOF.js";import{c as s,f as L,g as f,k as P}from"../../../../_chunks/chunk-LRH74UCM.js";var x=L((b,E)=>{E.exports=Serenity.Extensions});var F=f(P(),1),t=f(P(),1),A=f(x(),1);function R(n){var d=new m($("#LoginPanel"),n==null?void 0:n.model);n!=null&&n.activated?(d.form.Username.value=n.activated,d.form.Password.element.focus()):n!=null&&n.isPublicDemo&&(d.form.Username.element.val("admin").attr("placeholder","admin"),d.form.Password.element.val("serenity").attr("placeholder","serenity"))}s(R,"pageInit");var m=class extends F.PropertyPanel{constructor(r,e){super(r,e);this.form=new v(this.idPrefix)}getFormKey(){return v.formKey}loginClick(){if(this.validateForm()){var r=this.getSaveEntity();(0,t.serviceCall)({url:(0,t.resolveUrl)("~/Account/Login"),request:r,onSuccess:()=>{this.redirectToReturnUrl()},onError:e=>{var a,c,l,i;if(((a=e==null?void 0:e.Error)==null?void 0:a.Code)==="TwoFactorAuthenticationRequired"){var u=e.Error.Arguments.split("|");this.handleTwoFactorAuthentication(r.Username,r.Password,u[1],u[0]);return}if(((c=e==null?void 0:e.Error)==null?void 0:c.Code)==="RedirectUserTo"){window.location.href=e.Error.Arguments;return}if((i=(l=e==null?void 0:e.Error)==null?void 0:l.Message)!=null&&i.length){(0,t.notifyError)(e.Error.Message),this.form.Password.element.focus();return}t.ErrorHandling.showServiceError(e.Error)}})}}getReturnUrl(){var r=(0,t.parseQueryString)();return r.returnUrl||r.ReturnUrl}redirectToReturnUrl(){var r=this.getReturnUrl();if(r&&/^\//.test(r)){var e=window.location.hash;e!=null&&e!="#"&&(r+=e),window.location.href=r}else window.location.href=(0,t.resolveUrl)("~/")}handleTwoFactorAuthentication(r,e,u,a){var c=0,l=120,i=null,h=s(()=>{i=new A.PromptDialog({title:"Two Factor Authentication",editorOptions:{maxLength:4},editorType:"Integer",message:a,isHtml:!0,required:!0,validateValue:g=>g>=1e3&&g<=9999?(c++,(0,t.serviceCall)({url:(0,t.resolveUrl)("~/Account/Login"),request:{Username:r,Password:e,TwoFactorGuid:u,TwoFactorCode:g},onSuccess:()=>{this.redirectToReturnUrl()},onError:C=>{if((0,t.notifyError)(C.Error.Message),c>2){(0,t.notifyError)("Code entered is invalid! You can't try more than 3 times!"),i=null;return}h()}}),!0):((0,t.notifyError)("Please enter a valid code!"),!1)}),i.dialogOpen(),i.element.on("dialogclose.me",function(){i!=null&&(i.element.off("dialogclose.me"),i=null)})},"showDialog");function w(){l-=1,i!=null&&i.element.find("span.counter").text(l.toString()),l>=0?setTimeout(w,1e3):i!=null&&i.dialogClose()}s(w,"updateCounter"),h(),window.setTimeout(w,1e3)}renderContents(){let r=this.useIdPrefix(),e=y.Forms.Membership.Login,u=this.getReturnUrl();this.element.empty().append(o(T,{children:[o(U,{}),o("div",{class:"s-Panel p-4",children:[o("h5",{class:"text-center my-4",children:e.LoginToYourAccount}),o("form",{id:r.Form,action:"",children:[o("div",{id:r.PropertyGrid}),o("div",{class:"px-field",children:o("a",{class:"float-end text-decoration-none",href:(0,t.resolveUrl)("~/Account/ForgotPassword"),children:e.ForgotPassword})}),o("div",{class:"px-field",children:o("button",{id:r.LoginButton,type:"submit",class:"btn btn-primary my-3 w-100",onClick:a=>{a.preventDefault(),this.loginClick()},children:e.SignInButton})})]})]}),o("div",{class:"text-center mt-2",children:o("a",{class:"text-decoration-none",href:(0,t.resolveUrl)("~/Account/SignUp"),children:e.SignUpButton})})]}))}};s(m,"LoginPanel");export{R as default};
//# sourceMappingURL=LoginPage.js.map
