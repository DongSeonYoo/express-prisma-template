# express-ts-prisma template for me

**base on prisma - postgres**

## start

```shell
git clone https://github.com/DongSeonYoo/express-prisma-template.git

npm install

prisma init

npx prisma db pull # You need to create dotenv

npm run dev
```

## .env

```shell
PORT=

DATABASE_URL=postgresql://janedoe:mypassword@localhost:5432/mydb
```

## structure

```shell
src/
├── app.ts
├── configs
│   └── env.ts
├── database
│   └── prisma.database.ts
├── interfaces
│   └── IAccount.ts
├── middlewares
│   ├── error-handling.ts
│   └── validate.middleware.ts
├── routes
│   └── test.routes.ts
├── services
│   ├── auth.service.ts
│   └── index.ts
└── utils
    ├── loaders
    │   ├── express.ts
    │   └── index.ts
    └── modules
        ├── async-wrap.module.ts
        ├── custom-error.module.ts
        ├── http-status.module.ts
        └── response-entity.module.ts
```
