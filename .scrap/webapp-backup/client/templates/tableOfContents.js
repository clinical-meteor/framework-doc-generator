let hashWithoutHash = () => {
  return location.hash.replace("#", "");
};

Session.setDefault("urlHash", hashWithoutHash());

$(window).on("hashchange", () => Session.set("urlHash", hashWithoutHash()));

Session.setDefault("showAllTypes", false);

Template.nav.events({
  "change .show-all-types input"(event) {
    Session.set("showAllTypes", event.target.checked);
  }
});

Template.nav.helpers({
  getName() {
    if (this.name.indexOf('{') > -1) {
      return this.name.substring(this.name.indexOf('{'), this.name.length);
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
