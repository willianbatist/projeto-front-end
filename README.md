# Projeto prático para a vaga de Dev-JR Front-end

Como desenvolvedor, você foi designado a criar uma aplicação React-ts para gestão de Processos Industriais, utilizando React e TypeScript, integrada com um backend.

O que é processo industrial? Processo industrial é uma série sistemática de operações que tem como função a fabricação de algum material. Essas operações podem ser de ordem mecânica, físicas ou químicas.

O objetivo é permitir que os usuários do sistema possam visualizar, criar, editar e excluir os processos de uma empresa.

## A aplicação deverá ter as seguintes funcionalidades:

    - Uma página Home para listagem dos processos cadastrados.
    - Um formulário para cadastro de um novo processo.
    - Opção de excluir um processo selecionado.
    - Opção de editar um processo selecionado.

## Regras de Negócio

    - Os campos do formulário para inclusão/alteração são: Nome do processo, Lista de emails e Família.
    - Os campos de ID empresa e ID do processo não ficarão habilitadas para inclusão/alteração do usuário, entranto, devem ser informados na chamada API.
    - ID do processo deverá ser um código UUID V4.
    - A listagem dos processos deverá apresentar apenas os dados do Nome do Processo e Família.
    - Deverá ser utilizada a lib Redux para gerenciamento de estados da aplicação.

## UX/UI

O desenvolvedor estará livre para apresentar o layout que faça mais sentido para as funcionalidades solicitadas, e que siga as boas práticas de UX/UI.

Como dica, lembre-se de situar o usuário em qual parte do sistema ele se encontra, e apresentar o retorno de sucesso ou erro de cada ação executada.

Além disso, o desenvolvedor deverá seguir as paletas de cores da empresa Futurai. Os arquivos de ajuda estão presentes na pasta `/img`.

## API REST

Para o desenvolvimento ágil do projeto, deixamos o backend já preparado. Para iniciar a API e o banco de dados, o candidato deverá instalar a lib "json-server" globalmente e rodar o comando `json-server --watch backend/db.json` na pasta raiz do projeto.

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

## O que avaliaremos:

- Qualidade e organização do código
- Uso correto de React e suas APIs
- Funcionalidade e usabilidade da aplicação
- Boas práticas de desenvolvimento
- Boas práticas de UX/UI

## Entrega do projeto

O desenvolver deverá fazer um fork do projeto e implementar as funcionalidades propostas em seu proprio repositório.

Para a entrega, o desenvolverá deverá apenas enviar o link de endereço do seu repositório com o projeto finalizado

Boa sorte!
