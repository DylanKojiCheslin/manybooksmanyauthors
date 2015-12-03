Meteor.startup(function(){
  if (! AuthorCollection.findOne()) {
    AuthorCollection.insert(
      {"givenName":"dude",
       "famlyName":"bro",
       "middleName":"man",
      }
    );
    AuthorCollection.insert(
      {"givenName":"Johny",
       "famlyName":"Smith",
       "middleName":"pertender",
      }
    );
    AuthorCollection.insert(
      {"givenName":"Sun",
       "famlyName":"Wu",
       "middleName":"Changqing",
      }
    );
  }
  if (! BookCollection.findOne()) {
    BookCollection.insert(
      {"title":"how to do stuff",
       "subtitle":"and other things",
       "description":"ever sense the ... ya know that past people have like ... done stuff with and to things and stuff.",
      }
    );
    BookCollection.insert(
      {"title":"Being smart for Dummies",
       "subtitle":"Wow your friends with your Brains",
       "description":"from the award winning for Dummies book seires, a guide on how to not be a Dummie",
      }
    );
    BookCollection.insert(
      {"title":"The Art of War",
       "subtitle":"the ultimate guide to strategy",
       "description":"Know your enimes as you know yourself",
      }
    );
  }

});
