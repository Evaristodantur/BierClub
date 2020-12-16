module.exports = (sequelize, dataTypes) => {
    let alias = "Productos";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: dataTypes.STRING
        }
    };
    let config = {
        tableName: "productos",
        timestamps: false
    };

    const Producto = sequelize.define(alias, cols, config);

    return Producto;
}