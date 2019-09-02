var connection = require("../db/connection");

// db/orm-models.js is the ORM models file which links to the config/orm.js
var bucklistQueries = require("../db/orm-models.js");
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
};
