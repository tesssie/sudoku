import React from "react";
import {InputNumber} from 'antd';
import './NumberBox.css';
import ThemeContext from "./ThemeContext";

export interface NumberBoxProp {
    isEditable: boolean;
    value: number;
}

interface NumberBoxState {
    value: number;
}

class NumberBox extends React.Component<NumberBoxProp, NumberBoxState> {
    static contextType = ThemeContext;
    context!: React.ContextType<typeof ThemeContext>;
    constructor(props: NumberBoxProp) {
        super(props);
        this.state = {value: this.props.value}
    }

    public setValue = (value: number | undefined) => {
        console.log(value);
        if (!value) return;
        this.setState({value: value});
    };

    public render(): React.ReactNode {

        let theme = this.props.isEditable ? "EditableNumberBox" : "ConstNumberBox";
        let childElements = <></>;
        if (this.props.isEditable) {
            let editableStyle = this.context.theme.editableNumBox;
            childElements =
                <div style={editableStyle}><InputNumber min={1} max={9}
                                                        onChange={this.setValue} style={{
                    ...editableStyle,
                    height: '100%',
                    width: '100%',
                    border: 'none'
                }}/></div>
        } else {
            let constStyle = this.context.theme.constNumBox;
            childElements = <div style={constStyle}>{this.state.value}</div>
        }
        return childElements

    }

}

export default NumberBox;