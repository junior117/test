angular.module('app', [])

.controller('mainCtrl', function ($scope) {
	$scope.btns = btns
})


var btns = {
	Delete: "btn-danger",
	Edit:"btn-primary",
	Done: "btn-success"
}