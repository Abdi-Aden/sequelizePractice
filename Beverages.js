const {sequelize, DataTypes, Model} = require('./db');

class Beverages extends Model{

}
Beverages.init({
	name: DataTypes.STRING,
   
}, {
	sequelize,
	timestamps: false,
});

module.exports = { Beverages }