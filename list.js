// DOM EVENTS
var button = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul");
function inputLength() {
  return input.value.length;
}

function createListElement() {
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(input.value));
  // Append a child to the <ul></ul>
  ul.appendChild(li);
  // Creates a boolean that toggles done class on li
  li.addEventListener("click", function () {
    var complete = this.classList.toggle("done");
    var delButton = document.createElement("button");
    delButton.classList.add("delete");
    if (complete) {
      // Add a textnode to the delete button
      delButton.appendChild(document.createTextNode("remove"));
      delButton.classList = "delete";
      li.appendChild(delButton);
      delButton.addEventListener("click", function () {
        this.parentElement.remove();
      });
    }
  });
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
