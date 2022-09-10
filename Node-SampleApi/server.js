require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')

mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser:true,
    useUnifiedTopology: true,
   family: 4,
})
const db = mongoose.connection
db.on('error', error => console.error(error))
db.once('open',()=> console.log('connedted mongoose'))

app.use(express.json())

const subscribersRoute = require('./routes/subscribers')
app.use('/subscribers',subscribersRoute)
app.listen(3000, () => console.log('Server Started'))



/**
 * npm init -y                              // start empty project 
 * npm i express ejs express-ejs-layouts    // install express ejs
 * npm run devStart                         // run project
 * npm i mongoose                           // install Mongo DB
 * npm i --save-dev dotenv                  // create env in project folder
 **/

/**
 * 1.Sample 
 * 
 * for small app we can write all routes in server.js , it will be initial node
 * but large app we put all routes in routes folder
 * folder models have all model of project 
 * very first routes will written in index.js file , so create index file
 * inner routes will be in route folder
 * create index.js routs and set the route in server.js 
 * run the app , hello world will print in broswer
 * open new tab and http://localhost:3000/
 * 
 * 2.Sample. 
 * 
 * in this sample we show the dynamic body intead of "Hello World"
 * create layout.ejs in layout folder in views
 * layout.js will be emptty intially , type !  and  press enter key 
 * default syntax will display in layout.ejs
 * change title  tag
 * add <%- body %> in body tag
 * create new index.ejs in views folder , write body in this fiole which you want to display 
 * 
 * Note: all setup is completed
 *  
 * now we will integrate mongoDB in out application
 * npm i mongoose
 * now we will setting up database in our application 
 * in server.js file create connection of mongoDB 
 * immediatlly run , you will get error DATABASE_URL is not set
 * we will create env file for writting the DATABASE_URL , but we will run below command first
 * npm i --save-dev dotenv
 * set the DATABASE_URL in the file 
 * in server.js we check it is production environment or not 
 * if not then we have to load env for getting all variables from the env file
 * 
 * ls <-
 * ls -la <-
 * cat .zshrc <-
 * i <-
 * export PATH="$PATH:opt/homebrew/bin/"
 * vim .zshrc <-
 * ~ 
 * :wq <-
 * quite terminal
 * source ~/.zshrc
 * install homebrew
 * xcode-select --install <-
 * brew tap mongodb/brew  <-
 * brew install mongodb-community@5.0 <-
 * Start mongodb service
 * brew services start mongodb-community@5.0 <-
 * stop
 * brew services stop mongodb-community@5.0 <-
 * alwasy runing mangodb service
 * mongod --config /opt/homebrew/etc/mongod.conf --fork <-
 * open mongo sell
 * mongosh <-
 * show dbs <-
 * open the mangoDb Campass UI 
 * connect it 
 * create new Database
 * copy the db path and pest in project
 * 
 * GIT
 * 
 * git init
 * git add .
 * git commit -m "initial code"
 * in browser open git hub , create new repository '"SampleApp"
 * ..or push an existing repository from the command line 
 * git remote add origin git@github.com:WebDevSimplified/SampleApp.git
 * git push -u origin master
 * 
 * 4.Sapmle 
 * we will show all authers and new author in this project 
 * create new route authors.js in route folder, write route in this file
 * create view for author in authers folder within views folder
 * create  index.ejs for all authors
 * create new.ejs for new author
 * set route for author in server.js 
 * run app
 * 
 * 5. Sample
 * we will create a header view that will display in all view 
 * create new folder public in views folder
 * create new file  header.ejs in public folder
 * write header ui code within this
 **/