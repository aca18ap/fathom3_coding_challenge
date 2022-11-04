var express = require('express');
var router = express.Router();
var db = require('../config/db')
var getJoke = db.getJoke;


/* get /jokes */
router.get('/', (req, res) => {
    let type = req.query.type
    getJoke(type)
        .then(joke => {
            res.send({
                'setup': joke.setup,
                'punchline': joke.punchline
            })
        })
        .catch((err) => setImmediate(() => { throw err; }))

})


module.exports = router;