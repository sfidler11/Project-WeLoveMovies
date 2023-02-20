## We Love Movies | Backend Application

The 'We Love Movies' app is a movie review system that allows the users to locate movie reviews for movies showing at theaters of their choice. Located in this repository is the backend service for the application. Please find the front end [here](https://github.com/Thinkful-Ed/starter-movie-front-end).

This backend API follows RESTful design principles to complete HTTP requests. This application allows the user to look up movies, theaters, and reviews through the front end application. You can find the render deployment [here.](https://welovemovies-emz1.onrender.com)

## Installation
1. Fork and clone this repository
2. Run `npm install` to install local dependencies
3. Run `npm run start` to start the application

## Technologies

Javascript, Express.js, PostgresSQL, Knex.js

![javascript logo](/images/JavaScript.png)
![express logo](/images/express.png)
![postgres elephant](/images/Postgresql_elephant.svg.png)
![knex logo](/images/knex-logo.png)

## Routes

| Request Type | Route | Description |
| -- | -- | -- |
| Get | `/movies` | Returns all movies currently in the database |
| Get | `/movies/is_showing=true` | Returns all movies that are currently showing in theaters |
| Get | `/movies/:movieId` | Returns a movie based on it's specific ID |
| Get | `/movies/:movieId/reviews` | Returns all reviews for a specific movie |
| Get | `/movies/:movieId/theaters` | Returns all theaters showing a specific movie |
| Get | `/theaters` | Returns all theaters, including the movies shown at each theater |
| Put | `/reviews/:reviewId` | Updates an existing review and returns the updated review with critic info |
| Delete | `/reviews/:reviewId` | Deletes the review record based on a specific review ID |