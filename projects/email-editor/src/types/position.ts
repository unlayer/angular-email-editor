import { DisplayMode } from './StateTypes';
export declare const ENABLE_BACKGROUND_POSITION_FOR_EMAILS = true;
export type Position = 'top-left' | 'top-center' | 'top-right' | 'center-left' | 'center' | 'center-right' | 'bottom-left' | 'bottom-center' | 'bottom-right';
export declare function positionToMarginArray(position: Position | undefined): string[] | readonly [0, "auto", "auto", 0] | readonly [0, "auto", "auto", "auto"] | readonly [0, 0, "auto", "auto"] | readonly ["auto", "auto", "auto", 0] | readonly ["auto"] | readonly ["auto", 0, "auto", "auto"] | readonly ["auto", "auto", 0, 0] | readonly ["auto", "auto", 0, "auto"] | readonly ["auto", 0, 0, "auto"];
export declare function positionToBackgroundPosition(position: Position | undefined): 'top left' | 'top center' | 'top right' | 'center left' | 'center center' | 'center right' | 'bottom left' | 'bottom center' | 'bottom right' | 'auto auto';
export declare function valuesToBackgroundPositionCSS(values: {
    position: Position | 'custom' | undefined;
    customPosition: [string, string] | undefined;
}, { displayMode }: {
    displayMode: DisplayMode;
}): string;
export declare function positionToPercentages(position: Position | 'custom' | undefined): [x: string, y: string] | undefined;
export declare function normalizePosition(position: 'top' | 'top-left' | 'top-center' | 'top-right' | 'center' | 'center-left' | 'center-center' | 'center-right' | 'center-top' | 'center-bottom' | 'bottom' | 'bottom-left' | 'bottom-center' | 'bottom-right' | 'left' | 'left-top' | 'left-center' | 'left-bottom' | 'right' | 'right-top' | 'right-center' | 'right-bottom' | 'custom' | undefined): Position | undefined;
