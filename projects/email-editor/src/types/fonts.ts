export interface Font {
    defaultFont?: boolean;
    type?: 'google' | string;
    label: string;
    value: string;
    url?: string;
    weights?: number[];
}
export type FontList = Font[];
export interface FontConfig {
    showDefaultFonts?: boolean;
    customFonts?: FontList;
}
export interface FontOptions {
    showCustomFonts?: boolean;
    showGlobalFont?: boolean;
}
export declare function loadFontConfig(newFontConfig?: FontConfig): void;
export declare function disableBuiltinFonts(): void;
export declare function setFonts(newFonts?: FontList): void;
export declare function getFonts(options?: FontOptions): FontList;
export declare function getFontsVersion(): number;
export declare function getCustomFontsCount(): number;
export declare const defaultFontWeights: number[];
