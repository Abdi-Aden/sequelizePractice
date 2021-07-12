
const {sequelize, DataTypes, Model} = require('./db');

class Meals extends Model{

}
Meals.init({
	name: DataTypes.STRING,
   
}, {
	sequelize,
	timestamps: false,
});

module.exports = { Meals }