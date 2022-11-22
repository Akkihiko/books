# Books Directory
Project created with NodeJS, Fastify and Typescript

## How to run it
1. In your terminal, run ```git clone https://github.com/Akkihiko/books.git```
2. After this, install the dependencies with `npm install`
3. Then, just run `npm run dev` and enjoy!

## Routes
In order for you to test the application, I listed the routes of the application:
- `GET /books/list` -- returns all books in alphabetical order
- `GET /books/list/:id` -- returns a book information
- `POST /books` -- creates a book in the database (requires fields, you can see them in `src/routes/books.ts`)
- `PUT /books/:id` -- edits a book information in the database (also requires fields, see them in the file above)
- `DELETE /books/:id` -- deletes a book from the database (only requires book ID)

## How to test the routes?
You can download [Insomnia](https://insomnia.rest/) and use the HTTP methods to test all the routes.

## To-do list
- [x] Create database
- [x] Make routes
- [x] Tests with Insomnia

## What I plan on doing/not doing
I honestly plan on expanding this project as I feel it. I want to add more routes and more functionality, maybe create a whole API for people to use it. But, I don't plan on making a front-end to this application. Front-end is not my learning core, so I prefer to stick with something I know instead of knowing little information about a lot of frameworks.

## Thank you for reading!
Leave a star if you liked this project and share it to someone who would like too ;)
