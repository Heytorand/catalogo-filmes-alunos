import express from "express";
import helmet from "helmet";
import cors from "cors";

import { pageRoutes } from "./routes/pageRoutes";
import { apiRoutes } from "./routes/apiRoutes";

import { limiterGeral } from "./middlewares/rateLimiter";
import { sanitizar } from "./middlewares/sanitizar";

const app = express();

// 1. Segurança: Helmet
app.use(helmet());

// 2. CORS restrito
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

// 3. Rate Limit
app.use(limiterGeral);

// 4. Parsers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 5. Sanitização automática
app.use(sanitizar);

// 6. Arquivos estáticos
app.use(express.static("public"));

// 7. Configuração do EJS
app.set("view engine", "ejs");
app.set("views", "./src/views");

// 8. Rotas
app.use(pageRoutes);
app.use(apiRoutes);

// 9. Iniciar servidor
app.listen(3000, () => {
  console.log("✅ Catálogo de Filmes rodando em http://localhost:3000");
});