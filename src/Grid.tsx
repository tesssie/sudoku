import {Col, Row} from "antd";
import React from "react";

import './App.css';
import NumberBox, {NumberBoxProp} from "./NumberBox";
import 'antd/dist/antd.css';

interface NumberBoxState extends NumberBoxProp {
}

interface ColumnState {
    [col: number]: NumberBoxState
}

export interface SudokuGrid {
    [row: number]: ColumnState;
}

export interface GridInterface {
    sudokuGrid: SudokuGrid
}

const Grid: React.FC<GridInterface> = (props) => {
    let rows = [];
    for (let i = 0; i < 3; i++) {
        let cols = [];
        for (let j = 0; j < 3; j++) {
            let aCol = <Col span={8}><NumberBox isEditable={props.sudokuGrid[i][j].isEditable}
                                                value={props.sudokuGrid[i][j].value}/></Col>;
            cols.push(aCol);
        }
        rows.push(<Row type="flex" justify="center" style={{alignItems: 'center'}}>{cols}</Row>)
    }
    return (
        <div className="outer-container">
            {rows}

        </div>
    );
};

export default Grid;

