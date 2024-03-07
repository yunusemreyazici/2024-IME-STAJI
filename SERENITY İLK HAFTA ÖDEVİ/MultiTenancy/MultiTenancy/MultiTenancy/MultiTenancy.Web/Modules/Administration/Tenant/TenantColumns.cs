﻿using Serenity.ComponentModel;
using System.ComponentModel;

namespace MultiTenancy.Administration.Columns;

[ColumnsScript("Administration.Tenant")]
[BasedOnRow(typeof(TenantRow), CheckNames = true)]
public class TenantColumns
{
    [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
    public int TenantId { get; set; }
    [EditLink]
    public string TenantName { get; set; }
}