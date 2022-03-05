const router = require('express').Router();

const store = require('../db/store');

// setup GET route for existing notes

router.get('/notes', (req, res) => {
    store  
        .getNotes()
        .then(notes => {
            res.json(notes);
        })
        .catch(err => {
            res.status(500).json(err);
        })
});

// setup POST route for user creating new notes

router.post('/notes', (req, res) => {
    console.log(req.body)
    store
        .addNote(req.body)
        .then(note => {
            res.json(note)
        })
        .catch(err => {
            res.status(500).json(err);
        })
});

// setup function for deleting notes

router.delete('/notes/:id', (req, res) => {
    store 
        .remoteNote(req.params.id)
        .then(() => res.json({ ok: true }))
        .catch(err => res.status(500).json(err))
})

module.exports = router;