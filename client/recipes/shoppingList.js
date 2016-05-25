/**
 * Created by buithanhbavuong on 25/05/2016.
 */
Template.shoppingList.onCreated(function () {
  let self = this;
  self.autorun(function () {
    self.subscribe('recipes');
  })
});

Template.shoppingList.helpers({
  recipes(){
    console.log("shoppinglist");
    return Recipes.find({
      inMenu : true,
      ingredients: {$ne : null }
    });
  }
});