# Mobilize Volunteer Event view 

# Technology 
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
Project uses 
    React
    Redux
    Hooks
    Router
    Google Map API for maps 

#Feature

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
        - Timeslots available for the event - filtered top 10. 
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
Actions and Reducers are test in test suit

More testing done manually. 
1. Load the page. Should display list of 25 events
2. Scroll down to bottom. 25 more events will get added
3. Click on event to view the details
4. If image is not pulled them a back up image is displayed - It should ideally be replaced by a better generic image
5. If location is provided then map will show
6. Time slots are filtered up to 10 for better experience. This can be updated to add READ MORE 
7. Location not provided - shows location unknown

# Few comments on improvement
Event list is sorted on 1st start time in time slow. 
Currently data pull from API is not sorted. When new data and added to the list it get sorted before listing. 
If there is some event on next is earlier than events on last page it will get mixed in the list and no show up on bottom. 
This can be improved by either pulling the data sorted from the API.






