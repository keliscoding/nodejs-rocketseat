# Módulo Chapter 1 Conceitos

- Introdução
- Conceitos do Node
- Conceitos sobre Api Rest
- Método de requisição

### Módulo Chapter 1 configurando o projeto

- Criando a estrutura do projeto
- Adicionando o Nodemon na aplicação
- Utilizando os métodos HTTP
- Utilizando os métodos HTTP (Definição)
- [Utilizando o Insomnia](https://insomnia.rest/)
- Tipos de parâmetros


### Módulo Chapter 1 Primeiro projeto com Node.js

- Conhecendo os requisitos da aplicação
- Cadastro de conta
- Validando CPF existente
- Listando extrato
- Validando a conta
- Middlewares
- Criando depósito na conta
- Criando saque na conta
- Listar extrato bancário por data
- Atualizar conta
- Remover conta

## Desafio: Conceitos do Node.js

- Projeto API TODO ( Conceitos do Nodejs )

## Desafio: Trabalhando com Middlewares

- Projeto API TODO versão 2 ( Trabalhando com Middlewares )

# Módulo Chapter 2 Typescript

- Introdução
- Introdução Typescript
- Criando projeto com Typescript
- Adicionando os tipos
- Definindo os parâmetros obrigatórios

### Módulo Chapter 2 Criando API com NodeJS 

- Configurando ts-node-dev
- ESLint e Prettier
- Debugando a aplicação
- Criando categoria
- Inserindo ID com uuid
- Inserindo tipagem para categoria
- Criando repositório de categoria
- Listando as categorias
- Validando o cadastro de categoria

### Módulo Chapter 2 S.O.L.I.D

- Entendendo o S.O.L.I.D
- Utilizando o princípio de responsabilidade única (SRP)
- Utilizando o princípio da substituição de Liskov (LSP)

### Módulo Chapter 2 Continuação da aplicação

- Criando service de especificação e separando em módulos
- Corrigindo as importações
- Criando repositório de especificação
- Criando os Use Case de categoria
- Refatorando a listagem de categoria
- Conhecendo Singleton Pattern
- Separando os repositórios
- Criando Use Case de especificação
- Refatorando as rotas

### Módulo Chapter 2 Trabalhando com Upload

- [Conhecendo o Multer](https://www.npmjs.com/package/multer)
- Criando Upload de arquivos
- Criando o Use Case para importar categorias
- Conhecendo o conceito de Stream
- Lendo os dados do Upload
- Inserindo os dados do Upload no repositório

### Módulo Chapter 2 Iniciando a Documentação

- [Conhecendo o Swagger](https://swagger.io/resources/open-api/)
- Configurando o Swagger
- Criando a documentação de Criação de categoria
- Criando a documentação de Listagem de categoria
- Removendo os arquivos de Upload

## Desafio: Introdução ao SOLID

- Projeto API de Cadastro e Listagem de usuários ( Introdução ao SOLID )

## Desafio: Documentando com Swagger

- Projeto API de Cadastro e Listagem de usuários Introdução ao SOLID ( documentando com Swagger )

# Módulo Chapter 3 Conhecendo o Docker

- Introdução
- Documentação de instalação do Docker
- O que é o Docker
- Criando nosso primeiro container e Dockerfile
- Usando docker compose
- Comandos do docker e docker compose

### Módulo Chapter 3 Trabalhando com Banco de Dados

- Conhecendo as formas de usar o banco de dados
- Instalando o TypeORM
- Criando container do Postgres
- Refatoração com Network_mode e Reload
- Aprendendo o conceito de Migrations
- Criando Migration de Categoria
- Refatorando o Model de Categoria
- Alterando o Repositório de Categoria
- Refatorando o caso de uso de Categoria
- Entendendo as alterações

### Módulo Chapter 3 Injeção de Dependência

- [Conhecendo o TSyringe](https://www.npmjs.com/package/tsyringe?activeTab=readme)
- Refatorando as especificações
- Criando Migration de Especificação
- Continuação da Documentação

### Módulo chapter 3 Usuário

- Criando Migration de Usuário
- Criando Repositório de Usuário
- Criando o Controller de Usuário
- Alterando tabela de Usuário
- Criptografar senha
- [Entendendo autenticação com JWT](https://jwt.io/)
- Criando Token do Usuário
- Autenticação nas rotas
- Tratamento de Exceções

### Módulo chapter 3 Avatar do Usuário

- Adicionando Coluna de Avatar
- Upload de avatar
- Remover Arquivo de Avatar Existente

## Desafio: Database Queries

- Projeto API de Cadastro e listagem de Usuários e Games ( Database Queries )

## Desafio: Modelagem do Banco de Dados

- [Projeto API de Cadastro e listagem de Usuários e Games ( Modelagem do Banco de Dados )](https://automatic-iberis-75f.notion.site/Desafio-02-Ignite-Modelagem-do-banco-de-dados-286d9fa597574984951e7c577614eeaf)

# Módulo Chapter 4 Testes

- Conhecendo os tipos de testes 
- Criando o primeiro teste
- Teste de Criação de Categoria
- Teste de Autenticação do Usuário
- Imports da Aplicação
- Corrigindo as Importações
- Refatorando a Aplicação

### Módulo Chapter 4 Requisitos

- Escrevendo os requisitos da aplicação

### Módulo Chapter 4 Carros

- Alterando a Importação dos Repositórios
- Criando Migrations do Carro
- TDD na Prática
- Continuando o Caso de Uso de Carros
- Estruturando a Entidade de Carros
- Criando seed de Usuário
- Criando Middleware de Administrador
- Listando Carros Disponíveis
- Continuação da Listagem de Carros Disponíveis
- Criando Migrations de Especificação de Carros (Many to Many)
- Caso de uso do Cadastro de Especificação para Carro
- Finalizando o CreateCarSpecificationUseCase
- Criando Migrations de Imagens de Carro
- Caso de Uso do Cadastro de Imagens do Carro

### Módulo Chapter 4 Aluguel

- Criando Migration do Aluguel
- Criando os Testes do Aluguel
- Continuação do Cadastro de Aluguel
- [Trabalhando com Datas com DayJs](https://www.npmjs.com/package/dayjs)
- Criando Provider para Data
- Criando CreateRentalController

### Módulo Chapter 4 Testes de Integração

- [Configurando Supertest](https://www.npmjs.com/package/supertest)
- Criando o Primeiro Teste de Integração
- Continuando Teste de Integração
- Criando Teste de Listagem de Categorias

## Desafio: Testes Unitários

- Projeto API Financeira ( FinApi )
## Desafio: Testes de Integração

- Projeto API Financeira ( FinApi )

# Módulo Chapter 5 Carros

- Corrigindo Status de um Carro
- Caso de Uso de Devolução de Carro
- Controller de Devolução de Carro
- Listagem de Aluguéis do Usuário
- Refatorando a Listagem de Aluguel do Usuário
- Criando Documentação com Autenticação em Categoria
- Replicando Autenticação para a Documentação
- Documentação para Upload de Imagens do Carro
- Correção dos Testes

### Módulo Chapter 5 Autenticação

- Refresh Token (Migration de Users Token)
- Repositório de Refresh Token
- Refatorando Autenticação do Usuário
- Criando Caso de Uso do Refresh Token
- Controller do Refresh Token

### Módulo Chapter 5 Recuperação de Senha

- Criando caso de uso do SendForgotPasswordMail
- Criando Provider de e-mail
- Inserindo Template Engine para Envio de e-mail
- Criando caso de uso de Reset da Senha

### Módulo Chapter 5 Testes

- Refatorando Testes
- Testando Envio de e-mail
- Coverage Report

## Desafio: Transferências com a FinApi

- Projeto API Financeira ( FinApi )

# Módulo Chapter 6 Refresh Token

- Introdução
- Corrigindo o Refresh Token

### Módulo Chapter 6 Configuração do AWS

- [Criar conta no AWS](https://aws.amazon.com/pt/free/?sc_icampaign=acq_freetier&sc_ichannel=ha&sc_icontent=awssm-evergreen_aware_prospect&sc_iplace=hero&trk=~ha_awssm-evergreen_aware_prospect&refid=ha_awssm-evergreen-1st-visit&all-free-tier.sort-by=item.additionalFields.SortRank&all-free-tier.sort-order=asc&awsf.Free%20Tier%20Types=*all&awsf.Free%20Tier%20Categories=*all)
- [SSH no Windows](https://www.notion.so/SSH-no-Windows-c6091c09aeca4555b0bbe00447a8ebd8)
- Criação do Usuário e S3
- Provider de Upload
- Upload Utilizando S3
- Criando URL de acesso do Avatar
- Configurando o e-mail em Produção
- Criando Provider do SESMail

### Módulo Chapter 6 Preparando Deploy

- Estratégias de Deploy
- Criando Instância na AWS
- Configurando Instância
- Configurando o Babel na Aplicação

### Módulo Chapter 6 Deploy

- Aplicação no Github
- Clonando Aplicação para Deploy
- Configurando o Banco de Dados
- Alterando a Configuração do Banco de Dados

### Módulo Chapter 6 CI/CD

- Criando Github Actions
- [Configurando Proxy Reverso](https://www.digitalocean.com/community/tutorials/how-to-set-up-a-node-js-application-for-production-on-ubuntu-16-04#step-5-setting-up-nginx-as-a-reverse-proxy-server)
- [Configurando PM2 na Aplicação](https://pm2.keymetrics.io/)
- Finalizando Configurações das Actions
- [Configurando Domínio e SSL](https://certbot.eff.org/)

### Módulo Chapter 6 Segurança

- Configurando Rate Limiter
- Configurando Sentry

### Módulo Chapter 6 Serverless

#### [Apartir daqui todos os tópicos a seguir fazem parte da Aplicação Serverless ( CertificateIgnite ) que se encontra na pasta (chapter6/CertificateIgnite)](https://github.com/macmiller87/Curso_Rocketseat_Ignite_trilha_Nodejs/tree/main/Chapter6/certificateignite)

- O que é Serverless
- [Conhecendo o Serverless Framework](https://www.serverless.com/)
- [Criando Projeto Serverless](https://github.com/macmiller87/Curso_Rocketseat_Ignite_trilha_Nodejs/tree/main/Chapter6/certificateignite)
- [Criando Primeira Function](https://github.com/macmiller87/Curso_Rocketseat_Ignite_trilha_Nodejs/blob/main/Chapter6/certificateignite/src/functions/hello.ts)
- Conhecendo o DynamoDB
- [Implementando o DynamoDB](https://github.com/macmiller87/Curso_Rocketseat_Ignite_trilha_Nodejs/blob/main/Chapter6/certificateignite/serverless.ts)
- [Criando a Function de Gerar Certificado](https://github.com/macmiller87/Curso_Rocketseat_Ignite_trilha_Nodejs/blob/main/Chapter6/certificateignite/src/functions/generateCertificate.ts)
- Deploy na AWS
- [Criando template](https://github.com/macmiller87/Curso_Rocketseat_Ignite_trilha_Nodejs/blob/main/Chapter6/certificateignite/src/functions/generateCertificate.ts)
- [Convertendo para PDF](https://github.com/macmiller87/Curso_Rocketseat_Ignite_trilha_Nodejs/blob/main/Chapter6/certificateignite/src/functions/generateCertificate.ts)
- Salvando Certificado no S3
- [Criando a Function de Validação do Certificado](https://github.com/macmiller87/Curso_Rocketseat_Ignite_trilha_Nodejs/blob/main/Chapter6/certificateignite/src/functions/verifyCertificate.ts)
- Deploy da Aplicação Final

### Módulo Chapter 6 Microsserviços

- Microsserviços