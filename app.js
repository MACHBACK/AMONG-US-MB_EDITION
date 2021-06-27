const button = document.getElementById("button");
const red = document.getElementById("red");
const redImage = document.getElementById("redImage"); 
const green = document.getElementById("green");
const greenImage = document.getElementById("greenImage");
const cyan = document.getElementById("cyan");
const cyanImage = document.getElementById("cyanImage");

button.onclick =() => {
    if(red.checked){
        redImage.classList.remove("hidden");
        redImage.classList.add("eject");
    }
    if(green.checked){
        greenImage.classList.remove("hidden");
        greenImage.classList.add("eject");
    }if(cyan.checked){
        cyanImage.classList.remove("hidden");
        cyanImage.classList.add("eject");
    }
};

