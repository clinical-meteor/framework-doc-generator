

if (Meteor.isClient){
  Meteor.startup(function () {

  });
}

if (Meteor.isServer){
  Meteor.startup(function () {
    Env.allow({});
  });
}


Studies = new Mongo.Collection('studies');
