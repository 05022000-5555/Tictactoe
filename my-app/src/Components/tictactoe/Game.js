import React, { useReducer, useState } from 'react';
import { caculatewinner } from '../../hepper';
import Board from './Board';
import "./GameStyle.css"
const initialState = {
    board: Array(9).fill(null),
    xIsNext: true
}
// immutable
const gameReducer = (state, action) =>{
    switch (action.type) {
        case 'CLICK':{
            const {board, xIsNext} = state
            const {index, winner} = action.payload
            if(winner || board[index]) return state
            const nextState = JSON.parse(JSON.stringify(state))
            nextState.board[index] = xIsNext ? "X" : "O"
            nextState.xIsNext = !xIsNext
            return nextState
        }
        case 'RESET':{
            const nextState = JSON.parse(JSON.stringify(state));
            nextState.board = Array(9).fill(null)
            nextState.xIsNext = true
            return nextState
        }
        default:
            break;

    }
    return state
}
const Game = () => {
    // const [board, setBoard] = useState(Array(9).fill(null))
    // const [xIsNext, setXIsNext] = useState(true)
    const [state, dispatch] = useReducer(gameReducer,initialState);
    // const [state , setState] = useState({
    //     xIsNext: true,
    //     board: Array(9).fill(null),
    // })
    const winner = caculatewinner(state.board);
    const handleClick = (index)=>{
        const boardCopy = [...state.board]
        // if(winner || boardCopy[index]) return
        dispatch({
            type: 'CLICK',
            payload: {
                index,
                winner,
            }
        })
        boardCopy[index] = state.xIsNext ? "X" : "O";
        // setState({
        //     board: boardCopy,
        //     xIsNext: !state.xIsNext
        // }
        // )
        // setBoard(boardCopy)
        // setXIsNext(!setXIsNext.xIsNext)
    }
    const handleReset = ()=>{
        dispatch({
            type: 'RESET',

        })
        // setState({
        //     board: Array(9).fill(null),
        //     xIsNext: !state.xIsNext
        // })
        // setBoard(Array(9).fill(null))
        // setXIsNext(true)
    }
    return (
        <div>
            <Board cells={state.board} onClick={handleClick}></Board>
            <button onClick={handleReset}>Reset game</button>
            <span className='winner'>{winner ? `Winner is ${winner || ""}` : ""}</span>
        </div>
    );
};
export default Game;