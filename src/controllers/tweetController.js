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
        message: `Created a new tweet `,
    
        data: {
            textdata: req.body.body
        }
    })
}
// This is controler file and it will only manage the controller layer part.