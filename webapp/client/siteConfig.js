if(Meteor.isClient){
  Header.configure({
    hasEntryControls: false,
    showHelp: false,
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
