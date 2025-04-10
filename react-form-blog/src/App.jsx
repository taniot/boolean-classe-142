import { useEffect, useState } from "react";
import dataPosts from './data/posts';

function App() {

  const [posts, setPosts] = useState(dataPosts);
  const [filteredPosts, setFilteredPosts] = useState(posts);
  const [newTitle, setNewTitle] = useState('');
  const [searchCategory, setSearchCategory] = useState('');

  //eseguito al caricamento della pagina e quando vengono aggiornati searchCategory e posts
  useEffect(() => {

    let updatedPosts = posts;

    if (searchCategory !== '') {
      updatedPosts = updatedPosts.filter(post => post.category === searchCategory);
    }

    setFilteredPosts(updatedPosts);

  }, [searchCategory, posts])


  //eseguito al caricamento della pagina e quando viene aggiornato posts
  useEffect(() => {
    console.log(posts)
  }, [posts])

  function createPost(event) {

    event.preventDefault();
    //creo oggetto per nuovo post
    const newId = posts.length > 0 ? posts.at(-1)?.id + 1 : 1;
    //posts[posts.length - 1].id

    const newPost = {
      id: newId,
      title: newTitle,
      description: 'Testo descrittivo',
      category: 'Hobbies'
    }
    setPosts([...posts, newPost]);
    setNewTitle('');
  }

  return (
    <>
      <h1>Form Blog</h1>

      <section>
        <h2>Cerca Articoli</h2>
        <label>Cerca per categoria</label>
        <div>

          <select value={searchCategory} onChange={e => setSearchCategory(e.target.value)}>
            <option value="">---</option>
            <option>Hobbies</option>
            <option>Sport</option>
            <option>Cibo</option>
            <option>Casa</option>
          </select>

        </div>


      </section>

      <hr />

      <section>
        <h2>Lista articoli</h2>
        {filteredPosts.map((post) => <article key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.description}</p>
          <p>category: <strong>{post.category}</strong></p>
        </article>)}
      </section>

      <hr />

      <section>
        <h2>Crea Articoli</h2>
        <form onSubmit={createPost}>
          <label>Titolo articolo</label>
          <div>
            <input type="text" value={newTitle} onChange={event => setNewTitle(event.target.value)} />
          </div>
          <button>Aggiungi</button>
        </form>
      </section>
    </>
  )
}

export default App


