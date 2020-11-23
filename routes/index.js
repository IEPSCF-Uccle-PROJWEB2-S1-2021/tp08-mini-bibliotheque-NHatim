const express = require('express');
const router = new express.Router();
const books = [{
  author: "Guillaume Debré",
  title: "L'affaire Lafayette",
  category: "roman historique"
},{
  author: "Gérald Messadié",
  title: "La conspiration Jeanne d'Arc",
  category: "roman historique"
},{
  author: "J.R.R. Tolkien",
  title: "Le Seigneur des anneaux",
  category: "fantasy"
},{
  author: "Michael Ende",
  title: "L'Histoire sans fin",
  category: "fantasy"
},{
  author: "Andrzej Sapkowski",
  title: "Le Sorceleur",
  category: "fantasy"
},{
  author: "George R. R. Martin",
  title: "Le Trône de fer",
  category: "fantasy"
},{
  author: "Hervé Bazin",
  title: "Vipère au poing",
  category: "autobiographie"
},{
  author: "Marie Cardinal",
  title: "Les mots pour le dire",
  category: "autobiographie"
},{
  author: "Giacomo Casanova",
  title: "Histoire de ma vie",
  category: "autobiographie"
}]

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Mini-bibliothèque',
  });
});

router.get('/books/search', function (req, res, next) {
  res.render('index', {
    title: 'Mini-bibliothèque'
  });
});


router.post('/books/list', function (req, res, next){
  res.render('')
});

module.exports = router, books;
