
/* 
Create a matrix for your neighborhood
A fire has started in one of the blocks.
A firestation is on another block.
The fire spreads 1 square per loop, horizontally & vertically.
There are an unlimited number of firemen.
When the firemen reach a burning block, they put the fire out.
If the block is fully burned, then the building is destroyed.
Return the matrix with the buildings who have been burned or saved.
*/

sim = {
  neighborhoodWidth: 3,
  neighborhoodHeight: 4,
  neighborhood: [],
  createFireWidth: null,
  createFireHeight: null,
  setFirestationWidth: null,
  setFirestationHeight: null,
}

class Building {
  constructor(burning, burnt, firestarter, firestation, fireman) {
    this.burning = false;
    this.burnt = false;
    this.firestarter = false;
    this.firestation = false;
    this.fireman = false;
  } 
}

function createNeighborhood (width, height) {
  let row = []
  for (let a = 0; a < height; a++ ) {
    for (let b = 0; b < width; b++) {
      row.push(new Building())
    }
    sim.neighborhood.push(row);
    row = [];
  }
  console.log("Welcome to the neighborhood")
  console.log(sim.neighborhood)
  return sim.neighborhood;
}

createNeighborhood(sim.neighborhoodWidth, sim.neighborhoodHeight)

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

sim.createFireWidth = getRandomInt(sim.neighborhoodWidth - 1);
sim.createFireHeight = getRandomInt(sim.neighborhoodHeight - 1);

function createFire (width, height) {
  console.log("A fire starts to burn...");
  console.log(`row ${sim.createFireWidth}`);
  console.log(`column ${sim.createFireHeight}`);
}

createFire(sim.createFireWidth, sim.createFireHeight)

function setFire(width, height) {
  console.log("Fire spotted at:");
  sim.neighborhood[width][height].firestarter = true
  sim.neighborhood[width][height].burning = true
  console.log(sim.neighborhood[width][height]);
}

setFire(sim.createFireWidth, sim.createFireHeight);

sim.setFirestationWidth = getRandomInt(sim.neighborhoodWidth - 1);
sim.setFirestationHeight = getRandomInt(sim.neighborhoodHeight - 1);

function setFireStation(width, height) {
  console.log("calling firestation at:")
  console.log(`row ${sim.setFirestationWidth}`)
  console.log(`column ${sim.setFirestationHeight}`)
  
  if (sim.neighborhood[sim.setFirestationWidth][sim.setFirestationHeight].burning === true ) {
    console.log("that firestation burned")
    console.log("finding next firestation")
    sim.setFirestationWidth = getRandomInt(sim.neighborhoodWidth - 1)
    sim.setFirestationHeight = getRandomInt(sim.neighborhoodWidth - 1)
    console.log("calling new firestation at:")
    console.log(`row ${sim.setFirestationWidth}`)
    console.log(`column ${sim.setFirestationHeight}`)
    console.log(sim.neighborhood[sim.setFirestationWidth][sim.setFirestationHeight]);
  } else {
    sim.neighborhood[sim.setFirestationWidth][sim.setFirestationHeight].firestation = true;
    sim.neighborhood[sim.setFirestationWidth][sim.setFirestationHeight].firemen = true;
    console.log(sim.neighborhood[sim.setFirestationWidth][sim.setFirestationHeight]);
    return sim.neighborhood[sim.setFirestationWidth][sim.setFirestationHeight];
  }
}

setFireStation(sim.neighborhoodWidth, sim.neighborhoodHeight);

console.log(sim)

function dispatchFiremen(width, height){
  console.log("firemen heading out")
  // guide the firemen to the start or end of the fire
  // the firemen need to reach the
  // fireWidth["start", "end"] 
  // fireHeight["start", "end"]
  for (let a = 0; a < height; a++) {
    for (let b = 0; b < width; b++) {

    }
  }
}

dispatchFiremen(sim.setFirestationWidth, sim.setFirestationHeight)
