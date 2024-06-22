export declare const env: {
    API_V1_BASE_URL: string;
    API_V2_BASE_URL: string;
    EVENTS_API_BASE_URL: string;
    TOOLS_API_V1_BASE_URL: string;
    TOOLS_CDN_BASE_URL: string;
};
export declare function setIsTest(isTest: boolean): void;
export declare function isTest(): boolean;
declare global {
    interface Window {
        Cypress?: unknown;
    }
}
