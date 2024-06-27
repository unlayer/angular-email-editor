import { AppearanceConfig, Device, DisplayMode, Location, Variant } from './StateTypes';
export declare type LoadingState = 'not-loaded' | 'loading' | 'loaded';
export declare type UpdatingState = 'updating' | undefined;
export declare type DeletionState = 'deleting' | 'failed' | undefined;
export interface EditorProps<Value, WidgetParams = object> {
    value: Value | undefined;
    defaultValue: Value | undefined;
    updateValue: (newValue: Value | undefined, data?: object, options?: {
        deviceOverride?: Device;
        skipFromUndoRedo?: boolean;
    }) => void;
    name: string;
    data?: object;
    widgetParams?: WidgetParams;
    displayMode: DisplayMode;
    label?: string;
    location: Location;
    values: {
        [key: string]: unknown;
        containerPadding?: string;
    };
    rootValues: {
        [key: string]: any;
        _override?: {
            [key: string]: any;
        };
    };
    appearance: AppearanceConfig;
    entitlements: {
        audit?: boolean;
        allowedDomains?: number;
        branding?: boolean;
        collaboration?: boolean;
        displayConditions?: boolean;
        customBlocks?: number;
        customCSS?: boolean;
        customFonts?: boolean;
        customJS?: boolean;
        customTools?: number;
        customTabs?: number;
        imageEditor?: boolean;
        userUploads?: boolean;
        stockImages?: boolean;
        uploadMaxSize?: number;
    };
    item: {
        id: string;
        type?: string;
        slug?: string;
        location?: Location;
        values?: Record<string, any>;
    };
    project: object;
    onImageClick?: (url: string) => void;
}
export declare type HeadArguments = [
    Record<string, any>,
    Record<string, any>,
    {
        displayMode: DisplayMode;
        embeddedValues: Record<string, any>;
        isViewer: boolean;
        variant: Variant;
        type?: string;
    }
];
export interface Head {
    css?: (...args: HeadArguments) => string | void;
    js?: (...args: HeadArguments) => string | void;
    tags?: (...args: HeadArguments) => string[] | void;
}
export declare type CollaborationFilter = 'only_yours' | 'resolved';
export interface CollaborationFilterDetails {
    label?: string;
}
export declare type CollaborationType = 'feedback' | 'idea' | 'question' | 'urgent';
export interface CollaborationTypeDetails {
    label?: string;
    icon: any;
    color: string | undefined;
}
export declare type CollaborationThreadStatus = 'open' | 'resolved';
export interface CollaborationThread {
    id: number;
    projectId: string | number;
    designId: string;
    user: CollaborationUser;
    itemId: string;
    type: CollaborationType;
    status: CollaborationThreadStatus | null | undefined;
    commentCount: number;
    firstComment: CollaborationThreadComment;
    createdAt: string;
    updatedAt: string;
}
export interface CollaborationThreadComment {
    id: number;
    threadId: CollaborationThread['id'];
    user: CollaborationUser;
    text: string;
    createdAt: string;
    updatedAt: string;
}
export interface CollaborationUser {
    id: string;
    name: string | undefined;
    avatar: string | undefined;
}
export declare type DeepPartial<T> = T extends object ? {
    [P in keyof T]?: DeepPartial<T[P]>;
} : T;
