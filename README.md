# B2B-İYS
####  A custom solution for pharmacies that enables them to perform joint purchases from wholesalers.

### What is it?

A custom solution for a group of pharmacies. It enables them to pre-plan and make a joint purchase from wholesaler depos to reduce wholesale purchasing costs for all participating pharmacies.

### Wanna try it out?

A demo for the application can be found [here](https://projects.eoas.muhammed-aldulaimi.com/)

### Features

- Query a medicine list with over 7000 medicine names and barcodes.
- Join another pending application, choose purchase total, so it can be added to the total purchase goal.
- Submit an application with a specific total purchase goal and approve it once the goal has been met.
- Get a transaction result for all respective participants depending on the purchase total.
- Track and view reports of all applications and transactions made.


### Stack And Libraries
- **Front End:** React, Redux, Apollo-Client.
- **Back End:** Express-GraphQL, JWT, Bcrypt.
- **Database:** MongoDB
- **Deployment:** Ubuntu, Nginx, Docker

### Installation
Clone the repository

`$ git clone https://github.com/that-one-arab/eoas.git eoas`

Go into the directory

`$ cd eoas`

Install the dependencies

`$ npm i`

After that you can immediatly run the project by doing

`$ npm start`

Or if you would like to make changes to the files, run it with

`$ npm run startdev`

This will start the project with nodemon, which will listen to any active changes in the directory.

The react build is already pushed to the repository. If you would like to make changes to the front end, make sure to cd to client directory, run `$ npm i` to install the dependencies, then `$ npm start` to start a frontend local development server.


### Thank you for reading!
