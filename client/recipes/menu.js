Template.menu.onCreated(function() {
  let self = this;
  self.autorun(function () {
  self.subscribe('recipes');
  });
});

Template.menu.helpers({
  recipes(){
    return Recipes.find({inMenu: true},{sort : {createAt : -1 }});
  },
});

Template.menu.events({
  //add your events here
});

Template.menu.onCreated(function () {
  //add your statement here
});

Template.menu.onRendered(function () {
  //add your statement here
});

Template.menu.onDestroyed(function () {
  //add your statement here
});

