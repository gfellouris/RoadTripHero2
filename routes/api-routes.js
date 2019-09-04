var connection = require("../db/connection");

// db/orm-models.js is the ORM models file which links to the config/orm.js
var ormQueries = require("../db/orm-models.js");
module.exports = function(app) {
  // ============ Express App TEST ============
  app.get("/api/testserver", function(req, resExpress) {
    resExpress.send("Express server is working - TEST PASSED!");
  });

  // ============ Database TEST ============
  app.get("/api/testdb", function(req, resExpress) {
    connection.query("SELECT * FROM userProfiles", function(err, resSQL) {
      if (err) throw err;
      resExpress.send(
        "mySQL DB working! TEST PASSED" + "<hr>" + JSON.stringify(resSQL)
      );
    });
  });

  // ============ Get user profile route ============
  app.get("/api/userprofile/:uid", function(req, resExpress) {
    userId = req.params.uid;
    ormQueries.selectUserPofile(userId, function(data) {
      // console.log(data);
      resExpress.json(data);
    });
  });

  app.post("/api/savetripplan", function(req, resExpress) {
    ormQueries.insertData(
      ["userId", "tripName", "origin", "destination", "numberOfStops"],
      [
        req.body.userid,
        req.body.tripname,
        req.body.origin,
        req.body.destination,
        req.body.numberofstops
      ],
      function(result) {
        // Send back the ID of the new roadtripHero item
        resExpress.json({ id: result.insertId });
      }
    );
  });

  // ============ Get all trip plans by user items ============
  app.get("/api/gettripplans/:userid", function(req, resExpress) {
    userId = req.params.userid;
    ormQueries.getTripPlans(userId, function(data) {
      // console.log(data);
      resExpress.json(data);
    });
  });

  // end var ormQueries
};
