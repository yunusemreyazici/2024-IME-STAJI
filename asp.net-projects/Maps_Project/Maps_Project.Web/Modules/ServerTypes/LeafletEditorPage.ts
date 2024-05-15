import { LeafletForm } from "@/ServerTypes/Demo";
import { Decorators, EditorProps, IReadOnly, IStringValue, PropertyDialog, Widget, WidgetProps, toId } from "@serenity-is/corelib";

export default function pageInit() {
    new LeafletDialog({}).dialogOpen();
}

/**
 * This is an editor widget for Leaflet.
 */
@Decorators.registerEditor('Serenity.Demo.AdvancedSamples.LeafletEditor', [IStringValue, IReadOnly])
@Decorators.element('<div/>')
export class LeafletEditor<P extends Partial<L.MapOptions> = L.MapOptions> extends Widget<P> implements IReadOnly {

    private map: L.Map;
    private marker: L.Marker;

    constructor(props: EditorProps<P>) {
        super(props);

        this.domNode.style.position = 'relative';
        this.domNode.style.zIndex = '0';

        loadLeaflet().then((L) => {
            this.map = L.map(this.domNode, {
                center: { lat: this.Latitude, lng: this.Longitude },
                zoom: 15,
                ...this.options
            });

            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(this.map as any);

            this.marker = L.marker([this.Latitude, this.Longitude], {
                draggable: false
            }).addTo(this.map as any);

            this.map.on('click', (e: L.LeafletMouseEvent) => {
                this.Latitude = e.latlng.lat;
                this.Longitude = e.latlng.lng;

                if (this.onChangeEvent)
                    this.onChangeEvent(e.latlng);
            });
        });
    }

    private val: string;
    get_value(): string {
        return ${ this.Latitude },${ this.Longitude }
    }

    get value(): string {
        return this.get_value();
    }

    set_value(value: string): void {
        if (this.val == value)
            return;

        this.Latitude = toId(this.val.split(',')[0]);
        this.Longitude = toId(this.val.split(',')[1]);
    }

    set value(v: string) {
        this.set_value(v);
    }

    private latitude: number = 0;
    get Latitude(): number {
        return this.latitude;
    }

    private longitude: number = 0;
    get Longitude(): number {
        return this.longitude;
    }

    set Latitude(value: number) {
        this.latitude = value;
        this.marker?.setLatLng([this.Latitude, this.Longitude]);
        this.updateMap();
    }

    set Longitude(value: number) {
        this.longitude = value;
        this.marker?.setLatLng([this.Latitude, this.Longitude]);
        this.updateMap();
    }

    private updateMap() {
        if (!this.map)
            return;

        this.map.setView([this.Latitude, this.Longitude]);
    }

    get_readOnly(): boolean {
        return this.domNode.hasAttribute('disabled');
    }

    set_readOnly(value: boolean): void {
        if (this.get_readOnly() !== value) {
            if (value) {
                this.domNode.setAttribute('disabled', 'disabled');
            }
            else {
                this.domNode.removeAttribute('disabled');
            }
        }
    }

    private onChangeEvent: (latLng: L.LatLng) => void;
    public onChange(then: (latLng: L.LatLng) => void) {
        this.onChangeEvent = then;
    }

    public GetMap() {
        return this.map;
    }
}

let leaflet: typeof import("leaflet");

async function loadLeaflet(): Promise<typeof import("leaflet")> {
    if (leaflet)
        return leaflet;

    var cssUrl = "https://cdn.jsdelivr.net/npm/leaflet/dist/leaflet.css";
    if (!document.querySelector('link[href="' + cssUrl + '"]')) {
        const link = document.createElement('link') as HTMLLinkElement;
        link.rel = "stylesheet";
        link.href = cssUrl;
        link.integrity = "sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=";
        link.crossOrigin = "anonymous";
        document.head.appendChild(link);

        const darkThemeStyle = document.createElement('style') as HTMLStyleElement;
        darkThemeStyle.innerHTML = `
            [data-bs-theme="dark"] .leaflet-layer,
            [data-bs-theme="dark"] .leaflet-control-zoom-in,
            [data-bs-theme="dark"] .leaflet-control-zoom-out,
            [data-bs-theme="dark"] .leaflet-control-attribution { filter: invert(100%) hue-rotate(180deg) brightness(95%) contrast(90%) }
            [data-bs-theme="dark"] .leaflet-attribution-flag { filter:invert(100%) hue-rotate(180deg) brightness(105%) contrast(110%) }`;
        document.head.appendChild(darkThemeStyle);
    }

    leaflet = await import(${ "https://cdn.jsdelivr.net/npm/leaflet@1.9.4/+esm"});
    return leaflet;
}

@Decorators.registerClass('Serenity.Demo.AdvancedSamples.LeafletDialog')
@Decorators.staticPanel()
export class LeafletDialog<P = {}> extends PropertyDialog<any, P> {
    protected getFormKey() { return LeafletForm.formKey; }

    protected form = new LeafletForm(this.idPrefix);

    constructor(props: WidgetProps<P>) {
        super(props);

        this.dialogTitle = "Editor for Leaflet";
        this.form.Latitude.change(() => {
            this.form.Leaflet.Latitude = this.form.Latitude.value;
        })

        this.form.Longitude.change(() => {
            this.form.Leaflet.Longitude = this.form.Longitude.value;
        });

        this.form.Leaflet.onChange(latLng => {
            this.form.Latitude.value = latLng.lat;
            this.form.Longitude.value = latLng.lng;
        });

        this.form.Leaflet.Latitude = 40.6976637;
        this.form.Leaflet.Longitude = -74.1197638;
        this.form.Leaflet.getGridField().findFirst("label").remove();
        this.form.Latitude.value = this.form.Leaflet.Latitude;
        this.form.Longitude.value = this.form.Leaflet.Longitude;
    }
} import { LeafletForm } from "@/ServerTypes/Demo";
import { Decorators, EditorProps, IReadOnly, IStringValue, PropertyDialog, Widget, WidgetProps, toId } from "@serenity-is/corelib";

