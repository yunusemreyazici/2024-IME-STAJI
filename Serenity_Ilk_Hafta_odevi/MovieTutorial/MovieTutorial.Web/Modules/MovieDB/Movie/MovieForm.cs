

namespace MovieTutorial.MovieDB.Forms;

[FormScript("MovieDB.Movie")]
[BasedOnRow(typeof(MovieRow))]
public class MovieForm
{
    [TextAreaEditor(Rows = 3)]
    public string Title { get; set; }
    [TextAreaEditor(Rows = 3)]
    public string Description { get; set; }
    [DisplayName("Cast"),MovieCastEditor,IgnoreName]
    public List<MovieCastRow> CastList { get; set; }
    [TextAreaEditor(Rows = 8)]
    public string Storyline { get; set; }
    public int Year { get; set; }
    [TextAreaEditor(Rows = 8)]
    public DateTime ReleaseDate { get; set; }
    public int Runtime { get; set; }
    public MovieKind Kind { get; set; }
    public List<int> GenreList { get; set; }

    public string PrimaryImages { get; set; }
    public string GalleryImages { get; set; }
}
