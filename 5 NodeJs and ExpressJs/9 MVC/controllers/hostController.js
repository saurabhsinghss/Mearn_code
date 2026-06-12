const Home = require('../models/Home');

exports.getAddHome = (req, res, next) => {
  res.render('add-home', { pageTitle: 'Add-home' });
}

exports.postAddHome = (req, res, next) => {
  const { houseName,price,location,rating,photourl } = req.body;

  const newHome = new Home(houseName,price,location,rating,photourl);
  newHome.save();
  res.render('home-added', { pageTitle: 'Home added' });
}

