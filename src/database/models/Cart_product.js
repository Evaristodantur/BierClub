module.exports = (sequelize, dataTypes) => {
    let alias = "Cart_Product";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        createAt: {
            type: dataTypes.DATE
        },
        updatedAt: {
            type: dataTypes.DATE
        }
    };
    let config = {
        tableName: "cart_product",
        timestamps: false
    };

    const Cart_Product = sequelize.define(alias, cols, config);

    return Cart_Product;
}