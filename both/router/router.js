Router.configure({
  layoutTemplate: 'layout',
  trackPageView: true
});

Router.route('/', function () {
  this.render('main');
});

Router.route('/author/:_id', function () {
  var authorData = Meteor.author.findOne({_id: this.params._id});
  this.render("author", {data: authorData});
});

Router.route('/book/:_id', function () {
  var bookData = Meteor.book.findOne({_id: this.params._id});
  this.render('book', {data: bookData});
});
