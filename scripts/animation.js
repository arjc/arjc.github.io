// The edgy boucy name reveal!!!

const arjunTitleLetters = document.querySelectorAll("#arjun-title span");

const animationDelays = [
  [0.25, 1, 2, 1, 0.25],
  [0, 0.25, 0.5, 0.75, 1],
  [0.25, 0.5, 0.25, 0.25, 0.25],
  [0.25, 0.5, 0.5, 0.25, 0.25],
  [0.25, 0.5, 0.5, 0.5, 0.25],
];

selectedDelayIndex = Math.floor(Math.random() * (5 - 0));
console.log(`#${selectedDelayIndex + 1} preset is used for ARJUN title animation`);
arjunTitleLetters.forEach((letter, i) => {
  let cssValue = animationDelays[selectedDelayIndex][i].toString().concat("s");
  letter.style.animationDelay = cssValue;

});
