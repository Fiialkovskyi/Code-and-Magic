'use strict';

var setup = document.querySelector(".setup");

setup.classList.remove("hidden");

var names= ["Иван", "Хуан Себастьян", "Мария", "Кристоф", "Виктор", "Юлия", "Люпита", "Вашингтон"];
var surnames = ["да Марья", "Верон", "Мирабелла", "Вальц", "Онопко", "Топольницкая", "Нионго", "Ирвинг"];
var coatColors = ["rgb(101, 137, 164)", "rgb(241, 43, 107)", "rgb(146, 100, 161)", "rgb(56, 159, 117)", "rgb(215, 210, 55)", "rgb(0, 0, 0)"];
var eyesColors = ["black", "red", "blue", "yellow", "green"];
var wizards = [];

function randomArrayItem (arr) {
  var randomNumber = Math.floor(Math.random() * arr.length);
  return arr[randomNumber];
}

function Wizard() {
    this.name = randomArrayItem(names) + " " + randomArrayItem(surnames);
    this.coatColor = randomArrayItem(coatColors);
    this.eyesColor = randomArrayItem(eyesColors);
}

function fillArray(arr, qty) {
    for (var i = 0; i < qty; i++) {
        arr[i] = new Wizard();
    }
}

fillArray(wizards, 4);

console.log(wizards);