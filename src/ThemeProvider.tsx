import ThemeContext, {Theme, themes} from "./ThemeContext";
import * as React from "react";
import ToggleThemeButton from "./ThemeConsumer";

interface State {
    theme: Theme;
}

export class ThemeProvider extends React.Component<{}, State> {
    readonly state: State = {theme: themes.light};

    toggleTheme = () => {
        let theme = this.state.theme === themes.light ? themes.dark : themes.light
        this.setState({theme});
    };

    render() {
        const {theme} = this.state;
        const {toggleTheme} = this;
        return (
            <ThemeContext.Provider value={{theme, toggleTheme}}>
                <ToggleThemeButton/>
            </ThemeContext.Provider>

        )
    }

}