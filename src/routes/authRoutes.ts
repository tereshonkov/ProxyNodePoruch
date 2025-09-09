import { Router } from "express";
import AuthController from "../controllers/auth.controller";

const router = Router();

router.post("/auth/login", AuthController.login.bind(AuthController));
router.post("/auth/register", AuthController.register.bind(AuthController));
router.post("/auth/forgot-password", AuthController.forgotPassword.bind(AuthController));
router.post("/auth/reset-password", AuthController.resetPassword.bind(AuthController));
router.post("/auth/verify-email", AuthController.verifyEmail.bind(AuthController));
router.post("/auth/confirm-email", AuthController.confirmEmail.bind(AuthController));
router.put("/auth/change-password", AuthController.changePassword.bind(AuthController));
router.get("/auth/verify-status", AuthController.verifyStatus.bind(AuthController));
router.get("/auth/me", AuthController.authMe.bind(AuthController));
router.post("/auth/logout", AuthController.logout.bind(AuthController));
router.post("/auth/refresh-token", AuthController.refreshToken.bind(AuthController));

export default router;
