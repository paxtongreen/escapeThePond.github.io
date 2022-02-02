
/*
If (frog collids with lily pad) {
  level.innerText + 1;
};
*/

let tileSize = 40;
let mapWidth = 15;
let dx = 0;
let dy = 0;


// make the canvas
const frogboard = document.getElementById('frogboard');
const frogboard_ctx = frogboard.getContext('2d');

let mazes = 
[
  [
    0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
    0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,
    0,1,1,0,1,1,1,1,0,1,1,1,1,0,1,
    0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,
    1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,
    1,1,1,1,0,1,1,1,1,1,1,1,1,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,
    0,0,1,1,0,1,1,0,1,1,1,1,1,1,1,
    0,1,1,1,0,0,0,0,0,0,0,0,0,0,1,
    0,0,0,1,0,1,1,1,0,1,1,1,1,0,1,
    1,1,0,1,0,1,1,1,0,1,1,0,0,0,0,
    0,0,0,1,0,0,0,1,0,1,1,0,1,1,0,
    0,1,1,1,1,1,0,1,0,0,1,0,0,1,1,
    0,0,0,0,0,0,0,1,1,1,1,1,0,0,0
  ],

  [
    0,0,0,1,1,1,1,1,1,1,1,1,1,0,1,
    1,1,0,1,0,0,0,0,0,0,0,0,1,0,1,
    0,1,0,1,1,0,1,1,0,1,1,0,1,0,1,
    0,1,0,1,1,1,1,0,0,0,0,1,1,0,1,
    0,1,0,0,0,0,1,1,1,1,0,1,1,0,0,
    0,1,1,1,1,0,1,0,0,0,0,0,0,0,1,
    0,0,0,0,0,0,1,1,1,1,0,1,0,1,1,
    1,0,1,1,1,0,0,0,0,0,0,1,0,0,1,
    1,0,1,1,1,1,1,1,1,1,0,1,1,0,0,
    1,0,1,0,0,0,0,0,0,0,0,0,1,1,0,
    1,0,1,1,1,0,1,1,1,1,1,0,0,1,1,
    1,0,0,0,1,0,0,0,0,0,1,1,0,0,0,
    1,0,1,1,1,1,1,1,1,0,0,1,0,1,0,
    1,0,0,0,0,0,0,0,1,1,0,0,0,1,1,
    1,0,1,1,1,1,1,0,0,1,1,1,0,0,0
  ],

  [
    0,0,0,1,1,1,0,0,1,1,1,1,1,0,1,
    1,1,0,0,0,1,1,0,0,0,0,0,0,0,1,
    0,1,0,1,0,0,1,1,1,1,1,1,1,0,1,
    0,0,0,1,1,0,0,0,0,0,1,0,0,0,1,
    1,1,0,0,1,1,1,1,1,0,1,1,1,0,1,
    0,1,1,0,0,0,0,0,0,0,0,0,1,0,1,
    0,0,1,1,0,1,1,1,1,1,1,1,1,0,1,
    1,0,0,1,0,0,0,0,0,0,1,1,1,0,1,
    1,1,0,1,0,1,1,1,1,0,0,0,0,0,0,
    1,0,0,0,0,0,0,0,1,0,1,1,1,1,0,
    0,0,1,1,0,1,1,1,1,0,0,0,0,1,0,
    1,0,1,1,0,0,0,0,1,1,1,1,0,1,0,
    1,0,1,0,1,1,0,1,1,0,1,1,0,1,0,
    1,0,1,0,0,0,0,0,0,0,0,1,0,1,1,
    1,0,1,1,1,1,1,1,1,1,1,1,0,0,0
  ]
]

let wallCoords = [

]

let mazeLevels = [
  'media/mazeLevel1.png',
  'media/mazeLevel2.png',
  'media/mazeLevel3.png'
]

let frog_image = new Image();
frog_image.src = 'media/frog2.png';
frog_image.onload = function(){ // might need to make an array on x
  drawFrog();
}

