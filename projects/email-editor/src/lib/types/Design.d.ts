import { Location, Device } from './StateTypes';
export interface Entities {
    headers: {
        [id: string]: {
            id: string;
            cells: number[];
            columns: string[];
            location: Location;
            values: Record<string, any>;
        };
    };
    footers: {
        [id: string]: {
            id: string;
            cells: number[];
            columns: string[];
            location: Location;
            values: Record<string, any>;
        };
    };
    pages: {
        [id: string]: {
            id: string;
            body: string;
            location: Location;
            values?: never;
        };
    };
    bodies: {
        [id: string]: {
            id: string;
            rows: string[];
            headers: string[] | undefined;
            footers: string[] | undefined;
            location: Location;
            values: Record<string, any>;
        };
    };
    rows: {
        [id: string]: {
            id: string;
            cells: number[];
            columns: string[];
            location: Location;
            values: Record<string, any>;
        };
    };
    columns: {
        [id: string]: {
            id: string;
            contents: string[];
            location: Location;
            values: Record<string, any>;
        };
    };
    contents: {
        [id: string]: {
            id: string;
            [embeddedSource: string]: any;
            type: string;
            slug?: string;
            location?: Location;
            values: Record<string, any>;
        };
    };
}
export interface State extends Entities {
    id?: string | null;
    ui: 'none' | 'visual' | 'classic';
    currentDevice: Device | null;
    defaultDevice: Device;
    isResizingColumns: boolean;
    html: string | null;
    currentVersion: number | null;
    usageCounters: {
        [name: string]: number;
    };
    idCounters: {
        [name: string]: number;
    };
    suggestedSelection: {
        parent: Location | null;
        location: Location | null;
    };
    versions: any[];
    schemaVersion: number | undefined;
    loadedAt: number;
}
