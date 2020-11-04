'use strict';

var setup = document.querySelector(".setup");

var names= ["Иван", "Хуан Себастьян", "Мария", "Кристоф", "Виктор", "Юлия", "Люпита", "Вашингтон"];
var surnames = ["да Марья", "Верон", "Мирабелла", "Вальц", "Онопко", "Топольницкая", "Нионго", "Ирвинг"];
var coatColors = ["rgb(101, 137, 164)", "rgb(241, 43, 107)", "rgb(146, 100, 161)", "rgb(56, 159, 117)", "rgb(215, 210, 55)", "rgb(0, 0, 0)"];
var eyesColors = ["black", "red", "blue", "yellow", "green"];
var fireballColors = ["black", "red", "blue", "yellow", "green"];
console.log(fireballColors);
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

var setupSimilar = document.querySelector(".setup-similar");
var setupSimilarList = document.querySelector(".setup-similar-list");
var similarWizardsTemplate = document.querySelector("#similar-wizard-template").content.querySelector(".setup-similar-item");

var renderWizard = function (wizard) {
  var wizardElement = similarWizardsTemplate.cloneNode(true);
  wizardElement.querySelector(".setup-similar-label").textContent = wizard.name;
  wizardElement.querySelector(".wizard-coat").style.fill = wizard.coatColor;
  wizardElement.querySelector(".wizard-eyes").style.fill = wizard.eyesColor;

  return wizardElement;
};



var fragment = document.createDocumentFragment();

for (var i = 0; i < wizards.length; i++) {
    fragment.appendChild(renderWizard(wizards[i]));
}

setupSimilarList.appendChild(fragment);
setupSimilar.classList.remove("hidden");


// Lesson 4
var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;
var setupOpen = document.querySelector(".setup-open");
var setup = document.querySelector(".setup");
var setupClose = setup.querySelector(".setup-close");

var onPopupEscPress = function (evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    closePopup();
  }
};

var openPopup = function() {
  setup.classList.remove("hidden");
  document.addEventListener("keydown", onPopupEscPress);
}

var closePopup = function() {
  setup.classList.add("hidden");
  document.removeEventListener("keydown", onPopupEscPress);
}

setupOpen.addEventListener("click", function() {
  openPopup();
});

setupOpen.addEventListener("keydown", function(evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    openPopup();
  }
});

setupClose.addEventListener("click", function() {
  closePopup();
});

setupClose.addEventListener("keydown", function(evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    closePopup();
  }
});

var userNameInput = setup.querySelector(".setup-user-name");
userNameInput.addEventListener("invalid", function(evt) {
  if (userNameInput.validity.tooShort) {
    userNameInput.setCustomValidity("Имя должно состоять минимум из двух символов");
  } else if (userNameInput.validity.tooLong) {
    userNameInput.setCustomValidity("Имя не должно превышать 25-ти символов");
  } else if (userNameInput.validity.valueMissing) {
    userNameInput.setCustomValidity("Обязательное поле");
  } else {
    userNameInput.setCustomValidity("");
  }
});

// Изменение цвета мантии персонажа по нажатию
var setupPlayer = document.querySelector(".setup-player");
var wizardCoat = setupPlayer.querySelector(".wizard-coat");

function pickNextArrayItem (arr, element) {
  var i = arr.indexOf(element);
  if (i === -1) {
    i = 0;
    console.log(i);
  } else if (i === arr.length -1) {
    i = 0;
  } else {
    i++;
  }
  return arr[i];
}

wizardCoat.addEventListener("click", function () {
   wizardCoat.style.fill = pickNextArrayItem(coatColors, wizardCoat.style.fill);
});

// Изменение цвета глаз персонажа по нажатию
var wizardEyes = setupPlayer.querySelector(".wizard-eyes");

wizardEyes.addEventListener("click", function () {
  wizardEyes.style.fill = pickNextArrayItem(eyesColors, wizardEyes.style.fill);
});

// Изменение цвета фаерболов по нажатию
var setupFireballWrap = setupPlayer.querySelector(".setup-fireball-wrap");
var inputFireballColor = setupPlayer.querySelector("input");


setupFireballWrap.addEventListener("click", function () {
  var color = pickNextArrayItem(fireballColors, setupFireballWrap.style.backgroundColor)
  setupFireballWrap.style.background  = color;
  console.log(inputFireballColor.getAttribute("value"));
  inputFireballColor.setAttribute("value", color);
});