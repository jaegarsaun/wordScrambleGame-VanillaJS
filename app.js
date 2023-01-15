// List of words to be guessed

const fruits = [
  "apple",
  //   "banana",
  //   "orange",
  //   "grape",
  //   "strawberry",
  //   "pineapple",
  //   "watermelon",
  //   "blueberry",
  //   "raspberry",
  //   "kiwi",
  //   "mango",
  //   "lemon",
  //   "lime",
  //   "coconut",
  //   "cherry",
  //   "peach",
  //   "pear",
  //   "plum",
  //   "apricot",
  //   "avocado",
  //   "blackberry",
  //   "cantaloupe",
  //   "fig",
  //   "grapefruit",
  //   "guava",
  //   "jackfruit",
  //   "lychee",
  //   "mandarin",
  //   "melon",
  //   "nectarine",
  //   "papaya",
  //   "persimmon",
  //   "pineapple",
  //   "pomegranate",
  //   "quince",
  //   "tangerine",
  //   "tomato",
  //   "watermelon",
];
// const action = [
//   "Standing",
//   "Reading",
//   "Singing",
//   "Flying",
//   "Watching",
//   "Sleeping",
//   "Writing",
//   "Coloring",
//   "Drinking",
//   "Cooking",
//   "Washing",
//   "Waiting",
//   "Eating",
//   "Talking",
//   "Laughing",
//   "Crying",
//   "Dancing",
//   "Running",
//   "Swimming",
//   "Jumping",
//   "Walking",
//   "Playing",
//   "Smiling",
//   "Climbing",
//   "Falling",
//   "Hiding",
//   "Hugging",
//   "Kissing",
//   "Lying",
//   "Praying",
//   "Riding",
//   "Sitting",
//   "Sneezing",
//   "Talking",
//   "Thinking",
//   "Waving",
//   "Whistling",
//   "Working",
// ];

//Get the HTML elements
const word = document.getElementById("word");
const form = document.getElementById("form");
const hintCont = document.getElementsByClassName("hintCont")[0];
let unScrambledWord;
let scrambledWord;
let hint;

// Display a word

function displayWord() {
  // Pick a random word
  let decideWords = Math.floor(Math.random() * 2);

  switch (decideWords) {
    case 1: // Fruit Case
      hint = "A type of fruit";
      //Pick the word
      unScrambledWord = fruits[Math.floor(Math.random() * fruits.length)];
      //Scramble the word
      strarray = unScrambledWord.split("");
      var i, j, k;
      for (i = 0; i < strarray.length; i++) {
        j = Math.floor(Math.random() * i);
        k = strarray[i];
        strarray[i] = strarray[j];
        strarray[j] = k;
      }
      scrambledWord = strarray.join("");
      //Display the word
      word.innerHTML = scrambledWord;
      
      break;
    // case 2: // Action Case
    //     let actionWord = action[Math.floor(Math.random() * action.length)];
    //     break;
  }
}
//Handle form submit
function formSubmit() {
    var userInput = document.getElementById("input").value;
    userInput.toLowerCase();
    console.log(userInput);
    if (userInput === unScrambledWord) {
      word.innerHTML = 'CORRECT!';
      document.getElementById("input").value = "";
    } else {
      word.innerHTML = 'INCORRECT!';
      document.getElementById("input").value = "";
    }
  }
function showHint() {
    if(hintCont.innerHTML === hint){
        hintCont.innerHTML = "";
    }else{
        if(hint == undefined){
            hintCont.innerHTML = "No hint available";
        }else{
            hintCont.innerHTML = hint;
        }
    }
}
