Template.recipe.onCreated(function () {
  let self = this;
  self.autorun(function () {
    self.subscribe('recipes');
  })
});

Template.recipe.helpers({
  updateRecipeId(){
    return this._id;
  },
  editMode(){
    return Session.get('editMode');
  },
});

Template.recipe.events({
  'click .toggle-menu'(e){
    var addOrRemove = $(e.target).attr('class').includes('add');
    Meteor.call('recipes.inMenu',this._id,addOrRemove,function (error,result) {
      if(error){
        return alert(error.reason);
      }
    });
  },
  
  'click .fa-trash'(){
    Meteor.call('recipes.delete',this._id,function(error){
      if(error){
        return alert(error.reason);
      }
    })
  },

  'click .fa-pencil'(){
    console.log('edit');
    Session.set('editMode', !Session.get('editMode'));
    console.log(Session.get('editMode'));
  },

});

Template.recipe.onCreated(function () {
  //add your statement here
});

Template.recipe.onRendered(function () {
  //add your statement here
});

Template.recipe.onDestroyed(function () {
  //add your statement here
});

