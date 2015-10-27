
Fishes = new Mongo.Collection("fishes");
if (Meteor.isClient) {
  // This code only runs on the client
  Template.body.helpers({
    fishes: function () {
      return Fishes.find({});
    }
  });
  Accounts.ui.config({
    passwordSignupFields: "USERNAME_ONLY"
  });
}