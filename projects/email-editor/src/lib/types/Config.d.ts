import { FontList } from './Fonts';
import { TextDirection } from './Intl';
import { AppearanceConfig, Audit, Device, DisplayConditions, DisplayMode, Fonts, JSONTemplate, LinkTypes, LinkTypesSharedConfig, MergeTags, MergeTagsConfig, MergeTagsValues, SpecialLinks, Tabs, ToolsConfig, User } from './StateTypes';
import { DeepPartial } from './EditorTypes';
export interface Config {
    id?: string;
    className?: string;
    version?: string;
    source?: {
        name: string;
        version: string;
    };
    offline?: boolean;
    render?: boolean;
    amp?: boolean;
    defaultDevice?: Device;
    devices?: Device[];
    designId?: string;
    designMode?: string;
    displayMode?: DisplayMode;
    env?: Record<'API_V1_BASE_URL' | 'API_V2_BASE_URL' | 'EVENTS_API_BASE_URL' | 'TOOLS_API_V1_BASE_URL' | 'TOOLS_CDN_BASE_URL', string | undefined>;
    projectId?: number | null;
    user?: User;
    templateId?: number;
    stockTemplateId?: string;
    loadTimeout?: number;
    safeHtml?: boolean | object;
    safeHTML?: boolean | object;
    options?: object;
    tools?: ToolsConfig;
    excludeTools?: string[];
    blocks?: object[];
    editor?: object;
    fonts?: Fonts;
    linkTypes?: LinkTypes;
    linkTypesSharedConfig?: LinkTypesSharedConfig;
    mergeTags?: MergeTags;
    displayConditions?: DisplayConditions;
    specialLinks?: SpecialLinks;
    designTags?: object;
    customCSS?: string | string[];
    customJS?: string | string[];
    locale?: string;
    textDirection?: TextDirection;
    translations?: object;
    appearance?: DeepPartial<AppearanceConfig>;
    features?: object;
    designTagsConfig?: object;
    mergeTagsConfig?: MergeTagsConfig;
    validator?: (info: {
        html: ExportHtmlResult;
        design: JSONTemplate;
        defaultErrors: Audit[];
    }) => Audit[] | Promise<Audit[]>;
    tabs?: Tabs;
}
export interface SaveDesignOptions {
}
export interface ExportHtmlOptions {
    amp?: boolean;
    cleanup?: boolean;
    textDirection?: TextDirection;
    isPreview?: boolean;
    live?: boolean;
    mergeTags?: MergeTagsValues;
    minify?: boolean;
    popupId?: string;
    title?: string;
    validateAmp?: boolean;
    onlyHeader?: boolean;
    onlyFooter?: boolean;
}
export interface ExportHtmlResult {
    html: string;
    amp: {
        enabled: boolean;
        format: 'AMP' | 'AMP4EMAIL';
        html: string | undefined;
        validation: any;
    };
    chunks: ExportChunksResult;
    design: JSONTemplate;
}
export interface ExportLiveHtmlOptions extends Omit<ExportHtmlOptions, 'live'> {
}
export interface ExportLiveHtmlResult extends ExportHtmlResult {
}
export interface ExportPlainTextOptions extends Omit<ExportHtmlOptions, 'cleanup' | 'minify'> {
    ignorePreheader?: boolean;
}
export interface ExportPlainTextResult {
    text: string;
    design: JSONTemplate;
}
export interface HtmlToPlainTextOptions {
    ignoreLinks?: boolean;
    ignoreImages?: boolean;
}
export interface ExportChunksResult {
    css: string;
    js: string;
    tags: string[];
    fonts: FontList;
    body: any;
}
export interface ExportPlainTextOptions {
    ignoreLinks?: boolean;
    ignoreImages?: boolean;
    ignorePreheader?: boolean;
    mergeTags?: Record<string, string>;
}
export interface ExportFromApiResult {
    design: JSONTemplate;
    url: string | null;
    error?: string;
}
interface BaseExportFromApiOptions {
    mergeTags?: Record<string, string>;
}
export interface ExportImageFromApiOptions extends BaseExportFromApiOptions {
    width?: number;
    height?: number;
    fullPage?: boolean;
    deviceScaleFactor?: number;
}
export interface ExportPdfFromApiOptions extends BaseExportFromApiOptions {
}
export interface ExportZipFromApiOptions extends BaseExportFromApiOptions {
}
export {};
