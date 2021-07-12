
const {sequelize, DataTypes, Model} = require('./db');

class Menu extends Model{

}
Menu.init({
	meals: DataTypes.STRING,
    beverage: DataTypes.STRING,

}, {
	sequelize,
	timestamps: false,
});

module.exports = { Menu }
