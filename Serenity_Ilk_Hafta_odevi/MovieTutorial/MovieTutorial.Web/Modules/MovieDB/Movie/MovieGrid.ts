import { MovieColumns, MovieRow, MovieService } from '@/ServerTypes/MovieDB';
import {Decorators, EntityGrid, first, LookupEditor} from '@serenity-is/corelib';
import {MovieListRequest} from "@/ServerTypes/MovieDB/MovieListRequest";
import {MovieDialog} from './MovieDialog';

@Decorators.registerClass('MovieTutorial.MovieDB.MovieGrid')
export class MovieGrid extends EntityGrid<MovieRow, any> {
    protected getColumnsKey() {
        return MovieColumns.columnsKey;
    }

    protected getDialogType() {
        return MovieDialog;
    }

    protected getRowDefinition() {
        return MovieRow;
    }

    protected getService() {
        return MovieService.baseUrl;
    }

    protected getQuickFilters() {
        let items = super.getQuickFilters();
        const genreListFilter = first(items, x =>
            x.field == MovieRow.Fields.GenreList);

        genreListFilter.handler = h => {
            const request = (h.request as MovieListRequest);
            const values = (h.widget as LookupEditor).values;
            request.Genres = values.map(x => parseInt(x, 10));
            h.handled = true;
        };
        return items;
    }


//constructor(container: JQuery) {
//  super(container);
//}
 }