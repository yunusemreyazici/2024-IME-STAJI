using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System.ComponentModel;

namespace MultiTenancy.Administration;


[ConnectionKey("Default"), DisplayName("Tenants"),
 InstanceName("Tenant"), TwoLevelCached]
[ReadPermission(PermissionKeys.Tenants)]
[ModifyPermission(PermissionKeys.Tenants)]
[LookupScript("Administration.Tenant")]


public sealed class TenantRow : Row<TenantRow.RowFields>, IIdRow, INameRow{

    [DisplayName("Tenant Id"), Identity]
    public Int32? TenantId
    {
        get => Fields.TenantId[this];
        set => Fields.TenantId[this] = value;
    }

   // [DisplayName("Tenant Id"), Identity, IdProperty]
    //public int? TenantId { get => fields.TenantId[this]; set => fields.TenantId[this] = value; }

//    [DisplayName("Tenant Name"), Size(100), NotNull, QuickSearch, NameProperty]
   // public string TenantName { get => fields.TenantName[this]; set => fields.TenantName[this] = value; }



    public class RowFields : RowFieldsBase
    {
        public Int32Field TenantId;
        public StringField TenantName;

    }
}