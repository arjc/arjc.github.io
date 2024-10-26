// The random bg pattern

// const patterns = [
//   "repeating-linear-gradient(45deg, #1a1a1a, #1a1a1a 1px, #000 10px, #000 2px)",
//   "linear-gradient(90deg, #000 calc(22px - 1px), transparent 1%) center / 22px 22px, linear-gradient(#000 calc(22px - 1px), transparent 1%) center / 22px 22px,#b0b0b0;"
//   //"radial-gradient(circle, #fff 20%, transparent 20%), radial-gradient(circle, #fff 20%, transparent 20%)",
//   //"repeating-linear-gradient(45deg, #fff 25%, transparent 25%), repeating-linear-gradient(-45deg, #fff 25%, transparent 25%)",
//   //"linear-gradient(135deg, #fff 25%, transparent 25%) 0 0, linear-gradient(225deg, #fff 25%, transparent 25%) 0 0, linear-gradient(135deg, transparent 25%, #0a0a0a 25%) 0 0, linear-gradient(225deg, transparent 25%, #0a0a0a 25%) 0 0",
//   //"linear-gradient(to right, #fff 50%, #0a0a0a 50%), linear-gradient(to right, #0a0a0a 50%, #fff 50%)",
// ];

// document.querySelector("body").style.background = Math.floor(Math.random() * 2);

// random colours selector

const rootSelector = document.querySelector(":root");

const themes = [
 []
]

rootSelector.style.setProperty("--c-bg",  "#fff");
rootSelector.style.setProperty("--c-pri", "#fff");
rootSelector.style.setProperty("--c-sec", "#fff");


// The edgy boucy name reveal!!!
const arjunTitleLetters = document.querySelectorAll("#arjun-title span");

const animationDelays = [
  [0, 0, 0, 0, 0], //instantaneous
  [0, 0.1, 0.2, 0.1, 0], //up
  [0.2, 0.1, 0, 0.1, 0.2], //dn
  [0.1, 0, 0.1, 0, 0.1], //alt 1
  [0, 0.1, 0.2, 0.3, 0.4], //ltr
  [0.4, 0.3, 0.2, 0.1, 0], //rtl
  [0.5, 0, 0.1, 0.2, 0.3], //RJUN
  [0.9, 1, 0, 0.1, 0.2], //JUN
  [0.9, 0, 1, 0.1, 0.2], //RUN
  [0.5, 0.6, 0.7, 0, 0.8], //UUU (souljaboytellem')
  [0.4, 0.5, 0, 0.1, 0.3], //JU
];

let selectedDelayIndex = Math.floor(Math.random() * 11);
console.log(`#${selectedDelayIndex + 1} preset loaded`);

arjunTitleLetters.forEach((letter, i) => {
  letter.style.animationDelay = animationDelays[selectedDelayIndex][i]
    .toString()
    .concat("s");
});

const body = document.querySelector("body");
const text = document.querySelector("#main-text");
const image = document.querySelector("#mspaint-aswin");
const button = document.querySelector("#themeButton");