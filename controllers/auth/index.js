const { ctrlWrapper } = require("../../helpers/");

const register = require("./register");
const login = require("./login");
const getCurrent = require("./getCurren");
const logout = require("./logout");
const subscription = require("./subscription");
const updateAvatar = require("./updateAvatar");
module.exports = {
  register: ctrlWrapper(register),
  login: ctrlWrapper(login),
  getCurrent: ctrlWrapper(getCurrent),
  logout: ctrlWrapper(logout),
  subscription: ctrlWrapper(subscription),
  updateAvatar: ctrlWrapper(updateAvatar),
};
