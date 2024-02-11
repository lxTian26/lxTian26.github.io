//this script is used to set and store user information

//create account
const addUser = (event)=>{
    event.preventDefault();

    //get the user inputed name and password
    const name = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    //if the user does not fill in the information then alert
    if(name === "" || password === ""){
        alert("Please Enter the Username and Password.")
    }else{
        //store all user inputs into the localstorage and set defult personal data
        localStorage.setItem(name, password);
        const userInputs = name+"Words";
        let InputArray = [null];
        let userInputToday = name+" Added Today";
        localStorage.setItem(userInputs, InputArray);
        localStorage.setItem(userInputToday, 'false');
        localStorage.setItem(name+" Theme", 'light');
        alert("Account Created")
    }
    //reset the input area
    document.querySelector('form').reset();
}

//user log in
const userCheck = (event)=>{
    event.preventDefault();

    //get user input value
    const name = document.getElementById('username-login').value;
    const password = document.getElementById('password-login').value;

    let logIn = false;
    let passwordWrong = false;

    //if the user does not fill in the information then alert
    if(name === "" || password === ""){
        alert("Please Enter the Username and Password.")
    }else{
        //check user input accuracy
        for (let i = 0; i < localStorage .length; i++ ){
            //find the user name and password in localstorage
            const userName = localStorage.key(i);
            const userPassword = localStorage.getItem(userName);
    
            //if user input correct then successful log in
            if (name === userName && password === userPassword){
                logIn = true;
                alert("Log in Successfully.")
                location.href="index.html";
                localStorage.setItem('log in','true');
                localStorage.setItem('name position', i);
                refreshUserNamePosition();
 //test only               console.log(logIn);
            }else if (name === userName && password != userPassword){//if user input wrong password
                passwordWrong = true;
            }
        }
        if (logIn === false){//if log in failed then alert
            if (passwordWrong === true){
                alert("Log in Failed - Wrong Password.")
            }else{
                alert("Account doesn't exist. Please Create an Account if you don't have one.")
            }
        }
    }
    
    //reset input area
    document.querySelector('form').reset();
}

//get the username position in localstorage
let position = '', userName = '';
if (localStorage.getItem('log in') === 'true'){
    position = localStorage.getItem('name position');
    userName = localStorage.key(position);
}

//get the username when position in localstorage has changed
function refreshUserNamePosition(){
    for (let i = 0; i < localStorage .length; i++ ){
        const name = localStorage.key(i);

        console.log(userName);
        if (name === userName){
            localStorage.setItem('name position', i);
            console.log(localStorage.getItem('name Positon'));
            
        }
    }
}

//when 1 day has passed, refresh the Add and Add page
function refreshTime(){
    //get the current date and the date user latest updated
    let time = new Date();
    let dayBefore = new Date(localStorage.getItem(userName+" Latest Added Date"));

    //calculate the time gap between dates
    let dayPassed = (time.getTime() - dayBefore.getTime()) / (1000 * (60 * 60) * 24);

    //if passed date more than 1 reset the all users' added taday value in localstorage
    if (dayPassed >= 1){
        for (let i = 0; i < localStorage .length; i++ ){
            if (localStorage.key(i).includes(' Added Today')){
                 localStorage.setItem(localStorage.key(i), 'false');
            }
        }
    }

}

//if user is log in then run the refresh function per second
if (localStorage.getItem('log in') === 'true'){
    setInterval(()=>{
        refreshTime();
    } , 1000);
}

//add user input to localstorage
const addWord = (event)=>{
    event.preventDefault();
    //record the added time
    let time = new Date();

    //get the user inputs and load the key from localstorage
    let word = document.getElementById('text-Input').value;
    let userWords = userName+"Words";
    let localValue = localStorage.getItem(userWords);

    //add the user input into the localstorage
    let newValue = '';
    if (localValue === ''){//if localstorage is null the replace it
        newValue = word;
        time.setHours(0,0,0);//record user first upload input for later data analysing
        localStorage.setItem(userName+"FirstAddDate", time);
    }else{
        newValue = localValue + "," + word;
    }

    //store user input in localstorage
    localStorage.setItem(userWords, newValue);
//test only    console.log(localStorage.getItem(userWords));

    //refresh latest added date for data refresh function (set hour to 0 for better calculating)
    time.setHours(0,0,0);
    let userInputCounts = userName+" Latest Added Date";
    localStorage.setItem(userInputCounts, time);

    //mark the current status of user uploads
    let userInputToday = userName+" Added Today";
    localStorage.setItem(userInputToday, 'true');

    //defult upload button
    const addButton = document.getElementById('add-btn');
    addButton.setAttribute('disabled', 'disabled')

    //find the username position again because new elements are added in localstorage
    refreshUserNamePosition();

    //link to added page
    location.href="added.html";
}

//if user log out
const logOut = (event)=>{
    event.preventDefault();

    localStorage.setItem('log in', 'false');
    location.href="index.html";
}

//if user want to clear all the storage of this website
const clearHistory = (event)=>{
    event.preventDefault();

    //ensure user want to clear all the data
    const confirmation = confirm("Are you sure you want to clear ALL account history for this website?");

    if (confirmation){
        localStorage.clear();
        localStorage.setItem('log in', 'false');
        alert("Account History Cleared")
        document.querySelector('form').reset();
    }
}