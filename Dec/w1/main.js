
function alertAll() {
  const divs = document.getElementsByTagName("div");
  for (let i = 0; i < divs.length; i++) {
    alert(divs[i].getAttribute("id"));
  }
}


/////////////////////////// PRACTICE ///////////////////////////////

// practice
function test() {
  let j = 0;
  for (let i = 0; i < 5; i++) {
    j += i;
    // print j
    console.log(j);
  }
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
// start from j = 0, i = 0
// i = 0, i < 5 => j += i => j = 0;
// print j => 0
// i ++ => i = 1

// i = 1, i < 5 => j += i => j = 1
// print j => 1
// i += => i = 2

// i = 2, i < 5 => j += i => j = 3
// print j => 3
// i += => i = 3

// i = 3, i < 5 => j += i => j = 6
// print j => 6
// i += => i = 4

// i = 4, i < 5 => j += i => j = 10
// print j => 10
// i += => i = 5

// i = 5, i < 5 => end


// 4. j = 39
// 5. 39