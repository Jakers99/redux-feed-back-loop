const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.post('/submit', (req, res) => {
    const feedback = req.body;
    pool.query(`
    INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
    VALUES ($1, $2, $3, $4);`,
        [feedback.feeling, feedback.understanding, feedback.support, feedback.comment]
    ).then(() =>
        res.sendStatus(201)
    ).catch(
        error => {
            console.log('error with post route', error);
        }
    )
})
module.exports = router;