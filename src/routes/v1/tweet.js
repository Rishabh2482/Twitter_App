import express from 'express'

const router = express.Router();

router.get('/',(req, res)=>{
    return res.json({
        message: 'Welcome to the twitter route v1'
    });
});

router.get('/:id',(req, res)=>{
    console.log(req.params);
    return res.json({
        message: `Welcome to the user ${req.params.id}  route v1`
    })
})

export default router;