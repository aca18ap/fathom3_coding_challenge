var express = require('express');
var router = express.Router();

// DB Functions
var db = require('../config/db')
var getJoke = db.getJoke;


/*
 GET /jokes 
 query = joke type
 */

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