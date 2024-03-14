import {PersonForm, PersonRow, PersonService} from '@/ServerTypes/MovieDB';
import {Decorators, EntityDialog} from '@serenity-is/corelib';


@Decorators.panel()

@Decorators.registerClass('MovieTutorial.MovieDB.PersonDialog')
export class PersonDialog extends EntityDialog<PersonRow, any> {
    protected getFormKey() {
        return PersonForm.formKey;
    }

    protected getRowDefinition() {
        return PersonRow;
    }

    protected getService() {
        return PersonService.baseUrl;
    }

    protected afterLoadEntity() {
        {
            super.afterLoadEntity();
            this.form.MoviesGris.personId=this.entityId;
        }
    }

    protected form = new PersonForm(this.idPrefix);
}