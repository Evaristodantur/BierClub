module.exports = (sequelize, dataTypes) => {
    let alias = "Users";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING(100)
        },
        email: {
            type: dataTypes.STRING(100)
        },
        password: {
            type: dataTypes.STRING(100)
        },
        suscription_status: {
            type: dataTypes.INTEGER
        },  
        password: {
            type: dataTypes.STRING(100)
        },
        admin: {
            type: dataTypes.INTEGER
        },
        verify: {
            type: dataTypes.INTEGER
        },
        verify_code: {
            type: dataTypes.STRING(50)
        },
        createAt: {
            type: dataTypes.DATE
        },
        updatedAt: {
            type: dataTypes.DATE
        }
    };
    let config = {
        tableName: "users",
        timestamps: false
    };

    const User = sequelize.define(alias, cols, config);

    return User;
}