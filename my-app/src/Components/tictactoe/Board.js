import React from 'react';
import { caculatewinner } from '../../hepper';
import Cell from './Cell';

const Board = (props) => {
    // const cells = ["x",null,null, "x", null, null, "x", null, null]  
    // console.log(caculatewinner(cells))
    // console.log(props)
    return (
        <div className='game-board'>
            {props.cells.map((item, index) => (
                <Cell
                    key={index}
                    value={item}
                    onClick={()=> props.onClick(index)}
                    className = {item ==="X" ? "is-x" : item === "O" ? "is-o" : ""}
                    >
                </Cell>
            ))}
        </div>
    );
};

export default Board;