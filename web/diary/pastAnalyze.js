//this script is used to analyze the data that need to display in review your "past" page

//set defult public value
let totalDays = 0;
let firstWord = '';
let most = '';
let words = []
let counter = []
let multipleAvaliable = false;
let over50p= false;

pastAnalyze();

//analyze data
function pastAnalyze(){
    //get the username from localstorage
    let position = localStorage.getItem('name position');
    let userName = localStorage.key(position);

    //get current date and the first date user added the word
    let time = new Date();
    let timeFirst = new Date(localStorage.getItem(userName + "FirstAddDate"));
    let wordsFromStorage = localStorage.getItem(userName + "Words");
    //calculate how many days user have been on this web
    totalDays = Math.ceil((time.getTime() - timeFirst.getTime()) / (1000 * (60 *60) * 24));
   
    //split the words from user word database
    words = wordsFromStorage.split(',');

    //record the first word user uploaded
    firstWord = words[0];

    //calculate how may times per word is used by multiDetect funtion and store in counter array
    for (let i = 0; i < words.length; i++){
        counter.push(multiDetect(words, i));
    }
    
    //find whether user has uploaded the same word
    for(let i = 0; i < counter.length; i++){
        if (counter[i] > 1){
            multipleAvaliable = true;
        }
    }

    if (multipleAvaliable === true){
        //calculate which word user used most if user has uploaded the same word multiple times
        most = Math.max(...counter);
        
        //record if the word occupies more than 50% of the entire array
        if (counter[most] >= (words.length / 2)){
            over50p = true;
        }
    }
//test only console.log(totalDays)
}

//used to check how many times the  word is used
function multiDetect(name, number){
    let counter = 0;
    for (let i = 0; i < name.length; i++){
        if (name[number] === name[i]){
            counter ++;
        }
    }
    return counter;
}

//link the components that need to display to html page
let dayTotal = document.querySelector("#totalDays");
dayTotal.innerHTML = totalDays;
let wordFirst = document.querySelector("#firstWord");
wordFirst.innerHTML = firstWord;
let multiUsed = document.querySelector("#multiWord");
multiUsed.innerHTML = words[most];
let multiTimes = document.querySelector("#multiTime");
multiTimes.innerHTML = counter[most];

//display this text if user upload a word multiple times
if (multipleAvaliable === true){
    document.getElementById("multiAvaliable").style.display = "inline-block";
}else {
    document.getElementById("multiAvaliable").style.display = "none";
}
if (over50p === true){
    document.getElementById("over50").style.display = "inline-block";
}else {
    document.getElementById("over50").style.display = "none";
}