# fathom3_coding_challenge
Small website that spits different kind of jokes

Created as part of my Graduate Software Engineer application at Fathom3

This application uses Node.js, Express and Mysql at the back-end.
The front end is built using exclusively HTML, CSS and Javascript, with the help of jQuery and Bootstrap for API calls and layout alignment respectively.

To run the app the following must be installed on your machine:

- Node.js (v18)
- Mysql (v8.0)

Before running the app, you must create a new database for the application to work with.
This can be done through Mysql Shell, by running the command:
'''
CREATE DATABASE jokes_db
'''
The program is set up to interface with the database locally using the config details found in 'config/db.js'

To run the app, open terminal and navigate to ./fathom3_coding_challenge and run the following commands


npm install
npm start


You should now be able to navigate to 'http://localhost:3000/' and see the Laughter machine at work!
Make sure no other servers are running on the same port.


Modules used for development:
- Express
- Mysql
- Nodemon
- Ejs
