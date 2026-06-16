import rateLimit from "express-rate-limit";

export const limiterGeral = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: "Muitas requisições. Tente novamente mais tarde.",
});