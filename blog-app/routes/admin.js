const express = require('express');
router = express.Router();

router.get('/', (req, res) => {
    res.render('admin/index')
});

router.get('/posts', (req, res) => {
    res.send('Página de posts');
});

router.get('/categorias', (req, res) => {
    res.render('admin/categorias');
});

router.get('/categoria/add', (req, res) => {
    res.render('admin/addcategoria');
})


module.exports = router;