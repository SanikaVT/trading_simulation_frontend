# Assignment 3

Name: Sampada Thakkar
Banner ID: B00893022
Group 23

## Team Members:

- Sampada Thakkar
- Udit Gandhi
- Dharmik Soni
- Sanika Tamhankar
- Qiwei Sun
- Prakrut Suthar
- Dharmay Sureja

Node.js backend for API development

- Date Created: 15 07 2022
- Last Modification Date: 15 07 2022
- Heroku URL: https://webassignment3group23.herokuapp.com/
- Gitlab URL: https://git.cs.dal.ca/ugandhi/dtradeapi

## Author

- [Sampada Thakkar](sm223034@dal.ca) - (Developer)

## Feature and tasks details with Gitlab repo link
-  Feature : Stock Analytics
- Tasks : View Analytics of a particular stock - User can view analytics for any stock they select
	 Compare stocks based on price - User can compare select stock with any other stock
	 View stock financials to see the profit generated - User can view the financial analytics for any stock
- Gitlab Frontend URL: https://git.cs.dal.ca/qsun/csci5709-group23/-/tree/main/

## Folder Names
- [Front End] (src -> components -> stockAnalytics, stockFinancials, stockComparison, chatbot)
- [Back End] (src -> resources -> yearlyanalytics, halfyearlyanalytics, stockfinancials)

## File Names
- [Front End] (analytics - contains code for stock analytics based on price)
- [Front End] (financials - contains code for stock financials based on gross profit)
- [Front End] (compare - contains code for comparison between stock analytics based on price)
- [Front End] (analytics.css - contain code for styling stock analytics based on price)
- [Front End] (financials.css - contains code for styling financials based on gross profit)
- [Front End] (compare.css - contains code for styling comparison between stock analytics based on price)
- [Back End] (analytics.controller,analytics.service,analytics.validation, yearly_analytics.model - contains code backend stock yearly analytics)
- [Back End] (analytics.controller,analytics.service,analytics.validation, half_yearly_analytics.model - contains code backend stock half yearly analytics)
- [Back End] (analytics.controller,analytics.service,analytics.validation, financial_analytics.model - contains code backend stock financials)

## Sources used

- Analytics - https://react-d3-library.github.io/
- Chatbot - https://www.npmjs.com/package/react-simple-chatbot 
- DotEnv - https://www.npmjs.com/package/dotenv
- Envalid - https://www.npmjs.com/package/envalid
- Express - https://www.npmjs.com/package/express
- Module-alias - https://www.npmjs.com/package/module-alias
- MongoDB - https://www.npmjs.com/package/mongodb
- Morgan - https://www.npmjs.com/package/morgan
- Nodemon - https://www.npmjs.com/search?q=nodemon

### Prerequisites

To have a local copy of this lab and running on your local machine, you will first need to install the following software / libraries / plug-ins

- [Node.js](https://nodejs.org/en/download/) - Framework used to provide npm as package manager for installing packages.

### Installing Steps

```
1. Install Node.js
2. Verify installation by running node -v and npm -v on the terminal.
3. Install heroku package using "npm install heroku".

```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.
Open [http://localhost:3100] to view it in your browser.

The page will reload when you make changes.
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

## Deployment steps

1. Login to heroku using "heroku login".
2. Create this app as heroku app only for the first time "heroku create".
3. Push app to heroku "git push heroku main".

## Built With

- [Node.js](https://nodejs.org/en/download/)
- [Heroku] - Platform for deploying web applications

## References
[1] "React D3 Library", React-d3-library.github.io, 2022. [Online]. Available: https://react-d3-library.github.io/. [Accessed: 10- Jun- 2022].
[2] "react-simple-chatbot", npm, 2022. [Online]. Available: https://www.npmjs.com/package/react-simple-chatbot. [Accessed: 02- Jul- 2022].
