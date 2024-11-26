import { DataSource } from "typeorm";

export default new DataSource({
    type: "mysql",
    host: process.env.MYSQL_HOST,
    port: 3306,
    username: 'vinay',
    password: "Vinay@123",
    database:'finance_management',
    entities: ["./entities/*.ts"], // Path to your entity files
    migrations: ["./migrations/*.ts"], // Path to your migration files
    synchronize: false, // Ensure this is false to use migrations
    logging: true, // Enables logging for debugging
})
