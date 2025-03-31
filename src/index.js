import express from 'express';
import morgan from 'morgan';
import path from 'path';
import { fileURLToPath } from 'url';
import { PORT } from './config/serverConfig.js';
// import tweetRouter from './routes/tweet.js'
import apiRouter from './routes/apiRoutes.js'
import connectDB from './config/dbConfig.js';

// Create a new express app/server object
const App = express();
const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename); // get the name of the directory
// console.log(__dirname);
App.set('view engine', 'ejs')
App.set('views', __dirname + '/views')
App.get('/',(req , res)=>{
    res.render('home',{name : "Rishabh"})  // Now we are using ejs to show up JS into HTML markup formate
})
App.use(morgan('combined')); // This will be executed before anyother Middlerware
App.use(express.json());
App.use(express.text());  // ^This middleware will make, Express to automaticaly identify that body is text or json and do it accordingly 
App.use(express.urlencoded({ extended: true }));

// App.use('/tweets', tweetRouter)
App.use('/api',apiRouter)


App.get('/ping', (req, res)=>{
    return res.json({
        message : 'ping'
    });
}); //~ \if someone make a Get request to /ping this callback will be exe
// ! if No any request matches to any of other request above then this will be executed
App.all('*',(req, res)=>{
    return res.status(404).json({
        message : 'Not Found'
        });
})
//! define a PORT and attach it to expresss App at port 3000
App.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
    connectDB();
})