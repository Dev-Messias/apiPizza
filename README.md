# Api Pizzaria

<img src="https://bs-uploads.toptal.io/blackfish-uploads/components/seo/5830595/og_image/optimized/1-331d350d67cb0fbf52807f12b1f7efa4.png" alt="Nodejs">

> Este repositório contém uma API desenvolvida em Node.js, utilizando TypeScript, Prisma, Express e PostgreSQL. A API foi projetada para gerenciar pedidos em uma pizzaria, permitindo que os garçons registrem os pedidos das mesas e que esses pedidos sejam exibidos na cozinha para preparação.

 ## Tecnologias Utilizadas :

 <div style="display: inline_block" >
    <img align="center" alt="" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg" />
    <img align="center" alt="" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/insomnia/insomnia-original.svg" />
    <img  align="center" alt="React" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg" />
    <img align="center" alt="React" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" />
    <img align="center" alt="Nodejs" height="50" width="60"  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg" />
    <img align="center" alt="React" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" />
    <img align="center" alt="React" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" />
</div>

## Funcionalidades :
<ul>
  <li><strong>Gerenciamento de Mesas:</strong> Criação, atualização e remoção de mesas.</li>
  <li><strong>Cadastro de Pedidos:</strong> Registro dos pedidos realizados pelos clientes.</li>
  <li><strong>Exibição de Pedidos na Cozinha:</strong> Visualização em tempo real dos pedidos feitos, facilitando a organização e preparação.</li>
  <li><strong>Autenticação e Autorização:</strong> Controle de acesso para garantir que apenas usuários autorizados possam acessar determinadas funcionalidades.</li>
</ul>

## Como executar o projeto

1. Clone do repositório :

```

$ git clone https://github.com/Dev-Messias/apiPizza.git

```
> Acesse a página utilizando `cd apiPizza`

2. Instale as dependências :

```

$ npm install

```

3. Configure o Banco de Dados :<br><br>
  • Crie um banco de dados PostgreSQL<br>
  • Configure as variáveis de ambiente no arquivo `.env` com as informações do banco de dados:


```

$ DATABASE_URL="postgresql://postgres:senha@localhost:5432/nome_do_banco?schema=public"

# Secret JWT => para gerar o token
JWT_SECRET=Sua_jwt_secret

```
4. Execute as Migrações :

```

$ npx prisma migrate dev

```
5. Inicie o Servidor :

```

$ npm run dev

```

## Endpoints Principais

- Mesas:
    - `POST /order` : Cria uma nova mesa.
    - `GET /orders` : Lista todas as mesas.
    - `GET order/detail` : Detalhes de uma mesa.
    - `POST order/add` : Adiciona item a mesa.
    - `PUT order/send` : Envia pedido para cozinha.
    - `DELETE order/remove` : Remove item da mesa.
    - `DELETE order/finish` : Finaliza pedido.
    - `DELETE /order` : Deleta mesa.
      
- Produto:
    - `POST /product` : Adiciona produto.
    - `GET category/product` : Lista produtos.

- Categoria:
    - `POST /category` : Adiciona categoria.
    - `GET /category` : Lista todas as categorias.

- Usuário:
    - `POST /users` : Cadastra usuário.
    - `POST /session` : Login de usuário.
    - `GET /me` : Dados do usuário.
 



