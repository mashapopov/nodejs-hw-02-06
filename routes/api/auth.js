const express = require("express");
const router = express.Router();
const validateBody = require("../../midllewares/validateBody");
const authenticate = require("../../midllewares/authenticate");
const { schemas } = require("../../models/user");
const ctrl = require("../../controllers/auth/index");
const { upload, avatarOptimizer } = require("../../midllewares");

router.post("/register", validateBody(schemas.registerSchema), ctrl.register);
router.get("/verify/:verificationToken", ctrl.verifyEmail);
router.post(
  "/verify",
  validateBody(schemas.emailSchema),
  ctrl.resendVerifyEmail
);
router.post("/login", validateBody(schemas.loginSchema), ctrl.login);
router.get("/current", authenticate, ctrl.getCurrent);
router.post("/logout", authenticate, ctrl.logout);
router.patch(
  "/",
  authenticate,
  validateBody(schemas.subscriptionSchema),
  ctrl.subscription
);
router.patch(
  "/avatars",
  authenticate,
  upload.single("avatar"),
  avatarOptimizer,
  ctrl.updateAvatar
);

module.exports = router;
