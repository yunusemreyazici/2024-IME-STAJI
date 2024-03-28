import { StringEditor, PrefixedContext, initFormType } from "@serenity-is/corelib";

export interface BusinessTripDetailForm {
    Coordinate: StringEditor;
}

export class BusinessTripDetailForm extends PrefixedContext {
    static readonly formKey = 'Trip.BusinessTripDetail';
    private static init: boolean;

    constructor(prefix: string) {
        super(prefix);

        if (!BusinessTripDetailForm.init)  {
            BusinessTripDetailForm.init = true;

            var w0 = StringEditor;

            initFormType(BusinessTripDetailForm, [
                'Coordinate', w0
            ]);
        }
    }
}