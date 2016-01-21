if(Meteor.isClient){
  ActiveLayout.configure({
    hasEntryControls: false,
    help: {
      display: false
    },
    classes: {
      header: "",
      title: "",
      links: ""
    },
    text: {
      title: "Clinical Meteor API",
      logout: "Logout"
    }
  });
}
