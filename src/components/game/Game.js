import React from 'react';
import GameGrid from './gameGrid/GameGrid';
import GameFinishModal from './modals/gameFinish/GameFinishModal';
import Timer from './timer/Timer';
import generateBoard from '../../gameLogic/generateBoard'

const GAME_STATUS = {
    OVER: "OVER",
    STARTED: "STARTED",
    WON: "WON"
}

const GAME_LEVELS = {
    EASY: {
        size: 5,
        mines: 3
    },
    MEDIUM: {
        size: 10,
        mines: 10
    },
    HARD: {
        size: 15,
        mines: 30
    }
}

class Game extends React.Component {
    constructor() {
        super();

        this.state = {
            status: null,
            gameLevel: GAME_LEVELS.MEDIUM
        }

        this.initializeGame();
    }

    initializeGame = () => {
        console.log("State is ", this)
        const { gameLevel } = this.state;
        this.board = generateBoard(gameLevel.size, gameLevel.mines);
        this.setState({
            status: GAME_STATUS.STARTED
        });
    }

    setGameOver = () => {
        this.setState({status: GAME_STATUS.OVER})
    }

    setGameWon = () => {
        this.setState({
            status: GAME_STATUS.WON
        })
    }

    render() {
        const { status, gameLevel } = this.state;
        const isGameOver = status === GAME_STATUS.OVER ? true : false;

        return (<div style={{ textAlign: "inherit", display: "inline flow-root" }}>
            <Timer stopTimer={isGameOver}></Timer>
            { isGameOver ? <GameFinishModal status={status} clickHandler={this.initializeGame} /> : null }
            <GameGrid boardSize={gameLevel.size} tiles={this.board} setGameOver={this.setGameOver} isGameOver={isGameOver} />
        </div>)
    }
}

export default Game;
