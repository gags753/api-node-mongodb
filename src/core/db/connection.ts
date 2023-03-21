import mongoose from "mongoose";

export const sqliteConnection = new Sequelize('db', 'username', 'password', {
    dialect: 'sqlite',
    storage: './db.sqlite'
});

export const testAutentication = async () => {
    try {
        await sqliteConnection.authenticate()
        console.log('banco de dados conectado')
    } catch (error) {
        console.error('incapaz de se conectar ao banco de dados ', error)
    }
}