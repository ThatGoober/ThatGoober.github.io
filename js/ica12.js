// Define the API URL
const apiUrl = 'https://catfact.ninja/fact';
const btn = document.querySelector('button');
const catfacts = document.querySelector('h1');

// Make a GET request
function getJoke(){

    fetch(apiUrl)
    .then(response => {
        if (!response.ok) {
        throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log(data.fact);
        thefact = data.fact;
        catfacts.innerText = thefact;
    })
    .catch(error => {
        console.error('Error:', error); 
    });
}

btn.addEventListener('click', () => {
    console.log('testing 123')
    getJoke();
})
  

  