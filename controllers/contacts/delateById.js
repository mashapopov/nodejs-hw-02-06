const { Contact } = require("../../models/contact");
const { HttpError } = require("../../helpers");
const delateById = async (req, res) => {
  const { contactId } = req.params;
  const result = await Contact.findByIdAndDelete(contactId);
  if (!result) {
    throw HttpError(404, "Not faund");
  }
  res.json({ message: "Delate success" });
};
module.exports = delateById;
