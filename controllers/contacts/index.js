const { ctrlWrapper } = require("../../helpers");
const getAll = require("./getAll");
const getById = require("./getById");
const add = require("./add");
const updateById = "./updateById.js";
const updateStatusContact = "./updateStatusContact.js";
const delateById = require("./delateById");
module.exports = {
  getAll: ctrlWrapper(getAll),
  getById: ctrlWrapper(getById),
  add: ctrlWrapper(add),
  updateById: ctrlWrapper(updateById),
  updateStatusContact: ctrlWrapper(updateStatusContact),
  delateById: ctrlWrapper(delateById),
};
