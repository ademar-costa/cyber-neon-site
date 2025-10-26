# Smoke and Stack

O objetivo do desenvolvimento desse site, é criar uma repositório de projetos pessoais.


### Desenvolvedor 
**Ademar Costa**  
**E-mail**: [neto.ad.costa@gmail.com],[ademar.costa1@estudante.ifb.edu.br]

---
## 🛠 Tecnologias Utilizadas

- **Node.js**
- **React**
- **HTML5 e CSS3**
- **JavaScriptg**

# Etapa 0: As Definições (Planejamento)
Antes da primeira linha de código, este é o nosso "plano de batalha" baseado na escolha de desenvolvimento(React/Node):

## 1º Arquitetura

- Arquitetura: SPA (Single Page Application) desacoplada de uma API RESTful.
- Frontend (Cliente): Uma SPA construída com React. Será servida estaticamente (ou via SSR leve) e consumirá dados do backend.
- Backend (Servidor): Uma API RESTful monolítica (para começar) construída em Node.js.
- Comunicação: JSON via requisições HTTPS (GET, POST, PUT, DELETE).
- Banco de Dados: Usaremos PostgreSQL (robusto e escalável), gerenciado pelo Node.js.

## 2º Frameworks

- Frontend: A base é React. Para estruturar o projeto, usaremos o Vite. É extremamente rápido para desenvolvimento e build.
- Backend: O runtime é Node.js. O framework será Express.js (minimalista, rápido e padrão da indústria).

## 3º Libs (Bibliotecas Principais)

#### Frontend:

- **react-router-dom**: Para gerenciamento de rotas (páginas).
- **tailwindcss**: Essencial para a estética. É perfeita para criar um design system customizado (neon, cyberpunk) e é mobile-first (ótima para responsividade).
- **axios**: Para fazer as requisições HTTP para o nosso backend.
- **framer-motion**: Para as animações (essencial para o feeling "futurista").

#### Backend:

- **prisma**: Nosso ORM. Moderno, type-safe e vai "modelar o banco de dados" de forma eficiente.
- **cors**: Para permitir a comunicação entre o front (ex: localhost:5173) e o back (ex: localhost:3000).
- **dotenv**: Para gerenciar variáveis de ambiente (senhas de banco, etc.).
- **jsonwebtoken (e bcryptjs)**: Se precisarmos de autenticação de usuários.

## 4º Code Style

- Padrão: Vamos usar ESLint (para encontrar problemas) e Prettier (para formatar o código).
- Regra: camelCase para variáveis/funções, PascalCase para componentes React. Usaremos importações ESM (import/export).
- Mensagens de Commit (Git): Conventional Commits (ex: feat:, fix:, style:, refactor:).

## 5º Pipeline (CI/CD)

- Repositório: GitHub.
- CI/CD: GitHub Actions.
- Fluxo (Simplificado):
- Push/Merge na branch main.
- GitHub Action executa: npm install, npm run lint, npm run test (se tivermos testes).
- Deploy (Frontend): Build do Vite, deploy automático na Vercel (perfeita para React/Vite).
- Deploy (Backend): Deploy automático no Render (ótimo para APIs Node.js e bancos PostgreSQL).

## 6º Design Pattern

#### Frontend (React):

- Arquitetura de Componentes (padrão do React).
- Estrutura de Pastas: Baseada em Features (features/componentes/hooks/services).
- Gerenciamento de Estado: React Context API para estado global simples (ex: tema, usuário logado).

#### Backend (Node.js/Express):

- Vamos usar o padrão Controller-Service-Repository (uma variação do MVC para APIs):
- Routes (Rotas): Define os endpoints (ex: /users).
- Controllers: Recebe a requisição (HTTP), valida a entrada e chama o Service.
- Services: Contém a lógica de negócio (regras).
- Repositories (ou Prisma Client): Interage diretamente com o banco de dados.