const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */

const img_Names = ['../img/pic1.png','../img/pic2.png','../img/pic3.png','../img/pic4.png','../img/pic5.png'];

/* Declaring the alternative text for each image file */

const img_Alts = ['an orange robot','a shiny packet','a drone above text','a calm window scene','a drone from behind'];

/* Looping through images */
for(let i = 0; i < img_Names.length; i++){
    const newImage = document.createElement('img');
    newImage.setAttribute('src', img_Names[i]);
    newImage.setAttribute('alt', img_Alts[i]);
    thumbBar.appendChild(newImage);
    newImage.addEventListener('click',() =>{
        displayedImage.setAttribute('src',img_Names[i]);
    });
    
}

/* Wiring up the Darken/Lighten button */

let toggle = false;

btn.addEventListener('click', () =>{
    if(!toggle){
        overlay.style.backgroundColor = "rgba(0,0,0,0.5)";
        toggle = true;
    }
    else{
        overlay.style.backgroundColor = "rgba(0,0,0,0.0)";
        toggle = false;
    }
});

