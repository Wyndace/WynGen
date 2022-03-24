"use strict"
let password;
let min = document.querySelector('#min');
let max = document.querySelector('#max');
let pass = document.querySelector('#pass');
let generate = document.querySelector('#generate');
let newPass;
let symbols = ['A', 'a', 'B', 'b', 'C', 'c', 'D', 'd', 'E', 'e', 'F', 'f', 'G', 'g', 'H', 'h', 'I', 'i', 'J', 'j', 'K', 'k', 'L', 'l', 'M', 'm', 'N', 'n', 'O', 'o', 'P', 'p', 'Q', 'q', 'R', 'r', 'S', 's', 'T', 't', 'U', 'u', 'V', 'v', 'W', 'w', 'X', 'x', 'Y', 'y', 'Z', 'z', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '!', '$', '%', '&', '(', ')', '?', '@', '[', ']', '{', '|', '}'];
let passCode = `<p>Your password is</p>
<p id="newPass" ></p>
<span id="copyBar">click to copy</span>`;

generate.addEventListener('click', generator);

function generator() {
   show('pass', false);
   password = [];
   let minValue = parseInt(min.value);
   let maxValue = parseInt(max.value);
   if (minValue < 6 || minValue > 40 || min.value === "" || maxValue < 6 || maxValue > 40 || max.value === "") {
      pass.innerHTML = 'The number must be entered in both input fields. Please enter a number from 6 to 40.';
   } else if (minValue > maxValue) {
      pass.innerHTML = `The minimum number of characters mustn't exceed the maximum number of characters.`;
   } else {
      let passLength = randInt(minValue, maxValue);
      for (let i = 0; i < passLength; i++) {
         password[i] = symbols[randInt(0, symbols.length - 1)];
      }
      document.querySelector('#form').style.paddingTop = '20px';
      show('pass', true);
      newPass = document.querySelector('#newPass');
      newPass.innerHTML = password.join('');
      newPass.addEventListener('click', copy)
   }

}

function randInt(min, max) {
   let rand = min + Math.random() * (max + 1 - min);
   return Math.floor(rand);
}

function show(element, turn) {
   let elementId = document.getElementById(element);
   if (turn === true) {
      elementId.innerHTML += passCode;
   } else {
      elementId.innerHTML = '';
   }
}

function copy() {
   newPass = document.querySelector('#newPass');
   let range = new Range();
   let copyBar = document.querySelector('#copyBar');
   range.setStart(newPass, 0);
   range.setEnd(newPass, 1);
   document.getSelection().removeAllRanges();
   document.getSelection().addRange(range);
   document.execCommand("copy");
   copyBar.innerHTML = 'copied!'
}


