var app = angular.module('myApp', ['dropfile']);

app.factory('formDataObject', function() {
  return function(data) {
    var fd = new FormData();
    angular.forEach(data, function(value, key) {
      fd.append(key, value);
    });
    return fd;
  };
});

app.controller('DropCtrl', function($http, formDataObject, $scope) {
    $scope.handleDrop = function(files) {
		file = files[0]
		$http({method:'POST', 
		url:"/fileupload",
		transformRequest:formDataObject,
		data: {'file':file},
		headers:{
			'Content-Type': undefined
			}
		}).success(function(data){
			//todo
		});		
    }
});
