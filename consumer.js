class Consumer {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.energy = 5;
    }

    increment() {
        this.energy--;
        if (this.energy == 0) {
            this.die();
        }
    }

    die() {
        matrix[this.y][this.x] = 0;
        for (var i in consumerArr) {
            if (this.x == consumerArr[i].x && this.y == consumerArr[i].y) {
                consumerArr.splice(i, 1);
                break;
            }
        }
    }
}