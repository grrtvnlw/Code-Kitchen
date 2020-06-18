'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Categories', [
      {
        name: 'Breakfast',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Lunch',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Dinner',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Simple',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Fancy',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ])

    await queryInterface.bulkInsert('Recipes', [
      {
        name: 'The Meat Stick',
        review: 'much meat',
        description: 'a stick of meat',
        url: 'http://meat.com',
        likes: 0,
        vegetarian: false,
        vegan: false, 
        glutenfree: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'The Meat Stick',
        review: 'much meat',
        description: 'a stick of meat',
        url: 'http://meat.com',
        likes: 0,
        vegetarian: false,
        vegan: false, 
        glutenfree: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ], {});

    return await queryInterface.bulkInsert('RecipesCategories', [
      {
        recipesId: 1,
        categoriesId: 1,
      },
      {
        recipesId: 1,
        categoriesId: 2,
      },
      {
        recipesId: 1,
        categoriesId: 4,
      },
      {
        recipesId: 2,
        categoriesId: 3,
      },
      {
        recipesId: 2,
        categoriesId: 5,
      },  
    ])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('RecipesCategories', null, {});
    await queryInterface.bulkDelete('Recipes', null, {});
    await queryInterface.bulkDelete('Categories', null, {});
  }
};
