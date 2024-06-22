import { Handler } from 'mitt';
export type CallbackDoneFn = (result: any) => Promise<void> | void;
export type CallbackFn = (data?: any, done?: CallbackDoneFn) => Promise<void> | void;
export type CallbackMap = {
    [name: string]: CallbackFn | undefined;
};
export declare function getCallback(type: string): CallbackFn;
export declare function hasCallback(type: string): boolean;
export declare function registerCallback(type: string, callback: CallbackFn | null | undefined): void;
export declare function unregisterCallback(type: string): void;
export declare function triggerCallback(type: string, ...args: [...any[], CallbackDoneFn]): void;
export declare function onRegisterCallback(handler: Handler<{
    type: string;
    callback: CallbackFn;
}>): {
    remove: () => void;
};
export declare function onTriggerCallback(handler: Handler<{
    type: string;
    callback: CallbackFn;
}>): {
    remove: () => void;
};
export declare function onUnregisterCallback(handler: Handler<{
    type: string;
}>): {
    remove: () => void;
};
