
const btn = document.querySelector('button');
const comicImage = document.querySelector('img');
const comicTitle = document.querySelector('h1');
const comicDate = document.querySelector('h2')

// Make a GET request
async function comicGenerate(){
        //making a random number
        let rand = Math.floor(Math.random()*(3000));
        let num = rand.toString();


        const apiURL = `https://corsproxy.io/?https://xkcd.com/${num}/info.0.json`;
        const response = await fetch(apiURL);
        if (!response.ok) {
        throw new Error('Network response was not ok');
        }
        const json = await response.json();
        console.log(json);

        // Defining Local Variables
        const title = json.title
        const image = json.img;
        const alt = json.alt;
        const date = json.month + '/' + json.day + '/' + json.year;

        comicImage.setAttribute('src', image);
        comicImage.setAttribute('alt', alt);
        comicTitle.innerText = title;
        comicDate.innerText = date;
}

btn.addEventListener('click', () => {
    comicGenerate();
})
