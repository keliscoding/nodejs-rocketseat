#ESLint e Prettier - Trilha Node.js

- Introdução
- Instalação
    - Eslint
    - Prettier
- Problemas no Windows

---

## Introdução

Uma ferramenta que nos auxilia no momento de padronizarmos o nosso projeto, e talvez seja a mais importante, é o **Eslint**. Com ele conseguimos automatizar os **padrões de códigos** do nosso projeto, e podemos utiliza-lo para projetos em **NodeJS, ReactJS e React Native.**

Por exemplo, no **Javascript** o uso do **ponto e vírgula** ao final de uma linha é facultativo, ou seja, diferente de algumas linguagens, a falta dele não infere para que o código seja compilado. Outra utilização que também é opcional é o uso de **aspas duplas** ou **aspas simples.**

---

##Instalação 

Antes de iniciar de fato a configuração do **Eslint** em nosso projeto, precisamos instalar a **extensão** do **Eslint** no **VSCode**. É ela quem irá nos auxiliar para que nossas configurações sejam entendidas dentro do nosso código.

####Eslint

Pra começar, vamos instalar o **Eslint** como uma dependência de desenvolvimento dentro do nosso projeto **NodeJS**.

```
yarn add eslint -D
```

Após a instalação, precisamos inicializar o **eslint** pra conseguirmos inserir as configurações dentro do projeto.

Faremos isso inserindo o seguinte código no terminal:

```
yarn eslint --init
```

Ao inserir a linha acima, serão feitas algumas perguntas para configuração do projeto, conforme iremos ver à seguir:

**1 - How would you like to use Eslint?** · To check syntax, find problems and enforce code style 

**2 - What type of modules does your project use?** · esm

**3 - Which framework does your project use?** · none


**4 - Does your project use TypeScript?** · Yes

**5 - Where does your code run?** · Node

**6 - How would you like to define a style for your project?** · Use a popular style guide

**7 - Which style guide do you want to follow?** · airbnb   

**8 - What format do you want your config file to be in?** · JSON 

**9 - Would you like to install them now with npm?** · No 

Adicionar manualmente as dependências.

```
yarn add -D @typescript-eslint/eslint-plugin@latest eslint-config-airbnb-base@latest eslint@^7.32.0 || ^8.2.0 eslint-plugin-import@^2.25.2 @typescript-eslint/parser@latest
```

Com as dependências instaladas vamos criar na raiz do projeto um arquivo ```.eslintignore``` com o conteúdo abaixo para ignorar o Linting em alguns arquivos:

```
    /*.js
    node_modules
    dist
```

Agora vamos começar a configuração do arquivo que foi gerado na inicialização do **ESLint**, o ```.eslintrc.json```, a primeira coisa a ser feita é adicionar dentro de ```"env"``` a linha:
```
    "jest": true
```

O próximo passo é adicionar dentro de ```"extends"``` a linha:

```"plugin:@typescript-eslint/recommended"```

Agora, precisamos configurar o plugin que instalamos para que seja usado pelo ESLint. Para isso, adicione o seguinte dentro de ```"plugins"```:

```"eslint-plugin-import-helpers"```

Em seguida, adicionamos dentro de ```"rules"``` as seguintes configurações:

```
    "camelcase": "off",
        "import/no-unresolved": "error",
        "@typescript-eslint/naming-convention": [
        "error",
        {
            "selector": "interface",
            "format": ["PascalCase"],
            "custom": {
            "regex": "^I[A-Z]",
            "match": true
            }
        }
    ],
        "class-methods-use-this": "off",
        "import/prefer-default-export": "off",
        "no-shadow": "off",
        "no-console": "off",
        "no-useless-constructor": "off",
        "no-empty-function": "off",
        "lines-between-class-members": "off",
        "import/extensions": [
        "error",
        "ignorePackages",
        {
            "ts": "never"
        }
    ],
        "import-helpers/order-imports": [
        "warn",
        {
            "newlinesBetween": "always",
            "groups": ["module", "/^@/", ["parent", "sibling", "index"]],
            "alphabetize": { "order": "asc", "ignoreCase": true }
        }
    ],
        "import/no-extraneous-dependencies": [
        "error",
        { "devDependencies": ["**/*.spec.js"] }
    ]
```

