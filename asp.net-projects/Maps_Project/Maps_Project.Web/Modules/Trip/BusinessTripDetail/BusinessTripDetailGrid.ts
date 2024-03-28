import { BusinessTripDetailColumns, BusinessTripDetailRow, BusinessTripDetailService } from '@/ServerTypes/Trip';
import { Decorators, EntityGrid } from '@serenity-is/corelib';
import { BusinessTripDetailDialog } from './BusinessTripDetailDialog';

@Decorators.registerClass('Maps_Project.Trip.BusinessTripDetailGrid')
export class BusinessTripDetailGrid extends EntityGrid<BusinessTripDetailRow> {
    protected getColumnsKey() { return BusinessTripDetailColumns.columnsKey; }
    protected getDialogType() { return BusinessTripDetailDialog; }
    protected getRowDefinition() { return BusinessTripDetailRow; }
    protected getService() { return BusinessTripDetailService.baseUrl; }
}