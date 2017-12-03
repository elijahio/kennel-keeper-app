# Kennel Keeper

Kennel Keeper is a volunteer task manager for shelters. It allows admin to view which volunteer is on shift, what general or animal specific tasks they’ve completed, and have yet to complete.

This project is a collaborative effort completed for KU Coding Bootcamp, 2017.

## Contributors

- [Elijah Kleinsmith](https://elijah.io)
- [Jared Morgan](https://github.com/CptMorganz)
- [Meg O'Roark](https://github.com/msoroark)
- [Rhia Dixon](https://risaco.github.io/)

## Technologies

- Node.js
- Express.js
- React
- MongoDB

## Run Locally

#### Start Express:

- `cd kennel-keeper`
- `npm install`
- `npm start`

#### Setup React:

- `cd client`
- `npm install`
- `npm start`

#### Start Database:

- `npm install -g node-mongo-seeds`
- `mongod`
- `mongo`
- `use kkdb`
- `cd kennel-keeper`

#### Seed Database:
*Note: running `seed` will wipe out any existing data in the database. Only use if seeds are needed.*

- `seed`

## Troubleshooting

- Having trouble starting the React application? With this app in active development, your `node_modules` folder may be out of date. Try `cd kennel-keeper/client`, then `rm -r node_modules` and finally `npm install`. Repeat the "Run Locally" steps to see if this resolved the issue.
