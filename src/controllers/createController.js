const router = require('express').Router();
const fs = require('fs/promises');
const data = require('../db.json');
const path = require('path');
const { log } = require('console');

router.get('/create', (req, res) => {
    res.render('create');
});

router.post('/create', async (req, res) => {
    const body = {
        id: data.length,
        ...req.body
    };
    data.push(body);
    await fs.writeFile(path.resolve('src', 'db.json'), JSON.stringify(data, '', 4), { encoding: 'UTF8' });//JSON.strindify(data,'' Разделител, 4 брой спейсове)
    res.redirect('/');
});

router.get('/details/:id', (req, res) => {
    const id = req.params.id;
    console.log(id);
    const cube = data.find(x => x.id == Number(id));
    console.log(cube);

    res.render('details',{cube})
})

module.exports = router;
