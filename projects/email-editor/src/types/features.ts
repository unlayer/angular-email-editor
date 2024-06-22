export interface TextEditorCustomButton {
    name: string;
    icon: string;
    text: string;
    onSetup?: () => void;
    onAction: (data: {
        text: string;
    }, callback: (text: string) => void) => void;
}
export interface Features {
    audit?: boolean;
    blocks?: boolean;
    collaboration?: boolean;
    preview?: boolean;
    imageEditor?: {
        enabled: boolean;
        tools?: {
            resize?: boolean;
        };
    } | boolean;
    preheaderText?: boolean;
    stockImages?: {
        enabled: true;
        safeSearch: true;
        defaultSearchTerm: string;
    } | boolean;
    userUploads?: boolean;
    undoRedo?: boolean;
    textEditor?: {
        spellChecker?: boolean;
        tables?: boolean;
        cleanPaste?: boolean | 'basic' | 'confirm';
        emojis?: boolean;
        textDirection?: boolean | null;
        inlineFontControls?: boolean;
        defaultFontSize?: string;
        customButtons?: TextEditorCustomButton[];
    };
    colorPicker?: {
        presets?: string[];
    };
    legacy?: {
        disableHoverButtonColors?: boolean;
    };
    inboxPreviews?: boolean;
    pageAnchors?: boolean;
    svgImageUpload?: boolean;
    smartMergeTags?: boolean;
    ai?: boolean | {
        smartHeadings?: boolean;
        smartButtons?: boolean;
        magicImage?: boolean;
        smartText?: boolean;
    };
    sendTestEmail?: boolean;
}
export declare function setFeatures(newFeatures: Features): void;
export declare function setOverrideFeatures(overrideFeatures: Features): void;
export declare function overrideFeatures(newOverrideFeatures: Features): void;
export declare function getFeatures(): Features;
export declare function getFeature(path: string | string[]): any;
export declare function hasFeature(path: string | string[]): boolean;
