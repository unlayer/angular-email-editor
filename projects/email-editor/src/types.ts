import { Editor as EditorClass } from './types/Editor';
import {
  JSONTemplate as JSONTemplateType,
  ToolsConfig as ToolsConfigInterface,
} from './types/StateTypes';

import { Config } from './types/Config';

class Embed extends EditorClass {
  createEditor(config: Config) {
    return new EditorClass(config);
  }
}

export default new Embed();


export type Unlayer = InstanceType<typeof Embed>;
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