export default function pageInit() {
    new LeafletDialog({}).dialogOpen();
}

/**
 * This is an editor widget for Leaflet.
 */
@Decorators.registerEditor('Serenity.Demo.AdvancedSamples.LeafletEditor', [IStringValue, IReadOnly])
@Decorators.element('<div/>')
export class LeafletEditor<P extends Partial<L.MapOptions> = L.MapOptions> extends Widget<P> implements IReadOnly {

    private map: L.Map;
    private marker: L.Marker;

    constructor(props: EditorProps<P>) {
        super(props);

        this.domNode.style.position = 'relative';
        this.domNode.style.zIndex = '0';

        loadLeaflet().then((L) => {
            this.map = L.map(this.domNode, {
                center: { lat: this.Latitude, lng: this.Longitude },
                zoom: 15,
                ...this.options
            });

            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(this.map as any);

            this.marker = L.marker([this.Latitude, this.Longitude], {
                draggable: false
            }).addTo(this.map as any);

            this.map.on('click', (e: L.LeafletMouseEvent) => {
                this.Latitude = e.latlng.lat;
                this.Longitude = e.latlng.lng;

                if (this.onChangeEvent)
                    this.onChangeEvent(e.latlng);
            });
        });
    }

    private val: string;
    get_value(): string {
        return ${ this.Latitude },${ this.Longitude }
    }

    get value(): string {
        return this.get_value();
    }

    set_value(value: string): void {
        if (this.val == value)
            return;

        this.Latitude = toId(this.val.split(',')[0]);
        this.Longitude = toId(this.val.split(',')[1]);
    }

    set value(v: string) {
        this.set_value(v);
    }

    private latitude: number = 0;
    get Latitude(): number {
        return this.latitude;
    }

    private longitude: number = 0;
    get Longitude(): number {
        return this.longitude;
    }

    set Latitude(value: number) {
        this.latitude = value;
        this.marker?.setLatLng([this.Latitude, this.Longitude]);
        this.updateMap();
    }

    set Longitude(value: number) {
        this.longitude = value;
        this.marker?.setLatLng([this.Latitude, this.Longitude]);
        this.updateMap();
    }

    private updateMap() {
        if (!this.map)
            return;

        this.map.setView([this.Latitude, this.Longitude]);
    }

    get_readOnly(): boolean {
        return this.domNode.hasAttribute('disabled');
    }

    set_readOnly(value: boolean): void {
        if (this.get_readOnly() !== value) {
            if (value) {
                this.domNode.setAttribute('disabled', 'disabled');
            }
            else {
                this.domNode.removeAttribute('disabled');
            }
        }
    }

    private onChangeEvent: (latLng: L.LatLng) => void;
    public onChange(then: (latLng: L.LatLng) => void) {
        this.onChangeEvent = then;
    }

    public GetMap() {
        return this.map;
    }
}

let leaflet: typeof import("leaflet");

async function loadLeaflet(): Promise<typeof import("leaflet")> {
    if (leaflet)
        return leaflet;

    var cssUrl = "https://cdn.jsdelivr.net/npm/leaflet/dist/leaflet.css";
    if (!document.querySelector('link[href="' + cssUrl + '"]')) {
        const link = document.createElement('link') as HTMLLinkElement;
        link.rel = "stylesheet";
        link.href = cssUrl;
        link.integrity = "sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=";
        link.crossOrigin = "anonymous";
        document.head.appendChild(link);

        const darkThemeStyle = document.createElement('style') as HTMLStyleElement;
        darkThemeStyle.innerHTML = `
            [data-bs-theme="dark"] .leaflet-layer,
            [data-bs-theme="dark"] .leaflet-control-zoom-in,
            [data-bs-theme="dark"] .leaflet-control-zoom-out,
            [data-bs-theme="dark"] .leaflet-control-attribution { filter: invert(100%) hue-rotate(180deg) brightness(95%) contrast(90%) }
            [data-bs-theme="dark"] .leaflet-attribution-flag { filter:invert(100%) hue-rotate(180deg) brightness(105%) contrast(110%) }`;
        document.head.appendChild(darkThemeStyle);
    }

    leaflet = await import(${ "https://cdn.jsdelivr.net/npm/leaflet@1.9.4/+esm"});
    return leaflet;
}

@Decorators.registerClass('Serenity.Demo.AdvancedSamples.LeafletDialog')
@Decorators.staticPanel()
export class LeafletDialog<P = {}> extends PropertyDialog<any, P> {
    protected getFormKey() { return LeafletForm.formKey; }

    protected form = new LeafletForm(this.idPrefix);

    constructor(props: WidgetProps<P>) {
        super(props);

        this.dialogTitle = "Editor for Leaflet";
        this.form.Latitude.change(() => {
            this.form.Leaflet.Latitude = this.form.Latitude.value;
        })

        this.form.Longitude.change(() => {
            this.form.Leaflet.Longitude = this.form.Longitude.value;
        });

        this.form.Leaflet.onChange(latLng => {
            this.form.Latitude.value = latLng.lat;
            this.form.Longitude.value = latLng.lng;
        });

        this.form.Leaflet.Latitude = 40.6976637;
        this.form.Leaflet.Longitude = -74.1197638;
        this.form.Leaflet.getGridField().findFirst("label").remove();
        this.form.Latitude.value = this.form.Leaflet.Latitude;
        this.form.Longitude.value = this.form.Leaflet.Longitude;
    }
}