let subdomain = window.location.href.slice(window.location.href.lastIndexOf("/")+1, window.location.href.lastIndexOf("."));
console.log(subdomain);

fetch('../Final/projects.json')
    .then(response =>{
        return response.json();
    }).then(projects => {
        console.log(projects);
        parseData(projects);
    }).catch(err =>{
        console.log(`error ${err}`);
    })

function parseData(projects){
    for(let i=0; i<projects.projects.length; i++){
        if(projects.projects[i].subdomain == subdomain){
            console.log("orange")
            buildPage(projects.projects[i]);
            break;
        }else{
            console.log("pineapple")
            continue;
        }
    }
}



function buildPage(project){
    //setting main slideshow image & title
    document.getElementById("full-img").innerHTML +=
    `<img class="displayed-img" src="../Final/imgs/${project.mainimg}"></img>`;

    document.getElementById("title").innerHTML +=
    `<h1>${project.name}</h1>`;

    //declaring variables for slideshow
    const thumbBar = document.querySelector('.thumb-bar');
    const displayedImage = document.querySelector('.displayed-img');

    //slideshow function
    for(let i = 0; i < project.images.length; i++){
        const newImage = document.createElement('img');
        newImage.setAttribute('src', `../Final/imgs/${project.images[i]}`);
        thumbBar.appendChild(newImage);
        newImage.addEventListener('click',() =>{
            displayedImage.setAttribute('src',`../Final/imgs/${project.images[i]}`);
        });
    }
        document.getElementById("project").innerHTML +=
            `<h4>${project.description}</h4>`;

}



