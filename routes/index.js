const express = require('express');

const router = new express.Router();
const books = [{
  author: "Guillaume Debré",
  title: "L'affaire Lafayette",
  category: "Roman Historique"
},{
  author: "Gérald Messadié",
  title: "La conspiration Jeanne d'Arc",
  category: "Roman Historique"
},{
  author: "J.R.R. Tolkien",
  title: "Le Seigneur des anneaux",
  category: "Fantasy"
},{
  author: "Michael Ende",
  title: "L'Histoire sans fin",
  category: "Fantasy"
},{
  author: "Andrzej Sapkowski",
  title: "Le Sorceleur",
  category: "Fantasy"
},{
  author: "George R. R. Martin",
  title: "Le Trône de fer",
  category: "Fantasy"
},{
  author: "Hervé Bazin",
  title: "Vipère au poing",
  category: "Autobiographie"
},{
  author: "Marie Cardinal",
  title: "Les mots pour le dire",
  category: "Autobiographie"
},{
  author: "Giacomo Casanova",
  title: "Histoire de ma vie",
  category: "Autobiographie"
}]

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('search.ejs', {
    title: 'Mini-bibliothèque'
  });
});

router.get('/books/search', function (req, res, next) {
  res.render('search.ejs', {
    title: 'Mini-bibliothèque'
  });
});


router.post('/books/list', function (req, res, next){
  const filteredBooks = books.filter(books => books.category === req.body.category)
  const tabLength = filteredBooks.length
  res.render('collection.pug',{
   title : req.body.category,
   books: filteredBooks,
   length : tabLength

  })
});


module.exports = router;
