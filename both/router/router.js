Router.configure({
  layoutTemplate: 'layout',
  trackPageView: true
});

Router.route('/', function () {
  this.render('main');
});
