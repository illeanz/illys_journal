var express = require('express');
var router = express.Router();
const Entries = require('../models/Entries');

/* GET Entries */
router.get('/', function (req, res, next) {
  res.setHeader('Content-Type', 'application/json');
  Entries.find()
      .populate('Entries')
      .exec()
      .then(docs =>{
        console.log(docs);
        res.status(200).json(docs);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({
          error: err});
      })
});

/* POST Entry */
router.post('/', function(req, res, next) {
    const newEntry = new Entries({
        id: req.body.id,
        date: req.body.date,
        text: req.body.text,
        author: req.body.author,
        length: req.body.length
    })
    newEntry.save().then(response => {
        console.log(response);
        res.status(200).json(response);
    }).catch(err => console.log(err));
});

/* DELETE Entries */
router.delete('/', function(req, res, next) {
    console.log("inside first delete, will delete id: "  + req.body.id);
    const id = req.body.id
    if(req.body.id !== undefined) {
        console.log(id);
        Entries.deleteOne({'id': id}, function(err) {
            if (err) {
                console.log(err)
            } else {
                res.send('Deleted entry with id :  ' + id);
            }})
    } else {
        Entries.deleteMany({}, function(err) {
            if (err) {
                console.log(err)
            } else {
                res.send('Deleted all entries');
            }})
    }

});
module.exports = router;
