/**
 * Created by buithanhbavuong on 25/05/2016.
 */

Template.recipeSingle.onCreated(function () {
  let self = this;
  self.autorun(function () {
    var id = FlowRouter.getParam('id');
    self.subscribe('recipeSingle',id);
  })
});

Template.recipeSingle.helpers({
  recipe(){
    var id = FlowRouter.getParam('id');
    return Recipes.findOne({_id : id});
  }
});