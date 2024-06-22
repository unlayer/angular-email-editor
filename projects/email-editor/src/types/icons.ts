import { Icon } from './StateTypes';
export declare function getIcons(): Record<string, Icon>;
export declare function setIcons(icons: Record<string, Icon | undefined>): void;
export declare function normalizeIcon(icon: Icon | string | string[] | undefined, icons?: Record<string, Icon | undefined>): Icon | undefined;
