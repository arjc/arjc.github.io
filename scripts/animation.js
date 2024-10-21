// The random bg pattern

const patterns = [
  "repeating-linear-gradient(45deg,#1a1a1a, #1a1a1a 10px, #000 10px, #000 20px)",
  //"radial-gradient(circle, #fff 20%, transparent 20%), radial-gradient(circle, #fff 20%, transparent 20%)",
  "repeating-linear-gradient(45deg, #fff 25%, transparent 25%), repeating-linear-gradient(-45deg, #fff 25%, transparent 25%)",
  //"linear-gradient(135deg, #fff 25%, transparent 25%) 0 0, linear-gradient(225deg, #fff 25%, transparent 25%) 0 0, linear-gradient(135deg, transparent 25%, #0a0a0a 25%) 0 0, linear-gradient(225deg, transparent 25%, #0a0a0a 25%) 0 0",
  //"linear-gradient(to right, #fff 50%, #0a0a0a 50%), linear-gradient(to right, #0a0a0a 50%, #fff 50%)",
];

const r = Math.floor(Math.random() * 3);

// switch (r) {
//   case 1 || 2 || 3:
//     document.querySelector("body").style.backgroundSize = "40px 40px";
//   case 4 :
//     document.querySelector("body").style.backgroundSize = "100% 20px";
//   default:
//     null;
// }

document.querySelector("body").style.background = patterns[r];

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
  [0.8, 0.9, 0, 0.1, 1],
  [Math.random(), Math.random(), Math.random(), Math.random(), Math.random()],
  [Math.random(), Math.random(), Math.random(), Math.random(), Math.random()],
  [Math.random(), Math.random(), Math.random(), Math.random(), Math.random()], //15
];

let selectedDelayIndex = Math.floor(Math.random() * 15);
console.log(`#${selectedDelayIndex + 1} preset loaded`);

arjunTitleLetters.forEach((letter, i) => {
  letter.style.animationDelay = animationDelays[selectedDelayIndex][i]
    .toString()
    .concat("s");
});
