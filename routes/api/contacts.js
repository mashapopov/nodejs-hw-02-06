const express = require("express");

const router = express.Router();
const validateBody = require("../../midllewares/validateBody");
const isValidId = require("../../midllewares/isValidId");
const { schemas } = require("../../models/contact");
const ctrl = require("../../controllers/contacts");

router.get("/", ctrl.getAll);

router.get("/:contactId", isValidId, ctrl.getById);

router.post("/", validateBody(schemas.addSchema), ctrl.add);

router.put(
  "/:contactId",
  isValidId,
  validateBody(schemas.addSchema),
  ctrl.updateById
);
router.patch(
  "/:contactId/favorite",
  isValidId,
  validateBody(schemas.updateFavoriteSchema),
  ctrl.updateStatusContact
);
router.delete("/:contactId", isValidId, ctrl.delateById);

module.exports = router;
