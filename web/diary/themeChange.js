//this script is used to choose the theme mode by click the setting icon and store mode information in localstorage

//add eventlistener to the setting icon
document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('settingBtn').addEventListener('click', theme);
});

const theme = (event)=>{
    event.preventDefault();
    //get the theme mode from localstorage
    const theme = localStorage.getItem(userName+" Theme");
    
    //display or hide light and dark button if theme changes
    if (theme === "light"){
        document.getElementById("dark").style.display = "block";
        document.getElementById("light").style.display = "none";
    }else if (theme === "dark"){
        document.getElementById("dark").style.display = "none";
        document.getElementById("light").style.display = "block";
    }

}

//add eventlistener to the mode buttons
document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('light').addEventListener('click', themeSwitchLight);
});
document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('dark').addEventListener('click', themeSwitchDark);
});

//reset the theme mode information in localstorage
const themeSwitchLight = (event)=>{
    event.preventDefault();

    localStorage.setItem(userName+" Theme", "light");
    location.reload()
}
const themeSwitchDark = (event)=>{
    event.preventDefault();

    localStorage.setItem(userName+" Theme", "dark");
    location.reload()
}
