/**
 * Created by buithanhbavuong on 24/05/2016.
 */
Recipes = new Mongo.Collection('recipes');

Recipes.allow({
  insert(userId,doc){
    return !!userId;
  },

  update(userId,doc){
    return !!userId;
  }
});

Meteor.methods({
  'recipes.inMenu'(recipeId,inMenu){
    check(recipeId,String);
    check(inMenu,Boolean);
    console.log("inmenu");
    if (!Meteor.userId()){
      throw new Meteor.Error('not-authorize');
    }

    Recipes.update(recipeId,{$set : {inMenu : inMenu} });
  },

  'recipes.delete'(recipedId){
    console.log("remove");

    if (!Meteor.userId()){
      throw new Meteor.Error('not-authorize');
    }

    Recipes.remove(recipedId);
  }
});

Ingredient = new SimpleSchema({
  name: {
    type: String,
  },
  amount: {
    type : String,
  },
});

RecipeSchema = new SimpleSchema({
  name : {
    type : String,
    label : "Name"
  },
  desc : {
    type : String,
    label : "Description"
  },
  ingredients :{
    type : [Ingredient],
    optional:true,
  },
  inMenu : {
    type : Boolean,
    defaultValue : false,
    optional : true,
    autoform :{
      type : "hidden",
    }
  },
  author : {
    type : String,
    label : "Author",
    autoValue(){
      return this.userId;
    },
    autoform:{
      type : "hidden"
    }
  },
  createAt :{
    type : Date,
    label : "Create At",
    autoValue(){
      return new Date();
    },
    autoform:{
      type :"hidden"
    }
  }
});

Recipes.attachSchema(RecipeSchema);