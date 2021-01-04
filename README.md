# Solution for Solita dev academy excercise - Name Application

This solution is a single page app made with React and Node.js. The names.json data is accessed from json-server.

This application has a user interface, where the user can switch between three pages (this is done using routers to allow browser navigation).
One page has the names listed by most popular, one has alphabetically and the last one has a search function to search a certain name, thus all requirements are met.

All states are stored in a redux store, except search filter, which uses useState. Search filter is not saved when moving from page to page, but searching is done from numerical or alphabetical list depending on choice.
This is not the simplest solution, but I wanted to practise using redux states, since this excercise was well suited for that.

Run notes for future: clone, npm install, npm start, npm run server

Contact: mikko.kemppi@gmail.com
