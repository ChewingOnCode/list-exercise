// DOM EVENTS
var button = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul");

function inputLength() {
  return input.value.length;
}

function createListElement() {
  var li = document.createElement("li");
  // Attached testing to the <li></li> that was created.
  li.appendChild(document.createTextNode(input.value));
  // Append a child to the <ul></ul>
  ul.appendChild(li);
  input.value = "";
}

function addToListOnClick() {
  if (inputLength() > 0) {
    createListElement();
  }
}
function addToListOnPress(event) {
  if (inputLength() > 0 && event.key === 13) {
    createListElement();
  }
}
// On Click Event
button.addEventListener("click", addToListOnClick);
// On Keypress event
input.addEventListener("keypress", addToListOnPress);
