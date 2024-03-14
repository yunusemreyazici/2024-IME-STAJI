import { GridEditorBase } from "@serenity-is/extensions";
import { Decorators } from "@serenity-is/corelib";
import { MovieCastColumns, MovieCastRow} from "@/ServerTypes/MovieDB";

@Decorators.registerEditor('MovieTutorial.MovieDB.MovieCastEditor')
export class MovieCastEditor extends GridEditorBase<MovieCastRow> {
    protected getColumnsKey() {
        return MovieCastColumns.columnsKey;
    }

    protected getLocalTextPrefix() {
        return MovieCastRow.localTextPrefix;
    }


constructor(container: JQuery) {
  super(container);
}
 }