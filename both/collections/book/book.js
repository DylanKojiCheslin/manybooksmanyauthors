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
  "hasLinkedAuthors": function(){
    return this.links;
  },
  "authors": function(){
    var authorCurssor = {};
    var authorArray = [];
    var getAuthorName = function(element){
      return element.fullName()
    };
    authorCurssor = this.getLinkedAuthor();
    authorArray = authorCurssor.map(getAuthorName);
    return authorArray;
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
