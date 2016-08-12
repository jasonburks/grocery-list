const express = require('express'); // dependencies from npm (package.json)
const router = express.Router(); // Initialize our router
const GroceryModel = require('../models/GroceryModel.js');

router.get('/', (req, res, next) => {
  GroceryModel.find((err, groceries) => {
    // Queries are run asynchronously.
        // So we have to pass in a callback to be ran when the db query is finished
    res.render('index', {
      groceries: groceries
    });
  });
});
/* POST Create a task. */
router.post('/', (req, res, next) => {
  const item = req.body.item;
  const qty = Number(req.body.qty);
  var model;

  GroceryModel.find((err, groceries) => {
    var arrFilter = groceries.filter(function(groceryItem) {
      return item.toLowerCase() === groceryItem.item.toLowerCase();
    });
    if (arrFilter[0]) {
      model = arrFilter[0];
      model.qty = model.qty + qty;
    }
    else {
      model = new GroceryModel({
            item : item,
            qty : qty
      });
    }
    model.save((err, grocery) => {
        console.log('Error: ', err)
        res.redirect('/grocery');
          // Inserts are run asynchronously.
          // So we have to pass in a callback to be ran when the insert is finished
    });
  });

});

module.exports = router;
