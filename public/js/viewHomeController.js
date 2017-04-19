/*global define*/
'use strict';

define(['angular', 'app'], function (angular, app) {

	return app.controller("ViewHomeController", function ($scope) {
		console.log('ViewHomeController working');
		var currIndex = 0;
		$scope.myInterval = 5000;
        $scope.slides = [
            {text: 'one', image: 'img/bg_home_mainv.gif', id: currIndex++},
            {text: 'two', image: 'img/bg_home_mainv2.gif', id: currIndex++},
            {text: 'three', image: 'img/bg_home_mainv3.gif', id: currIndex++},
           // {text: 'four', image: '/img/touzi.png', id: currIndex++},
        ];
        
	});
	
});