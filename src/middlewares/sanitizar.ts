import { Request, Response, NextFunction } from "express";

export function sanitizar(
  req: Request,
  res: Response,
  next: NextFunction
) {
  for (const campo in req.body) {
    if (typeof req.body[campo] === "string") {
      req.body[campo] = req.body[campo]
        .trim()
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");
    }
  }

  next();
}