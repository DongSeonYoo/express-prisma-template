# express-ts-prisma template for me

**base on prisma - postgres**

## start

```shell
git clone https://github.com/DongSeonYoo/express-prisma-template.git

npm install

npm run dev
```

## structure

```shell
.
├── README.md
├── package-lock.json
├── package.json
├── src
│   ├── app.ts		# entry point
│   ├── configs
│   │   └── env.ts	# global env variable
│   └── server.ts
└── tsconfig.json
```

### package.json

```shell
{
    "name": "express-prisma-template",
    "version": "1.0.0",
    "description": "",
    "main": "index.js",
    "scripts": {
        "dev": "nodemon --exec ts-node src/app.ts",
        "test": "echo \"Error: no test specified\" && exit 1"
    },
    "keywords": [],
    "author": "",
    "license": "ISC",
    "devDependencies": {
        "@types/express": "^4.17.21",
        "@types/jsonwebtoken": "^9.0.5",
        "@types/multer": "^1.4.11",
        "@types/multer-s3": "^3.0.3",
        "@types/node": "^20.10.6",
        "@types/pg": "^8.10.9",
        "express": "^4.18.2",
        "pg": "^8.11.3",
        "typescript": "^5.3.3"
    },
    "dependencies": {
        "@aws-sdk/client-s3": "^3.484.0",
        "@prisma/client": "^5.7.1",
        "bcrypt": "^5.1.1",
        "cookie-parser": "^1.4.6",
        "dotenv": "^16.3.1",
        "jsonwebtoken": "^9.0.2",
        "multer": "^1.4.5-lts.1",
        "multer-s3": "^3.0.1",
        "nodemailer": "^6.9.8",
        "nodemon": "^3.0.2",
        "prisma": "^5.7.1",
        "reflect-metadata": "^0.2.1",
        "ts-node": "^10.9.2"
    }
}
```
