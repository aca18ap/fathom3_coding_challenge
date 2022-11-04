var mysql = require("mysql");
const jokes = require('../lib/jokes.json')


/* Mysql db connection */
var db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    charset: 'utf8mb4',
    database: 'jokes_db',
    multipleStatements: true
})

db.connect((err) => {
    if (err) {
        console.log('Error connecting to database', err)
    }
    const query = `CREATE TABLE IF NOT EXISTS jokes(id integer, type varchar(255), setup text, punchline text, CONSTRAINT jokes_pk PRIMARY KEY (id));`;
    db.query(query, function(err, result) {
        if (err) {
            console.log(err);
        }
        console.log("Jokes table created");
        console.log(result)
    });

    const queryArr = [jokes.map((field) => [field.id, field.type, field.setup, field.punchline])]
    db.query('INSERT INTO jokes(id, type, setup, punchline) VALUES ?', queryArr, (err, result) => {
        if (err) throw err;
        console.log('Jokes inserted from json')
    })

})


getJoke = (type) => {
    return new Promise(function(resolve, reject) {
        let q;
        if (type !== 'surprise') {
            q = `SELECT setup, punchline FROM jokes WHERE type=? ORDER BY RAND() LIMIT 1;`
        } else {
            q = 'SELECT setup, punchline FROM jokes ORDER BY RAND() LIMIT 1;'
        }
        db.query(q, type, (err, res) => {
            if (err) return reject(err);
            //console.log(res[0])
            resolve(res[0])
        })

    })
}

module.exports = {
    getJoke
};