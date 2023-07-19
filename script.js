//Categories with all possible words in each category
var PRESIDENTS = ["Adams", "QuincyAdams", "Arthur", "Buchanan", "Bush", "Bush", "Carter", "Cleveland", "Clinton", "Coolidge", "Eisenhower", "Fillmore", "Ford", "Garfield", "Grant", "Harding", "Harrison", "Harrison", "Hayes", "Hoover", "Jackson", "Jefferson", "Johnson", "Johnson", "Kennedy", "Lincoln", "Madison", "McKinley", "Monroe", "Nixon", "Obama", "Pierce", "Polk", "Reagan", "Roosevelt", "DelanoRoosevelt", "Taft", "Taylor", "Truman", "Trump", "Tyler", "VanBuren", "Washington", "Wilson"];
var ELEMENTS = ["Hydrogen", "Helium", "Lithium", "Beryllium", "Boron", "Carbon", "Nitrogen", "Oxygen", "Fluorine", "Neon", "Sodium", "Magnesium", "Aluminum", "Silicon", "Phosphorus", "Sulfur", "Chlorine", "Argon", "Potassium", "Calcium", "Scandium", "Titanium", "Vanadium", "Chromium", "Manganese", "Iron", "Cobalt", "Nickel", "Copper", "Zinc", "Gallium", "Germanium", "Arsenic", "Selenium", "Bromine", "Krypton", "Rubidium", "Strontium", "Yttrium", "Zirconium", "Niobium", "Molybdenum", "Technetium", "Ruthenium", "Rhodium", "Palladium", "Silver", "Cadmium", "Indium", "Tin", "Antimony", "Tellurium", "Iodine", "Xenon"];
var EASYWORDS = ["a", "about", "all", "also", "and", "as", "at", "be", "because", "but", "by", "can", "come", "could", "day", "do", "even", "find", "first", "for", "from", "get", "give", "go", "have", "he", "her", "here", "him", "his", "how", "I", "if", "in", "into", "it", "its", "just", "know", "like", "look", "make", "man", "many", "me", "more", "my", "new", "no", "not", "now", "of", "on", "one", "only", "or", "other", "our", "out", "people", "say", "see", "she", "so", "some", "take", "tell", "than", "that", "the", "their", "them", "then", "there", "these", "they", "thing", "think", "this", "those", "time", "to", "two", "up", "use", "very", "want", "way", "we", "well", "what", "when", "which", "who", "will", "with", "would", "year", "you", "your"];
var SPELLINGBEE = ["Chiaroscurist", "Jazz", "superstitious"]

//Lists the categories and their arrays
var CATEGORIES = [["U.S. Presidents", PRESIDENTS], ["Elements", ELEMENTS], ["Baby Words", EASYWORDS], ["Difficult Words", SPELLINGBEE]];

//Global variables
var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var difficulty = 0;
var result = "";
var Word = "";
var guessedLetters = [];
var numGuesses = 8;
//once at start of the game
function startGame() {

document.getElementById("guessedLetters").innerHTML = "";
document.getElementById("numGuesses").innerHTML = "";

difficulty = document.getElementById("difficulty").value;
if(difficulty == 1){
    Word = PRESIDENTS[Math.floor(Math.random() * PRESIDENTS.length)];
}
if(difficulty == 2){
    Word = ELEMENTS[Math.floor(Math.random() * ELEMENTS.length)];
}
if(difficulty == 3){
    Word = EASYWORDS[Math.floor(Math.random() * EASYWORDS.length)];
}
if(difficulty == 4){
    Word = SPELLINGBEE[Math.floor(Math.random() * SPELLINGBEE.length)];
}
Word = Word.toUpperCase();
console.log(Word);
result = "";
guessedLetters = [];
document.getElementById("winLose").innerHTML= "";
printWord();
}

//Print word and update word every guess
function printWord(){
  console.log(Word);
  console.log(guessedLetters);
  result = "";
  for(var i = 0; i < Word.length; i ++){
    if(guessedLetters.indexOf(Word[i]) > -1){
        result += Word[i];
    }else{
        result += "_ ";
    }
  }
  document.getElementById("numGuesses").innerHTML = numGuesses;
  document.getElementById("guessWord").innerHTML = result;
  if(result == Word){
    document.getElementById("winLose").innerHTML = "YOU WIN";
  }
  if(numGuesses == 0){
    document.getElementById("guessWord").innerHTML = Word;
  }
}

//every time the user enters a guess
function guessLetter(){
  var letter = document.getElementById("guessedLetter").value.toUpperCase();
  console.log(letter, Word);
  if(letter == ""){
    numGuesses == numGuesses;
  }
  if(alphabet.indexOf(letter) > -1 && letter != "" && letter.length == 1 && numGuesses > 0 && guessedLetters.indexOf(letter) == -1 && isNaN(parseInt(letter))){
    guessedLetters.push(letter);
    if(Word.indexOf(letter) == -1){
      numGuesses --;
    }
  }
  if(numGuesses == 0){
    document.getElementById("winLose").innerHTML = "YOU LOSE";
  }
  document.getElementById("guessedLetters").innerHTML = guessedLetters.toString();
  document.getElementById("numGuesses").innerHTML = numGuesses;
  document.getElementById("guessedLetter").value = "";
  console.log(numGuesses);
  printWord();
}
