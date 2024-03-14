using Serenity.ComponentModel;
using System.ComponentModel;

namespace MovieTutorial.MovieDB.Columns;

[ColumnsScript("MovieDB.MovieCast")]
[BasedOnRow(typeof(MovieCastRow), CheckNames = true)]
public class MovieCastColumns
{
    //[EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
    //public int MovieCastId { get; set; }
    //ublic string MovieTitle { get; set; }
    //public string PersonFirstName { get; set; }
    //[EditLink]
    //public string Character { get; set; }
    [EditLink, Width(250)]
    public string PersonFullName { get; set; }
    [EditLink, Width(250)]
    public string Character { get; set; }
}