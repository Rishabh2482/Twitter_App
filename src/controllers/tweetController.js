export const getTweets= (req, res) =>{
    return res.json({
        message: 'Welcome to tweet route'
    })
}

export const getTweetsById = (req,res) =>{
    return res.json({
        message: `Welcome to tweet route ${req.params.id}`
    })
}

export const createTweet = (req, res) =>{
    return res.json({
        id: req.params.id,
        message: `Created a tweet with id  ${req.params.id}`
    })
}
// This is controler file and it will only manage the controller layer part.