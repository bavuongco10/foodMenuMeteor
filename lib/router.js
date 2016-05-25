/**
 * Created by buithanhbavuong on 24/05/2016.
 */
FlowRouter.triggers.enter([function (context,redirect) {
  if (!Meteor.userId()){
    FlowRouter.go('home');
  }
}]);

FlowRouter.route('/',{
  name:'home',
  action(){
    if (Meteor.userId()){
      FlowRouter.go('recipe-book');
    }
    BlazeLayout.render('homeLayout');
  }
});

FlowRouter.route('/recipe-book',{
  name :'recipe-book',
  action() {
    BlazeLayout.render('mainLayout',{main : 'recipes'});
  }
});

FlowRouter.route('/recipe/:id',{
  name : 'recipeSingle',
  action (){
    BlazeLayout.render('mainLayout',{main : 'recipeSingle'});
  }
});

FlowRouter.notFound = {
  action: function() {
    FlowRouter.go('home');
  }
};

FlowRouter.route('/menu',{
  name : 'menu',
  action (){
    BlazeLayout.render('mainLayout',{ main:'menu'});
  }
});

FlowRouter.route('/shopping-list',{
  name : 'shopping-list',
  action (){
    BlazeLayout.render('mainLayout',{ main:'shoppingList'});
  }
});