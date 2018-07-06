<img src="./its4.svg" width="127px" height="127px" align="left" style="margin-right:10px"/>

# Lite4

A próxima versão do sistema Web da Its4Company

<br>
<br>

**Alo! Alo!** Seja Bem vindo ao repositório. Lite4 é o codinome do novo sistema Web da Its4Company. O produto está sendo criado a partir do que empresas como Facebook, AirBnb, Uber, e New York Times estão usando para construir suas experiências. Também foi levado em consideração a simplicidade, curva de aprendizado, automatização e requisitos como fácil distribuição, entrega progressiva e principalmente manutenibilidade do projeto.

---

## Introdução

## Libraries

A estrutura do projeto foi iniciada a partir de várias pesquisas, referências e projetos open source para nos permitir criar a melhor estrutura de trabalho.

#### Core

- [React DOM](https://github.com/facebook/react)
- [React Router](https://github.com/reactjs/react-router)
- [React-Redux](https://github.com/reactjs/react-redux)
- [React-Router-Redux](https://github.com/reactjs/react-router-redux)

#### Utilities

- [Redux Thunk](https://github.com/gaearon/redux-thunk)
- [Redux Connect](https://github.com/makeomatic/redux-connect)
- [React Helmet](https://github.com/nfl/react-helmet)
- [classnames](https://github.com/JedWatson/classnames)

#### Build System

- [Webpack](https://github.com/webpack/webpack)
  - [Awesome TypeScript Loader](https://github.com/s-panferov/awesome-typescript-loader)
  - [Babel Loader](https://github.com/babel/babel-loader)
  - [React Hot Loader](https://github.com/gaearon/react-hot-loader)
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
  - [tslint Loader](https://github.com/wbuchwalter/tslint-loader)
  - [stylelint Loader](https://github.com/adrianhall/stylelint-loader)

#### Dev & Prod Server

- [Webpack Dev Server](https://github.com/webpack/webpack-dev-server)
  - [Webpack Dev Middleware](https://github.com/webpack/webpack-dev-middleware)
  - [Webpack Hot Middleware](https://github.com/webpack/webpack-hot-middleware)
- [Express](https://github.com/expressjs/express)

#### Developer Experience

- [Typings](https://github.com/typings/typings)
- [tslint](https://github.com/palantir/tslint)
- [stylelint](https://github.com/stylelint/stylelint)
- [Redux Logger](https://github.com/theaqua/redux-logger)
- [Redux DevTools](https://github.com/gaearon/redux-devtools)

#### Testing

- [Jest](https://facebook.github.io/jest/)
- [Fetch Mock](https://github.com/wheresrhys/fetch-mock)
- [Redux Mock Store](https://github.com/arnaudbenard/redux-mock-store)

## Workflow

#### Component

Componente não recebe state, lógica, tratamento de erro, ele é unicamente um comportamento da view encapsulado. Todo o data deve ser passado via props.

#### Container

É um conjunto de components encapsulado para executar determinado comportamento na view. Todas os state, lógica, tratamento de erro, e etc, são referentes a ele próprio. O que não depende dele.

#### Página

- mapStateToProps: Mapeaia todas as operações (Dispatchs) do modulo

- mapDispatchToProps: Mapeia o state e selectors do modulo

## Estrutura de diretórios

```bash
.
├── .storybook                  # configuração do storybook
├── .vscode                     # configuração VSCode
├── configs                     # Pasta raiz de configurações do projeto
├── dist                        # Pasta de distribuíção (build)
├── node_modules                # Pacotes node.js
├── refs                        # Código de referência de design partners
├── scripts                     # Scripts auxiliares e complementares da infra
├── src                         # Código fonte
│   ├── client                  # Código front-end
│   │ ├── components            # Componentes reutilisáveis e modularizados
│   │ ├── containers            # Componentes complexos que conecta com redux
│   │ ├── images                # Imagens
│   │ ├── lib                   # Wrapper das dependências e funções reaproveitavéis
│   │ ├── routes                # Routes
│   │ ├── store                 # Redux
│   │ ├── styles                # Estilo global
│   │ ├── translations          # Config da internacionalização; messages comuns e globais
│   │ ├── vendors               # Libs terceiros que precisam ser atualizados manualmente, addons etc
│   | ├── App.tsx               # Ponto de entrada para renderização
│   | ├── constants.ts          # Constantes da aplicação
│   | ├── index.html            # index.html :p
│   | └── index.tsx             # Depreciado: Será incluso no App.tsx
│   ├── server                  # Código backend - em desenvolvimento :p
│   └── shared                  # Código isomórfico
├── stories                     # Documentação
├── tests                       # Testes globais
├── types                       # Typagem typescript personalizada
├── ...                         # Em breve
```

## Trabalhando neste repositório

Para contribuir para este repositório instale estes programas em seu computador.

- [NodeJS 10.x](https://nodejs.org)
- [Yarn 1.x](https://yarnpkg.com/lang/en/)
- [Git 2.x](https://git-scm.com/)
- [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)
- [Redux Developer Tools](https://github.com/zalmoxisus/redux-devtools-extension)

> ### Contribuindo
>
> Abra sua PR. Fique atento aos padrões de projeto que é usado neste, que são:

- [CSS/SCSS](https://github.com/stylelint/stylelint)
- Typescript/Javascript: O [TSlint](https://github.com/palantir/tslint) irá lhe guiar com o [style1](https://github.com/piotrwitek/react-redux-typescript-guide), [style2](https://github.com/basarat/typescript-book/blob/master/docs/styleguide/styleguide.md) e com pequenasalterações
- Git e Outros: [Bee Stylish](https://github.com/BeeTech-global/bee-stylish)

Está configurado no hook do git commit o [prettier](https://github.com/prettier/prettier) que fará automatimente a formatação do código.

Usamos o Github flow no desenvolvimento. Para criar um novo PR:

1.  Crie um fork deste repositório e clone em seu computador
2.  Crie uma nova branch baseada na master (`git checkout -b fix/button-size` por exemplo)
3.  Faça suas alterações, criando commits que agrupam as alterações feitas
4.  Envie sua branch para seu fork (`git push origin fix/button-size`, por exemplo)

Caso sua branch fique desatualizada, poderemos solicitar um rebase.
Para fazê-lo:

1.  Adicione nosso "upstream" como remoto: `git remote add upstream https://github.com/pagarme/pilot`
1.  Busque as atualizações do upstream: `git fetch upstream`
1.  Faça o rebase de sua branch: `git rebase upstream/master <sua-branch>`
1.  Resolva os conflitos e use `git rebase --continue` para continuar
1.  Faça o force push em seu fork: `git push origin <sua-branch> --force-with-lease`

## Execução do projeto

1.  Baixe o código fonte:
    <i class="icon-terminal"></i>`git clone https://github.com/its4company/its4-web.git`

2.  Instalação das dependências do projeto
    <i class="icon-terminal"></i>`yarn`
3.  Iniciando o projeto
    <i class="icon-terminal"></i> `yarn dev`

## Deploy

Use `yarn build`

---

**Todos comandos**

| Comandos        | Descrição                                                                        |
| --------------- | -------------------------------------------------------------------------------- |
| `yarn`          | Instala todas as dependências do projeto                                         |
| `clean:dist`    | Limpa pasta de distribuição                                                      |
| `lint`          | Lint typescript/javascript e CSS/SCSS                                            |
| `lint:ts`       | Lint typescript/javascript                                                       |
| `lint:sass`     | Lint CSS/SCSS                                                                    |
| `i18n:extract`  | Extraí mensagens em `src/client/translations/extracted` para tradução dos termos |
| `i18n:watch`    | Escuta alterações nos arquivos Messages.ts e extrai os termos                    |
| `prebuild`      | Auto Executa antes de `build`. Executa: `clean:dist`, `lint`                     |
| `build:webpack` | Webpack em modo de production                                                    |
| `build`         | Executa `build:webpack`, `doc:build`. Build app para `./dist/`                   |
| `postbuild`     | Auto Executa depois de `build`. Verifica se todos os termos foram traduzidos     |
| `dev`           | Build app continuamente (HMR) com servidor `http://localhost:3000`               |
| `dev:webpack`   | Webpack em modo de develop                                                       |
| `pretest`       | Auto Executa antes de `test`. Executa: `lint`                                    |
| `test`          | Testa aplicação                                                                  |
| `doc`           | Build documentação continuamente (HMR) com servidor em `http://localhost:6000`   |
| `doc:build`     | Build documentação para `/dist/doc`                                              |

## Todo

- CSS Blocks (Esperando lançar versão webpack 4)
- Muitas outras implementações, faça a sua :p

## E pra finalizar!

Existe algo a ser discutido? Abra sua Issue ou mande seu PR
