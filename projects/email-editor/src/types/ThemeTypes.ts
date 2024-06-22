import { AppearanceConfig } from './TypesTypes';
export type Theme = {
    name: 'classic_light' | 'classic_dark' | 'modern_light' | 'modern_dark';
    isDark: boolean;
    isClassic?: boolean;
    mapping: {
        [key: string]: Record<string, string>;
        borderRadius: Record<BorderRadius, string>;
        colors: Record<ThemeColor, string>;
    };
    components: {
        actionBar?: (Partial<Theme['components']['bar']> & {
            compact?: boolean;
            defaultPlacement: NonNullable<AppearanceConfig['actionBar']>['placement'];
        }) | undefined;
        audit: {
            error: {
                backgroundColor: ColorValue;
                textColor: ColorValue;
                iconColor: ColorValue;
                borderColor: ColorValue;
                borderRadius: BorderRadiusValue;
                ':hover': {
                    backgroundColor?: ColorValue;
                    textColor?: ColorValue;
                    iconColor?: ColorValue;
                    borderColor?: ColorValue;
                };
            };
        };
        bannerMessage: Record<BannerMessageVariant, {
            backgroundColor: ColorValue;
            textColor: ColorValue;
            borderColor: ColorValue;
            iconColor: ColorValue;
        }> & {
            borderRadius: BorderRadiusValue;
        };
        bar: {
            backgroundColor: ColorValue;
            textColor?: ColorValue;
            borderColor?: ColorValue;
            borderRadius?: BorderRadiusValue;
            button: {
                backgroundColor: ColorValue;
                textColor?: ColorValue;
                borderColor?: ColorValue;
                borderRadius?: BorderRadiusValue;
                disabledTextColor?: string;
                ':hover': {
                    backgroundColor: ColorValue;
                    textColor?: ColorValue;
                    borderColor?: ColorValue;
                };
                ':pressed': {
                    backgroundColor: ColorValue;
                    textColor?: ColorValue;
                    borderColor?: ColorValue;
                };
                ':selected': {
                    backgroundColor?: ColorValue;
                    textColor?: ColorValue;
                    borderColor?: ColorValue;
                };
                ':highlighted': {
                    backgroundColor?: ColorValue;
                    textColor?: ColorValue;
                    borderColor?: ColorValue;
                };
                ':destructive': {
                    backgroundColor?: ColorValue;
                    textColor?: ColorValue;
                };
            };
            dropdown: {
                item: {
                    backgroundColor: ColorValue | undefined;
                    textColor: ColorValue | undefined;
                    ':selected'?: {
                        textColor?: ColorValue;
                    };
                };
            };
            separator: {
                borderColor?: ColorValue;
            };
        };
        badge: {
            backgroundColor: ColorValue;
            textColor?: ColorValue;
            borderColor?: ColorValue;
            borderRadius?: BorderRadiusValue;
        };
        buttons: Record<ThemeVariant, ButtonThemeObject & {
            ':hover': Partial<ButtonThemeObject>;
            ':pressed': Partial<ButtonThemeObject>;
        }>;
        checkbox: {
            backgroundColor: ColorValue;
            borderColor: ColorValue;
            borderRadius: BorderRadiusValue;
            checkColor?: ColorValue;
            label: {
                textColor?: ColorValue;
            };
            ':checked': {
                backgroundColor: ColorValue;
                borderColor?: ColorValue;
                borderRadius?: BorderRadiusValue;
                checkColor?: ColorValue;
                label?: {
                    textColor?: ColorValue;
                };
            };
        };
        counter: {
            button?: Theme['components']['buttons']['secondary'];
            dropdown?: Partial<Theme['components']['dropdown']>;
            input?: Theme['components']['input'];
        };
        dropdown: {
            button: {
                backgroundColor: ColorValue;
                borderColor: ColorValue;
                borderRadius: BorderRadiusValue;
                textColor: ColorValue;
                ':disabled'?: {
                    backgroundColor?: ColorValue;
                    borderColor?: ColorValue;
                    textColor?: ColorValue;
                };
                ':hover'?: {
                    backgroundColor?: ColorValue;
                    borderColor?: ColorValue;
                    textColor?: ColorValue;
                };
                ':open'?: {
                    backgroundColor?: ColorValue;
                    borderColor?: ColorValue;
                    borderRadius?: BorderRadiusValue;
                    textColor?: ColorValue;
                };
            };
            popover: {
                backgroundColor: ColorValue;
                borderColor: ColorValue;
                boxShadowColor?: ColorValue;
                borderRadius: BorderRadiusValue;
                textColor: ColorValue;
            };
            item: {
                backgroundColor: ColorValue;
                textColor: ColorValue;
                ':hover'?: {
                    backgroundColor?: ColorValue;
                    textColor?: ColorValue;
                };
                ':selected'?: {
                    backgroundColor?: ColorValue;
                    textColor?: ColorValue;
                };
            };
        };
        input: {
            backgroundColor?: ColorValue;
            borderColor?: ColorValue;
            borderRadius?: BorderRadiusValue;
            textColor?: ColorValue;
            placeholderColor?: ColorValue;
            label?: {
                textColor?: ColorValue;
                backgroundColor?: ColorValue;
                borderColor?: ColorValue;
            };
            messages?: Record<'default' | 'info' | 'warning' | 'error' | 'success', {
                textColor: ColorValue;
            }>;
            ':hover'?: {
                backgroundColor?: ColorValue;
                borderColor?: ColorValue;
                borderRadius?: BorderRadiusValue;
                textColor?: ColorValue;
                placeholderColor?: ColorValue;
            };
            ':active'?: {
                backgroundColor?: ColorValue;
                borderColor?: ColorValue;
                borderRadius?: BorderRadiusValue;
                textColor?: ColorValue;
                placeholderColor?: ColorValue;
            };
            ':disabled'?: {
                backgroundColor?: ColorValue;
                borderColor?: ColorValue;
                textColor?: ColorValue;
                label?: {
                    backgroundColor?: ColorValue;
                    textColor?: ColorValue;
                };
            };
        };
        previewBar?: Partial<Theme['components']['bar']> | undefined;
        accordion: {
            backgroundColor: ColorValue;
            borderColor: ColorValue;
            header: {
                backgroundColor?: ColorValue;
                textColor?: ColorValue;
                buttonColor?: ColorValue;
                rightLabel: {
                    backgroundColor?: ColorValue;
                    textColor?: ColorValue;
                };
                ':hover'?: {
                    backgroundColor?: ColorValue;
                };
            };
            content: {
                backgroundColor?: ColorValue;
                textColor?: ColorValue;
            };
            ':closed': {
                borderColor?: ColorValue;
                header?: {
                    backgroundColor?: ColorValue;
                    textColor?: ColorValue;
                    buttonColor?: ColorValue;
                };
            };
            ai?: {
                backgroundColor?: ColorValue;
                header?: {
                    backgroundColor?: ColorValue;
                    textColor?: ColorValue;
                    aiIconColor?: ColorValue;
                    ':hover'?: {
                        backgroundColor?: ColorValue;
                    };
                };
                content?: {
                    backgroundColor?: ColorValue;
                    textColor?: ColorValue;
                };
                ':closed'?: {
                    borderColor?: ColorValue;
                    header?: {
                        backgroundColor?: ColorValue;
                        textColor?: ColorValue;
                    };
                };
            };
        };
        popover: {
            backgroundColor: ColorValue;
            textColor?: ColorValue;
            borderColor?: ColorValue;
            borderRadius?: BorderRadiusValue;
            padding?: string;
            offset?: number;
            arrow?: {
                enabled?: boolean;
            };
        };
        radio: {
            backgroundColor: ColorValue;
            borderColor: ColorValue;
            thumbColor?: ColorValue;
            label: {
                textColor?: ColorValue;
            };
            ':checked': {
                backgroundColor: ColorValue;
                borderColor?: ColorValue;
                thumbColor?: ColorValue;
                label?: {
                    textColor?: ColorValue;
                };
            };
        };
        segmentedControl: {
            borderRadius: BorderRadiusValue;
            item: {
                backgroundColor: ColorValue;
                textColor: ColorValue;
                borderColor: ColorValue;
                ':hover': {
                    backgroundColor: ColorValue;
                    textColor: ColorValue;
                    borderColor: ColorValue;
                };
                ':pressed': {
                    backgroundColor: ColorValue;
                    textColor: ColorValue;
                    borderColor: ColorValue;
                };
                ':selected': {
                    backgroundColor: ColorValue;
                    textColor: ColorValue;
                    borderColor: ColorValue;
                };
            };
        };
        tabs: {
            backgroundColor: ColorValue;
            borderRadius: BorderRadiusValue;
            tab: {
                backgroundColor: ColorValue;
                textColor: ColorValue;
                borderColor: ColorValue;
                borderRadius: BorderRadiusValue;
                ':hover': {
                    backgroundColor: ColorValue;
                    textColor: ColorValue;
                    borderColor: ColorValue;
                };
                ':pressed': {
                    backgroundColor: ColorValue;
                    textColor: ColorValue;
                    borderColor: ColorValue;
                };
                ':selected': {
                    backgroundColor: ColorValue;
                    textColor: ColorValue;
                    borderColor: ColorValue;
                };
            };
        };
        toast: Record<ToastVariant, {
            backgroundColor: ColorValue;
            textColor: ColorValue;
            borderColor: ColorValue;
            iconColor: ColorValue;
        }> & {
            borderRadius: BorderRadiusValue;
        };
        toggle: {
            backgroundColor: ColorValue;
            textColor: ColorValue;
            thumbColor: ColorValue;
            ':checked': {
                backgroundColor: ColorValue;
                thumbColor: ColorValue;
            };
        };
        tooltip: {
            backgroundColor: ColorValue;
            textColor?: ColorValue;
            borderColor?: ColorValue;
            borderRadius?: BorderRadiusValue;
            padding?: string;
            offset?: number;
            arrow?: {
                enabled?: boolean;
            };
        };
        modal: {
            backgroundColor: ColorValue;
            borderColor: ColorValue;
            textColor?: ColorValue;
        };
        datePicker: {
            border: ColorValue;
            day: {
                current_month: {
                    textColor: ColorValue;
                    ':selected': {
                        textColor?: ColorValue;
                        backgroundColor?: ColorValue;
                    };
                };
                outside_month: {
                    textColor: ColorValue;
                };
            };
            month: {
                backgroundColor: ColorValue;
            };
            header: {
                backgroundColor: ColorValue;
            };
        };
        avatar: {
            backgroundColor: ColorValue;
            textColor: ColorValue;
            shadowColor: ColorValue;
        };
        placeholder: {
            borderColor: ColorValue;
            color: ColorValue;
            backgroundColor: ColorValue;
        };
    };
};
export type ThemeVariant = 'primary' | 'secondary' | 'tertiary' | 'ai' | 'ai_outline' | 'danger';
export type BannerMessageVariant = 'success' | 'warning' | 'default' | 'danger';
export type ToastVariant = 'success' | 'warning' | 'default' | 'danger';
export type ThemeColor = 'accent_01' | 'accent_02' | 'accent_03' | 'accent_04' | 'accent_05' | 'ai_01' | 'ai_02' | 'ai_03' | 'ai_04' | 'ai_05' | 'amp_01' | 'black_00' | 'black_01' | 'black_02' | 'black_03' | 'black_04' | 'black_05' | 'black_06' | 'black_07' | 'black_08' | 'black_09' | 'black_10' | 'destructive_01' | 'destructive_02' | 'destructive_03' | 'destructive_04' | 'destructive_05' | 'destructive_06' | 'destructive_07' | 'destructive_08' | 'destructive_09' | 'primary_01' | 'primary_02' | 'primary_03' | 'primary_04' | 'primary_05' | 'primary_06' | 'primary_07' | 'primary_08' | 'primary_09' | 'primary_10' | 'primary_11' | 'red_01' | 'success_01' | 'success_02' | 'success_03' | 'success_04' | 'success_05' | 'success_06' | 'success_07' | 'success_08' | 'success_09' | 'transparent' | 'warning_01' | 'warning_02' | 'warning_03' | 'warning_04' | 'warning_05' | 'warning_06' | 'warning_07' | 'warning_08' | 'warning_09' | 'white_00' | 'white_01' | 'white_02' | 'white_03' | 'white_04' | 'white_05' | 'white_06' | 'white_07' | 'white_08' | 'white_09';
export type BorderRadius = 'none' | 'min' | 'mid' | 'max' | 'full';
export type ButtonThemeObject = {
    backgroundColor: ColorValue;
    textColor: ColorValue;
    borderColor: ColorValue;
    borderRadius?: BorderRadiusValue;
    outlineColor?: ColorValue;
};
export type BorderRadiusValue = `{${BorderRadius}}`;
export type ColorValue = `{${ThemeColor}}` | `darken(${number}%, {${ThemeColor}})` | `fade(${number}%, {${ThemeColor}})` | `lighten(${number}%, {${ThemeColor}})`;
export type DeprecatedTheme = {
    name: string;
    /** @deprecated */
    preferences: {
        width: string;
        smWidth: string;
        padding: string;
        backgroundColor: string;
        borderColor: string;
        tabs: {
            width: string;
            backgroundColor: string;
            textColor: string;
            activeTextColor: string;
            activeBackgroundColor: string;
            activeBorderColor: string;
            hoverTextColor: string;
            hoverBackgroundColor: string;
            notificationBadgeBackgroundColor: string;
            notificationBadgeTextColor: string;
        };
        tools: {
            width: string;
            height: string;
            smWidth: string;
            smHeight: string;
            backgroundColor: string;
            textColor: string;
            iconColor: string;
            borderSize: string;
            borderColor: string;
            hoverBorderColor: string;
            hoverShadowColor: string;
            draggingBorderColor: string;
        };
        alerts: {
            notice: {
                backgroundColor: string;
                textColor: string;
                borderColor: string;
            };
        };
        properties: {
            header: {
                backgroundColor: string;
                fixedBackgroundColor: string;
                borderColor: string;
                title: {
                    textColor: string;
                };
                badge: {
                    backgroundColor: string;
                    textColor: string;
                };
                icon: {
                    color: string;
                    borderColor: string;
                    hoverBackgroundColor: string;
                    hoverColor: string;
                    destructiveHoverBackgroundColor: string;
                    destructiveHoverColor: string;
                };
            };
            group: {
                header: {
                    backgroundColor: string;
                    textColor: string;
                    iconColor: string;
                    collapseIconColor: string;
                    borderColor: string;
                    ':closed': {
                        backgroundColor: string;
                        textColor: string;
                        iconColor: string;
                        collapseIconColor: string;
                        borderColor: string;
                    };
                };
                expandButton: {
                    backgroundColor: string;
                    textColor: string;
                    hoverBackgroundColor: string;
                    hoverTextColor: string;
                };
                embedded: {
                    borderColor: string;
                    activeBorderColor: string;
                    hoverBorderColor: string;
                    textColor: string;
                    activeTextColor: string;
                };
            };
            editor: {
                label: {
                    default: {
                        textColor: string;
                    };
                    primary: {
                        textColor: string;
                        modified: {
                            backgroundColor: string;
                            textColor: string;
                            ':hover': {
                                backgroundColor: string;
                                textColor: string;
                            };
                        };
                    };
                    subheader: {
                        textColor: string;
                    };
                    secondary: {
                        textColor: string;
                    };
                    tertiary: {
                        textColor: string;
                    };
                };
                hint: {
                    textColor: string;
                };
                seperator: {
                    color: string;
                };
                columns: {
                    backgroundColor: string;
                    borderColor: string;
                    boxShadowColor: string;
                    textColor: string;
                    ':hover': {
                        backgroundColor: string;
                        borderColor: string;
                    };
                    ':selected': {
                        backgroundColor: string;
                        borderColor: string;
                    };
                };
                button: {
                    default: {
                        backgroundColor: string;
                        textColor: string;
                        borderColor: string;
                        iconColor?: string;
                        hover: {
                            backgroundColor?: string;
                            textColor?: string;
                            borderColor?: string;
                            iconColor?: string;
                        };
                        active: {
                            backgroundColor?: string;
                            textColor?: string;
                            borderColor?: string;
                            iconColor?: string;
                        };
                        disabled: {
                            backgroundColor?: string;
                        };
                    };
                    primary: {
                        backgroundColor: string;
                        textColor: string;
                        borderColor: string;
                        hover: {
                            backgroundColor?: string;
                            textColor?: string;
                            borderColor?: string;
                        };
                    };
                    dashed: {
                        textColor: string;
                        borderColor: string;
                        borderRadius: BorderRadiusValue;
                        hover: {
                            backgroundColor?: string;
                            textColor?: string;
                            borderColor?: string;
                        };
                    };
                    secondary: {
                        textColor: string;
                        secondaryTextColor: string;
                        backgroundColor: string;
                        secondaryBackgroundColor: string;
                        borderColor: string;
                        secondaryBorderColor: string;
                    };
                };
                input: {
                    backgroundColor: string;
                    textColor: string;
                    borderColor: string;
                    labelBackgroundColor: string;
                    labelTextColor: string;
                    labelBorderColor: string;
                    errorBorderColor: string;
                    errorShadowColor: string;
                    placeholderTextColor: string;
                    focus: {
                        boxShadowColor?: string;
                    };
                    disabled: {
                        backgroundColor?: string;
                        textColor?: string;
                        borderColor?: string;
                    };
                };
                displayCondition: {
                    backgroundColor: string;
                    borderColor: string;
                    titleColor: string;
                    textColor: string;
                };
                card: {
                    borderColor: string;
                };
                dropdown: {
                    primary: {
                        menu: {
                            backgroundColor: string;
                            borderColor: string;
                        };
                        item: {
                            textColor: string;
                            backgroundColor: string;
                            focus: {
                                textColor: string;
                                backgroundColor: string;
                            };
                            hover: {
                                textColor: string;
                                backgroundColor: string;
                            };
                            active: {
                                textColor: string;
                                backgroundColor: string;
                                hover: {
                                    textColor: string;
                                    backgroundColor: string;
                                };
                            };
                        };
                    };
                    secondary: {
                        menu: {
                            backgroundColor: string;
                            borderColor: string;
                            hover: {
                                color: string;
                                backgroundColor: string;
                            };
                        };
                        item: {
                            textColor: string;
                            backgroundColor: string;
                            hover: {
                                textColor: string;
                                backgroundColor: string;
                            };
                            active: {
                                textColor: string;
                                backgroundColor: string;
                                hover: {
                                    textColor: string;
                                    backgroundColor: string;
                                };
                            };
                        };
                        button: {
                            textColor: string;
                            backgroundColor: string;
                            borderColor: string;
                            active: {
                                borderColor: string;
                            };
                        };
                        icon: {
                            active: {
                                color: string;
                            };
                        };
                    };
                };
                slider: {
                    fillColor: string;
                    emptyColor: string;
                    handleColor: string;
                    handleBorderColor: string;
                    disabledColor: string;
                };
                colorpicker: {
                    backgroundColor: string;
                    borderColor: string;
                    boxShadowColor: string;
                    circleBorderColor: string;
                    checkLightIconColor: string;
                    checkDarkIconColor: string;
                    transparentCircleBackgroundColor: string;
                };
                social: {
                    textColor: ColorValue;
                    backgroundColor: ColorValue;
                    dotColor: ColorValue;
                };
            };
            card: {
                textColor: string;
                borderColor: string;
                backgroundColor: string;
                title: {
                    textColor: string;
                };
                active: {
                    textColor: string;
                };
            };
        };
        close: {
            backgroundColor: string;
            iconColor: string;
            borderColor: string;
            ':hover': {
                backgroundColor: string;
                iconColor: string;
                borderColor: string;
            };
        };
        branding: {
            height: string;
            backgroundColor: ColorValue;
            textColor: ColorValue;
            linkColor: ColorValue;
            iconColor: ColorValue;
            ':hover'?: {
                backgroundColor?: ColorValue;
                textColor?: ColorValue;
                linkColor?: ColorValue;
                iconColor?: ColorValue;
            };
        };
    };
    /** @deprecated */
    actions: {
        backgroundColor: string;
        foregroundColor: string;
        hoverForegroundColor: string;
        selectedForegroundColor: string;
        highlightBackgroundColor: string;
        highlightForegroundColor: string;
        separatorColor: string;
        borderColor: string;
        errorColor: string;
    };
    /** @deprecated */
    canvas: {
        backgroundColor: string;
        borderColor: string;
        backgroundCheckerColor: string;
    };
    /** @deprecated */
    preview: {
        padding: string;
        paddingV?: string;
        paddingH?: string;
        backgroundColor: string;
        borderColor: string;
        titleColor: string;
        dropdownValueColor: string;
        dropdownBorderColor: string;
        inboxPreviewButtonColor: string;
        iconColor: string;
        iconSelectedColor: string;
        iconHoverColor: string;
        iconHoverBorderColor: string;
        previewModalBackground: string;
        buttonBackgroundSelected: string;
        buttonBackgroundDefault: string;
        buttonDefaultColor: string;
        buttonSelectedColor: string;
        buttonDefaultBorder: string;
        buttonHoverBorderColor: string;
        buttonSelectedBorder: string;
        buttonSecondaryBackground: string;
        buttonSuccessBackground: string;
        buttonLoadingBackground: string;
        buttonErrorBackground: string;
        buttonSecondaryColor: string;
        buttonSuccessColor: string;
        buttonErrorColor: string;
        buttonLoadingColor: string;
        deviceContainerBorderColor: string;
        deviceHeaderBackgroundColor: string;
        deviceBackgroundSelected: string;
        deviceBackgroundDefault: string;
        separatorColor: string;
        darkModeBackgroundColor: string;
        darkModeIconColor: string;
        lightModeBackgroundColor: string;
        lightModeIconColor: string;
        galleryBackgroundColor: string;
    };
    /** @deprecated */
    panel: {
        backgroundColor: string;
        textColor: string;
        mutedColor: string;
        input: {
            backgroundColor: string;
            placeholderTextColor: string;
            textColor: string;
        };
    };
    /** @deprecated */
    toolbar: {
        backgroundColor: string;
        borderColor: string;
        separatorColor: string;
        button: {
            backgroundColor: string;
            textColor: string;
            borderColor: string;
            ':hover'?: {
                backgroundColor?: string;
                textColor?: string;
                borderColor?: string;
            };
        };
    };
    /** @deprecated */
    list: {
        separatorColor: string;
        hoverBackgroundColor: string;
    };
    /** @deprecated */
    suggestions: {
        backgroundColor: string;
        borderColor: string;
        textColor: string;
        titleColor: string;
        subtitleColor: string;
        textCard: {
            backgroundColor: string;
            textColor: string;
            borderColor: string;
            boxShadowColor: string;
            number: {
                backgroundColor: string;
                textColor: string;
                borderColor: string;
            };
            hover: {
                backgroundColor: string;
                textColor: string;
                borderColor: string;
                boxShadowColor: string;
            };
        };
        imageCard: {
            backgroundColor: string;
            textColor: string;
            boxShadowColor: string;
            hover: {
                backgroundColor: string;
                textColor: string;
                boxShadowColor: string;
            };
        };
        closeButton: {
            iconColor: string;
            hover: {
                iconColor: string;
            };
        };
        error: {
            icon: {
                textColor: string;
            };
        };
        footer: {
            backgroundColor: string;
            textColor: string;
            borderColor: string;
            boxShadowColor: string;
        };
        loader: {
            backgroundColor: string;
            content: {
                backgroundColor: string;
                headingColor: string;
                textColor: string;
            };
            progressBar: {
                backgroundColor: string;
            };
        };
        overlay: {
            backgroundColor: string;
        };
        recents: {
            backgroundColor: string;
            textColor: string;
            borderColor: string;
            boxShadowColor: string;
            hover: {
                backgroundColor: string;
                textColor: string;
                borderColor: string;
            };
        };
        score: {
            default: {
                backgroundColor: string;
                textColor: string;
            };
            good: {
                backgroundColor: string;
                textColor: string;
            };
            bad: {
                backgroundColor: string;
                textColor: string;
            };
        };
        /** @deprecated */
        warning: {
            backgroundColor: string;
            color: string;
        };
    };
    /** @deprecated */
    ai: {
        color: string;
        focus: {
            color: string;
        };
    };
};
