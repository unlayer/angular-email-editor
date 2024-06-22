import { DisplayMode, JSONTemplate, MergeTags } from './StateTypes';
import { ExportChunksResult, ExportHtmlOptions, ExportHtmlResult, ExportPlainTextOptions, ExportPlainTextResult } from './Config';
import { RootState } from './RootState';
export declare const exportChunks: (state: Pick<RootState, 'displayMode' | 'design' | 'mergeTags'>, options?: {
    amp: boolean;
    onlyFooter?: boolean;
    onlyHeader?: boolean;
}) => ExportChunksResult;
export declare function exportHtml(state: Parameters<typeof exportChunks>[0], options?: ExportHtmlOptions): Promise<ExportHtmlResult>;
export declare function renderHtml(data: JSONTemplate, displayMode?: DisplayMode, options?: (ExportHtmlOptions & {
    addons?: any[];
    mergeTagsSchema?: MergeTags;
    tools?: any[];
}) | undefined): Promise<ExportHtmlResult>;
export declare function exportPlainText(state: Parameters<typeof exportHtml>[0], options?: ExportPlainTextOptions): Promise<ExportPlainTextResult>;
