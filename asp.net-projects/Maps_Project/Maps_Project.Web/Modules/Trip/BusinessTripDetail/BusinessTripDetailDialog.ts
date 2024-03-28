import { BusinessTripDetailForm, BusinessTripDetailRow, BusinessTripDetailService } from '@/ServerTypes/Trip';
import { Decorators, EntityDialog } from '@serenity-is/corelib';

@Decorators.registerClass('Maps_Project.Trip.BusinessTripDetailDialog')
export class BusinessTripDetailDialog extends EntityDialog<BusinessTripDetailRow, any> {
    protected getFormKey() { return BusinessTripDetailForm.formKey; }
    protected getRowDefinition() { return BusinessTripDetailRow; }
    protected getService() { return BusinessTripDetailService.baseUrl; }

    protected form = new BusinessTripDetailForm(this.idPrefix);
}