## Weather App

### Available features :

- Search any city around the globe with friendly auto complete feature.
- Show weather states and ability to toggle specific details like min/max temperature.
- Ability to rearrange cities according to user preference by drag and drop.
- Ability to remove cities from the list.

### Technical features :

- Debounced api calls for auto complete so, no throttle for the back end server.
- memoize weather ui so minimum render iteration to keep the performance high.
- components are very chunky for better render performance and maintained.
- Unit test included for auto complete input feature as example for unit and integration tests.
- App is complete responsive for desktop, tablet and mobile.
- The app created as multi layered so model layer is separate from business logic and ui layer.

### Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more
information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.