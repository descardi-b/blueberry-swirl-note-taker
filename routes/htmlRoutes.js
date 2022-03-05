const path = require('path');

const router = require('express');

// sending notes to the notes.html file

router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/assets/notes.html'));
});

// send to homepage if path issues exist
router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/assets/notes.html'));
});