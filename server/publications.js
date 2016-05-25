/**
 * Created by buithanhbavuong on 25/05/2016.
 */
Meteor.publish('recipes',function () {
  return Recipes.find({author : this.userId});
});

Meteor.publish('recipeSingle',function (id) {
  check(id,String);
  return Recipes.find({_id:id});
});