import express from  'express'
import tweetRouter from './v1/tweet.js'
import commentRoutes from './v1/comment.js'
import versionOne from './v1/v1Routes.js'
import versionTwo from './v2/v2Routes.js'

const router = express.Router();         // Creates a new Router Object

router.use('/v1',versionOne )   // if after /api, /v1 comes than handle thorough this route
router.use('/v2', versionTwo);  // if after /api, /v2 comes than handle thorough this route

export default router;