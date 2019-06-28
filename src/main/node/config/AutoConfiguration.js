const Component = require("leap-core").Component;
const MySqlDatasourceFactory = require("leap-data-mysql").MySqlDatasourceFactory;

class AutoConfiguration {
    
    static preLoad(environment) {

        const host = environment.leap.datasource.mysql.host;
        const user = environment.leap.datasource.mysql.user;
        const pass = environment.leap.datasource.mysql.pass;
        const database = environment.leap.datasource.mysql.database;
        const connectionLimit = environment.leap.datasource.mysql.poolsize;

        const mysqlDatasourceFactory = new MySqlDatasourceFactory(host, user, pass, database, connectionLimit);

        const mysqlDatasource = mysqlDatasourceFactory.create();

        const mySqlDataSourceComponent = new Component("datasource", "leap-data-mysql/MySqlDatasource", MySqlDatasourceFactory, []);
        mySqlDataSourceComponent.setInstance(mysqlDatasource);

        return mySqlDataSourceComponent;
    }

    static postLoad(components) {
    }
}

module.exports = AutoConfiguration;