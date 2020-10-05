const generateRandomMines = (boardSize, noOfMines) => {
    const noOfCells = boardSize * boardSize;
    const tileArr = new Array(noOfCells);
    
    while(noOfMines) {
        const rand = Math.floor(Math.random() * noOfCells);
        if(tileArr[rand]) {
            continue;
        } else {
            tileArr[rand] = "mine";
            noOfMines--;
        }
    }
    return tileArr;
}

export default generateRandomMines