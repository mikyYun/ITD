function submit() {
  alert("Completed Submitting Resume");
  const msg = document.getElementById("input_submit");
  const value = document.getElementById("input_submit").innerText;
  if (value === "Incomplete") msg.innerText = "Complete";
}


const buttonSubmit = document.getElementById("button_submit");

buttonSubmit.addEventListener("click", submit);
