import express from 'express';
import morgan from 'morgan';
import path from 'path';
import { fileURLToPath } from 'url';

// Create a new express app/server object
const App = express();

const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename); // get the name of the directory
console.log(__dirname);

App.set('view engine', 'ejs')
App.set('views', __dirname + '/views')
App.get('/',(req , res)=>{
    res.render('home',{name : "Rishabh"})  // Now we are using ejs to show up JS into HTML markup formate
})


//! Middleware function which will be executed before every requests
function mid1(res , req, next){
    console.log("Middleware 1");
    next();
}

function mid2(res , req, next){
    console.log("Middleware 2");
    next();
}

//! Common Middleware will be executed before each and every request
function CommonMiddleWare(req, res, next){
    console.log("Common Middleware");
    next();
}

App.use(morgan('combined')); // This will be executed before anyother Middlerware
App.use(express.json());
App.use(express.text());  // ^This middleware will make, Express to automaticaly identify that body is text or json and do it accordingly 

App.get('/ping',[mid2 , mid1] , (req, res)=>{
    return res.json({
        message : 'ping'
    });
}); //~ \if someone make a Get request to /ping this callback will be exe

App.get('/hello',(req, res)=>{
    return res.json({
        msg: "World"
    })
})

App.post('/hello/*', (req, res)=>{
    console.log(req.params);
    console.log(req.body); // But is this is showing undefined why ?, Now it is Fixed, by adding middleware.
    return res.json({
        msg: "hello post"
    })
})

//! accessing the reqest by query paramy
App.post('/ping',[mid2 , mid1] , (req, res)=>{
    console.log(req.query);     
    return res.json({
        message : 'ping post'
    });
}); 

//! URL params
App.post('/tweets/:tweet_id', (req, res)=>{
    console.log(req.query);     // accessing the reqest by query paramy
    return res.json({
        message : 'tweet post'
    });
}); 

//! How to access URL params
App.get('/tweets/:tweet_id/comments/:comment_id', (req, res)=>{
    console.log(req.params);     // accessing the reqest by query paramy
    return res.json({
        message : 'tweet get'
    });
}); 


// ! if No any request matches to any of other request above then this will be executed
App.all('*',(res, req)=>{
    return res.status(404).json({
        message : 'Not Found'
        });
})
//! define a PORT and attach it to expresss App at port 3000
App.listen(3000,()=>{
    console.log("Server is running on port 3000");
    
})