/*
 * Todo-List.
 * A simple HTML application for basic todos.
 * 
 * Copyright (C) 2021, Ty Gillespie. All rights reserved.
 * MIT License.
 */

"use strict"

class Speech {
  constructor() {
    this.aria = document.createElement("div");
    this.aria.id = "speech";
    this.aria.style = "position: absolute; left: 0px; top: -400px";
    this.aria.setAttribute("aria-live", "assertive");
    document.body.appendChild(this.aria);
  }

  speak(text) {
    this.aria.innerHTML = "";
    const para = document.createElement("p");
    para.appendChild(document.createTextNode(text));
    this.aria.appendChild(para);
  }
}

let speech = new Speech();

function newItem() {
  let item = document.getElementById("input").value;
  let  ul = document.getElementById("list");
  let li = document.createElement("li");
  li.appendChild(document.createTextNode(item));
  ul.appendChild(li);
  speech.speak("Item added!");
  document.getElementById("input").value = "";
  li.onclick = removeItem;
}

document.body.onkeyup = function (e) {
  if (e.keyCode == 13) { // The enter key.
    newItem();
  }
};

function removeItem(e) {
  speech.speak("Item removed! " + e.target);
  e.target.remove()
}
