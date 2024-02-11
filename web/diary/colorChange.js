//this script is used to change the theme color

//get all components that neeed to change color by their class name
let textChange = document.querySelectorAll(".textChange");
let textChange1 = document.querySelectorAll(".textChange1");
let NavBac = document.querySelectorAll(".bacChange");
let btnChange = document.querySelectorAll(".btnChange");
let btnChange1 = document.querySelectorAll(".btnChange1");
let btnChangeAdd = document.querySelectorAll(".btnAdd");

//change the properties fuctions
const textDark = (element) => {
    element.classList.add("text-dark");
    element.classList.remove("text-white");
};
const textLight = (element) => {
    element.classList.add("text-white");
    element.classList.remove("text-dark");
};
const bacDark = (element)=>{
    element.classList.remove("bg-dark");
    element.classList.add("bg-light");
}
const btnDark = (element) => {
    element.classList.add("btn-outline-dark");
    element.classList.remove("btn-outline-light");
};
const btnLight = (element) => {
    element.classList.add("btn-outline-light");
    element.classList.remove("btn-outline-dark");
};
const btnAddLight = (element) => {
    element.classList.add("btn-light");
    element.classList.remove("btn-dark");
};

//get the theme mode that is stored in local storage
let themeName = localStorage.getItem(userName+" Theme");

if (themeName === "dark"){//if change to dark mode

    //every component that need to change colors will change their properties by using functions created above
    NavBac.forEach((el) => {
        bacDark(el);
    })
   textChange.forEach((el) => {
    textDark(el);
   })
   textChange1.forEach((el) => {
    textLight(el);
   })
   btnChange.forEach((el) => {
    btnDark(el);
   })
   btnChange1.forEach((el) => {
    btnLight(el);
   })
   btnChangeAdd.forEach((el) => {
    btnAddLight(el);
   })

}