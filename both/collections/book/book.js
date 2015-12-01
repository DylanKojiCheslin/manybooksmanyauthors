Book = ManyModel.extendAndSetupCollection("book");
BookCollection = Book.collection;


Book.appendSchema({
  "title":{
      type: String,
      max: 60
   },
   "subtitle":{
     type: String,
     max: 60
   },
   "description":{
     type: String,
     max: 300,
     optional: true
   },

});

Book.methods({
  "fullTitle": function(){
  	return this.title + " " + this.subtitle;
  },
  "bookSlug": function(){
  	return this._id;
  },
  "authors": function(){
      return "um, one or more people or something?";
    }
});

// genre
// pages
// published
// formats
// ageLevel
// classification
// isbn
// isbn13
