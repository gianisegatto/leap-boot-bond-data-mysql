const Component = require("leap-core").Component;
const MySqlDatasourceFactory = require("leap-data-mysql").MysqlDatasourceFactory;

class AutoConfiguration {
    
    static load(environment) {

        const host = environment.leap.datasource.mysql.host;
        const user = environment.leap.datasource.mysql.user;
        const pass = environment.leap.datasource.mysql.pass;
        const database = environment.leap.datasource.mysql.database;
        const connectionLimit = environment.leap.datasource.mysql.pool.size;

        const mysqlDatasourceFactory = new MySqlDatasourceFactory(host, user, pass, database, connectionLimit);

        const mysqlDatasource = mysqlDatasourceFactory.create();

        const mySqlDataSourceComponent = new Component("datasource", "leap-data-mysql/MySqlDatasource", MySqlDatasourceFactory, []);
        mySqlDataSourceComponent.setInstance(mysqlDatasource);

        return [mySqlDataSourceComponent];
    }
}

module.exports = AutoConfiguration;