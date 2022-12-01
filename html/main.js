function submit() {
  alert("Completed Submitting Resume")
}

function changeValue() {
  document.getElementById("input_submit").setAttribute("value", " Submitted")
}

const buttonSubmit = document.getElementById("button_submit");

buttonSubmit.addEventListener("click", submit);

console.log("Break point 1")
console.log("Break point 2")
console.log("Break point 3")

for (let i = 0; i < 5; i ++) {
  console.log("TEST")
  if (i === 3) break;
}