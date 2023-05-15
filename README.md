### Observação

Este repositório contem o **Projeto CRUD de Processos** que reúne o aprendizado desenvolvido por _[Willian Alves Batista](https://www.linkedin.com/in/willian-alves-batista-60aa6a180/)_.

## Projeto CRUD de Processos

### Resultado obtido:

https://user-images.githubusercontent.com/91439283/236925302-c21cf73c-b4d4-4e3c-8a01-219162c5d11e.mp4



#### Habilidades que foram exigidas:

  - Logica de programação;
  - Clean Code;
  - UX/UI

#### Tecnologias utilizadas:

  - React/Next;
  - TypeScript;
  - Redux;
  - uuidv4;
  - axios;
  - swr;
  - zod
  - hookform;
  - styled-components;
  - chakra-ui;
  - CSS;
  - HTML;
  - eslint;
  - vscode;

---

## Apresentação do Projeto

O objetivo do projeto é permitir que os usuários do sistema possam visualizar, criar, editar e excluir os processos de uma empresa.


## Inciando o projeto

### backend

**Observação:** Para iniciar a API e o banco de dados, é necessário instalar a lib "json-server" globalmente e rodar o comando `json-server --watch backend/db.json` na pasta raiz do projeto. 


Para dar start na aplicação vai ser necessário instalar as dependencias do projeto

Na raiz do projeto

    npm install

--

    npm run start:backend

ou 

    json-server --watch backend/db.json
    
--
Ainda na raiz do projeto digite o comando:

    npm run start:frontend
   
--
Será executado os seguintes comandos de forma automática, cd frontend && npm install && npm run build && npm start

## A aplicação tem as seguintes funcionalidades:

    - Uma página Home para listagem dos processos cadastrados.
    - Um formulário para cadastro de um novo processo.
    - Opção de excluir um processo selecionado.
    - Opção de editar um processo selecionado.


## API REST

**Processos**

- id: um identificador único do processo;
- company_id: o identificador da empresa a qual o processo está associado;
- family_id: o identificador da família à qual o processo pertence;
- list_emails_responsables: uma lista de e-mails responsáveis pelo processo;
- process_name: o nome do processo.

**Endpoints**

    - GET/processes: retorna a lista de processos cadastrados
    - GET/processes/:id: retorna os detalhes de um processo específico
    - POST/processes: cria um novo processo
    - PUT/processes/:id: atualiza os dados de um processo existente
    - DELETE/processes/:id: remove um processo existente

**Família**

- id: um identificador único da família;
- family_name: o nome da família.

**Endpoints**

    - GET/families: retorna a lista das famílias cadastradas
    - GET/families/:id: retorna os detalhes de uma família cadastrada

**Empresa**

- id: um identificador único da empresa;
- company_name: o nome da empresa.

**Endpoints**

    - GET/companies/:id: retorna os detalhes da empresa


