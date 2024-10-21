// The random bg pattern

const patterns = [
  "repeating-linear-gradient(45deg,#3498db, #3498db 10px, #2ecc71 10px, #2ecc71 20px)",
  "radial-gradient(circle, #e74c3c 20%, transparent 20%), radial-gradient(circle, #e74c3c 20%, transparent 20%)",
  "repeating-linear-gradient(45deg, #f39c12 25%, transparent 25%), repeating-linear-gradient(-45deg, #f39c12 25%, transparent 25%)",
  "linear-gradient(135deg, #8e44ad 25%, transparent 25%) 0 0, linear-gradient(225deg, #8e44ad 25%, transparent 25%) 0 0, linear-gradient(135deg, transparent 25%, #8e44ad 25%) 0 0, linear-gradient(225deg, transparent 25%, #8e44ad 25%) 0 0",
  "linear-gradient(to right, #2980b9 50%, #3498db 50%), linear-gradient(to right, #3498db 50%, #2980b9 50%)"
];

const r = Math.random() * 6;
let cssQ = patterns[r];
console.log(cssQ, r);
document.querySelector("body").style.background = cssQ;


// The edgy boucy name reveal!!!
const arjunTitleLetters = document.querySelectorAll("#arjun-title span");

const animationDelays = [
  [0, 0.1, 0.2, 0.1, 0],
  [0.2, 0.1, 0, 0.1, 0.2], 
  [0.1, 0, 0.1, 0, 0.1],
  [0, 0.1, 0.2, 0.3, 0.4], 
  [0.4, 0.3, 0.2, 0.1, 0], //5
  [0.5, 0, 0.2, 0.3, 0.4],
  [0.4, 0, 0.1, 0.2, 0.3],
  [1, 0, 1, 0.1, 0.2],
  [1, 1, 1, 0, 1],
  [0, 1, 1, 0, 1], //10
  [0.9, 1, 0, 0.1, 0.2],
  [0.8, 0.9, 0, 0.1 , 1],
  [Math.random(), Math.random(), Math.random(), Math.random(), Math.random()],
  [Math.random(), Math.random(), Math.random(), Math.random(), Math.random()],
  [Math.random(), Math.random(), Math.random(), Math.random(), Math.random()] //15
];

let selectedDelayIndex = Math.floor(Math.random() * 15);
console.log(`#${selectedDelayIndex + 1} preset loaded`);

arjunTitleLetters.forEach((letter, i) => {
  letter.style.animationDelay = animationDelays[selectedDelayIndex][i].toString().concat("s");
});
