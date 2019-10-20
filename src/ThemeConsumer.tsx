import * as React from "react";
import ThemeContext from './ThemeContext'

type Props = {};

export const ToggleThemeButton: React.FC<Props> = (props) => {
    return (
        <ThemeContext.Consumer>
            {({theme, toggleTheme}) => <button onClick={toggleTheme} {...props}>Toggle theme</button>}
        </ThemeContext.Consumer>

    );
};
export default ToggleThemeButton;