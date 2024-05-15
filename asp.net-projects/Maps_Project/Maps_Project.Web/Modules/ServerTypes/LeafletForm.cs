namespace Serenity.Demo.AdvancedSamples.Forms;

[FormScript("AdvancedSamples.LeafletForm")]
public class LeafletForm
{
    [DisplayName("Latitude"), DecimalEditor(Decimals = 6, MinValue = -90, MaxValue = 90), HalfWidth]
    public decimal Latitude { get; set; }

    [DisplayName("Longitude"), DecimalEditor(Decimals = 6, MinValue = -180, MaxValue = 180), HalfWidth]
    public decimal Longitude { get; set; }

    [DisplayName("")]
    public object Leaflet { get; set; }
}