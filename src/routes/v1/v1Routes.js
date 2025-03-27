import express from 'express'
import tweetRouter from './tweet.js'
import commentRoutes from './comment.js'

const router = express.Router();

router.use('/tweets',tweetRouter);  // if the remaining url starts with /tweets use this router.
router.use('/comments', commentRoutes)  // if the remaining url starts with /comments use this router.

export default router;