var app = angular.module('taskApp', []);

app.controller('TaskController', function ($scope) {
  $scope.tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  $scope.filteredTasks = $scope.tasks;
  $scope.notification = '';
  $scope.isDarkMode = false;

  // Add a new task
  $scope.addTask = function () {
    if ($scope.newTask) {
      const newTask = {
        text: $scope.newTask,
        completed: false,
        timestamp: new Date().toLocaleString()
      };
      $scope.tasks.push(newTask);
      $scope.saveTasks();
      $scope.newTask = '';
      $scope.showNotification('Task added successfully!');
    }
  };

  // Remove a task
  $scope.removeTask = function (index) {
    $scope.tasks.splice(index, 1);
    $scope.saveTasks();
    $scope.showNotification('Task removed!');
  };

  // Toggle task completion
  $scope.toggleComplete = function (index) {
    $scope.tasks[index].completed = !$scope.tasks[index].completed;
    $scope.saveTasks();
  };

  // Save tasks to local storage
  $scope.saveTasks = function () {
    localStorage.setItem('tasks', JSON.stringify($scope.tasks));
    $scope.filterTasks('all');
  };

  // Filter tasks
  $scope.filterTasks = function (filter) {
    if (filter === 'active') {
      $scope.filteredTasks = $scope.tasks.filter(task => !task.completed);
    } else if (filter === 'completed') {
      $scope.filteredTasks = $scope.tasks.filter(task => task.completed);
    } else {
      $scope.filteredTasks = $scope.tasks;
    }
  };

  // Show notification
  $scope.showNotification = function (message) {
    $scope.notification = message;
    setTimeout(() => {
      $scope.notification = '';
      $scope.$apply();
    }, 2000);
  };

  // Toggle dark mode
  $scope.toggleDarkMode = function () {
    $scope.isDarkMode = !$scope.isDarkMode;
  };
});
        
