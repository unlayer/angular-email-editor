import { Container } from './StateTypes';
export type ExporterFn = () => void;
export declare function getCustomContainerExporter(name: Container): ExporterFn | undefined;
export declare function registerCustomContainerExporter(name: Container, exporter: ExporterFn | null | undefined): void;
export declare function unregisterCustomContainerExporter(name: Container): void;
export declare function getCustomItemExporter(name: string): ExporterFn | undefined;
export declare function registerCustomItemExporter(name: string, exporter: ExporterFn | null | undefined): void;
export declare function unregisterCustomItemExporter(name: string): void;
