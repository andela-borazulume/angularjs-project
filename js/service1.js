var myService = angular.module('myService', []);
myService.factory('myFactory', ['$http',function($http) {
  return {
    getResponse: function(callback) {

    	    	console.log("start the func");

      return $http.get("https://ajax.googleapis.com/ajax/services/search/news?v=1.0&topic=e&callback=callback")
        // .success(callback)
        .error(function(error) {
        	console.log(error);
        });
      // console.log("run the func");
    }
  };
}]);
