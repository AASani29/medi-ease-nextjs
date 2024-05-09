# MediEase

MediEase is a web application that helps users to find the best doctors and hospitals in their area. It also provides a platform for users to book appointments with doctors and hospitals.

## Running the project locally

To run the project locally, you need to have Node.js installed on your machine. You can download Node.js from [here](https://nodejs.org/en). You will also need postgresql installed on your machine. You can download postgresql from [here](https://www.postgresql.org/).

After installing Node.js and postgresql, you need to add a database in postgresql that will work with our Prisma ORM.

### Setting up the database

First, You need to create a `.env` file in the root directory of the project. You can copy the contents of the `.env.example` file and paste it in the .env file. You need to replace the `DATABASE_URL` with the connection string of your postgresql database. For more information on how to create a connection string, you can check the [Prisma documentation](https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch/relational-databases-typescript-postgresql) on how to set up a postgresql database.

Once you have set up the connection string, you can run the following commands to create and push the database schema:

```bash
npx prisma generate

npx prisma db push
```

All the models are defined in the `schema.prisma` file in the `/prisma` directory. You can modify the models in the `schema.prisma` file and run the above commands to update the database schema. The corresponding schemas for hook-form zod validation are defined in the `/schemas` directory within the `index.ts` file.

### Running the development server

After setting up the database, you can run the following command to start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Create an Admin User

On startup, the application will render the Landing page. From there one can login to an existing account. But to create an Admin user, one must first need to go to the `/register` route and create an account. After creating an account, one can go to the `/login` route and login to the admin account.

### Admin Dashboard

After logging in as an admin, one can access the admin dashboard by clicking on the `Admin Dashboard` button in the profile page. The admin dashboard provides the following functionalities:

- Add patients
- Edit patient details
- Add doctors
- Edit doctor details
- Add doctor availability
- Add medcinies
- Edit medicine details
- Add tests
- Edit test details
- Deleting patients, doctors, medicines, and tests.
- But one admin cannot delete another admin.

### Patient Dashboard
