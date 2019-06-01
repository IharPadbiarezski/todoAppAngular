let todosApp = angular.module('todosApp', []);

todosApp.controller('todosAppController', function($scope) {
	$scope.tasks = todoModel.read();
	$scope.newTask = null;

	$scope.addButtonClick = function() {
		todoModel.addItem(
			$scope.newTask.name,
			$scope.newTask.duedate.toLocaleDateString(),
			$scope.newTask.description,
			$scope.newTask.completed
		);
		todoModel.save();
	};
});
