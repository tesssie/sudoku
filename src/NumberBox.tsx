import React from "react";
import {InputNumber} from 'antd';
import './NumberBox.css';

export interface NumberBoxProp {
    isEditable: boolean;
    value: number;
}

interface NumberBoxState {
    value: number;
}

class NumberBox extends React.Component<NumberBoxProp, NumberBoxState> {
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
            childElements =
                <div className={theme}><InputNumber min={1} max={9}
                                                    onChange={this.setValue}/></div>
        } else {
            childElements = <div className={theme}>{this.state.value}</div>
        }
        return childElements

    }

}

export default NumberBox;