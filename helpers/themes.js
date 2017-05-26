import _ from 'lodash';
import { lighten, darken } from 'polished';


export function buildDarkThemeConfig(baseConfig, colors, colorVariant) {
    const color1 = colors[`${colorVariant}1`];
    const color2 = colors[`${colorVariant}2`];
    const color3 = colors[`${colorVariant}3`];
    // const color4 = colors[`${colorVariant}4`];
    const color5 = colors[`${colorVariant}5`];

    return _.merge({}, baseConfig, {
        color: colors.white,
        backgroundColor: color2,
        borderColor: color1,
        loaderColor: colors.white,
        controlColor: color1,
        hoverControlColor: colors.white,

        column: {
            nav: {
                color: colors.white,
                backgroundColor: lighten(0.1, color2),
                hoverColor: colors.white,
                hoverBackgroundColor: color3,
            },
        },
        toolbar: {
            button: {
                color: colors.white,
                backgroundColor: color2,
                borderColor: color2,
                hoverBackgroundColor: color3,
                hoverBorderColor: color3,
                focusBackgroundColor: color3,
                focusBorderColor: color3,
                activeBackgroundColor: color3,
                activeBorderColor: color3,
            },
        },
        titlebar: {
            color: colors.white,
            backgroundColor: color2,
            borderColor: color2,

            button: {
                color: colors.white,
                backgroundColor: color2,
                borderColor: color2,
                hoverBackgroundColor: color3,
                hoverBorderColor: color3,
                focusBackgroundColor: color3,
                focusBorderColor: color3,
                activeBackgroundColor: color3,
                activeBorderColor: color3,
            },
        },
        form: {
            button: {
                color: colors.white,
                backgroundColor: color2,
                borderColor: color5,
                hoverBackgroundColor: color3,
                hoverBorderColor: color5,
                focusBackgroundColor: color3,
                focusBorderColor: color5,
                activeBackgroundColor: color3,
                activeBorderColor: color5,

                primary: {
                    color: color2,
                    backgroundColor: colors.white,
                    borderColor: colors.white,
                    hoverBackgroundColor: colors.lightGray5,
                    hoverBorderColor: colors.lightGray5,
                    focusBackgroundColor: colors.lightGray5,
                    focusBorderColor: colors.lightGray5,
                    activeBackgroundColor: colors.lightGray5,
                    activeBorderColor: colors.lightGray5,
                },
            },
        },
    });
}


export function buildLightThemeConfig(baseConfig, colors, colorVariant) {
    const color1 = colors[`${colorVariant}1`];
    const color2 = colors[`${colorVariant}2`];
    const color3 = colors[`${colorVariant}3`];
    const color4 = colors[`${colorVariant}4`];
    const color5 = colors[`${colorVariant}5`];

    return _.merge({}, baseConfig, {
        color: darken(0.27, color1),
        backgroundColor: color2,
        borderColor: color1,
        loaderColor: darken(0.27, color1),
        controlColor: color4,
        hoverControlColor: darken(0.27, color1),

        column: {
            nav: {
                color: darken(0.27, color1),
                backgroundColor: color3,
                hoverColor: darken(0.27, color1),
                hoverBackgroundColor: lighten(0.14, color3),
            },
        },
        toolbar: {
            button: {
                color: darken(0.27, color1),
                backgroundColor: color2,
                borderColor: color2,
                hoverBackgroundColor: color3,
                hoverBorderColor: color3,
                focusBackgroundColor: color3,
                focusBorderColor: color3,
                activeBackgroundColor: color3,
                activeBorderColor: color3,
            },
        },
        titlebar: {
            color: darken(0.27, color1),
            backgroundColor: color2,
            borderColor: color2,

            button: {
                color: darken(0.27, color1),
                backgroundColor: color2,
                borderColor: color2,
                hoverBackgroundColor: color3,
                hoverBorderColor: color3,
                focusBackgroundColor: color3,
                focusBorderColor: color3,
                activeBackgroundColor: color3,
                activeBorderColor: color3,
            },
        },
        form: {
            button: {
                color: darken(0.27, color1),
                backgroundColor: color2,
                borderColor: color5,
                hoverBackgroundColor: color3,
                hoverBorderColor: color5,
                focusBackgroundColor: color3,
                focusBorderColor: color5,
                activeBackgroundColor: color3,
                activeBorderColor: color5,

                primary: {
                    color: color2,
                    backgroundColor: darken(0.27, color1),
                    borderColor: darken(0.27, color1),
                    hoverBackgroundColor: colors.lightGray5,
                    hoverBorderColor: colors.lightGray5,
                    focusBackgroundColor: colors.lightGray5,
                    focusBorderColor: colors.lightGray5,
                    activeBackgroundColor: colors.lightGray5,
                    activeBorderColor: colors.lightGray5,
                },
            },
        },
    });
}


export default {
    buildDarkThemeConfig,
    buildLightThemeConfig,
};
