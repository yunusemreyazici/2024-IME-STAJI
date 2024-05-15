import { DecimalEditor, StringEditor, PrefixedContext, initFormType } from "@serenity-is/corelib";

export interface LeafletForm {
    Latitude: DecimalEditor;
    Longitude: DecimalEditor;
    Leaflet: StringEditor;
}

export class LeafletForm extends PrefixedContext {
    static readonly formKey = 'AdvancedSamples.LeafletForm';
    private static init: boolean;

    constructor(prefix: string) {
        super(prefix);

        if (!LeafletForm.init)  {
            LeafletForm.init = true;

            var w0 = DecimalEditor;
            var w1 = StringEditor;

            initFormType(LeafletForm, [
                'Latitude', w0,
                'Longitude', w0,
                'Leaflet', w1
            ]);
        }
    }
}