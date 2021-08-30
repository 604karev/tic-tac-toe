class TicTacToe {

    constructor() {
        this.field = [[null, null, null], [null, null, null], [null, null, null]];
        this.currentSymbol = 'x';
        this.winner = null;
    }

    getCurrentPlayerSymbol() {
        return this.currentSymbol;
    }

    nextTurn(rowIndex, columnIndex) {
        if (this.field[rowIndex][columnIndex]) {
            return;
        }

        this.field[rowIndex][columnIndex] = this.currentSymbol;
        this.currentSymbol = this.currentSymbol === 'x' ? 'o' : 'x';

        let isGameOver = false;
        let symbol;

        for (let i = 0; i < 3; i++) {
            symbol = this.field[i][0];
            isGameOver = this.field[i].every(one => one === symbol);
            if (isGameOver) break;

            symbol = this.field[0][i];
            isGameOver = this.field.every(arr => arr[i] === symbol);
            if (isGameOver) break;
        }
        if (!isGameOver) {
            symbol = this.field[1][1];
            isGameOver = this.field.every((arr, i) => arr[i] === symbol)
                || this.field.every((arr, i) => arr[2 - i] === symbol);
        }

        if (isGameOver) {
            this.winner = symbol;
            return;
        }

        if (this.noMoreTurns()) {
            this.winner = 'draw';
        }
    }

    isFinished() {
        return !!this.winner;
    }

    getWinner() {
        return this.winner === 'draw' ? null : this.winner;
    }

    noMoreTurns() {
        return this.field.every(arr => arr.every(one => one !== null));
    }

    isDraw() {
        return this.winner === 'draw';
    }

    getFieldValue(rowIndex, colIndex) {
        return this.field[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;