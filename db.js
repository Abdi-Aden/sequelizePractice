const {Sequelize, DataTypes, Model} = require('sequelize');

const sequelize = new Sequelize('database', 'abdi','Abdi.Aden', {
	dialect: 'sqlite',
	storage : './restaurant.sqlite',
	logging: true
} )



module.exports = {sequelize, DataTypes, Model};