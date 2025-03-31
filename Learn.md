1.  Why to use Nodemon?
2.  Nodemon is not working in the project in the terminal like nodemon "filename" what to do ?
    - Set NodeMon as a global package (less recommended)

    - Use `npx nodemon` instead of `nodemon` (recommended)

3. Shortcut to use `npm nodemon` instead of writing `npx nodemon` everytime?
    - Add a script in package.json file
    - `"start": "nodemon filename.js"`
    - Now you can use `npm start` to run the file with nodemon

4. What is middleware in Express.js?
   - Middleware is a function that has access to the request object (req), the response object (res), and the next middleware function in the application’s request-response cycle. The next middleware function is commonly denoted by a variable named next.

   - /ping-->mid2(req,res,next)-->next() -->mid1(req,res,next)--> next() -->callback(req,res),  
    if mid2 is passed before mid1 this will be the order of execution.

5. What is the difference between `app.get()` and `app.use()` in Express.js?
   - `app.get()` is used to handle GET requests and `app.use()` is used to handle all types of requests.

6. What is POSTMAN?
   - Postman is a collaboration platform for API development. Postman's features simplify each step of building an API and streamline collaboration so you can create better APIs—faster.It is a tool that allows you to send HTTP requests and inspect the server responses, which is useful for testing APIs.

7. What is serialization and deserialization in Express.js?
   - Serialization is the process of converting an object into a format that can be stored or transmitted. Deserialization is the process of converting the serialized data back into an object.In Express.js, serialization and deserialization are used to convert data between different formats, such as JSON , XML , text etc.

8. Why we need to write `App.use(express.json())` and `App.use(express.text())` in Express.js?
   - `App.use(express.json())` is used to parse incoming requests with JSON payloads and is based on body-parser. `App.use(express.text())` is used to parse incoming requests with text payloads.This is necessary because Express.js does not parse the request body by default.

9. what is `queryParmas` , `URLParams` and `body` in Express.js?
   - `queryParmas` are the parameters that are passed in the URL and are used to filter the data. `URLParams` are the parameters that are passed in the URL and are used to identify a resource. `body` is the data that is sent in the request body and is used to create or update a resource.

10. How to send multiple values in `URLParams` in Express.js?
    - You can send multiple values in `URLParams` by using the `:` operator followed by the parameter name. For example, `/users/:id/:name` will match `/users/123/john` and the values `123` and `john` will be available in `req.params`.
    - we can also use * to match multiple values in the URLParams. For example, `/users/:id/*` will match `/users/123/john/doe` and the values `123/john/doe` will be available in `req.params`.

11. what is `app.all()` in Express.js?
    - `app.all()` is used to handle all types of requests for a specific route or all route. It is similar to `app.use()` but it is specific to a route or all route if `*` is used. For example, `app.all('/users', (req, res) => { ... })` will handle all types of requests for the `/users` route.
    - we can also use it to handle all types of requests for all routes by using `app.all('*', (req, res) => { ... })`. That does not mathces to any other routes will be handled by this route's callback.

12. Previosly View Layer was handled at backend but now it is handled at frontend, why?
    - Previously, the view layer was handled at the backend because the backend was responsible for generating the HTML content and sending it to the client. However, with the advent of front-end frameworks like React, Angular, and Vue.js, the view layer is now handled at the frontend. This allows for a more interactive and responsive user experience, as the frontend can update the view without having to reload the entire page.Additionally, it allows for a more modular and reusable codebase, as the frontend can be developed independently of the backend.

13. The order of parameter (res,req) passed in callback which is passed in  API route in Express.js will be like this?
    - The order of parameters passed in the callback function for an API route in Express.js is `(req, res)`. This is because the request object (`req`) is passed first, followed by the response object (`res`).
    - For example, `app.get('/users', (req, res) => { ... })` will handle GET requests for the `/users` route, and the `req` object will contain information about the incoming request, while the `res` object will be used to send the response.
    - The order of parameters is important, as Express.js uses this convention to determine which object is which.

14. What is ORM or ODM ?
    - ORM (Object-Relational Mapping) is a programming technique used to convert data between incompatible type systems in object-oriented programming languages. It allows developers to interact with a database using object-oriented programming concepts, rather than writing raw SQL queries.
    - ODM (Object-Document Mapping) is similar to ORM, but it is used for NoSQL databases, such as MongoDB. ODM allows developers to interact with a NoSQL database using object-oriented programming concepts, rather than writing raw queries.
    - In Node.js, popular ORM libraries include Sequelize and TypeORM, while popular ODM libraries include Mongoose and Waterline.

15.
```js
Server is running on port 3000
Failed to connect to MongoDB:  Could not connect to any servers in your MongoDB Atlas cluster. One common reason is that you're trying to access the database from an IP that isn't whitelisted. Make sure your current IP address is on your Atlas cluster's IP whitelist: https://www.mongodb.com/docs/atlas/security-whitelist/
MongooseServerSelectionError: Could not connect to any servers in your MongoDB Atlas cluster. One common reason is that you're trying to access the database from an IP that isn't whitelisted. Make sure your current IP address is on your Atlas cluster's IP whitelist: https://www.mongodb.com/docs/atlas/security-whitelist/
    at _handleConnectionErrors (C:\Users\Rishabh Chauhan\Desktop\pw-content\Node-07-part-2\05.Express\01_TwitterApp_03\node_modules\mongoose\lib\connection.js:1165:11)
    at NativeConnection.openUri (C:\Users\Rishabh Chauhan\Desktop\pw-content\Node-07-part-2\05.Express\01_TwitterApp_03\node_modules\mongoose\lib\connection.js:1096:11)
    at async connectDB (file:///C:/Users/Rishabh%20Chauhan/Desktop/pw-content/Node-07-part-2/05.Express/01_TwitterApp_03/src/config/dbConfig.js:7:9) {
  errorLabelSet: Set(0) {},
  reason: TopologyDescription {
    type: 'ReplicaSetNoPrimary',
    servers: Map(3) {
      'ac-gdizp7s-shard-00-00.btm8h2w.mongodb.net:27017' => [ServerDescription],
      'ac-gdizp7s-shard-00-01.btm8h2w.mongodb.net:27017' => [ServerDescription],
      'ac-gdizp7s-shard-00-02.btm8h2w.mongodb.net:27017' => [ServerDescription]
    },
    stale: false,
    compatible: true,
    heartbeatFrequencyMS: 10000,
    localThresholdMS: 15,
    setName: 'atlas-xsaqoo-shard-0',
    maxElectionId: null,
    maxSetVersion: null,
    commonWireVersion: 0,
    logicalSessionTimeoutMinutes: null
  },
  code: undefined
}
```
- This error occurs when the MongoDB server is not reachable or the connection string is incorrect. It can also occur if the IP address of the client is not whitelisted in the MongoDB Atlas cluster. To fix this, make sure that the connection string is correct and that the IP address of the client is whitelisted in the MongoDB Atlas cluster.
- This error is occured in my project so i will fix it after learning the basics of MongoDB and Mongoose, and creating a new cluster in MongoDB Atlas.
- I will also check the connection string and make sure that the IP address of the client is whitelisted in the MongoDB Atlas cluster.


# Password: vevH5EAtvazbAQyj
# userName:- rishabh2001c


0-- new 2:43
## pass:- test123 , username:- n1
- mongodb+srv://n1:test123@cluster0.wbymtfh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0