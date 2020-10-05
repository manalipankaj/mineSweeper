const calculateSurroundingMines = (i, j , mineTile, index, boardSize) => {
    let mines = 0;

    const isEnd = j === boardSize - 1;
    const isStart = j === 0;
    const isTop = i === 0;
    const isBottom = i === boardSize - 1;

    const isTopLeftCorner = isTop && isStart;
    const isTopRightCorner = isTop && isEnd;
    const isBottomLeftCorner = isBottom && isStart;
    const isBottomRightCorner = isBottom && isEnd;

    if(isTopLeftCorner) {
        mines += mineTile[index + 1] ? 1 : 0;
        mines += mineTile[index + boardSize] ? 1 : 0;
        mines += mineTile[index + boardSize + 1] ? 1 : 0;
        return mines;
    }

    if(isBottomLeftCorner) {
        mines += mineTile[index + 1] ? 1 : 0;
        mines += mineTile[index - boardSize] ? 1 : 0;
        mines += mineTile[index - boardSize + 1] ? 1 : 0;
        return mines;
    }

    if(isTopRightCorner) {
        mines += mineTile[index - 1] ? 1 : 0;
        mines += mineTile[index + boardSize] ? 1 : 0;
        mines += mineTile[index + boardSize - 1] ? 1 : 0;    
        return mines;
    }

    if(isBottomRightCorner) {
        mines += mineTile[index - 1] ? 1 : 0;
        mines += mineTile[index - boardSize] ? 1 : 0;
        mines += mineTile[index - boardSize - 1] ? 1 : 0;
        return mines;
    }

    if(isTop) {
        mines += mineTile[index - 1] ? 1 : 0;
        mines += mineTile[index + 1] ? 1 : 0;
        mines += mineTile[index + boardSize] ? 1 : 0;
        mines += mineTile[index + boardSize - 1] ? 1 : 0;
        mines += mineTile[index + boardSize + 1] ? 1 : 0;
        return mines;
    }

    if(isBottom) {
        mines += mineTile[index - 1] ? 1 : 0;
        mines += mineTile[index + 1] ? 1 : 0;
        mines += mineTile[index - boardSize] ? 1 : 0;
        mines += mineTile[index - boardSize - 1] ? 1 : 0;
        mines += mineTile[index - boardSize + 1] ? 1 : 0;
        return mines;
    }

    if(isStart) {
        mines += mineTile[index + 1] ? 1 : 0;
        mines += mineTile[index - boardSize] ? 1 : 0;
        mines += mineTile[index - boardSize + 1] ? 1 : 0;
        mines += mineTile[index + boardSize] ? 1 : 0;
        mines += mineTile[index + boardSize + 1] ? 1 : 0;
        return mines;
    }

    if(isEnd) {
        mines += mineTile[index - 1] ? 1 : 0;
        mines += mineTile[index - boardSize] ? 1 : 0;
        mines += mineTile[index - boardSize - 1] ? 1 : 0;
        mines += mineTile[index + boardSize] ? 1 : 0;
        mines += mineTile[index + boardSize - 1] ? 1 : 0;
        return mines;
    }
    mines += mineTile[index + 1] ? 1 : 0;
    mines += mineTile[index - 1] ? 1 : 0;
    mines += mineTile[index + boardSize] ? 1 : 0;
    mines += mineTile[index + boardSize + 1] ? 1 : 0;
    mines += mineTile[index + boardSize - 1] ? 1 : 0;
    mines += mineTile[index - boardSize] ? 1 : 0;
    mines += mineTile[index - boardSize + 1] ? 1 : 0;
    mines += mineTile[index - boardSize - 1] ? 1 : 0;
    return mines;
};

export default calculateSurroundingMines;