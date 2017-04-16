/*global define*/
'use strict';

// set up base routes
define(['angular', 'app'], function (angular, app) {

	return app.config([ '$routeProvider', function ($routeProvider) {

		$routeProvider
			.when('/', {templateUrl: 'html/home.html', controller:  'ViewHomeController'})
			.when('/about', {templateUrl: 'html/about.html'})
			.when('/contact', {templateUrl: 'html/contact.html'})
			.otherwise({redirectTo: '/'});

	}]);
	
});