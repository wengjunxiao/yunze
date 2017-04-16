/*global define*/
'use strict';

define(['angular', 'app'], function (angular, app) {

	return app.controller("ViewHomeController", function ($scope) {
		console.log('ViewHomeController working');
		var currIndex = 0;
		$scope.myInterval = 5000;
        $scope.slides = [
            {text: 'one', image: '/img/jiujiao.png', id: currIndex++},
            {text: 'two', image: '/img/lvxing.png', id: currIndex++},
            {text: 'three', image: '/img/yishu.png', id: currIndex++},
            {text: 'four', image: '/img/touzi.png', id: currIndex++},
        ];
        
	});
	
});