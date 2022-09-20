
# NASA APOD Interface
**Objective: Build a react application using tailwind css for styling, and a public NASA API to get data.**
https://apod.nasa.gov/apod/astropix.html

#### Students will aim for the following learning objectives:

-   Create a reusable component
    
-   Query data to fill in components
    
-   State and useEffect hooks
    
-   Use Tailwind CSS for styling

#### How will this benefit me?

This workshop will teach you the basic building blocks to most Software Engineering jobs in the world! In a nutshell your job will be to retrieve data, update data, and delete data. You do this through a series of clients that will interface with whatever database your job requires. In this instance we will only read data, and thankfully NASA has a public API for us to play with.

#### PreReqs:

##### Students must have Node installed to use NPM (Install Either Version)

[https://nodejs.org/en/](https://nodejs.org/en/)

  

##### Students must clone the repo

[https://github.com/ErikkJs/NASA-apod-Interface](https://github.com/ErikkJs/NASA-apod-Interface)

## Generating a key to use NASA APIS

Apply for access at: [https://api.nasa.gov/](https://api.nasa.gov/)
    

-   Required info:
    

-   First Name
    
-   Last Name
    
-   Email
    
-   Reason for use (optional)
    

  

Fill out the form and get an api key to authenticate calls to the api, if you are having trouble feel free to use mine. 
###  API Key

> 77g2BvJPcmMeghQqD4mwCgWF96oVvsxRlf0HQoAJ

You can start using this key to make web service requests. Simply pass your key in the URL when making a web request. Here's an example: 
[https://api.nasa.gov/planetary/apod?api_key=77g2BvJPcmMeghQqD4mwCgWF96oVvsxRlf0HQoAJ](https://api.nasa.gov/planetary/apod?api_key=77g2BvJPcmMeghQqD4mwCgWF96oVvsxRlf0HQoAJ)

## Styling

Styling for this application will make use of tailwind css.

Tailwind CSS is an open source CSS framework. The main feature of this library is that, unlike other CSS frameworks like Bootstrap, it does not provide a series of predefined classes for elements such as buttons or tables.

  

### Tailwind Documentation:

[https://tailwindcss.com/](https://tailwindcss.com/)

  

Purpose:

To simplify styling and introduce students to a popular tool in the web dev space

  

#### Comparable alternatives:

[https://npmtrends.com/bootstrap-vs-material-ui-vs-react-bootstrap-vs-semantic-ui-vs-tailwindcss](https://npmtrends.com/bootstrap-vs-material-ui-vs-react-bootstrap-vs-semantic-ui-vs-tailwindcss)

### Our Layout
We will be building something similar to that pictured below, to accomplish this we will need a few key things.

### Components Needed

-   Date Input - To interface with API (Shuffle button)
    
-   Card component for for each picture
    
-   Modal component to enlarge chosen picture


![Alt text](https://lh5.googleusercontent.com/HuCE9jQYwPVGNtv6Qw7rCbQyoibBakG7zrv6tJXgNvnMIcbDZ7C8tIDkMH195X6yHaHFZ5CfWx8m9lpzJwnuXgFlK7APeR-ZH4WWrZfFFJ2TshPdZa-eA2RsOFiS_mBFCpFRQIMphrEYnqnDP0OdrJPQk8AOPL3O0lnXtEdtNqg6fRAQYXfTUxhs "example")

## Querying the data

Like most applications we need a way to retrieve our data. Thankfully for the developers of the world there are a ton of options to make requests across the world wide web. For this project we are using Axios.

  

[https://www.npmjs.com/package/axios](https://www.npmjs.com/package/axios)

  
#### Comparable alternatives:
[https://npmtrends.com/axios-vs-fetch-vs-node-fetch-vs-request-vs-superagent](https://npmtrends.com/axios-vs-fetch-vs-node-fetch-vs-request-vs-superagent)

### HTTP Request

GET https://api.nasa.gov/planetary/apod

concept_tags are now disabled in this service. Also, an optional return parameter copyright is returned if the image is not public domain.

### Query Parameters
**![](https://lh5.googleusercontent.com/2oesuldcZGXgwQ4Ve_vQjsk7DkYBcAqChSF3xlDy-VmQiJE420xkhDFWvf2X8_Yu8pNZFecxDr1bmFzD8SShFo1sGMYgjVfo_di7TH8n2NWfx4ErItnE2uhp258mgwdzjZb7Ns4PNodoTpXU7PPzAEi15v93umMJVXMro9zfZNiaQMzPWjs0dPU)**

### Example query

[https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY](https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY)

  ## Getting Started
  Make sure you install all dependancies before getting started, open the working directory and in your terminal type

> npm install

This should install all dependancies, at which point you are ready to start up the app! 

    npm run start

or 

    npm start 

### Available Scripts

  

In the project directory, you can run:

  

### `npm start`

  

Runs the app in the development mode.\

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

  

The page will reload when you make changes.\

You may also see any lint errors in the console.

  

### `npm test`

  

Launches the test runner in the interactive watch mode.\

See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

  

### `npm run build`

  

Builds the app for production to the `build` folder.\

It correctly bundles React in production mode and optimizes the build for the best performance.

  

The build is minified and the filenames include the hashes.\

Your app is ready to be deployed!

  

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

  

### `npm run eject`

  

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

  

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

  

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

  

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

  

## Learn More

  

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

  

To learn React, check out the [React documentation](https://reactjs.org/).

  

### Code Splitting

  

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

  

### Analyzing the Bundle Size

  

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

  

### Making a Progressive Web App

  

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

  

### Advanced Configuration

  

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

  

### Deployment

  

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

  

### `npm run build` fails to minify

  

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

