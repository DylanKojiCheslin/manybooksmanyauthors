Template.bookPartial.events({
  "click .book-two-way-link": function(e){
     e.preventDefault();
     var oldTwoWayLink = Session.get('TwoWayLink');
     var oldTwoWayLinkType = Session.get('TwoWayLinkType');
     if (oldTwoWayLink) {
       if (oldTwoWayLinkType == "author") {
        this.linkAuthor(oldTwoWayLink);
         $(".being-two-way-linked").removeClass("being-two-way-linked");
         Session.set("TwoWayLink", undefined);
         Session.set("TwoWayLinkType", undefined);
       }
     }
     else {
       Session.set("TwoWayLink", this._id);
       Session.set("TwoWayLinkType", "book");
       $(e.currentTarget).addClass("being-two-way-linked");
     }
  },
});
