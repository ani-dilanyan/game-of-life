function generateMatrix(matLength, gr, grEa, pred, hntr, cnsmr) {
    let matrix = [];
    for (let i = 0; i < matLength; i++) {
        matrix.push([])
        for (let j = 0; j < matLength; j++) {
            matrix[i].push(0)
        }
    }
    for (let i = 0; i < gr; i++) {
        let x = Math.floor(Math.random() * matLength);
        let y = Math.floor(Math.random() * matLength);
        if (matrix[y][x] == 0) {
            matrix[x][y] = 1;
        }
    }
    for (let i = 0; i < grEa; i++) {
        let x = Math.floor(Math.random() * matLength);
        let y = Math.floor(Math.random() * matLength);
        if (matrix[y][x] == 0) {
            matrix[x][y] = 2;
        }
    }
    for (let i = 0; i < pred; i++) {
        let x = Math.floor(Math.random() * matLength);
        let y = Math.floor(Math.random() * matLength);
        if (matrix[y][x] == 0) {
            matrix[x][y] = 3;
        }
    }
    for (let i = 0; i < hntr; i++) {
        let x = Math.floor(Math.random() * matLength);
        let y = Math.floor(Math.random() * matLength);
        if (matrix[y][x] == 0) {
            matrix[x][y] = 4;
        }
    }
    for (let i = 0; i < cnsmr; i++) {
        let x = Math.floor(Math.random() * matLength);
        let y = Math.floor(Math.random() * matLength);
        if (matrix[y][x] == 0) {
            matrix[x][y] = 5;
        }
    }

    return matrix;
}

let cnsmrQuantity = Math.floor(Math.random() * (100 - 50 + 1)) + 50;;

let matrix = generateMatrix(50, 300, 1000, 150, 200, cnsmrQuantity);
let side = 10;

let grassArr = [];
let grassEaterArr = [];
let predatorArr = [];
let hunterArr = [];
let consumerArr = [];

function setup() {
    frameRate(3);
    let myCanvas = createCanvas(matrix[0].length * side, matrix.length * side);
    myCanvas.parent("parentForCanvas");
    background('#acacac');

    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                let gr = new Grass(x, y);
                grassArr.push(gr)
            } else if (matrix[y][x] == 2) {
                let grEat = new GrassEater(x, y);
                grassEaterArr.push(grEat)
            } else if (matrix[y][x] == 3) {
                let prdt = new Predator(x, y);
                predatorArr.push(prdt)
            } else if (matrix[y][x] == 4) {
                let hntr = new Hunter(x, y);
                hunterArr.push(hntr)
            } else if (matrix[y][x] == 5) {
                let cnsmr = new Consumer(x, y);
                consumerArr.push(cnsmr)
            }
        }
    }
}

function draw() {
    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 0) {
                fill("#e3e3e3");
            } else if (matrix[y][x] == 1) {
                fill("#A0D568");
            } else if (matrix[y][x] == 2) {
                fill("#FFE054");
            } else if (matrix[y][x] == 3) {
                fill("#E99393");
            } else if (matrix[y][x] == 4) {
                fill("#4FC1E8");
            } else if (matrix[y][x] == 5) {
                fill("#8453be");
            }
            stroke("#f3f3f3");
            rect(x * side, y * side, side, side);
        }
    }

    for (let i in grassArr) {
        grassArr[i].mul()
    }

    for (let i in grassEaterArr) {
        grassEaterArr[i].eat()
    }

    for (let i in predatorArr) {
        predatorArr[i].eat()
    }
    for (let i in hunterArr) {
        hunterArr[i].kill()
    }
    for (let i in consumerArr) {
        consumerArr[i].increment()
    }
}