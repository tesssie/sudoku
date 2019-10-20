import * as React from "react";
import {CSSProperties} from "react";

type ThemeableComponents = {
    editableNumBox: 'editableNumBox';
    constNumBox: 'constNumBox';
}

export type Theme = {
    [element in keyof ThemeableComponents]: CSSProperties;
};
type Themes = {
    default: Theme,
    vibrant: Theme,
}
export const themes: Themes = {
    default: {
        editableNumBox: {
            color: 'black',
            backgroundColor: 'burlywood',
            height: '3em',
            textAlign: 'center',
            backfaceVisibility: 'visible',
            border: 'thin solid black',
            paddingTop: '0.5em',
        },
        constNumBox: {
            color: 'black',
            backgroundColor: 'darkkhaki',
            height: '3em',
            textAlign: 'center',
            backfaceVisibility: 'visible',
            border: 'thin solid black',
            paddingTop: '0.5em',
        }
    },
    vibrant: {
        editableNumBox: {
            color: 'black',
            backgroundColor: 'cyan',
            height: '3em',
            textAlign: 'center',
            backfaceVisibility: 'visible',
            border: 'thin solid black',
            paddingTop: '0.5em',
        },
        constNumBox: {
            color: 'black',
            backgroundColor: 'blue',
            height: '3em',
            textAlign: 'center',
            backfaceVisibility: 'visible',
            border: 'thin solid black',
            paddingTop: '0.5em',
        }
    }
};


export type ThemeContextProps = { theme: Theme, toggleTheme?: () => void };
const ThemeContext = React.createContext<ThemeContextProps>({
    theme: themes.default
});

export default ThemeContext;
