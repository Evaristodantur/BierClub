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
        createAt: {
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

    return Cart;
}