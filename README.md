dropfile
========
angularjs dropfile module
[Usage]
--------
index.html

    <any drop="handleDrop" ></any>

ctrl.js

    var app = angular.module('myApp', ['dropfile']);
    app.controller('DropCtrl', function($scope) {
        $scope.handleDrop = function(files) {
            file = files[0]
		        $scope.Name = file.name
		        //to do
		        //.....
        }
    });
