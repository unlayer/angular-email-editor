import type {
  UnlayerEmbed,
  UnlayerEditor,
  UnlayerOptions as UnlayerOptionsType,
  JSONTemplate as JSONTemplateType,
  ToolsConfig as ToolsConfigInterface,
} from '@unlayer/types';

export type Unlayer = UnlayerEmbed;
export type UnlayerOptions = UnlayerOptionsType;
export type Editor = UnlayerEditor;

export type ToolsConfig = ToolsConfigInterface;

export type JSONTemplate = JSONTemplateType;

export interface EditorRef {
  editor: Editor | null;
}

declare global {
  interface Window {
    __unlayer_lastEditorId: number;
  }
}