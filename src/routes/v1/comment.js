import express from 'express'

const router = express.Router();

router.get('/',(req, res)=>{
    return res.json({
        message: 'Welcome to the comments route'
    });
});

router.get('/:id',(req, res)=>{
    console.log(req.params);
    return res.json({
        message: `Welcome to the user ${req.params.id} comment route`
    })
})

export default router;