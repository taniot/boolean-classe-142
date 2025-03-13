/*
scrivi un programma che CONSUMA una api di posts (https://jsonplaceholder.typicode.com/posts) e stampi in pagina i risultati con un elenco di cards

*/

//const endpoint = 'https://jsonplaceholder.typicode.com/posts';
const endpoint = 'https://dummyjson.com/posts';

const cardsContainer = document.getElementById('cards-container');
//chiamata ad api
axios.get(endpoint)
  .then((response) => {
    //il mio programma si sviluppa QUI
    const posts = response.data.posts;

    //creo elementi html per ogni post
    /*
     <div class="col-12 col-md-4">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <h6 class="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
                  content.
                </p>
                <a href="#" class="card-link">Card link</a>
                <a href="#" class="card-link">Another link</a>
              </div>
            </div>
          </div>
          */
    let items = '';

    posts.forEach(post => {

      items += `<div class="col-12 col-md-4">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">${post.title}</h5>
                <p class="card-text">${post.body}</p>
                <a href="#" class="card-link">Card link</a>
                <a href="#" class="card-link">Another link</a>
              </div>
            </div>
          </div>`;

    })

    //inserisco elementi nel dom
    cardsContainer.innerHTML = items;

  })
  .catch(error => {
    console.log('ahia');
    console.log(error)
    cardsContainer.innerHTML = `<div class="alert alert-danger" role="alert">
  Erroreeeeee!
</div>`;
  })



