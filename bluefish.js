if (Meteor.isClient) {
  // This code only runs on the client
  Template.body.helpers({
    fishes: [
      { text: "pygmy angelfish",imageurl:"http://www.seascapestudio.net/reference/fishes/centropyge_argi.jpg" },
      { text: "blue dot grouper",imageurl:"http://www.richard-seaman.com/Underwater/Egypt/Highlights/PeacockGrouper.jpg" },
      { text: "blue line grouper",imageurl:"http://www.aquariumdomain.com/images/fish_marine/grouper_blueline2.jpg" },
      {text:  "teira batfish",imageurl:"http://www.aquariumdomain.com/images/fish_marine/tieraBatfish8.jpg"},
      {text:  "convict blenny",imageurl:"http://www.roslyndakin.com/wp-content/uploads/2011/01/convictadult.jpg"}
    ]
  });
}