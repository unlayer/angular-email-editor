/// <reference path="../../../node_modules/unlayer-types/embed.d.ts" />

import Embed from 'embed/index';
import { Editor as EditorClass } from 'embed/Editor';
import {
  JSONTemplate as JSONTemplateType,
  ToolsConfig as ToolsConfigInterface,
} from 'state/types/types';

export type Unlayer = typeof Embed;
export type UnlayerOptions = Parameters<Unlayer['createEditor']>[0];
export type Editor = InstanceType<typeof EditorClass>;

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
