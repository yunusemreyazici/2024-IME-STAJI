import{a as u,b as s,c as e,d as i}from"../../../_chunks/chunk-YJXLW3ZO.js";import{c as o,e as a,f as n,h as m}from"../../../_chunks/chunk-CFICWFWM.js";var d=a(m(),1);var c=a(m(),1);var t=class extends c.EntityDialog{constructor(){super(...arguments);this.form=new s(this.idPrefix)}getFormKey(){return s.formKey}getIdProperty(){return e.idProperty}getLocalTextPrefix(){return e.localTextPrefix}getNameProperty(){return e.nameProperty}getService(){return i.baseUrl}};o(t,"LanguageDialog"),t=n([c.Decorators.registerClass("MultiTenancy.Administration.LanguageDialog")],t);var p=a(m(),1);var r=class extends p.EntityGrid{useAsync(){return!0}getColumnsKey(){return u.columnsKey}getDialogType(){return t}getIdProperty(){return e.idProperty}getLocalTextPrefix(){return e.localTextPrefix}getService(){return i.baseUrl}afterInit(){super.afterInit()}getDefaultSortBy(){return[e.Fields.LanguageName]}};o(r,"LanguageGrid"),r=n([p.Decorators.registerClass("MultiTenancy.Administration.LanguageGrid")],r);$(function(){(0,d.initFullHeightGridPage)(new r($("#GridDiv")).element)});
//# sourceMappingURL=LanguagePage.js.map