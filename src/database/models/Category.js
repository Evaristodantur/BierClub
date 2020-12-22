module.exports = (sequelize, dataTypes) => {
    let alias = "Categories";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING(61)
        },
        status: {
            type: dataTypes.INTEGER
        },
        createAt: {
            type: dataTypes.DATE
        },
        updatedAt: {
            type: dataTypes.DATE
        }
    };
    let config = {
        tableName: "categories",
        timestamps: false
    };

    const Category = sequelize.define(alias, cols, config);

    return Category;
}