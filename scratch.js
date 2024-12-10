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

    function parseData(data){
        for(let i=0; i<data.projects.length; i++){
            if(data.projects[i].subdomain == subdomain){
                buildPage(data.projects[i]);
                console.log("Test number 2")
                break;
            }else{
                console.log("pineapple")
                continue;
            }
        }
        console.log("THIS IS A TEST!!!");
    }

    function buildPage(project){
        console.log("THIS IS A TEST!!!");
        console.log(project);
        //trying to get images from json to display on page
        for(let i=0; i<data.projects.length; i++){
            document.getElementById("project").innerHTML +=
            `<div class ="imgpage">
                <img src="../Final/imgs/${data.projects[i].mainimg}">
            </div>`;
        }
        console.log(data.project.mainimg);
        
    }

}else if(button != undefined){
    for(let i=0; i<proj.projects.length;i++){
        if(proj.projects[i].category.includes(button) == true){
            document.getElementById(proj.projects[i].subdomain).style.display = "flex";
        }else{
            document.getElementById(proj.projects[i].subdomain).style.display = "none";
        }
    }

    <img class="displayed-img" src="../img/pic1.png"/>