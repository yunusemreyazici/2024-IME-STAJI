using Serenity.Services;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<MovieTutorial.MovieDB.MovieRow>;
using MyRow = MovieTutorial.MovieDB.MovieRow;

namespace MovieTutorial.MovieDB;

public interface IMovieListHandler : IListHandler<MyRow, MovieListRequest, MyResponse> {}

public class MovieListHandler : ListRequestHandler<MyRow, MovieListRequest, MyResponse>, IMovieListHandler
{
    public MovieListHandler(IRequestContext context)
            : base(context)
    {
    }

    protected override void ApplyFilters(SqlQuery query)
    {
        base.ApplyFilters(query);
        if (!Request.Genres.IsEmptyOrNull())
        {
            var fld = MyRow.Fields;
            var mg = MovieGenresRow.Fields.As("mg");
            query.Where(Criteria.Exists(
                query.SubQuery()
                    .From(mg)
                    .Select("1")
                    .Where(
                        mg.MovieId == fld.MovieId &&
                        mg.GenreId.In(Request.Genres))
            ));
        }
    }
}