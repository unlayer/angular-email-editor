declare const _default: import("redux").Reducer<import("redux").CombinedState<{
    configVersion: number;
    initialized: boolean;
    syncVersion: number;
    errorNotice: {
        level: string;
        message: string;
    };
    designMode: import("./types").DesignMode;
    displayMode: import("./types").DisplayMode;
    token: string;
    project: import("./project").ProjectState;
    template: import("./template").State;
    stockTemplate: import("./stockTemplate").State;
    user: import("./user").UserState;
    customCSS: import("./types").CustomCSS;
    customJS: import("./types").CustomJS;
    events: import("./events").State;
    icons: import("./icons").State;
    designTags: import("./types").DesignTags;
    linkTypes: import("./linkTypes").State;
    mergeTags: import("./types").MergeTags;
    specialLinks: import("./types").SpecialLinks;
    displayConditions: import("./types").DisplayConditions;
    customFonts: import("./types").CustomFonts;
    locale: import("../../engine/config/intl").Locale;
    textDirection: import("./textDirection").State;
    translations: import("./types").Translations;
    design: import("./design").State;
    currentSelection: import("./types").Selection | {
        openedPanel: string;
        active: boolean;
        location: import("./types").Location;
        parent: import("./types").Location;
        threadId: number;
    };
    currentPlaceholder: import("./currentPlaceholder").State;
    currentTool: import("./types").Tool;
    measurements: import("./measurements").State;
    currentTab: import("./currentTab").CurrentTabState;
    appearance: import("./appearance").State;
    blocks: import("./blocks").State;
    colors: import("./colors").State;
    images: import("./images").State | {
        allIds: number[];
        byId: Pick<Record<number, import("./types").Image>, never>;
        total: number;
        page: number;
        perPage?: number;
        hasMore?: boolean;
        isLoading?: boolean;
        searchText?: string;
    };
    collaboration: import("./collaboration").CollaborationState;
    preview: import("./preview").State;
    usage: import("./types").Usage;
    designTagsConfig: import("./types").DesignTagsConfig;
    mergeTagsConfig: import("./types").MergeTagsConfig;
    audit: import("./audit").State;
    inboxPreview: {
        percentage: number;
        hasPendingImages: boolean;
        isLoading: boolean;
        error?: any;
        data: import("./inboxPreview").InboxPreview[];
        id: string;
        lastDesignVersion?: number;
        hasCancelled: boolean;
    };
    tabs: import("./tabs").State;
    suggestions: {
        isLoading: boolean;
        error: any;
        data: {
            [contentId: string]: {
                designVersion: number;
                suggestions: {
                    FRIENDLY: string[];
                    LUXURY: string[];
                    RELAXED: string[];
                    PROFESSIONAL: string[];
                    BOLD: string[];
                    WITTY: string[];
                };
            };
        };
        selectedSuggestion: string;
    };
}>, import("redux").AnyAction>;
export default _default;
