module.exports = (sequelize, dataTypes) => {
    let alias = "Carts";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        status: {
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
        tableName: "carts",
        timestamps: false
    };

    const Cart = sequelize.define(alias, cols, config);

    Cart.associate = function(models) {
        Cart.belongsToMany(models.Products, {
            as: "products",
            through: "cart_product",
            foreignKey: "cart_id",
            otherKey: "product_id",
            timestamps: false
        });

        Cart.belongsToMany(models.Users, {
            as: "users",
            through: "user_cart",
            foreignKey: "cart_id",
            otherKey: "user_id",
            timestamps: false
        });
    }

    return Cart;
}