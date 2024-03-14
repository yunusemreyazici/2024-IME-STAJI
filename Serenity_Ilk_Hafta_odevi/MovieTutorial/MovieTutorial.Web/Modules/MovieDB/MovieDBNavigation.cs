using Serenity.Navigation;
using MyPages = MovieTutorial.MovieDB.Pages;

[assembly: NavigationMenu(6000, "Movie Database", icon: "fa-film")]
[assembly: NavigationLink(6100, "Movie Database/Movies",
    typeof(MyPages.MoviePage), icon: "fa-video-camera")]
[assembly: NavigationLink(int.MaxValue, "MovieDB/Genre", typeof(MyPages.GenrePage), icon: null)]
[assembly: NavigationLink(6200, "Movie Database/Genres", typeof(MyPages.GenrePage), icon: "fa-thumb-tack")]
[assembly: NavigationLink(int.MaxValue, "MovieDB/Person", typeof(MyPages.PersonPage), icon: null)]
[assembly: NavigationLink(6300, "Movie Database/People", typeof(MyPages.PersonPage), icon: "fa-users")]
//[assembly: NavigationLink(int.MaxValue, "MovieDB/Movie Cast", typeof(MyPages.MovieCastPage), icon: null)]
