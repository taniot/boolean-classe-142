import { useState } from "react";
import axios from "axios";
import Alert from "./components/Alert";
import "./App.css";

export default function App() {

  const [formData, setFormData] = useState({
    author: "",
    title: "",
    body: "",
    public: false,
  });

  const [alert, setAlert] = useState(null);

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    axios
      .post("https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts", formData)
      .then(response => {
        console.log("Success:", response.data);
        setAlert("Post inviato con successo!");
        setFormData({ author: "", title: "", body: "", public: false });
      })
      .catch((error) => {
        console.error("Errore:", error);
        setAlert("Errore durante l'invio del post.");
      });


    // fetch("https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(formData),
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log("Success:", data);
    //     setAlert("Post inviato con successo!");
    //     setFormData({ author: "", title: "", body: "", public: false });
    //   })
    //   .catch((error) => {
    //     console.error("Errore:", error);
    //     setAlert("Errore durante l'invio del post.");
    //   });
  }

  return (
    <div className="container">
      <h1>Crea un nuovo post</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Autore</label>
          <input
            type="text"
            name="author"
            value={formData.author}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Titolo</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Testo</label>
          <textarea
            name="body"
            value={formData.body}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group checkbox">
          <input
            type="checkbox"
            name="public"
            checked={formData.public}
            onChange={handleChange}
          />
          <label>Rendi pubblico</label>
        </div>

        <button type="submit">Invia</button>
      </form>

      {alert && <Alert message={alert} onClose={() => setAlert(null)} />}
    </div>
  );
}
