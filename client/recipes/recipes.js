/**
 * Created by buithanhbavuong on 25/05/2016.
 */

Template.recipes.onCreated(function () {
  let self = this;
  self.autorun(function () {
    self.subscribe('recipes');
  })
});

Template.recipes.helpers({
  recipes(){
    return Recipes.find({});
  }
});