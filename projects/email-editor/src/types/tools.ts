// import Mustache from 'mustache';
import { DisplayMode, DesignTags, Collection, Location, Device, Variant, DesignMode, Validator, DisplayConditions, Container } from './StateTypes';
import { RootState } from './RootState';
import { DeepPartial, EditorProps } from './types';


export interface PropertyEditorConfig<Props extends EditorProps<any>> {
    id?: string;
    name: string;
    Widget: any;
    layout?: 'right' | 'bottom';
    renderValue?: (value: any) => any;
    deviceStyles?: (value: Props['value'], extra: {
        collection: Collection;
        device: Device;
        displayMode: DisplayMode;
        getDefaultSelectorForCSSProperty: (cssProperty: string | undefined) => string | undefined;
        htmlID: string;
        optionName: string;
        bodyValues: {
            [name: string]: any;
        };
    }) => {
        _css?: string;
        [key: string]: string | undefined;
    };
}
export type PropertyEditorConfigMap = {
    [id: string]: PropertyEditorConfig<any>;
};
export interface OptionConfig<Values extends ValueMap = ValueMap, Value = unknown> {
    id?: string;
    type?: string;
    slug?: string;
    label?: string;
    defaultValue?: Value;
    widget?: string;
    hideOnOfflineMode?: boolean;
    widgetParams?: {
        [key: string]: any;
        shouldRender?: false | object;
    } | ((info: {
        deviceName: Device;
        displayMode: DisplayMode;
    }) => object);
    data?: object;
    enabled?: boolean;
    hidden?: boolean;
    options?: OptionGroupConfigMap<Values>;
    supportedDisplayModes?: DisplayMode[];
    overrideAllowed?: Device[];
    _override?: Partial<Record<Device, Omit<OptionConfig<Values, Value>, 'overrideAllowed' | '_override'>>>;
}
export type OptionConfigMap<Values extends ValueMap = ValueMap> = {
    [K in keyof Values]: OptionConfig<Values, Values[K]>;
};
export type OptionGroupEmbeddedConfig<Values extends ValueMap = ValueMap> = {
    collection: Collection;
    type: string;
    source: string;
    tabLabel: string;
    insertCount?: number;
    optionGroups?: Record<string, {
        optionsOverride?: OptionConfigMap<Partial<Values>>;
    }>;
};
export type OptionGroupConfig<Values extends ValueMap = ValueMap> = {
    rightLabel?: string;
    title: string | null;
    icon?: string | string[];
    position?: number;
    supportedDesignModes?: string[];
    enabled?: boolean;
    hideOnOfflineMode?: boolean;
    noContentPadding?: boolean;
    ai?: boolean;
} & ({
    embedded?: never;
    options: OptionConfigMap<Partial<Values>>;
} | {
    embedded: OptionGroupEmbeddedConfig<Values>;
    options?: never;
});
export type OptionGroupConfigMap<Values extends ValueMap = ValueMap> = {
    [id: string]: OptionGroupConfig<Values>;
};
export type ToolOptionGroupConfigMap = {
    [id: string]: OptionGroupConfigMap;
};
export type ValueMap = {
    [id: string]: unknown;
};
export interface ToolOverride<Values extends ValueMap = ValueMap> extends DeepPartial<ToolConfig<Values>> {
    sections?: Record<string, {
        editor: Pick<OptionGroupConfig<Values>, 'enabled'>;
    }>;
    properties?: Record<string, {
        editor?: OptionConfigMap<Partial<Values>>;
        value?: unknown;
    }>;
}
export interface ToolConfig<Values extends ValueMap = ValueMap, T = Validator> {
    id?: string;
    name?: string;
    type?: string;
    slug?: string;
    label?: string;
    icon?: string | string[];
    classicIcon?: string | string[];
    category?: Collection;
    cells?: number[];
    options?: OptionGroupConfigMap;
    data?: Values;
    values?: Values;
    css?: string;
    renderer?: object | Function;
    supportedDisplayModes?: DisplayMode[];
    supportedVariants?: Variant[];
    usageLimit?: number;
    transformer?: Function;
    hasDeprecatedFontControls?: boolean;
    applyDesignTags?: (values: Values, designTags: DesignTags, template: any) => Values;
    // applyDesignTags?: (values: Values, designTags: DesignTags, template: any typeof Mustache.render) => Values;
    propertyStates?: Function;
    premium?: boolean;
    editable?: boolean;
    classic?: boolean;
    enabled?: boolean;
    position?: number;
    location?: Location;
    validator?: T;
}
export type ToolConfigMap<T = Validator> = {
    [id: string]: ToolConfig<ValueMap, T>;
};
export interface PremiumToolConfig {
    enabled?: boolean;
}
export type PremiumToolConfigMap = {
    [id: string]: PremiumToolConfig;
};
export type ViewerMap = {
    [id: string]: unknown;
};
export type ExportersMap = {
    [id: string]: Record<string, Function> | undefined;
};
export type HeadsMap = {
    [id: string]: unknown;
};
export type ValidatorsMap = {
    [id: string]: Validator;
};
export declare function loadOptions(newOptions: ToolOptionGroupConfigMap): void;
export declare function overrideOptions(newOverrideOptions: ToolOptionGroupConfigMap): void;
export declare function getOptionGroups(collection: Collection, config?: Parameters<typeof getOptionId>[0], forCurrentDevice?: Device | undefined): OptionGroupConfigMap;
export declare function getOptions(collection: Collection | undefined, config?: OptionConfig | undefined, forCurrentDevice?: Device | undefined): OptionConfigMap;
export declare function getInitialValues(collection: Collection, config?: Parameters<typeof getOptionGroups>[1], forCurrentDevice?: Device | undefined): {
    [id: string]: unknown;
};
export declare function getInitialValuesFromOptionGroup(optionGroup: {
    options?: OptionConfigMap;
} | undefined): Record<string, unknown>;
export declare function loadTools(newTools: ToolConfigMap): void;
export declare function overrideTools(newOverrideTools: Record<string, ToolOverride>): void;
export declare function getOverrideToolById(id: string): {
    id?: string;
    name?: string;
    type?: string;
    slug?: string;
    label?: string;
    icon?: string | string[];
    classicIcon?: string | string[];
    category?: Collection;
    cells?: number[];
    options?: {
        [x: string]: {
            rightLabel?: string;
            title?: string;
            icon?: string | string[];
            position?: number;
            supportedDesignModes?: string[];
            enabled?: boolean;
            hideOnOfflineMode?: boolean;
            noContentPadding?: boolean;
            ai?: boolean;
            embedded?: never;
            options?: {
                [x: string]: {
                    id?: string;
                    type?: string;
                    slug?: string;
                    label?: string;
                    defaultValue?: unknown;
                    widget?: string;
                    hideOnOfflineMode?: boolean;
                    widgetParams?: {
                        [x: string]: any;
                        shouldRender?: false | object;
                    } | {};
                    data?: object;
                    enabled?: boolean;
                    hidden?: boolean;
                    options?: {
                        [x: string]: {
                            rightLabel?: string;
                            title?: string;
                            icon?: string | string[];
                            position?: number;
                            supportedDesignModes?: string[];
                            enabled?: boolean;
                            hideOnOfflineMode?: boolean;
                            noContentPadding?: boolean;
                            ai?: boolean;
                            embedded?: never;
                            options?: {
                                [x: string]: {
                                    id?: string;
                                    type?: string;
                                    slug?: string;
                                    label?: string;
                                    defaultValue?: unknown;
                                    widget?: string;
                                    hideOnOfflineMode?: boolean;
                                    widgetParams?: {
                                        [x: string]: any;
                                        shouldRender?: false | object;
                                    } | {};
                                    data?: object;
                                    enabled?: boolean;
                                    hidden?: boolean;
                                    options?: {
                                        [x: string]: {
                                            rightLabel?: string;
                                            title?: string;
                                            icon?: string | string[];
                                            position?: number;
                                            supportedDesignModes?: string[];
                                            enabled?: boolean;
                                            hideOnOfflineMode?: boolean;
                                            noContentPadding?: boolean;
                                            ai?: boolean;
                                            embedded?: never;
                                            options?: any;
                                        } | {
                                            rightLabel?: string;
                                            title?: string;
                                            icon?: string | string[];
                                            position?: number;
                                            supportedDesignModes?: string[];
                                            enabled?: boolean;
                                            hideOnOfflineMode?: boolean;
                                            noContentPadding?: boolean;
                                            ai?: boolean;
                                            embedded?: any;
                                            options?: never;
                                        };
                                    };
                                    supportedDisplayModes?: DisplayMode[];
                                    overrideAllowed?: Device[];
                                    _override?: {
                                        mobile?: {
                                            type?: string;
                                            data?: object;
                                            id?: string;
                                            hidden?: boolean;
                                            label?: string;
                                            options?: {
                                                [x: string]: {
                                                    rightLabel?: string;
                                                    title?: string;
                                                    icon?: string | string[];
                                                    position?: number;
                                                    supportedDesignModes?: string[];
                                                    enabled?: boolean;
                                                    hideOnOfflineMode?: boolean;
                                                    noContentPadding?: boolean;
                                                    ai?: boolean;
                                                    embedded?: never;
                                                    options?: any;
                                                } | {
                                                    rightLabel?: string;
                                                    title?: string;
                                                    icon?: string | string[];
                                                    position?: number;
                                                    supportedDesignModes?: string[];
                                                    enabled?: boolean;
                                                    hideOnOfflineMode?: boolean;
                                                    noContentPadding?: boolean;
                                                    ai?: boolean;
                                                    embedded?: any;
                                                    options?: never;
                                                };
                                            };
                                            enabled?: boolean;
                                            defaultValue?: unknown;
                                            slug?: string;
                                            widgetParams?: {
                                                [x: string]: any;
                                                shouldRender?: false | object;
                                            } | {};
                                            widget?: string;
                                            hideOnOfflineMode?: boolean;
                                            supportedDisplayModes?: DisplayMode[];
                                        };
                                        tablet?: {
                                            type?: string;
                                            data?: object;
                                            id?: string;
                                            hidden?: boolean;
                                            label?: string;
                                            options?: {
                                                [x: string]: {
                                                    rightLabel?: string;
                                                    title?: string;
                                                    icon?: string | string[];
                                                    position?: number;
                                                    supportedDesignModes?: string[];
                                                    enabled?: boolean;
                                                    hideOnOfflineMode?: boolean;
                                                    noContentPadding?: boolean;
                                                    ai?: boolean;
                                                    embedded?: never;
                                                    options?: any;
                                                } | {
                                                    rightLabel?: string;
                                                    title?: string;
                                                    icon?: string | string[];
                                                    position?: number;
                                                    supportedDesignModes?: string[];
                                                    enabled?: boolean;
                                                    hideOnOfflineMode?: boolean;
                                                    noContentPadding?: boolean;
                                                    ai?: boolean;
                                                    embedded?: any;
                                                    options?: never;
                                                };
                                            };
                                            enabled?: boolean;
                                            defaultValue?: unknown;
                                            slug?: string;
                                            widgetParams?: {
                                                [x: string]: any;
                                                shouldRender?: false | object;
                                            } | {};
                                            widget?: string;
                                            hideOnOfflineMode?: boolean;
                                            supportedDisplayModes?: DisplayMode[];
                                        };
                                        desktop?: {
                                            type?: string;
                                            data?: object;
                                            id?: string;
                                            hidden?: boolean;
                                            label?: string;
                                            options?: {
                                                [x: string]: {
                                                    rightLabel?: string;
                                                    title?: string;
                                                    icon?: string | string[];
                                                    position?: number;
                                                    supportedDesignModes?: string[];
                                                    enabled?: boolean;
                                                    hideOnOfflineMode?: boolean;
                                                    noContentPadding?: boolean;
                                                    ai?: boolean;
                                                    embedded?: never;
                                                    options?: any;
                                                } | {
                                                    rightLabel?: string;
                                                    title?: string;
                                                    icon?: string | string[];
                                                    position?: number;
                                                    supportedDesignModes?: string[];
                                                    enabled?: boolean;
                                                    hideOnOfflineMode?: boolean;
                                                    noContentPadding?: boolean;
                                                    ai?: boolean;
                                                    embedded?: any;
                                                    options?: never;
                                                };
                                            };
                                            enabled?: boolean;
                                            defaultValue?: unknown;
                                            slug?: string;
                                            widgetParams?: {
                                                [x: string]: any;
                                                shouldRender?: false | object;
                                            } | {};
                                            widget?: string;
                                            hideOnOfflineMode?: boolean;
                                            supportedDisplayModes?: DisplayMode[];
                                        };
                                    };
                                };
                            };
                        } | {
                            rightLabel?: string;
                            title?: string;
                            icon?: string | string[];
                            position?: number;
                            supportedDesignModes?: string[];
                            enabled?: boolean;
                            hideOnOfflineMode?: boolean;
                            noContentPadding?: boolean;
                            ai?: boolean;
                            embedded?: {
                                collection?: Collection;
                                type?: string;
                                source?: string;
                                tabLabel?: string;
                                insertCount?: number;
                                optionGroups?: {
                                    [x: string]: {
                                        optionsOverride?: {
                                            [x: string]: {
                                                id?: string;
                                                type?: string;
                                                slug?: string;
                                                label?: string;
                                                defaultValue?: unknown;
                                                widget?: string;
                                                hideOnOfflineMode?: boolean;
                                                widgetParams?: {
                                                    [x: string]: any;
                                                    shouldRender?: false | object;
                                                } | {};
                                                data?: object;
                                                enabled?: boolean;
                                                hidden?: boolean;
                                                options?: {
                                                    [x: string]: {
                                                        rightLabel?: string;
                                                        title?: string;
                                                        icon?: string | string[];
                                                        position?: number;
                                                        supportedDesignModes?: string[];
                                                        enabled?: boolean;
                                                        hideOnOfflineMode?: boolean;
                                                        noContentPadding?: boolean;
                                                        ai?: boolean;
                                                        embedded?: never;
                                                        options?: any;
                                                    } | {
                                                        rightLabel?: string;
                                                        title?: string;
                                                        icon?: string | string[];
                                                        position?: number;
                                                        supportedDesignModes?: string[];
                                                        enabled?: boolean;
                                                        hideOnOfflineMode?: boolean;
                                                        noContentPadding?: boolean;
                                                        ai?: boolean;
                                                        embedded?: any;
                                                        options?: never;
                                                    };
                                                };
                                                supportedDisplayModes?: DisplayMode[];
                                                overrideAllowed?: Device[];
                                                _override?: {
                                                    mobile?: {
                                                        type?: string;
                                                        data?: object;
                                                        id?: string;
                                                        hidden?: boolean;
                                                        label?: string;
                                                        options?: {
                                                            [x: string]: {
                                                                rightLabel?: string;
                                                                title?: string;
                                                                icon?: string | string[];
                                                                position?: number;
                                                                supportedDesignModes?: string[];
                                                                enabled?: boolean;
                                                                hideOnOfflineMode?: boolean;
                                                                noContentPadding?: boolean;
                                                                ai?: boolean;
                                                                embedded?: never;
                                                                options?: any;
                                                            } | {
                                                                rightLabel?: string;
                                                                title?: string;
                                                                icon?: string | string[];
                                                                position?: number;
                                                                supportedDesignModes?: string[];
                                                                enabled?: boolean;
                                                                hideOnOfflineMode?: boolean;
                                                                noContentPadding?: boolean;
                                                                ai?: boolean;
                                                                embedded?: any;
                                                                options?: never;
                                                            };
                                                        };
                                                        enabled?: boolean;
                                                        defaultValue?: unknown;
                                                        slug?: string;
                                                        widgetParams?: {
                                                            [x: string]: any;
                                                            shouldRender?: false | object;
                                                        } | {};
                                                        widget?: string;
                                                        hideOnOfflineMode?: boolean;
                                                        supportedDisplayModes?: DisplayMode[];
                                                    };
                                                    tablet?: {
                                                        type?: string;
                                                        data?: object;
                                                        id?: string;
                                                        hidden?: boolean;
                                                        label?: string;
                                                        options?: {
                                                            [x: string]: {
                                                                rightLabel?: string;
                                                                title?: string;
                                                                icon?: string | string[];
                                                                position?: number;
                                                                supportedDesignModes?: string[];
                                                                enabled?: boolean;
                                                                hideOnOfflineMode?: boolean;
                                                                noContentPadding?: boolean;
                                                                ai?: boolean;
                                                                embedded?: never;
                                                                options?: any;
                                                            } | {
                                                                rightLabel?: string;
                                                                title?: string;
                                                                icon?: string | string[];
                                                                position?: number;
                                                                supportedDesignModes?: string[];
                                                                enabled?: boolean;
                                                                hideOnOfflineMode?: boolean;
                                                                noContentPadding?: boolean;
                                                                ai?: boolean;
                                                                embedded?: any;
                                                                options?: never;
                                                            };
                                                        };
                                                        enabled?: boolean;
                                                        defaultValue?: unknown;
                                                        slug?: string;
                                                        widgetParams?: {
                                                            [x: string]: any;
                                                            shouldRender?: false | object;
                                                        } | {};
                                                        widget?: string;
                                                        hideOnOfflineMode?: boolean;
                                                        supportedDisplayModes?: DisplayMode[];
                                                    };
                                                    desktop?: {
                                                        type?: string;
                                                        data?: object;
                                                        id?: string;
                                                        hidden?: boolean;
                                                        label?: string;
                                                        options?: {
                                                            [x: string]: {
                                                                rightLabel?: string;
                                                                title?: string;
                                                                icon?: string | string[];
                                                                position?: number;
                                                                supportedDesignModes?: string[];
                                                                enabled?: boolean;
                                                                hideOnOfflineMode?: boolean;
                                                                noContentPadding?: boolean;
                                                                ai?: boolean;
                                                                embedded?: never;
                                                                options?: any;
                                                            } | {
                                                                rightLabel?: string;
                                                                title?: string;
                                                                icon?: string | string[];
                                                                position?: number;
                                                                supportedDesignModes?: string[];
                                                                enabled?: boolean;
                                                                hideOnOfflineMode?: boolean;
                                                                noContentPadding?: boolean;
                                                                ai?: boolean;
                                                                embedded?: any;
                                                                options?: never;
                                                            };
                                                        };
                                                        enabled?: boolean;
                                                        defaultValue?: unknown;
                                                        slug?: string;
                                                        widgetParams?: {
                                                            [x: string]: any;
                                                            shouldRender?: false | object;
                                                        } | {};
                                                        widget?: string;
                                                        hideOnOfflineMode?: boolean;
                                                        supportedDisplayModes?: DisplayMode[];
                                                    };
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                            options?: never;
                        };
                    };
                    supportedDisplayModes?: DisplayMode[];
                    overrideAllowed?: Device[];
                    _override?: {
                        mobile?: {
                            type?: string;
                            data?: object;
                            id?: string;
                            hidden?: boolean;
                            label?: string;
                            options?: {
                                [x: string]: {
                                    rightLabel?: string;
                                    title?: string;
                                    icon?: string | string[];
                                    position?: number;
                                    supportedDesignModes?: string[];
                                    enabled?: boolean;
                                    hideOnOfflineMode?: boolean;
                                    noContentPadding?: boolean;
                                    ai?: boolean;
                                    embedded?: never;
                                    options?: {
                                        [x: string]: {
                                            id?: string;
                                            type?: string;
                                            slug?: string;
                                            label?: string;
                                            defaultValue?: unknown;
                                            widget?: string;
                                            hideOnOfflineMode?: boolean;
                                            widgetParams?: {
                                                [x: string]: any;
                                                shouldRender?: false | object;
                                            } | {};
                                            data?: object;
                                            enabled?: boolean;
                                            hidden?: boolean;
                                            options?: {
                                                [x: string]: {
                                                    rightLabel?: string;
                                                    title?: string;
                                                    icon?: string | string[];
                                                    position?: number;
                                                    supportedDesignModes?: string[];
                                                    enabled?: boolean;
                                                    hideOnOfflineMode?: boolean;
                                                    noContentPadding?: boolean;
                                                    ai?: boolean;
                                                    embedded?: never;
                                                    options?: any;
                                                } | {
                                                    rightLabel?: string;
                                                    title?: string;
                                                    icon?: string | string[];
                                                    position?: number;
                                                    supportedDesignModes?: string[];
                                                    enabled?: boolean;
                                                    hideOnOfflineMode?: boolean;
                                                    noContentPadding?: boolean;
                                                    ai?: boolean;
                                                    embedded?: any;
                                                    options?: never;
                                                };
                                            };
                                            supportedDisplayModes?: DisplayMode[];
                                            overrideAllowed?: Device[];
                                            _override?: {
                                                mobile?: {
                                                    type?: string;
                                                    data?: object;
                                                    id?: string;
                                                    hidden?: boolean;
                                                    label?: string;
                                                    options?: {
                                                        [x: string]: {
                                                            rightLabel?: string;
                                                            title?: string;
                                                            icon?: string | string[];
                                                            position?: number;
                                                            supportedDesignModes?: string[];
                                                            enabled?: boolean;
                                                            hideOnOfflineMode?: boolean;
                                                            noContentPadding?: boolean;
                                                            ai?: boolean;
                                                            embedded?: never;
                                                            options?: any;
                                                        } | {
                                                            rightLabel?: string;
                                                            title?: string;
                                                            icon?: string | string[];
                                                            position?: number;
                                                            supportedDesignModes?: string[];
                                                            enabled?: boolean;
                                                            hideOnOfflineMode?: boolean;
                                                            noContentPadding?: boolean;
                                                            ai?: boolean;
                                                            embedded?: any;
                                                            options?: never;
                                                        };
                                                    };
                                                    enabled?: boolean;
                                                    defaultValue?: unknown;
                                                    slug?: string;
                                                    widgetParams?: {
                                                        [x: string]: any;
                                                        shouldRender?: false | object;
                                                    } | {};
                                                    widget?: string;
                                                    hideOnOfflineMode?: boolean;
                                                    supportedDisplayModes?: DisplayMode[];
                                                };
                                                tablet?: {
                                                    type?: string;
                                                    data?: object;
                                                    id?: string;
                                                    hidden?: boolean;
                                                    label?: string;
                                                    options?: {
                                                        [x: string]: {
                                                            rightLabel?: string;
                                                            title?: string;
                                                            icon?: string | string[];
                                                            position?: number;
                                                            supportedDesignModes?: string[];
                                                            enabled?: boolean;
                                                            hideOnOfflineMode?: boolean;
                                                            noContentPadding?: boolean;
                                                            ai?: boolean;
                                                            embedded?: never;
                                                            options?: any;
                                                        } | {
                                                            rightLabel?: string;
                                                            title?: string;
                                                            icon?: string | string[];
                                                            position?: number;
                                                            supportedDesignModes?: string[];
                                                            enabled?: boolean;
                                                            hideOnOfflineMode?: boolean;
                                                            noContentPadding?: boolean;
                                                            ai?: boolean;
                                                            embedded?: any;
                                                            options?: never;
                                                        };
                                                    };
                                                    enabled?: boolean;
                                                    defaultValue?: unknown;
                                                    slug?: string;
                                                    widgetParams?: {
                                                        [x: string]: any;
                                                        shouldRender?: false | object;
                                                    } | {};
                                                    widget?: string;
                                                    hideOnOfflineMode?: boolean;
                                                    supportedDisplayModes?: DisplayMode[];
                                                };
                                                desktop?: {
                                                    type?: string;
                                                    data?: object;
                                                    id?: string;
                                                    hidden?: boolean;
                                                    label?: string;
                                                    options?: {
                                                        [x: string]: {
                                                            rightLabel?: string;
                                                            title?: string;
                                                            icon?: string | string[];
                                                            position?: number;
                                                            supportedDesignModes?: string[];
                                                            enabled?: boolean;
                                                            hideOnOfflineMode?: boolean;
                                                            noContentPadding?: boolean;
                                                            ai?: boolean;
                                                            embedded?: never;
                                                            options?: any;
                                                        } | {
                                                            rightLabel?: string;
                                                            title?: string;
                                                            icon?: string | string[];
                                                            position?: number;
                                                            supportedDesignModes?: string[];
                                                            enabled?: boolean;
                                                            hideOnOfflineMode?: boolean;
                                                            noContentPadding?: boolean;
                                                            ai?: boolean;
                                                            embedded?: any;
                                                            options?: never;
                                                        };
                                                    };
                                                    enabled?: boolean;
                                                    defaultValue?: unknown;
                                                    slug?: string;
                                                    widgetParams?: {
                                                        [x: string]: any;
                                                        shouldRender?: false | object;
                                                    } | {};
                                                    widget?: string;
                                                    hideOnOfflineMode?: boolean;
                                                    supportedDisplayModes?: DisplayMode[];
                                                };
                                            };
                                        };
                                    };
                                } | {
                                    rightLabel?: string;
                                    title?: string;
                                    icon?: string | string[];
                                    position?: number;
                                    supportedDesignModes?: string[];
                                    enabled?: boolean;
                                    hideOnOfflineMode?: boolean;
                                    noContentPadding?: boolean;
                                    ai?: boolean;
                                    embedded?: {
                                        collection?: Collection;
                                        type?: string;
                                        source?: string;
                                        tabLabel?: string;
                                        insertCount?: number;
                                        optionGroups?: {
                                            [x: string]: {
                                                optionsOverride?: {
                                                    [x: string]: {
                                                        id?: string;
                                                        type?: string;
                                                        slug?: string;
                                                        label?: string;
                                                        defaultValue?: unknown;
                                                        widget?: string;
                                                        hideOnOfflineMode?: boolean;
                                                        widgetParams?: {
                                                            [x: string]: any;
                                                            shouldRender?: false | object;
                                                        } | {};
                                                        data?: object;
                                                        enabled?: boolean;
                                                        hidden?: boolean;
                                                        options?: {
                                                            [x: string]: {
                                                                rightLabel?: string;
                                                                title?: string;
                                                                icon?: string | string[];
                                                                position?: number;
                                                                supportedDesignModes?: string[];
                                                                enabled?: boolean;
                                                                hideOnOfflineMode?: boolean;
                                                                noContentPadding?: boolean;
                                                                ai?: boolean;
                                                                embedded?: never;
                                                                options?: any;
                                                            } | {
                                                                rightLabel?: string;
                                                                title?: string;
                                                                icon?: string | string[];
                                                                position?: number;
                                                                supportedDesignModes?: string[];
                                                                enabled?: boolean;
                                                                hideOnOfflineMode?: boolean;
                                                                noContentPadding?: boolean;
                                                                ai?: boolean;
                                                                embedded?: any;
                                                                options?: never;
                                                            };
                                                        };
                                                        supportedDisplayModes?: DisplayMode[];
                                                        overrideAllowed?: Device[];
                                                        _override?: {
                                                            mobile?: {
                                                                type?: string;
                                                                data?: object;
                                                                id?: string;
                                                                hidden?: boolean;
                                                                label?: string;
                                                                options?: {
                                                                    [x: string]: {
                                                                        rightLabel?: string;
                                                                        title?: string;
                                                                        icon?: string | string[];
                                                                        position?: number;
                                                                        supportedDesignModes?: string[];
                                                                        enabled?: boolean;
                                                                        hideOnOfflineMode?: boolean;
                                                                        noContentPadding?: boolean;
                                                                        ai?: boolean;
                                                                        embedded?: never;
                                                                        options?: any;
                                                                    } | {
                                                                        rightLabel?: string;
                                                                        title?: string;
                                                                        icon?: string | string[];
                                                                        position?: number;
                                                                        supportedDesignModes?: string[];
                                                                        enabled?: boolean;
                                                                        hideOnOfflineMode?: boolean;
                                                                        noContentPadding?: boolean;
                                                                        ai?: boolean;
                                                                        embedded?: any;
                                                                        options?: never;
                                                                    };
                                                                };
                                                                enabled?: boolean;
                                                                defaultValue?: unknown;
                                                                slug?: string;
                                                                widgetParams?: {
                                                                    [x: string]: any;
                                                                    shouldRender?: false | object;
                                                                } | {};
                                                                widget?: string;
                                                                hideOnOfflineMode?: boolean;
                                                                supportedDisplayModes?: DisplayMode[];
                                                            };
                                                            tablet?: {
                                                                type?: string;
                                                                data?: object;
                                                                id?: string;
                                                                hidden?: boolean;
                                                                label?: string;
                                                                options?: {
                                                                    [x: string]: {
                                                                        rightLabel?: string;
                                                                        title?: string;
                                                                        icon?: string | string[];
                                                                        position?: number;
                                                                        supportedDesignModes?: string[];
                                                                        enabled?: boolean;
                                                                        hideOnOfflineMode?: boolean;
                                                                        noContentPadding?: boolean;
                                                                        ai?: boolean;
                                                                        embedded?: never;
                                                                        options?: any;
                                                                    } | {
                                                                        rightLabel?: string;
                                                                        title?: string;
                                                                        icon?: string | string[];
                                                                        position?: number;
                                                                        supportedDesignModes?: string[];
                                                                        enabled?: boolean;
                                                                        hideOnOfflineMode?: boolean;
                                                                        noContentPadding?: boolean;
                                                                        ai?: boolean;
                                                                        embedded?: any;
                                                                        options?: never;
                                                                    };
                                                                };
                                                                enabled?: boolean;
                                                                defaultValue?: unknown;
                                                                slug?: string;
                                                                widgetParams?: {
                                                                    [x: string]: any;
                                                                    shouldRender?: false | object;
                                                                } | {};
                                                                widget?: string;
                                                                hideOnOfflineMode?: boolean;
                                                                supportedDisplayModes?: DisplayMode[];
                                                            };
                                                            desktop?: {
                                                                type?: string;
                                                                data?: object;
                                                                id?: string;
                                                                hidden?: boolean;
                                                                label?: string;
                                                                options?: {
                                                                    [x: string]: {
                                                                        rightLabel?: string;
                                                                        title?: string;
                                                                        icon?: string | string[];
                                                                        position?: number;
                                                                        supportedDesignModes?: string[];
                                                                        enabled?: boolean;
                                                                        hideOnOfflineMode?: boolean;
                                                                        noContentPadding?: boolean;
                                                                        ai?: boolean;
                                                                        embedded?: never;
                                                                        options?: any;
                                                                    } | {
                                                                        rightLabel?: string;
                                                                        title?: string;
                                                                        icon?: string | string[];
                                                                        position?: number;
                                                                        supportedDesignModes?: string[];
                                                                        enabled?: boolean;
                                                                        hideOnOfflineMode?: boolean;
                                                                        noContentPadding?: boolean;
                                                                        ai?: boolean;
                                                                        embedded?: any;
                                                                        options?: never;
                                                                    };
                                                                };
                                                                enabled?: boolean;
                                                                defaultValue?: unknown;
                                                                slug?: string;
                                                                widgetParams?: {
                                                                    [x: string]: any;
                                                                    shouldRender?: false | object;
                                                                } | {};
                                                                widget?: string;
                                                                hideOnOfflineMode?: boolean;
                                                                supportedDisplayModes?: DisplayMode[];
                                                            };
                                                        };
                                                    };
                                                };
                                            };
                                        };
                                    };
                                    options?: never;
                                };
                            };
                            enabled?: boolean;
                            defaultValue?: unknown;
                            slug?: string;
                            widgetParams?: {
                                [x: string]: any;
                                shouldRender?: false | object;
                            } | {};
                            widget?: string;
                            hideOnOfflineMode?: boolean;
                            supportedDisplayModes?: DisplayMode[];
                        };
                        tablet?: {
                            type?: string;
                            data?: object;
                            id?: string;
                            hidden?: boolean;
                            label?: string;
                            options?: {
                                [x: string]: {
                                    rightLabel?: string;
                                    title?: string;
                                    icon?: string | string[];
                                    position?: number;
                                    supportedDesignModes?: string[];
                                    enabled?: boolean;
                                    hideOnOfflineMode?: boolean;
                                    noContentPadding?: boolean;
                                    ai?: boolean;
                                    embedded?: never;
                                    options?: {
                                        [x: string]: {
                                            id?: string;
                                            type?: string;
                                            slug?: string;
                                            label?: string;
                                            defaultValue?: unknown;
                                            widget?: string;
                                            hideOnOfflineMode?: boolean;
                                            widgetParams?: {
                                                [x: string]: any;
                                                shouldRender?: false | object;
                                            } | {};
                                            data?: object;
                                            enabled?: boolean;
                                            hidden?: boolean;
                                            options?: {
                                                [x: string]: {
                                                    rightLabel?: string;
                                                    title?: string;
                                                    icon?: string | string[];
                                                    position?: number;
                                                    supportedDesignModes?: string[];
                                                    enabled?: boolean;
                                                    hideOnOfflineMode?: boolean;
                                                    noContentPadding?: boolean;
                                                    ai?: boolean;
                                                    embedded?: never;
                                                    options?: any;
                                                } | {
                                                    rightLabel?: string;
                                                    title?: string;
                                                    icon?: string | string[];
                                                    position?: number;
                                                    supportedDesignModes?: string[];
                                                    enabled?: boolean;
                                                    hideOnOfflineMode?: boolean;
                                                    noContentPadding?: boolean;
                                                    ai?: boolean;
                                                    embedded?: any;
                                                    options?: never;
                                                };
                                            };
                                            supportedDisplayModes?: DisplayMode[];
                                            overrideAllowed?: Device[];
                                            _override?: {
                                                mobile?: {
                                                    type?: string;
                                                    data?: object;
                                                    id?: string;
                                                    hidden?: boolean;
                                                    label?: string;
                                                    options?: {
                                                        [x: string]: {
                                                            rightLabel?: string;
                                                            title?: string;
                                                            icon?: string | string[];
                                                            position?: number;
                                                            supportedDesignModes?: string[];
                                                            enabled?: boolean;
                                                            hideOnOfflineMode?: boolean;
                                                            noContentPadding?: boolean;
                                                            ai?: boolean;
                                                            embedded?: never;
                                                            options?: any;
                                                        } | {
                                                            rightLabel?: string;
                                                            title?: string;
                                                            icon?: string | string[];
                                                            position?: number;
                                                            supportedDesignModes?: string[];
                                                            enabled?: boolean;
                                                            hideOnOfflineMode?: boolean;
                                                            noContentPadding?: boolean;
                                                            ai?: boolean;
                                                            embedded?: any;
                                                            options?: never;
                                                        };
                                                    };
                                                    enabled?: boolean;
                                                    defaultValue?: unknown;
                                                    slug?: string;
                                                    widgetParams?: {
                                                        [x: string]: any;
                                                        shouldRender?: false | object;
                                                    } | {};
                                                    widget?: string;
                                                    hideOnOfflineMode?: boolean;
                                                    supportedDisplayModes?: DisplayMode[];
                                                };
                                                tablet?: {
                                                    type?: string;
                                                    data?: object;
                                                    id?: string;
                                                    hidden?: boolean;
                                                    label?: string;
                                                    options?: {
                                                        [x: string]: {
                                                            rightLabel?: string;
                                                            title?: string;
                                                            icon?: string | string[];
                                                            position?: number;
                                                            supportedDesignModes?: string[];
                                                            enabled?: boolean;
                                                            hideOnOfflineMode?: boolean;
                                                            noContentPadding?: boolean;
                                                            ai?: boolean;
                                                            embedded?: never;
                                                            options?: any;
                                                        } | {
                                                            rightLabel?: string;
                                                            title?: string;
                                                            icon?: string | string[];
                                                            position?: number;
                                                            supportedDesignModes?: string[];
                                                            enabled?: boolean;
                                                            hideOnOfflineMode?: boolean;
                                                            noContentPadding?: boolean;
                                                            ai?: boolean;
                                                            embedded?: any;
                                                            options?: never;
                                                        };
                                                    };
                                                    enabled?: boolean;
                                                    defaultValue?: unknown;
                                                    slug?: string;
                                                    widgetParams?: {
                                                        [x: string]: any;
                                                        shouldRender?: false | object;
                                                    } | {};
                                                    widget?: string;
                                                    hideOnOfflineMode?: boolean;
                                                    supportedDisplayModes?: DisplayMode[];
                                                };
                                                desktop?: {
                                                    type?: string;
                                                    data?: object;
                                                    id?: string;
                                                    hidden?: boolean;
                                                    label?: string;
                                                    options?: {
                                                        [x: string]: {
                                                            rightLabel?: string;
                                                            title?: string;
                                                            icon?: string | string[];
                                                            position?: number;
                                                            supportedDesignModes?: string[];
                                                            enabled?: boolean;
                                                            hideOnOfflineMode?: boolean;
                                                            noContentPadding?: boolean;
                                                            ai?: boolean;
                                                            embedded?: never;
                                                            options?: any;
                                                        } | {
                                                            rightLabel?: string;
                                                            title?: string;
                                                            icon?: string | string[];
                                                            position?: number;
                                                            supportedDesignModes?: string[];
                                                            enabled?: boolean;
                                                            hideOnOfflineMode?: boolean;
                                                            noContentPadding?: boolean;
                                                            ai?: boolean;
                                                            embedded?: any;
                                                            options?: never;
                                                        };
                                                    };
                                                    enabled?: boolean;
                                                    defaultValue?: unknown;
                                                    slug?: string;
                                                    widgetParams?: {
                                                        [x: string]: any;
                                                        shouldRender?: false | object;
                                                    } | {};
                                                    widget?: string;
                                                    hideOnOfflineMode?: boolean;
                                                    supportedDisplayModes?: DisplayMode[];
                                                };
                                            };
                                        };
                                    };
                                } | {
                                    rightLabel?: string;
                                    title?: string;
                                    icon?: string | string[];
                                    position?: number;
                                    supportedDesignModes?: string[];
                                    enabled?: boolean;
                                    hideOnOfflineMode?: boolean;
                                    noContentPadding?: boolean;
                                    ai?: boolean;
                                    embedded?: {
                                        collection?: Collection;
                                        type?: string;
                                        source?: string;
                                        tabLabel?: string;
                                        insertCount?: number;
                                        optionGroups?: {
                                            [x: string]: {
                                                optionsOverride?: {
                                                    [x: string]: {
                                                        id?: string;
                                                        type?: string;
                                                        slug?: string;
                                                        label?: string;
                                                        defaultValue?: unknown;
                                                        widget?: string;
                                                        hideOnOfflineMode?: boolean;
                                                        widgetParams?: {
                                                            [x: string]: any;
                                                            shouldRender?: false | object;
                                                        } | {};
                                                        data?: object;
                                                        enabled?: boolean;
                                                        hidden?: boolean;
                                                        options?: {
                                                            [x: string]: {
                                                                rightLabel?: string;
                                                                title?: string;
                                                                icon?: string | string[];
                                                                position?: number;
                                                                supportedDesignModes?: string[];
                                                                enabled?: boolean;
                                                                hideOnOfflineMode?: boolean;
                                                                noContentPadding?: boolean;
                                                                ai?: boolean;
                                                                embedded?: never;
                                                                options?: any;
                                                            } | {
                                                                rightLabel?: string;
                                                                title?: string;
                                                                icon?: string | string[];
                                                                position?: number;
                                                                supportedDesignModes?: string[];
                                                                enabled?: boolean;
                                                                hideOnOfflineMode?: boolean;
                                                                noContentPadding?: boolean;
                                                                ai?: boolean;
                                                                embedded?: any;
                                                                options?: never;
                                                            };
                                                        };
                                                        supportedDisplayModes?: DisplayMode[];
                                                        overrideAllowed?: Device[];
                                                        _override?: {
                                                            mobile?: {
                                                                type?: string;
                                                                data?: object;
                                                                id?: string;
                                                                hidden?: boolean;
                                                                label?: string;
                                                                options?: {
                                                                    [x: string]: {
                                                                        rightLabel?: string;
                                                                        title?: string;
                                                                        icon?: string | string[];
                                                                        position?: number;
                                                                        supportedDesignModes?: string[];
                                                                        enabled?: boolean;
                                                                        hideOnOfflineMode?: boolean;
                                                                        noContentPadding?: boolean;
                                                                        ai?: boolean;
                                                                        embedded?: never;
                                                                        options?: any;
                                                                    } | {
                                                                        rightLabel?: string;
                                                                        title?: string;
                                                                        icon?: string | string[];
                                                                        position?: number;
                                                                        supportedDesignModes?: string[];
                                                                        enabled?: boolean;
                                                                        hideOnOfflineMode?: boolean;
                                                                        noContentPadding?: boolean;
                                                                        ai?: boolean;
                                                                        embedded?: any;
                                                                        options?: never;
                                                                    };
                                                                };
                                                                enabled?: boolean;
                                                                defaultValue?: unknown;
                                                                slug?: string;
                                                                widgetParams?: {
                                                                    [x: string]: any;
                                                                    shouldRender?: false | object;
                                                                } | {};
                                                                widget?: string;
                                                                hideOnOfflineMode?: boolean;
                                                                supportedDisplayModes?: DisplayMode[];
                                                            };
                                                            tablet?: {
                                                                type?: string;
                                                                data?: object;
                                                                id?: string;
                                                                hidden?: boolean;
                                                                label?: string;
                                                                options?: {
                                                                    [x: string]: {
                                                                        rightLabel?: string;
                                                                        title?: string;
                                                                        icon?: string | string[];
                                                                        position?: number;
                                                                        supportedDesignModes?: string[];
                                                                        enabled?: boolean;
                                                                        hideOnOfflineMode?: boolean;
                                                                        noContentPadding?: boolean;
                                                                        ai?: boolean;
                                                                        embedded?: never;
                                                                        options?: any;
                                                                    } | {
                                                                        rightLabel?: string;
                                                                        title?: string;
                                                                        icon?: string | string[];
                                                                        position?: number;
                                                                        supportedDesignModes?: string[];
                                                                        enabled?: boolean;
                                                                        hideOnOfflineMode?: boolean;
                                                                        noContentPadding?: boolean;
                                                                        ai?: boolean;
                                                                        embedded?: any;
                                                                        options?: never;
                                                                    };
                                                                };
                                                                enabled?: boolean;
                                                                defaultValue?: unknown;
                                                                slug?: string;
                                                                widgetParams?: {
                                                                    [x: string]: any;
                                                                    shouldRender?: false | object;
                                                                } | {};
                                                                widget?: string;
                                                                hideOnOfflineMode?: boolean;
                                                                supportedDisplayModes?: DisplayMode[];
                                                            };
                                                            desktop?: {
                                                                type?: string;
                                                                data?: object;
                                                                id?: string;
                                                                hidden?: boolean;
                                                                label?: string;
                                                                options?: {
                                                                    [x: string]: {
                                                                        rightLabel?: string;
                                                                        title?: string;
                                                                        icon?: string | string[];
                                                                        position?: number;
                                                                        supportedDesignModes?: string[];
                                                                        enabled?: boolean;
                                                                        hideOnOfflineMode?: boolean;
                                                                        noContentPadding?: boolean;
                                                                        ai?: boolean;
                                                                        embedded?: never;
                                                                        options?: any;
                                                                    } | {
                                                                        rightLabel?: string;
                                                                        title?: string;
                                                                        icon?: string | string[];
                                                                        position?: number;
                                                                        supportedDesignModes?: string[];
                                                                        enabled?: boolean;
                                                                        hideOnOfflineMode?: boolean;
                                                                        noContentPadding?: boolean;
                                                                        ai?: boolean;
                                                                        embedded?: any;
                                                                        options?: never;
                                                                    };
                                                                };
                                                                enabled?: boolean;
                                                                defaultValue?: unknown;
                                                                slug?: string;
                                                                widgetParams?: {
                                                                    [x: string]: any;
                                                                    shouldRender?: false | object;
                                                                } | {};
                                                                widget?: string;
                                                                hideOnOfflineMode?: boolean;
                                                                supportedDisplayModes?: DisplayMode[];
                                                            };
                                                        };
                                                    };
                                                };
                                            };
                                        };
                                    };
                                    options?: never;
                                };
                            };
                            enabled?: boolean;
                            defaultValue?: unknown;
                            slug?: string;
                            widgetParams?: {
                                [x: string]: any;
                                shouldRender?: false | object;
                            } | {};
                            widget?: string;
                            hideOnOfflineMode?: boolean;
                            supportedDisplayModes?: DisplayMode[];
                        };
                        desktop?: {
                            type?: string;
                            data?: object;
                            id?: string;
                            hidden?: boolean;
                            label?: string;
                            options?: {
                                [x: string]: {
                                    rightLabel?: string;
                                    title?: string;
                                    icon?: string | string[];
                                    position?: number;
                                    supportedDesignModes?: string[];
                                    enabled?: boolean;
                                    hideOnOfflineMode?: boolean;
                                    noContentPadding?: boolean;
                                    ai?: boolean;
                                    embedded?: never;
                                    options?: {
                                        [x: string]: {
                                            id?: string;
                                            type?: string;
                                            slug?: string;
                                            label?: string;
                                            defaultValue?: unknown;
                                            widget?: string;
                                            hideOnOfflineMode?: boolean;
                                            widgetParams?: {
                                                [x: string]: any;
                                                shouldRender?: false | object;
                                            } | {};
                                            data?: object;
                                            enabled?: boolean;
                                            hidden?: boolean;
                                            options?: {
                                                [x: string]: {
                                                    rightLabel?: string;
                                                    title?: string;
                                                    icon?: string | string[];
                                                    position?: number;
                                                    supportedDesignModes?: string[];
                                                    enabled?: boolean;
                                                    hideOnOfflineMode?: boolean;
                                                    noContentPadding?: boolean;
                                                    ai?: boolean;
                                                    embedded?: never;
                                                    options?: any;
                                                } | {
                                                    rightLabel?: string;
                                                    title?: string;
                                                    icon?: string | string[];
                                                    position?: number;
                                                    supportedDesignModes?: string[];
                                                    enabled?: boolean;
                                                    hideOnOfflineMode?: boolean;
                                                    noContentPadding?: boolean;
                                                    ai?: boolean;
                                                    embedded?: any;
                                                    options?: never;
                                                };
                                            };
                                            supportedDisplayModes?: DisplayMode[];
                                            overrideAllowed?: Device[];
                                            _override?: {
                                                mobile?: {
                                                    type?: string;
                                                    data?: object;
                                                    id?: string;
                                                    hidden?: boolean;
                                                    label?: string;
                                                    options?: {
                                                        [x: string]: {
                                                            rightLabel?: string;
                                                            title?: string;
                                                            icon?: string | string[];
                                                            position?: number;
                                                            supportedDesignModes?: string[];
                                                            enabled?: boolean;
                                                            hideOnOfflineMode?: boolean;
                                                            noContentPadding?: boolean;
                                                            ai?: boolean;
                                                            embedded?: never;
                                                            options?: any;
                                                        } | {
                                                            rightLabel?: string;
                                                            title?: string;
                                                            icon?: string | string[];
                                                            position?: number;
                                                            supportedDesignModes?: string[];
                                                            enabled?: boolean;
                                                            hideOnOfflineMode?: boolean;
                                                            noContentPadding?: boolean;
                                                            ai?: boolean;
                                                            embedded?: any;
                                                            options?: never;
                                                        };
                                                    };
                                                    enabled?: boolean;
                                                    defaultValue?: unknown;
                                                    slug?: string;
                                                    widgetParams?: {
                                                        [x: string]: any;
                                                        shouldRender?: false | object;
                                                    } | {};
                                                    widget?: string;
                                                    hideOnOfflineMode?: boolean;
                                                    supportedDisplayModes?: DisplayMode[];
                                                };
                                                tablet?: {
                                                    type?: string;
                                                    data?: object;
                                                    id?: string;
                                                    hidden?: boolean;
                                                    label?: string;
                                                    options?: {
                                                        [x: string]: {
                                                            rightLabel?: string;
                                                            title?: string;
                                                            icon?: string | string[];
                                                            position?: number;
                                                            supportedDesignModes?: string[];
                                                            enabled?: boolean;
                                                            hideOnOfflineMode?: boolean;
                                                            noContentPadding?: boolean;
                                                            ai?: boolean;
                                                            embedded?: never;
                                                            options?: any;
                                                        } | {
                                                            rightLabel?: string;
                                                            title?: string;
                                                            icon?: string | string[];
                                                            position?: number;
                                                            supportedDesignModes?: string[];
                                                            enabled?: boolean;
                                                            hideOnOfflineMode?: boolean;
                                                            noContentPadding?: boolean;
                                                            ai?: boolean;
                                                            embedded?: any;
                                                            options?: never;
                                                        };
                                                    };
                                                    enabled?: boolean;
                                                    defaultValue?: unknown;
                                                    slug?: string;
                                                    widgetParams?: {
                                                        [x: string]: any;
                                                        shouldRender?: false | object;
                                                    } | {};
                                                    widget?: string;
                                                    hideOnOfflineMode?: boolean;
                                                    supportedDisplayModes?: DisplayMode[];
                                                };
                                                desktop?: {
                                                    type?: string;
                                                    data?: object;
                                                    id?: string;
                                                    hidden?: boolean;
                                                    label?: string;
                                                    options?: {
                                                        [x: string]: {
                                                            rightLabel?: string;
                                                            title?: string;
                                                            icon?: string | string[];
                                                            position?: number;
                                                            supportedDesignModes?: string[];
                                                            enabled?: boolean;
                                                            hideOnOfflineMode?: boolean;
                                                            noContentPadding?: boolean;
                                                            ai?: boolean;
                                                            embedded?: never;
                                                            options?: any;
                                                        } | {
                                                            rightLabel?: string;
                                                            title?: string;
                                                            icon?: string | string[];
                                                            position?: number;
                                                            supportedDesignModes?: string[];
                                                            enabled?: boolean;
                                                            hideOnOfflineMode?: boolean;
                                                            noContentPadding?: boolean;
                                                            ai?: boolean;
                                                            embedded?: any;
                                                            options?: never;
                                                        };
                                                    };
                                                    enabled?: boolean;
                                                    defaultValue?: unknown;
                                                    slug?: string;
                                                    widgetParams?: {
                                                        [x: string]: any;
                                                        shouldRender?: false | object;
                                                    } | {};
                                                    widget?: string;
                                                    hideOnOfflineMode?: boolean;
                                                    supportedDisplayModes?: DisplayMode[];
                                                };
                                            };
                                        };
                                    };
                                } | {
                                    rightLabel?: string;
                                    title?: string;
                                    icon?: string | string[];
                                    position?: number;
                                    supportedDesignModes?: string[];
                                    enabled?: boolean;
                                    hideOnOfflineMode?: boolean;
                                    noContentPadding?: boolean;
                                    ai?: boolean;
                                    embedded?: {
                                        collection?: Collection;
                                        type?: string;
                                        source?: string;
                                        tabLabel?: string;
                                        insertCount?: number;
                                        optionGroups?: {
                                            [x: string]: {
                                                optionsOverride?: {
                                                    [x: string]: {
                                                        id?: string;
                                                        type?: string;
                                                        slug?: string;
                                                        label?: string;
                                                        defaultValue?: unknown;
                                                        widget?: string;
                                                        hideOnOfflineMode?: boolean;
                                                        widgetParams?: {
                                                            [x: string]: any;
                                                            shouldRender?: false | object;
                                                        } | {};
                                                        data?: object;
                                                        enabled?: boolean;
                                                        hidden?: boolean;
                                                        options?: {
                                                            [x: string]: {
                                                                rightLabel?: string;
                                                                title?: string;
                                                                icon?: string | string[];
                                                                position?: number;
                                                                supportedDesignModes?: string[];
                                                                enabled?: boolean;
                                                                hideOnOfflineMode?: boolean;
                                                                noContentPadding?: boolean;
                                                                ai?: boolean;
                                                                embedded?: never;
                                                                options?: any;
                                                            } | {
                                                                rightLabel?: string;
                                                                title?: string;
                                                                icon?: string | string[];
                                                                position?: number;
                                                                supportedDesignModes?: string[];
                                                                enabled?: boolean;
                                                                hideOnOfflineMode?: boolean;
                                                                noContentPadding?: boolean;
                                                                ai?: boolean;
                                                                embedded?: any;
                                                                options?: never;
                                                            };
                                                        };
                                                        supportedDisplayModes?: DisplayMode[];
                                                        overrideAllowed?: Device[];
                                                        _override?: {
                                                            mobile?: {
                                                                type?: string;
                                                                data?: object;
                                                                id?: string;
                                                                hidden?: boolean;
                                                                label?: string;
                                                                options?: {
                                                                    [x: string]: {
                                                                        rightLabel?: string;
                                                                        title?: string;
                                                                        icon?: string | string[];
                                                                        position?: number;
                                                                        supportedDesignModes?: string[];
                                                                        enabled?: boolean;
                                                                        hideOnOfflineMode?: boolean;
                                                                        noContentPadding?: boolean;
                                                                        ai?: boolean;
                                                                        embedded?: never;
                                                                        options?: any;
                                                                    } | {
                                                                        rightLabel?: string;
                                                                        title?: string;
                                                                        icon?: string | string[];
                                                                        position?: number;
                                                                        supportedDesignModes?: string[];
                                                                        enabled?: boolean;
                                                                        hideOnOfflineMode?: boolean;
                                                                        noContentPadding?: boolean;
                                                                        ai?: boolean;
                                                                        embedded?: any;
                                                                        options?: never;
                                                                    };
                                                                };
                                                                enabled?: boolean;
                                                                defaultValue?: unknown;
                                                                slug?: string;
                                                                widgetParams?: {
                                                                    [x: string]: any;
                                                                    shouldRender?: false | object;
                                                                } | {};
                                                                widget?: string;
                                                                hideOnOfflineMode?: boolean;
                                                                supportedDisplayModes?: DisplayMode[];
                                                            };
                                                            tablet?: {
                                                                type?: string;
                                                                data?: object;
                                                                id?: string;
                                                                hidden?: boolean;
                                                                label?: string;
                                                                options?: {
                                                                    [x: string]: {
                                                                        rightLabel?: string;
                                                                        title?: string;
                                                                        icon?: string | string[];
                                                                        position?: number;
                                                                        supportedDesignModes?: string[];
                                                                        enabled?: boolean;
                                                                        hideOnOfflineMode?: boolean;
                                                                        noContentPadding?: boolean;
                                                                        ai?: boolean;
                                                                        embedded?: never;
                                                                        options?: any;
                                                                    } | {
                                                                        rightLabel?: string;
                                                                        title?: string;
                                                                        icon?: string | string[];
                                                                        position?: number;
                                                                        supportedDesignModes?: string[];
                                                                        enabled?: boolean;
                                                                        hideOnOfflineMode?: boolean;
                                                                        noContentPadding?: boolean;
                                                                        ai?: boolean;
                                                                        embedded?: any;
                                                                        options?: never;
                                                                    };
                                                                };
                                                                enabled?: boolean;
                                                                defaultValue?: unknown;
                                                                slug?: string;
                                                                widgetParams?: {
                                                                    [x: string]: any;
                                                                    shouldRender?: false | object;
                                                                } | {};
                                                                widget?: string;
                                                                hideOnOfflineMode?: boolean;
                                                                supportedDisplayModes?: DisplayMode[];
                                                            };
                                                            desktop?: {
                                                                type?: string;
                                                                data?: object;
                                                                id?: string;
                                                                hidden?: boolean;
                                                                label?: string;
                                                                options?: {
                                                                    [x: string]: {
                                                                        rightLabel?: string;
                                                                        title?: string;
                                                                        icon?: string | string[];
                                                                        position?: number;
                                                                        supportedDesignModes?: string[];
                                                                        enabled?: boolean;
                                                                        hideOnOfflineMode?: boolean;
                                                                        noContentPadding?: boolean;
                                                                        ai?: boolean;
                                                                        embedded?: never;
                                                                        options?: any;
                                                                    } | {
                                                                        rightLabel?: string;
                                                                        title?: string;
                                                                        icon?: string | string[];
                                                                        position?: number;
                                                                        supportedDesignModes?: string[];
                                                                        enabled?: boolean;
                                                                        hideOnOfflineMode?: boolean;
                                                                        noContentPadding?: boolean;
                                                                        ai?: boolean;
                                                                        embedded?: any;
                                                                        options?: never;
                                                                    };
                                                                };
                                                                enabled?: boolean;
                                                                defaultValue?: unknown;
                                                                slug?: string;
                                                                widgetParams?: {
                                                                    [x: string]: any;
                                                                    shouldRender?: false | object;
                                                                } | {};
                                                                widget?: string;
                                                                hideOnOfflineMode?: boolean;
                                                                supportedDisplayModes?: DisplayMode[];
                                                            };
                                                        };
                                                    };
                                                };
                                            };
                                        };
                                    };
                                    options?: never;
                                };
                            };
                            enabled?: boolean;
                            defaultValue?: unknown;
                            slug?: string;
                            widgetParams?: {
                                [x: string]: any;
                                shouldRender?: false | object;
                            } | {};
                            widget?: string;
                            hideOnOfflineMode?: boolean;
                            supportedDisplayModes?: DisplayMode[];
                        };
                    };
                };
            };
        } | {
            rightLabel?: string;
            title?: string;
            icon?: string | string[];
            position?: number;
            supportedDesignModes?: string[];
            enabled?: boolean;
            hideOnOfflineMode?: boolean;
            noContentPadding?: boolean;
            ai?: boolean;
            embedded?: {
                collection?: Collection;
                type?: string;
                source?: string;
                tabLabel?: string;
                insertCount?: number;
                optionGroups?: {
                    [x: string]: {
                        optionsOverride?: {
                            [x: string]: {
                                id?: string;
                                type?: string;
                                slug?: string;
                                label?: string;
                                defaultValue?: unknown;
                                widget?: string;
                                hideOnOfflineMode?: boolean;
                                widgetParams?: {
                                    [x: string]: any;
                                    shouldRender?: false | object;
                                } | {};
                                data?: object;
                                enabled?: boolean;
                                hidden?: boolean;
                                options?: {
                                    [x: string]: {
                                        rightLabel?: string;
                                        title?: string;
                                        icon?: string | string[];
                                        position?: number;
                                        supportedDesignModes?: string[];
                                        enabled?: boolean;
                                        hideOnOfflineMode?: boolean;
                                        noContentPadding?: boolean;
                                        ai?: boolean;
                                        embedded?: never;
                                        options?: {
                                            [x: string]: {
                                                id?: string;
                                                type?: string;
                                                slug?: string;
                                                label?: string;
                                                defaultValue?: unknown;
                                                widget?: string;
                                                hideOnOfflineMode?: boolean;
                                                widgetParams?: {
                                                    [x: string]: any;
                                                    shouldRender?: false | object;
                                                } | {};
                                                data?: object;
                                                enabled?: boolean;
                                                hidden?: boolean;
                                                options?: {
                                                    [x: string]: {
                                                        rightLabel?: string;
                                                        title?: string;
                                                        icon?: string | string[];
                                                        position?: number;
                                                        supportedDesignModes?: string[];
                                                        enabled?: boolean;
                                                        hideOnOfflineMode?: boolean;
                                                        noContentPadding?: boolean;
                                                        ai?: boolean;
                                                        embedded?: never;
                                                        options?: any;
                                                    } | {
                                                        rightLabel?: string;
                                                        title?: string;
                                                        icon?: string | string[];
                                                        position?: number;
                                                        supportedDesignModes?: string[];
                                                        enabled?: boolean;
                                                        hideOnOfflineMode?: boolean;
                                                        noContentPadding?: boolean;
                                                        ai?: boolean;
                                                        embedded?: any;
                                                        options?: never;
                                                    };
                                                };
                                                supportedDisplayModes?: DisplayMode[];
                                                overrideAllowed?: Device[];
                                                _override?: {
                                                    mobile?: {
                                                        type?: string;
                                                        data?: object;
                                                        id?: string;
                                                        hidden?: boolean;
                                                        label?: string;
                                                        options?: {
                                                            [x: string]: {
                                                                rightLabel?: string;
                                                                title?: string;
                                                                icon?: string | string[];
                                                                position?: number;
                                                                supportedDesignModes?: string[];
                                                                enabled?: boolean;
                                                                hideOnOfflineMode?: boolean;
                                                                noContentPadding?: boolean;
                                                                ai?: boolean;
                                                                embedded?: never;
                                                                options?: any;
                                                            } | {
                                                                rightLabel?: string;
                                                                title?: string;
                                                                icon?: string | string[];
                                                                position?: number;
                                                                supportedDesignModes?: string[];
                                                                enabled?: boolean;
                                                                hideOnOfflineMode?: boolean;
                                                                noContentPadding?: boolean;
                                                                ai?: boolean;
                                                                embedded?: any;
                                                                options?: never;
                                                            };
                                                        };
                                                        enabled?: boolean;
                                                        defaultValue?: unknown;
                                                        slug?: string;
                                                        widgetParams?: {
                                                            [x: string]: any;
                                                            shouldRender?: false | object;
                                                        } | {};
                                                        widget?: string;
                                                        hideOnOfflineMode?: boolean;
                                                        supportedDisplayModes?: DisplayMode[];
                                                    };
                                                    tablet?: {
                                                        type?: string;
                                                        data?: object;
                                                        id?: string;
                                                        hidden?: boolean;
                                                        label?: string;
                                                        options?: {
                                                            [x: string]: {
                                                                rightLabel?: string;
                                                                title?: string;
                                                                icon?: string | string[];
                                                                position?: number;
                                                                supportedDesignModes?: string[];
                                                                enabled?: boolean;
                                                                hideOnOfflineMode?: boolean;
                                                                noContentPadding?: boolean;
                                                                ai?: boolean;
                                                                embedded?: never;
                                                                options?: any;
                                                            } | {
                                                                rightLabel?: string;
                                                                title?: string;
                                                                icon?: string | string[];
                                                                position?: number;
                                                                supportedDesignModes?: string[];
                                                                enabled?: boolean;
                                                                hideOnOfflineMode?: boolean;
                                                                noContentPadding?: boolean;
                                                                ai?: boolean;
                                                                embedded?: any;
                                                                options?: never;
                                                            };
                                                        };
                                                        enabled?: boolean;
                                                        defaultValue?: unknown;
                                                        slug?: string;
                                                        widgetParams?: {
                                                            [x: string]: any;
                                                            shouldRender?: false | object;
                                                        } | {};
                                                        widget?: string;
                                                        hideOnOfflineMode?: boolean;
                                                        supportedDisplayModes?: DisplayMode[];
                                                    };
                                                    desktop?: {
                                                        type?: string;
                                                        data?: object;
                                                        id?: string;
                                                        hidden?: boolean;
                                                        label?: string;
                                                        options?: {
                                                            [x: string]: {
                                                                rightLabel?: string;
                                                                title?: string;
                                                                icon?: string | string[];
                                                                position?: number;
                                                                supportedDesignModes?: string[];
                                                                enabled?: boolean;
                                                                hideOnOfflineMode?: boolean;
                                                                noContentPadding?: boolean;
                                                                ai?: boolean;
                                                                embedded?: never;
                                                                options?: any;
                                                            } | {
                                                                rightLabel?: string;
                                                                title?: string;
                                                                icon?: string | string[];
                                                                position?: number;
                                                                supportedDesignModes?: string[];
                                                                enabled?: boolean;
                                                                hideOnOfflineMode?: boolean;
                                                                noContentPadding?: boolean;
                                                                ai?: boolean;
                                                                embedded?: any;
                                                                options?: never;
                                                            };
                                                        };
                                                        enabled?: boolean;
                                                        defaultValue?: unknown;
                                                        slug?: string;
                                                        widgetParams?: {
                                                            [x: string]: any;
                                                            shouldRender?: false | object;
                                                        } | {};
                                                        widget?: string;
                                                        hideOnOfflineMode?: boolean;
                                                        supportedDisplayModes?: DisplayMode[];
                                                    };
                                                };
                                            };
                                        };
                                    } | {
                                        rightLabel?: string;
                                        title?: string;
                                        icon?: string | string[];
                                        position?: number;
                                        supportedDesignModes?: string[];
                                        enabled?: boolean;
                                        hideOnOfflineMode?: boolean;
                                        noContentPadding?: boolean;
                                        ai?: boolean;
                                        embedded?: {
                                            collection?: Collection;
                                            type?: string;
                                            source?: string;
                                            tabLabel?: string;
                                            insertCount?: number;
                                            optionGroups?: {
                                                [x: string]: {
                                                    optionsOverride?: {
                                                        [x: string]: {
                                                            id?: string;
                                                            type?: string;
                                                            slug?: string;
                                                            label?: string;
                                                            defaultValue?: unknown;
                                                            widget?: string;
                                                            hideOnOfflineMode?: boolean;
                                                            widgetParams?: {
                                                                [x: string]: any;
                                                                shouldRender?: false | object;
                                                            } | {};
                                                            data?: object;
                                                            enabled?: boolean;
                                                            hidden?: boolean;
                                                            options?: {
                                                                [x: string]: {
                                                                    rightLabel?: string;
                                                                    title?: string;
                                                                    icon?: string | string[];
                                                                    position?: number;
                                                                    supportedDesignModes?: string[];
                                                                    enabled?: boolean;
                                                                    hideOnOfflineMode?: boolean;
                                                                    noContentPadding?: boolean;
                                                                    ai?: boolean;
                                                                    embedded?: never;
                                                                    options?: any;
                                                                } | {
                                                                    rightLabel?: string;
                                                                    title?: string;
                                                                    icon?: string | string[];
                                                                    position?: number;
                                                                    supportedDesignModes?: string[];
                                                                    enabled?: boolean;
                                                                    hideOnOfflineMode?: boolean;
                                                                    noContentPadding?: boolean;
                                                                    ai?: boolean;
                                                                    embedded?: any;
                                                                    options?: never;
                                                                };
                                                            };
                                                            supportedDisplayModes?: DisplayMode[];
                                                            overrideAllowed?: Device[];
                                                            _override?: {
                                                                mobile?: {
                                                                    type?: string;
                                                                    data?: object;
                                                                    id?: string;
                                                                    hidden?: boolean;
                                                                    label?: string;
                                                                    options?: {
                                                                        [x: string]: {
                                                                            rightLabel?: string;
                                                                            title?: string;
                                                                            icon?: string | string[];
                                                                            position?: number;
                                                                            supportedDesignModes?: string[];
                                                                            enabled?: boolean;
                                                                            hideOnOfflineMode?: boolean;
                                                                            noContentPadding?: boolean;
                                                                            ai?: boolean;
                                                                            embedded?: never;
                                                                            options?: any;
                                                                        } | {
                                                                            rightLabel?: string;
                                                                            title?: string;
                                                                            icon?: string | string[];
                                                                            position?: number;
                                                                            supportedDesignModes?: string[];
                                                                            enabled?: boolean;
                                                                            hideOnOfflineMode?: boolean;
                                                                            noContentPadding?: boolean;
                                                                            ai?: boolean;
                                                                            embedded?: any;
                                                                            options?: never;
                                                                        };
                                                                    };
                                                                    enabled?: boolean;
                                                                    defaultValue?: unknown;
                                                                    slug?: string;
                                                                    widgetParams?: {
                                                                        [x: string]: any;
                                                                        shouldRender?: false | object;
                                                                    } | {};
                                                                    widget?: string;
                                                                    hideOnOfflineMode?: boolean;
                                                                    supportedDisplayModes?: DisplayMode[];
                                                                };
                                                                tablet?: {
                                                                    type?: string;
                                                                    data?: object;
                                                                    id?: string;
                                                                    hidden?: boolean;
                                                                    label?: string;
                                                                    options?: {
                                                                        [x: string]: {
                                                                            rightLabel?: string;
                                                                            title?: string;
                                                                            icon?: string | string[];
                                                                            position?: number;
                                                                            supportedDesignModes?: string[];
                                                                            enabled?: boolean;
                                                                            hideOnOfflineMode?: boolean;
                                                                            noContentPadding?: boolean;
                                                                            ai?: boolean;
                                                                            embedded?: never;
                                                                            options?: any;
                                                                        } | {
                                                                            rightLabel?: string;
                                                                            title?: string;
                                                                            icon?: string | string[];
                                                                            position?: number;
                                                                            supportedDesignModes?: string[];
                                                                            enabled?: boolean;
                                                                            hideOnOfflineMode?: boolean;
                                                                            noContentPadding?: boolean;
                                                                            ai?: boolean;
                                                                            embedded?: any;
                                                                            options?: never;
                                                                        };
                                                                    };
                                                                    enabled?: boolean;
                                                                    defaultValue?: unknown;
                                                                    slug?: string;
                                                                    widgetParams?: {
                                                                        [x: string]: any;
                                                                        shouldRender?: false | object;
                                                                    } | {};
                                                                    widget?: string;
                                                                    hideOnOfflineMode?: boolean;
                                                                    supportedDisplayModes?: DisplayMode[];
                                                                };
                                                                desktop?: {
                                                                    type?: string;
                                                                    data?: object;
                                                                    id?: string;
                                                                    hidden?: boolean;
                                                                    label?: string;
                                                                    options?: {
                                                                        [x: string]: {
                                                                            rightLabel?: string;
                                                                            title?: string;
                                                                            icon?: string | string[];
                                                                            position?: number;
                                                                            supportedDesignModes?: string[];
                                                                            enabled?: boolean;
                                                                            hideOnOfflineMode?: boolean;
                                                                            noContentPadding?: boolean;
                                                                            ai?: boolean;
                                                                            embedded?: never;
                                                                            options?: any;
                                                                        } | {
                                                                            rightLabel?: string;
                                                                            title?: string;
                                                                            icon?: string | string[];
                                                                            position?: number;
                                                                            supportedDesignModes?: string[];
                                                                            enabled?: boolean;
                                                                            hideOnOfflineMode?: boolean;
                                                                            noContentPadding?: boolean;
                                                                            ai?: boolean;
                                                                            embedded?: any;
                                                                            options?: never;
                                                                        };
                                                                    };
                                                                    enabled?: boolean;
                                                                    defaultValue?: unknown;
                                                                    slug?: string;
                                                                    widgetParams?: {
                                                                        [x: string]: any;
                                                                        shouldRender?: false | object;
                                                                    } | {};
                                                                    widget?: string;
                                                                    hideOnOfflineMode?: boolean;
                                                                    supportedDisplayModes?: DisplayMode[];
                                                                };
                                                            };
                                                        };
                                                    };
                                                };
                                            };
                                        };
                                        options?: never;
                                    };
                                };
                                supportedDisplayModes?: DisplayMode[];
                                overrideAllowed?: Device[];
                                _override?: {
                                    mobile?: {
                                        type?: string;
                                        data?: object;
                                        id?: string;
                                        hidden?: boolean;
                                        label?: string;
                                        options?: {
                                            [x: string]: {
                                                rightLabel?: string;
                                                title?: string;
                                                icon?: string | string[];
                                                position?: number;
                                                supportedDesignModes?: string[];
                                                enabled?: boolean;
                                                hideOnOfflineMode?: boolean;
                                                noContentPadding?: boolean;
                                                ai?: boolean;
                                                embedded?: never;
                                                options?: {
                                                    [x: string]: {
                                                        id?: string;
                                                        type?: string;
                                                        slug?: string;
                                                        label?: string;
                                                        defaultValue?: unknown;
                                                        widget?: string;
                                                        hideOnOfflineMode?: boolean;
                                                        widgetParams?: {
                                                            [x: string]: any;
                                                            shouldRender?: false | object;
                                                        } | {};
                                                        data?: object;
                                                        enabled?: boolean;
                                                        hidden?: boolean;
                                                        options?: {
                                                            [x: string]: {
                                                                rightLabel?: string;
                                                                title?: string;
                                                                icon?: string | string[];
                                                                position?: number;
                                                                supportedDesignModes?: string[];
                                                                enabled?: boolean;
                                                                hideOnOfflineMode?: boolean;
                                                                noContentPadding?: boolean;
                                                                ai?: boolean;
                                                                embedded?: never;
                                                                options?: any;
                                                            } | {
                                                                rightLabel?: string;
                                                                title?: string;
                                                                icon?: string | string[];
                                                                position?: number;
                                                                supportedDesignModes?: string[];
                                                                enabled?: boolean;
                                                                hideOnOfflineMode?: boolean;
                                                                noContentPadding?: boolean;
                                                                ai?: boolean;
                                                                embedded?: any;
                                                                options?: never;
                                                            };
                                                        };
                                                        supportedDisplayModes?: DisplayMode[];
                                                        overrideAllowed?: Device[];
                                                        _override?: {
                                                            mobile?: {
                                                                type?: string;
                                                                data?: object;
                                                                id?: string;
                                                                hidden?: boolean;
                                                                label?: string;
                                                                options?: {
                                                                    [x: string]: {
                                                                        rightLabel?: string;
                                                                        title?: string;
                                                                        icon?: string | string[];
                                                                        position?: number;
                                                                        supportedDesignModes?: string[];
                                                                        enabled?: boolean;
                                                                        hideOnOfflineMode?: boolean;
                                                                        noContentPadding?: boolean;
                                                                        ai?: boolean;
                                                                        embedded?: never;
                                                                        options?: any;
                                                                    } | {
                                                                        rightLabel?: string;
                                                                        title?: string;
                                                                        icon?: string | string[];
                                                                        position?: number;
                                                                        supportedDesignModes?: string[];
                                                                        enabled?: boolean;
                                                                        hideOnOfflineMode?: boolean;
                                                                        noContentPadding?: boolean;
                                                                        ai?: boolean;
                                                                        embedded?: any;
                                                                        options?: never;
                                                                    };
                                                                };
                                                                enabled?: boolean;
                                                                defaultValue?: unknown;
                                                                slug?: string;
                                                                widgetParams?: {
                                                                    [x: string]: any;
                                                                    shouldRender?: false | object;
                                                                } | {};
                                                                widget?: string;
                                                                hideOnOfflineMode?: boolean;
                                                                supportedDisplayModes?: DisplayMode[];
                                                            };
                                                            tablet?: {
                                                                type?: string;
                                                                data?: object;
                                                                id?: string;
                                                                hidden?: boolean;
                                                                label?: string;
                                                                options?: {
                                                                    [x: string]: {
                                                                        rightLabel?: string;
                                                                        title?: string;
                                                                        icon?: string | string[];
                                                                        position?: number;
                                                                        supportedDesignModes?: string[];
                                                                        enabled?: boolean;
                                                                        hideOnOfflineMode?: boolean;
                                                                        noContentPadding?: boolean;
                                                                        ai?: boolean;
                                                                        embedded?: never;
                                                                        options?: any;
                                                                    } | {
                                                                        rightLabel?: string;
                                                                        title?: string;
                                                                        icon?: string | string[];
                                                                        position?: number;
                                                                        supportedDesignModes?: string[];
                                                                        enabled?: boolean;
                                                                        hideOnOfflineMode?: boolean;
                                                                        noContentPadding?: boolean;
                                                                        ai?: boolean;
                                                                        embedded?: any;
                                                                        options?: never;
                                                                    };
                                                                };
                                                                enabled?: boolean;
                                                                defaultValue?: unknown;
                                                                slug?: string;
                                                                widgetParams?: {
                                                                    [x: string]: any;
                                                                    shouldRender?: false | object;
                                                                } | {};
                                                                widget?: string;
                                                                hideOnOfflineMode?: boolean;
                                                                supportedDisplayModes?: DisplayMode[];
                                                            };
                                                            desktop?: {
                                                                type?: string;
                                                                data?: object;
                                                                id?: string;
                                                                hidden?: boolean;
                                                                label?: string;
                                                                options?: {
                                                                    [x: string]: {
                                                                        rightLabel?: string;
                                                                        title?: string;
                                                                        icon?: string | string[];
                                                                        position?: number;
                                                                        supportedDesignModes?: string[];
                                                                        enabled?: boolean;
                                                                        hideOnOfflineMode?: boolean;
                                                                        noContentPadding?: boolean;
                                                                        ai?: boolean;
                                                                        embedded?: never;
                                                                        options?: any;
                                                                    } | {
                                                                        rightLabel?: string;
                                                                        title?: string;
                                                                        icon?: string | string[];
                                                                        position?: number;
                                                                        supportedDesignModes?: string[];
                                                                        enabled?: boolean;
                                                                        hideOnOfflineMode?: boolean;
                                                                        noContentPadding?: boolean;
                                                                        ai?: boolean;
                                                                        embedded?: any;
                                                                        options?: never;
                                                                    };
                                                                };
                                                                enabled?: boolean;
                                                                defaultValue?: unknown;
                                                                slug?: string;
                                                                widgetParams?: {
                                                                    [x: string]: any;
                                                                    shouldRender?: false | object;
                                                                } | {};
                                                                widget?: string;
                                                                hideOnOfflineMode?: boolean;
                                                                supportedDisplayModes?: DisplayMode[];
                                                            };
                                                        };
                                                    };
                                                };
                                            } | {
                                                rightLabel?: string;
                                                title?: string;
                                                icon?: string | string[];
                                                position?: number;
                                                supportedDesignModes?: string[];
                                                enabled?: boolean;
                                                hideOnOfflineMode?: boolean;
                                                noContentPadding?: boolean;
                                                ai?: boolean;
                                                embedded?: {
                                                    collection?: Collection;
                                                    type?: string;
                                                    source?: string;
                                                    tabLabel?: string;
                                                    insertCount?: number;
                                                    optionGroups?: {
                                                        [x: string]: {
                                                            optionsOverride?: {
                                                                [x: string]: {
                                                                    id?: string;
                                                                    type?: string;
                                                                    slug?: string;
                                                                    label?: string;
                                                                    defaultValue?: unknown;
                                                                    widget?: string;
                                                                    hideOnOfflineMode?: boolean;
                                                                    widgetParams?: {
                                                                        [x: string]: any;
                                                                        shouldRender?: false | object;
                                                                    } | {};
                                                                    data?: object;
                                                                    enabled?: boolean;
                                                                    hidden?: boolean;
                                                                    options?: {
                                                                        [x: string]: {
                                                                            rightLabel?: string;
                                                                            title?: string;
                                                                            icon?: string | string[];
                                                                            position?: number;
                                                                            supportedDesignModes?: string[];
                                                                            enabled?: boolean;
                                                                            hideOnOfflineMode?: boolean;
                                                                            noContentPadding?: boolean;
                                                                            ai?: boolean;
                                                                            embedded?: never;
                                                                            options?: any;
                                                                        } | {
                                                                            rightLabel?: string;
                                                                            title?: string;
                                                                            icon?: string | string[];
                                                                            position?: number;
                                                                            supportedDesignModes?: string[];
                                                                            enabled?: boolean;
                                                                            hideOnOfflineMode?: boolean;
                                                                            noContentPadding?: boolean;
                                                                            ai?: boolean;
                                                                            embedded?: any;
                                                                            options?: never;
                                                                        };
                                                                    };
                                                                    supportedDisplayModes?: DisplayMode[];
                                                                    overrideAllowed?: Device[];
                                                                    _override?: {
                                                                        mobile?: {
                                                                            type?: string;
                                                                            data?: object;
                                                                            id?: string;
                                                                            hidden?: boolean;
                                                                            label?: string;
                                                                            options?: {
                                                                                [x: string]: {
                                                                                    rightLabel?: string;
                                                                                    title?: string;
                                                                                    icon?: string | string[];
                                                                                    position?: number;
                                                                                    supportedDesignModes?: string[];
                                                                                    enabled?: boolean;
                                                                                    hideOnOfflineMode?: boolean;
                                                                                    noContentPadding?: boolean;
                                                                                    ai?: boolean;
                                                                                    embedded?: never;
                                                                                    options?: any;
                                                                                } | {
                                                                                    rightLabel?: string;
                                                                                    title?: string;
                                                                                    icon?: string | string[];
                                                                                    position?: number;
                                                                                    supportedDesignModes?: string[];
                                                                                    enabled?: boolean;
                                                                                    hideOnOfflineMode?: boolean;
                                                                                    noContentPadding?: boolean;
                                                                                    ai?: boolean;
                                                                                    embedded?: any;
                                                                                    options?: never;
                                                                                };
                                                                            };
                                                                            enabled?: boolean;
                                                                            defaultValue?: unknown;
                                                                            slug?: string;
                                                                            widgetParams?: {
                                                                                [x: string]: any;
                                                                                shouldRender?: false | object;
                                                                            } | {};
                                                                            widget?: string;
                                                                            hideOnOfflineMode?: boolean;
                                                                            supportedDisplayModes?: DisplayMode[];
                                                                        };
                                                                        tablet?: {
                                                                            type?: string;
                                                                            data?: object;
                                                                            id?: string;
                                                                            hidden?: boolean;
                                                                            label?: string;
                                                                            options?: {
                                                                                [x: string]: {
                                                                                    rightLabel?: string;
                                                                                    title?: string;
                                                                                    icon?: string | string[];
                                                                                    position?: number;
                                                                                    supportedDesignModes?: string[];
                                                                                    enabled?: boolean;
                                                                                    hideOnOfflineMode?: boolean;
                                                                                    noContentPadding?: boolean;
                                                                                    ai?: boolean;
                                                                                    embedded?: never;
                                                                                    options?: any;
                                                                                } | {
                                                                                    rightLabel?: string;
                                                                                    title?: string;
                                                                                    icon?: string | string[];
                                                                                    position?: number;
                                                                                    supportedDesignModes?: string[];
                                                                                    enabled?: boolean;
                                                                                    hideOnOfflineMode?: boolean;
                                                                                    noContentPadding?: boolean;
                                                                                    ai?: boolean;
                                                                                    embedded?: any;
                                                                                    options?: never;
                                                                                };
                                                                            };
                                                                            enabled?: boolean;
                                                                            defaultValue?: unknown;
                                                                            slug?: string;
                                                                            widgetParams?: {
                                                                                [x: string]: any;
                                                                                shouldRender?: false | object;
                                                                            } | {};
                                                                            widget?: string;
                                                                            hideOnOfflineMode?: boolean;
                                                                            supportedDisplayModes?: DisplayMode[];
                                                                        };
                                                                        desktop?: {
                                                                            type?: string;
                                                                            data?: object;
                                                                            id?: string;
                                                                            hidden?: boolean;
                                                                            label?: string;
                                                                            options?: {
                                                                                [x: string]: {
                                                                                    rightLabel?: string;
                                                                                    title?: string;
                                                                                    icon?: string | string[];
                                                                                    position?: number;
                                                                                    supportedDesignModes?: string[];
                                                                                    enabled?: boolean;
                                                                                    hideOnOfflineMode?: boolean;
                                                                                    noContentPadding?: boolean;
                                                                                    ai?: boolean;
                                                                                    embedded?: never;
                                                                                    options?: any;
                                                                                } | {
                                                                                    rightLabel?: string;
                                                                                    title?: string;
                                                                                    icon?: string | string[];
                                                                                    position?: number;
                                                                                    supportedDesignModes?: string[];
                                                                                    enabled?: boolean;
                                                                                    hideOnOfflineMode?: boolean;
                                                                                    noContentPadding?: boolean;
                                                                                    ai?: boolean;
                                                                                    embedded?: any;
                                                                                    options?: never;
                                                                                };
                                                                            };
                                                                            enabled?: boolean;
                                                                            defaultValue?: unknown;
                                                                            slug?: string;
                                                                            widgetParams?: {
                                                                                [x: string]: any;
                                                                                shouldRender?: false | object;
                                                                            } | {};
                                                                            widget?: string;
                                                                            hideOnOfflineMode?: boolean;
                                                                            supportedDisplayModes?: DisplayMode[];
                                                                        };
                                                                    };
                                                                };
                                                            };
                                                        };
                                                    };
                                                };
                                                options?: never;
                                            };
                                        };
                                        enabled?: boolean;
                                        defaultValue?: unknown;
                                        slug?: string;
                                        widgetParams?: {
                                            [x: string]: any;
                                            shouldRender?: false | object;
                                        } | {};
                                        widget?: string;
                                        hideOnOfflineMode?: boolean;
                                        supportedDisplayModes?: DisplayMode[];
                                    };
                                    tablet?: {
                                        type?: string;
                                        data?: object;
                                        id?: string;
                                        hidden?: boolean;
                                        label?: string;
                                        options?: {
                                            [x: string]: {
                                                rightLabel?: string;
                                                title?: string;
                                                icon?: string | string[];
                                                position?: number;
                                                supportedDesignModes?: string[];
                                                enabled?: boolean;
                                                hideOnOfflineMode?: boolean;
                                                noContentPadding?: boolean;
                                                ai?: boolean;
                                                embedded?: never;
                                                options?: {
                                                    [x: string]: {
                                                        id?: string;
                                                        type?: string;
                                                        slug?: string;
                                                        label?: string;
                                                        defaultValue?: unknown;
                                                        widget?: string;
                                                        hideOnOfflineMode?: boolean;
                                                        widgetParams?: {
                                                            [x: string]: any;
                                                            shouldRender?: false | object;
                                                        } | {};
                                                        data?: object;
                                                        enabled?: boolean;
                                                        hidden?: boolean;
                                                        options?: {
                                                            [x: string]: {
                                                                rightLabel?: string;
                                                                title?: string;
                                                                icon?: string | string[];
                                                                position?: number;
                                                                supportedDesignModes?: string[];
                                                                enabled?: boolean;
                                                                hideOnOfflineMode?: boolean;
                                                                noContentPadding?: boolean;
                                                                ai?: boolean;
                                                                embedded?: never;
                                                                options?: any;
                                                            } | {
                                                                rightLabel?: string;
                                                                title?: string;
                                                                icon?: string | string[];
                                                                position?: number;
                                                                supportedDesignModes?: string[];
                                                                enabled?: boolean;
                                                                hideOnOfflineMode?: boolean;
                                                                noContentPadding?: boolean;
                                                                ai?: boolean;
                                                                embedded?: any;
                                                                options?: never;
                                                            };
                                                        };
                                                        supportedDisplayModes?: DisplayMode[];
                                                        overrideAllowed?: Device[];
                                                        _override?: {
                                                            mobile?: {
                                                                type?: string;
                                                                data?: object;
                                                                id?: string;
                                                                hidden?: boolean;
                                                                label?: string;
                                                                options?: {
                                                                    [x: string]: {
                                                                        rightLabel?: string;
                                                                        title?: string;
                                                                        icon?: string | string[];
                                                                        position?: number;
                                                                        supportedDesignModes?: string[];
                                                                        enabled?: boolean;
                                                                        hideOnOfflineMode?: boolean;
                                                                        noContentPadding?: boolean;
                                                                        ai?: boolean;
                                                                        embedded?: never;
                                                                        options?: any;
                                                                    } | {
                                                                        rightLabel?: string;
                                                                        title?: string;
                                                                        icon?: string | string[];
                                                                        position?: number;
                                                                        supportedDesignModes?: string[];
                                                                        enabled?: boolean;
                                                                        hideOnOfflineMode?: boolean;
                                                                        noContentPadding?: boolean;
                                                                        ai?: boolean;
                                                                        embedded?: any;
                                                                        options?: never;
                                                                    };
                                                                };
                                                                enabled?: boolean;
                                                                defaultValue?: unknown;
                                                                slug?: string;
                                                                widgetParams?: {
                                                                    [x: string]: any;
                                                                    shouldRender?: false | object;
                                                                } | {};
                                                                widget?: string;
                                                                hideOnOfflineMode?: boolean;
                                                                supportedDisplayModes?: DisplayMode[];
                                                            };
                                                            tablet?: {
                                                                type?: string;
                                                                data?: object;
                                                                id?: string;
                                                                hidden?: boolean;
                                                                label?: string;
                                                                options?: {
                                                                    [x: string]: {
                                                                        rightLabel?: string;
                                                                        title?: string;
                                                                        icon?: string | string[];
                                                                        position?: number;
                                                                        supportedDesignModes?: string[];
                                                                        enabled?: boolean;
                                                                        hideOnOfflineMode?: boolean;
                                                                        noContentPadding?: boolean;
                                                                        ai?: boolean;
                                                                        embedded?: never;
                                                                        options?: any;
                                                                    } | {
                                                                        rightLabel?: string;
                                                                        title?: string;
                                                                        icon?: string | string[];
                                                                        position?: number;
                                                                        supportedDesignModes?: string[];
                                                                        enabled?: boolean;
                                                                        hideOnOfflineMode?: boolean;
                                                                        noContentPadding?: boolean;
                                                                        ai?: boolean;
                                                                        embedded?: any;
                                                                        options?: never;
                                                                    };
                                                                };
                                                                enabled?: boolean;
                                                                defaultValue?: unknown;
                                                                slug?: string;
                                                                widgetParams?: {
                                                                    [x: string]: any;
                                                                    shouldRender?: false | object;
                                                                } | {};
                                                                widget?: string;
                                                                hideOnOfflineMode?: boolean;
                                                                supportedDisplayModes?: DisplayMode[];
                                                            };
                                                            desktop?: {
                                                                type?: string;
                                                                data?: object;
                                                                id?: string;
                                                                hidden?: boolean;
                                                                label?: string;
                                                                options?: {
                                                                    [x: string]: {
                                                                        rightLabel?: string;
                                                                        title?: string;
                                                                        icon?: string | string[];
                                                                        position?: number;
                                                                        supportedDesignModes?: string[];
                                                                        enabled?: boolean;
                                                                        hideOnOfflineMode?: boolean;
                                                                        noContentPadding?: boolean;
                                                                        ai?: boolean;
                                                                        embedded?: never;
                                                                        options?: any;
                                                                    } | {
                                                                        rightLabel?: string;
                                                                        title?: string;
                                                                        icon?: string | string[];
                                                                        position?: number;
                                                                        supportedDesignModes?: string[];
                                                                        enabled?: boolean;
                                                                        hideOnOfflineMode?: boolean;
                                                                        noContentPadding?: boolean;
                                                                        ai?: boolean;
                                                                        embedded?: any;
                                                                        options?: never;
                                                                    };
                                                                };
                                                                enabled?: boolean;
                                                                defaultValue?: unknown;
                                                                slug?: string;
                                                                widgetParams?: {
                                                                    [x: string]: any;
                                                                    shouldRender?: false | object;
                                                                } | {};
                                                                widget?: string;
                                                                hideOnOfflineMode?: boolean;
                                                                supportedDisplayModes?: DisplayMode[];
                                                            };
                                                        };
                                                    };
                                                };
                                            } | {
                                                rightLabel?: string;
                                                title?: string;
                                                icon?: string | string[];
                                                position?: number;
                                                supportedDesignModes?: string[];
                                                enabled?: boolean;
                                                hideOnOfflineMode?: boolean;
                                                noContentPadding?: boolean;
                                                ai?: boolean;
                                                embedded?: {
                                                    collection?: Collection;
                                                    type?: string;
                                                    source?: string;
                                                    tabLabel?: string;
                                                    insertCount?: number;
                                                    optionGroups?: {
                                                        [x: string]: {
                                                            optionsOverride?: {
                                                                [x: string]: {
                                                                    id?: string;
                                                                    type?: string;
                                                                    slug?: string;
                                                                    label?: string;
                                                                    defaultValue?: unknown;
                                                                    widget?: string;
                                                                    hideOnOfflineMode?: boolean;
                                                                    widgetParams?: {
                                                                        [x: string]: any;
                                                                        shouldRender?: false | object;
                                                                    } | {};
                                                                    data?: object;
                                                                    enabled?: boolean;
                                                                    hidden?: boolean;
                                                                    options?: {
                                                                        [x: string]: {
                                                                            rightLabel?: string;
                                                                            title?: string;
                                                                            icon?: string | string[];
                                                                            position?: number;
                                                                            supportedDesignModes?: string[];
                                                                            enabled?: boolean;
                                                                            hideOnOfflineMode?: boolean;
                                                                            noContentPadding?: boolean;
                                                                            ai?: boolean;
                                                                            embedded?: never;
                                                                            options?: any;
                                                                        } | {
                                                                            rightLabel?: string;
                                                                            title?: string;
                                                                            icon?: string | string[];
                                                                            position?: number;
                                                                            supportedDesignModes?: string[];
                                                                            enabled?: boolean;
                                                                            hideOnOfflineMode?: boolean;
                                                                            noContentPadding?: boolean;
                                                                            ai?: boolean;
                                                                            embedded?: any;
                                                                            options?: never;
                                                                        };
                                                                    };
                                                                    supportedDisplayModes?: DisplayMode[];
                                                                    overrideAllowed?: Device[];
                                                                    _override?: {
                                                                        mobile?: {
                                                                            type?: string;
                                                                            data?: object;
                                                                            id?: string;
                                                                            hidden?: boolean;
                                                                            label?: string;
                                                                            options?: {
                                                                                [x: string]: {
                                                                                    rightLabel?: string;
                                                                                    title?: string;
                                                                                    icon?: string | string[];
                                                                                    position?: number;
                                                                                    supportedDesignModes?: string[];
                                                                                    enabled?: boolean;
                                                                                    hideOnOfflineMode?: boolean;
                                                                                    noContentPadding?: boolean;
                                                                                    ai?: boolean;
                                                                                    embedded?: never;
                                                                                    options?: any;
                                                                                } | {
                                                                                    rightLabel?: string;
                                                                                    title?: string;
                                                                                    icon?: string | string[];
                                                                                    position?: number;
                                                                                    supportedDesignModes?: string[];
                                                                                    enabled?: boolean;
                                                                                    hideOnOfflineMode?: boolean;
                                                                                    noContentPadding?: boolean;
                                                                                    ai?: boolean;
                                                                                    embedded?: any;
                                                                                    options?: never;
                                                                                };
                                                                            };
                                                                            enabled?: boolean;
                                                                            defaultValue?: unknown;
                                                                            slug?: string;
                                                                            widgetParams?: {
                                                                                [x: string]: any;
                                                                                shouldRender?: false | object;
                                                                            } | {};
                                                                            widget?: string;
                                                                            hideOnOfflineMode?: boolean;
                                                                            supportedDisplayModes?: DisplayMode[];
                                                                        };
                                                                        tablet?: {
                                                                            type?: string;
                                                                            data?: object;
                                                                            id?: string;
                                                                            hidden?: boolean;
                                                                            label?: string;
                                                                            options?: {
                                                                                [x: string]: {
                                                                                    rightLabel?: string;
                                                                                    title?: string;
                                                                                    icon?: string | string[];
                                                                                    position?: number;
                                                                                    supportedDesignModes?: string[];
                                                                                    enabled?: boolean;
                                                                                    hideOnOfflineMode?: boolean;
                                                                                    noContentPadding?: boolean;
                                                                                    ai?: boolean;
                                                                                    embedded?: never;
                                                                                    options?: any;
                                                                                } | {
                                                                                    rightLabel?: string;
                                                                                    title?: string;
                                                                                    icon?: string | string[];
                                                                                    position?: number;
                                                                                    supportedDesignModes?: string[];
                                                                                    enabled?: boolean;
                                                                                    hideOnOfflineMode?: boolean;
                                                                                    noContentPadding?: boolean;
                                                                                    ai?: boolean;
                                                                                    embedded?: any;
                                                                                    options?: never;
                                                                                };
                                                                            };
                                                                            enabled?: boolean;
                                                                            defaultValue?: unknown;
                                                                            slug?: string;
                                                                            widgetParams?: {
                                                                                [x: string]: any;
                                                                                shouldRender?: false | object;
                                                                            } | {};
                                                                            widget?: string;
                                                                            hideOnOfflineMode?: boolean;
                                                                            supportedDisplayModes?: DisplayMode[];
                                                                        };
                                                                        desktop?: {
                                                                            type?: string;
                                                                            data?: object;
                                                                            id?: string;
                                                                            hidden?: boolean;
                                                                            label?: string;
                                                                            options?: {
                                                                                [x: string]: {
                                                                                    rightLabel?: string;
                                                                                    title?: string;
                                                                                    icon?: string | string[];
                                                                                    position?: number;
                                                                                    supportedDesignModes?: string[];
                                                                                    enabled?: boolean;
                                                                                    hideOnOfflineMode?: boolean;
                                                                                    noContentPadding?: boolean;
                                                                                    ai?: boolean;
                                                                                    embedded?: never;
                                                                                    options?: any;
                                                                                } | {
                                                                                    rightLabel?: string;
                                                                                    title?: string;
                                                                                    icon?: string | string[];
                                                                                    position?: number;
                                                                                    supportedDesignModes?: string[];
                                                                                    enabled?: boolean;
                                                                                    hideOnOfflineMode?: boolean;
                                                                                    noContentPadding?: boolean;
                                                                                    ai?: boolean;
                                                                                    embedded?: any;
                                                                                    options?: never;
                                                                                };
                                                                            };
                                                                            enabled?: boolean;
                                                                            defaultValue?: unknown;
                                                                            slug?: string;
                                                                            widgetParams?: {
                                                                                [x: string]: any;
                                                                                shouldRender?: false | object;
                                                                            } | {};
                                                                            widget?: string;
                                                                            hideOnOfflineMode?: boolean;
                                                                            supportedDisplayModes?: DisplayMode[];
                                                                        };
                                                                    };
                                                                };
                                                            };
                                                        };
                                                    };
                                                };
                                                options?: never;
                                            };
                                        };
                                        enabled?: boolean;
                                        defaultValue?: unknown;
                                        slug?: string;
                                        widgetParams?: {
                                            [x: string]: any;
                                            shouldRender?: false | object;
                                        } | {};
                                        widget?: string;
                                        hideOnOfflineMode?: boolean;
                                        supportedDisplayModes?: DisplayMode[];
                                    };
                                    desktop?: {
                                        type?: string;
                                        data?: object;
                                        id?: string;
                                        hidden?: boolean;
                                        label?: string;
                                        options?: {
                                            [x: string]: {
                                                rightLabel?: string;
                                                title?: string;
                                                icon?: string | string[];
                                                position?: number;
                                                supportedDesignModes?: string[];
                                                enabled?: boolean;
                                                hideOnOfflineMode?: boolean;
                                                noContentPadding?: boolean;
                                                ai?: boolean;
                                                embedded?: never;
                                                options?: {
                                                    [x: string]: {
                                                        id?: string;
                                                        type?: string;
                                                        slug?: string;
                                                        label?: string;
                                                        defaultValue?: unknown;
                                                        widget?: string;
                                                        hideOnOfflineMode?: boolean;
                                                        widgetParams?: {
                                                            [x: string]: any;
                                                            shouldRender?: false | object;
                                                        } | {};
                                                        data?: object;
                                                        enabled?: boolean;
                                                        hidden?: boolean;
                                                        options?: {
                                                            [x: string]: {
                                                                rightLabel?: string;
                                                                title?: string;
                                                                icon?: string | string[];
                                                                position?: number;
                                                                supportedDesignModes?: string[];
                                                                enabled?: boolean;
                                                                hideOnOfflineMode?: boolean;
                                                                noContentPadding?: boolean;
                                                                ai?: boolean;
                                                                embedded?: never;
                                                                options?: any;
                                                            } | {
                                                                rightLabel?: string;
                                                                title?: string;
                                                                icon?: string | string[];
                                                                position?: number;
                                                                supportedDesignModes?: string[];
                                                                enabled?: boolean;
                                                                hideOnOfflineMode?: boolean;
                                                                noContentPadding?: boolean;
                                                                ai?: boolean;
                                                                embedded?: any;
                                                                options?: never;
                                                            };
                                                        };
                                                        supportedDisplayModes?: DisplayMode[];
                                                        overrideAllowed?: Device[];
                                                        _override?: {
                                                            mobile?: {
                                                                type?: string;
                                                                data?: object;
                                                                id?: string;
                                                                hidden?: boolean;
                                                                label?: string;
                                                                options?: {
                                                                    [x: string]: {
                                                                        rightLabel?: string;
                                                                        title?: string;
                                                                        icon?: string | string[];
                                                                        position?: number;
                                                                        supportedDesignModes?: string[];
                                                                        enabled?: boolean;
                                                                        hideOnOfflineMode?: boolean;
                                                                        noContentPadding?: boolean;
                                                                        ai?: boolean;
                                                                        embedded?: never;
                                                                        options?: any;
                                                                    } | {
                                                                        rightLabel?: string;
                                                                        title?: string;
                                                                        icon?: string | string[];
                                                                        position?: number;
                                                                        supportedDesignModes?: string[];
                                                                        enabled?: boolean;
                                                                        hideOnOfflineMode?: boolean;
                                                                        noContentPadding?: boolean;
                                                                        ai?: boolean;
                                                                        embedded?: any;
                                                                        options?: never;
                                                                    };
                                                                };
                                                                enabled?: boolean;
                                                                defaultValue?: unknown;
                                                                slug?: string;
                                                                widgetParams?: {
                                                                    [x: string]: any;
                                                                    shouldRender?: false | object;
                                                                } | {};
                                                                widget?: string;
                                                                hideOnOfflineMode?: boolean;
                                                                supportedDisplayModes?: DisplayMode[];
                                                            };
                                                            tablet?: {
                                                                type?: string;
                                                                data?: object;
                                                                id?: string;
                                                                hidden?: boolean;
                                                                label?: string;
                                                                options?: {
                                                                    [x: string]: {
                                                                        rightLabel?: string;
                                                                        title?: string;
                                                                        icon?: string | string[];
                                                                        position?: number;
                                                                        supportedDesignModes?: string[];
                                                                        enabled?: boolean;
                                                                        hideOnOfflineMode?: boolean;
                                                                        noContentPadding?: boolean;
                                                                        ai?: boolean;
                                                                        embedded?: never;
                                                                        options?: any;
                                                                    } | {
                                                                        rightLabel?: string;
                                                                        title?: string;
                                                                        icon?: string | string[];
                                                                        position?: number;
                                                                        supportedDesignModes?: string[];
                                                                        enabled?: boolean;
                                                                        hideOnOfflineMode?: boolean;
                                                                        noContentPadding?: boolean;
                                                                        ai?: boolean;
                                                                        embedded?: any;
                                                                        options?: never;
                                                                    };
                                                                };
                                                                enabled?: boolean;
                                                                defaultValue?: unknown;
                                                                slug?: string;
                                                                widgetParams?: {
                                                                    [x: string]: any;
                                                                    shouldRender?: false | object;
                                                                } | {};
                                                                widget?: string;
                                                                hideOnOfflineMode?: boolean;
                                                                supportedDisplayModes?: DisplayMode[];
                                                            };
                                                            desktop?: {
                                                                type?: string;
                                                                data?: object;
                                                                id?: string;
                                                                hidden?: boolean;
                                                                label?: string;
                                                                options?: {
                                                                    [x: string]: {
                                                                        rightLabel?: string;
                                                                        title?: string;
                                                                        icon?: string | string[];
                                                                        position?: number;
                                                                        supportedDesignModes?: string[];
                                                                        enabled?: boolean;
                                                                        hideOnOfflineMode?: boolean;
                                                                        noContentPadding?: boolean;
                                                                        ai?: boolean;
                                                                        embedded?: never;
                                                                        options?: any;
                                                                    } | {
                                                                        rightLabel?: string;
                                                                        title?: string;
                                                                        icon?: string | string[];
                                                                        position?: number;
                                                                        supportedDesignModes?: string[];
                                                                        enabled?: boolean;
                                                                        hideOnOfflineMode?: boolean;
                                                                        noContentPadding?: boolean;
                                                                        ai?: boolean;
                                                                        embedded?: any;
                                                                        options?: never;
                                                                    };
                                                                };
                                                                enabled?: boolean;
                                                                defaultValue?: unknown;
                                                                slug?: string;
                                                                widgetParams?: {
                                                                    [x: string]: any;
                                                                    shouldRender?: false | object;
                                                                } | {};
                                                                widget?: string;
                                                                hideOnOfflineMode?: boolean;
                                                                supportedDisplayModes?: DisplayMode[];
                                                            };
                                                        };
                                                    };
                                                };
                                            } | {
                                                rightLabel?: string;
                                                title?: string;
                                                icon?: string | string[];
                                                position?: number;
                                                supportedDesignModes?: string[];
                                                enabled?: boolean;
                                                hideOnOfflineMode?: boolean;
                                                noContentPadding?: boolean;
                                                ai?: boolean;
                                                embedded?: {
                                                    collection?: Collection;
                                                    type?: string;
                                                    source?: string;
                                                    tabLabel?: string;
                                                    insertCount?: number;
                                                    optionGroups?: {
                                                        [x: string]: {
                                                            optionsOverride?: {
                                                                [x: string]: {
                                                                    id?: string;
                                                                    type?: string;
                                                                    slug?: string;
                                                                    label?: string;
                                                                    defaultValue?: unknown;
                                                                    widget?: string;
                                                                    hideOnOfflineMode?: boolean;
                                                                    widgetParams?: {
                                                                        [x: string]: any;
                                                                        shouldRender?: false | object;
                                                                    } | {};
                                                                    data?: object;
                                                                    enabled?: boolean;
                                                                    hidden?: boolean;
                                                                    options?: {
                                                                        [x: string]: {
                                                                            rightLabel?: string;
                                                                            title?: string;
                                                                            icon?: string | string[];
                                                                            position?: number;
                                                                            supportedDesignModes?: string[];
                                                                            enabled?: boolean;
                                                                            hideOnOfflineMode?: boolean;
                                                                            noContentPadding?: boolean;
                                                                            ai?: boolean;
                                                                            embedded?: never;
                                                                            options?: any;
                                                                        } | {
                                                                            rightLabel?: string;
                                                                            title?: string;
                                                                            icon?: string | string[];
                                                                            position?: number;
                                                                            supportedDesignModes?: string[];
                                                                            enabled?: boolean;
                                                                            hideOnOfflineMode?: boolean;
                                                                            noContentPadding?: boolean;
                                                                            ai?: boolean;
                                                                            embedded?: any;
                                                                            options?: never;
                                                                        };
                                                                    };
                                                                    supportedDisplayModes?: DisplayMode[];
                                                                    overrideAllowed?: Device[];
                                                                    _override?: {
                                                                        mobile?: {
                                                                            type?: string;
                                                                            data?: object;
                                                                            id?: string;
                                                                            hidden?: boolean;
                                                                            label?: string;
                                                                            options?: {
                                                                                [x: string]: {
                                                                                    rightLabel?: string;
                                                                                    title?: string;
                                                                                    icon?: string | string[];
                                                                                    position?: number;
                                                                                    supportedDesignModes?: string[];
                                                                                    enabled?: boolean;
                                                                                    hideOnOfflineMode?: boolean;
                                                                                    noContentPadding?: boolean;
                                                                                    ai?: boolean;
                                                                                    embedded?: never;
                                                                                    options?: any;
                                                                                } | {
                                                                                    rightLabel?: string;
                                                                                    title?: string;
                                                                                    icon?: string | string[];
                                                                                    position?: number;
                                                                                    supportedDesignModes?: string[];
                                                                                    enabled?: boolean;
                                                                                    hideOnOfflineMode?: boolean;
                                                                                    noContentPadding?: boolean;
                                                                                    ai?: boolean;
                                                                                    embedded?: any;
                                                                                    options?: never;
                                                                                };
                                                                            };
                                                                            enabled?: boolean;
                                                                            defaultValue?: unknown;
                                                                            slug?: string;
                                                                            widgetParams?: {
                                                                                [x: string]: any;
                                                                                shouldRender?: false | object;
                                                                            } | {};
                                                                            widget?: string;
                                                                            hideOnOfflineMode?: boolean;
                                                                            supportedDisplayModes?: DisplayMode[];
                                                                        };
                                                                        tablet?: {
                                                                            type?: string;
                                                                            data?: object;
                                                                            id?: string;
                                                                            hidden?: boolean;
                                                                            label?: string;
                                                                            options?: {
                                                                                [x: string]: {
                                                                                    rightLabel?: string;
                                                                                    title?: string;
                                                                                    icon?: string | string[];
                                                                                    position?: number;
                                                                                    supportedDesignModes?: string[];
                                                                                    enabled?: boolean;
                                                                                    hideOnOfflineMode?: boolean;
                                                                                    noContentPadding?: boolean;
                                                                                    ai?: boolean;
                                                                                    embedded?: never;
                                                                                    options?: any;
                                                                                } | {
                                                                                    rightLabel?: string;
                                                                                    title?: string;
                                                                                    icon?: string | string[];
                                                                                    position?: number;
                                                                                    supportedDesignModes?: string[];
                                                                                    enabled?: boolean;
                                                                                    hideOnOfflineMode?: boolean;
                                                                                    noContentPadding?: boolean;
                                                                                    ai?: boolean;
                                                                                    embedded?: any;
                                                                                    options?: never;
                                                                                };
                                                                            };
                                                                            enabled?: boolean;
                                                                            defaultValue?: unknown;
                                                                            slug?: string;
                                                                            widgetParams?: {
                                                                                [x: string]: any;
                                                                                shouldRender?: false | object;
                                                                            } | {};
                                                                            widget?: string;
                                                                            hideOnOfflineMode?: boolean;
                                                                            supportedDisplayModes?: DisplayMode[];
                                                                        };
                                                                        desktop?: {
                                                                            type?: string;
                                                                            data?: object;
                                                                            id?: string;
                                                                            hidden?: boolean;
                                                                            label?: string;
                                                                            options?: {
                                                                                [x: string]: {
                                                                                    rightLabel?: string;
                                                                                    title?: string;
                                                                                    icon?: string | string[];
                                                                                    position?: number;
                                                                                    supportedDesignModes?: string[];
                                                                                    enabled?: boolean;
                                                                                    hideOnOfflineMode?: boolean;
                                                                                    noContentPadding?: boolean;
                                                                                    ai?: boolean;
                                                                                    embedded?: never;
                                                                                    options?: any;
                                                                                } | {
                                                                                    rightLabel?: string;
                                                                                    title?: string;
                                                                                    icon?: string | string[];
                                                                                    position?: number;
                                                                                    supportedDesignModes?: string[];
                                                                                    enabled?: boolean;
                                                                                    hideOnOfflineMode?: boolean;
                                                                                    noContentPadding?: boolean;
                                                                                    ai?: boolean;
                                                                                    embedded?: any;
                                                                                    options?: never;
                                                                                };
                                                                            };
                                                                            enabled?: boolean;
                                                                            defaultValue?: unknown;
                                                                            slug?: string;
                                                                            widgetParams?: {
                                                                                [x: string]: any;
                                                                                shouldRender?: false | object;
                                                                            } | {};
                                                                            widget?: string;
                                                                            hideOnOfflineMode?: boolean;
                                                                            supportedDisplayModes?: DisplayMode[];
                                                                        };
                                                                    };
                                                                };
                                                            };
                                                        };
                                                    };
                                                };
                                                options?: never;
                                            };
                                        };
                                        enabled?: boolean;
                                        defaultValue?: unknown;
                                        slug?: string;
                                        widgetParams?: {
                                            [x: string]: any;
                                            shouldRender?: false | object;
                                        } | {};
                                        widget?: string;
                                        hideOnOfflineMode?: boolean;
                                        supportedDisplayModes?: DisplayMode[];
                                    };
                                };
                            };
                        };
                    };
                };
            };
            options?: never;
        };
    };
    data?: {
        [x: string]: unknown;
    };
    values?: {
        [x: string]: unknown;
    };
    css?: string;
    renderer?: object | {
        apply?: {};
        call?: {};
        bind?: {};
        toString?: {};
        prototype?: any;
        readonly length?: number;
        arguments?: any;
        caller?: any;
        readonly name?: string;
        [Symbol.hasInstance]?: {};
        // @ts-ignore
        [Symbol.metadata]?: {
            [x: string]: unknown;
            [x: number]: unknown;
            [x: symbol]: unknown;
        };
    };
    supportedDisplayModes?: DisplayMode[];
    supportedVariants?: "amp"[];
    usageLimit?: number;
    transformer?: {
        apply?: {};
        call?: {};
        bind?: {};
        toString?: {};
        prototype?: any;
        readonly length?: number;
        arguments?: any;
        caller?: any;
        readonly name?: string;
        [Symbol.hasInstance]?: {};
        // @ts-ignore
        [Symbol.metadata]?: {
            [x: string]: unknown;
            [x: number]: unknown;
            [x: symbol]: unknown;
        };
    };
    hasDeprecatedFontControls?: boolean;
    applyDesignTags?: {};
    propertyStates?: {
        apply?: {};
        call?: {};
        bind?: {};
        toString?: {};
        prototype?: any;
        readonly length?: number;
        arguments?: any;
        caller?: any;
        readonly name?: string;
        [Symbol.hasInstance]?: {};
        // @ts-ignore
        [Symbol.metadata]?: {
            [x: string]: unknown;
            [x: number]: unknown;
            [x: symbol]: unknown;
        };
    };
    premium?: boolean;
    editable?: boolean;
    classic?: boolean;
    enabled?: boolean;
    position?: number;
    location?: {
        collection?: Collection;
        id?: string | number;
    };
    validator?: string;
};
export declare function isRowToolEnabled(): boolean;
export declare function getTools(category: string): ({
    toString: () => string;
    charAt: (pos: number) => string;
    charCodeAt: (index: number) => number;
    concat: (...strings: string[]) => string;
    indexOf: (searchString: string, position?: number) => number;
    lastIndexOf: (searchString: string, position?: number) => number;
    localeCompare: {
        (that: string): number;
        (that: string, locales?: string | string[], options?: Intl.CollatorOptions): number;
        (that: string, locales?: Intl.LocalesArgument, options?: Intl.CollatorOptions): number;
    };
    match: {
        (regexp: string | RegExp): RegExpMatchArray;
        (matcher: {
            [Symbol.match](string: string): RegExpMatchArray;
        }): RegExpMatchArray;
    };
    replace: {
        (searchValue: string | RegExp, replaceValue: string): string;
        (searchValue: string | RegExp, replacer: (substring: string, ...args: any[]) => string): string;
        (searchValue: {
            [Symbol.replace](string: string, replaceValue: string): string;
        }, replaceValue: string): string;
        (searchValue: {
            [Symbol.replace](string: string, replacer: (substring: string, ...args: any[]) => string): string;
        }, replacer: (substring: string, ...args: any[]) => string): string;
    };
    search: {
        (regexp: string | RegExp): number;
        (searcher: {
            [Symbol.search](string: string): number;
        }): number;
    };
    slice: (start?: number, end?: number) => string;
    split: {
        (separator: string | RegExp, limit?: number): string[];
        (splitter: {
            [Symbol.split](string: string, limit?: number): string[];
        }, limit?: number): string[];
    };
    substring: (start: number, end?: number) => string;
    toLowerCase: () => string;
    toLocaleLowerCase: {
        (locales?: string | string[]): string;
        (locales?: Intl.LocalesArgument): string;
    };
    toUpperCase: () => string;
    toLocaleUpperCase: {
        (locales?: string | string[]): string;
        (locales?: Intl.LocalesArgument): string;
    };
    trim: () => string;
    readonly length: number;
    substr: (from: number, length?: number) => string;
    valueOf: () => string;
    codePointAt: (pos: number) => number;
    includes: (searchString: string, position?: number) => boolean;
    endsWith: (searchString: string, endPosition?: number) => boolean;
    normalize: {
        (form: "NFC" | "NFD" | "NFKC" | "NFKD"): string;
        (form?: string): string;
    };
    repeat: (count: number) => string;
    startsWith: (searchString: string, position?: number) => boolean;
    anchor: (name: string) => string;
    big: () => string;
    blink: () => string;
    bold: () => string;
    fixed: () => string;
    fontcolor: (color: string) => string;
    fontsize: {
        (size: number): string;
        (size: string): string;
    };
    italics: () => string;
    link: (url: string) => string;
    small: () => string;
    strike: () => string;
    sub: () => string;
    sup: () => string;
    padStart: (maxLength: number, fillString?: string) => string;
    padEnd: (maxLength: number, fillString?: string) => string;
    trimEnd: {
        (): string;
        (): string;
    };
    trimStart: {
        (): string;
        (): string;
    };
    trimLeft: {
        (): string;
        (): string;
    };
    trimRight: {
        (): string;
        (): string;
    };
    matchAll: (regexp: RegExp) => IterableIterator<RegExpExecArray>;
    replaceAll: {
        (searchValue: string | RegExp, replaceValue: string): string;
        (searchValue: string | RegExp, replacer: (substring: string, ...args: any[]) => string): string;
    };
    at: (index: number) => string;
    [Symbol.iterator]: () => IterableIterator<string>;
} & {
    id: string;
    name: string;
    type: string;
    slug: string;
    label: string;
    icon: string | string[];
    classicIcon: string | string[];
    category: Collection;
    cells: number[];
    options: {
        [x: string]: {
            rightLabel?: string;
            title?: string;
            icon?: string | string[];
            position?: number;
            supportedDesignModes?: string[];
            enabled?: boolean;
            hideOnOfflineMode?: boolean;
            noContentPadding?: boolean;
            ai?: boolean;
            embedded?: never;
            options?: {
                [x: string]: {
                    id?: string;
                    type?: string;
                    slug?: string;
                    label?: string;
                    defaultValue?: unknown;
                    widget?: string;
                    hideOnOfflineMode?: boolean;
                    widgetParams?: {
                        [x: string]: any;
                        shouldRender?: false | object;
                    } | {};
                    data?: object;
                    enabled?: boolean;
                    hidden?: boolean;
                    options?: {
                        [x: string]: {
                            rightLabel?: string;
                            title?: string;
                            icon?: string | string[];
                            position?: number;
                            supportedDesignModes?: string[];
                            enabled?: boolean;
                            hideOnOfflineMode?: boolean;
                            noContentPadding?: boolean;
                            ai?: boolean;
                            embedded?: never;
                            options?: {
                                [x: string]: {
                                    id?: string;
                                    type?: string;
                                    slug?: string;
                                    label?: string;
                                    defaultValue?: unknown;
                                    widget?: string;
                                    hideOnOfflineMode?: boolean;
                                    widgetParams?: {
                                        [x: string]: any;
                                        shouldRender?: false | object;
                                    } | {};
                                    data?: object;
                                    enabled?: boolean;
                                    hidden?: boolean;
                                    options?: {
                                        [x: string]: {
                                            rightLabel?: string;
                                            title?: string;
                                            icon?: string | string[];
                                            position?: number;
                                            supportedDesignModes?: string[];
                                            enabled?: boolean;
                                            hideOnOfflineMode?: boolean;
                                            noContentPadding?: boolean;
                                            ai?: boolean;
                                            embedded?: never;
                                            options?: {
                                                [x: string]: any;
                                            };
                                        } | {
                                            rightLabel?: string;
                                            title?: string;
                                            icon?: string | string[];
                                            position?: number;
                                            supportedDesignModes?: string[];
                                            enabled?: boolean;
                                            hideOnOfflineMode?: boolean;
                                            noContentPadding?: boolean;
                                            ai?: boolean;
                                            embedded?: {
                                                collection?: Collection;
                                                type?: string;
                                                source?: string;
                                                tabLabel?: string;
                                                insertCount?: number;
                                                optionGroups?: any;
                                            };
                                            options?: never;
                                        };
                                    };
                                    supportedDisplayModes?: DisplayMode[];
                                    overrideAllowed?: Device[];
                                    _override?: {
                                        mobile?: {
                                            type?: string;
                                            data?: object;
                                            id?: string;
                                            hidden?: boolean;
                                            label?: string;
                                            options?: {
                                                [x: string]: {
                                                    rightLabel?: string;
                                                    title?: string;
                                                    icon?: string | string[];
                                                    position?: number;
                                                    supportedDesignModes?: string[];
                                                    enabled?: boolean;
                                                    hideOnOfflineMode?: boolean;
                                                    noContentPadding?: boolean;
                                                    ai?: boolean;
                                                    embedded?: never;
                                                    options?: {
                                                        [x: string]: any;
                                                    };
                                                } | {
                                                    rightLabel?: string;
                                                    title?: string;
                                                    icon?: string | string[];
                                                    position?: number;
                                                    supportedDesignModes?: string[];
                                                    enabled?: boolean;
                                                    hideOnOfflineMode?: boolean;
                                                    noContentPadding?: boolean;
                                                    ai?: boolean;
                                                    embedded?: {
                                                        collection?: Collection;
                                                        type?: string;
                                                        source?: string;
                                                        tabLabel?: string;
                                                        insertCount?: number;
                                                        optionGroups?: any;
                                                    };
                                                    options?: never;
                                                };
                                            };
                                            enabled?: boolean;
                                            defaultValue?: unknown;
                                            slug?: string;
                                            widgetParams?: {
                                                [x: string]: any;
                                                shouldRender?: false | object;
                                            } | {};
                                            widget?: string;
                                            hideOnOfflineMode?: boolean;
                                            supportedDisplayModes?: DisplayMode[];
                                        };
                                        tablet?: {
                                            type?: string;
                                            data?: object;
                                            id?: string;
                                            hidden?: boolean;
                                            label?: string;
                                            options?: {
                                                [x: string]: {
                                                    rightLabel?: string;
                                                    title?: string;
                                                    icon?: string | string[];
                                                    position?: number;
                                                    supportedDesignModes?: string[];
                                                    enabled?: boolean;
                                                    hideOnOfflineMode?: boolean;
                                                    noContentPadding?: boolean;
                                                    ai?: boolean;
                                                    embedded?: never;
                                                    options?: {
                                                        [x: string]: any;
                                                    };
                                                } | {
                                                    rightLabel?: string;
                                                    title?: string;
                                                    icon?: string | string[];
                                                    position?: number;
                                                    supportedDesignModes?: string[];
                                                    enabled?: boolean;
                                                    hideOnOfflineMode?: boolean;
                                                    noContentPadding?: boolean;
                                                    ai?: boolean;
                                                    embedded?: {
                                                        collection?: Collection;
                                                        type?: string;
                                                        source?: string;
                                                        tabLabel?: string;
                                                        insertCount?: number;
                                                        optionGroups?: any;
                                                    };
                                                    options?: never;
                                                };
                                            };
                                            enabled?: boolean;
                                            defaultValue?: unknown;
                                            slug?: string;
                                            widgetParams?: {
                                                [x: string]: any;
                                                shouldRender?: false | object;
                                            } | {};
                                            widget?: string;
                                            hideOnOfflineMode?: boolean;
                                            supportedDisplayModes?: DisplayMode[];
                                        };
                                        desktop?: {
                                            type?: string;
                                            data?: object;
                                            id?: string;
                                            hidden?: boolean;
                                            label?: string;
                                            options?: {
                                                [x: string]: {
                                                    rightLabel?: string;
                                                    title?: string;
                                                    icon?: string | string[];
                                                    position?: number;
                                                    supportedDesignModes?: string[];
                                                    enabled?: boolean;
                                                    hideOnOfflineMode?: boolean;
                                                    noContentPadding?: boolean;
                                                    ai?: boolean;
                                                    embedded?: never;
                                                    options?: {
                                                        [x: string]: any;
                                                    };
                                                } | {
                                                    rightLabel?: string;
                                                    title?: string;
                                                    icon?: string | string[];
                                                    position?: number;
                                                    supportedDesignModes?: string[];
                                                    enabled?: boolean;
                                                    hideOnOfflineMode?: boolean;
                                                    noContentPadding?: boolean;
                                                    ai?: boolean;
                                                    embedded?: {
                                                        collection?: Collection;
                                                        type?: string;
                                                        source?: string;
                                                        tabLabel?: string;
                                                        insertCount?: number;
                                                        optionGroups?: any;
                                                    };
                                                    options?: never;
                                                };
                                            };
                                            enabled?: boolean;
                                            defaultValue?: unknown;
                                            slug?: string;
                                            widgetParams?: {
                                                [x: string]: any;
                                                shouldRender?: false | object;
                                            } | {};
                                            widget?: string;
                                            hideOnOfflineMode?: boolean;
                                            supportedDisplayModes?: DisplayMode[];
                                        };
                                    };
                                };
                            };
                        } | {
                            rightLabel?: string;
                            title?: string;
                            icon?: string | string[];
                            position?: number;
                            supportedDesignModes?: string[];
                            enabled?: boolean;
                            hideOnOfflineMode?: boolean;
                            noContentPadding?: boolean;
                            ai?: boolean;
                            embedded?: {
                                collection?: Collection;
                                type?: string;
                                source?: string;
                                tabLabel?: string;
                                insertCount?: number;
                                optionGroups?: {
                                    [x: string]: {
                                        optionsOverride?: {
                                            [x: string]: {
                                                id?: string;
                                                type?: string;
                                                slug?: string;
                                                label?: string;
                                                defaultValue?: unknown;
                                                widget?: string;
                                                hideOnOfflineMode?: boolean;
                                                widgetParams?: {
                                                    [x: string]: any;
                                                    shouldRender?: false | object;
                                                } | {};
                                                data?: object;
                                                enabled?: boolean;
                                                hidden?: boolean;
                                                options?: {
                                                    [x: string]: {
                                                        rightLabel?: string;
                                                        title?: string;
                                                        icon?: string | string[];
                                                        position?: number;
                                                        supportedDesignModes?: string[];
                                                        enabled?: boolean;
                                                        hideOnOfflineMode?: boolean;
                                                        noContentPadding?: boolean;
                                                        ai?: boolean;
                                                        embedded?: never;
                                                        options?: {
                                                            [x: string]: any;
                                                        };
                                                    } | {
                                                        rightLabel?: string;
                                                        title?: string;
                                                        icon?: string | string[];
                                                        position?: number;
                                                        supportedDesignModes?: string[];
                                                        enabled?: boolean;
                                                        hideOnOfflineMode?: boolean;
                                                        noContentPadding?: boolean;
                                                        ai?: boolean;
                                                        embedded?: {
                                                            collection?: Collection;
                                                            type?: string;
                                                            source?: string;
                                                            tabLabel?: string;
                                                            insertCount?: number;
                                                            optionGroups?: any;
                                                        };
                                                        options?: never;
                                                    };
                                                };
                                                supportedDisplayModes?: DisplayMode[];
                                                overrideAllowed?: Device[];
                                                _override?: {
                                                    mobile?: {
                                                        type?: string;
                                                        data?: object;
                                                        id?: string;
                                                        hidden?: boolean;
                                                        label?: string;
                                                        options?: {
                                                            [x: string]: {
                                                                rightLabel?: string;
                                                                title?: string;
                                                                icon?: string | string[];
                                                                position?: number;
                                                                supportedDesignModes?: string[];
                                                                enabled?: boolean;
                                                                hideOnOfflineMode?: boolean;
                                                                noContentPadding?: boolean;
                                                                ai?: boolean;
                                                                embedded?: never;
                                                                options?: {
                                                                    [x: string]: any;
                                                                };
                                                            } | {
                                                                rightLabel?: string;
                                                                title?: string;
                                                                icon?: string | string[];
                                                                position?: number;
                                                                supportedDesignModes?: string[];
                                                                enabled?: boolean;
                                                                hideOnOfflineMode?: boolean;
                                                                noContentPadding?: boolean;
                                                                ai?: boolean;
                                                                embedded?: {
                                                                    collection?: Collection;
                                                                    type?: string;
                                                                    source?: string;
                                                                    tabLabel?: string;
                                                                    insertCount?: number;
                                                                    optionGroups?: any;
                                                                };
                                                                options?: never;
                                                            };
                                                        };
                                                        enabled?: boolean;
                                                        defaultValue?: unknown;
                                                        slug?: string;
                                                        widgetParams?: {
                                                            [x: string]: any;
                                                            shouldRender?: false | object;
                                                        } | {};
                                                        widget?: string;
                                                        hideOnOfflineMode?: boolean;
                                                        supportedDisplayModes?: DisplayMode[];
                                                    };
                                                    tablet?: {
                                                        type?: string;
                                                        data?: object;
                                                        id?: string;
                                                        hidden?: boolean;
                                                        label?: string;
                                                        options?: {
                                                            [x: string]: {
                                                                rightLabel?: string;
                                                                title?: string;
                                                                icon?: string | string[];
                                                                position?: number;
                                                                supportedDesignModes?: string[];
                                                                enabled?: boolean;
                                                                hideOnOfflineMode?: boolean;
                                                                noContentPadding?: boolean;
                                                                ai?: boolean;
                                                                embedded?: never;
                                                                options?: {
                                                                    [x: string]: any;
                                                                };
                                                            } | {
                                                                rightLabel?: string;
                                                                title?: string;
                                                                icon?: string | string[];
                                                                position?: number;
                                                                supportedDesignModes?: string[];
                                                                enabled?: boolean;
                                                                hideOnOfflineMode?: boolean;
                                                                noContentPadding?: boolean;
                                                                ai?: boolean;
                                                                embedded?: {
                                                                    collection?: Collection;
                                                                    type?: string;
                                                                    source?: string;
                                                                    tabLabel?: string;
                                                                    insertCount?: number;
                                                                    optionGroups?: any;
                                                                };
                                                                options?: never;
                                                            };
                                                        };
                                                        enabled?: boolean;
                                                        defaultValue?: unknown;
                                                        slug?: string;
                                                        widgetParams?: {
                                                            [x: string]: any;
                                                            shouldRender?: false | object;
                                                        } | {};
                                                        widget?: string;
                                                        hideOnOfflineMode?: boolean;
                                                        supportedDisplayModes?: DisplayMode[];
                                                    };
                                                    desktop?: {
                                                        type?: string;
                                                        data?: object;
                                                        id?: string;
                                                        hidden?: boolean;
                                                        label?: string;
                                                        options?: {
                                                            [x: string]: {
                                                                rightLabel?: string;
                                                                title?: string;
                                                                icon?: string | string[];
                                                                position?: number;
                                                                supportedDesignModes?: string[];
                                                                enabled?: boolean;
                                                                hideOnOfflineMode?: boolean;
                                                                noContentPadding?: boolean;
                                                                ai?: boolean;
                                                                embedded?: never;
                                                                options?: {
                                                                    [x: string]: any;
                                                                };
                                                            } | {
                                                                rightLabel?: string;
                                                                title?: string;
                                                                icon?: string | string[];
                                                                position?: number;
                                                                supportedDesignModes?: string[];
                                                                enabled?: boolean;
                                                                hideOnOfflineMode?: boolean;
                                                                noContentPadding?: boolean;
                                                                ai?: boolean;
                                                                embedded?: {
                                                                    collection?: Collection;
                                                                    type?: string;
                                                                    source?: string;
                                                                    tabLabel?: string;
                                                                    insertCount?: number;
                                                                    optionGroups?: any;
                                                                };
                                                                options?: never;
                                                            };
                                                        };
                                                        enabled?: boolean;
                                                        defaultValue?: unknown;
                                                        slug?: string;
                                                        widgetParams?: {
                                                            [x: string]: any;
                                                            shouldRender?: false | object;
                                                        } | {};
                                                        widget?: string;
                                                        hideOnOfflineMode?: boolean;
                                                        supportedDisplayModes?: DisplayMode[];
                                                    };
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                            options?: never;
                        };
                    };
                    supportedDisplayModes?: DisplayMode[];
                    overrideAllowed?: Device[];
                    _override?: {
                        mobile?: {
                            type?: string;
                            data?: object;
                            id?: string;
                            hidden?: boolean;
                            label?: string;
                            options?: {
                                [x: string]: {
                                    rightLabel?: string;
                                    title?: string;
                                    icon?: string | string[];
                                    position?: number;
                                    supportedDesignModes?: string[];
                                    enabled?: boolean;
                                    hideOnOfflineMode?: boolean;
                                    noContentPadding?: boolean;
                                    ai?: boolean;
                                    embedded?: never;
                                    options?: {
                                        [x: string]: {
                                            id?: string;
                                            type?: string;
                                            slug?: string;
                                            label?: string;
                                            defaultValue?: unknown;
                                            widget?: string;
                                            hideOnOfflineMode?: boolean;
                                            widgetParams?: {
                                                [x: string]: any;
                                                shouldRender?: false | object;
                                            } | {};
                                            data?: object;
                                            enabled?: boolean;
                                            hidden?: boolean;
                                            options?: {
                                                [x: string]: {
                                                    rightLabel?: string;
                                                    title?: string;
                                                    icon?: string | string[];
                                                    position?: number;
                                                    supportedDesignModes?: string[];
                                                    enabled?: boolean;
                                                    hideOnOfflineMode?: boolean;
                                                    noContentPadding?: boolean;
                                                    ai?: boolean;
                                                    embedded?: never;
                                                    options?: {
                                                        [x: string]: any;
                                                    };
                                                } | {
                                                    rightLabel?: string;
                                                    title?: string;
                                                    icon?: string | string[];
                                                    position?: number;
                                                    supportedDesignModes?: string[];
                                                    enabled?: boolean;
                                                    hideOnOfflineMode?: boolean;
                                                    noContentPadding?: boolean;
                                                    ai?: boolean;
                                                    embedded?: {
                                                        collection?: Collection;
                                                        type?: string;
                                                        source?: string;
                                                        tabLabel?: string;
                                                        insertCount?: number;
                                                        optionGroups?: any;
                                                    };
                                                    options?: never;
                                                };
                                            };
                                            supportedDisplayModes?: DisplayMode[];
                                            overrideAllowed?: Device[];
                                            _override?: {
                                                mobile?: {
                                                    type?: string;
                                                    data?: object;
                                                    id?: string;
                                                    hidden?: boolean;
                                                    label?: string;
                                                    options?: {
                                                        [x: string]: {
                                                            rightLabel?: string;
                                                            title?: string;
                                                            icon?: string | string[];
                                                            position?: number;
                                                            supportedDesignModes?: string[];
                                                            enabled?: boolean;
                                                            hideOnOfflineMode?: boolean;
                                                            noContentPadding?: boolean;
                                                            ai?: boolean;
                                                            embedded?: never;
                                                            options?: {
                                                                [x: string]: any;
                                                            };
                                                        } | {
                                                            rightLabel?: string;
                                                            title?: string;
                                                            icon?: string | string[];
                                                            position?: number;
                                                            supportedDesignModes?: string[];
                                                            enabled?: boolean;
                                                            hideOnOfflineMode?: boolean;
                                                            noContentPadding?: boolean;
                                                            ai?: boolean;
                                                            embedded?: {
                                                                collection?: Collection;
                                                                type?: string;
                                                                source?: string;
                                                                tabLabel?: string;
                                                                insertCount?: number;
                                                                optionGroups?: any;
                                                            };
                                                            options?: never;
                                                        };
                                                    };
                                                    enabled?: boolean;
                                                    defaultValue?: unknown;
                                                    slug?: string;
                                                    widgetParams?: {
                                                        [x: string]: any;
                                                        shouldRender?: false | object;
                                                    } | {};
                                                    widget?: string;
                                                    hideOnOfflineMode?: boolean;
                                                    supportedDisplayModes?: DisplayMode[];
                                                };
                                                tablet?: {
                                                    type?: string;
                                                    data?: object;
                                                    id?: string;
                                                    hidden?: boolean;
                                                    label?: string;
                                                    options?: {
                                                        [x: string]: {
                                                            rightLabel?: string;
                                                            title?: string;
                                                            icon?: string | string[];
                                                            position?: number;
                                                            supportedDesignModes?: string[];
                                                            enabled?: boolean;
                                                            hideOnOfflineMode?: boolean;
                                                            noContentPadding?: boolean;
                                                            ai?: boolean;
                                                            embedded?: never;
                                                            options?: {
                                                                [x: string]: any;
                                                            };
                                                        } | {
                                                            rightLabel?: string;
                                                            title?: string;
                                                            icon?: string | string[];
                                                            position?: number;
                                                            supportedDesignModes?: string[];
                                                            enabled?: boolean;
                                                            hideOnOfflineMode?: boolean;
                                                            noContentPadding?: boolean;
                                                            ai?: boolean;
                                                            embedded?: {
                                                                collection?: Collection;
                                                                type?: string;
                                                                source?: string;
                                                                tabLabel?: string;
                                                                insertCount?: number;
                                                                optionGroups?: any;
                                                            };
                                                            options?: never;
                                                        };
                                                    };
                                                    enabled?: boolean;
                                                    defaultValue?: unknown;
                                                    slug?: string;
                                                    widgetParams?: {
                                                        [x: string]: any;
                                                        shouldRender?: false | object;
                                                    } | {};
                                                    widget?: string;
                                                    hideOnOfflineMode?: boolean;
                                                    supportedDisplayModes?: DisplayMode[];
                                                };
                                                desktop?: {
                                                    type?: string;
                                                    data?: object;
                                                    id?: string;
                                                    hidden?: boolean;
                                                    label?: string;
                                                    options?: {
                                                        [x: string]: {
                                                            rightLabel?: string;
                                                            title?: string;
                                                            icon?: string | string[];
                                                            position?: number;
                                                            supportedDesignModes?: string[];
                                                            enabled?: boolean;
                                                            hideOnOfflineMode?: boolean;
                                                            noContentPadding?: boolean;
                                                            ai?: boolean;
                                                            embedded?: never;
                                                            options?: {
                                                                [x: string]: any;
                                                            };
                                                        } | {
                                                            rightLabel?: string;
                                                            title?: string;
                                                            icon?: string | string[];
                                                            position?: number;
                                                            supportedDesignModes?: string[];
                                                            enabled?: boolean;
                                                            hideOnOfflineMode?: boolean;
                                                            noContentPadding?: boolean;
                                                            ai?: boolean;
                                                            embedded?: {
                                                                collection?: Collection;
                                                                type?: string;
                                                                source?: string;
                                                                tabLabel?: string;
                                                                insertCount?: number;
                                                                optionGroups?: any;
                                                            };
                                                            options?: never;
                                                        };
                                                    };
                                                    enabled?: boolean;
                                                    defaultValue?: unknown;
                                                    slug?: string;
                                                    widgetParams?: {
                                                        [x: string]: any;
                                                        shouldRender?: false | object;
                                                    } | {};
                                                    widget?: string;
                                                    hideOnOfflineMode?: boolean;
                                                    supportedDisplayModes?: DisplayMode[];
                                                };
                                            };
                                        };
                                    };
                                } | {
                                    rightLabel?: string;
                                    title?: string;
                                    icon?: string | string[];
                                    position?: number;
                                    supportedDesignModes?: string[];
                                    enabled?: boolean;
                                    hideOnOfflineMode?: boolean;
                                    noContentPadding?: boolean;
                                    ai?: boolean;
                                    embedded?: {
                                        collection?: Collection;
                                        type?: string;
                                        source?: string;
                                        tabLabel?: string;
                                        insertCount?: number;
                                        optionGroups?: {
                                            [x: string]: {
                                                optionsOverride?: {
                                                    [x: string]: {
                                                        id?: string;
                                                        type?: string;
                                                        slug?: string;
                                                        label?: string;
                                                        defaultValue?: unknown;
                                                        widget?: string;
                                                        hideOnOfflineMode?: boolean;
                                                        widgetParams?: {
                                                            [x: string]: any;
                                                            shouldRender?: false | object;
                                                        } | {};
                                                        data?: object;
                                                        enabled?: boolean;
                                                        hidden?: boolean;
                                                        options?: {
                                                            [x: string]: {
                                                                rightLabel?: string;
                                                                title?: string;
                                                                icon?: string | string[];
                                                                position?: number;
                                                                supportedDesignModes?: string[];
                                                                enabled?: boolean;
                                                                hideOnOfflineMode?: boolean;
                                                                noContentPadding?: boolean;
                                                                ai?: boolean;
                                                                embedded?: never;
                                                                options?: {
                                                                    [x: string]: any;
                                                                };
                                                            } | {
                                                                rightLabel?: string;
                                                                title?: string;
                                                                icon?: string | string[];
                                                                position?: number;
                                                                supportedDesignModes?: string[];
                                                                enabled?: boolean;
                                                                hideOnOfflineMode?: boolean;
                                                                noContentPadding?: boolean;
                                                                ai?: boolean;
                                                                embedded?: {
                                                                    collection?: Collection;
                                                                    type?: string;
                                                                    source?: string;
                                                                    tabLabel?: string;
                                                                    insertCount?: number;
                                                                    optionGroups?: any;
                                                                };
                                                                options?: never;
                                                            };
                                                        };
                                                        supportedDisplayModes?: DisplayMode[];
                                                        overrideAllowed?: Device[];
                                                        _override?: {
                                                            mobile?: {
                                                                type?: string;
                                                                data?: object;
                                                                id?: string;
                                                                hidden?: boolean;
                                                                label?: string;
                                                                options?: {
                                                                    [x: string]: {
                                                                        rightLabel?: string;
                                                                        title?: string;
                                                                        icon?: string | string[];
                                                                        position?: number;
                                                                        supportedDesignModes?: string[];
                                                                        enabled?: boolean;
                                                                        hideOnOfflineMode?: boolean;
                                                                        noContentPadding?: boolean;
                                                                        ai?: boolean;
                                                                        embedded?: never;
                                                                        options?: {
                                                                            [x: string]: any;
                                                                        };
                                                                    } | {
                                                                        rightLabel?: string;
                                                                        title?: string;
                                                                        icon?: string | string[];
                                                                        position?: number;
                                                                        supportedDesignModes?: string[];
                                                                        enabled?: boolean;
                                                                        hideOnOfflineMode?: boolean;
                                                                        noContentPadding?: boolean;
                                                                        ai?: boolean;
                                                                        embedded?: {
                                                                            collection?: Collection;
                                                                            type?: string;
                                                                            source?: string;
                                                                            tabLabel?: string;
                                                                            insertCount?: number;
                                                                            optionGroups?: any;
                                                                        };
                                                                        options?: never;
                                                                    };
                                                                };
                                                                enabled?: boolean;
                                                                defaultValue?: unknown;
                                                                slug?: string;
                                                                widgetParams?: {
                                                                    [x: string]: any;
                                                                    shouldRender?: false | object;
                                                                } | {};
                                                                widget?: string;
                                                                hideOnOfflineMode?: boolean;
                                                                supportedDisplayModes?: DisplayMode[];
                                                            };
                                                            tablet?: {
                                                                type?: string;
                                                                data?: object;
                                                                id?: string;
                                                                hidden?: boolean;
                                                                label?: string;
                                                                options?: {
                                                                    [x: string]: {
                                                                        rightLabel?: string;
                                                                        title?: string;
                                                                        icon?: string | string[];
                                                                        position?: number;
                                                                        supportedDesignModes?: string[];
                                                                        enabled?: boolean;
                                                                        hideOnOfflineMode?: boolean;
                                                                        noContentPadding?: boolean;
                                                                        ai?: boolean;
                                                                        embedded?: never;
                                                                        options?: {
                                                                            [x: string]: any;
                                                                        };
                                                                    } | {
                                                                        rightLabel?: string;
                                                                        title?: string;
                                                                        icon?: string | string[];
                                                                        position?: number;
                                                                        supportedDesignModes?: string[];
                                                                        enabled?: boolean;
                                                                        hideOnOfflineMode?: boolean;
                                                                        noContentPadding?: boolean;
                                                                        ai?: boolean;
                                                                        embedded?: {
                                                                            collection?: Collection;
                                                                            type?: string;
                                                                            source?: string;
                                                                            tabLabel?: string;
                                                                            insertCount?: number;
                                                                            optionGroups?: any;
                                                                        };
                                                                        options?: never;
                                                                    };
                                                                };
                                                                enabled?: boolean;
                                                                defaultValue?: unknown;
                                                                slug?: string;
                                                                widgetParams?: {
                                                                    [x: string]: any;
                                                                    shouldRender?: false | object;
                                                                } | {};
                                                                widget?: string;
                                                                hideOnOfflineMode?: boolean;
                                                                supportedDisplayModes?: DisplayMode[];
                                                            };
                                                            desktop?: {
                                                                type?: string;
                                                                data?: object;
                                                                id?: string;
                                                                hidden?: boolean;
                                                                label?: string;
                                                                options?: {
                                                                    [x: string]: {
                                                                        rightLabel?: string;
                                                                        title?: string;
                                                                        icon?: string | string[];
                                                                        position?: number;
                                                                        supportedDesignModes?: string[];
                                                                        enabled?: boolean;
                                                                        hideOnOfflineMode?: boolean;
                                                                        noContentPadding?: boolean;
                                                                        ai?: boolean;
                                                                        embedded?: never;
                                                                        options?: {
                                                                            [x: string]: any;
                                                                        };
                                                                    } | {
                                                                        rightLabel?: string;
                                                                        title?: string;
                                                                        icon?: string | string[];
                                                                        position?: number;
                                                                        supportedDesignModes?: string[];
                                                                        enabled?: boolean;
                                                                        hideOnOfflineMode?: boolean;
                                                                        noContentPadding?: boolean;
                                                                        ai?: boolean;
                                                                        embedded?: {
                                                                            collection?: Collection;
                                                                            type?: string;
                                                                            source?: string;
                                                                            tabLabel?: string;
                                                                            insertCount?: number;
                                                                            optionGroups?: any;
                                                                        };
                                                                        options?: never;
                                                                    };
                                                                };
                                                                enabled?: boolean;
                                                                defaultValue?: unknown;
                                                                slug?: string;
                                                                widgetParams?: {
                                                                    [x: string]: any;
                                                                    shouldRender?: false | object;
                                                                } | {};
                                                                widget?: string;
                                                                hideOnOfflineMode?: boolean;
                                                                supportedDisplayModes?: DisplayMode[];
                                                            };
                                                        };
                                                    };
                                                };
                                            };
                                        };
                                    };
                                    options?: never;
                                };
                            };
                            enabled?: boolean;
                            defaultValue?: unknown;
                            slug?: string;
                            widgetParams?: {
                                [x: string]: any;
                                shouldRender?: false | object;
                            } | {};
                            widget?: string;
                            hideOnOfflineMode?: boolean;
                            supportedDisplayModes?: DisplayMode[];
                        };
                        tablet?: {
                            type?: string;
                            data?: object;
                            id?: string;
                            hidden?: boolean;
                            label?: string;
                            options?: {
                                [x: string]: {
                                    rightLabel?: string;
                                    title?: string;
                                    icon?: string | string[];
                                    position?: number;
                                    supportedDesignModes?: string[];
                                    enabled?: boolean;
                                    hideOnOfflineMode?: boolean;
                                    noContentPadding?: boolean;
                                    ai?: boolean;
                                    embedded?: never;
                                    options?: {
                                        [x: string]: {
                                            id?: string;
                                            type?: string;
                                            slug?: string;
                                            label?: string;
                                            defaultValue?: unknown;
                                            widget?: string;
                                            hideOnOfflineMode?: boolean;
                                            widgetParams?: {
                                                [x: string]: any;
                                                shouldRender?: false | object;
                                            } | {};
                                            data?: object;
                                            enabled?: boolean;
                                            hidden?: boolean;
                                            options?: {
                                                [x: string]: {
                                                    rightLabel?: string;
                                                    title?: string;
                                                    icon?: string | string[];
                                                    position?: number;
                                                    supportedDesignModes?: string[];
                                                    enabled?: boolean;
                                                    hideOnOfflineMode?: boolean;
                                                    noContentPadding?: boolean;
                                                    ai?: boolean;
                                                    embedded?: never;
                                                    options?: {
                                                        [x: string]: any;
                                                    };
                                                } | {
                                                    rightLabel?: string;
                                                    title?: string;
                                                    icon?: string | string[];
                                                    position?: number;
                                                    supportedDesignModes?: string[];
                                                    enabled?: boolean;
                                                    hideOnOfflineMode?: boolean;
                                                    noContentPadding?: boolean;
                                                    ai?: boolean;
                                                    embedded?: {
                                                        collection?: Collection;
                                                        type?: string;
                                                        source?: string;
                                                        tabLabel?: string;
                                                        insertCount?: number;
                                                        optionGroups?: any;
                                                    };
                                                    options?: never;
                                                };
                                            };
                                            supportedDisplayModes?: DisplayMode[];
                                            overrideAllowed?: Device[];
                                            _override?: {
                                                mobile?: {
                                                    type?: string;
                                                    data?: object;
                                                    id?: string;
                                                    hidden?: boolean;
                                                    label?: string;
                                                    options?: {
                                                        [x: string]: {
                                                            rightLabel?: string;
                                                            title?: string;
                                                            icon?: string | string[];
                                                            position?: number;
                                                            supportedDesignModes?: string[];
                                                            enabled?: boolean;
                                                            hideOnOfflineMode?: boolean;
                                                            noContentPadding?: boolean;
                                                            ai?: boolean;
                                                            embedded?: never;
                                                            options?: {
                                                                [x: string]: any;
                                                            };
                                                        } | {
                                                            rightLabel?: string;
                                                            title?: string;
                                                            icon?: string | string[];
                                                            position?: number;
                                                            supportedDesignModes?: string[];
                                                            enabled?: boolean;
                                                            hideOnOfflineMode?: boolean;
                                                            noContentPadding?: boolean;
                                                            ai?: boolean;
                                                            embedded?: {
                                                                collection?: Collection;
                                                                type?: string;
                                                                source?: string;
                                                                tabLabel?: string;
                                                                insertCount?: number;
                                                                optionGroups?: any;
                                                            };
                                                            options?: never;
                                                        };
                                                    };
                                                    enabled?: boolean;
                                                    defaultValue?: unknown;
                                                    slug?: string;
                                                    widgetParams?: {
                                                        [x: string]: any;
                                                        shouldRender?: false | object;
                                                    } | {};
                                                    widget?: string;
                                                    hideOnOfflineMode?: boolean;
                                                    supportedDisplayModes?: DisplayMode[];
                                                };
                                                tablet?: {
                                                    type?: string;
                                                    data?: object;
                                                    id?: string;
                                                    hidden?: boolean;
                                                    label?: string;
                                                    options?: {
                                                        [x: string]: {
                                                            rightLabel?: string;
                                                            title?: string;
                                                            icon?: string | string[];
                                                            position?: number;
                                                            supportedDesignModes?: string[];
                                                            enabled?: boolean;
                                                            hideOnOfflineMode?: boolean;
                                                            noContentPadding?: boolean;
                                                            ai?: boolean;
                                                            embedded?: never;
                                                            options?: {
                                                                [x: string]: any;
                                                            };
                                                        } | {
                                                            rightLabel?: string;
                                                            title?: string;
                                                            icon?: string | string[];
                                                            position?: number;
                                                            supportedDesignModes?: string[];
                                                            enabled?: boolean;
                                                            hideOnOfflineMode?: boolean;
                                                            noContentPadding?: boolean;
                                                            ai?: boolean;
                                                            embedded?: {
                                                                collection?: Collection;
                                                                type?: string;
                                                                source?: string;
                                                                tabLabel?: string;
                                                                insertCount?: number;
                                                                optionGroups?: any;
                                                            };
                                                            options?: never;
                                                        };
                                                    };
                                                    enabled?: boolean;
                                                    defaultValue?: unknown;
                                                    slug?: string;
                                                    widgetParams?: {
                                                        [x: string]: any;
                                                        shouldRender?: false | object;
                                                    } | {};
                                                    widget?: string;
                                                    hideOnOfflineMode?: boolean;
                                                    supportedDisplayModes?: DisplayMode[];
                                                };
                                                desktop?: {
                                                    type?: string;
                                                    data?: object;
                                                    id?: string;
                                                    hidden?: boolean;
                                                    label?: string;
                                                    options?: {
                                                        [x: string]: {
                                                            rightLabel?: string;
                                                            title?: string;
                                                            icon?: string | string[];
                                                            position?: number;
                                                            supportedDesignModes?: string[];
                                                            enabled?: boolean;
                                                            hideOnOfflineMode?: boolean;
                                                            noContentPadding?: boolean;
                                                            ai?: boolean;
                                                            embedded?: never;
                                                            options?: {
                                                                [x: string]: any;
                                                            };
                                                        } | {
                                                            rightLabel?: string;
                                                            title?: string;
                                                            icon?: string | string[];
                                                            position?: number;
                                                            supportedDesignModes?: string[];
                                                            enabled?: boolean;
                                                            hideOnOfflineMode?: boolean;
                                                            noContentPadding?: boolean;
                                                            ai?: boolean;
                                                            embedded?: {
                                                                collection?: Collection;
                                                                type?: string;
                                                                source?: string;
                                                                tabLabel?: string;
                                                                insertCount?: number;
                                                                optionGroups?: any;
                                                            };
                                                            options?: never;
                                                        };
                                                    };
                                                    enabled?: boolean;
                                                    defaultValue?: unknown;
                                                    slug?: string;
                                                    widgetParams?: {
                                                        [x: string]: any;
                                                        shouldRender?: false | object;
                                                    } | {};
                                                    widget?: string;
                                                    hideOnOfflineMode?: boolean;
                                                    supportedDisplayModes?: DisplayMode[];
                                                };
                                            };
                                        };
                                    };
                                } | {
                                    rightLabel?: string;
                                    title?: string;
                                    icon?: string | string[];
                                    position?: number;
                                    supportedDesignModes?: string[];
                                    enabled?: boolean;
                                    hideOnOfflineMode?: boolean;
                                    noContentPadding?: boolean;
                                    ai?: boolean;
                                    embedded?: {
                                        collection?: Collection;
                                        type?: string;
                                        source?: string;
                                        tabLabel?: string;
                                        insertCount?: number;
                                        optionGroups?: {
                                            [x: string]: {
                                                optionsOverride?: {
                                                    [x: string]: {
                                                        id?: string;
                                                        type?: string;
                                                        slug?: string;
                                                        label?: string;
                                                        defaultValue?: unknown;
                                                        widget?: string;
                                                        hideOnOfflineMode?: boolean;
                                                        widgetParams?: {
                                                            [x: string]: any;
                                                            shouldRender?: false | object;
                                                        } | {};
                                                        data?: object;
                                                        enabled?: boolean;
                                                        hidden?: boolean;
                                                        options?: {
                                                            [x: string]: {
                                                                rightLabel?: string;
                                                                title?: string;
                                                                icon?: string | string[];
                                                                position?: number;
                                                                supportedDesignModes?: string[];
                                                                enabled?: boolean;
                                                                hideOnOfflineMode?: boolean;
                                                                noContentPadding?: boolean;
                                                                ai?: boolean;
                                                                embedded?: never;
                                                                options?: {
                                                                    [x: string]: any;
                                                                };
                                                            } | {
                                                                rightLabel?: string;
                                                                title?: string;
                                                                icon?: string | string[];
                                                                position?: number;
                                                                supportedDesignModes?: string[];
                                                                enabled?: boolean;
                                                                hideOnOfflineMode?: boolean;
                                                                noContentPadding?: boolean;
                                                                ai?: boolean;
                                                                embedded?: {
                                                                    collection?: Collection;
                                                                    type?: string;
                                                                    source?: string;
                                                                    tabLabel?: string;
                                                                    insertCount?: number;
                                                                    optionGroups?: any;
                                                                };
                                                                options?: never;
                                                            };
                                                        };
                                                        supportedDisplayModes?: DisplayMode[];
                                                        overrideAllowed?: Device[];
                                                        _override?: {
                                                            mobile?: {
                                                                type?: string;
                                                                data?: object;
                                                                id?: string;
                                                                hidden?: boolean;
                                                                label?: string;
                                                                options?: {
                                                                    [x: string]: {
                                                                        rightLabel?: string;
                                                                        title?: string;
                                                                        icon?: string | string[];
                                                                        position?: number;
                                                                        supportedDesignModes?: string[];
                                                                        enabled?: boolean;
                                                                        hideOnOfflineMode?: boolean;
                                                                        noContentPadding?: boolean;
                                                                        ai?: boolean;
                                                                        embedded?: never;
                                                                        options?: {
                                                                            [x: string]: any;
                                                                        };
                                                                    } | {
                                                                        rightLabel?: string;
                                                                        title?: string;
                                                                        icon?: string | string[];
                                                                        position?: number;
                                                                        supportedDesignModes?: string[];
                                                                        enabled?: boolean;
                                                                        hideOnOfflineMode?: boolean;
                                                                        noContentPadding?: boolean;
                                                                        ai?: boolean;
                                                                        embedded?: {
                                                                            collection?: Collection;
                                                                            type?: string;
                                                                            source?: string;
                                                                            tabLabel?: string;
                                                                            insertCount?: number;
                                                                            optionGroups?: any;
                                                                        };
                                                                        options?: never;
                                                                    };
                                                                };
                                                                enabled?: boolean;
                                                                defaultValue?: unknown;
                                                                slug?: string;
                                                                widgetParams?: {
                                                                    [x: string]: any;
                                                                    shouldRender?: false | object;
                                                                } | {};
                                                                widget?: string;
                                                                hideOnOfflineMode?: boolean;
                                                                supportedDisplayModes?: DisplayMode[];
                                                            };
                                                            tablet?: {
                                                                type?: string;
                                                                data?: object;
                                                                id?: string;
                                                                hidden?: boolean;
                                                                label?: string;
                                                                options?: {
                                                                    [x: string]: {
                                                                        rightLabel?: string;
                                                                        title?: string;
                                                                        icon?: string | string[];
                                                                        position?: number;
                                                                        supportedDesignModes?: string[];
                                                                        enabled?: boolean;
                                                                        hideOnOfflineMode?: boolean;
                                                                        noContentPadding?: boolean;
                                                                        ai?: boolean;
                                                                        embedded?: never;
                                                                        options?: {
                                                                            [x: string]: any;
                                                                        };
                                                                    } | {
                                                                        rightLabel?: string;
                                                                        title?: string;
                                                                        icon?: string | string[];
                                                                        position?: number;
                                                                        supportedDesignModes?: string[];
                                                                        enabled?: boolean;
                                                                        hideOnOfflineMode?: boolean;
                                                                        noContentPadding?: boolean;
                                                                        ai?: boolean;
                                                                        embedded?: {
                                                                            collection?: Collection;
                                                                            type?: string;
                                                                            source?: string;
                                                                            tabLabel?: string;
                                                                            insertCount?: number;
                                                                            optionGroups?: any;
                                                                        };
                                                                        options?: never;
                                                                    };
                                                                };
                                                                enabled?: boolean;
                                                                defaultValue?: unknown;
                                                                slug?: string;
                                                                widgetParams?: {
                                                                    [x: string]: any;
                                                                    shouldRender?: false | object;
                                                                } | {};
                                                                widget?: string;
                                                                hideOnOfflineMode?: boolean;
                                                                supportedDisplayModes?: DisplayMode[];
                                                            };
                                                            desktop?: {
                                                                type?: string;
                                                                data?: object;
                                                                id?: string;
                                                                hidden?: boolean;
                                                                label?: string;
                                                                options?: {
                                                                    [x: string]: {
                                                                        rightLabel?: string;
                                                                        title?: string;
                                                                        icon?: string | string[];
                                                                        position?: number;
                                                                        supportedDesignModes?: string[];
                                                                        enabled?: boolean;
                                                                        hideOnOfflineMode?: boolean;
                                                                        noContentPadding?: boolean;
                                                                        ai?: boolean;
                                                                        embedded?: never;
                                                                        options?: {
                                                                            [x: string]: any;
                                                                        };
                                                                    } | {
                                                                        rightLabel?: string;
                                                                        title?: string;
                                                                        icon?: string | string[];
                                                                        position?: number;
                                                                        supportedDesignModes?: string[];
                                                                        enabled?: boolean;
                                                                        hideOnOfflineMode?: boolean;
                                                                        noContentPadding?: boolean;
                                                                        ai?: boolean;
                                                                        embedded?: {
                                                                            collection?: Collection;
                                                                            type?: string;
                                                                            source?: string;
                                                                            tabLabel?: string;
                                                                            insertCount?: number;
                                                                            optionGroups?: any;
                                                                        };
                                                                        options?: never;
                                                                    };
                                                                };
                                                                enabled?: boolean;
                                                                defaultValue?: unknown;
                                                                slug?: string;
                                                                widgetParams?: {
                                                                    [x: string]: any;
                                                                    shouldRender?: false | object;
                                                                } | {};
                                                                widget?: string;
                                                                hideOnOfflineMode?: boolean;
                                                                supportedDisplayModes?: DisplayMode[];
                                                            };
                                                        };
                                                    };
                                                };
                                            };
                                        };
                                    };
                                    options?: never;
                                };
                            };
                            enabled?: boolean;
                            defaultValue?: unknown;
                            slug?: string;
                            widgetParams?: {
                                [x: string]: any;
                                shouldRender?: false | object;
                            } | {};
                            widget?: string;
                            hideOnOfflineMode?: boolean;
                            supportedDisplayModes?: DisplayMode[];
                        };
                        desktop?: {
                            type?: string;
                            data?: object;
                            id?: string;
                            hidden?: boolean;
                            label?: string;
                            options?: {
                                [x: string]: {
                                    rightLabel?: string;
                                    title?: string;
                                    icon?: string | string[];
                                    position?: number;
                                    supportedDesignModes?: string[];
                                    enabled?: boolean;
                                    hideOnOfflineMode?: boolean;
                                    noContentPadding?: boolean;
                                    ai?: boolean;
                                    embedded?: never;
                                    options?: {
                                        [x: string]: {
                                            id?: string;
                                            type?: string;
                                            slug?: string;
                                            label?: string;
                                            defaultValue?: unknown;
                                            widget?: string;
                                            hideOnOfflineMode?: boolean;
                                            widgetParams?: {
                                                [x: string]: any;
                                                shouldRender?: false | object;
                                            } | {};
                                            data?: object;
                                            enabled?: boolean;
                                            hidden?: boolean;
                                            options?: {
                                                [x: string]: {
                                                    rightLabel?: string;
                                                    title?: string;
                                                    icon?: string | string[];
                                                    position?: number;
                                                    supportedDesignModes?: string[];
                                                    enabled?: boolean;
                                                    hideOnOfflineMode?: boolean;
                                                    noContentPadding?: boolean;
                                                    ai?: boolean;
                                                    embedded?: never;
                                                    options?: {
                                                        [x: string]: any;
                                                    };
                                                } | {
                                                    rightLabel?: string;
                                                    title?: string;
                                                    icon?: string | string[];
                                                    position?: number;
                                                    supportedDesignModes?: string[];
                                                    enabled?: boolean;
                                                    hideOnOfflineMode?: boolean;
                                                    noContentPadding?: boolean;
                                                    ai?: boolean;
                                                    embedded?: {
                                                        collection?: Collection;
                                                        type?: string;
                                                        source?: string;
                                                        tabLabel?: string;
                                                        insertCount?: number;
                                                        optionGroups?: any;
                                                    };
                                                    options?: never;
                                                };
                                            };
                                            supportedDisplayModes?: DisplayMode[];
                                            overrideAllowed?: Device[];
                                            _override?: {
                                                mobile?: {
                                                    type?: string;
                                                    data?: object;
                                                    id?: string;
                                                    hidden?: boolean;
                                                    label?: string;
                                                    options?: {
                                                        [x: string]: {
                                                            rightLabel?: string;
                                                            title?: string;
                                                            icon?: string | string[];
                                                            position?: number;
                                                            supportedDesignModes?: string[];
                                                            enabled?: boolean;
                                                            hideOnOfflineMode?: boolean;
                                                            noContentPadding?: boolean;
                                                            ai?: boolean;
                                                            embedded?: never;
                                                            options?: {
                                                                [x: string]: any;
                                                            };
                                                        } | {
                                                            rightLabel?: string;
                                                            title?: string;
                                                            icon?: string | string[];
                                                            position?: number;
                                                            supportedDesignModes?: string[];
                                                            enabled?: boolean;
                                                            hideOnOfflineMode?: boolean;
                                                            noContentPadding?: boolean;
                                                            ai?: boolean;
                                                            embedded?: {
                                                                collection?: Collection;
                                                                type?: string;
                                                                source?: string;
                                                                tabLabel?: string;
                                                                insertCount?: number;
                                                                optionGroups?: any;
                                                            };
                                                            options?: never;
                                                        };
                                                    };
                                                    enabled?: boolean;
                                                    defaultValue?: unknown;
                                                    slug?: string;
                                                    widgetParams?: {
                                                        [x: string]: any;
                                                        shouldRender?: false | object;
                                                    } | {};
                                                    widget?: string;
                                                    hideOnOfflineMode?: boolean;
                                                    supportedDisplayModes?: DisplayMode[];
                                                };
                                                tablet?: {
                                                    type?: string;
                                                    data?: object;
                                                    id?: string;
                                                    hidden?: boolean;
                                                    label?: string;
                                                    options?: {
                                                        [x: string]: {
                                                            rightLabel?: string;
                                                            title?: string;
                                                            icon?: string | string[];
                                                            position?: number;
                                                            supportedDesignModes?: string[];
                                                            enabled?: boolean;
                                                            hideOnOfflineMode?: boolean;
                                                            noContentPadding?: boolean;
                                                            ai?: boolean;
                                                            embedded?: never;
                                                            options?: {
                                                                [x: string]: any;
                                                            };
                                                        } | {
                                                            rightLabel?: string;
                                                            title?: string;
                                                            icon?: string | string[];
                                                            position?: number;
                                                            supportedDesignModes?: string[];
                                                            enabled?: boolean;
                                                            hideOnOfflineMode?: boolean;
                                                            noContentPadding?: boolean;
                                                            ai?: boolean;
                                                            embedded?: {
                                                                collection?: Collection;
                                                                type?: string;
                                                                source?: string;
                                                                tabLabel?: string;
                                                                insertCount?: number;
                                                                optionGroups?: any;
                                                            };
                                                            options?: never;
                                                        };
                                                    };
                                                    enabled?: boolean;
                                                    defaultValue?: unknown;
                                                    slug?: string;
                                                    widgetParams?: {
                                                        [x: string]: any;
                                                        shouldRender?: false | object;
                                                    } | {};
                                                    widget?: string;
                                                    hideOnOfflineMode?: boolean;
                                                    supportedDisplayModes?: DisplayMode[];
                                                };
                                                desktop?: {
                                                    type?: string;
                                                    data?: object;
                                                    id?: string;
                                                    hidden?: boolean;
                                                    label?: string;
                                                    options?: {
                                                        [x: string]: {
                                                            rightLabel?: string;
                                                            title?: string;
                                                            icon?: string | string[];
                                                            position?: number;
                                                            supportedDesignModes?: string[];
                                                            enabled?: boolean;
                                                            hideOnOfflineMode?: boolean;
                                                            noContentPadding?: boolean;
                                                            ai?: boolean;
                                                            embedded?: never;
                                                            options?: {
                                                                [x: string]: any;
                                                            };
                                                        } | {
                                                            rightLabel?: string;
                                                            title?: string;
                                                            icon?: string | string[];
                                                            position?: number;
                                                            supportedDesignModes?: string[];
                                                            enabled?: boolean;
                                                            hideOnOfflineMode?: boolean;
                                                            noContentPadding?: boolean;
                                                            ai?: boolean;
                                                            embedded?: {
                                                                collection?: Collection;
                                                                type?: string;
                                                                source?: string;
                                                                tabLabel?: string;
                                                                insertCount?: number;
                                                                optionGroups?: any;
                                                            };
                                                            options?: never;
                                                        };
                                                    };
                                                    enabled?: boolean;
                                                    defaultValue?: unknown;
                                                    slug?: string;
                                                    widgetParams?: {
                                                        [x: string]: any;
                                                        shouldRender?: false | object;
                                                    } | {};
                                                    widget?: string;
                                                    hideOnOfflineMode?: boolean;
                                                    supportedDisplayModes?: DisplayMode[];
                                                };
                                            };
                                        };
                                    };
                                } | {
                                    rightLabel?: string;
                                    title?: string;
                                    icon?: string | string[];
                                    position?: number;
                                    supportedDesignModes?: string[];
                                    enabled?: boolean;
                                    hideOnOfflineMode?: boolean;
                                    noContentPadding?: boolean;
                                    ai?: boolean;
                                    embedded?: {
                                        collection?: Collection;
                                        type?: string;
                                        source?: string;
                                        tabLabel?: string;
                                        insertCount?: number;
                                        optionGroups?: {
                                            [x: string]: {
                                                optionsOverride?: {
                                                    [x: string]: {
                                                        id?: string;
                                                        type?: string;
                                                        slug?: string;
                                                        label?: string;
                                                        defaultValue?: unknown;
                                                        widget?: string;
                                                        hideOnOfflineMode?: boolean;
                                                        widgetParams?: {
                                                            [x: string]: any;
                                                            shouldRender?: false | object;
                                                        } | {};
                                                        data?: object;
                                                        enabled?: boolean;
                                                        hidden?: boolean;
                                                        options?: {
                                                            [x: string]: {
                                                                rightLabel?: string;
                                                                title?: string;
                                                                icon?: string | string[];
                                                                position?: number;
                                                                supportedDesignModes?: string[];
                                                                enabled?: boolean;
                                                                hideOnOfflineMode?: boolean;
                                                                noContentPadding?: boolean;
                                                                ai?: boolean;
                                                                embedded?: never;
                                                                options?: {
                                                                    [x: string]: any;
                                                                };
                                                            } | {
                                                                rightLabel?: string;
                                                                title?: string;
                                                                icon?: string | string[];
                                                                position?: number;
                                                                supportedDesignModes?: string[];
                                                                enabled?: boolean;
                                                                hideOnOfflineMode?: boolean;
                                                                noContentPadding?: boolean;
                                                                ai?: boolean;
                                                                embedded?: {
                                                                    collection?: Collection;
                                                                    type?: string;
                                                                    source?: string;
                                                                    tabLabel?: string;
                                                                    insertCount?: number;
                                                                    optionGroups?: any;
                                                                };
                                                                options?: never;
                                                            };
                                                        };
                                                        supportedDisplayModes?: DisplayMode[];
                                                        overrideAllowed?: Device[];
                                                        _override?: {
                                                            mobile?: {
                                                                type?: string;
                                                                data?: object;
                                                                id?: string;
                                                                hidden?: boolean;
                                                                label?: string;
                                                                options?: {
                                                                    [x: string]: {
                                                                        rightLabel?: string;
                                                                        title?: string;
                                                                        icon?: string | string[];
                                                                        position?: number;
                                                                        supportedDesignModes?: string[];
                                                                        enabled?: boolean;
                                                                        hideOnOfflineMode?: boolean;
                                                                        noContentPadding?: boolean;
                                                                        ai?: boolean;
                                                                        embedded?: never;
                                                                        options?: {
                                                                            [x: string]: any;
                                                                        };
                                                                    } | {
                                                                        rightLabel?: string;
                                                                        title?: string;
                                                                        icon?: string | string[];
                                                                        position?: number;
                                                                        supportedDesignModes?: string[];
                                                                        enabled?: boolean;
                                                                        hideOnOfflineMode?: boolean;
                                                                        noContentPadding?: boolean;
                                                                        ai?: boolean;
                                                                        embedded?: {
                                                                            collection?: Collection;
                                                                            type?: string;
                                                                            source?: string;
                                                                            tabLabel?: string;
                                                                            insertCount?: number;
                                                                            optionGroups?: any;
                                                                        };
                                                                        options?: never;
                                                                    };
                                                                };
                                                                enabled?: boolean;
                                                                defaultValue?: unknown;
                                                                slug?: string;
                                                                widgetParams?: {
                                                                    [x: string]: any;
                                                                    shouldRender?: false | object;
                                                                } | {};
                                                                widget?: string;
                                                                hideOnOfflineMode?: boolean;
                                                                supportedDisplayModes?: DisplayMode[];
                                                            };
                                                            tablet?: {
                                                                type?: string;
                                                                data?: object;
                                                                id?: string;
                                                                hidden?: boolean;
                                                                label?: string;
                                                                options?: {
                                                                    [x: string]: {
                                                                        rightLabel?: string;
                                                                        title?: string;
                                                                        icon?: string | string[];
                                                                        position?: number;
                                                                        supportedDesignModes?: string[];
                                                                        enabled?: boolean;
                                                                        hideOnOfflineMode?: boolean;
                                                                        noContentPadding?: boolean;
                                                                        ai?: boolean;
                                                                        embedded?: never;
                                                                        options?: {
                                                                            [x: string]: any;
                                                                        };
                                                                    } | {
                                                                        rightLabel?: string;
                                                                        title?: string;
                                                                        icon?: string | string[];
                                                                        position?: number;
                                                                        supportedDesignModes?: string[];
                                                                        enabled?: boolean;
                                                                        hideOnOfflineMode?: boolean;
                                                                        noContentPadding?: boolean;
                                                                        ai?: boolean;
                                                                        embedded?: {
                                                                            collection?: Collection;
                                                                            type?: string;
                                                                            source?: string;
                                                                            tabLabel?: string;
                                                                            insertCount?: number;
                                                                            optionGroups?: any;
                                                                        };
                                                                        options?: never;
                                                                    };
                                                                };
                                                                enabled?: boolean;
                                                                defaultValue?: unknown;
                                                                slug?: string;
                                                                widgetParams?: {
                                                                    [x: string]: any;
                                                                    shouldRender?: false | object;
                                                                } | {};
                                                                widget?: string;
                                                                hideOnOfflineMode?: boolean;
                                                                supportedDisplayModes?: DisplayMode[];
                                                            };
                                                            desktop?: {
                                                                type?: string;
                                                                data?: object;
                                                                id?: string;
                                                                hidden?: boolean;
                                                                label?: string;
                                                                options?: {
                                                                    [x: string]: {
                                                                        rightLabel?: string;
                                                                        title?: string;
                                                                        icon?: string | string[];
                                                                        position?: number;
                                                                        supportedDesignModes?: string[];
                                                                        enabled?: boolean;
                                                                        hideOnOfflineMode?: boolean;
                                                                        noContentPadding?: boolean;
                                                                        ai?: boolean;
                                                                        embedded?: never;
                                                                        options?: {
                                                                            [x: string]: any;
                                                                        };
                                                                    } | {
                                                                        rightLabel?: string;
                                                                        title?: string;
                                                                        icon?: string | string[];
                                                                        position?: number;
                                                                        supportedDesignModes?: string[];
                                                                        enabled?: boolean;
                                                                        hideOnOfflineMode?: boolean;
                                                                        noContentPadding?: boolean;
                                                                        ai?: boolean;
                                                                        embedded?: {
                                                                            collection?: Collection;
                                                                            type?: string;
                                                                            source?: string;
                                                                            tabLabel?: string;
                                                                            insertCount?: number;
                                                                            optionGroups?: any;
                                                                        };
                                                                        options?: never;
                                                                    };
                                                                };
                                                                enabled?: boolean;
                                                                defaultValue?: unknown;
                                                                slug?: string;
                                                                widgetParams?: {
                                                                    [x: string]: any;
                                                                    shouldRender?: false | object;
                                                                } | {};
                                                                widget?: string;
                                                                hideOnOfflineMode?: boolean;
                                                                supportedDisplayModes?: DisplayMode[];
                                                            };
                                                        };
                                                    };
                                                };
                                            };
                                        };
                                    };
                                    options?: never;
                                };
                            };
                            enabled?: boolean;
                            defaultValue?: unknown;
                            slug?: string;
                            widgetParams?: {
                                [x: string]: any;
                                shouldRender?: false | object;
                            } | {};
                            widget?: string;
                            hideOnOfflineMode?: boolean;
                            supportedDisplayModes?: DisplayMode[];
                        };
                    };
                };
            };
        } | {
            rightLabel?: string;
            title?: string;
            icon?: string | string[];
            position?: number;
            supportedDesignModes?: string[];
            enabled?: boolean;
            hideOnOfflineMode?: boolean;
            noContentPadding?: boolean;
            ai?: boolean;
            embedded?: {
                collection?: Collection;
                type?: string;
                source?: string;
                tabLabel?: string;
                insertCount?: number;
                optionGroups?: {
                    [x: string]: {
                        optionsOverride?: {
                            [x: string]: {
                                id?: string;
                                type?: string;
                                slug?: string;
                                label?: string;
                                defaultValue?: unknown;
                                widget?: string;
                                hideOnOfflineMode?: boolean;
                                widgetParams?: {
                                    [x: string]: any;
                                    shouldRender?: false | object;
                                } | {};
                                data?: object;
                                enabled?: boolean;
                                hidden?: boolean;
                                options?: {
                                    [x: string]: {
                                        rightLabel?: string;
                                        title?: string;
                                        icon?: string | string[];
                                        position?: number;
                                        supportedDesignModes?: string[];
                                        enabled?: boolean;
                                        hideOnOfflineMode?: boolean;
                                        noContentPadding?: boolean;
                                        ai?: boolean;
                                        embedded?: never;
                                        options?: {
                                            [x: string]: {
                                                id?: string;
                                                type?: string;
                                                slug?: string;
                                                label?: string;
                                                defaultValue?: unknown;
                                                widget?: string;
                                                hideOnOfflineMode?: boolean;
                                                widgetParams?: {
                                                    [x: string]: any;
                                                    shouldRender?: false | object;
                                                } | {};
                                                data?: object;
                                                enabled?: boolean;
                                                hidden?: boolean;
                                                options?: {
                                                    [x: string]: {
                                                        rightLabel?: string;
                                                        title?: string;
                                                        icon?: string | string[];
                                                        position?: number;
                                                        supportedDesignModes?: string[];
                                                        enabled?: boolean;
                                                        hideOnOfflineMode?: boolean;
                                                        noContentPadding?: boolean;
                                                        ai?: boolean;
                                                        embedded?: never;
                                                        options?: {
                                                            [x: string]: any;
                                                        };
                                                    } | {
                                                        rightLabel?: string;
                                                        title?: string;
                                                        icon?: string | string[];
                                                        position?: number;
                                                        supportedDesignModes?: string[];
                                                        enabled?: boolean;
                                                        hideOnOfflineMode?: boolean;
                                                        noContentPadding?: boolean;
                                                        ai?: boolean;
                                                        embedded?: {
                                                            collection?: Collection;
                                                            type?: string;
                                                            source?: string;
                                                            tabLabel?: string;
                                                            insertCount?: number;
                                                            optionGroups?: any;
                                                        };
                                                        options?: never;
                                                    };
                                                };
                                                supportedDisplayModes?: DisplayMode[];
                                                overrideAllowed?: Device[];
                                                _override?: {
                                                    mobile?: {
                                                        type?: string;
                                                        data?: object;
                                                        id?: string;
                                                        hidden?: boolean;
                                                        label?: string;
                                                        options?: {
                                                            [x: string]: {
                                                                rightLabel?: string;
                                                                title?: string;
                                                                icon?: string | string[];
                                                                position?: number;
                                                                supportedDesignModes?: string[];
                                                                enabled?: boolean;
                                                                hideOnOfflineMode?: boolean;
                                                                noContentPadding?: boolean;
                                                                ai?: boolean;
                                                                embedded?: never;
                                                                options?: {
                                                                    [x: string]: any;
                                                                };
                                                            } | {
                                                                rightLabel?: string;
                                                                title?: string;
                                                                icon?: string | string[];
                                                                position?: number;
                                                                supportedDesignModes?: string[];
                                                                enabled?: boolean;
                                                                hideOnOfflineMode?: boolean;
                                                                noContentPadding?: boolean;
                                                                ai?: boolean;
                                                                embedded?: {
                                                                    collection?: Collection;
                                                                    type?: string;
                                                                    source?: string;
                                                                    tabLabel?: string;
                                                                    insertCount?: number;
                                                                    optionGroups?: any;
                                                                };
                                                                options?: never;
                                                            };
                                                        };
                                                        enabled?: boolean;
                                                        defaultValue?: unknown;
                                                        slug?: string;
                                                        widgetParams?: {
                                                            [x: string]: any;
                                                            shouldRender?: false | object;
                                                        } | {};
                                                        widget?: string;
                                                        hideOnOfflineMode?: boolean;
                                                        supportedDisplayModes?: DisplayMode[];
                                                    };
                                                    tablet?: {
                                                        type?: string;
                                                        data?: object;
                                                        id?: string;
                                                        hidden?: boolean;
                                                        label?: string;
                                                        options?: {
                                                            [x: string]: {
                                                                rightLabel?: string;
                                                                title?: string;
                                                                icon?: string | string[];
                                                                position?: number;
                                                                supportedDesignModes?: string[];
                                                                enabled?: boolean;
                                                                hideOnOfflineMode?: boolean;
                                                                noContentPadding?: boolean;
                                                                ai?: boolean;
                                                                embedded?: never;
                                                                options?: {
                                                                    [x: string]: any;
                                                                };
                                                            } | {
                                                                rightLabel?: string;
                                                                title?: string;
                                                                icon?: string | string[];
                                                                position?: number;
                                                                supportedDesignModes?: string[];
                                                                enabled?: boolean;
                                                                hideOnOfflineMode?: boolean;
                                                                noContentPadding?: boolean;
                                                                ai?: boolean;
                                                                embedded?: {
                                                                    collection?: Collection;
                                                                    type?: string;
                                                                    source?: string;
                                                                    tabLabel?: string;
                                                                    insertCount?: number;
                                                                    optionGroups?: any;
                                                                };
                                                                options?: never;
                                                            };
                                                        };
                                                        enabled?: boolean;
                                                        defaultValue?: unknown;
                                                        slug?: string;
                                                        widgetParams?: {
                                                            [x: string]: any;
                                                            shouldRender?: false | object;
                                                        } | {};
                                                        widget?: string;
                                                        hideOnOfflineMode?: boolean;
                                                        supportedDisplayModes?: DisplayMode[];
                                                    };
                                                    desktop?: {
                                                        type?: string;
                                                        data?: object;
                                                        id?: string;
                                                        hidden?: boolean;
                                                        label?: string;
                                                        options?: {
                                                            [x: string]: {
                                                                rightLabel?: string;
                                                                title?: string;
                                                                icon?: string | string[];
                                                                position?: number;
                                                                supportedDesignModes?: string[];
                                                                enabled?: boolean;
                                                                hideOnOfflineMode?: boolean;
                                                                noContentPadding?: boolean;
                                                                ai?: boolean;
                                                                embedded?: never;
                                                                options?: {
                                                                    [x: string]: any;
                                                                };
                                                            } | {
                                                                rightLabel?: string;
                                                                title?: string;
                                                                icon?: string | string[];
                                                                position?: number;
                                                                supportedDesignModes?: string[];
                                                                enabled?: boolean;
                                                                hideOnOfflineMode?: boolean;
                                                                noContentPadding?: boolean;
                                                                ai?: boolean;
                                                                embedded?: {
                                                                    collection?: Collection;
                                                                    type?: string;
                                                                    source?: string;
                                                                    tabLabel?: string;
                                                                    insertCount?: number;
                                                                    optionGroups?: any;
                                                                };
                                                                options?: never;
                                                            };
                                                        };
                                                        enabled?: boolean;
                                                        defaultValue?: unknown;
                                                        slug?: string;
                                                        widgetParams?: {
                                                            [x: string]: any;
                                                            shouldRender?: false | object;
                                                        } | {};
                                                        widget?: string;
                                                        hideOnOfflineMode?: boolean;
                                                        supportedDisplayModes?: DisplayMode[];
                                                    };
                                                };
                                            };
                                        };
                                    } | {
                                        rightLabel?: string;
                                        title?: string;
                                        icon?: string | string[];
                                        position?: number;
                                        supportedDesignModes?: string[];
                                        enabled?: boolean;
                                        hideOnOfflineMode?: boolean;
                                        noContentPadding?: boolean;
                                        ai?: boolean;
                                        embedded?: {
                                            collection?: Collection;
                                            type?: string;
                                            source?: string;
                                            tabLabel?: string;
                                            insertCount?: number;
                                            optionGroups?: {
                                                [x: string]: {
                                                    optionsOverride?: {
                                                        [x: string]: {
                                                            id?: string;
                                                            type?: string;
                                                            slug?: string;
                                                            label?: string;
                                                            defaultValue?: unknown;
                                                            widget?: string;
                                                            hideOnOfflineMode?: boolean;
                                                            widgetParams?: {
                                                                [x: string]: any;
                                                                shouldRender?: false | object;
                                                            } | {};
                                                            data?: object;
                                                            enabled?: boolean;
                                                            hidden?: boolean;
                                                            options?: {
                                                                [x: string]: {
                                                                    rightLabel?: string;
                                                                    title?: string;
                                                                    icon?: string | string[];
                                                                    position?: number;
                                                                    supportedDesignModes?: string[];
                                                                    enabled?: boolean;
                                                                    hideOnOfflineMode?: boolean;
                                                                    noContentPadding?: boolean;
                                                                    ai?: boolean;
                                                                    embedded?: never;
                                                                    options?: {
                                                                        [x: string]: any;
                                                                    };
                                                                } | {
                                                                    rightLabel?: string;
                                                                    title?: string;
                                                                    icon?: string | string[];
                                                                    position?: number;
                                                                    supportedDesignModes?: string[];
                                                                    enabled?: boolean;
                                                                    hideOnOfflineMode?: boolean;
                                                                    noContentPadding?: boolean;
                                                                    ai?: boolean;
                                                                    embedded?: {
                                                                        collection?: Collection;
                                                                        type?: string;
                                                                        source?: string;
                                                                        tabLabel?: string;
                                                                        insertCount?: number;
                                                                        optionGroups?: any;
                                                                    };
                                                                    options?: never;
                                                                };
                                                            };
                                                            supportedDisplayModes?: DisplayMode[];
                                                            overrideAllowed?: Device[];
                                                            _override?: {
                                                                mobile?: {
                                                                    type?: string;
                                                                    data?: object;
                                                                    id?: string;
                                                                    hidden?: boolean;
                                                                    label?: string;
                                                                    options?: {
                                                                        [x: string]: {
                                                                            rightLabel?: string;
                                                                            title?: string;
                                                                            icon?: string | string[];
                                                                            position?: number;
                                                                            supportedDesignModes?: string[];
                                                                            enabled?: boolean;
                                                                            hideOnOfflineMode?: boolean;
                                                                            noContentPadding?: boolean;
                                                                            ai?: boolean;
                                                                            embedded?: never;
                                                                            options?: {
                                                                                [x: string]: any;
                                                                            };
                                                                        } | {
                                                                            rightLabel?: string;
                                                                            title?: string;
                                                                            icon?: string | string[];
                                                                            position?: number;
                                                                            supportedDesignModes?: string[];
                                                                            enabled?: boolean;
                                                                            hideOnOfflineMode?: boolean;
                                                                            noContentPadding?: boolean;
                                                                            ai?: boolean;
                                                                            embedded?: {
                                                                                collection?: Collection;
                                                                                type?: string;
                                                                                source?: string;
                                                                                tabLabel?: string;
                                                                                insertCount?: number;
                                                                                optionGroups?: any;
                                                                            };
                                                                            options?: never;
                                                                        };
                                                                    };
                                                                    enabled?: boolean;
                                                                    defaultValue?: unknown;
                                                                    slug?: string;
                                                                    widgetParams?: {
                                                                        [x: string]: any;
                                                                        shouldRender?: false | object;
                                                                    } | {};
                                                                    widget?: string;
                                                                    hideOnOfflineMode?: boolean;
                                                                    supportedDisplayModes?: DisplayMode[];
                                                                };
                                                                tablet?: {
                                                                    type?: string;
                                                                    data?: object;
                                                                    id?: string;
                                                                    hidden?: boolean;
                                                                    label?: string;
                                                                    options?: {
                                                                        [x: string]: {
                                                                            rightLabel?: string;
                                                                            title?: string;
                                                                            icon?: string | string[];
                                                                            position?: number;
                                                                            supportedDesignModes?: string[];
                                                                            enabled?: boolean;
                                                                            hideOnOfflineMode?: boolean;
                                                                            noContentPadding?: boolean;
                                                                            ai?: boolean;
                                                                            embedded?: never;
                                                                            options?: {
                                                                                [x: string]: any;
                                                                            };
                                                                        } | {
                                                                            rightLabel?: string;
                                                                            title?: string;
                                                                            icon?: string | string[];
                                                                            position?: number;
                                                                            supportedDesignModes?: string[];
                                                                            enabled?: boolean;
                                                                            hideOnOfflineMode?: boolean;
                                                                            noContentPadding?: boolean;
                                                                            ai?: boolean;
                                                                            embedded?: {
                                                                                collection?: Collection;
                                                                                type?: string;
                                                                                source?: string;
                                                                                tabLabel?: string;
                                                                                insertCount?: number;
                                                                                optionGroups?: any;
                                                                            };
                                                                            options?: never;
                                                                        };
                                                                    };
                                                                    enabled?: boolean;
                                                                    defaultValue?: unknown;
                                                                    slug?: string;
                                                                    widgetParams?: {
                                                                        [x: string]: any;
                                                                        shouldRender?: false | object;
                                                                    } | {};
                                                                    widget?: string;
                                                                    hideOnOfflineMode?: boolean;
                                                                    supportedDisplayModes?: DisplayMode[];
                                                                };
                                                                desktop?: {
                                                                    type?: string;
                                                                    data?: object;
                                                                    id?: string;
                                                                    hidden?: boolean;
                                                                    label?: string;
                                                                    options?: {
                                                                        [x: string]: {
                                                                            rightLabel?: string;
                                                                            title?: string;
                                                                            icon?: string | string[];
                                                                            position?: number;
                                                                            supportedDesignModes?: string[];
                                                                            enabled?: boolean;
                                                                            hideOnOfflineMode?: boolean;
                                                                            noContentPadding?: boolean;
                                                                            ai?: boolean;
                                                                            embedded?: never;
                                                                            options?: {
                                                                                [x: string]: any;
                                                                            };
                                                                        } | {
                                                                            rightLabel?: string;
                                                                            title?: string;
                                                                            icon?: string | string[];
                                                                            position?: number;
                                                                            supportedDesignModes?: string[];
                                                                            enabled?: boolean;
                                                                            hideOnOfflineMode?: boolean;
                                                                            noContentPadding?: boolean;
                                                                            ai?: boolean;
                                                                            embedded?: {
                                                                                collection?: Collection;
                                                                                type?: string;
                                                                                source?: string;
                                                                                tabLabel?: string;
                                                                                insertCount?: number;
                                                                                optionGroups?: any;
                                                                            };
                                                                            options?: never;
                                                                        };
                                                                    };
                                                                    enabled?: boolean;
                                                                    defaultValue?: unknown;
                                                                    slug?: string;
                                                                    widgetParams?: {
                                                                        [x: string]: any;
                                                                        shouldRender?: false | object;
                                                                    } | {};
                                                                    widget?: string;
                                                                    hideOnOfflineMode?: boolean;
                                                                    supportedDisplayModes?: DisplayMode[];
                                                                };
                                                            };
                                                        };
                                                    };
                                                };
                                            };
                                        };
                                        options?: never;
                                    };
                                };
                                supportedDisplayModes?: DisplayMode[];
                                overrideAllowed?: Device[];
                                _override?: {
                                    mobile?: {
                                        type?: string;
                                        data?: object;
                                        id?: string;
                                        hidden?: boolean;
                                        label?: string;
                                        options?: {
                                            [x: string]: {
                                                rightLabel?: string;
                                                title?: string;
                                                icon?: string | string[];
                                                position?: number;
                                                supportedDesignModes?: string[];
                                                enabled?: boolean;
                                                hideOnOfflineMode?: boolean;
                                                noContentPadding?: boolean;
                                                ai?: boolean;
                                                embedded?: never;
                                                options?: {
                                                    [x: string]: {
                                                        id?: string;
                                                        type?: string;
                                                        slug?: string;
                                                        label?: string;
                                                        defaultValue?: unknown;
                                                        widget?: string;
                                                        hideOnOfflineMode?: boolean;
                                                        widgetParams?: {
                                                            [x: string]: any;
                                                            shouldRender?: false | object;
                                                        } | {};
                                                        data?: object;
                                                        enabled?: boolean;
                                                        hidden?: boolean;
                                                        options?: {
                                                            [x: string]: {
                                                                rightLabel?: string;
                                                                title?: string;
                                                                icon?: string | string[];
                                                                position?: number;
                                                                supportedDesignModes?: string[];
                                                                enabled?: boolean;
                                                                hideOnOfflineMode?: boolean;
                                                                noContentPadding?: boolean;
                                                                ai?: boolean;
                                                                embedded?: never;
                                                                options?: {
                                                                    [x: string]: any;
                                                                };
                                                            } | {
                                                                rightLabel?: string;
                                                                title?: string;
                                                                icon?: string | string[];
                                                                position?: number;
                                                                supportedDesignModes?: string[];
                                                                enabled?: boolean;
                                                                hideOnOfflineMode?: boolean;
                                                                noContentPadding?: boolean;
                                                                ai?: boolean;
                                                                embedded?: {
                                                                    collection?: Collection;
                                                                    type?: string;
                                                                    source?: string;
                                                                    tabLabel?: string;
                                                                    insertCount?: number;
                                                                    optionGroups?: any;
                                                                };
                                                                options?: never;
                                                            };
                                                        };
                                                        supportedDisplayModes?: DisplayMode[];
                                                        overrideAllowed?: Device[];
                                                        _override?: {
                                                            mobile?: {
                                                                type?: string;
                                                                data?: object;
                                                                id?: string;
                                                                hidden?: boolean;
                                                                label?: string;
                                                                options?: {
                                                                    [x: string]: {
                                                                        rightLabel?: string;
                                                                        title?: string;
                                                                        icon?: string | string[];
                                                                        position?: number;
                                                                        supportedDesignModes?: string[];
                                                                        enabled?: boolean;
                                                                        hideOnOfflineMode?: boolean;
                                                                        noContentPadding?: boolean;
                                                                        ai?: boolean;
                                                                        embedded?: never;
                                                                        options?: {
                                                                            [x: string]: any;
                                                                        };
                                                                    } | {
                                                                        rightLabel?: string;
                                                                        title?: string;
                                                                        icon?: string | string[];
                                                                        position?: number;
                                                                        supportedDesignModes?: string[];
                                                                        enabled?: boolean;
                                                                        hideOnOfflineMode?: boolean;
                                                                        noContentPadding?: boolean;
                                                                        ai?: boolean;
                                                                        embedded?: {
                                                                            collection?: Collection;
                                                                            type?: string;
                                                                            source?: string;
                                                                            tabLabel?: string;
                                                                            insertCount?: number;
                                                                            optionGroups?: any;
                                                                        };
                                                                        options?: never;
                                                                    };
                                                                };
                                                                enabled?: boolean;
                                                                defaultValue?: unknown;
                                                                slug?: string;
                                                                widgetParams?: {
                                                                    [x: string]: any;
                                                                    shouldRender?: false | object;
                                                                } | {};
                                                                widget?: string;
                                                                hideOnOfflineMode?: boolean;
                                                                supportedDisplayModes?: DisplayMode[];
                                                            };
                                                            tablet?: {
                                                                type?: string;
                                                                data?: object;
                                                                id?: string;
                                                                hidden?: boolean;
                                                                label?: string;
                                                                options?: {
                                                                    [x: string]: {
                                                                        rightLabel?: string;
                                                                        title?: string;
                                                                        icon?: string | string[];
                                                                        position?: number;
                                                                        supportedDesignModes?: string[];
                                                                        enabled?: boolean;
                                                                        hideOnOfflineMode?: boolean;
                                                                        noContentPadding?: boolean;
                                                                        ai?: boolean;
                                                                        embedded?: never;
                                                                        options?: {
                                                                            [x: string]: any;
                                                                        };
                                                                    } | {
                                                                        rightLabel?: string;
                                                                        title?: string;
                                                                        icon?: string | string[];
                                                                        position?: number;
                                                                        supportedDesignModes?: string[];
                                                                        enabled?: boolean;
                                                                        hideOnOfflineMode?: boolean;
                                                                        noContentPadding?: boolean;
                                                                        ai?: boolean;
                                                                        embedded?: {
                                                                            collection?: Collection;
                                                                            type?: string;
                                                                            source?: string;
                                                                            tabLabel?: string;
                                                                            insertCount?: number;
                                                                            optionGroups?: any;
                                                                        };
                                                                        options?: never;
                                                                    };
                                                                };
                                                                enabled?: boolean;
                                                                defaultValue?: unknown;
                                                                slug?: string;
                                                                widgetParams?: {
                                                                    [x: string]: any;
                                                                    shouldRender?: false | object;
                                                                } | {};
                                                                widget?: string;
                                                                hideOnOfflineMode?: boolean;
                                                                supportedDisplayModes?: DisplayMode[];
                                                            };
                                                            desktop?: {
                                                                type?: string;
                                                                data?: object;
                                                                id?: string;
                                                                hidden?: boolean;
                                                                label?: string;
                                                                options?: {
                                                                    [x: string]: {
                                                                        rightLabel?: string;
                                                                        title?: string;
                                                                        icon?: string | string[];
                                                                        position?: number;
                                                                        supportedDesignModes?: string[];
                                                                        enabled?: boolean;
                                                                        hideOnOfflineMode?: boolean;
                                                                        noContentPadding?: boolean;
                                                                        ai?: boolean;
                                                                        embedded?: never;
                                                                        options?: {
                                                                            [x: string]: any;
                                                                        };
                                                                    } | {
                                                                        rightLabel?: string;
                                                                        title?: string;
                                                                        icon?: string | string[];
                                                                        position?: number;
                                                                        supportedDesignModes?: string[];
                                                                        enabled?: boolean;
                                                                        hideOnOfflineMode?: boolean;
                                                                        noContentPadding?: boolean;
                                                                        ai?: boolean;
                                                                        embedded?: {
                                                                            collection?: Collection;
                                                                            type?: string;
                                                                            source?: string;
                                                                            tabLabel?: string;
                                                                            insertCount?: number;
                                                                            optionGroups?: any;
                                                                        };
                                                                        options?: never;
                                                                    };
                                                                };
                                                                enabled?: boolean;
                                                                defaultValue?: unknown;
                                                                slug?: string;
                                                                widgetParams?: {
                                                                    [x: string]: any;
                                                                    shouldRender?: false | object;
                                                                } | {};
                                                                widget?: string;
                                                                hideOnOfflineMode?: boolean;
                                                                supportedDisplayModes?: DisplayMode[];
                                                            };
                                                        };
                                                    };
                                                };
                                            } | {
                                                rightLabel?: string;
                                                title?: string;
                                                icon?: string | string[];
                                                position?: number;
                                                supportedDesignModes?: string[];
                                                enabled?: boolean;
                                                hideOnOfflineMode?: boolean;
                                                noContentPadding?: boolean;
                                                ai?: boolean;
                                                embedded?: {
                                                    collection?: Collection;
                                                    type?: string;
                                                    source?: string;
                                                    tabLabel?: string;
                                                    insertCount?: number;
                                                    optionGroups?: {
                                                        [x: string]: {
                                                            optionsOverride?: {
                                                                [x: string]: {
                                                                    id?: string;
                                                                    type?: string;
                                                                    slug?: string;
                                                                    label?: string;
                                                                    defaultValue?: unknown;
                                                                    widget?: string;
                                                                    hideOnOfflineMode?: boolean;
                                                                    widgetParams?: {
                                                                        [x: string]: any;
                                                                        shouldRender?: false | object;
                                                                    } | {};
                                                                    data?: object;
                                                                    enabled?: boolean;
                                                                    hidden?: boolean;
                                                                    options?: {
                                                                        [x: string]: {
                                                                            rightLabel?: string;
                                                                            title?: string;
                                                                            icon?: string | string[];
                                                                            position?: number;
                                                                            supportedDesignModes?: string[];
                                                                            enabled?: boolean;
                                                                            hideOnOfflineMode?: boolean;
                                                                            noContentPadding?: boolean;
                                                                            ai?: boolean;
                                                                            embedded?: never;
                                                                            options?: {
                                                                                [x: string]: any;
                                                                            };
                                                                        } | {
                                                                            rightLabel?: string;
                                                                            title?: string;
                                                                            icon?: string | string[];
                                                                            position?: number;
                                                                            supportedDesignModes?: string[];
                                                                            enabled?: boolean;
                                                                            hideOnOfflineMode?: boolean;
                                                                            noContentPadding?: boolean;
                                                                            ai?: boolean;
                                                                            embedded?: {
                                                                                collection?: Collection;
                                                                                type?: string;
                                                                                source?: string;
                                                                                tabLabel?: string;
                                                                                insertCount?: number;
                                                                                optionGroups?: any;
                                                                            };
                                                                            options?: never;
                                                                        };
                                                                    };
                                                                    supportedDisplayModes?: DisplayMode[];
                                                                    overrideAllowed?: Device[];
                                                                    _override?: {
                                                                        mobile?: {
                                                                            type?: string;
                                                                            data?: object;
                                                                            id?: string;
                                                                            hidden?: boolean;
                                                                            label?: string;
                                                                            options?: {
                                                                                [x: string]: {
                                                                                    rightLabel?: string;
                                                                                    title?: string;
                                                                                    icon?: string | string[];
                                                                                    position?: number;
                                                                                    supportedDesignModes?: string[];
                                                                                    enabled?: boolean;
                                                                                    hideOnOfflineMode?: boolean;
                                                                                    noContentPadding?: boolean;
                                                                                    ai?: boolean;
                                                                                    embedded?: never;
                                                                                    options?: {
                                                                                        [x: string]: any;
                                                                                    };
                                                                                } | {
                                                                                    rightLabel?: string;
                                                                                    title?: string;
                                                                                    icon?: string | string[];
                                                                                    position?: number;
                                                                                    supportedDesignModes?: string[];
                                                                                    enabled?: boolean;
                                                                                    hideOnOfflineMode?: boolean;
                                                                                    noContentPadding?: boolean;
                                                                                    ai?: boolean;
                                                                                    embedded?: {
                                                                                        collection?: Collection;
                                                                                        type?: string;
                                                                                        source?: string;
                                                                                        tabLabel?: string;
                                                                                        insertCount?: number;
                                                                                        optionGroups?: any;
                                                                                    };
                                                                                    options?: never;
                                                                                };
                                                                            };
                                                                            enabled?: boolean;
                                                                            defaultValue?: unknown;
                                                                            slug?: string;
                                                                            widgetParams?: {
                                                                                [x: string]: any;
                                                                                shouldRender?: false | object;
                                                                            } | {};
                                                                            widget?: string;
                                                                            hideOnOfflineMode?: boolean;
                                                                            supportedDisplayModes?: DisplayMode[];
                                                                        };
                                                                        tablet?: {
                                                                            type?: string;
                                                                            data?: object;
                                                                            id?: string;
                                                                            hidden?: boolean;
                                                                            label?: string;
                                                                            options?: {
                                                                                [x: string]: {
                                                                                    rightLabel?: string;
                                                                                    title?: string;
                                                                                    icon?: string | string[];
                                                                                    position?: number;
                                                                                    supportedDesignModes?: string[];
                                                                                    enabled?: boolean;
                                                                                    hideOnOfflineMode?: boolean;
                                                                                    noContentPadding?: boolean;
                                                                                    ai?: boolean;
                                                                                    embedded?: never;
                                                                                    options?: {
                                                                                        [x: string]: any;
                                                                                    };
                                                                                } | {
                                                                                    rightLabel?: string;
                                                                                    title?: string;
                                                                                    icon?: string | string[];
                                                                                    position?: number;
                                                                                    supportedDesignModes?: string[];
                                                                                    enabled?: boolean;
                                                                                    hideOnOfflineMode?: boolean;
                                                                                    noContentPadding?: boolean;
                                                                                    ai?: boolean;
                                                                                    embedded?: {
                                                                                        collection?: Collection;
                                                                                        type?: string;
                                                                                        source?: string;
                                                                                        tabLabel?: string;
                                                                                        insertCount?: number;
                                                                                        optionGroups?: any;
                                                                                    };
                                                                                    options?: never;
                                                                                };
                                                                            };
                                                                            enabled?: boolean;
                                                                            defaultValue?: unknown;
                                                                            slug?: string;
                                                                            widgetParams?: {
                                                                                [x: string]: any;
                                                                                shouldRender?: false | object;
                                                                            } | {};
                                                                            widget?: string;
                                                                            hideOnOfflineMode?: boolean;
                                                                            supportedDisplayModes?: DisplayMode[];
                                                                        };
                                                                        desktop?: {
                                                                            type?: string;
                                                                            data?: object;
                                                                            id?: string;
                                                                            hidden?: boolean;
                                                                            label?: string;
                                                                            options?: {
                                                                                [x: string]: {
                                                                                    rightLabel?: string;
                                                                                    title?: string;
                                                                                    icon?: string | string[];
                                                                                    position?: number;
                                                                                    supportedDesignModes?: string[];
                                                                                    enabled?: boolean;
                                                                                    hideOnOfflineMode?: boolean;
                                                                                    noContentPadding?: boolean;
                                                                                    ai?: boolean;
                                                                                    embedded?: never;
                                                                                    options?: {
                                                                                        [x: string]: any;
                                                                                    };
                                                                                } | {
                                                                                    rightLabel?: string;
                                                                                    title?: string;
                                                                                    icon?: string | string[];
                                                                                    position?: number;
                                                                                    supportedDesignModes?: string[];
                                                                                    enabled?: boolean;
                                                                                    hideOnOfflineMode?: boolean;
                                                                                    noContentPadding?: boolean;
                                                                                    ai?: boolean;
                                                                                    embedded?: {
                                                                                        collection?: Collection;
                                                                                        type?: string;
                                                                                        source?: string;
                                                                                        tabLabel?: string;
                                                                                        insertCount?: number;
                                                                                        optionGroups?: any;
                                                                                    };
                                                                                    options?: never;
                                                                                };
                                                                            };
                                                                            enabled?: boolean;
                                                                            defaultValue?: unknown;
                                                                            slug?: string;
                                                                            widgetParams?: {
                                                                                [x: string]: any;
                                                                                shouldRender?: false | object;
                                                                            } | {};
                                                                            widget?: string;
                                                                            hideOnOfflineMode?: boolean;
                                                                            supportedDisplayModes?: DisplayMode[];
                                                                        };
                                                                    };
                                                                };
                                                            };
                                                        };
                                                    };
                                                };
                                                options?: never;
                                            };
                                        };
                                        enabled?: boolean;
                                        defaultValue?: unknown;
                                        slug?: string;
                                        widgetParams?: {
                                            [x: string]: any;
                                            shouldRender?: false | object;
                                        } | {};
                                        widget?: string;
                                        hideOnOfflineMode?: boolean;
                                        supportedDisplayModes?: DisplayMode[];
                                    };
                                    tablet?: {
                                        type?: string;
                                        data?: object;
                                        id?: string;
                                        hidden?: boolean;
                                        label?: string;
                                        options?: {
                                            [x: string]: {
                                                rightLabel?: string;
                                                title?: string;
                                                icon?: string | string[];
                                                position?: number;
                                                supportedDesignModes?: string[];
                                                enabled?: boolean;
                                                hideOnOfflineMode?: boolean;
                                                noContentPadding?: boolean;
                                                ai?: boolean;
                                                embedded?: never;
                                                options?: {
                                                    [x: string]: {
                                                        id?: string;
                                                        type?: string;
                                                        slug?: string;
                                                        label?: string;
                                                        defaultValue?: unknown;
                                                        widget?: string;
                                                        hideOnOfflineMode?: boolean;
                                                        widgetParams?: {
                                                            [x: string]: any;
                                                            shouldRender?: false | object;
                                                        } | {};
                                                        data?: object;
                                                        enabled?: boolean;
                                                        hidden?: boolean;
                                                        options?: {
                                                            [x: string]: {
                                                                rightLabel?: string;
                                                                title?: string;
                                                                icon?: string | string[];
                                                                position?: number;
                                                                supportedDesignModes?: string[];
                                                                enabled?: boolean;
                                                                hideOnOfflineMode?: boolean;
                                                                noContentPadding?: boolean;
                                                                ai?: boolean;
                                                                embedded?: never;
                                                                options?: {
                                                                    [x: string]: any;
                                                                };
                                                            } | {
                                                                rightLabel?: string;
                                                                title?: string;
                                                                icon?: string | string[];
                                                                position?: number;
                                                                supportedDesignModes?: string[];
                                                                enabled?: boolean;
                                                                hideOnOfflineMode?: boolean;
                                                                noContentPadding?: boolean;
                                                                ai?: boolean;
                                                                embedded?: {
                                                                    collection?: Collection;
                                                                    type?: string;
                                                                    source?: string;
                                                                    tabLabel?: string;
                                                                    insertCount?: number;
                                                                    optionGroups?: any;
                                                                };
                                                                options?: never;
                                                            };
                                                        };
                                                        supportedDisplayModes?: DisplayMode[];
                                                        overrideAllowed?: Device[];
                                                        _override?: {
                                                            mobile?: {
                                                                type?: string;
                                                                data?: object;
                                                                id?: string;
                                                                hidden?: boolean;
                                                                label?: string;
                                                                options?: {
                                                                    [x: string]: {
                                                                        rightLabel?: string;
                                                                        title?: string;
                                                                        icon?: string | string[];
                                                                        position?: number;
                                                                        supportedDesignModes?: string[];
                                                                        enabled?: boolean;
                                                                        hideOnOfflineMode?: boolean;
                                                                        noContentPadding?: boolean;
                                                                        ai?: boolean;
                                                                        embedded?: never;
                                                                        options?: {
                                                                            [x: string]: any;
                                                                        };
                                                                    } | {
                                                                        rightLabel?: string;
                                                                        title?: string;
                                                                        icon?: string | string[];
                                                                        position?: number;
                                                                        supportedDesignModes?: string[];
                                                                        enabled?: boolean;
                                                                        hideOnOfflineMode?: boolean;
                                                                        noContentPadding?: boolean;
                                                                        ai?: boolean;
                                                                        embedded?: {
                                                                            collection?: Collection;
                                                                            type?: string;
                                                                            source?: string;
                                                                            tabLabel?: string;
                                                                            insertCount?: number;
                                                                            optionGroups?: any;
                                                                        };
                                                                        options?: never;
                                                                    };
                                                                };
                                                                enabled?: boolean;
                                                                defaultValue?: unknown;
                                                                slug?: string;
                                                                widgetParams?: {
                                                                    [x: string]: any;
                                                                    shouldRender?: false | object;
                                                                } | {};
                                                                widget?: string;
                                                                hideOnOfflineMode?: boolean;
                                                                supportedDisplayModes?: DisplayMode[];
                                                            };
                                                            tablet?: {
                                                                type?: string;
                                                                data?: object;
                                                                id?: string;
                                                                hidden?: boolean;
                                                                label?: string;
                                                                options?: {
                                                                    [x: string]: {
                                                                        rightLabel?: string;
                                                                        title?: string;
                                                                        icon?: string | string[];
                                                                        position?: number;
                                                                        supportedDesignModes?: string[];
                                                                        enabled?: boolean;
                                                                        hideOnOfflineMode?: boolean;
                                                                        noContentPadding?: boolean;
                                                                        ai?: boolean;
                                                                        embedded?: never;
                                                                        options?: {
                                                                            [x: string]: any;
                                                                        };
                                                                    } | {
                                                                        rightLabel?: string;
                                                                        title?: string;
                                                                        icon?: string | string[];
                                                                        position?: number;
                                                                        supportedDesignModes?: string[];
                                                                        enabled?: boolean;
                                                                        hideOnOfflineMode?: boolean;
                                                                        noContentPadding?: boolean;
                                                                        ai?: boolean;
                                                                        embedded?: {
                                                                            collection?: Collection;
                                                                            type?: string;
                                                                            source?: string;
                                                                            tabLabel?: string;
                                                                            insertCount?: number;
                                                                            optionGroups?: any;
                                                                        };
                                                                        options?: never;
                                                                    };
                                                                };
                                                                enabled?: boolean;
                                                                defaultValue?: unknown;
                                                                slug?: string;
                                                                widgetParams?: {
                                                                    [x: string]: any;
                                                                    shouldRender?: false | object;
                                                                } | {};
                                                                widget?: string;
                                                                hideOnOfflineMode?: boolean;
                                                                supportedDisplayModes?: DisplayMode[];
                                                            };
                                                            desktop?: {
                                                                type?: string;
                                                                data?: object;
                                                                id?: string;
                                                                hidden?: boolean;
                                                                label?: string;
                                                                options?: {
                                                                    [x: string]: {
                                                                        rightLabel?: string;
                                                                        title?: string;
                                                                        icon?: string | string[];
                                                                        position?: number;
                                                                        supportedDesignModes?: string[];
                                                                        enabled?: boolean;
                                                                        hideOnOfflineMode?: boolean;
                                                                        noContentPadding?: boolean;
                                                                        ai?: boolean;
                                                                        embedded?: never;
                                                                        options?: {
                                                                            [x: string]: any;
                                                                        };
                                                                    } | {
                                                                        rightLabel?: string;
                                                                        title?: string;
                                                                        icon?: string | string[];
                                                                        position?: number;
                                                                        supportedDesignModes?: string[];
                                                                        enabled?: boolean;
                                                                        hideOnOfflineMode?: boolean;
                                                                        noContentPadding?: boolean;
                                                                        ai?: boolean;
                                                                        embedded?: {
                                                                            collection?: Collection;
                                                                            type?: string;
                                                                            source?: string;
                                                                            tabLabel?: string;
                                                                            insertCount?: number;
                                                                            optionGroups?: any;
                                                                        };
                                                                        options?: never;
                                                                    };
                                                                };
                                                                enabled?: boolean;
                                                                defaultValue?: unknown;
                                                                slug?: string;
                                                                widgetParams?: {
                                                                    [x: string]: any;
                                                                    shouldRender?: false | object;
                                                                } | {};
                                                                widget?: string;
                                                                hideOnOfflineMode?: boolean;
                                                                supportedDisplayModes?: DisplayMode[];
                                                            };
                                                        };
                                                    };
                                                };
                                            } | {
                                                rightLabel?: string;
                                                title?: string;
                                                icon?: string | string[];
                                                position?: number;
                                                supportedDesignModes?: string[];
                                                enabled?: boolean;
                                                hideOnOfflineMode?: boolean;
                                                noContentPadding?: boolean;
                                                ai?: boolean;
                                                embedded?: {
                                                    collection?: Collection;
                                                    type?: string;
                                                    source?: string;
                                                    tabLabel?: string;
                                                    insertCount?: number;
                                                    optionGroups?: {
                                                        [x: string]: {
                                                            optionsOverride?: {
                                                                [x: string]: {
                                                                    id?: string;
                                                                    type?: string;
                                                                    slug?: string;
                                                                    label?: string;
                                                                    defaultValue?: unknown;
                                                                    widget?: string;
                                                                    hideOnOfflineMode?: boolean;
                                                                    widgetParams?: {
                                                                        [x: string]: any;
                                                                        shouldRender?: false | object;
                                                                    } | {};
                                                                    data?: object;
                                                                    enabled?: boolean;
                                                                    hidden?: boolean;
                                                                    options?: {
                                                                        [x: string]: {
                                                                            rightLabel?: string;
                                                                            title?: string;
                                                                            icon?: string | string[];
                                                                            position?: number;
                                                                            supportedDesignModes?: string[];
                                                                            enabled?: boolean;
                                                                            hideOnOfflineMode?: boolean;
                                                                            noContentPadding?: boolean;
                                                                            ai?: boolean;
                                                                            embedded?: never;
                                                                            options?: {
                                                                                [x: string]: any;
                                                                            };
                                                                        } | {
                                                                            rightLabel?: string;
                                                                            title?: string;
                                                                            icon?: string | string[];
                                                                            position?: number;
                                                                            supportedDesignModes?: string[];
                                                                            enabled?: boolean;
                                                                            hideOnOfflineMode?: boolean;
                                                                            noContentPadding?: boolean;
                                                                            ai?: boolean;
                                                                            embedded?: {
                                                                                collection?: Collection;
                                                                                type?: string;
                                                                                source?: string;
                                                                                tabLabel?: string;
                                                                                insertCount?: number;
                                                                                optionGroups?: any;
                                                                            };
                                                                            options?: never;
                                                                        };
                                                                    };
                                                                    supportedDisplayModes?: DisplayMode[];
                                                                    overrideAllowed?: Device[];
                                                                    _override?: {
                                                                        mobile?: {
                                                                            type?: string;
                                                                            data?: object;
                                                                            id?: string;
                                                                            hidden?: boolean;
                                                                            label?: string;
                                                                            options?: {
                                                                                [x: string]: {
                                                                                    rightLabel?: string;
                                                                                    title?: string;
                                                                                    icon?: string | string[];
                                                                                    position?: number;
                                                                                    supportedDesignModes?: string[];
                                                                                    enabled?: boolean;
                                                                                    hideOnOfflineMode?: boolean;
                                                                                    noContentPadding?: boolean;
                                                                                    ai?: boolean;
                                                                                    embedded?: never;
                                                                                    options?: {
                                                                                        [x: string]: any;
                                                                                    };
                                                                                } | {
                                                                                    rightLabel?: string;
                                                                                    title?: string;
                                                                                    icon?: string | string[];
                                                                                    position?: number;
                                                                                    supportedDesignModes?: string[];
                                                                                    enabled?: boolean;
                                                                                    hideOnOfflineMode?: boolean;
                                                                                    noContentPadding?: boolean;
                                                                                    ai?: boolean;
                                                                                    embedded?: {
                                                                                        collection?: Collection;
                                                                                        type?: string;
                                                                                        source?: string;
                                                                                        tabLabel?: string;
                                                                                        insertCount?: number;
                                                                                        optionGroups?: any;
                                                                                    };
                                                                                    options?: never;
                                                                                };
                                                                            };
                                                                            enabled?: boolean;
                                                                            defaultValue?: unknown;
                                                                            slug?: string;
                                                                            widgetParams?: {
                                                                                [x: string]: any;
                                                                                shouldRender?: false | object;
                                                                            } | {};
                                                                            widget?: string;
                                                                            hideOnOfflineMode?: boolean;
                                                                            supportedDisplayModes?: DisplayMode[];
                                                                        };
                                                                        tablet?: {
                                                                            type?: string;
                                                                            data?: object;
                                                                            id?: string;
                                                                            hidden?: boolean;
                                                                            label?: string;
                                                                            options?: {
                                                                                [x: string]: {
                                                                                    rightLabel?: string;
                                                                                    title?: string;
                                                                                    icon?: string | string[];
                                                                                    position?: number;
                                                                                    supportedDesignModes?: string[];
                                                                                    enabled?: boolean;
                                                                                    hideOnOfflineMode?: boolean;
                                                                                    noContentPadding?: boolean;
                                                                                    ai?: boolean;
                                                                                    embedded?: never;
                                                                                    options?: {
                                                                                        [x: string]: any;
                                                                                    };
                                                                                } | {
                                                                                    rightLabel?: string;
                                                                                    title?: string;
                                                                                    icon?: string | string[];
                                                                                    position?: number;
                                                                                    supportedDesignModes?: string[];
                                                                                    enabled?: boolean;
                                                                                    hideOnOfflineMode?: boolean;
                                                                                    noContentPadding?: boolean;
                                                                                    ai?: boolean;
                                                                                    embedded?: {
                                                                                        collection?: Collection;
                                                                                        type?: string;
                                                                                        source?: string;
                                                                                        tabLabel?: string;
                                                                                        insertCount?: number;
                                                                                        optionGroups?: any;
                                                                                    };
                                                                                    options?: never;
                                                                                };
                                                                            };
                                                                            enabled?: boolean;
                                                                            defaultValue?: unknown;
                                                                            slug?: string;
                                                                            widgetParams?: {
                                                                                [x: string]: any;
                                                                                shouldRender?: false | object;
                                                                            } | {};
                                                                            widget?: string;
                                                                            hideOnOfflineMode?: boolean;
                                                                            supportedDisplayModes?: DisplayMode[];
                                                                        };
                                                                        desktop?: {
                                                                            type?: string;
                                                                            data?: object;
                                                                            id?: string;
                                                                            hidden?: boolean;
                                                                            label?: string;
                                                                            options?: {
                                                                                [x: string]: {
                                                                                    rightLabel?: string;
                                                                                    title?: string;
                                                                                    icon?: string | string[];
                                                                                    position?: number;
                                                                                    supportedDesignModes?: string[];
                                                                                    enabled?: boolean;
                                                                                    hideOnOfflineMode?: boolean;
                                                                                    noContentPadding?: boolean;
                                                                                    ai?: boolean;
                                                                                    embedded?: never;
                                                                                    options?: {
                                                                                        [x: string]: any;
                                                                                    };
                                                                                } | {
                                                                                    rightLabel?: string;
                                                                                    title?: string;
                                                                                    icon?: string | string[];
                                                                                    position?: number;
                                                                                    supportedDesignModes?: string[];
                                                                                    enabled?: boolean;
                                                                                    hideOnOfflineMode?: boolean;
                                                                                    noContentPadding?: boolean;
                                                                                    ai?: boolean;
                                                                                    embedded?: {
                                                                                        collection?: Collection;
                                                                                        type?: string;
                                                                                        source?: string;
                                                                                        tabLabel?: string;
                                                                                        insertCount?: number;
                                                                                        optionGroups?: any;
                                                                                    };
                                                                                    options?: never;
                                                                                };
                                                                            };
                                                                            enabled?: boolean;
                                                                            defaultValue?: unknown;
                                                                            slug?: string;
                                                                            widgetParams?: {
                                                                                [x: string]: any;
                                                                                shouldRender?: false | object;
                                                                            } | {};
                                                                            widget?: string;
                                                                            hideOnOfflineMode?: boolean;
                                                                            supportedDisplayModes?: DisplayMode[];
                                                                        };
                                                                    };
                                                                };
                                                            };
                                                        };
                                                    };
                                                };
                                                options?: never;
                                            };
                                        };
                                        enabled?: boolean;
                                        defaultValue?: unknown;
                                        slug?: string;
                                        widgetParams?: {
                                            [x: string]: any;
                                            shouldRender?: false | object;
                                        } | {};
                                        widget?: string;
                                        hideOnOfflineMode?: boolean;
                                        supportedDisplayModes?: DisplayMode[];
                                    };
                                    desktop?: {
                                        type?: string;
                                        data?: object;
                                        id?: string;
                                        hidden?: boolean;
                                        label?: string;
                                        options?: {
                                            [x: string]: {
                                                rightLabel?: string;
                                                title?: string;
                                                icon?: string | string[];
                                                position?: number;
                                                supportedDesignModes?: string[];
                                                enabled?: boolean;
                                                hideOnOfflineMode?: boolean;
                                                noContentPadding?: boolean;
                                                ai?: boolean;
                                                embedded?: never;
                                                options?: {
                                                    [x: string]: {
                                                        id?: string;
                                                        type?: string;
                                                        slug?: string;
                                                        label?: string;
                                                        defaultValue?: unknown;
                                                        widget?: string;
                                                        hideOnOfflineMode?: boolean;
                                                        widgetParams?: {
                                                            [x: string]: any;
                                                            shouldRender?: false | object;
                                                        } | {};
                                                        data?: object;
                                                        enabled?: boolean;
                                                        hidden?: boolean;
                                                        options?: {
                                                            [x: string]: {
                                                                rightLabel?: string;
                                                                title?: string;
                                                                icon?: string | string[];
                                                                position?: number;
                                                                supportedDesignModes?: string[];
                                                                enabled?: boolean;
                                                                hideOnOfflineMode?: boolean;
                                                                noContentPadding?: boolean;
                                                                ai?: boolean;
                                                                embedded?: never;
                                                                options?: {
                                                                    [x: string]: any;
                                                                };
                                                            } | {
                                                                rightLabel?: string;
                                                                title?: string;
                                                                icon?: string | string[];
                                                                position?: number;
                                                                supportedDesignModes?: string[];
                                                                enabled?: boolean;
                                                                hideOnOfflineMode?: boolean;
                                                                noContentPadding?: boolean;
                                                                ai?: boolean;
                                                                embedded?: {
                                                                    collection?: Collection;
                                                                    type?: string;
                                                                    source?: string;
                                                                    tabLabel?: string;
                                                                    insertCount?: number;
                                                                    optionGroups?: any;
                                                                };
                                                                options?: never;
                                                            };
                                                        };
                                                        supportedDisplayModes?: DisplayMode[];
                                                        overrideAllowed?: Device[];
                                                        _override?: {
                                                            mobile?: {
                                                                type?: string;
                                                                data?: object;
                                                                id?: string;
                                                                hidden?: boolean;
                                                                label?: string;
                                                                options?: {
                                                                    [x: string]: {
                                                                        rightLabel?: string;
                                                                        title?: string;
                                                                        icon?: string | string[];
                                                                        position?: number;
                                                                        supportedDesignModes?: string[];
                                                                        enabled?: boolean;
                                                                        hideOnOfflineMode?: boolean;
                                                                        noContentPadding?: boolean;
                                                                        ai?: boolean;
                                                                        embedded?: never;
                                                                        options?: {
                                                                            [x: string]: any;
                                                                        };
                                                                    } | {
                                                                        rightLabel?: string;
                                                                        title?: string;
                                                                        icon?: string | string[];
                                                                        position?: number;
                                                                        supportedDesignModes?: string[];
                                                                        enabled?: boolean;
                                                                        hideOnOfflineMode?: boolean;
                                                                        noContentPadding?: boolean;
                                                                        ai?: boolean;
                                                                        embedded?: {
                                                                            collection?: Collection;
                                                                            type?: string;
                                                                            source?: string;
                                                                            tabLabel?: string;
                                                                            insertCount?: number;
                                                                            optionGroups?: any;
                                                                        };
                                                                        options?: never;
                                                                    };
                                                                };
                                                                enabled?: boolean;
                                                                defaultValue?: unknown;
                                                                slug?: string;
                                                                widgetParams?: {
                                                                    [x: string]: any;
                                                                    shouldRender?: false | object;
                                                                } | {};
                                                                widget?: string;
                                                                hideOnOfflineMode?: boolean;
                                                                supportedDisplayModes?: DisplayMode[];
                                                            };
                                                            tablet?: {
                                                                type?: string;
                                                                data?: object;
                                                                id?: string;
                                                                hidden?: boolean;
                                                                label?: string;
                                                                options?: {
                                                                    [x: string]: {
                                                                        rightLabel?: string;
                                                                        title?: string;
                                                                        icon?: string | string[];
                                                                        position?: number;
                                                                        supportedDesignModes?: string[];
                                                                        enabled?: boolean;
                                                                        hideOnOfflineMode?: boolean;
                                                                        noContentPadding?: boolean;
                                                                        ai?: boolean;
                                                                        embedded?: never;
                                                                        options?: {
                                                                            [x: string]: any;
                                                                        };
                                                                    } | {
                                                                        rightLabel?: string;
                                                                        title?: string;
                                                                        icon?: string | string[];
                                                                        position?: number;
                                                                        supportedDesignModes?: string[];
                                                                        enabled?: boolean;
                                                                        hideOnOfflineMode?: boolean;
                                                                        noContentPadding?: boolean;
                                                                        ai?: boolean;
                                                                        embedded?: {
                                                                            collection?: Collection;
                                                                            type?: string;
                                                                            source?: string;
                                                                            tabLabel?: string;
                                                                            insertCount?: number;
                                                                            optionGroups?: any;
                                                                        };
                                                                        options?: never;
                                                                    };
                                                                };
                                                                enabled?: boolean;
                                                                defaultValue?: unknown;
                                                                slug?: string;
                                                                widgetParams?: {
                                                                    [x: string]: any;
                                                                    shouldRender?: false | object;
                                                                } | {};
                                                                widget?: string;
                                                                hideOnOfflineMode?: boolean;
                                                                supportedDisplayModes?: DisplayMode[];
                                                            };
                                                            desktop?: {
                                                                type?: string;
                                                                data?: object;
                                                                id?: string;
                                                                hidden?: boolean;
                                                                label?: string;
                                                                options?: {
                                                                    [x: string]: {
                                                                        rightLabel?: string;
                                                                        title?: string;
                                                                        icon?: string | string[];
                                                                        position?: number;
                                                                        supportedDesignModes?: string[];
                                                                        enabled?: boolean;
                                                                        hideOnOfflineMode?: boolean;
                                                                        noContentPadding?: boolean;
                                                                        ai?: boolean;
                                                                        embedded?: never;
                                                                        options?: {
                                                                            [x: string]: any;
                                                                        };
                                                                    } | {
                                                                        rightLabel?: string;
                                                                        title?: string;
                                                                        icon?: string | string[];
                                                                        position?: number;
                                                                        supportedDesignModes?: string[];
                                                                        enabled?: boolean;
                                                                        hideOnOfflineMode?: boolean;
                                                                        noContentPadding?: boolean;
                                                                        ai?: boolean;
                                                                        embedded?: {
                                                                            collection?: Collection;
                                                                            type?: string;
                                                                            source?: string;
                                                                            tabLabel?: string;
                                                                            insertCount?: number;
                                                                            optionGroups?: any;
                                                                        };
                                                                        options?: never;
                                                                    };
                                                                };
                                                                enabled?: boolean;
                                                                defaultValue?: unknown;
                                                                slug?: string;
                                                                widgetParams?: {
                                                                    [x: string]: any;
                                                                    shouldRender?: false | object;
                                                                } | {};
                                                                widget?: string;
                                                                hideOnOfflineMode?: boolean;
                                                                supportedDisplayModes?: DisplayMode[];
                                                            };
                                                        };
                                                    };
                                                };
                                            } | {
                                                rightLabel?: string;
                                                title?: string;
                                                icon?: string | string[];
                                                position?: number;
                                                supportedDesignModes?: string[];
                                                enabled?: boolean;
                                                hideOnOfflineMode?: boolean;
                                                noContentPadding?: boolean;
                                                ai?: boolean;
                                                embedded?: {
                                                    collection?: Collection;
                                                    type?: string;
                                                    source?: string;
                                                    tabLabel?: string;
                                                    insertCount?: number;
                                                    optionGroups?: {
                                                        [x: string]: {
                                                            optionsOverride?: {
                                                                [x: string]: {
                                                                    id?: string;
                                                                    type?: string;
                                                                    slug?: string;
                                                                    label?: string;
                                                                    defaultValue?: unknown;
                                                                    widget?: string;
                                                                    hideOnOfflineMode?: boolean;
                                                                    widgetParams?: {
                                                                        [x: string]: any;
                                                                        shouldRender?: false | object;
                                                                    } | {};
                                                                    data?: object;
                                                                    enabled?: boolean;
                                                                    hidden?: boolean;
                                                                    options?: {
                                                                        [x: string]: {
                                                                            rightLabel?: string;
                                                                            title?: string;
                                                                            icon?: string | string[];
                                                                            position?: number;
                                                                            supportedDesignModes?: string[];
                                                                            enabled?: boolean;
                                                                            hideOnOfflineMode?: boolean;
                                                                            noContentPadding?: boolean;
                                                                            ai?: boolean;
                                                                            embedded?: never;
                                                                            options?: {
                                                                                [x: string]: any;
                                                                            };
                                                                        } | {
                                                                            rightLabel?: string;
                                                                            title?: string;
                                                                            icon?: string | string[];
                                                                            position?: number;
                                                                            supportedDesignModes?: string[];
                                                                            enabled?: boolean;
                                                                            hideOnOfflineMode?: boolean;
                                                                            noContentPadding?: boolean;
                                                                            ai?: boolean;
                                                                            embedded?: {
                                                                                collection?: Collection;
                                                                                type?: string;
                                                                                source?: string;
                                                                                tabLabel?: string;
                                                                                insertCount?: number;
                                                                                optionGroups?: any;
                                                                            };
                                                                            options?: never;
                                                                        };
                                                                    };
                                                                    supportedDisplayModes?: DisplayMode[];
                                                                    overrideAllowed?: Device[];
                                                                    _override?: {
                                                                        mobile?: {
                                                                            type?: string;
                                                                            data?: object;
                                                                            id?: string;
                                                                            hidden?: boolean;
                                                                            label?: string;
                                                                            options?: {
                                                                                [x: string]: {
                                                                                    rightLabel?: string;
                                                                                    title?: string;
                                                                                    icon?: string | string[];
                                                                                    position?: number;
                                                                                    supportedDesignModes?: string[];
                                                                                    enabled?: boolean;
                                                                                    hideOnOfflineMode?: boolean;
                                                                                    noContentPadding?: boolean;
                                                                                    ai?: boolean;
                                                                                    embedded?: never;
                                                                                    options?: {
                                                                                        [x: string]: any;
                                                                                    };
                                                                                } | {
                                                                                    rightLabel?: string;
                                                                                    title?: string;
                                                                                    icon?: string | string[];
                                                                                    position?: number;
                                                                                    supportedDesignModes?: string[];
                                                                                    enabled?: boolean;
                                                                                    hideOnOfflineMode?: boolean;
                                                                                    noContentPadding?: boolean;
                                                                                    ai?: boolean;
                                                                                    embedded?: {
                                                                                        collection?: Collection;
                                                                                        type?: string;
                                                                                        source?: string;
                                                                                        tabLabel?: string;
                                                                                        insertCount?: number;
                                                                                        optionGroups?: any;
                                                                                    };
                                                                                    options?: never;
                                                                                };
                                                                            };
                                                                            enabled?: boolean;
                                                                            defaultValue?: unknown;
                                                                            slug?: string;
                                                                            widgetParams?: {
                                                                                [x: string]: any;
                                                                                shouldRender?: false | object;
                                                                            } | {};
                                                                            widget?: string;
                                                                            hideOnOfflineMode?: boolean;
                                                                            supportedDisplayModes?: DisplayMode[];
                                                                        };
                                                                        tablet?: {
                                                                            type?: string;
                                                                            data?: object;
                                                                            id?: string;
                                                                            hidden?: boolean;
                                                                            label?: string;
                                                                            options?: {
                                                                                [x: string]: {
                                                                                    rightLabel?: string;
                                                                                    title?: string;
                                                                                    icon?: string | string[];
                                                                                    position?: number;
                                                                                    supportedDesignModes?: string[];
                                                                                    enabled?: boolean;
                                                                                    hideOnOfflineMode?: boolean;
                                                                                    noContentPadding?: boolean;
                                                                                    ai?: boolean;
                                                                                    embedded?: never;
                                                                                    options?: {
                                                                                        [x: string]: any;
                                                                                    };
                                                                                } | {
                                                                                    rightLabel?: string;
                                                                                    title?: string;
                                                                                    icon?: string | string[];
                                                                                    position?: number;
                                                                                    supportedDesignModes?: string[];
                                                                                    enabled?: boolean;
                                                                                    hideOnOfflineMode?: boolean;
                                                                                    noContentPadding?: boolean;
                                                                                    ai?: boolean;
                                                                                    embedded?: {
                                                                                        collection?: Collection;
                                                                                        type?: string;
                                                                                        source?: string;
                                                                                        tabLabel?: string;
                                                                                        insertCount?: number;
                                                                                        optionGroups?: any;
                                                                                    };
                                                                                    options?: never;
                                                                                };
                                                                            };
                                                                            enabled?: boolean;
                                                                            defaultValue?: unknown;
                                                                            slug?: string;
                                                                            widgetParams?: {
                                                                                [x: string]: any;
                                                                                shouldRender?: false | object;
                                                                            } | {};
                                                                            widget?: string;
                                                                            hideOnOfflineMode?: boolean;
                                                                            supportedDisplayModes?: DisplayMode[];
                                                                        };
                                                                        desktop?: {
                                                                            type?: string;
                                                                            data?: object;
                                                                            id?: string;
                                                                            hidden?: boolean;
                                                                            label?: string;
                                                                            options?: {
                                                                                [x: string]: {
                                                                                    rightLabel?: string;
                                                                                    title?: string;
                                                                                    icon?: string | string[];
                                                                                    position?: number;
                                                                                    supportedDesignModes?: string[];
                                                                                    enabled?: boolean;
                                                                                    hideOnOfflineMode?: boolean;
                                                                                    noContentPadding?: boolean;
                                                                                    ai?: boolean;
                                                                                    embedded?: never;
                                                                                    options?: {
                                                                                        [x: string]: any;
                                                                                    };
                                                                                } | {
                                                                                    rightLabel?: string;
                                                                                    title?: string;
                                                                                    icon?: string | string[];
                                                                                    position?: number;
                                                                                    supportedDesignModes?: string[];
                                                                                    enabled?: boolean;
                                                                                    hideOnOfflineMode?: boolean;
                                                                                    noContentPadding?: boolean;
                                                                                    ai?: boolean;
                                                                                    embedded?: {
                                                                                        collection?: Collection;
                                                                                        type?: string;
                                                                                        source?: string;
                                                                                        tabLabel?: string;
                                                                                        insertCount?: number;
                                                                                        optionGroups?: any;
                                                                                    };
                                                                                    options?: never;
                                                                                };
                                                                            };
                                                                            enabled?: boolean;
                                                                            defaultValue?: unknown;
                                                                            slug?: string;
                                                                            widgetParams?: {
                                                                                [x: string]: any;
                                                                                shouldRender?: false | object;
                                                                            } | {};
                                                                            widget?: string;
                                                                            hideOnOfflineMode?: boolean;
                                                                            supportedDisplayModes?: DisplayMode[];
                                                                        };
                                                                    };
                                                                };
                                                            };
                                                        };
                                                    };
                                                };
                                                options?: never;
                                            };
                                        };
                                        enabled?: boolean;
                                        defaultValue?: unknown;
                                        slug?: string;
                                        widgetParams?: {
                                            [x: string]: any;
                                            shouldRender?: false | object;
                                        } | {};
                                        widget?: string;
                                        hideOnOfflineMode?: boolean;
                                        supportedDisplayModes?: DisplayMode[];
                                    };
                                };
                            };
                        };
                    };
                };
            };
            options?: never;
        };
    };
    data: {
        [x: string]: unknown;
    };
    values: {
        [x: string]: unknown;
    };
    css: string;
    renderer: object | {
        apply?: {};
        call?: {};
        bind?: {};
        toString?: {};
        prototype?: any;
        readonly length?: number;
        arguments?: any;
        caller?: any;
        readonly name?: string;
        [Symbol.hasInstance]?: {};
        // @ts-ignore
        [Symbol.metadata]?: {
            [x: string]: unknown;
            [x: number]: unknown;
            [x: symbol]: unknown;
        };
    };
    supportedDisplayModes: DisplayMode[];
    supportedVariants: "amp"[];
    usageLimit: number;
    transformer: {
        apply?: {};
        call?: {};
        bind?: {};
        toString?: {};
        prototype?: any;
        readonly length?: number;
        arguments?: any;
        caller?: any;
        readonly name?: string;
        [Symbol.hasInstance]?: {};
        // @ts-ignore
        [Symbol.metadata]?: {
            [x: string]: unknown;
            [x: number]: unknown;
            [x: symbol]: unknown;
        };
    };
    hasDeprecatedFontControls: boolean;
    applyDesignTags: {};
    propertyStates: {
        apply?: {};
        call?: {};
        bind?: {};
        toString?: {};
        prototype?: any;
        readonly length?: number;
        arguments?: any;
        caller?: any;
        readonly name?: string;
        [Symbol.hasInstance]?: {};
        // @ts-ignore
        [Symbol.metadata]?: {
            [x: string]: unknown;
            [x: number]: unknown;
            [x: symbol]: unknown;
        };
    };
    premium: boolean;
    editable: boolean;
    classic: boolean;
    enabled: boolean;
    position: number;
    location: {
        collection?: Collection;
        id?: string | number;
    };
    validator: string;
})[];
export declare function getCustomToolsCount(): number;
export declare function getToolsCSS(category: string, items: ToolConfig[]): string;
export declare function excludeTools(types: string[]): void;
export declare function registerTool<Values extends ValueMap>(config: ToolConfig<Values, Validator>): void;
export declare function clearValidator(toolName: string): void;
export declare function clearValidators(): void;
export declare function setValidator(toolName: string, validator: Validator | null): void;
export declare function setDefaultDesignValidator(validator: Validator): void;
export declare function setDesignValidator(validator: Validator): void;
export declare function enablePremiumTool(config: ToolConfig): void;
export declare function disablePremiumTool(config: ToolConfig): void;
export declare function registerOptions(config: OptionConfig & {
    category?: string;
}): void;
export declare function registerPropertyEditor<Props extends EditorProps<any>>(config: PropertyEditorConfig<Props>): void;
export declare function getPropertyEditor(config: {
    id: PropertyEditorConfig<any>['id'];
    name?: PropertyEditorConfig<any>['name'];
} | {
    id?: PropertyEditorConfig<any>['id'];
    name: PropertyEditorConfig<any>['name'];
}): any;
export declare function getViewer(config: ToolConfig): any;
export declare function getHead(config: ToolConfig): any;
export declare function getDefaultValidator(config: ToolConfig | string): Validator | undefined;
export declare function getValidator(config: ToolConfig | string, { fallbackToDefault }?: {
    fallbackToDefault?: boolean;
}): Validator | undefined;
export declare function getToolData(config: ToolConfig): {
    [x: string]: any;
};
export declare function getToolTransformer(config: ToolConfig): {
    apply?: {};
    call?: {};
    bind?: {};
    toString?: {};
    prototype?: any;
    readonly length?: number;
    arguments?: any;
    caller?: any;
    readonly name?: string;
    [Symbol.hasInstance]?: {};
    // @ts-ignore
    [Symbol.metadata]?: {
        [x: string]: unknown;
        [x: number]: unknown;
        [x: symbol]: unknown;
    };
};
export declare function getToolPropertyStates(config: ToolConfig): {
    apply?: {};
    call?: {};
    bind?: {};
    toString?: {};
    prototype?: any;
    readonly length?: number;
    arguments?: any;
    caller?: any;
    readonly name?: string;
    [Symbol.hasInstance]?: {};
    // @ts-ignore
    [Symbol.metadata]?: {
        [x: string]: unknown;
        [x: number]: unknown;
        [x: symbol]: unknown;
    };
};
export declare function rowPropertyStates(_values: any, snapshot: {
    displayConditions: DisplayConditions | undefined;
    entitlements: any;
}): {
    displayCondition: {
        enabled: boolean;
    };
} | {
    displayCondition?: undefined;
};
export declare function contentPropertyStates(_values: any, snapshot: {
    displayConditions: DisplayConditions | undefined;
    entitlements: any;
}): {
    displayCondition: {
        enabled: boolean;
    };
} | {
    displayCondition?: undefined;
};
export declare function isToolEditable(config: ToolConfig): boolean;
export declare function getToolSupportedDisplayModes(config: ToolConfig): DisplayMode[];
export declare function isToolSupportedAtThisDisplayMode(config: ToolConfig, displayMode: DisplayMode): boolean | null;
export declare function getToolApplyDesignTags(config: ToolConfig): (values: ValueMap, designTags: DesignTags, template: (template: string, view: any, partials?: Record<string, string> | ((partialName: string) => string), tags?: [string, string]) => string) => ValueMap;
export type ToolItem = Pick<ToolConfig, 'location' | 'type' | 'values'> & {
    [key: string]: any;
};
export declare function getRenderValues(toolItem: ToolItem, values?: object, forCurrentDevice?: Device | undefined): Record<string, object>;
export declare function getEmbeddedValues(design: RootState['design'], toolItem: ToolItem, { renderValues }: {
    renderValues?: boolean;
}): Record<string, unknown[]>;
export declare function getEmbeddedInitialValues(toolItem: ToolItem, { designMode, deviceName, }: {
    designMode: DesignMode;
    deviceName: Device;
}): Record<string, Record<string, unknown>>;
export declare function getEmbeddedOptionsConfig(toolItem: ToolItem): Record<string, OptionGroupEmbeddedConfig<ValueMap>>;
export declare function getEmbeddedOptionGroups(embedded: OptionGroupEmbeddedConfig, { designMode, deviceName }: {
    designMode: DesignMode;
    deviceName: Device;
}): OptionGroupConfigMap<ValueMap>;
export declare function getMergedEmbeddedOptionGroup(embedded: OptionGroupEmbeddedConfig, { designMode, deviceName }: {
    designMode: DesignMode;
    deviceName: Device;
}): Partial<Pick<OptionGroupConfig<ValueMap>, "title" | "options">>;
export declare function getItemExporter(config: ToolConfig, displayMode: DisplayMode, variant?: Variant): Function;
export declare function getContainerExporter(type: Container, displayMode: DisplayMode, variant?: Variant): Function;
export declare function getToolId<Values extends ValueMap>(config: ToolConfig<Values> | string): string;
export declare function getOptionId(config: Pick<OptionConfig, 'slug' | 'type'> | string | undefined): string | undefined;
export declare function getPropertyEditorId(config: {
    name?: PropertyEditorConfig<any>['name'];
} | string): string;
export declare function registerColumns(cells: number[]): void;
export declare function getEmptyRow(): {
    cells: number[];
    values: {
        [id: string]: unknown;
    };
    columns: {
        contents: any[];
        values: {
            [id: string]: unknown;
        };
    }[];
};
