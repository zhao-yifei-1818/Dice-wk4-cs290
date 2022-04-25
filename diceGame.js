var dieArray = (1, 2, 3, 4, 5);
var dieNumber = 1;
// function make_dies_have_its_number(){
//     console.log("initializing...");
    
//     var dieArray = (1, 2, 3, 4, 5);
//     return dieArray;
// }



function roll() {
    console.log("Rolling");



    for (let i = 1;i <= 5; i++){
        console.log("forloopworking");
        
        // if its locked then its locked...
        if (isLocked(i-1)){
            console.log("its locked skipping it...");
            }

        //if it's not set that one to random number.
        else{
        console.log("it's unlocked/setting it...");
        dieNumber = i;
        setDie(dieNumber, random_number());
        }   
    }
        
    
    return
}

function score() {
    console.log("Scoring");

    let message = "You need to write score()\n...";
    displayScoring(message);
}

// give back a random number 1~6
function random_number(){
    console.log("_random_numbering");
    let random_point_1 = Math.floor((Math.random()*6) +1);

    return random_point_1;
}



//------------------------------------------------
//YOUR CODE ABOVE
//You may call the functions listed below but should not modify them

//returns the value showing on the given die (1-5)
function getDieValue(dieNumber) {
    let die = document.getElementById('die' + dieNumber);
    return die.textContent;
}

//Changes the given die number (1-5) to the given value (1-6)
function setDie(dieNumber, value) {
    console.log("setting it...");
    let die = document.getElementById('die' + dieNumber);
    let regex = /\d+/;
    die.className = die.className.replace(regex, value);
    die.innerText = value;
}

//returns true if the given die number (1-5) is in the locked state, false if not
function isLocked(dieNumber) {
    let die = document.getElementById('die' + dieNumber);
    return die.className.indexOf("-fill") != -1;
}

//displays the message in the scoring information textarea
function displayScoring(message) {
    let textarea = document.getElementById('score-report');
    textarea.value = message;
}