var relationsship1 = {
  name: "zero",
  friends: ["nero", "hero", "xero"],
  logFriends: function () {
    var that = this;
    this.friends.forEach(function (friend) {
      console.log(that.name, friend);
    });
  },
};
relationsship1.logFriends();

// change

const relationsship2 = {
  name: "zero",
  friends: ["nero", "hero", "xero"],
  logFriends() {
    this.friends.forEach((friend) => {
      console.log(this.name, friend);
    });
  },
};
relationsship2.logFriends();
