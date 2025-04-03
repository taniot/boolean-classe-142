function salutaPoiAndiamo(req, res, next) {
  console.log('ciaoooo ci rivediamo');
  next();
}

module.exports = salutaPoiAndiamo;