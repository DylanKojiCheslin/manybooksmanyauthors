Template.authorPartial.events({
  "click .author-two-way-link": function(e){
     e.preventDefault();
     var oldTwoWayLink = Session.get('TwoWayLink');
     var oldTwoWayLinkType = Session.get('TwoWayLinkType');
     if (oldTwoWayLink) {
       if (oldTwoWayLinkType == "book") {
        this.linkBook(oldTwoWayLink);
         $(".being-two-way-linked").removeClass("being-two-way-linked");
         Session.set("TwoWayLink", undefined);
         Session.set("TwoWayLinkType", undefined);
       }
     }
     else {
       Session.set("TwoWayLink", this._id);
       Session.set("TwoWayLinkType", "author");
       $(e.currentTarget).addClass("being-two-way-linked");
     }
  },
  "click .author-unlink": function(e){
    e.preventDefault();
    var oldTwoWayLink = Session.get('TwoWayLink');
    var oldTwoWayLinkType = Session.get('TwoWayLinkType');
    if (oldTwoWayLink) {
      if (oldTwoWayLinkType == "book") {
       this.unlinkBook(oldTwoWayLink);
        $(".being-two-way-linked").removeClass("being-two-way-linked");
        Session.set("TwoWayLink", undefined);
        Session.set("TwoWayLinkType", undefined);
      }
    }
  },
});
