var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  name: String,
  email: String,
  password: String,
  type: String
});

var User = mongoose.model("User", UserSchema);

module.exports = User;
