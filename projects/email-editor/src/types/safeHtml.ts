export interface SafeHtmlOptions {
    domPurifyOptions?: {};
}
export declare function isSafeHtmlEnabled(): boolean;
export declare function enableSafeHtml(): void;
export declare function setSafeHtmlOptions(options?: SafeHtmlOptions): void;
export declare function toSafeHtmlInternal(html: string, { allowOnClick, force }?: {
    allowOnClick?: boolean;
    force?: boolean;
}): string;
export declare function toSafeHtml(html: string, { allowOnClick, force, domPurifyOptions, }?: {
    allowOnClick?: boolean;
    force?: boolean;
    domPurifyOptions?: SafeHtmlOptions['domPurifyOptions'];
}): string;
