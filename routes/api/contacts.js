const express = require("express");

const router = express.Router();
const validateBody = require("../../midllewares/validateBody");
const isValidId = require("../../midllewares/isValidId");
const authenticate = require("../../midllewares/authenticate");
const { schemas } = require("../../models/contact");
const ctrl = require("../../controllers/contacts/index");

router.get("/", authenticate, ctrl.getAll);

router.get("/:contactId", authenticate, isValidId, ctrl.getById);

router.post("/", authenticate, validateBody(schemas.addSchema), ctrl.add);

router.put(
  "/:contactId",
  authenticate,
  isValidId,
  validateBody(schemas.addSchema),
  ctrl.updateById
);
router.patch(
  "/:contactId/favorite",
  authenticate,
  isValidId,
  validateBody(schemas.updateFavoriteSchema),
  ctrl.updateStatusContact
);
router.delete("/:contactId", authenticate, isValidId, ctrl.delateById);

module.exports = router;
