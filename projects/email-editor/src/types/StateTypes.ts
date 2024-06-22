// import * as Ariakit from '@ariakit/react';
// import { MutableRefObject, ReactInstance } from 'react';
import { State as Design } from './design';
import { CollaborationThread } from './EditorTypes';
import { Theme } from './ThemeTypes';
export type DesignMode = 'live' | 'edit';
export type Device = 'desktop' | 'mobile' | 'tablet';
export type DisplayMode = 'web' | 'email' | 'popup' | 'document';
export type Variant = 'amp' | null;
export type Ui = 'none' | 'visual' | 'classic';
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
export type MergeTagsValues = Record<string, string | number | Record<string, boolean | Array<Record<string, string | number>>>>;
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
export type DisplayConditions = DisplayCondition[];
export type SpecialLink = {
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
export type LinkTypeFieldOption = {
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
    // inputType?: Ariakit.FormInputProps['type'];
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
export type LinkTypes = LinkType[];
export type LinkTypesSharedConfig = Pick<LinkType, 'attrs' | 'fields'>;
export interface CustomFont {
    label: string;
    value: string;
    url: string;
    weights?: number[];
}
export interface CustomFonts {
    [label: string]: CustomFont;
}
export type DesignTag = string;
export interface DesignTags {
    [name: string]: DesignTag;
}
export interface DesignTagsConfig {
    delimiter: [string, string];
}
export type CustomCSS = string | string[] | undefined | null;
export type CustomJS = string | string[] | undefined | null;
export interface Translations {
    [name: string]: object;
}
export type Collection = 'bodies' | 'columns' | 'contents' | 'pages' | 'rows' | 'headers' | 'footers';
export type Container = 'body' | 'row' | 'column' | 'content';
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
    // elementRef: MutableRefObject<ReactInstance | undefined> | null | undefined;
    layerCollection: Location['collection'];
    layerIndex?: Placeholder['index'];
    parentCollection: Location['collection'];
    parentId: Location['id'];
    placeholders: Partial<Record<NonNullable<Placeholder['index']>, Placeholder | undefined>>;
}
export interface Placeholder {
    // elementRef: MutableRefObject<ReactInstance | undefined> | null | undefined;
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
export type ImageSource = 'unsplash' | 'pixabay' | 'pexel' | 'user';
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
export type ArrayItem<T> = T extends (infer I)[] ? I : T extends readonly (infer I)[] ? I : unknown;
export type BodyItem = Array<{
    id: string;
    cells: number[];
    columns: Array<{
        id: string;
        contents: Array<Design['contents']['0']>;
        values: {};
    }>;
    values: {};
}>;
export type JSONTemplate = {
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
export type Fonts = {
    showDefaultFonts?: boolean;
    customFonts?: CustomFont[];
};
export type Icon = {
    name?: string;
    data?: string;
    url?: string;
};
export type AuditTool = {
    type: string;
    name?: string;
};
export type Rule = {
    id: string;
    icon: string | string[] | undefined;
    title: string;
    description: string;
    severity: 'ERROR' | 'WARNING';
};
export type Audit = {
    location?: Location;
    tool?: AuditTool;
} & Rule;
export type Validator = (info: {
    [id: string]: unknown;
    html?: string;
    defaultErrors?: Audit[];
}) => Promise<Audit[]>;
type GroupedAuditError = {
    location: Location;
    tool?: AuditTool;
};
export type GroupedAudit = {
    [id: string]: {
        icon: string;
        title: string;
        description: string;
        errors: GroupedAuditError[];
    };
};
export type AuditApiResult = {
    status: 'FAIL' | 'PASS';
    errors: Audit[];
};
export type Tabs = {
    [tabName: string]: {
        enabled?: boolean;
        type?: string;
        position?: number;
        icon?: string;
        active?: boolean;
    };
};
export type SocialIcon = {
    name: string;
    url: string;
    imgUrl?: string;
};
export type SocialCustomIcon = {
    name: string;
    url: string;
    icons: {
        [key: string]: string;
    }[];
};
export type AppearanceConfig = {
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
export type User = {
    id?: string | number;
    name?: string | null | undefined;
    avatar?: string | null | undefined;
    email?: string;
    signature?: string;
};
export {};
