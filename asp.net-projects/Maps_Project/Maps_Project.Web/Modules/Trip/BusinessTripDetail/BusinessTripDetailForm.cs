using Serenity.ComponentModel;
using System.IO;

namespace Maps_Project.Trip.Forms;

[FormScript("Trip.BusinessTripDetail")]
[BasedOnRow(typeof(BusinessTripDetailRow), CheckNames = true)]
public class BusinessTripDetailForm
{
    public string Coordinate { get; set; }
}