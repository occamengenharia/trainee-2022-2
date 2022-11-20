# NextJS + Prisma + PostgreSQL

## Repositório original da integração NextJS + Prisma

- [NextJS + Prisma](https://github.com/souzjfe/nextjs-form-prismajs)

## Dependências

- [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
- [NodeJs](https://nodejs.org/en/)
- [PostgreSQL](https://www.postgresql.org/)
- [PrismaJS](https://www.prisma.io/)

## Configurando o banco de dados

Assim como utilizamos uma IDE para escrever nossos códigos, para manipular um banco de dados nós utilizamos um adiministrador de banco de dados, no nosso caso iremos utilizar o **DBeaver**.

- [Download do DBeaver](https://dbeaver.io/download/)

Agora com o administrador instalado, precisamos escolher o Banco de Dados que iremos utilizar, assim como existem diversas linguagens de programação, existem várias linguagens de manipulação de banco de dados. Alguns exemplos:

- MySQL
- MariaDB
- SQLServer
- DynamoDB
- Oracle
- PostgreSQL

Nós iremos utilizar o **PostgreSQL**, em alguns sistemas operacionais ele já vem instalado, caso não tenha-o instalado, siga os passos de instalação:

- [Download PostgreSQL](https://www.postgresql.org/download/)

## Estabelecendo conexão com o banco de dados

Dentro do DBeaver, seleciona a opção `Nova Conexão`

![conexão com o banco](assets/nova-conexao-banco-de-dados.png)

E em seguida clique em `PostgreSQL` e em `Avançar`, um formulário como mostrado abaixo deve ser exibido:

![conectar banco de dados](assets/conectar-banco-de-dados.png)

Preencha os campos com seguintes dados:

- Host: localhost
- Port: 5432
- Database: postgres
- Username: postgres
- Password: postgres

Se tudo estiver preenchido corretamente, clique em `Ok`

SUCESSO! SEU BANCO DE DADOS ESTÁ PRONTO PARA SER USADO

## Clonar projeto NextJS + PrismaJS

1. Clone o repositório

```zsh
git clone git@github.com:occamengenharia/trainee-2022-2.git
```

2. Abra a pasta clonada

```bash
cd trainee-2022-2/06_Prisma-e-Banco-de-dados/prismajs_db
```

3. Instalar dependências do client

```shell
npm install
```

4. Iniciar client no navegador

```shell
npm run dev
```

Acesse [localhost:3000](http://localhost:3000/)

## Configurando PrismaJS

Prisma é uma ferramenta que surgiu com o intuito de facilitar o desenvolvimento de aplicações frontend que devem se comunicar com um banco de dados. Em termos técnicos, o Prisma é um *ORM (Object-relational-mapping)*, onde as tabelas do banco são representadas por classes e cada entrada no banco é uma instância dessas classes.

### Instalando Prisma no projeto Next

- [Documentação do Prisma](https://www.prisma.io/docs/getting-started/setup-prisma/add-to-existing-project/relational-databases-typescript-postgres)

1. Instale o prisma como dependência de desenvolvimento

```shell
npm install prisma --save-dev
```

2. Inicie o prisma CLI no projeto

```shell
npx prisma
```

3. Execute o comando:
```shell
npx prisma init
```

*Esse comando ira criar uma pasta `prisma` e um arquivo `.env`*

4. Dentro do arquivo `.env` precisamos informar os dados necessários para conexão com PostgreSQL, para isso adicione a variável:

```env
DATABASE_URL="postgresql://USERNAME_POSTGRE:SENHA_POSTGRE@localhost:PORTA?schema=public"
```

*Substituindo `USERNAME_POSTGRE`, `SENHA_POSTGRE` e `PORTA` respectivamente por usuário, senha e porta já configurado em seu banco PostgreSQL.*
