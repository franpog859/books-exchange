# Books Exchange

## Assumptions

- remember not to push not properly tested implementation to master - master branch should always work correctly
- try to create Pull Request instead of pushing changes directly to master branch. It enables to review your code and potencially find some bugs!
- [here](https://guides.github.com/introduction/flow/) is super duper tutorial how to do it in a clean and elegant way. Read it!

## Backend development

Before start you have to have `npm` and `node` installed on your computer!

To get the database credentials just ask kindly your admin. Remember that the database is not scalable in this case so do not overuse it!

To run the backend locally go to `backend/` directory, specify credentials and run:

```sh
DATABASE_USERNAME=$DATABASE_USERNAME DATABASE_PASSWORD=$DATABASE_PASSWORD node src/app.js
```

After this you can access the backend calling `http://localhost:3001/`

To modify the database content use Mongo Shell. You can find more informations and tutorials [here](https://docs.mongodb.com/manual/mongo/). Just use the same credentials you use to run the backend locally

## Frontend development

Before start you have to have `npm` installed on your computer!

To develop frontend you probably want to use the local hosted backend. To do it follow the instructions from the paragraph above. Make sure to change all URLs pointing to the backend to `http://localhost:3001/...` to use local backend.

To run frontend locally go to the `frontend/` directory and run:

```sh
npm start
```

There are also some instructions in the `frontend/README.md` file so check them out!

Before creating Pull Request or pushing changes to master branch make sure that all URLs point to the right backend (it should be backend served on Heroku)!

## Configure hosting

### Backend on Heroku

To push commited hanges to Heroku run:

```sh
git subtree push --prefix backend heroku master
```

To recreate Heroku app in case of some crush or bad master branch rebase run:

```sh
heroku create # After that rename created app to "books-exchange-backend" in the Heroku dashboard
git remote rm heroku # Only if you already have heroku remote in the repository
heroku git:remote -a books-exchange-backend #
git subtree push --prefix backend heroku  master
heroku config:set DATABASE_USERNAME=$DATABASE_USERNAME
heroku config:set DATABASE_PASSWORD=$DATABASE_PASSWORD
```

You can find more informations in the [official tutorial](https://devcenter.heroku.com/articles/deploying-nodejs)

### Frontend on GitHub Pages

To redeploy changed frontend to GitHub Pages run:

```sh
cd frontend
npm run deploy
```

You can find more informations in [this blog post](https://typeofweb.com/react-js-na-github-pages-dzieki-create-react-app/)
