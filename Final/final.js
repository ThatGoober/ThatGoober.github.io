// getting json data
let proj;
fetch('../Final/projects.json')
    .then(response =>{
        return response.json();
    }).then(projects => {
        console.log(projects);
        proj = projects;
        parseData(projects);
    }).catch(err =>{
        console.log(`error ${err}`);
    })

// building the page
function parseData(data){
    for(let i=0; i<data.projects.length; i++){
        document.getElementById("projects").innerHTML += 
            `<a href="../Final/${data.projects[i].subdomain}.html">
            <div class="row project" id="${data.projects[i].subdomain}">
                <div class ="projimg"><img src="../Final/imgs/${data.projects[i].mainimg}"></div>
                <div class ="description"><h3>${data.projects[i].name}</h3><h6 class="subtitle">${data.projects[i].subtitle}</h6><p>${data.projects[i].description}</p></div>
            </div>
            </a>`;
    }
}


//button script and filtering
for(b of document.querySelectorAll("#buttons button")){
    b.addEventListener("click", e=>{
        console.log(e.target.value);
        sortProjects(e.target.value);
    })
}

function sortProjects(button){
    if(button == "clear"){
        for(let i=0; i<proj.projects.length; i++){
            document.getElementById(proj.projects[i].subdomain).style.display = "flex";
        }
    }else if(button != undefined){
        for(let i=0; i<proj.projects.length; i++){
            if(proj.projects[i].category.includes(button) == true){
                document.getElementById(proj.projects[i].subdomain).style.display = "flex";
            }else{
                document.getElementById(proj.projects[i].subdomain).style.display = "none";
            }
        }
    }
    else{
        console.log("error, button value is undefined");
    }
}

