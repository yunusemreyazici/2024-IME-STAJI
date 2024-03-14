import{c as t,e as Ee,f as o,g as x,h as Q,i}from"./chunk-THKE7DQS.js";var ee=Ee((Yt,xe)=>{xe.exports=Serenity.Extensions});var F=o(i(),1);var h=class h extends F.ColumnsBase{};t(h,"GenreColumns"),h.columnsKey="MovieDB.Genre",h.Fields=(0,F.fieldsProxy)();var te=h;var I=o(i(),1);var m=class m{static getLookup(){return(0,I.getLookup)("MovieDB.Genre")}static getLookupAsync(){return Q(this,null,function*(){return(0,I.getLookupAsync)("MovieDB.Genre")})}};t(m,"GenreRow"),m.idProperty="GenreId",m.nameProperty="Name",m.localTextPrefix="MovieDB.Genre",m.lookupKey="MovieDB.Genre",m.deletePermission="Administration:General",m.insertPermission="Administration:General",m.readPermission="Administration:General",m.updatePermission="Administration:General",m.Fields=(0,I.fieldsProxy)();var X=m;var oe=o(i(),1),re;(e=>(e.baseUrl="MovieDB/Genre",e.Methods={Create:"MovieDB/Genre/Create",Update:"MovieDB/Genre/Update",Delete:"MovieDB/Genre/Delete",Retrieve:"MovieDB/Genre/Retrieve",List:"MovieDB/Genre/List"},["Create","Update","Delete","Retrieve","List"].forEach(r=>{e[r]=function(a,n,p){return(0,oe.serviceRequest)(e.baseUrl+"/"+r,a,n,p)}})))(re||(re={}));var ie=o(i(),1);var T,b,C=class{format(s){let e=s.value;if(!e||!e.length)return"";let r=T==null?void 0:T.itemById;return r?e.map(a=>{var n=r[a];return s.escape(n==null?a:n.Name)}).join(", "):(b!=null||(b=X.getLookupAsync().then(a=>{var n;T=a;try{(n=s.grid)==null||n.invalidate()}finally{T=null,b=null}}).catch(()=>b=null)),'<i class="fa fa-spinner"></i>')}};t(C,"GenreListFormatter"),C=x([ie.Decorators.registerFormatter("MovieTutorial.GenreListFormatter")],C);var K=o(i(),1);var se=o(i(),1),N=(r=>(r[r.Film=1]="Film",r[r.TvSeries=2]="TvSeries",r[r.MiniSeries=3]="MiniSeries",r))(N||{});se.Decorators.registerEnumType(N,"MovieTutorial.MovieDB.MovieKind","MovieDB.MovieKind");var A=class A extends K.ColumnsBase{};t(A,"MovieColumns"),A.columnsKey="MovieDB.Movie",A.Fields=(0,K.fieldsProxy)();var ne=A;var pe=o(i(),1);var d=class d{};t(d,"MovieRow"),d.idProperty="MovieId",d.nameProperty="Title",d.localTextPrefix="MovieDB.Movie",d.deletePermission="Administration:General",d.insertPermission="Administration:General",d.readPermission="Administration:General",d.updatePermission="Administration:General",d.Fields=(0,pe.fieldsProxy)();var ae=d;var ce=o(i(),1),le;(e=>(e.baseUrl="MovieDB/Movie",e.Methods={Create:"MovieDB/Movie/Create",Update:"MovieDB/Movie/Update",Delete:"MovieDB/Movie/Delete",Retrieve:"MovieDB/Movie/Retrieve",List:"MovieDB/Movie/List"},["Create","Update","Delete","Retrieve","List"].forEach(r=>{e[r]=function(a,n,p){return(0,ce.serviceRequest)(e.baseUrl+"/"+r,a,n,p)}})))(le||(le={}));var Y=o(i(),1);var me=o(i(),1),k=(e=>(e[e.Male=1]="Male",e[e.Female=2]="Female",e))(k||{});me.Decorators.registerEnumType(k,"MovieTutorial.MovieDB.Gender");var U=class U extends Y.ColumnsBase{};t(U,"PersonColumns"),U.columnsKey="MovieDB.Person",U.Fields=(0,Y.fieldsProxy)();var ue=U;var G=o(i(),1);var u=class u{static getLookup(){return(0,G.getLookup)("MovieDB.Person")}static getLookupAsync(){return Q(this,null,function*(){return(0,G.getLookupAsync)("MovieDB.Person")})}};t(u,"PersonRow"),u.idProperty="PersonId",u.nameProperty="FullName",u.localTextPrefix="MovieDB.Person",u.lookupKey="MovieDB.Person",u.deletePermission="Administration:General",u.insertPermission="Administration:General",u.readPermission="Administration:General",u.updatePermission="Administration:General",u.Fields=(0,G.fieldsProxy)();var j=u;var ve=o(i(),1),de;(e=>(e.baseUrl="MovieDB/Person",e.Methods={Create:"MovieDB/Person/Create",Update:"MovieDB/Person/Update",Delete:"MovieDB/Person/Delete",Retrieve:"MovieDB/Person/Retrieve",List:"MovieDB/Person/List"},["Create","Update","Delete","Retrieve","List"].forEach(r=>{e[r]=function(a,n,p){return(0,ve.serviceRequest)(e.baseUrl+"/"+r,a,n,p)}})))(de||(de={}));var E=o(i(),1);var S=class S extends E.PrefixedContext{constructor(s){if(super(s),!S.init){S.init=!0;var e=E.StringEditor;(0,E.initFormType)(S,["Name",e])}}};t(S,"GenreForm"),S.formKey="MovieDB.Genre";var Re=S;var V=o(i(),1);var O=class O extends V.ColumnsBase{};t(O,"MovieCastColumns"),O.columnsKey="MovieDB.MovieCast",O.Fields=(0,V.fieldsProxy)();var z=O;var D=o(i(),1);var q=class q extends D.PrefixedContext{constructor(s){if(super(s),!q.init){q.init=!0;var e=D.LookupEditor,r=D.StringEditor;(0,D.initFormType)(q,["PersonId",e,"Character",r])}}};t(q,"MovieCastForm"),q.formKey="MovieDB.MovieCast";var H=q;var ye=o(i(),1);var v=class v{};t(v,"MovieCastRow"),v.idProperty="MovieCastId",v.nameProperty="Character",v.localTextPrefix="MovieDB.MovieCast",v.deletePermission="Administration:General",v.insertPermission="Administration:General",v.readPermission="Administration:General",v.updatePermission="Administration:General",v.Fields=(0,ye.fieldsProxy)();var R=v;var fe=o(i(),1),W;(e=>(e.baseUrl="MovieDB/MovieCast",e.Methods={Create:"MovieDB/MovieCast/Create",Update:"MovieDB/MovieCast/Update",Delete:"MovieDB/MovieCast/Delete",Retrieve:"MovieDB/MovieCast/Retrieve",List:"MovieDB/MovieCast/List"},["Create","Update","Delete","Retrieve","List"].forEach(r=>{e[r]=function(a,n,p){return(0,fe.serviceRequest)(e.baseUrl+"/"+r,a,n,p)}})))(W||(W={}));var ge=o(i(),1),Pe=o(ee(),1);var De=o(i(),1),Me=o(ee(),1);var M=class extends Me.GridEditorDialog{constructor(){super(...arguments);this.form=new H(this.idPrefix)}getFormKey(){return H.formKey}getNameProperty(){return R.nameProperty}getLocalTextPrefix(){return R.localTextPrefix}};t(M,"MovieCastEditDialog"),M=x([De.Decorators.registerClass("MovieTutorial.MovieDB.MovieCastEditDialog")],M);var g=class extends Pe.GridEditorBase{getColumnsKey(){return z.columnsKey}getLocalTextPrefix(){return R.localTextPrefix}constructor(s){super(s)}getDialogType(){return M}getAddButtonCaption(){return"Add"}validateEntity(s,e){if(!super.validateEntity(s,e))return!1;var r=e!=null?e:s[this.getIdProperty()];return j.getLookupAsync().then(a=>{var p;var n=(p=this.view)==null?void 0:p.getItemById(r);n&&(n.PersonFullName=a.itemById[s.PersonId].FullName,this.view.updateItem(r,n))}),!0}};t(g,"MovieCastEditor"),g=x([ge.Decorators.registerEditor("MovieTutorial.MovieDB.MovieCastEditor")],g);var c=o(i(),1);var B=class B extends c.PrefixedContext{constructor(s){if(super(s),!B.init){B.init=!0;var e=c.TextAreaEditor,r=g,a=c.IntegerEditor,n=c.EnumEditor,p=c.LookupEditor,J=c.MultipleImageUploadEditor;(0,c.initFormType)(B,["Title",e,"Description",e,"CastList",r,"Storyline",e,"Year",a,"ReleaseDate",e,"Runtime",a,"Kind",n,"GenreList",p,"PrimaryImages",J,"GalleryImages",J])}}};t(B,"MovieForm"),B.formKey="MovieDB.Movie";var Ce=B;var qe=o(i(),1);var y=class y{};t(y,"MovieGenresRow"),y.idProperty="MovieGenreId",y.localTextPrefix="MovieDB.MovieGenres",y.deletePermission="Administration:General",y.insertPermission="Administration:General",y.readPermission="Administration:General",y.updatePermission="Administration:General",y.Fields=(0,qe.fieldsProxy)();var Se=y;var Le=o(i(),1),Be;(e=>(e.baseUrl="MovieDB/MovieGenres",e.Methods={Create:"MovieDB/MovieGenres/Create",Update:"MovieDB/MovieGenres/Update",Delete:"MovieDB/MovieGenres/Delete",Retrieve:"MovieDB/MovieGenres/Retrieve",List:"MovieDB/MovieGenres/List"},["Create","Update","Delete","Retrieve","List"].forEach(r=>{e[r]=function(a,n,p){return(0,Le.serviceRequest)(e.baseUrl+"/"+r,a,n,p)}})))(Be||(Be={}));var Z=o(i(),1);var P=class extends Z.EntityGrid{constructor(e){super(e)}getColumnsKey(){return $.columnsKey}getRowDefinition(){return R}getService(){return W.baseUrl}getButtons(){return null}getInitialTitle(){return null}usePager(){return!1}getGridCanLoad(){return this.personId!=null}get personId(){return this._personId}set personId(e){this._personId!=e&&(this._personId=e,this.setEquality(R.Fields.PersonId,e),this.refresh())}};t(P,"PersonMovieGrid"),P=x([Z.Decorators.registerEditor("MovieTutorial.MovieDB.PersonMovieGrid")],P);var l=o(i(),1);var L=class L extends l.PrefixedContext{constructor(s){if(super(s),!L.init){L.init=!0;var e=l.StringEditor,r=l.DateEditor,a=l.EnumEditor,n=l.IntegerEditor,p=P,J=l.ImageUploadEditor,Ge=l.MultipleImageUploadEditor;(0,l.initFormType)(L,["FirstName",e,"LastName",e,"BirthDate",r,"BirthPlace",e,"Gender",a,"Height",n,"MoviesGris",p,"PrimaryImage",J,"GalleryImages",Ge])}}};t(L,"PersonForm"),L.formKey="MovieDB.Person";var Ie=L;var _=o(i(),1);var w=class w extends _.ColumnsBase{};t(w,"PersonMovieColumns"),w.columnsKey="MovieTutorial.MovieDB.Columns.PersonMovieColumns",w.Fields=(0,_.fieldsProxy)();var $=w;export{te as a,Re as b,X as c,re as d,ne as e,Ce as f,ae as g,le as h,ue as i,Ie as j,j as k,de as l};
//# sourceMappingURL=chunk-JNQ3UZYW.js.map
