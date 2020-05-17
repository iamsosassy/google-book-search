const path = require('path')
const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

// routes for books
router.use((req, res) => {
    res.sendFile(path.join(_dirname, '..', '..', 'client', 'build', 'index.html'));
});

module.exports = router;