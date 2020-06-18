'use strict';
module.exports = (sequelize, DataTypes) => {
  const recipes = sequelize.define('recipes', {
    name: DataTypes.TEXT,
    review: DataTypes.TEXT,
    description: DataTypes.TEXT,
    url: DataTypes.TEXT,
    likes: DataTypes.INTEGER,
    vegetarian: DataTypes.BOOLEAN,
    vegan: DataTypes.BOOLEAN,
    glutenfree: DataTypes.BOOLEAN
  }, {});
  recipes.associate = function(models) {
    recipes.belongsToMany(models.Categories, { through: 'RecipesCategories'});
  };
  return recipes;
};