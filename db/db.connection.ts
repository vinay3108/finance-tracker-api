import { DataSource } from "typeorm";

const MySqlDataSource = new DataSource({
    type: "mysql",
    host: process.env.MYSQL_HOST,
    port: parseInt(process.env.MYSQL_PORT || "3306", 10),
    username: process.env.MYSQL_USERNAME,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
})
export const connectMySql = async () => {
    try {
        // const dataSource = await MySqlDataSource.initialize();
        console.log("Data Source has been initialized!--------------------");
        
        return true; // Return the connected instance
    } catch (err) {
        console.error("Error during Data Source initialization", err);
        throw err; // Rethrow the error to ensure the caller is aware of the failure
    }
};
