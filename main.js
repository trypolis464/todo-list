/*
 * Todo-List.
 * A simple HTML application for basic todos.
 * 
 * Copyright (C) 2021, Ty Gillespie. All rights reserved.
 * MIT License.
 */

"use strict"

function newItem() {
  let item = document.getElementById("input").value;
  let  ul = document.getElementById("list");
  let li = document.createElement("li");
  li.appendChild(document.createTextNode(item));
  ul.appendChild(li);
  document.getElementById("input").value = "";
  li.onclick = removeItem;
}

document.body.onkeyup = function (e) {
  if (e.keyCode == 13) { // The enter key.
    newItem();
  }
};

function removeItem(e) {
  e.target.remove()
}
