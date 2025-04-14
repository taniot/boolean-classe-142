import usePeople from "./hooks/usePeople";
import Card from "./components/Card";

function App() {

  const [people, error, loading] = usePeople();

  if (loading) {
    return <div>Caricamento in corso...</div>
  }


  if (error) {
    return <div>Si è verificato un errore al caricamento dei dati</div>
  }

  return (
    <>
      <h1>Api</h1>
      {/* {actresses.length}
      {actors.length} */}
      {people.length}
      {/* <h2>Lista Attrici</h2>
      {actresses.map(person => <Card person={person} key={person.id} />)}
      <h2>Lista Attori</h2>
      {actors.map(person => <Card person={person} key={person.id} />)} */}
      <h2>Lista Persone</h2>
      {people.map(person => <Card person={person} key={`${person.name}-${person.id}`} />)}
    </>
  )
}

export default App
