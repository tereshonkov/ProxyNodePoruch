"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const undici_1 = require("undici");
class AuthController {
    async login(req, res) {
        try {
            const response = await (0, undici_1.fetch)("http://localhost:8000/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    cookie: req.headers.cookie || "",
                },
                body: JSON.stringify(req.body),
            });
            // Проброс Set-Cookie из ответа
            const setCookies = response.headers.getSetCookie();
            if (setCookies.length) {
                res.setHeader("Set-Cookie", setCookies);
            }
            const data = await response.json();
            res.status(response.status).send(data);
        }
        catch (error) {
            console.error("Proxy error:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
    async register(req, res) {
        try {
            const response = await (0, undici_1.fetch)("http://localhost:8000/auth/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(req.body),
            });
            res.status(response.status).send(await response.json());
        }
        catch (error) {
            console.error("Proxy error:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
    async forgotPassword(req, res) {
        try {
            const response = await (0, undici_1.fetch)("http://localhost:8000/auth/forgot-password", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(req.body),
            });
            res.status(response.status).send(await response.json());
        }
        catch (error) {
            console.error("Proxy error:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
    async resetPassword(req, res) {
        try {
            const response = await (0, undici_1.fetch)("http://localhost:8000/auth/reset-password", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    cookie: req.headers.cookie || "",
                },
                body: JSON.stringify(req.body),
            });
            const setCookies = response.headers.getSetCookie();
            if (setCookies.length) {
                res.setHeader("Set-Cookie", setCookies);
            }
            res.status(response.status).send(await response.json());
        }
        catch (error) {
            console.error("Proxy error:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
    async verifyEmail(req, res) {
        try {
            const response = await (0, undici_1.fetch)("http://localhost:8000/auth/verify-email", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(req.body),
            });
            res.status(response.status).send(await response.json());
        }
        catch (error) {
            console.error("Proxy error:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
    async confirmEmail(req, res) {
        try {
            const response = await (0, undici_1.fetch)("http://localhost:8000/auth/confirm-email", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(req.body),
            });
            res.status(response.status).send(await response.json());
        }
        catch (error) {
            console.error("Proxy error:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
    async changePassword(req, res) {
        try {
            const response = await (0, undici_1.fetch)("http://localhost:8000/auth/change-password", {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    cookie: req.headers.cookie || "",
                },
                body: JSON.stringify(req.body),
            });
            const setCookies = response.headers.getSetCookie();
            if (setCookies.length) {
                res.setHeader("Set-Cookie", setCookies);
            }
            res.status(response.status).send(await response.json());
        }
        catch (error) {
            console.error("Proxy error:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
    async verifyStatus(req, res) {
        try {
            const response = await (0, undici_1.fetch)("http://localhost:8000/auth/verify-status", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    cookie: req.headers.cookie || "",
                },
            });
            const setCookies = response.headers.getSetCookie();
            if (setCookies.length) {
                res.setHeader("Set-Cookie", setCookies);
            }
            res.status(response.status).send(await response.json());
        }
        catch (error) {
            console.error("Proxy error:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
    async authMe(req, res) {
        try {
            const response = await (0, undici_1.fetch)("http://localhost:8000/auth/me", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    cookie: req.headers.cookie || "",
                },
            });
            const setCookies = response.headers.getSetCookie();
            if (setCookies.length) {
                res.setHeader("Set-Cookie", setCookies);
            }
            res.status(response.status).send(await response.json());
        }
        catch (error) {
            console.error("Proxy error:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
    async logout(req, res) {
        try {
            const response = await (0, undici_1.fetch)("http://localhost:8000/auth/logout", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    cookie: req.headers.cookie || "",
                },
                body: JSON.stringify(req.body),
            });
            const setCookies = response.headers.getSetCookie();
            if (setCookies.length) {
                res.setHeader("Set-Cookie", setCookies);
            }
            res.status(response.status).send(await response.json());
        }
        catch (error) {
            console.error("Proxy error:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
    async refreshToken(req, res) {
        try {
            const response = await (0, undici_1.fetch)("http://localhost:8000/auth/refresh-token", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    cookie: req.headers.cookie || "",
                },
            });
            const setCookies = response.headers.getSetCookie();
            if (setCookies.length) {
                res.setHeader("Set-Cookie", setCookies);
            }
            res.status(response.status).send(await response.json());
        }
        catch (error) {
            console.error("Proxy error:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
}
exports.default = new AuthController();
