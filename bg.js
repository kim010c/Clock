const body = document.querySelector("body");

const IMG_NUMBER = 3;

// function handleImgLoad(){
//     console.log("asdasd")
// }

function paintImage(imgNumber){
    const image = new Image();
    // image.src = `images/${imgNumber + 1}.jpg`;
    image.src = `images/3.jpg`;
    image.classList.add("bgImage");
    body.prepend(image);
    //body.addEventListener("loadend",handleImgLoad);
}

function genRandom(){
    const number = Math.floor(Math.randaom() * IMG_NUMBER);
    return number;
}

function init(){
    const randomNumber =  genRandom;
    paintImage(randomNumber);
}
init();