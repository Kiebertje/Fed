/*button*/
/*
button = document.querySelector ("button"); 

button.addEventListener ("click", verander);

function verander() {
button.classList.add("mooieding")
} */



/*hamburgermenu */
/*hulp van Alex Lanting klasgenoot */
menu = document.querySelector ("nav ul li:nth-of-type(1)"); 
headerul = document.querySelector("header > ul:nth-of-type(1)")


menu.addEventListener("click", hamburgermenu);

function hamburgermenu() {
headerul.classList.toggle("hamburgermenu")
}

