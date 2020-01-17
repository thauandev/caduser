Para iniciar a api fake execute:

### `json-server server.json -p 3333`

Para iniciar o projeto, execute:

### `yarn start`

Execute o app em modo de desenvolvimento.<br>
Abra [http://localhost:3000](http://localhost:3000) para vizualizar no browser.

# Listagem de usuários

**- Tarefa 1 - Listagem de usuários**
A primeira e segunda colunas são **ID** e **Nome**, respectivamente.
A última célula de cada linha tem opções de **excluir** e **editar** o usuário correspondente.
Por último, a página tem um botão de **"criar novo usuário"**, que ao clicar, exiba a página de criação.

**Fake API**
A aplicação é carregada com usuários pré cadastrados por uma Fake API **json-server**.

## Criação de usuário

Tela de formulário para criação do usuário.

Todos os campos são inseridos manualmente (inclusive o campo **ID**).

Ao final do formulário, há um botão que inseri o novo usuário na tabela com as informações incluídas,

**Campos obrigatórios e validações**
Foi utilizado o **Unform** da Rocketseat para poder lhe dar com o formulário e validações.

#### Editar e deletar usuário

Na página de listagem de usuários, os botões **editar** e **deletar** funcionam da seguinte maneira:

- **Editar**: 1. Redireciona o usuário para uma página similar a de criação de usuário.;

* **Deletar:** 1. Remover totalmente o usuário da listagem.

##### Informações adicionais

- Foi utilizado **redux** para fixação do conceito de **action** e **store**.
