import { Position } from './position';
export type BackgroundImageEditorValue = {
    url: string | undefined;
    width: number | undefined;
    height: number | undefined;
    fullWidth: boolean | undefined;
    size: 'contain' | 'cover' | 'custom' | undefined;
    customSize: [string, string];
    repeat: 'no-repeat' | 'repeat-x' | 'repeat-y' | 'repeat' | undefined;
    position: Position | 'custom' | undefined;
    customPosition: [string, string];
  };

export type BodyValues = {
    backgroundColor: string;
    backgroundImage: BackgroundImageEditorValue;
    contentWidth: string;
    fontFamily: {
        label: string;
        value: string;
    };
    linkStyle: {
        body: boolean;
        linkColor: string;
        linkHoverColor: string;
        linkUnderline: boolean;
        linkHoverUnderline: boolean;
    };
    preheaderText: string;
};
