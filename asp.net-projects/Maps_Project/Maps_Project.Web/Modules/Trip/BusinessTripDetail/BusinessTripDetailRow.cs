using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System.ComponentModel;
using System.IO;

namespace Maps_Project.Trip;

[ConnectionKey("Default"), Module("Trip"), TableName("BusinessTripDetail")]
[DisplayName("Business Trip Detail"), InstanceName("Business Trip Detail"), GenerateFields]
[ReadPermission("Administration:General")]
[ModifyPermission("Administration:General")]
public sealed partial class BusinessTripDetailRow : Row<BusinessTripDetailRow.RowFields>, IIdRow
{
    const string jBusinessTrip = nameof(jBusinessTrip);

    [DisplayName("Id"), Identity, IdProperty]
    public int? Id { get => fields.Id[this]; set => fields.Id[this] = value; }

    [DisplayName("Business Trip"), ForeignKey(typeof(BusinessTripRow)), LeftJoin(jBusinessTrip), TextualField(nameof(BusinessTripTitle))]
    [ServiceLookupEditor(typeof(BusinessTripRow))]
    public int? BusinessTripId { get => fields.BusinessTripId[this]; set => fields.BusinessTripId[this] = value; }

    [DisplayName("Coordinate")]
    public Stream Coordinate { get => fields.Coordinate[this]; set => fields.Coordinate[this] = value; }

    [DisplayName("Business Trip Title"), Origin(jBusinessTrip, nameof(BusinessTripRow.Title))]
    public string BusinessTripTitle { get => fields.BusinessTripTitle[this]; set => fields.BusinessTripTitle[this] = value; }
}