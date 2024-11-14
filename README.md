# Library Management System API

A backend API for a Library Management System, enabling CRUD operations for books, members, and borrowing activities. Built using **Node.js**, **Express**, **Prisma ORM**, **PostgreSQL**, and **TypeScript**.

## Live URL

[Library Management System API Live URL](https://library-management-system-api-nu.vercel.app/)

## Technology Stack & Packages

- **Node.js** - Backend runtime
- **Express** - Web framework for handling routes and middleware
- **TypeScript** - Type safety and improved developer experience
- **Prisma ORM** - For database schema, migrations, and querying
- **PostgreSQL** - Relational database for data storage
- **UUID** - Unique identifier for each record in all tables

## Features & Endpoints

1. **Book CRUD Operations**

   - `POST /api/books`
   - `GET /api/books`
   - `GET /api/books/:bookId`
   - `PUT /api/books/:bookId`
   - `DELETE /api/books/:bookId`

2. **Member CRUD Operations**

   - `POST /api/members`
   - `GET /api/members`
   - `GET /api/members/:memberId`
   - `PUT /api/members/:memberId`
   - `DELETE /api/members/:memberId`

3. **Borrow & Return Books**
   - `POST /api/borrow`
   - `POST /api/return`
   - `GET /api/borrow/overdue`

## Setup Instructions

1.  **Clone the Repository**

    ```bash
    git clone https://github.com/MoniruzzamanBillal/library_management_server
    ```

2.  **Install Dependencies**

    ```bash
    npm install
    ```

3.  **Environment Variables Create a .env file in the project root and add the following:**

    ```makefile
    DATABASE_URL="postgresql://postgres.nryiatoebuagkcwpojtz:qaSrLPp6SF3XgeEf@aws-0-ap-southeast-1.pooler.supabase.com:6543/postgres?pgbouncer=true"


    ```

    ```makefile
    DIRECT_URL="postgresql://postgres.nryiatoebuagkcwpojtz:qaSrLPp6SF3XgeEf@aws-0-ap-southeast-1.pooler.supabase.com:5432/postgres"
    ```

    ```makefile
    ENABLE_PRISMA_CACHING=false
    ```

4.  **Initialize Prisma and Migrate Database**

    ```bash
    npx prisma migrate dev --name init
    ```

5.  **Run the Application**

    ```bash
    npm run dev
    ```

### Key Features & Functionality

- Full CRUD support for book and member management.
- Borrow and return tracking for books.
- Overdue book reporting, with 14-day borrowing policy.
- Robust error handling for all endpoints.
- Known Issues/Bugs
