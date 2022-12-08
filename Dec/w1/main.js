
function alertAll() {
  const divs = document.getElementsByTagName("div");

  for (let i = 0; i < divs.length; i++) {
    alert(divs[i].getAttribute("id"));

  }
}


/////////////////////////// PRACTICE ///////////////////////////////
/**
// practice
function test() {
  let j = 0;
  for (let i = 0; i < 5; i++) {
    j += i;
    // print j
    console.log(i);
  }
  // print i
  // console.log(i)
  // print j
  console.log(j)
}
// 1
let j = 10;

// 2
// print j
console.log(j);

// 3
test();

// 4
j += 29;

// 5
// print j;
console.log(j);

// 1. j = 10
// 2. 10


// 3. LOOP 
// 3_1
// start from j = 0, i = 0
// i = 0, i < 5 => j += i => j = 0;
// print i => 0
// i ++ => i = 1

// i = 1, i < 5 => j += i => j = 1
// print i => 1
// i += => i = 2

// i = 2, i < 5 => j += i => j = 3
// print i => 2
// i += => i = 3

// i = 3, i < 5 => j += i => j = 6
// print i => 3
// i += => i = 4

// i = 4, i < 5 => j += i => j = 10
// print i => 4
// i += => i = 5

// i = 5, i < 5 => end for loop

// 3_2. print i
// undefined
// 3_3. print j
// 10

// 4. j = 39
// 5. 39
 */


// change button color
const colors = ['red', 'green', 'blue', 'purple'];
const BLACK = "black";
const WHITE = "white";

let index = -1;
let clickedBtn;
// update first button
function changeBtnColor() {
  if (clickedBtn) clickedBtn = false;
  let btn = document.getElementById('colorfun');
  index = index >= colors.length - 1 ? 0 : index + 1;
  btn.style.backgroundColor = colors[index];
  btn.style.color = BLACK;
  clickedBtn = btn;
  detectClickedBtn(BLACK);
}

// update second button
function reverseBtnColor() {
  if (clickedBtn) clickedBtn = false;
  let btn = document.getElementById("colorback");
  index = index <= 0 ? colors.length - 1 : index - 1;
  btn.style.backgroundColor = colors[index];
  btn.style.color = WHITE;
  clickedBtn = btn;
  detectClickedBtn(WHITE);
}

// detect index and update third color
function detectClickedBtn(color) {
  let btn = document.getElementById("clickedbtn");
  btn.style.backgroundColor = colors[index];
  btn.innerText = colors[index];
  btn.style.color = color;
}

function updateLastBtn() {
  // console.log(clickedBtn.onclick)
  if (!clickedBtn) return;
  targetId = clickedBtn.getAttribute("id");
  if (targetId === "colorfun") {
    changeBtnColor();
  } else {
    reverseBtnColor();
  }
}