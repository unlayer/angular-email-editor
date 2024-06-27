import { State as Design } from './Design';
import { CollaborationThread } from './EditorTypes';
import { Theme } from './ThemeTypes';
export declare type DesignMode = 'live' | 'edit';
export declare type Device = 'desktop' | 'mobile' | 'tablet';
export declare type DisplayMode = 'web' | 'email' | 'popup' | 'document';
export declare type Variant = 'amp' | null;
export declare type Ui = 'none' | 'visual' | 'classic';
export interface MergeTag {
    name: string;
    value?: string;
    sample?: string;
    icon?: string;
    mergeTags?: MergeTags;
    rules?: {
        [key: string]: {
            name: string;
            before: string;
            after: string;
            sample?: boolean | Array<Record<string, string>>;
        };
    };
}
export interface MergeTags {
    [name: string]: MergeTag;
}
export declare type MergeTagsValues = Record<string, string | number | Record<string, boolean | Array<Record<string, string | number>>>>;
export interface MergeTagsConfig {
    autocompleteTriggerChar?: string;
    sort?: boolean;
}
export interface DisplayCondition {
    type: string;
    label: string;
    description: string;
    before?: string;
    after?: string;
}
export declare type DisplayConditions = DisplayCondition[];
export declare type SpecialLink = {
    name: string;
    href: string;
    target?: string;
    specialLinks?: undefined;
} | {
    name: string;
    href?: undefined;
    target?: undefined;
    specialLinks: SpecialLinks;
};
export interface SpecialLinks {
    [name: string]: SpecialLink;
}
export declare type LinkTypeFieldOption = {
    value: string;
    label: string;
    enabled?: boolean;
};
export interface LinkTypeField {
    name: string;
    label: string;
    defaultValue?: string | LinkTypeFieldOption[] | undefined;
    enabled?: boolean;
    placeholderText?: string;
    inputType?: any;
    isClearable?: boolean;
    isCreatable?: boolean;
    isMulti?: boolean;
    limit?: number;
    limitMessage?: string;
    validationRegex?: string;
    options?: LinkTypeFieldOption[];
    onCreateOption?: (inputValue: string, meta: object, done: (newOption: LinkTypeFieldOption) => void) => void;
}
export interface LinkType {
    name: string;
    label: string;
    enabled?: boolean;
    attrs?: {
        href?: string;
        target?: string;
        onClick?: string | Function;
        class?: string;
        [key: string]: any;
    };
    fields?: LinkTypeField[];
}
export declare type LinkTypes = LinkType[];
export declare type LinkTypesSharedConfig = Pick<LinkType, 'attrs' | 'fields'>;
export interface CustomFont {
    label: string;
    value: string;
    url: string;
    weights?: number[];
}
export interface CustomFonts {
    [label: string]: CustomFont;
}
export declare type DesignTag = string;
export interface DesignTags {
    [name: string]: DesignTag;
}
export interface DesignTagsConfig {
    delimiter: [string, string];
}
export declare type CustomCSS = string | string[] | undefined | null;
export declare type CustomJS = string | string[] | undefined | null;
export interface Translations {
    [name: string]: object;
}
export declare type Collection = 'bodies' | 'columns' | 'contents' | 'pages' | 'rows' | 'headers' | 'footers';
export declare type Container = 'body' | 'row' | 'column' | 'content';
export interface Location {
    collection: Collection;
    id: number | string;
}
export interface Selection {
    active: boolean;
    location: Location | null;
    parent: Location | null;
    threadId: CollaborationThread['id'] | null;
    openedPanel?: 'images' | 'content' | 'uploads' | 'audit' | 'blocks';
}
export interface LayerGroup {
    elementRef: any;
    layerCollection: Location['collection'];
    layerIndex?: Placeholder['index'];
    parentCollection: Location['collection'];
    parentId: Location['id'];
    placeholders: Partial<Record<NonNullable<Placeholder['index']>, Placeholder | undefined>>;
}
export interface Placeholder {
    elementRef: any;
    active?: boolean;
    index: number | 'first' | 'last' | undefined;
    layerGroupParentLocation: Location | undefined;
}
export interface Tool {
    active: boolean;
    type: string | null;
    slug: string | null;
}
export interface Usage {
    displayMode?: DisplayMode;
    designMode?: DesignMode;
    customTools?: number;
    customTabs?: number;
    customBlocks?: number;
    customFonts?: number;
    linkTypes?: number;
    mergeTags?: number;
    specialLinks?: number;
    displayConditions?: number;
    designTags?: number;
    customCSS?: boolean;
    customJS?: boolean;
    fileStorage?: boolean;
}
export declare type ImageSource = 'unsplash' | 'pixabay' | 'pexel' | 'user';
export interface Image {
    id: number;
    location: string;
    contentType: string;
    size: number;
    width: number | null;
    height: number | null;
    source: ImageSource | null;
    optimistic?: boolean;
}
export declare type ArrayItem<T> = T extends (infer I)[] ? I : T extends readonly (infer I)[] ? I : unknown;
export declare type BodyItem = Array<{
    id: string;
    cells: number[];
    columns: Array<{
        id: string;
        contents: Array<Design['contents']['0']>;
        values: {};
    }>;
    values: {};
}>;
export declare type JSONTemplate = {
    counters: Record<string, number>;
    body: {
        id: string | undefined;
        rows: BodyItem;
        headers: BodyItem;
        footers: BodyItem;
        values: {};
    };
    schemaVersion?: number;
};
export declare type Fonts = {
    showDefaultFonts?: boolean;
    customFonts?: CustomFont[];
};
export declare type Icon = {
    name?: string;
    data?: string;
    url?: string;
};
export declare type AuditTool = {
    type: string;
    name?: string;
};
export declare type Rule = {
    id: string;
    icon: string | string[] | undefined;
    title: string;
    description: string;
    severity: 'ERROR' | 'WARNING';
};
export declare type Audit = {
    location?: Location;
    tool?: AuditTool;
} & Rule;
export declare type Validator = (info: {
    [id: string]: unknown;
    html?: string;
    defaultErrors?: Audit[];
}) => Promise<Audit[]>;
declare type GroupedAuditError = {
    location: Location;
    tool?: AuditTool;
};
export declare type GroupedAudit = {
    [id: string]: {
        icon: string;
        title: string;
        description: string;
        errors: GroupedAuditError[];
    };
};
export declare type AuditApiResult = {
    status: 'FAIL' | 'PASS';
    errors: Audit[];
};
export declare type Tabs = {
    [tabName: string]: {
        enabled?: boolean;
        type?: string;
        position?: number;
        icon?: string;
        active?: boolean;
    };
};
export declare type SocialIcon = {
    name: string;
    url: string;
    imgUrl?: string;
};
export declare type SocialCustomIcon = {
    name: string;
    url: string;
    icons: {
        [key: string]: string;
    }[];
};
export declare type AppearanceConfig = {
    actionBar?: {
        placement?: 'top' | 'bottom' | 'top_left' | 'top_right' | 'bottom_left' | 'bottom_right' | undefined;
    };
    features?: {
        preview?: boolean;
    };
    loader?: {
        url?: string | undefined;
        html?: string | undefined;
        css?: string | undefined;
    };
    panels?: {
        tools?: {
            dock?: 'left' | 'right';
            collapsible?: boolean;
            tabs?: {
                body?: {
                    visible?: boolean;
                };
            };
        };
    };
    theme?: Theme['name'] | 'light' | 'dark';
};
export interface ToolConfig {
    enabled?: boolean | undefined;
    position?: number | undefined;
    properties?: object | undefined;
    validator?: Validator;
}
export interface ToolsConfig {
    [key: string]: ToolConfig;
}
export declare type User = {
    id?: string | number;
    name?: string | null | undefined;
    avatar?: string | null | undefined;
    email?: string;
    signature?: string;
};
export {};
