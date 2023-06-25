const { Contact } = require("../../models/contact");
const { HttpError } = require("../../helpers");

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
module.exports = updateStatusContact;
