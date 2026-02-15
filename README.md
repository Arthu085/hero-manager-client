# Hero Manager Client

Interface web para o sistema de gestão de projetos heroicos da **HeroForce**, desenvolvida com React, TypeScript, Vite e Ant Design.

## Sobre o Projeto

O Hero Manager é uma plataforma completa de gestão de projetos onde heróis (usuários) podem criar, gerenciar e acompanhar projetos baseados em 6 métricas fundamentais da cultura organizacional:

- **Agilidade** - Velocidade de execução
- **Encantamento** - Qualidade da experiência
- **Eficiência** - Otimização de recursos
- **Excelência** - Padrão de qualidade
- **Transparência** - Clareza na comunicação
- **Ambição** - Visão e objetivos

### Sistema de Progressão Automática

Quando você atualiza as métricas de um projeto, o sistema:

1. **Calcula automaticamente** o `completionPercentage` baseado na média das 6 métricas
2. **Atualiza automaticamente** o status do projeto:
   - `0%` → **PENDING** (Pendente)
   - `1-99%` → **IN_PROGRESS** (Em Progresso)
   - `100%` → **COMPLETED** (Concluído)

## Tecnologias

- **[React](https://react.dev/)** (19.2.0) - Biblioteca JavaScript para interfaces
- **[TypeScript](https://www.typescriptlang.org/)** (5.9.3) - Superset JavaScript tipado
- **[Vite](https://vitejs.dev/)** (7.3.1) - Build tool e dev server ultrarrápido
- **[Ant Design](https://ant.design/)** (6.3.0) - Biblioteca de componentes UI
- **[React Router](https://reactrouter.com/)** (7.13.0) - Roteamento SPA
- **[Axios](https://axios-http.com/)** (1.13.5) - Cliente HTTP
- **[Zod](https://zod.dev/)** (4.3.6) - Validação de schemas
- **[Day.js](https://day.js.org/)** (1.11.19) - Manipulação de datas
- **[JWT Decode](https://github.com/auth0/jwt-decode)** (4.0.0) - Decodificação de tokens JWT

## Pré-requisitos

- [Node.js](https://nodejs.org/) (18+)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)
- **Hero Manager API** rodando (veja o repositório do backend)

## Como Rodar o Projeto

### 1. Clonar o Repositório

```bash
git clone https://github.com/Arthu085/hero-manager-client.git
cd hero-manager-client
```

### 🔧 2. Configurar Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto:

**Utilize o .env.example**

```bash
cp .env.example .env
```

O arquivo `.env` deve conter:

```env
# URL da API Backend
VITE_API_URL=http://localhost:3000
```

> **Nota:** Certifique-se de que a API backend está rodando na porta 3000 ou ajuste a URL conforme necessário.

### 3. Instalar Dependências

```bash
npm install
```

ou

```bash
yarn install
```

### 4. Iniciar Aplicação

#### Modo Desenvolvimento (com hot-reload):

```bash
npm run dev
```

ou

```bash
yarn dev
```

#### Modo Produção:

```bash
# Build
npm run build

# Preview do build
npm run preview
```

A aplicação estará disponível em: **http://localhost:5173**

## Scripts Disponíveis

```bash
# Iniciar servidor de desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview do build de produção
npm run preview

# Executar linter
npm run lint
```

### Camadas por Módulo:

- **Domain Layer**: DTOs, Interfaces, Enums, Regras de Negócio
- **Infrastructure Layer**: Services, Comunicação com API
- **Presentation Layer**: Pages, Components, Contexts, Hooks

## Usuário de Teste

Após executar os seeds no backend, você terá:

**Admin:**

```
Email: admin@gmail.com
Senha: 123456
Personagem: Superman
```

### Roles (Perfis):

- **ADMIN** - Acesso total (criar, editar, deletar projetos e usuários)
- **USUARIO** - Visualizar projetos

## Backend

**Acesse o Backend** - [GitHub](https://github.com/Arthu085/hero-manager-api)

> **Importante:** O frontend depende da API backend para funcionar. Certifique-se de que a API está rodando antes de iniciar o cliente.

## Desenvolvido por

**Arthur Ghizi** - [GitHub](https://github.com/Arthu085)
