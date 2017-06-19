var app = angular.module('myApp',['ngRoute','firebase']);

app.config(function($routeProvider){
  $routeProvider
 .when('/', {
   controller: 'ListController',
   templateUrl: 'Views/list.html'
 })
 .when('/add', {
   controller: 'AddController',
   templateUrl: 'Views/add.html'
 })
 .when('/edit/:id', {
   controller: 'EditController',
   templateUrl: 'Views/edit.html'

 })
 .otherwise({
   redirectTo: '/'
 });
});
app.constant('FBURL',
  'https://fir-test-e1e3f.firebaseio.com/products/'
  //Use the URL of your project here with the trailing slash
);
