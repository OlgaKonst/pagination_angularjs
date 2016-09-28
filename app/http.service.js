angular.module('myApp')
  .service('usersService', function($http) {
    this.getUsers = function(link) {
      return $http.get(link).then(function(response) {
          console.log('ok');
          //toastr.success(angular.toJson('data length: ' + response.data.length, true), ':)');
          return response.data;
        })
        .catch(function(reason) {
          console.error('не ok', reason);
         // toastr.error(angular.toJson(reason.data, true), ':\'(');
         // defer.reject(reason);
        });

   /*   catch(function(reason) {
        console.error('not good', reason);
});*/
}
});