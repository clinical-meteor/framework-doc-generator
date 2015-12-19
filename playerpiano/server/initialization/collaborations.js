Meteor.methods({
  initializeDefaultCollaborations: function (){
    // create collaborations
    Collaborations.upsert({
      _id: "ckcc"
    }, {$set:{
      isUnlisted: false,
      name: "California Kids Cancer Comparison",
      description: "",
      collaborators: ["thirteen@test.org", "kutner@test.org"],
      administrators: ["thirteen@test.org"],
      invitations: [],
      requests: [],
      requiresAdministratorApprovalToJoin: false
    }});

    Collaborations.upsert({
      _id: "wcdt"
    }, {$set:{
      isUnlisted: false,
      name: "West Coast Dream Team",
      description: "",
      collaborators: ["cuddy@test.org"],
      administrators: ["cuddy@test.org"],
      invitations: [],
      requests: [],
      requiresAdministratorApprovalToJoin: false
    }});
    Collaborations.upsert({
      _id: "ucsc"
    }, {$set:{
      isUnlisted: false,
      name: "UC Santa Cruz",
      description: "",
      collaborators: ["foreman@test.org", "wcdt"],
      administrators: ["foreman@test.org"],
      invitations: [],
      requests: [],
      requiresAdministratorApprovalToJoin: false
    }});
    Collaborations.upsert({
      _id: "genomics"
    }, {$set:{
      isUnlisted: false,
      name: "Cancer Genomics",
      description: "",
      collaborators: ["kutner@test.org", "chase@test.org", "ucsc"],
      administrators: ["kutner@test.org"],
      invitations: [],
      requests: [],
      requiresAdministratorApprovalToJoin: false
    }});
    Collaborations.upsert({
      _id: "ucsf"
    }, {$set:{
      isUnlisted: false,
      name: "UC San Francisco",
      description: "",
      collaborators: ["camron@test.org", "house@test.org", "wcdt"],
      administrators: ["house@test.org"],
      invitations: [],
      requests: [],
      requiresAdministratorApprovalToJoin: false
    }});
    Collaborations.upsert({
      _id: "ucla"
    }, {$set:{
      isUnlisted: false,
      name: "UC Los Angeles Francisco",
      description: "",
      collaborators: ["wilson@test.org", "wcdt"],
      administrators: ["wilson@test.org"],
      invitations: [],
      requests: [],
      requiresAdministratorApprovalToJoin: false
    }});

  },
  dropCollaborations: function (){
    Collaborations.remove({});
  }
});
