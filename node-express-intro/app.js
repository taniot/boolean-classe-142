const express = require('express');
const app = express();
const port = 3000;


//nuova funzionalità
app.use(express.static('public'));


//ROTTE - ROUTES
//quando qualcuno CHIAMA in GET la risorsa / esegui questo codice
//www.miosito.it
//127.0.0.1
app.get('/', (req, res) => {

  // console.log(res);
  // console.log(req);
  // console.log('sono nella rotta /');

  // const person = {
  //   name: "Ted",
  //   lastname: "Lasso"
  // };

  // res.type('json').send(person);
  // res.json(person);
  // res.send('<h1>Benvenuto sul mio server</h1>');
  // res.json({ name: "Gaetano" })

  // res.type('html').send('ciao');
  const html = `
  
<html>
<head>
  <title>Sono il titolo</title>
  <link rel="stylesheet" href="css/main.css">
</head>
<body>
  <h1>Prova con immagine</h1>
  <img src="img/eye.jpg" alt="sono occhio">
</body>
</html>
  `;

  res.send(html)


})

//quando qualcuno CHIAMA in GET la risorsa /pippo esegui questo codice
//www.miosito.it/pippo
//127.0.0.1/pippo
app.get('/pippo', (req, res) => {
  // console.log(req);
  console.log('sono nella rotta pippo');
});


app.listen(port, () => {
  console.log(`Server Listening on port ${port}`);
})
// console.log(express);