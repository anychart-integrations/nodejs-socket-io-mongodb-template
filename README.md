[<img src="https://cdn.anychart.com/images/logo-transparent-segoe.png?2" width="234px" alt="AnyChart - Robust JavaScript/HTML5 Chart library for any project">](https://www.anychart.com)
# NodeJS basic template

This example shows how to run Anychart library with NodeJS and MongoDB using socket.io.

### Running
To use this sample you must have:

MongoDB installed and running, if not please checkout [MongoDb installation guide](https://docs.mongodb.com/manual/installation/).
To check your MongoDB installation, run following command in command line:
```
$ mongod -version
db version v3.0.12 # sample output
```
To check MongoDB is running, type:
```
$ service mongod status
mongod start/running, process 9559 # sample output
```
or
```
$ ps -ef | grep mongod | grep -v grep
mongodb   1085     1  0 09:51 ?        00:00:52 /usr/bin/mongod --config /etc/mongod.conf # sample output
```

npm package manager, if not please visit [official npm site](https://www.npmjs.com/).
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

Open browser at http://localhost:3000/

Now you can see chart updating every 2 seconds, open another console and update MongoDB data:
```
$ mongo < database_update.js
```
Chart on the page will update automatically with new data

## Workspace
Your workspace should look like:
```
jnodejs-socket-io-mongodb-template/
    config/
        development.js	# project settings for development
        pord.js			# project settings for production
        test.js			# project settings for testing
    models/
        Fruit.js		# data model
    public/
        css/
            style.css	# css styles
    routes/
        index.js		# main route
        static.js		# static files route
    templates/
        index.ejs		# template for main content
    app.js				# main js file
    database_backup.js	# backup for MongoDB
    database_update.js	# script for update MongoDB data
    LICENSE
    package.json		# npm project settings
    README.md
    .gitignore
```

## Technologies
Platform/Language - [NodeJS](https://nodejs.org/en/)<br />
Database - [MongoDB](https://www.mongodb.com/)<br />
Build tool - [npm](https://www.npmjs.com/)<br />
Streaming - [socket.io](http://socket.io/)<br />
Template - [ejs](http://ejs.co/)<br />

## Further Learning
* [Documentation](https://docs.anychart.com)
* [JavaScript API Reference](https://api.anychart.com)
* [Code Playground](https://playground.anychart.com)
* [Technical Support](https://www.anychart.com/support)

## License
AnyChart NodeJS/socket.io/MongoDB integration sample includes two parts:
- Code of the integration sample that allows to use Javascript library (in this case, AnyChart) with NodeJS, socket.io framework and MongoDB database. You can use, edit, modify it, use it with other Javascript libraries without any restrictions. It is released under [Apache 2.0 License](https://github.com/anychart-integrations/nodejs-socket-io-mongodb-template/blob/master/LICENSE).
- AnyChart JavaScript library. It is released under Commercial license. You can test this plugin with the trial version of AnyChart. Our trial version is not limited by time and doesn't contain any feature limitations. Check details [here](https://www.anychart.com/buy/).

If you have any questions regarding licensing - please contact us. <sales@anychart.com>

[![Analytics](https://ga-beacon.appspot.com/UA-228820-4/Integrations/nodejs-socket-io-mongodb-template?pixel&useReferer)](https://github.com/igrigorik/ga-beacon)
