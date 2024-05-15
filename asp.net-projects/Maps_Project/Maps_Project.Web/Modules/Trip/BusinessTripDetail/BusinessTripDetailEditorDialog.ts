import { BusinessTripDetailForm, BusinessTripDetailRow, BusinessTripDetailService } from '@/ServerTypes/Trip';
import { Decorators, EntityDialog } from '@serenity-is/corelib';
import { EditorDialogBase } from '../../_Ext/Editors/EditorDialogBase';

@Decorators.registerClass('Maps_Project.Trip.BusinessTripDetailEditorDialog')
export class BusinessTripDetailEditorDialog extends EditorDialogBase<BusinessTripDetailRow> {
    protected getFormKey() { return BusinessTripDetailForm.formKey; }
    protected getRowDefinition() { return BusinessTripDetailRow; }
    protected getService() { return BusinessTripDetailService.baseUrl; }

    protected form = new BusinessTripDetailForm(this.idPrefix);
}