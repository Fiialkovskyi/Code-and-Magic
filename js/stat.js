"use strict";

var CLOUD_X = 100;
var CLOUD_Y = 10;
var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var SHADOW_GAP = 10;
var TEXT_X = 120;
var TEXT_Y = 45;
var TEXT_GAP = 20;
var BAR_X = 120;
var BAR_Y = 230;
var BAR_HEIGHT = 150;
var BAR_WIDTH = 40;
var BAR_GAP = 50;
var TEXT_STATS_X = 120;
var TEXT_STATS_Y = 250;




var renderCloud = function(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var renderText = function(ctx, text, x, y, color) {
    ctx.fillStyle = color;
    ctx.font = "16px PT Mono";
    ctx.fillText(text, x, y);
};

var generateRandomColor = function() {
    var randomBrightness = Math.floor(Math.random() * 255);
    var randomColor = "rgb(0," + randomBrightness + ",255)";
    return randomColor;
};

var getMaxElement = function(arr) {
  var maxElement = arr[0];
  for (var i = 0; i < arr.length; i++) {
      if (arr[i] > maxElement) {
          maxElement = arr[i];
      }
  }
  return maxElement;
};

window.renderStatistics = function(ctx, names, times) {
    var maxElement = getMaxElement(times);

    renderCloud(ctx, CLOUD_X + SHADOW_GAP, CLOUD_Y + SHADOW_GAP, "rgba(0, 0, 0, 0.7)");
    renderCloud(ctx, CLOUD_X, CLOUD_Y, "#FFF");
    renderText(ctx, "Ура вы победили!", TEXT_X, TEXT_Y, "black");
    renderText(ctx, "Список результатов:", TEXT_X, TEXT_Y + TEXT_GAP, "black");

    for (var i = 0; i < names.length; i++) {
        renderText(ctx, names[i], TEXT_STATS_X + ((BAR_GAP + BAR_WIDTH) * i), TEXT_STATS_Y, "black");
        if (names[i] === "Вы") {
            ctx.fillStyle = "rgba(255, 0, 0, 1)";
        } else {
            ctx.fillStyle = generateRandomColor();
        }
        ctx.fillRect(BAR_X + ((BAR_GAP + BAR_WIDTH) * i), BAR_Y, BAR_WIDTH, -(BAR_HEIGHT * times[i]) / maxElement);
    }
};

/*
"use strict";

var CLOUD_WIDTH = 500;
var CLOUD_HEIGHT = 200;
var CLOUD_X = 100;
var CLOUD_Y = 50;
var GAP = 10;
var FONT_GAP = 15;
var TEXT_WIDTH = 50;
var BAR_HEIGHT = 20;
var barWidth = CLOUD_WIDTH - GAP - TEXT_WIDTH - GAP;

var renderCloud = function(ctx, x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function(arr) {
    var maxElement = arr[0];

    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > maxElement) {
            maxElement = arr[i];
        }
    }

    return maxElement;
};

window.renderStatistics = function (ctx, players, times) {
    renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, "rgba(0, 0, 0, 0.3");
    renderCloud(ctx, CLOUD_X, CLOUD_Y, "#fff");

    ctx.fillStyle = "#000";

    var maxTime = getMaxElement(times);

    for (var i = 0; i < players.length; i++) {
        ctx.fillText(players[i], CLOUD_X + GAP, CLOUD_Y + GAP + FONT_GAP + (GAP +BAR_HEIGHT) * i);
        ctx.fillRect(CLOUD_X + GAP + TEXT_WIDTH, CLOUD_Y + GAP + (GAP + BAR_HEIGHT) * i, (barWidth * times[i] / maxTime), BAR_HEIGHT);
    }
};

 */