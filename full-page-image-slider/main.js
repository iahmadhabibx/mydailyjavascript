var index = 1;
function slideImage(slideTo) {
    let image = document.querySelector(".image-slider");

    if (slideTo === "left") {
        if(index == 1) {
            index = 6;
        }
        else {
            index--;
        }
        image.src = "./images/image"+index+".jpg";
    }
    if (slideTo === "right") {
        if(index == 6) {
            index = 1;
        }
        else {
            index++;
        }
        image.src = "./images/image"+index+".jpg";
     }
}