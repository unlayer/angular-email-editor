export interface EditorSettings {
    minHeaders?: number;
    maxHeaders?: number;
    minFooters?: number;
    maxFooters?: number;
    minRows?: number;
    maxRows?: number;
    contentType?: 'page' | 'block';
    autoSelectOnDrop: boolean;
    columns?: boolean;
    confirmOnDelete?: boolean;
}
export declare function overrideEditorSettings(editorSettingsOverrides: EditorSettings): void;
export declare function getEditorSettings(): EditorSettings;
