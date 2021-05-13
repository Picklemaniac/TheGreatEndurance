
let map1 = new Map();
let player1 = new Player(2, 3); //I should be able to move north and south from here

function Map (){
    //0 = wall
    //1 = movable
    this.sizeX = 8;
    this.sizeY = 5;
    this.grid = [
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 1, 1, 1, 1, 0],
        [0, 1, 1, 1, 0, 1, 0, 0],
        [0, 1, 0, 1, 1, 1, 1, 0],
        [0, 1, 0, 1, 0, 1, 0, 0],
        [0, 1, 1, 1, 1, 1, 1, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
    ];
}

function Player (ylocation, xlocation) {
    this.ylocation = ylocation;
    this.xlocation = xlocation
}

function test() {
    //Initialize map  & player
    document.getElementById('east').disabled = true;
    document.getElementById('north').disabled = true;
    document.getElementById('west').disabled = true;
    document.getElementById('south').disabled = true;

    let surrounding = neighbors(map1.grid, player1.ylocation, player1.xlocation);
    console.log(surrounding);
    console.log(player1.ylocation + '/' + player1.xlocation);

    if (surrounding[0] == 1) {
        console.log("Go East");
        document.getElementById('east').disabled = false;
    }
    if (surrounding[1] == 1) {
        console.log("Go South");
        document.getElementById('south').disabled = false;
    }
    if (surrounding[2] == 1) {
        console.log("Go West");
        document.getElementById('west').disabled = false;
    }
    if (surrounding[3] == 1) {
        console.log("Go North");
        document.getElementById('north').disabled = false;
    }
}

function move(y, x) {
    player1.ylocation += y;
    player1.xlocation += x;
    test();
}

function neighbors(arr, m, n) {
    // define what a neighbor is
    let v = [[0, 1],[1, 0],[0, -1],[-1, 0]]
    // filter edges & map
    return v.filter(([h, j]) => h + m >= 0 && h + m < arr.length && j + n >= 0 && j + n < arr[0].length)
        .map(([h, j]) => arr[h + m][j + n])
}

test();