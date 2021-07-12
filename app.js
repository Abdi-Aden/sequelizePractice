

const {sequelize, DataTypes, Model} = require('./db');

const { Restaurant } = require('./Restaurant');
const { Menu } = require('./Menu');
const { Meals } = require('./Meals');
const { Beverages } = require('./Beverages');



// association between Restaurant and Menu//
Menu.belongsTo(Restaurant);
Restaurant.hasMany(Menu);

// association between Menu and Meals//
Meals.belongsTo(Menu);
Menu.hasMany(Meals);


// association between Menu and Beverages//
Beverages.belongsTo(Menu);
Menu.hasMany(Beverages);

module.exports = { Restaurant, Menu, Meals,Beverages };