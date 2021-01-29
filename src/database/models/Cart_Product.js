module.exports = (sequelize, dataTypes) => {
    let alias = "Cart_Product";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        stock_order: {
            type: dataTypes.INTEGER
        },
        product_id: {
            type: dataTypes.INTEGER
        },
        cart_id: {
            type: dataTypes.INTEGER
        },
        createdAt: {
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

    const Product = sequelize.define(alias, cols, config);

    

    return Product;
}