const router = require('express').Router();

router.get('/create', (req, res) => {
    res.render('create');
});

router.post('/create',(req,res)=>{
    const body=req.body;
    console.log(body);
})

module.exports = router;
