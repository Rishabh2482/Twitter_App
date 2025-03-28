import express from 'express'
import {getTweets ,getTweetsById, createTweet} from '../../controllers/tweetController.js';
import { createTweetManualValidator } from '../../validators/tweetManualValidator.js';

const router = express.Router();

router.get('/',getTweets);
router.get('/:id', getTweetsById);
router.post('/',createTweetManualValidator , createTweet);

// router.get('/',(req, res)=>{
//     return res.json({
//         message: 'Welcome to the twitter route v1'
//     });
// });

// router.get('/:id',(req, res)=>{
//     console.log(req.params);
//     return res.json({
//         message: `Welcome to the user ${req.params.id}  route v1`
//     })
// })

export default router;