// Valorant Characters

let Character = [{
  name: "Astra",
  color: "Purple"
}, {
  name: "Breach",
  color: "Rust"
}, {
  name: "Brimstone",
  color: "Grey"
}, {
  name: "Cypher",
  color: "White"
}, {
  name: "Jett",
  color: "Sky Blue"
}, {
  name: "KAY/O",
  color: "Silver"
}, {
  name: "Killjoy",
  color: "Yellow"
}, {
  name: "Omen",
  color: "Black"
}, {
  name: "Pheonix",
  color: "Red"
}, {
  name: "Raze",
  color: "Orange"
}, {
  name: "Reyna",
  color: "Navy"
}, {
  name: "Sage",
  color: "Green"
}, {
  name: "Skye",
  color: "Grass Green"
}, {
  name: "Sova",
  color: "Blonde"
}, {
  name: "Viper",
  color: "Toxic Green"
}, {
  name: "Yoru",
  color: "Blue"
}];

let randomIndex;
let animating = false;
let characters = [];
let imageCounter = 0;

function preload() {

  for (let i = 0; i <= 9; i++) {
    characters[i] = loadImage(`assets/character_${i}.PNG`)
  }
}

function setup() {
  createCanvas(600, 600);
  background(200);
  textSize(32);
  imageMode(CENTER);

  text("Click for Random Character", 130, 100)
  console.log(characters);


}

function draw() {

  if (animating == true) {
    clear();
    image(characters[imageCounter], width / 2, height / 2);

    if (imageCounter < characters.length) {
      imageCounter++;
    } else {
      imageCounter = 0;
    }
  }

}

function randomizer() {
  animating = false;
  if (Character[0]) {
    // Displays random Character and splices it out
    background(random(200, 255))
    randomIndex = int(random(Character.length))
    text(Character[randomIndex].name, 260, 300);
    Character.splice(randomIndex, 1);
  } else {
    background(random(200, 255));
    text("nothing left!", 50, 50);
  }
}

function mousePressed() {
  animating = true;
  setTimeout(randomizer, 2000);


}
