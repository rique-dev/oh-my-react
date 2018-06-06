<img src="./logo.svg" width="127px" height="127px" align="left" style="margin-right:10px"/>

# Lite4

A próxima versão do sistema Web da Its4Company

<br>
<br>



**Alo! Alo!** Seja Bem vindo ao repositório. Lite4 é o codinome do novo sistema Web da Its4Company. O produto está sendo criado a partir do que empresas como Facebook, AirBnb, Uber, e New York Times estão usando para construir suas experiências. Também foi levado em consideração a simplicidade, curva de aprendizado, automatização e requisitos como fácil distribuição, entrega progressiva e principalmente manutenibilidade do projeto.

----------
## Introdução

## Libraries
A estrutura do projeto foi iniciada a partir de várias pesquisas, referências e projetos open source para nos permitir criar a melhor estrutura de trabalho.

#### Core
- [React DOM](https://github.com/facebook/react) for views.
- [React Router](https://github.com/reactjs/react-router) to handle in-app routing.
- [React-Redux](https://github.com/reactjs/react-redux) to use React-Redux bindings.
- [React-Router-Redux](https://github.com/reactjs/react-router-redux) to keep application state sync with route changes.

#### Utilities
- [Redux Thunk](https://github.com/gaearon/redux-thunk) for dispatching async actions.
- [Redux Connect](https://github.com/makeomatic/redux-connect) for resolving async props in react-router.
- [React Helmet](https://github.com/nfl/react-helmet)
- [classnames](https://github.com/JedWatson/classnames)

#### Build System
- [Webpack](https://github.com/webpack/webpack) for bundling.
  - [Awesome TypeScript Loader](https://github.com/s-panferov/awesome-typescript-loader) as ts loader.
  - [Babel Loader](https://github.com/babel/babel-loader) as js loader.
  - [React Hot Loader](https://github.com/gaearon/react-hot-loader) for providing hot reload capability to our development server
  - [Style Loader](https://github.com/webpack/style-loader)
  - [CSS Loader](https://github.com/webpack/css-loader)
  - [PostCSS Loader](https://github.com/postcss/postcss)
    - [PostCSS cssnext](https://github.com/MoOx/postcss-cssnext)
    - [PostCSS Assets](https://github.com/assetsjs/postcss-assets)
  - [JSON Loader](https://github.com/webpack/json-loader)
  - [File Loader](https://github.com/webpack/file-loader)
  - [URL Loader](https://github.com/webpack/url-loader)
  - [Sourcemap Loader](https://github.com/webpack/source-map-loader)
  - [Manifest Plugin](https://github.com/danethurber/webpack-manifest-plugin)
  - [Extract Text Plugin](https://github.com/webpack/extract-text-webpack-plugin) for exporting bundled css.
  - [tslint Loader](https://github.com/wbuchwalter/tslint-loader) for using tslint as preloader on build process.
  - [stylelint Loader](https://github.com/adrianhall/stylelint-loader) for using stylelint as preloader on build process.

#### Dev & Prod Server
- [Webpack Dev Server](https://github.com/webpack/webpack-dev-server)
  - [Webpack Dev Middleware](https://github.com/webpack/webpack-dev-middleware)
  - [Webpack Hot Middleware](https://github.com/webpack/webpack-hot-middleware)
- [Express](https://github.com/expressjs/express) for running server both on client and server side.

#### Developer Experience
- [Typings](https://github.com/typings/typings) for installing type definitions of external libraries.
- [tslint](https://github.com/palantir/tslint) for linting TypeScript files.
- [stylelint](https://github.com/stylelint/stylelint) for linting styles.
- [Redux Logger](https://github.com/theaqua/redux-logger)
- [Redux DevTools](https://github.com/gaearon/redux-devtools)

#### Testing
- [Jest](https://facebook.github.io/jest/) for unit testing.
- [Fetch Mock](https://github.com/wheresrhys/fetch-mock) for testing async actions.
- [Redux Mock Store](https://github.com/arnaudbenard/redux-mock-store) for creating mock stores.

## Directory Structure
```bash
.
├── build                       # Built, ready to serve app.
├── config                      # Root folder for configurations.
│   ├── types                   # Global type definitions, written by us.
│   ├── webpack                 # Webpack configurations.
│   └── main.ts                 # Generic App configurations.
├── node_modules                # Node Packages.
├── src                         # Source code.
│   ├── app                     # App folder.
│   │ ├── components            # React Components.
│   │ ├── containers            # React/Redux Containers.
│   │ ├── helpers               # Helper Functions & Components.
│   │ ├── redux                 # Redux related code aka data layer of the app.
│   │ │   ├── modules           # Redux modules.
│   │ │   ├── reducers.ts       # Main reducers file to combine them.
│   │ │   └── store.ts          # Redux store, contains global app state.
│   │ └── routes.tsx            # Routes.
│   ├── client.tsx              # Entry point for client side rendering.
│   ├── index.html              # root page template
│   └── server.tsx              # Entry point for server of static content.
├── typings                     # Type definitions installed with typings.
├── .gitignore                  # Tells git which files to ignore.
├── .stylelintrc                # Configures stylelint.
├── Dockerfile                  # Dockerfile.
├── favicon.ico                 # Favicon.
├── package.json                # Package configuration.
├── README.md                   # This file
├── tsconfig.json               # TypeScript transpiler configuration.
├── tslint.json                 # Configures tslint.
└── typings.json                # Typings package configuration.
```

## Trabalhando neste repositório

Para contribuir para este repositório instale estes progremas em seu computador.

- [NodeJS 10.x](https://nodejs.org)
- [Yarn 1.x](https://yarnpkg.com/lang/en/)
- [Git 2.x](https://git-scm.com/)
- [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)

> ### Contribuindo
Caso queira fazer uma contribuição grande, recomendamos que abra uma
issue para discutir sua ideia antes de executá-la. Para pequenos bugfixes
fique a vontade para abrir PRs. Fique atento aos padrões de projeto que
usamos -- veja nosso styleguide de [React e CSS][react-styleguide] e
também nosso [Git Style Guide][git-styleguide].

Usamos o Github flow no desenvolvimento. Para criar um novo PR:

1. Crie um fork deste repositório e clone em seu computador
1. Crie uma nova branch baseada na master (`git checkout -b fix/button-size` por exemplo)
1. Faça suas alterações, criando commits que agrupam as alterações feitas
1. Envie sua branch para seu fork (`git push origin fix/button-size`, por exemplo)

Caso sua branch fique desatualizada, poderemos solicitar um rebase.
Para fazê-lo:

1. Adicione nosso "upstream" como remoto: `git remote add upstream https://github.com/pagarme/pilot`
1. Busque as atualizações do upstream: `git fetch upstream`
1. Faça o rebase de sua branch: `git rebase upstream/master <sua-branch>`
1. Resolva os conflitos e use `git rebase --continue` para continuar
1. Faça o force push em seu fork: `git push origin <sua-branch> --force-with-lease`

## Execução do projeto

1. Baixe o código fonte:
    <i class="icon-terminal"></i>`git clone https://github.com/its4company/its4-web.git`

2. Instalação das dependências do projeto
    <i class="icon-terminal"></i>`yarn`
3. Iniciando o projeto
    <i class="icon-terminal"></i> `yarn dev`

## Deploy

  Use `yarn build`

---

**Todos comandos**

Comandos | Descrição
--- | ---
`yarn` | Instala todas as dependências do projeto
`clean:dist` | Limpa pasta de distribuição
`lint` | Lint typescript/javascript e CSS/SCSS
`lint:ts` | Lint typescript/javascript
`lint:sass` | Lint CSS/SCSS
`i18n:extract` | Extraí mensagens em `src/client/translations/extracted` para tradução dos termos
`i18n:watch` | Escuta alterações nos arquivos Messages.ts e extrai os termos
`prebuild` | Auto Executa antes de `build`. Executa: `clean:dist`, `lint`
`build:webpack` | Webpack em modo de production
`build` | Executa `build:webpack`, `doc:build`. Build app para `./dist/`
`postbuild` | Auto Executa depois de `build`. Verifica se todos os termos foram traduzidos
`dev` | Build app continuamente (HMR) com servidor `http://localhost:3000`
`dev:webpack` | Webpack em modo de develop
`pretest` | Auto Executa antes de `test`. Executa: `lint`
`test` | Testa aplicação
`doc` | Build documentação continuamente (HMR) com servidor em `http://localhost:6000`
`doc:build` | Build documentação para `/dist/doc`

## Todo

[] CSS Blocks (Esperando lançar versão webpack 4)
[] Colocar di

## E pra finalizar!

Existe algo a ser discutido? Abra sua Issue ou mande seu PR
