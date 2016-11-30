
Studies = new Mongo.Collection('studies');

Router.configure({
  layoutTemplate: 'appLayout'
});

Router.route('/', {
  template: "hello",
  name: "hello",
});
Router.route('/success', {
  template: "success",
  name: "success",
});

if (Meteor.isClient){
  Meteor.startup(function () {

  });
}

if (Meteor.isServer){
  Meteor.startup(function () {
    //Env.allow({});

    // if (Meteor.users.find().count() === 0) {
    //   Accounts.createUser({
    //     username: 'camron',
    //     password: 'camron',
    //     email: 'camron@test.org',
    //     profile: {
    //       fullName: 'Test User',
    //       role: 'Physician',
    //       avatar: '/packages/clinical_accounts-housemd/housemd/allison.camron.jpg',
    //       collaborations: ["ucsf"]
    //     }
    //   });
    // }
    // if (Collaborations.find().count() === 0) {
    //   Collaborations.insert({
    //     _id: "ckcc",
    //     isUnlisted: false,
    //     name: "California Kids Cancer Comparison",
    //     description: "",
    //     collaborators: ["thirteen@test.org", "kutner@test.org"],
    //     administrators: ["thirteen@test.org"],
    //     invitations: [],
    //     requests: [],
    //     requiresAdministratorApprovalToJoin: false
    //   });
    //
    //   try {
    //     var collaboration = Collaborations.findOne({_id: 'ckcc'});
    //     collaboration.addCollaborator("janedoe@test.org");
    //   } catch (e) {
    //     console.log("error", e);
    //   } finally {
    //
    //   }
    //
    //   Collaborations.insert({
    //     _id: "wcdt",
    //     isUnlisted: false,
    //     name: "West Coast Dream Team",
    //     description: "",
    //     collaborators: ["cuddy@test.org"],
    //     administrators: ["cuddy@test.org"],
    //     invitations: [],
    //     requests: [],
    //     requiresAdministratorApprovalToJoin: false
    //   });
    //
    //   Collaborations.insert({
    //     _id: "ucsc",
    //     isUnlisted: false,
    //     name: "UC Santa Cruz",
    //     description: "",
    //     collaborators: ["foreman@test.org", "wcdt"],
    //     administrators: ["foreman@test.org"],
    //     invitations: [],
    //     requests: [],
    //     requiresAdministratorApprovalToJoin: false
    //   });
    //
    //   Collaborations.insert({
    //     _id: "genomics",
    //     isUnlisted: false,
    //     name: "Cancer Genomics",
    //     description: "",
    //     collaborators: ["kutner@test.org", "chase@test.org", "ucsc"],
    //     administrators: ["kutner@test.org"],
    //     invitations: [],
    //     requests: [],
    //     requiresAdministratorApprovalToJoin: false
    //   });
    //
    //   Collaborations.insert({
    //     _id: "ucsf",
    //     isUnlisted: false,
    //     name: "UC San Francisco",
    //     description: "",
    //     collaborators: ["camron@test.org", "house@test.org", "wcdt"],
    //     administrators: ["house@test.org"],
    //     invitations: [],
    //     requests: [],
    //     requiresAdministratorApprovalToJoin: false
    //   });
    //
    //   Collaborations.insert({
    //     _id: "ucla",
    //     isUnlisted: false,
    //     name: "UC Los Angeles Francisco",
    //     description: "",
    //     collaborators: ["wilson@test.org", "wcdt"],
    //     administrators: ["wilson@test.org"],
    //     invitations: [],
    //     requests: [],
    //     requiresAdministratorApprovalToJoin: false
    //   });
    // }


  });
}


//Studies = new Mongo.Collection('studies');
