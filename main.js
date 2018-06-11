/*

TABLE OF CONTENTS
A. Utilities
  1. randomInt function: takes two numbers and returns a random int
  2.

*/

// A. SETUP

var player = {};

// B. Utilities

// 1. randomInt

function randomInt(min, max) {
  //inclusive on both sides
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function GID(el) {
  return document.getElementById(el);
}

// C. Choices

function hideAllChoices() {
  GID("choice0").style.display = "none";
  GID("choice1").style.display = "none";
  GID("choice2").style.display = "none";
  GID("choice3").style.display = "none";
  GID("choice4").style.display = "none";
  GID("choice5").style.display = "none";
  GID("choice6").style.display = "none";
  GID("choice7").style.display = "none";
  GID("choice8").style.display = "none";
  GID("choice9").style.display = "none";
  GID("choice10").style.display = "none";
}

function showChoices(num) {
  for (i = 0; i < num; i++) {
    var el = `choice${i}`
    GID(`${el}`).style.display = "block";
  }
}

function createChoices(arr) {
  for (n = 0; n < arr.length; n++) {
    var el = GID(`choice${n}`);
    el.innerHTML = arr[n].option;
    var f = arr[n].effect;
    el.addEventListener("click", f, false);
  }
  showChoices(arr.length);
}



function chooseRace() {
  hideAllChoices();
  createChoices([
    {
      option: "Human",
      effect: function() {
        player.race = "Human";
      }
    },
    {
      option: "Dwarf",
      effect: function() {
        player.race = "Dwarf"
      }
    },
    {
      option: "Elf",
      effect: function() {
        player.race = "Elf"
      }
    },
    {
      option: "Gnome",
      effect: function() {
        player.race = "Gnome"
      }
    },
    {
      option: "Halfling",
      effect: function() {
        player.race = "Halfling"
      }
    }
  ])
}

function chooseClass() {
  hideAllChoices();
  createChoices([
    {
      option: "Barbarian",
      effect: function() { player.charClass = "Barbarian"}
    },
    {
      option: "Bard",
      effect: function() { player.charClass = "Bard" }
    },
    {
      option: "Cleric",
      effect: function() { player.charClass = "Cleric" }
    },
    {
      option: "Druid",
      effect: function() { player.charClass = "Druid" }
    },
    {
      option: "Fighter",
      effect: function() { player.charClass = "Fighter" }
    },
    {
      option: "Monk",
      effect: function() { player.charClass = "Monk" }
    },
    {
      option: "Paladin",
      effect: function() { player.charClass = "Paladin" }
    },
    {
      option: "Rogue",
      effect: function() { player.charClass = "Rogue" }
    },
    {
      option: "Sorcerer",
      effect: function() { player.charClass = "Sorcerer" }
    },
    {
      option: "Wizard",
      effect: function() { player.charClass = "Wizard" }
    },
  ])
}




//GAME

window.onload = function() {
  chooseRace();
}
