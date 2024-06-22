export type Message = object;
export interface MessageData {
    action: string;
    callbackId: number;
    doneId: number;
    result: unknown | undefined;
    resultArgs: unknown[] | undefined;
}
export declare class Frame {
    id: number;
    ready: boolean;
    iframe: HTMLIFrameElement | undefined;
    messages: any[];
    callbackId: number;
    callbacks: {
        [key: number]: Function | undefined;
    };
    constructor(src: string);
    createIframe(src: string): HTMLIFrameElement;
    destroy: () => void;
    appendTo(el: Element): void;
    onWindowMessage: (event: MessageEvent<any>) => void;
    postMessage(action: string, message: Message): void;
    withMessage(action: string, message: Message | undefined, callback?: Function): void;
    _preprocessMessageFunctions(message: Message): Message;
    preprocessMessage(message: Message): Message;
    scheduleMessage(message: Message): void;
    flushMessages(): void;
    handleMessage({ action, callbackId, doneId, result, resultArgs }: MessageData): void;
    receiveMessage(event: any): void;
}
export declare const disableMultipleEditors: () => void;
export declare const disableOriginalFunctionReferences: () => void;
declare global {
    interface Window {
        __unlayer_lastFrameId: number;
        __unlayer_multipleEditors: boolean;
        __unlayer_originalFunctionReferences: boolean;
    }
}
