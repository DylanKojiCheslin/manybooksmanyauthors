Template.listAuthors.helpers({
  ofTheAuthors: function(){
    return AuthorCollection.find();
  }
});
