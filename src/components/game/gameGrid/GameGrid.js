import React from 'react';
import Cell from '../cell/Cell';
import findNeighbouringMines from '../../../gameLogic/findMines';
import Styles from './GameGridStyle';

class GameGrid extends React.Component {
    constructor(props) {
        super(props);

        this.tiles = this.generateTiles();
        this.mines = [];

        console.log(" asdf =======================", props)
    }

    componentDidMount() {
        console.log(" asdf =======================", this.props)
        this.tiles = this.generateTiles();
        this.mines = [];
    }

    mineClickHandler = () => {
        const { setGameOver } = this.props;
        setGameOver(true);
    }

    getDiv = (mineTile, i) => {
        const { boardSize, isGameOver } = this.props ? this.props : {};
        const divs = [];
        for(let j=0;j<boardSize;j++){
            const index = i*boardSize+j;
            const isMineTile = mineTile[index];
            const mineCount = isMineTile ? "X" : findNeighbouringMines(i, j, mineTile, index, boardSize);
            const elem = <Cell 
                            key={index} 
                            style={(isGameOver && isMineTile) ? Styles.blastedMines : Styles.cell } 
                            onClick={isMineTile ? this.mineClickHandler : () => {}}
                            setGreen={isMineTile ? false : true}
                            count={mineCount}
                        />
            if(isMineTile) {
                this.mines && this.mines.push(elem)
            };
            divs.push(elem);        
        }
        return divs;
    }

    generateTiles = () => {
        const boardSize = this.props ? this.props.boardSize : 10;
        const mineTile = this.props ? this.props.tiles: null;
        const divs = [];
        for(let i=0; i<boardSize; i++) {
            divs.push(<div key={i} style={Styles.inline}>
                {this.getDiv(mineTile, i)}
            </div>)
        }
        return divs;
    }

    render() {
        return (<div style={Styles.grid}>
            { this.tiles }
        </div>)
    }

}

export default GameGrid;