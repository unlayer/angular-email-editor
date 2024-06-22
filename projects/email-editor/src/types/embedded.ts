import { Handler } from 'mitt';
export type EmbeddedTabChangeParams = {
    optionGroupName: string;
    parent: {
        location: Location;
    };
    item: {
        id: string;
        index: number;
    };
};
export declare function emitEmbeddedTabChange(params: EmbeddedTabChangeParams): void;
export declare function onEmbeddedTabChange(handler: Handler<EmbeddedTabChangeParams>): {
    remove: () => void;
};
export declare function onEmbeddedTabChange(handler: any): {
    remove: () => void;
};
export declare function getEmbeddedTabCache(parentLocation: EmbeddedTabChangeParams['parent']['location']): string;
