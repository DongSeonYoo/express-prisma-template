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
src
├── apis
│   ├── test
│   │   └── test.ts
│   └── user
│       └── user.ts
├── app.ts
├── configs
│   └── env.ts
├── middlewares
│   └── error-handling.ts
└── utils
    ├── constants
    │   └── validate-message.ts
    ├── loaders
    │   ├── express.ts
    │   ├── index.ts
    │   └── set-route.ts
    └── modules
        ├── async-wrap.ts
        ├── custom-error.ts
        ├── http-status.ts
        ├── response-entity.ts
        └── validater.ts
```
