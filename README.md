[<img src="https://cdn.anychart.com/images/logo-transparent-segoe.png?2" width="234px" alt="AnyChart - Robust JavaScript/HTML5 Chart library for any project">](https://anychart.com)
NodeJS basic template
=========================

This example shows how to run Anychart library with NodeJS and MongoDB.

### Running
To use this sample you must have:

MongoDB installed and running, if not please checkout https://docs.mongodb.com/manual/installation/
To check your MongoDB installation, run following command in command line:
```
$ mongod -version
db version v3.0.12 # sample output
```
To check MongoDB status type:
```
$ service mongod status
mongod start/running, process 9559 # sample output
```

npm package manager, if not please checkout https://www.npmjs.com/
To check your npm installation, run following command in command line:
```
$ npm -v
1.3.10 # sample output
```
To start this example run commands listed below.

Clone the repository from github.com to your workspace folder:

```
$ git clone git@github.com:anychart-integrations/nodejs-socket-io-mongodb-template
```

Navigate to the repository folder:
```
$ cd nodejs-socket-io-mongodb-template
```

Install dependencies
```
npm install
```

install socket.io
```
npm install --save socket.io
```

Set up MongoDB:
```
$ mongo < database_backup.js
```

Start application:
```
$ node app.js
```

open browser at http://localhost:3000/

Now you can see chart updating every 2 seconds, run
```
$ mongo < database_update.js
```
And chart on the page will update automatically with new data

## Workspace
Your workspace should look like:
```
jnodejs-express-mongodb-template/
    config/
        development.js  # project settings for development
        pord.js         # project settings for production
        test.js         # project settings for testing
    models/
        Fruit.js    # data model
    public/
        css/
            style.css   # css styles
    routes/
        index.js     # main route
        static.js   # static files route
    templates/
        index.ejs     # template for main content
    app.js      # main js file
    database_backup.js  # backup for MongoDB
    database_update.js  # script for update MongoDB data
    LICENSE
    package.json    # npm project settings
    README.md
    .gitignore
```

## Technologies
Platform/Language - [NodeJS](https://nodejs.org/en/)<br />
Database - [MongoDB](https://www.mongodb.com/)<br />
Web framework - [Express](http://expressjs.com/)<br />
Build tool - [npm](https://www.npmjs.com/)<br />
Template - [Jade](https://naltatis.github.io/jade-syntax-docs/)<br />

## Further Learning
* [Documentation](https://docs.anychart.com)
* [JavaScript API Reference](https://api.anychart.com)
* [Code Playground](https://playground.anychart.com)
* [Technical Support](https://anychart.com/support)

## License
[© AnyChart.com - JavaScript charts](http://www.anychart.com). Released under the [Apache 2.0 License](https://github.com/anychart-integrations/nodejs-express-mongodb-template/blob/master/LICENSE).
