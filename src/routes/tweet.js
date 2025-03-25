import express from 'express'

const router = express.Router();

router.get('/',(req, res)=>{
    return res.json({
        message: 'Welcome to the twitter route'
    });
});

router.get('/:id',(req, res)=>{
    console.log(req.params);
    return res.json({
        message: `Welcome to the user ${req.params.id}  route`
    })
})

export default router;