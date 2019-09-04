var orm = require("../config/orm.js");

var ormQueries = {
  selectUserPofile: function(findUser, cb) {
    // tableInput, colToSearch, valOfCol, cb
    orm.selectUserPofile("userProfiles", "uid", findUser, function(res) {
      cb(res);
    });
  },

  insertData: function(cols, vals, cb) {
    orm.insertData("tripPlans", cols, vals, function(res) {
      cb(res);
    });
  },

  getTripPlans: function(findUser, cb) {
    // tableInput, colToSearch, valOfCol, cb
    orm.getTripPlans(findUser, function(res) {
      cb(res);
    });
  }
};

module.exports = ormQueries;
