module.exports = (sequelize, dataTypes) => {
    let alias = "Products";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: dataTypes.STRING(61),
            allowNull: false
        },
        precio: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        descuento: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        stock: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        descripcion: {
            type: dataTypes.STRING(280),
            allowNull: true
        },
        createAt: {
            type: dataTypes.DATE
        },
        updatedAt: {
            type: dataTypes.DATE
        }
    };
    let config = {
        timestamps: false
    };

    const Product = sequelize.define(alias, cols, config);

    return Product;
}