// The edgy boucy name reveal!!!

const arjunTitleLetters = document.querySelectorAll("#arjun-title span");

const animationDelays = [
  [0, 0.1, 0.2, 0.1, 0],
  [0.2, 0.1, 0, 0.1, 0.2], 
  [0.1, 0, 0.1, 0, 0.1],
  [0, 0.1, 0.2, 0.3, 0.4], 
  [0.4, 0.3, 0.2, 0.1, 0], //5
  [0.5, 0, 0.2, 0.3, 0.4],
  [0.1, 0, 0, 0, 0],
  [1.5, 0, 1.5, 1.5, 1.5],
  [1.5, 1.5, 1.5, 0, 1.5],
  [0, 1, 1, 0, 1], //10
  [1, 1, 0, 0, 0],
  [1.5, 1.5, 0, 0, 1.5],
  [Math.random(), Math.random(), Math.random(), Math.random(), Math.random()],
  [Math.random(), Math.random(), Math.random(), Math.random(), Math.random()],
  [Math.random(), Math.random(), Math.random(), Math.random(), Math.random()] //15
];

let selectedDelayIndex = Math.floor(Math.random() * (15 - 0));
console.log(`#${selectedDelayIndex + 1} preset is used for ARJUN title animation`);

arjunTitleLetters.forEach((letter, i) => {
  let cssValue = animationDelays[selectedDelayIndex][i].toString().concat("s");
  letter.style.animationDelay = cssValue;
});
