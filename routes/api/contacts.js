const express = require("express");

const router = express.Router();
// const validateBody = require("../../midllewares/validateBody");
// const schemas = require("../../schemas/contacts");
const ctrl = require("../../controllers/contacts");

router.get("/", ctrl.getAll);

// router.get("/:contactId", ctrl.getById);

// router.post("/", validateBody(schemas.addSchema), ctrl.add);

// router.delete("/:contactId", ctrl.delateById);

// router.put("/:contactId", validateBody(schemas.addSchema), ctrl.updateById);

module.exports = router;
