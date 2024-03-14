import { MovieCastForm, MovieCastRow, MovieCastService } from '@/ServerTypes/MovieDB';
import { Decorators, EntityDialog } from '@serenity-is/corelib';

@Decorators.registerClass('MovieTutorial.MovieDB.MovieCastDialog')
export class MovieCastDialog extends EntityDialog<MovieCastRow, any> {
    protected getFormKey() { return MovieCastForm.formKey; }
    protected getRowDefinition() { return MovieCastRow; }
    protected getService() { return MovieCastService.baseUrl; }

    protected form = new MovieCastForm(this.idPrefix);
}