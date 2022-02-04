# DockerApp

To run both the UI and the API in docker containers, run `docker-compose up -d`. Navigate to `localhost:3001` to view and submit the form.

Alternatively both the UI and API can be run without docker by navigating to each folder and running either `npm start` or `yarn start`.

### UI

The front end uses [MUI](https://mui.com/) for component styling and [Axios](https://github.com/axios/axios) to do api requests.

### API

The api uses express and [validator](https://github.com/validatorjs/validator.js) to validate some fields in the POST request.
