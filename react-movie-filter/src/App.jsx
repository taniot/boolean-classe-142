import { useEffect, useState } from "react"
import moviesData from "./data/movies"
import SelectSearch from "./components/search/SelectSearch";


function App() {
  const [movies, setMovies] = useState(moviesData);
  const [findMovies, setFindMovies] = useState(movies);
  const [searchGenre, setSearchGenre] = useState('');
  const [searchTitle, setSearchTitle] = useState('');

  //non soluzione OGGI
  // const findMovies = movies.filter(movie => searchGenre === '' || movie.genre === searchGenre);

  //il risultato che voglio ottenere partendo dalla lista dei films
  // const genres = ['Fantascienza', 'Thriller', 'Romantico', 'Azione', 'Fantasy'];

  const genres = [...new Set(movies.map(movie => movie.genre).sort())];

  // movies.forEach(movie => {
  //   const genre = movie.genre;
  //   if (!genres.includes(genre)) {
  //     genres.push(genre);
  //   }
  // });
  // console.log(genres);


  //useEffect

  //ricerca dei film
  useEffect(() => {

    let updatedMovies = movies;

    if (searchGenre !== '') {
      updatedMovies = updatedMovies.filter(movie => movie.genre === searchGenre);
    }

    if (searchTitle !== '') {
      updatedMovies = updatedMovies.filter(movie => movie.title.includes(searchTitle))
    }

    setFindMovies(updatedMovies);


  }, [searchGenre, searchTitle, movies])

  return (
    <>
      <h1>Movie Filter</h1>

      <h2>Ricerca</h2>

      <SelectSearch value={searchGenre} onChange={event => setSearchGenre(event.target.value)} >
        <option value="">---</option>
        {/* <option value="Fantascienza">Fantascienza</option>
        <option value="Thriller">Thriller</option>
        <option value="Romantico">Romantico</option>
        <option value="Azione">Azione</option> */}

        {genres.map((genre, index) => <option key={index}>{genre}</option>)}

      </SelectSearch>


      {/* <select value={searchGenre} onChange={event => setSearchGenre(event.target.value)}>
        <option value="">---</option>
        <option value="Fantascienza">Fantascienza</option>
        <option value="Thriller">Thriller</option>
        <option value="Romantico">Romantico</option>
        <option value="Azione">Azione</option>
      </select> */}

      <p>Valore per cui stiamo cercando: {searchGenre}</p>
      <hr />

      <input type="text" placeholder="inserisci il titolo del film" value={searchTitle} onChange={event => setSearchTitle(event.target.value)} />
      <p>Valore per cui stiamo cercando: {searchTitle}</p>
      <hr />
      <h2>Lista</h2>
      <ul>
        {findMovies.map((movie, index) => <li key={index}>{movie.title} - {movie.genre}</li>)}

        {/* [<li>title - genere</li>, <li>title - genere</li>] */}
      </ul>




    </>
  )
}

export default App

