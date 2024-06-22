import { Handler } from 'mitt';
export type UnlayerEditorEvent = {
    name: 'POPUP_CLOSE_BUTTON_CLICKED';
    payload?: string;
} | {
    name: 'POPUP_OVERLAY_CLICKED';
    payload?: number;
};
export declare function emit<EventName extends UnlayerEditorEvent['name'], Event extends UnlayerEditorEvent & {
    name: EventName;
    // @ts-ignore
}>(name: EventName, payload: Event['payload']): void;
export declare function on<EventName extends UnlayerEditorEvent['name'], Event extends UnlayerEditorEvent & {
    name: EventName;
    // @ts-ignore
}>(name: EventName, handler: Handler<Event['payload']>): {
    remove: () => void;
};
