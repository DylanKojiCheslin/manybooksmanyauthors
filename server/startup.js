Meteor.startup(function(){
  if (! AuthorCollection.findOne()) {
    AuthorCollection.insert(
      {"givenName":"dude",
       "famlyName":"bro",
       "middleName":"man",
      },
    );
  }
  if (! BookCollection.findOne()) {
    BookCollection.insert(
      {"title":"how to do stuff",
       "subtitle":"and other things",
       "description":"ever sense the ... ya know that past people have like ... done stuff with and to things and stuff.",
      },
    );
  }

});
