/*global define*/
'use strict';

define(['angular', 'app'], function (angular, app) {

	return app.controller("ViewHomeController", function ($scope) {
		console.log('ViewHomeController working');
		var currIndex = 0;
		$scope.myInterval = 5000;
        $scope.slides = [
            {text: 'one', image: '/img/酒窖.png', id: currIndex++},
            {text: 'two', image: '/img/旅行.png', id: currIndex++},
            {text: 'three', image: '/img/艺术.png', id: currIndex++},
            {text: 'four', image: '/img/投资.png', id: currIndex++},
        ];
        
	});
	
});