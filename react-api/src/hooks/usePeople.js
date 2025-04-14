import { useEffect, useState } from "react"
import axios from "axios";


const usePeople = () => {

  const [actresses, setActresses] = useState([]);
  const [actors, setActors] = useState([]);
  const [people, setPeople] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  function getActresses() {
    axios.get('https://www.freetestapi.com/api/v1/actresses')
      .then(response => {
        console.log(response);
        // setActresses(response.data)
        setActresses(response.data)
      })
      .catch(err => setError(err))
  }

  function getActors() {
    axios.get('https://www.freetestapi.com/api/v1/actors')
      .then(response => {
        console.log(response);
        // setActresses(response.data)
        setActors(response.data)
      })
      .catch(err => setError(err))
  }

  //popolo liste singole
  useEffect(() => {
    setLoading(true);
    getActresses();
    getActors();
  }, [])

  //al cambiamento di liste singole, popolo lista completa
  useEffect(() => {
    setPeople([...actors, ...actresses]);
    setLoading(false);
  }, [actors, actresses])

  return [
    people,
    error,
    loading
  ]

}

export default usePeople;