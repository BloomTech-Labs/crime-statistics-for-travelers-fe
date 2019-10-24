
![MIT](https://img.shields.io/badge/License-MIT-brightgreen.svg)
![React](https://img.shields.io/badge/React-v16.9.0-blue.svg)
![Code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)
[![Netlify Status](https://api.netlify.com/api/v1/badges/b5c4db1c-b10d-42c3-b157-3746edd9e81d/deploy-status)](https://crime-statistics-master.netlify.com/)

#  Crime Statistics For Travelers

1️⃣ You can find the deployed project [Here](https://crimestatsfortravelers.com/).

## 4️⃣ Contributors



## Contributors
|                                       [Bryce A. Soghigian](https://github.com/Bryce-Soghigian)                                        |                                       [Jacob Tharp](https://github.com/jengopockets)                                        |                                       [Tigran Sargsyan](https://github.com/umbur)                                        |                                       [Scott Prins](https://github.com/)                                        |                                       [Student 5](https://github.com/)                                        |
| :-----------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------: |
|                      [<img src="https://raw.githubusercontent.com/Lambda-School-Labs/crime-statistics-for-travelers-fe/master/ReadmeAssets/Bryce.jpg" width = "200" />](https://github.com/Bryce-Soghigian)                       |                      [<img src="https://pbs.twimg.com/profile_images/1131617955282866176/MsKS-5vG_400x400.jpg" width = "200" />](https://github.com/jengopockets)                       |                      [<img src="https://www.dalesjewelers.com/wp-content/uploads/2018/10/placeholder-silhouette-male.png" width = "200" />](https://github.com/)                       |                      [<img src="https://www.dalesjewelers.com/wp-content/uploads/2018/10/placeholder-silhouette-female.png" width = "200" />](https://github.com/)                       |                      [<img src="https://www.dalesjewelers.com/wp-content/uploads/2018/10/placeholder-silhouette-male.png" width = "200" />](https://github.com/)                       |
|                 [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/)                 |            [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/jengopockets)             |           [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/umbur)            |          [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/NandoTheessen)           |            [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/wvandolah)             |
| [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/bryce-soghigian-0556a9184/) | [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/jacob-tharp-79382311b/) | [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/tigran-sargsyan-32209967/) | [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/) | [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/) |

<br>
<br>





## Project Overview

 [Trello Board](https://trello.com/b/d9Ut99fr/labs-16-crime-statistics-for-travelers)</br>
 [Product Canvas](https://www.notion.so/Crime-Statistics-for-Travelers-a7e69847024d4cdc85aaf85cb413df71)</br>
 [UX Design files](https://www.figma.com/file/HjoxfuYoel2otaeDTOPP8F/Labs16_LambdaCrime-Stats-for-Travelers) </br>

The goal of this project is to make the world a safer place



Through our application we bring awareness to current safety issues in the united states and let travelers know what is safe and what is not.


### 4️⃣ Key Features

-    Geolocation Functionality
-    Filter Through FBI Data
-    Data Visualization
-    Auth0
-    Interactive Map

##  Tech Stack

### Analytics

#### Fullstory

-   We used fullstory to track user habits and click patterns. If you aren't familiar fullstory is an anaytics snippet 
That allows us to see a video replay of our application.

#### Google Analytics
-   We used google analytics to monitor general user data, such as bounce rate, time spent on our platform, Daily Active Users,Basically it gives you general data on the users of an application.

#### Sentry 
-   We set up sentry to monitor and recieve real time bugs that exist within our application. Whenever there is an error anywhere in our application we get a notfication in our Slack.

### Front end built using:

#### ReactJS

-    We chose React because everyone on the team knows it and we want to make use of the vast amount of npm packages built just for react.
-    React JS has a really great ways to manage component state. Our team is a huge fan of hooks and the power of Context Api(which is built in the box for react)
-  There is this styling library called Chakra.UI which works really well for our UX vision that is really compatible with react


#### Front end deployed to `https://crime-statistics-master.netlify.com/`

#### [Back end](https://github.com/Lambda-School-Labs/crime-statistics-for-travelers-be) built using: NodeJS/KNEX/ExpressJS/Posgress

#### Reasons for our backend architecture

-    NodeJS is great for building out rest apis. We took advantage of the wonderful packages built explictly for NodeJS
-    We used Express THE lightweight framework used to build powerful servers. 
-    For Database quering an models we used knexJS. It gives you the power of writing sql queries in a familiar language.
-    We used Postgres to give our data persistence.


# APIs

##  Auth0

Amazing Api for security and easy authentication for the use. It allows for a secure login that goes through the google servers. So no vulnerablities within our application. The only downside is you have to edit your login component in their online editor to style it.

##  Mapbox-gl-js

-Powerful map framework used for visualizing our wonderful planet.

With Mapbox you have the power to travese the world at your finger tips. And with the mapbox geocoder api you can search locations limit searched locations and do much more. We chose mapbox over googlemaps due to its insane custom features.

We Chose to use Mapbox-gl-js over React-Map-GL and Google Maps due to its insane range of functionality

## FBI Crime Data Explorer

This is our crime data api. We used this api for all of our crime data. Their api is the best for crime data. We researched building out our own dataset and api, but the only documented good data that exists has been created by the FBI.


#  Content Licenses

All photos used on Crime Statistics For Travelers or in design files are royalty-free & attribution-free, requiring no licenses. All headshots of developers are the property of their respective persons, no license, explicit or implied, is granted for use outside this readme file without the express permission of the owner/person in the headshot image.


#  Installation Instructions


## Other Scripts

    * npm i - installs all of the dependencies
    * npm start - starts the application locally
    * npm run build - creates a build of the application
    * npm run test - runs our tests

# Contributing

When contributing to this repository, please first discuss the change you wish to make via issue, email, or any other method with the owners of this repository before making a change.

Please note we have a [code of conduct](./CODE_OF_CONDUCT.md). Please follow it in all your interactions with the project.

## Issue/Bug Request
   
 **If you are having an issue with the existing project code, please submit a bug report under the following guidelines:**
 - Check first to see if your issue has already been reported.
 - Check to see if the issue has recently been fixed by attempting to reproduce the issue using the latest master branch in the repository.
 - Create a live example of the problem.
 - Submit a detailed bug report including your environment & browser, steps to reproduce the issue, actual and expected outcomes,  where you believe the issue is originating from, and any potential solutions you have considered.

### Feature Requests

We would love to hear from you about new features which would improve this app and further the aims of our project. Please provide as much detail and information as possible to show us why you think your new feature should be implemented.

### Pull Requests

If you have developed a patch, bug fix, or new feature that would improve this app, please submit a pull request. It is best to communicate your ideas with the developers first before investing a great deal of time into a pull request to ensure that it will mesh smoothly with the project.

Remember that this project is licensed under the MIT license, and by submitting a pull request, you agree that your work will be, too.

#### Pull Request Guidelines

- Ensure any install or build dependencies are removed before the end of the layer when doing a build.
- Update the README.md with details of changes to the interface, including new plist variables, exposed ports, useful file locations and container parameters.
- Ensure that your code conforms to our existing code conventions and test coverage.
- Include the relevant issue number, if applicable.
- You may merge the Pull Request in once you have the sign-off of two other developers, or if you do not have permission to do that, you may request the second reviewer to merge it for you.

### Attribution

These contribution guidelines have been adapted from [this good-Contributing.md-template](https://gist.github.com/PurpleBooth/b24679402957c63ec426).

## Documentation

See [Backend Documentation](https://github.com/Lambda-School-Labs/crime-statistics-for-travelers-be/blob/master/README.md) for details on the backend of our project.