// draw frog
const drawFrog =()=> {
  frogboard_ctx.drawImage(frog_image, dx, dy); // might need to make an array on x
};

let lilyPad_image = new Image();
lilyPad_image.src = 'media/lilyPad4.png';
lilyPad_image.onload = function(){
  drawLilyPad();
}

//draw lilyPad
const drawLilyPad =()=> {
  frogboard_ctx.drawImage(lilyPad_image, 560, 560);
};

//draw Walls
const drawMazeWall =()=> {
  frogboard_ctx.drawImage(mazeWall_image, 0, 0);
};

// put this in a function with an event listener on the lilyPad

// Try and load new levels 
/*

lilyPad_image.addEventListener("click", myFunction)
 */

let displayLevel = document.getElementById('level');
let currentLevel = 0;
displayLevel.innerText = currentLevel + 1;

let mazeWall_image = new Image();
mazeWall_image.src = mazeLevels[currentLevel]

mazeWall_image.onload = function() {
  drawMazeWall();
}

const updateDisplay =()=> {
  frogboard_ctx.clearRect(0, 0, frogboard.width, frogboard.height);
  drawLilyPad();
  drawFrog();
  drawMazeWall();
  
  // nextLevel();
  
}
  // if(has landed on lilyPad){
  //   level++;

  //   let displayLevel = document.getElementById('level');
  //   displaylevel.innerText = level;

  const moveFrog = (e) => {
    let direction = e.key;
    // console.log(direction);
    // console.log(frogboard.width)
    let toTile;
    if(direction === 'w' && !(dy - tileSize < 0)){
      toTile = {
        x: dx,
        y: dy - tileSize
      };
      if(canMove(toTile)) {
        dy -= tileSize;
      }
    } else if (direction === 'a' && !(dx - tileSize < 0)) {
      toTile = {
        x: dx - tileSize,
        y: dy
      };
      if(canMove(toTile)) {
        dx -= tileSize;
      }
    } else if (direction === 'd' && !(dx + tileSize >= frogboard.width)) {
      toTile = {
        x: dx + tileSize,
        y: dy
      };
      if(canMove(toTile)) {
        dx += tileSize;
      }
    } else if (direction === 's' && !(dy + tileSize >= frogboard.height)) {
      toTile = {
        x: dx,
        y: dy + tileSize
      };
      if(canMove(toTile)) {
        dy += tileSize;
      }

    };
    console.log(dx, dy);
    if(dx == 560 && dy == 560 && currentLevel <= 2){
      currentLevel++;
      displayLevel.innerText = currentLevel + 1;
      mazeWall_image.src = mazeLevels[currentLevel];
      dx = 0;
      dy = 0;     
      generateWall();
    } else if (currentLevel == 3){
      let winText = document.getElementById('winText');
      winText.innerText = 'You Won!';

    }

    updateDisplay();
  }




  const canMove = (toTile) => {
    let can = true;


    console.log()

    for(let i = 0; i < wallCoords.length; i++) {
      // console.log(wallCoords[i], toTile)
      if(wallCoords[i].x == toTile.x && wallCoords[i].y == toTile.y) {
        can = false;
      }
    }


    // console.log(can);

    return can;

  }

  const generateWall = () => {   
    wallCoords = [];
    // currentLevel
    // mazes

    // Loop through current maze and generate x y for each wall

    // Define x y variable for wall coords

    let x = 0;
    let y = 0;
    let count = 0;
    let firstCount = true;

    for(let i = 0; i < mazes[currentLevel].length; i++) {
      if(i % mapWidth == 0 && !firstCount) {
        x = 0;
        y += tileSize;
      }
      if(mazes[currentLevel][i] == 1) {
        wallCoords.push({x, y});
      }
      x += tileSize;
      firstCount = false;
    }

    console.log(wallCoords)

    return;

  }

  
  
  let playBtn = document.getElementById('playButton');
  playBtn.addEventListener('click', ()=>{
    document.addEventListener('keydown', moveFrog);
    updateDisplay();
    generateWall();
  });