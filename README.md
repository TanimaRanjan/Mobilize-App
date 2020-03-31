# Mobilize-App
# Mobilize Volunteer Event view 

# Technology 
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
Project uses 
    React
    Redux
    Hooks
    Router
    Google Map API for maps 

 Feature

 Home page will display the list of all events. 
Click on any event on the list to view the details of the particular event. 
Detail page contains a map view of the event location. Map view was created using Google Map API. 

Infinite Scrolling is implemented on the home page. Scolling to the bottom of page will request next page. 

Back to home page will take you page to the home page with all the list history retained. 

# The general page breakdown 
HomePage (URL:/#/events) 
    * List all upcoming events

Details Page (URL:/#/events/:id)
    * Display following details
        - Display Title and details of the selected event
        - Timeslots available for the event
        - 
        - Map view of the event location

Page Not Found for any other URL 

# Installing
To get the frontend running locally:

Clone this repo
```bash
npm install  
```
to install all required dependencies 
```bash
npm start
``` 

The Application Runs on localhost:3000
Local web server will uses standard React's port 3000. 

Application uses Google Map API Key. 

Please add .env file with REACT_APP_GOOGLE_KEY 
.env is present in .gitignore. 

npm run build - build into the build/ directory

# Testing 
Load the page and view the list of item. 


Event list is sorted before display on start time
Location not provided - shows location unknown
If unable to pull the event image then displays backup image 




