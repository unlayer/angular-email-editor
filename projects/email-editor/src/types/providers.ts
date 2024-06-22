import { Handler } from 'mitt';
export type ProviderData = any;
export type ProviderDoneFn = (result: any) => void;
export type ProviderFn = (data?: ProviderData, done?: ProviderDoneFn) => void;
export type ProviderMap = {
    [name: string]: ProviderFn | undefined;
};
export declare function hasProvider(type: string): boolean;
export declare function registerProvider(type: string, provider: ProviderFn | null | undefined): void;
export declare function unregisterProvider(type: string): void;
export declare function triggerProvider(type: string, data?: ProviderData, done?: ProviderDoneFn): void;
export declare function onRegisterProvider(handler: Handler<{
    type: string;
    provider: ProviderFn;
}>): {
    remove: () => void;
};
export declare function onTriggerProvider(handler: Handler<{
    type: string;
    provider: ProviderFn;
}>): {
    remove: () => void;
};
export declare function onUnregisterProvider(handler: Handler<{
    type: string;
}>): {
    remove: () => void;
};
