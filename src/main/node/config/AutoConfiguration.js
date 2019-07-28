const Component = require("leap-core").Component;
const MySqlDatasourceFactory = require("leap-data-mysql").MySqlDatasourceFactory;

class AutoConfiguration {
    
    static preLoad(environment) {

        const datasourceConfig = environment.leap.datasource;
        
        const mysqlDatasourceFactory = new MySqlDatasourceFactory(datasourceConfig);

        const mysqlDatasource = mysqlDatasourceFactory.create();

        const mySqlDataSourceComponent = new Component("datasource", "leap-data-mysql/MySqlDatasource", MySqlDatasourceFactory, []);
        mySqlDataSourceComponent.setInstance(mysqlDatasource);

        return mySqlDataSourceComponent;
    }

    static postLoad(components) {
    }
}

module.exports = AutoConfiguration;