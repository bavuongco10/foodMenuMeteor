Template.newRecipe.onCreated(function(){
  let self = this;
  self.autorun(function () {
    self.subscribe('recipes');
  });
});

Template.newRecipe.helpers({
  newRecipeMode(){
    return Session.get('newRecipeMode');
  }
});

Template.newRecipe.events({
  'click .new-recipe'(){
    Session.set('newRecipeMode', !Session.get('newRecipeMode'));
  },
});

Template.newRecipe.onCreated(function () {
  //add your statement here
});

Template.newRecipe.onRendered(function () {
  //add your statement here
});

Template.newRecipe.onDestroyed(function () {
  //add your statement here
});

