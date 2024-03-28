using Serenity.ComponentModel;

namespace Maps_Project.Trip.Forms;

[FormScript("Trip.BusinessTrip")]
[BasedOnRow(typeof(BusinessTripRow), CheckNames = true)]
public class BusinessTripForm
{
    public string Title { get; set; }
    public string Description { get; set; }


    [BusinessTripDetail]
    public List <BusinessTripDetailRow> DetailList { get; set; }



}