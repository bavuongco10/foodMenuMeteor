/**
 * Created by buithanhbavuong on 25/05/2016.
 */

if (Meteor.isClient) {
  Accounts.onLogin(function () {
    FlowRouter.go('recipe-book');
  });

  Accounts.onLogout(function () {
    FlowRouter.go('recipe-book');
  });
}