function checkTime(req, res, next) {


  const currentHour = new Date().getHours();
  console.log(currentHour);
  console.log('sono passato da checkTime');

  if (currentHour >= 9 && currentHour < 18) {
    return res.json({
      response: 'Noi lavoriamo solo di'
    });
  }


  //se non invoco next() il server resta appeso
  next();
}

module.exports = checkTime;