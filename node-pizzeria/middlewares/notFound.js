function notFound(req, res, next) {

  res.status(404);
  res.json({
    message: 'Risorsa non trovata'
  })

}

module.exports = notFound;