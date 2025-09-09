import type { Request, Response } from "express";
import { fetch } from "undici";

class AuthController {
    async login(req: Request, res: Response) {
        try {
            const response = await fetch("http://localhost:8000/auth/login", {
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
        } catch (error) {
            console.error("Proxy error:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }

    async register(req: Request, res: Response) {
        try {
            const response = await fetch("http://localhost:8000/auth/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(req.body),
            });

            res.status(response.status).send(await response.json());
        } catch (error) {
            console.error("Proxy error:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }

    async forgotPassword(req: Request, res: Response) {
        try {
            const response = await fetch("http://localhost:8000/auth/forgot-password", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(req.body),
            });
            res.status(response.status).send(await response.json());
        } catch (error) {
            console.error("Proxy error:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }

    async resetPassword(req: Request, res: Response) {
        try {
            const response = await fetch("http://localhost:8000/auth/reset-password", {
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
        } catch (error) {
            console.error("Proxy error:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }

    async verifyEmail(req: Request, res: Response) {
        try {
            const response = await fetch("http://localhost:8000/auth/verify-email", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(req.body),
            });

            res.status(response.status).send(await response.json());
        } catch (error) {
            console.error("Proxy error:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }

    async confirmEmail(req: Request, res: Response) {
        try {
            const response = await fetch("http://localhost:8000/auth/confirm-email", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(req.body),
            });

            res.status(response.status).send(await response.json());
        } catch (error) {
            console.error("Proxy error:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }

    async changePassword(req: Request, res: Response) {
        try {
            const response = await fetch("http://localhost:8000/auth/change-password", {
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
        } catch (error) {
            console.error("Proxy error:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }

    async verifyStatus(req: Request, res: Response) {
        try {
            const response = await fetch("http://localhost:8000/auth/verify-status", {
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

    async authMe(req: Request, res: Response) {
        try {
            const response = await fetch("http://localhost:8000/auth/me", {
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
        } catch (error) {
            console.error("Proxy error:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }

    async logout(req: Request, res: Response) {
        try {
            const response = await fetch("http://localhost:8000/auth/logout", {
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
        } catch (error) {
            console.error("Proxy error:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }

    async refreshToken(req: Request, res: Response) {
        try {
            const response = await fetch("http://localhost:8000/auth/refresh-token", {
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
        } catch (error) {
            console.error("Proxy error:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
}

export default new AuthController();
