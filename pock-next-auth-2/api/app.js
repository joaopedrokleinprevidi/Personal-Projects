require("dotenv").config(); // Para carregar as variáveis de ambiente do .env
const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();
const PORT = 3003;

// Middleware para interpretar JSON no corpo das requisições
app.use(express.json());

app.get("/ping", (req, res) => {
  // Resposta para credenciais inválidas
  return res.status(200).json({ message: "funcionando" });
});

// Endpoint de login
app.post("/login", (req, res) => {
  const { username, password } = req.body;
  console.log(username, password);

  // Validando dados do usuário (de forma simplificada, apenas para testes)
  if (username === "user" && password === "1234") {
    // Dados do usuário para incluir no token
    const payload = { username: "João", sub: "56asd465as4d" };

    // Gerando o token com uma validade de 1 hora
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "15s",
    });

    return res.json({
      message: "Login bem-sucedido!",
      data: { token: token, username: username, sub: "56asd465as4d" },
    });
  }

  // Resposta para credenciais inválidas
  return res.status(401).json({ message: "Credenciais inválidas!" });
});

// Middleware de autenticação JWT
function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  console.log("authHeader", req);

  const token = authHeader && authHeader.split(" ")[1];

  if (!token) return res.status(401).json({ message: "Token não encontrado!" });

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err)
      return res.status(403).json({ message: "Token inválido ou expirado!" });
    req.user = user;
    next();
  });
}

// Rota protegida que requer autenticação
app.get("/protected", authenticateToken, (req, res) => {
  console.log(req);

  res.json({ message: "Este é um dado protegido!", user: req.user });
});

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta http://localhost:${PORT}`);
});
