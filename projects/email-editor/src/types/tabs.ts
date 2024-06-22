import { DisplayMode, Location, Tabs, Variant } from './StateTypes';
type ValueMap = {
    [id: string]: unknown;
};
export interface TabConfig<Values extends ValueMap = ValueMap> {
    id?: string;
    name: string;
    type?: string;
    slug?: string;
    label?: string;
    icon?: string | string[];
    renderer?: {
        Panel: any;
    };
    supportedDisplayModes?: DisplayMode[];
    supportedVariants?: Variant[];
    classic?: boolean;
    enabled?: boolean;
    position?: number;
    location?: Location;
}
export type TabConfigMap = {
    [id: string]: TabConfig;
};
export type PanelMap = {
    [id: string]: unknown;
};
export declare function getTabs(): TabConfig<ValueMap>[];
export declare function registerTab<Values extends ValueMap>(config: TabConfig<Values>): void;
export declare function getTabId<Values extends ValueMap>(config: TabConfig<Values> | string): string;
export declare function getCustomTabsCount(): number;
export declare function updateTabs(_tabs: Tabs): void;
export {};
