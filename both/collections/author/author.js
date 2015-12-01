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
  "listBooksWritenBy": function(){
      return "no, you list books writen by!";
    }
  }
});
