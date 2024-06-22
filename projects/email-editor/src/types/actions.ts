import { CollaborationThread, CollaborationThreadComment, CollaborationType } from './EditorTypes';
import { Audit, Collection, CustomCSS, CustomFonts, CustomJS, DesignMode, DesignTags, DesignTagsConfig, Device, DisplayConditions, DisplayMode, Icon, Image, LinkTypes, LinkTypesSharedConfig, Location, MergeTags, MergeTagsConfig, Placeholder, SpecialLinks, Tabs, Translations, Usage } from './TypesTypes';
import { FontList } from './fonts';
import { Locale, TextDirection } from './intl';

export declare const noop: import("typesafe-actions/dist/types").NoArgCreator<"NOOP">;
export declare const initEditor: import("typesafe-actions/dist/create-async-action").AsyncActionBuilder<"INIT_EDITOR_START", "INIT_EDITOR_FINISH", "", undefined, undefined, never>;
export declare const bumpConfigVersion: import("typesafe-actions/dist/types").NoArgCreator<"BUMP_CONFIG_VERSION">;
export declare const bumpSyncVersion: import("typesafe-actions/dist/types").NoArgCreator<"BUMP_SYNC_VERSION">;
export declare const setErrorNotice: import("typesafe-actions/dist/types").PayloadCreator<"SET_ERROR_NOTICE", {
    level: string;
    message: string;
}>;
export declare const clearErrorNotice: import("typesafe-actions/dist/types").NoArgCreator<"CLEAR_ERROR_NOTICE">;
export declare const setDisplayMode: import("typesafe-actions/dist/types").PayloadCreator<"SET_DISPLAY_MODE", DisplayMode>;
export declare const setDesignMode: import("typesafe-actions/dist/types").PayloadCreator<"SET_DESIGN_MODE", DesignMode>;
export declare const setDesignId: import("typesafe-actions/dist/types").PayloadCreator<"SET_DESIGN_ID", string>;
export declare const loadProject: import("typesafe-actions/dist/create-async-action").AsyncActionBuilder<"LOAD_PROJECT_REQUEST", "LOAD_PROJECT_SUCCESS", "LOAD_PROJECT_FAILURE", number, {
    id: number;
    name: string;
    storage: boolean;
    tools: import("./TypesTypes").Tool[];
    fonts: FontList;
    mergeTags: import("./TypesTypes").MergeTag[];
    subscription: {
        status: string;
        expired: boolean;
        entitlements: Record<any, any>;
        items: Record<any, object>;
        addons: Record<any, object>;
    };
}, {
    error: Error;
}>;
export declare const loadUser: import("typesafe-actions/dist/create-async-action").AsyncActionBuilder<"LOAD_USER_REQUEST", "LOAD_USER_SUCCESS", "LOAD_USER_FAILURE", object, object, object>;
export declare const setLinkTypesSharedConfig: import("typesafe-actions/dist/types").PayloadCreator<"SET_LINK_TYPES_SHARED_CONFIG", LinkTypesSharedConfig>;
export declare const setLinkTypes: import("typesafe-actions/dist/types").PayloadCreator<"SET_LINK_TYPES", LinkTypes>;
export declare const setMergeTags: import("typesafe-actions/dist/types").PayloadCreator<"SET_MERGE_TAGS", MergeTags>;
export declare const setMergeTagsIfEmpty: import("typesafe-actions/dist/types").PayloadCreator<"SET_MERGE_TAGS_IF_EMPTY", MergeTags>;
export declare const setDisplayConditions: import("typesafe-actions/dist/types").PayloadCreator<"SET_DISPLAY_CONDITIONS", DisplayConditions>;
export declare const setSpecialLinks: import("typesafe-actions/dist/types").PayloadCreator<"SET_SPECIAL_LINKS", SpecialLinks>;
export declare const setCustomFonts: import("typesafe-actions/dist/types").PayloadCreator<"SET_CUSTOM_FONTS", CustomFonts>;
export declare const setDesignTags: import("typesafe-actions/dist/types").PayloadCreator<"SET_DESIGN_TAGS", DesignTags>;
export declare const setCustomCSS: import("typesafe-actions/dist/types").PayloadCreator<"SET_CUSTOM_CSS", CustomCSS>;
export declare const setCustomJS: import("typesafe-actions/dist/types").PayloadCreator<"SET_CUSTOM_JS", CustomJS>;
export declare const setLocale: import("typesafe-actions/dist/types").PayloadCreator<"SET_LOCALE", Locale>;
export declare const setTextDirection: import("typesafe-actions/dist/types").PayloadCreator<"SET_TEXT_DIRECTION", TextDirection>;
export declare const setTranslations: import("typesafe-actions/dist/types").PayloadCreator<"SET_TRANSLATIONS", Translations>;
export declare const createEvent: import("typesafe-actions/dist/create-async-action").AsyncActionBuilder<"CREATE_EVENT_REQUEST", "CREATE_EVENT_SUCCESS", "CREATE_EVENT_FAILURE", object, object, object>;
export declare const loadTemplate: import("typesafe-actions/dist/create-async-action").AsyncActionBuilder<"LOAD_TEMPLATE_REQUEST", "LOAD_TEMPLATE_SUCCESS", "LOAD_TEMPLATE_FAILURE", object, object, object>;
export declare const loadStockTemplate: import("typesafe-actions/dist/create-async-action").AsyncActionBuilder<"LOAD_STOCK_TEMPLATE_REQUEST", "LOAD_STOCK_TEMPLATE_SUCCESS", "LOAD_STOCK_TEMPLATE_FAILURE", object, object, object>;
export declare const loadIcon: import("typesafe-actions/dist/create-async-action").AsyncActionBuilder<"LOAD_ICON_REQUEST", "LOAD_ICON_SUCCESS", "LOAD_ICON_FAILURE", {
    icon: string;
    size?: string;
}, Icon, {
    icon: any;
    error: Error;
}>;
export declare const setDesignHtml: import("typesafe-actions/dist/types").PayloadCreator<"SET_DESIGN_HTML", string>;
export declare const setDefaultDevice: import("typesafe-actions/dist/types").PayloadCreator<"SET_DEFAULT_DEVICE", Device>;
export declare const setCurrentDevice: import("typesafe-actions/dist/types").PayloadCreator<"SET_CURRENT_DEVICE", Device>;
export declare const loadDesign: import("typesafe-actions/dist/types").PayloadCreator<"LOAD_DESIGN", {
    data: any;
    isProjectLoadad: boolean;
    designTags: DesignTags;
    designMode: DesignMode;
    designTagsConfig: DesignTagsConfig;
    displayMode: DisplayMode;
}>;
export declare const updateValue: import("typesafe-actions/dist/types").PayloadCreator<"UPDATE_VALUE", {
    location: Location;
    name: string;
    value: any;
    data?: object;
    deviceName?: Device;
    skipFromUndoRedo?: boolean;
}>;
export declare const insertItem: import("typesafe-actions/dist/types").PayloadCreator<"INSERT_ITEM", {
    id?: string;
    collection: Collection;
    data: {
        [key: string]: any;
        id?: string | undefined;
    };
    toParent: Location;
    placeholderIndex?: Placeholder['index'];
}>;
export declare const insertEmbeddedItem: import("typesafe-actions/dist/types").PayloadCreator<"INSERT_EMBEDDED_ITEM", {
    id?: string;
    collection: Collection;
    data: {
        [key: string]: any;
        id?: string | undefined;
    };
    parentLocation: Location;
    parentEmbeddedPath: string;
}>;
export declare const removeItem: import("typesafe-actions/dist/types").PayloadCreator<"REMOVE_ITEM", {
    location: Location;
    parent: Location;
}>;
export declare const removeEmbeddedItem: import("typesafe-actions/dist/types").PayloadCreator<"REMOVE_EMBEDDED_ITEM", {
    location: Location;
    parentLocation: Location;
    parentEmbeddedPath: string;
}>;
export declare const relocateItem: import("typesafe-actions/dist/types").PayloadCreator<"RELOCATE_ITEM", {
    location: Location;
    fromParent: Location;
    toParent: Location;
    placeholderIndex: Placeholder['index'];
}>;
export declare const cloneItem: import("typesafe-actions/dist/types").PayloadCreator<"CLONE_ITEM", {
    location: Location;
    parent: Location;
}>;
export declare const updateRow: import("typesafe-actions/dist/types").PayloadCreator<"UPDATE_ROW", {
    location: Location;
    cells: number[];
    columnIdsToRemove?: number[];
    skipFromUndoRedo?: boolean;
}>;
export declare const switchVersion: import("typesafe-actions/dist/types").PayloadCreator<"SWITCH_VERSION", {
    index: number;
}>;
export declare const setCurrentSelection: import("typesafe-actions/dist/types").PayloadCreator<"SET_CURRENT_SELECTION", {
    active?: boolean;
    location: Location | null;
    parent: Location | null;
    threadId?: CollaborationThread['id'] | null;
}>;
export declare const removeCurrentSelection: import("typesafe-actions/dist/types").NoArgCreator<"REMOVE_CURRENT_SELECTION">;
export declare const setCurrentPlaceholder: import("typesafe-actions/dist/types").PayloadCreator<"SET_CURRENT_PLACEHOLDER", Omit<Placeholder, "active" | "elementRef">>;
export declare const removeCurrentPlaceholder: import("typesafe-actions/dist/types").NoArgCreator<"REMOVE_CURRENT_PLACEHOLDER">;
export declare const setCurrentTool: import("typesafe-actions/dist/types").PayloadCreator<"SET_CURRENT_TOOL", {
    type: string;
    slug: string | undefined;
}>;
export declare const removeCurrentTool: import("typesafe-actions/dist/types").NoArgCreator<"REMOVE_CURRENT_TOOL">;
export declare const setCurrentTab: import("typesafe-actions/dist/types").PayloadCreator<"SET_CURRENT_TAB", {
    name: string | null;
    collapsed?: boolean;
}>;
export declare const toggleToolsPanelVisibility: import("typesafe-actions/dist/types").PayloadCreator<"TOGGLE_TOOLS_PANEL_VISIBILITY", boolean | void>;
export declare const setAppearance: import("typesafe-actions/dist/types").PayloadCreator<"SET_APPEARANCE", {
    actionBar?: {
        placement?: "top" | "bottom" | "top_left" | "top_right" | "bottom_left" | "bottom_right";
    };
    features?: {
        preview?: boolean;
    };
    loader?: {
        url?: string;
        html?: string;
        css?: string;
    };
    panels?: {
        tools?: {
            dock?: "left" | "right";
            collapsible?: boolean;
            tabs?: {
                body?: {
                    visible?: boolean;
                };
            };
        };
    };
    theme?: "dark" | "light" | "classic_light" | "classic_dark" | "modern_light" | "modern_dark";
}>;
export declare const setBodyValues: import("typesafe-actions/dist/types").PayloadCreator<"SET_BODY_VALUES", {
    bodyId?: number;
    bodyValues: Partial<BodyValues>;
}>;
export declare const setDesignTagsConfig: import("typesafe-actions/dist/types").PayloadCreator<"SET_DESIGN_TAGS_CONFIG", DesignTagsConfig>;
export declare const setMergeTagsConfig: import("typesafe-actions/dist/types").PayloadCreator<"SET_MERGE_TAGS_CONFIG", MergeTagsConfig>;
export declare const loadBlocks: import("typesafe-actions/dist/create-async-action").AsyncActionBuilder<"LOAD_SAVED_ROWS_REQUEST", "LOAD_SAVED_ROWS_SUCCESS", "LOAD_SAVED_ROWS_FAILURE", object, object[], object>;
export declare const createBlock: import("typesafe-actions/dist/create-async-action").AsyncActionBuilder<"CREATE_SAVED_ROW_REQUEST", "CREATE_SAVED_ROW_SUCCESS", "CREATE_SAVED_ROW_FAILURE", object, {
    data: object;
}, object>;
export declare const updateBlock: import("typesafe-actions/dist/create-async-action").AsyncActionBuilder<"UPDATE_SAVED_ROW_REQUEST", "UPDATE_SAVED_ROW_SUCCESS", "UPDATE_SAVED_ROW_FAILURE", object, {
    data: object;
}, object>;
export declare const deleteBlock: import("typesafe-actions/dist/create-async-action").AsyncActionBuilder<"DELETE_SAVED_ROW_REQUEST", "DELETE_SAVED_ROW_SUCCESS", "DELETE_SAVED_ROW_FAILURE", object, {
    data: object;
}, object>;
export declare const loadUserUploads: import("typesafe-actions/dist/create-async-action").AsyncActionBuilder<"LOAD_USER_UPLOADS_REQUEST", "LOAD_USER_UPLOADS_SUCCESS", "LOAD_USER_UPLOADS_FAILURE", {
    projectId: number;
    userId: string | number;
    page: number;
    perPage: number | undefined;
    source: (string | null)[];
}, {
    data: Image[];
    page?: number;
    perPage?: number;
    hasMore?: boolean;
    total?: number;
    _tryAppendingInsteadOfReplacing?: boolean;
}, {
    error?: any;
}>;
export declare const addUploadedImageOptimistic: import("typesafe-actions/dist/types").PayloadCreator<"ADD_UPLOADED_IMAGE_OPTIMISTIC", {
    image: Omit<Image, 'optimistic'>;
    position: 'first' | 'last';
}>;
export declare const deleteUploadedImage: import("typesafe-actions/dist/create-async-action").AsyncActionBuilder<"DELETE_UPLOADED_IMAGE_REQUEST", "DELETE_UPLOADED_IMAGE_SUCCESS", "DELETE_UPLOADED_IMAGE_FAILURE", {
    id: string | number;
}, {
    id: string | number;
}, {
    error: any;
}>;
export declare const setImageSearchText: import("typesafe-actions/dist/types").PayloadCreator<"SET_UPLOADED_IMAGE_SEARCH_TEXT", {
    text?: string;
}>;
export declare const audit: import("typesafe-actions/dist/create-async-action").AsyncActionBuilder<"AUDIT_REQUEST", "AUDIT_SUCCESS", "AUDIT_FAILURE", undefined, {
    designVersion: number | null;
    audits: Audit[];
}, {
    error: any;
}>;
export declare const setRowsCategory: import("typesafe-actions/dist/types").PayloadCreator<"SET_ROWS_CATEGORY", string>;
export declare const setRowsSearch: import("typesafe-actions/dist/types").PayloadCreator<"SET_ROWS_SEARCH", string>;
export declare const clearRowsSearch: import("typesafe-actions/dist/types").NoArgCreator<"CLEAR_ROWS_SEARCH">;
export declare const setLastBlock: import("typesafe-actions/dist/types").PayloadCreator<"SET_LAST_SAVED_ROW", object>;
export declare const removeLastBlock: import("typesafe-actions/dist/types").NoArgCreator<"REMOVE_LAST_SAVED_ROW">;
export declare const enterCollaborationMode: import("typesafe-actions/dist/types").PayloadCreator<"ENTER_COLLABORATION_MODE", {
    openSelectedThread?: boolean;
}>;
export declare const exitCollaborationMode: import("typesafe-actions/dist/types").NoArgCreator<"EXIT_COLLABORATION_MODE">;
export declare const resetCollaborationFilters: import("typesafe-actions/dist/types").NoArgCreator<"RESET_COLLABORATION_FILTERS">;
export declare const setCollaborationFilter: import("typesafe-actions/dist/types").PayloadCreator<"SET_COLLABORATION_FILTER", {
    filter: CollaborationFilter;
    enabled: boolean;
    replace?: boolean;
}>;
export declare const setCollaborationTypeFilter: import("typesafe-actions/dist/types").PayloadCreator<"SET_COLLABORATION_TYPE_FILTER", {
    type: CollaborationType;
    enabled: boolean;
    replace?: boolean;
}>;
export declare const setCurrentCollaborationType: import("typesafe-actions/dist/types").PayloadCreator<"SET_CURRENT_COLLABORATION_TYPE", CollaborationType>;
export declare const loadCollaborationThreads: import("typesafe-actions/dist/create-async-action").AsyncActionBuilder<"LOAD_COLLABORATION_THREADS_REQUEST", "LOAD_COLLABORATION_THREADS_SUCCESS", "LOAD_COLLABORATION_THREADS_FAILURE", {
    projectId: number;
    designId: string;
}, {
    data: CollaborationThread[];
}, {
    error?: Error;
}>;
export declare const loadCollaborationThreadComments: import("typesafe-actions/dist/create-async-action").AsyncActionBuilder<"LOAD_COLLABORATION_THREAD_COMMENTS_REQUEST", "LOAD_COLLABORATION_THREAD_COMMENTS_SUCCESS", "LOAD_COLLABORATION_THREAD_COMMENTS_FAILURE", {
    threadId: CollaborationThread['id'];
}, {
    data: CollaborationThreadComment[];
    threadId: CollaborationThread['id'];
}, {
    threadId: CollaborationThread['id'];
    error?: Error;
}>;
type NewCollaborationThreadComment = Omit<CollaborationThreadComment, 'id' | 'createdAt' | 'updatedAt'>;
type NewCollaborationThread = Omit<CollaborationThread, 'id' | 'firstComment' | 'commentCount' | 'status' | 'createdAt' | 'updatedAt'> & {
    text: NewCollaborationThreadComment['text'];
};
export declare const createCollaborationThread: import("typesafe-actions/dist/create-async-action").AsyncActionBuilder<"CREATE_COLLABORATION_THREAD_REQUEST", "CREATE_COLLABORATION_THREAD_SUCCESS", "CREATE_COLLABORATION_THREAD_FAILURE", {
    thread: NewCollaborationThread;
    optimistic: {
        threadId: CollaborationThread['id'];
        commentId: CollaborationThreadComment['id'];
    };
}, {
    thread: CollaborationThread;
    optimistic: {
        threadId: CollaborationThread['id'];
        commentId: CollaborationThreadComment['id'];
    };
}, {
    error?: Error;
    thread: Partial<NewCollaborationThread> | undefined;
    optimistic: {
        threadId: CollaborationThread['id'];
        commentId: CollaborationThreadComment['id'];
    };
}>;
export declare const updateCollaborationThread: import("typesafe-actions/dist/create-async-action").AsyncActionBuilder<"UPDATE_COLLABORATION_THREAD_REQUEST", "UPDATE_COLLABORATION_THREAD_SUCCESS", "UPDATE_COLLABORATION_THREAD_FAILURE", {
    threadId: CollaborationThread['id'];
    data: Pick<CollaborationThread, 'status'>;
}, {
    thread: CollaborationThread;
}, {
    error?: Error;
    threadId: CollaborationThread['id'];
}>;
export declare const deleteCollaborationThread: import("typesafe-actions/dist/create-async-action").AsyncActionBuilder<"DELETE_COLLABORATION_THREAD_REQUEST", "DELETE_COLLABORATION_THREAD_SUCCESS", "DELETE_COLLABORATION_THREAD_FAILURE", {
    threadId: CollaborationThread['id'];
}, {
    threadId: CollaborationThread['id'];
}, {
    threadId: CollaborationThread['id'];
    error?: Error;
}>;
export declare const createCollaborationThreadComment: import("typesafe-actions/dist/create-async-action").AsyncActionBuilder<"CREATE_COLLABORATION_THREAD_COMMENT_REQUEST", "CREATE_COLLABORATION_THREAD_COMMENT_SUCCESS", "CREATE_COLLABORATION_THREAD_COMMENT_FAILURE", {
    comment: NewCollaborationThreadComment;
    optimistic: {
        commentId: CollaborationThreadComment['id'];
    };
}, {
    comment: CollaborationThreadComment;
    optimistic: {
        commentId: CollaborationThreadComment['id'];
    };
}, {
    error?: Error;
    comment: Partial<Partial<NewCollaborationThreadComment>> | undefined;
    optimistic: {
        commentId: CollaborationThreadComment['id'];
    };
}>;
export declare const updateCollaborationThreadComment: import("typesafe-actions/dist/create-async-action").AsyncActionBuilder<"UPDATE_COLLABORATION_THREAD_COMMENT_REQUEST", "UPDATE_COLLABORATION_THREAD_COMMENT_SUCCESS", "UPDATE_COLLABORATION_THREAD_COMMENT_FAILURE", {
    commentId: CollaborationThreadComment['id'];
    data: Pick<CollaborationThreadComment, 'text'>;
    threadId: CollaborationThread['id'];
}, {
    comment: CollaborationThreadComment;
}, {
    error?: Error;
    commentId: CollaborationThreadComment['id'];
    threadId: CollaborationThread['id'];
}>;
export declare const deleteCollaborationThreadComment: import("typesafe-actions/dist/create-async-action").AsyncActionBuilder<"DELETE_COLLABORATION_THREAD_COMMENT_REQUEST", "DELETE_COLLABORATION_THREAD_COMMENT_SUCCESS", "DELETE_COLLABORATION_THREAD_COMMENT_FAILURE", {
    commentId: CollaborationThreadComment['id'];
}, {
    commentId: CollaborationThreadComment['id'];
}, {
    commentId: CollaborationThreadComment['id'];
    error?: Error;
}>;
export declare const showPreview: import("typesafe-actions/dist/types").PayloadCreator<"SHOW_PREVIEW", {
    device?: Device;
    resolution?: number;
}>;
export declare const hidePreview: import("typesafe-actions/dist/types").NoArgCreator<"HIDE_PREVIEW">;
export declare const undo: import("typesafe-actions/dist/types").NoArgCreator<"UNDO">;
export declare const redo: import("typesafe-actions/dist/types").NoArgCreator<"REDO">;
export declare const saveColor: import("typesafe-actions/dist/types").PayloadCreator<"SAVE_COLOR", string>;
export declare const setUsage: import("typesafe-actions/dist/types").PayloadCreator<"SET_USAGE", Usage>;
export declare const setMeasurements: import("typesafe-actions/dist/types").PayloadCreator<"SET_MEASUREMENTS", {
    location: Location;
    measurements: {
        width?: number;
        height?: number;
    };
}>;
export declare const setIsResizingColumns: import("typesafe-actions/dist/types").PayloadCreator<"SET_IS_RESIZING_COLUMNS", boolean>;
export declare const setToken: import("typesafe-actions/dist/types").PayloadCreator<"SET_TOKEN", string>;
export declare const clearToken: import("typesafe-actions/dist/types").NoArgCreator<"CLEAR_TOKEN">;
export declare const setCustomToolAudit: import("typesafe-actions/dist/types").PayloadCreator<"SET_CUSTOM_TOOL_AUDIT", Audit[]>;
export declare const setAuditIsLoading: import("typesafe-actions/dist/types").PayloadCreator<"SET_AUDIT_IS_LOADING", boolean>;
export declare const createInboxPreview: import("typesafe-actions/dist/create-async-action").AsyncActionBuilder<"CREATE_INBOX_PREVIEW_REQUEST", "CREATE_INBOX_PREVIEW_SUCCESS", "CREATE_INBOX_PREVIEW_FAILURE", {
    lastDesignVersion: number;
}, {
    id: string;
    data: InboxPreview[];
    hasPendingImages: boolean;
    percentage: number;
}, {
    error: any;
}>;
export declare const clearInboxPreview: import("typesafe-actions/dist/types").NoArgCreator<"CLEAR_INBOX_PREVIEW">;
export declare const setInboxPreviewPercentage: import("typesafe-actions/dist/types").PayloadCreator<"SET_INBOX_PREVIEW_PERCENTAGE", number>;
export declare const setInboxPreviewHasCancelled: import("typesafe-actions/dist/types").PayloadCreator<"SET_INBOX_PREVIEW_HAS_CANCELLED", boolean>;
export declare const updateTabs: import("typesafe-actions/dist/types").PayloadCreator<"UPDATE_TABS", Tabs>;
export declare const setOpenedPanel: import("typesafe-actions/dist/types").PayloadCreator<"SET_OPENED_PANEL", {
    openedPanel: string | null;
}>;
export declare const getContentSuggestions: import("typesafe-actions/dist/create-async-action").AsyncActionBuilder<"GET_CONTENT_SUGGESTIONS_REQUEST", "GET_CONTENT_SUGGESTIONS_SUCCESS", "GET_CONTENT_SUGGESTIONS_FAILURE", {}, {
    tone: TONES;
    contentId: string;
    suggestions: string[];
    designVersion: number;
}, {
    error: any;
}>;
export declare const removeContentSuggestions: import("typesafe-actions/dist/types").PayloadCreator<"REMOVE_CONTENT_SUGGESTIONS", {
    contentId: string;
}>;
export declare const clearAllSuggestions: import("typesafe-actions/dist/types").NoArgCreator<"CLEAR_ALL_SUGGESTIONS">;
export declare const setSelectedSuggestion: import("typesafe-actions/dist/types").PayloadCreator<"SET_SELECTED_SUGGESTION", {
    suggestion: string | null;
}>;
export declare const clearSuggestionsError: import("typesafe-actions/dist/types").NoArgCreator<"CLEAR_SUGGESTIONS_ERROR">;
export declare const selectDeviceResolution: import("typesafe-actions/dist/types").PayloadCreator<"SELECT_DEVICE_RESOLUTION", number>;
export {};
