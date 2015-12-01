Template.listBooks.helpers({
  ofTheBooks: function(){
    return BookCollection.find();
  }
});
