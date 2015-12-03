Author = ManyModel.extendAndSetupCollection("author");
AuthorCollection = Author.collection;


Author.appendSchema({
  "givenName":{
      type: String,
      max: 30
   },
   "famlyName":{
     type: String,
     max: 30
   },
   "middleName":{
     type: String,
     max: 30,
     optional: true
   },
});

Author.methods({
	"fullName": function(){
		return this.givenName + " " + this.middleName + " " + this.famlyName;
	},
	"authorSlug": function(){
		return this._id;
	},
  "listFullTitlesOfBooksWritenBy": function(){
    var bookCurssor = {};
    var bookArray = [];
    var getBookName = function(element){
      return element.fullTitle()
    };
    bookCurssor = this.getLinkedBook();
    bookArray = bookCurssor.map(getBookName);
    return bookArray;
    }
});