Por fim, para que o Node.js consiga entender arquivos **Typescript** é necessário acrescentar uma configuração adicional nas importações pois por padrão vai ser apresentado um erro dizendo que as importações de arquivos **Typescript** não foram resolvidas. Para resolver isso basta adicionar logo **abaixo** das ```"rules"``` no ```.eslintrc.json``` o seguinte:

```
    "settings": {
        "import/resolver": {
          "typescript": {}
        }
    }
```

Para finalizar e aplicar todas as mudanças vamos fechar o VS Code e reabri na **pasta raiz** do projeto, pois senão o **ESLint** não vai reconhecer as dependências instaladas e aplicar as regras de Linting.

Feito isso, para verificar se está realmente funcionando basta reabrir qualquer arquivo do projeto e tentar errar algo no código para que ele mostre o erro e formate automaticamente quando o arquivo for salvo.

O arquivo ```.eslintrc.json``` finalizado com todas as mudanças tem que ficar assim: 

```
{
    "env": {
        "es2021": true,
        "node": true,
        "jest": true
    },
    "extends": [
        "airbnb-base",
        "plugin:@typescript-eslint/recommended",
        "prettier",
        "plugin:prettier/recommended"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint",
        "eslint-plugin-import-helpers",
        "prettier"
    ],
    "rules": {
        "camelcase": "off",
        "import/no-unresolved": "error",
        "@typescript-eslint/naming-convention": [
        "error",
        {
            "selector": "interface",
            "format": ["PascalCase"],
            "custom": {
            "regex": "^I[A-Z]",
            "match": true
            }
        }
    ],
        "class-methods-use-this": "off",
        "import/prefer-default-export": "off",
        "no-shadow": "off",
        "no-console": "off",
        "no-useless-constructor": "off",
        "no-empty-function": "off",
        "lines-between-class-members": "off",
        "import/extensions": [
        "error",
        "ignorePackages",
        {
            "ts": "never"
        }
    ],
        "import-helpers/order-imports": [
        "warn",
        {
            "newlinesBetween": "always",
            "groups": ["module", "/^@/", ["parent", "sibling", "index"]],
            "alphabetize": { "order": "asc", "ignoreCase": true }
        }
    ],
        "import/no-extraneous-dependencies": [
        "error",
        { "devDependencies": ["**/*.spec.js"] }
    ],
    },
    "settings": {
        "import/resolver": {
          "typescript": {}
        }
    }
}
```

#####Prettier


Antes de começar a configuração é importante que você se certifique de remover a extensão **Prettier - Code Formatter** do seu VS Code, ela pode gerar incompatibilidades com as configurações que vamos fazer.

A primeira coisa que vamos fazer para a configuração do **Prettier** é a instalação dos pacotes no projeto, e faremos isso executando:

```yarn add prettier eslint-config-prettier eslint-plugin-prettier -D```

Esse comando vai adicionar 3 dependências que serão as responsáveis por fazer a formatação do código e também integrar o **Prettier** com o **ESLint**.

```https://github.com/prettier/eslint-config-prettier```

Coloque dentro do ```"extends"```

```
    "prettier",
    "plugin:prettier/recommended"
```

Nos ```"plugins"``` vamos adicionar apenas uma linha com:
```
"prettier"
```

E nas ```"rules"``` vamos adicionar uma linha indicado para o **ESLint** mostrar todos os erros onde as regras do **Prettier** não estiverem sendo seguidas, como abaixo:

```
    "prettier/prettier": "error"
```

O arquivo final vai ficar assim: 

```

```

####Problemas no Windows

Basicamente instale a extensão **EditorConfig for VS Code**.