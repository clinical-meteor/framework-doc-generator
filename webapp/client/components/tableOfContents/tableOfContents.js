let hashWithoutHash = () => {
  return location.hash.replace("#", "");
};

Session.setDefault("urlHash", hashWithoutHash());

$(window).on("hashchange", () => Session.set("urlHash", hashWithoutHash()));

Session.setDefault("showAllTypes", false);

Template.tableOfContents.events({
  "change .show-all-types input"(event) {
    Session.set("showAllTypes", event.target.checked);
  }
});

Template.tableOfContents.helpers({
  getApiColor: function (){
    console.log('getApiColor');

    if (this && this.name) {
      console.log('this.name', this.name);

      if (this.name.indexOf("{{") > -1) {
        return "orange";
      } else if (this.name.indexOf("..") > -1) {
        return "green";
      } else {
        return "blue";
      }
    }
  },
  getName() {
    if (this.name.indexOf('{{') > -1) {
      return this.name.substring(this.name.indexOf('{'), this.name.length);
    } else if (this.name.indexOf('..') > -1) {
      return this.name.substring(this.name.indexOf('.') + 1, this.name.length);
    } else {
      return this.name;
    }
  },
  current() {
    return Session.get("urlHash") === this.id ? "current" : "";
  },
  showAllTypes() {
    return Session.get("showAllTypes");
  },
});
