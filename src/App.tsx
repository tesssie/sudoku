import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import Grid, {SudokuGrid} from "./Grid";
import {Col, Row} from "antd";
import {ThemeProvider} from "./ThemeProvider";

let data = require('./sudoku.json');

function getRow(gridData: any, idx: number) {
    let group1: SudokuGrid = gridData[idx * 3 + 0];
    let group2: SudokuGrid = gridData[idx * 3 + 1];
    let group3: SudokuGrid = gridData[idx * 3 + 2];
    let row1 = <Row gutter={[12, 2]}><Col span={8}><Grid sudokuGrid={group1}/></Col><Col span={8}><Grid
        sudokuGrid={group2}/></Col><Col
        span={8}><Grid sudokuGrid={group3}/></Col></Row>;
  return <Row type="flex" justify="space-around" align="middle"><Col span={10}>{row1}</Col></Row>;
}
const App: React.FC = () => {
  let board = [];
  for (let i = 0; i < 3; i++) {
      board.push(getRow(data, i));
  }
    return (
        <ThemeProvider>
        <div className="outer-container">{board}</div>
        </ThemeProvider>);
};

export default App;

