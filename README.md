# NomadChallenge

## Technologies

* Ruby on Rails
* React
* Bootstrap
* SQLite3

## Libaries

* react-icons
## Getting Started

* clone the repo using the link provided to do so.
* cd into the directory where the repo is and Run the following commands in the terminal:
    * bundle install
    * yarn install
    >Note: You should have Ruby as well as Ruby on Rails and Node.js as well as yarn in order to complete this step.

* after having the gems and oackages intalled, it is time to create the data base. Run the following commands in the terminal:
    * rails db:create
    * rails db:migrate
    * rake db:seed
    >Note: you should have installed the corresponding database(sqlite3 in this case) in order to run these commands.

* in order to start the development server you need to run the following command in the terminal 
    * rails server
    >Note: if you are familiar with react you and want to use the auto save server react comes with you can run .bin/webpack-dev-server

## Deployment

In order to deploy the project it would be best to use Heroku as platform.
Before deployment is require to migrate database from SQLite3 to PostgreSQL to work in Heroku.

## Issues Encountered

* pg(Postgres) gem not working for Ruby < 3.0. Used SQLite3 instead, in the until it is safe to use pg gem.
> Alternatively, you can downgrade to Ruby 2.4 in order to use the pg gem and PostgreSQL as Database.

* Uncompatibilities with npm. Used yarn instead.

* Uncompatibilities with Ruby enviroment in my pc. I was unable to test conection between Backend and Front-end.
