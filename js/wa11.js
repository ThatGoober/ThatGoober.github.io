const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */

const img_Names = ['../img/pic1.jpg','../img/pic2.jpg','../img/pic3.jpg','../img/pic4.jpg','../img/pic5.jpg'];

/* Declaring the alternative text for each image file */

const img_Alts = ['eye','rock','flower','egypt','butterfly'];

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

btn.addEventListener('click',darken);

function darken(){
    let x = document.getElementsByClassName('overlay');
    x.style.color = "green";
}