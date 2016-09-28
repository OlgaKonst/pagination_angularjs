angular.module('myApp')
  .controller('MainController', ['$scope', 'usersService', function($scope, usersService) {
      $scope.count = 10;
      $scope.currentPage = 0;
      $scope.loading = true;

    $scope.options = [4, 15, 30];

      $scope.changePage = function(index) {
          $scope.currentPage = index;
          $scope.offset = $scope.count * index;
      }
      $scope.$watch('count', function(newValue) {
          console.log('newValue',newValue);
          if(!newValue) return;
          if($scope.users) {
              console.log('777');
              initPagination($scope.users);
          }
      });

    usersService.getUsers('dummy.json')
        .then(initPagination)
        .finally(function() {
          $scope.loading = false;
        });

    function initPagination(data) {
        console.log(222);
      if(!$scope.users) {
        $scope.users = data;
       // console.log($scope.users);
      }
        $scope.totalPages = $scope.count ? Math.ceil($scope.users.length/$scope.count) : 1;
        console.log('$scope.totalPages', $scope.totalPages);
        $scope.pagination = new Array($scope.totalPages);
        console.log($scope.pagination);
    }
  }]);
