const { Contact } = require("../models/contact");
const { ctrlWrapper, HttpError } = require("../helpers");

const getAll = async (req, res) => {
  const result = await Contact.find({}, "-createdAt -updatedAt");
  res.json(result);
};

const getById = async (req, res) => {
  const { contactId } = req.params;
  const result = await Contact.findById(contactId);
  if (!result) {
    throw HttpError(404, "Not faund");
  }
  res.json(result);
};

const add = async (req, res) => {
  const result = await Contact.create(req.body);
  res.status(201).json(result);
};

const updateById = async (req, res) => {
  const { contactId } = req.params;
  const result = await Contact.findByIdAndUpdate(contactId, req.body, {
    new: true,
  });
  if (!result) {
    throw HttpError(400, "missing field favorite");
  }
  res.json(result);
};
const updateStatusContact = async (req, res) => {
  const contactBody = req.body;
  const { contactId } = req.params;
  const result = await Contact.findByIdAndUpdate(contactId, contactBody, {
    new: true,
  });
  if (!result) {
    throw HttpError(400, "Not faund");
  }
  if (!contactBody.favorite) {
    throw HttpError(400, "missing field favorite");
  }
  res.status(200).json(result);
};
const delateById = async (req, res) => {
  const { contactId } = req.params;
  const result = await Contact.findByIdAndDelete(contactId);
  if (!result) {
    throw HttpError(404, "Not faund");
  }
  res.json({ message: "Delate success" });
};
module.exports = {
  getAll: ctrlWrapper(getAll),
  getById: ctrlWrapper(getById),
  add: ctrlWrapper(add),
  updateById: ctrlWrapper(updateById),
  updateStatusContact: ctrlWrapper(updateStatusContact),
  delateById: ctrlWrapper(delateById),
};
