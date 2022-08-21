//API Page
const base_url = "https://imdb-api.com/en/API/Search/k_jxlirbs9/"
//API Key
const api_key = "k_jxlirbs9"

function searchMedia(event){

    event.preventDefault();

    const form = new FormData(this);
    const query = form.get("search");

    fetch(`${base_url}${query}`)
    .then(res=>res.json())
    .then(updateDom)
    .catch(err=>console.warn(err.message));
}

function updateDom(data){

    const searchResults = document.getElementById('search-results');
    
    searchResults.innerHTML = data.results
        .map(anime=>{
            return `
        
                    <div class="card">
                        <div class="card-image">
                        <img src="${anime.image}">
                        </div>
                        <div class="card-content">
                        <span class="card-title">${anime.title}</span>
                        <p>${anime.description}</p>
                        </div>
                        <div class="card-action">
                        <a href="https://imdb.com/title/${anime.id}" target="_blank">See More</a>
                        </div>
                    </div>
        `
        }).join("");

    data.results.forEach(media=>console.log(media));
}


function pageLoaded(){
    const form = document.getElementById('search-form');
    form.addEventListener("submit" , searchMedia);
    form.addEventListener("change" , searchMedia);
}

mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

window.addEventListener("load", pageLoaded)