import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import Grid, {SudokuGrid} from "./Grid";
import {Col, Row} from "antd";
import {ThemeProvider} from "./ThemeProvider";

let grid: SudokuGrid = {
  0: {
    0: {isEditable: true, value: 1},
    1: {isEditable: false, value: 2},
    2: {isEditable: false, value: 3}
  },
  1: {
    0: {isEditable: false, value: 4},
    1: {isEditable: false, value: 5},
    2: {isEditable: false, value: 6}
  },
  2: {
    0: {isEditable: false, value: 7},
    1: {isEditable: false, value: 8},
    2: {isEditable: false, value: 9}
  }
};

function getRow(grid: SudokuGrid) {
  let row1 = <Row gutter={[12, 2]}><Col span={8}><Grid sudokuGrid={grid}/></Col><Col span={8}><Grid sudokuGrid={grid}/></Col><Col
      span={8}><Grid sudokuGrid={grid}/></Col></Row>;
  return <Row type="flex" justify="space-around" align="middle"><Col span={10}>{row1}</Col></Row>;
}
const App: React.FC = () => {
  let board = [];
  for (let i = 0; i < 3; i++) {
    board.push(getRow(grid));
  }
  return (<>
        <div><ThemeProvider/></div>
        <div className="outer-container">{board}</div>
      </>
  );
};

export default App;

