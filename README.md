## RoadTripHero - We can do anything...together! **The what**
We provide 3 route options to your final destination and highlight the safest way. (Possibly provide optional safe stops for gas, bathroom, food, and over night accommodations) 
Target Markets: Group trips, work retreats, families, friends, co-workers, people traveling long distances concerned about where they will be stopping. 
SAFE 

### FEATURES: 
* SAFE ROUTE TO DESTINATION  
* CRIME AND SAFETY DATA ACCORDING TO ZIP CODES THAT RECOMMENDS REST STOPS 
* REST STOPS INCLUDE: GAS, BATHROOM, FOOD, OVERNIGHT ACCOMMODATIONS. 


## Links
- [GitHub](https://github.com/gfellouris/RoadTripHero)
- [Heroku](https://desolate-spire-22968.herokuapp.com/)
- [Trello](https://trello.com/b/Gcc2cBR2/roadtriphero)
- [Prezi]()
- [Database Design](https://drive.google.com/file/d/1Ke5oiUFzJ3z-ZU7V564kSGzOxlG9s2Sc/view?usp=sharing)
- [Demo steps - google docs]()

## Motivation - **The Why**
Provide save places for family and large groups to stop for gas, food, restrooms, or staying overnight.

## Technologies used and why
### Packages
- dotenv - security
- express - node web server
- firebase - authentication
- mysql - database
- mysql2 - database (sequelize)
- sequelize - promised based node.js ORM (database models)
- ORM - object relational modeling (database models)

### Hosting
- Heroku - external web server hosting

### Developed with
#### Front-end
- HTML5
- CSS3
- Bootstrap
- Fontawesome
- JQuery
- AJAX
- Javascript
- Firebase
- [ChartKick](https://www.chartjs.org/docs/latest/)
<b>Simple yet flexible JavaScript charting for designers & developers<b>

#### Back-end
- Express
- Node.js
- mySQL
- ORM
- Sequelize + mySQL2


## Screenshots
### logo & demo screenshots
![BucketBuddy](./readme-files/bucketbuddy-logo-branding.jpg)

### Planning
![Whiteboard-Planning](./readme-files/whiteboard-planning.jpg)

### Mockup
![Mockup-Sketch](./readme-files/mockup-sketch.jpg)

## Code Example

### Routes
* /api/testserver - tests that the express server is working
* /api/testdb - tests database connectivity
* /api/userprofile/:uid - gets user info by firebase uid
* /api/actbycat/:categoryId - gets activites when user clicks a category
* /api/mylist/:uid - used to fill the users bucketlist panel
* /api/categories - returns all categories (not used on site)
* /api/findbuddies/:actId/:ui -shows buddies who are doing the same activity on the bottom panel.
* /api/insertmylist/:userid/:actid - adds an activity to users bucket.
* /api/deletemylist/:id - deletes an activity from a users bucket
* /api/countactivities - counts by activity category (used by chartkick)

## AJAX Call for search button
```js
//----------AJAX Call for search button 
    let handleSearchAct = function (event) {
        event.preventDefault()
        let searchForWords = $("#searchInput").val().trim().split(" ").toString();
        console.log(searchForWords)
        let queryString = "/api/search/" + searchForWords;

        $.ajax({
            url: queryString,
            method: "GET"
        }).then(function (data) {
            if (data) {
                myResultList(data);
            }
        });
    };
    $("#search-activity-btn").on("click", handleSearchAct);
```
```js
    // choosing Google Auth Provider to use in firebase auth settings
    // assigning white listed domains where it is allowed (ex: localhost)
    let provider = new firebase.auth.GoogleAuthProvider();
    let auth = firebase.auth();
//-----------FIREBASE AUTH FUNCTION
    //-----------------------function to get the current user from firebase and store in variable-------------//
    function getCurrentUser(auth) {
        return new Promise((resolve, reject) => {
            const unsubscribe = auth.onAuthStateChanged(user => {
                unsubscribe();
                resolve(user);
            }, reject);
        });
    }
    // -----------------store current user in userArr
    getCurrentUser(auth).then(function (data) {
        userArr.push({
            uid: data.uid,
            displayName: data.displayName,
            photoURL: data.photoURL
        });
        // call Functions used to display content
        $("#myAvatar").attr("src", userArr[0].photoURL)
        handleMyListSearch(userArr[0].uid);
        handleUserSearch(userArr[0].uid);
        console.log(userArr);
    });
```

## Installation
- npm i (to install above mentioned npm packages)
- Create the database manullay by running the db/schema.sql file in mySQL
- Run server.js which will create the required tables using sequelize
- Import all the seeders/ files to poplute the tables to sample data
- Configure your database passwords in the connection.js and config.json files

## How to use?
node server.js

## Credits
Shout out to team "RoadTripHero"! 
@Mike, @Venessa, @Greg, @Nikita, @George

## License
MIT ©
Firebase
ChartKick
