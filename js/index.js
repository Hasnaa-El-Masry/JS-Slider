// Declare All Variables:

var sliderImgs = Array.from(document.querySelectorAll(".img-fluid"));

var lightBox = document.getElementById("light-box");

var lightBoxImg = lightBox.firstElementChild;

var closeIcon = document.getElementById("close");

var prev = document.getElementById("left");

var next = document.getElementById("right");

var currentIndex = 0;

var currentImgSrc = "";

// Add Event click on all images:

for(var i=0 ; i<sliderImgs.length ; i++){

    sliderImgs[i].addEventListener("click", function(e){

        showLightBox(e);

    });

}

//Display Light Box:

function showLightBox(e){

    currentIndex =  sliderImgs.indexOf(e.target);

    currentImgSrc = e.target.src;

    lightBox.style.transform = "scale(1)";

    lightBoxImg.style.transform = "scale(1)";

    lightBoxImg.style.backgroundImage = `url(${currentImgSrc})` ;
}

//Close Light Box:

closeIcon.addEventListener("click",closeLightBox);

function closeLightBox(){

    lightBox.style.transform = "scale(0)";
    lightBoxImg.style.transform = "scale(0)";


}

// Go to next image:

next.addEventListener("click",goNext);

function goNext(){

    if(currentIndex == sliderImgs.length-1 ){

        currentIndex = 0;

    }else {

        currentIndex++;

    }

    currentImgSrc = sliderImgs[currentIndex].src;

    lightBoxImg.style.backgroundImage = `url(${currentImgSrc})`;

}

// Go to previous image:

prev.addEventListener("click",goPrev);

function goPrev(){

    if(currentIndex == 0 ){

        currentIndex = sliderImgs.length-1;

    }else {

        currentIndex--;

    }

    currentImgSrc = sliderImgs[currentIndex].src;

    lightBoxImg.style.backgroundImage = `url(${currentImgSrc})`;
}

// Go to previous , next image and close the lightbox with keyboard :

document.addEventListener("keydown", function(e){

    if(e.key == 39){

        goNext();

    }else if (e.target.keyCode == 37){

        goPrev();

    }else if (e.target.keyCode == 27){

        closeLightBox();

    }
});

// Close light box if you click on anywhere in the window except slider image:

document.addEventListener("click",function(e){
 
    if( e.target == lightBox){
        closeLightBox();    }
});





